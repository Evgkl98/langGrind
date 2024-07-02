import axios from "axios";
import { GOOGLE_API_KEY } from "@env";

export const translateWord = async (word: string, targetLanguage: string) => {
  const api_key = GOOGLE_API_KEY;
  const url = `https://translation.googleapis.com/language/translate/v2`;

  try {
    const response = await axios.post(url, {}, {
        params: {
          q: word,
          target: targetLanguage,
          key: api_key,
        },
      }
    );
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Error translating text:", error);
    throw error;
  }
};
