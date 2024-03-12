import { openai } from "../config/openaiConfig";
import { chatPromptText } from "../utilities/chatPrompt";


export async function chatAI(promptChoice :string, userInput :string) {
    const completion = await openai.chat.completions.create({
        messages: [{
            role: 'system',
            content: chatPromptText(promptChoice, userInput)
        },
        {
            role : 'system',
            content: 'Message must be a valid json object'
        } 
    ],
        model: "gpt-3.5-turbo",
        response_format: {
            type: 'json_object'
        }
    });
    return JSON.parse(completion.choices[0].message.content);
} 