import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from openai import OpenAI
# Load environment variables from .env
load_dotenv()

OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
client = OpenAI(api_key=OPENAI_API_KEY) 
app = Flask(__name__)
CORS(app)

def extract_relevant_resume_sections(user_message, resume):
    """
    Simple retrieval: search for keywords in the user message and return relevant resume sections as context.
    """
    if not resume:
        return ""
    context = []
    message_lower = user_message.lower()
    # Check each section for relevant keywords
    # Personal summary
    if 'summary' in resume.get('personal', {}):
        context.append(f"Summary: {resume['personal']['summary']}")
    # Skills
    if any(word in message_lower for word in ['skill', 'expertise', 'proficient', 'language', 'tool']):
        context.append(f"Skills: {', '.join(resume.get('skills', []))}")
    # Experience
    if any(word in message_lower for word in ['experience', 'work', 'job', 'analyst', 'project', 'role', 'responsibility', 'achievement', 'eq bank', 'ernst', 'rbc', 'scotiabank']):
        for exp in resume.get('experience', []):
            context.append(f"{exp['title']} at {exp['company']} ({exp['period']}): {', '.join(exp.get('achievements', []))}")
    # Education
    if any(word in message_lower for word in ['education', 'school', 'university', 'degree', 'rotman', 'waterloo']):
        for edu in resume.get('education', []):
            context.append(f"{edu['degree']} at {edu['school']} ({edu['period']}): {edu.get('details', '')}")
    # Certifications
    if any(word in message_lower for word in ['certification', 'certified', 'certificate', 'cfa', 'azure']):
        for cert in resume.get('certifications', []):
            context.append(f"{cert['name']} ({cert['year']}, {cert['issuer']})")
    # Projects
    if any(word in message_lower for word in ['project', 'achievement', 'competition', 'datathon', 'engine', 'chatbot']):
        for proj in resume.get('projects', []):
            context.append(f"{proj['title']}: {proj['description']}")
    # If nothing matched, just add summary and skills
    if not context:
        context.append(f"Summary: {resume['personal'].get('summary', '')}")
        context.append(f"Skills: {', '.join(resume.get('skills', []))}")
    return '\n'.join(context)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '')
    resume = data.get('resume', None)
    if not user_message:
        return jsonify({'error': 'No message provided'}), 400

    # RAG: Retrieve relevant context from resume
    context = extract_relevant_resume_sections(user_message, resume)
    system_prompt = (
        "You are an AI assistant for Qifan (Sam) Yang's personal website. "
        "Answer questions about his experience, skills, education, and projects based on his CV.\n"
        f"Resume context:\n{context}"
    )

    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_message}
            ],
            max_tokens=300,
            temperature=0.7
        )
        ai_reply = response.choices[0].message.content
        return jsonify({'reply': ai_reply})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True) 
