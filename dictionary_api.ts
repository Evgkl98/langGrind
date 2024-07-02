import axios from "axios";
import { DICTIONARY_KEY } from "@env";
import { Alert } from "react-native";

export const findWord = async (word: string) => {
  const formattedWord = word.replaceAll(" ", "_");

  try {
    const app_key = DICTIONARY_KEY;

    const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${app_key}`;
    console.log(url)

    const responseMeaning = await axios.get(url);
    const meanings = responseMeaning?.data[0]?.shortdef;
    const partOfSpeech = responseMeaning?.data[0]?.fl;
    const verbForms = responseMeaning?.data[0]?.ins;
    const audioPath = responseMeaning?.data[0]?.hwi?.prs?.[0]?.sound?.audio?.toString();
    const subdirectory = () => {
      try {
        if (audioPath.slice(0, 3) === "bix") {
          return "bix";
        } else if (audioPath.slice(0, 2) === "gg") {
          return "gg";
        } else if (!isNaN(audioPath.charAt(0)) || audioPath.charAt(0) === "_") {
          return "number";
        } else {
          return audioPath.charAt(0);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const audioUrl = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${subdirectory()}/${audioPath}.mp3`;
    // const sentences = meanings[0].dros[0].def[0].sseq[0][0][1].dt[1][1][0].t
    // const sentences = responseMeaning.data.forEach((definition) => {
    //   definition.def.forEach((sense) => {
    //     sense.sseq.forEach((sseq) => {
    //       sseq.forEach((item) => {
    //         if (item[0] === 'vis') {
    //           sentences.push(item[1][0].t);
    //         }
    //       });
    //     });
    //   });
    // });;

    return {
      meanings: meanings,
      // sentences: sentences
      partOfSpeech: partOfSpeech,
      audioUrl: audioUrl,
      audioPathStatus: audioPath,
      verbForms
    };
  } catch (error) {
    console.error("Error finding word:", error);
    throw error;
  }
};
