const { GoogleGenerativeAI } = require("@google/generative-ai");
const chat = require("../model/chat");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const codePrompt =
  "Only generate code. Do not include any explanation or comments. Return only the final, accurate code output. No text before or after. Now, ";

async function chatController(req, res) {
  try {
    const { prompt, username } = req.body.prompt;
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const newChat = new chat({
      username: username,
      chat: {
        prompt: prompt,
        response: text,
      },
      model: "Text Gemini ",
    });
    await newChat.save();
    res.json({ output: text });
  } catch (error) {
    console.error("Gemini API error:", error);
    res.status(500).json({ error: "Something went wrong." });
  }
}
async function codeController(req, res) {
  try {
    const { prompt, username } = codePrompt + req.body.prompt;
    console.log(prompt);

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const newChat = new chat({
      username: username,
      chat: {
        prompt: prompt,
        response: text,
      },
      model: "Text Gemini ",
    });
    await newChat.save();
    res.json({ output: text });
  } catch (error) {
    console.error("Gemini API error:", error);
    res.status(500).json({ error: "Something went wrong." });
  }
}

module.exports = { chatController, codeController };
