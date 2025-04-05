import { GoogleGenAI } from "@google/genai";
import { program } from "commander";

const ai = new GoogleGenAI({ apiKey: "AIzaSyAdGqKbO-omh_CM6thvPFPvh9Z7G5l6rrk" });

async function getAIResponse(content) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: content,
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching AI response: ", error);
    return "An error occurred while fetching the AI response.";
  }
}

program
  .version("1.0.0")
  .description("Generate random quotes, jokes, and stories using AI");

program
  .option("-s", "Get a short, random funny quote")
  .option("-l", "Get a long, random funny quote")
  .option("-j", "Get a random funny joke")
  .option("-h", "Get a random humorous quote or joke")
  .option("-c <content>", "Get a custom response based on provided content")
  .option("-q <keyword>", "Get a random quote or joke based on a keyword")
  .option("-r <length>", "Get a random quote or joke with specified length (short, medium, long)")
  .option("-i <category>", "Get a random quote or joke from a specific category (motivational, inspirational, life, etc.)")
  .option("-t", "Get a random quote or joke with a positive tone")
  .option("-m", "Get a random motivational quote")
  .option("-d <date>", "Get a historical quote or event from a specific date")
  .option("-a <author>", "Get a quote or joke by a specific author or comedian")
  .option("-p <mood>", "Get quotes or jokes based on a specific mood (happy, sad, philosophical, etc.)")
  .option("-f <format>", "Format the result in a specific format (JSON, markdown, text, etc.)")
  .option("-x", "Get a random short story or anecdote (100-150 words)")
  .option("-b <type>", "Get a famous quote from a specific genre (motivational, life, love, etc.)")
  .option("-y <year>", "Get a famous quote, fact, or event from a specific year")
  .option("-w <word>", "Get a random word and its meaning or explanation")
  .option("-n <number>", "Get multiple quotes, jokes, or stories at once");

program.parse(process.argv);

const options = program.opts();
const { s, l, j, h, c, q, r, i, t, m, d, a, p, f, x, b, y, w, n } = options;

if (s) {
  getAIResponse("give me a random funny short quote").then(console.log);
}

if (l) {
  getAIResponse("give me a random funny long quote").then(console.log);
}

if (j) {
  getAIResponse("give me a random funny joke").then(console.log);
}

if (h) {
  getAIResponse("give me a random humorous quote or joke").then(console.log);
}

if (c) {
  getAIResponse(c).then(console.log);
}

if (q) {
  getAIResponse(`give me a random quote or joke about ${q}`).then(console.log);
}

if (r) {
  getAIResponse(`give me a random ${r} quote or joke`).then(console.log);
}

if (i) {
  getAIResponse(`give me a random ${i} quote or joke`).then(console.log);
}

if (t) {
  getAIResponse("give me a random positive quote or joke").then(console.log);
}

if (m) {
  getAIResponse("give me a random motivational quote").then(console.log);
}

if (d) {
  getAIResponse(`give me a historical event or quote from ${d}`).then(console.log);
}

if (a) {
  getAIResponse(`give me a quote or joke by ${a}`).then(console.log);
}

if (p) {
  getAIResponse(`give me a ${p} quote or joke`).then(console.log);
}

if (f) {
  getAIResponse("give me a random quote or joke").then(response => {
    if (f === "json") {
      console.log(JSON.stringify({ result: response }));
    } else if (f === "markdown") {
      console.log(`**Quote/Joke**\n\n${response}`);
    } else {
      console.log(response);
    }
  });
}

if (x) {
  getAIResponse("give me a random short story or anecdote (100-150 words)").then(console.log);
}

if (b) {
  getAIResponse(`give me a famous ${b} quote`).then(console.log);
}

if (y) {
  getAIResponse(`give me a famous quote or event from the year ${y}`).then(console.log);
}

if (w) {
  getAIResponse(`give me the meaning or explanation of the word ${w}`).then(console.log);
}

if (n) {
  getAIResponse(`give me ${n} random quotes or jokes`).then(console.log);
}
