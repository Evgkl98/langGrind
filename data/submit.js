import { send, EmailJSResponseStatus } from "@emailjs/react-native";
import { public_data } from "./keys";

export const onSubmit = async (message) => {
  try {
    await send(
      public_data.service_id,
      public_data.template_id,
      {
        to_name: public_data.to_name,
        to_email: public_data.to_email,
        from_name: public_data.from_name,
        message,
      },
      {
        publicKey: public_data.public_key,
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
