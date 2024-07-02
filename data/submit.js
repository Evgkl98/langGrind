

// --- Feedback mailing is provided by EmailJS ---
// --- To use this code, create file publicData and add your own credentials from EmailJS account ---

import { send, EmailJSResponseStatus } from "@emailjs/react-native";
// import { public_data } from "../publicData";
import { SERVICE_ID, TEMPLATE_ID, TO_NAME, TO_EMAIL, FROM_NAME, PUBLIC_KEY} from "@env";

export const onSubmit = async (message, email) => {
  try {
    await send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        to_name: TO_NAME,
        to_email: TO_EMAIL,
        from_name: FROM_NAME,
        from_email: email,
        message,
      },
      {
        publicKey: PUBLIC_KEY,
      }
    );

    console.log("SUCCESS!");
  } catch (err) {
    if (err instanceof EmailJSResponseStatus) {
      console.log("EmailJS Request Failed...", err);
    }
    console.log("ERROR", err);
  }
};
