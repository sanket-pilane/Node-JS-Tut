const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const codePrefix = `You are a strict code generator. Output only the final, correct code without any comments, explanations, or extra text. No markdown. No headings. No descriptions. Just clean code. Now,`;

const chatPrefix = `You are a helpful assistant. Answer conversationally.`;

async function codeControllerOpenAI(req, res) {
  try {
    const userPrompt = req.body.prompt;
    const finalPrompt = `${codePrefix} ${userPrompt}`;

    const chatResponse = await openai.chat.completions.create({
      model: "gpt-4", // or "gpt-3.5-turbo"
      messages: [{ role: "user", content: finalPrompt }],
    });

    const output = chatResponse.choices[0].message.content;
    res.json({ output });
  } catch (error) {
    console.error("OpenAI Code Error:", error);
    res.status(500).json({ error: "Code generation failed." });
  }
}

async function chatControllerOpneAI(req, res) {
  try {
    const userPrompt = req.body.prompt;
    const finalPrompt = `${chatPrefix} ${userPrompt}`;

    const chatResponse = await openai.chat.completions.create({
      model: "gpt-4", // or "gpt-3.5-turbo"
      messages: [{ role: "user", content: finalPrompt }],
    });

    const output = chatResponse.choices[0].message.content;
    res.json({ output });
  } catch (error) {
    console.error("OpenAI Chat Error:", error);
    res.status(500).json({ error: "Chat failed." });
  }
}

module.exports = { chatControllerOpneAI, codeControllerOpenAI };
