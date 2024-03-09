import { openai } from "../config/openaiConfig";


export async function chatAI() {
    const completion = await openai.chat.completions.create({
        messages: [{
            role: 'system',
            content: 'Is my model working, How are you doing?,'
        },{
            role : 'system',
            content: 'Message must be a valid json object'
        } 
    ],
        model: "gpt-3.5-turbo",
        response_format: {
            type: 'json_object'
        }
    });
    return completion.choices;
} 