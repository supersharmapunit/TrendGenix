export const chatPromptText = (promptChoice :string, userInput :string) :string => {
    return `Today, I ${promptChoice == "custom" ? "" : promptChoice} ${userInput}. Generate fifteen social media posts based on the input provided above: five for Twitter, five for LinkedIn, and five for Instagram. Each post should be engaging, informative, and tailored to the respective platform's audience and format.`;
}