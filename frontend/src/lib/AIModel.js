import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GOOGLE_GENAI_API_KEY,
});

const config = {
  responseMimeType: "text/plain",
};

const model = "gemini-3.6-flash";

export async function getARecommendation(prompt) {
  try {
    const response = await ai.models.generateContent({
      model,
      config,
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    return response?.candidates?.[0]?.content?.parts?.[0]?.text || null;
  } catch (error) {
    console.error("Error sending message:", error);
    return null;
  }
}