import * as bucket from "@spica-devkit/bucket";
import pug from "pug";

// Exported for testing
export function sendMail(mail) {
  if (!mail.to) {
    throw new Error(`property .to was not present.`);
  }

  if (!mail.template) {
    throw new Error(`property .template was not present.`);
  }

  console.log(process.env.TEMPLATE_BUCKET);
}

export function processAllUndeliveredMails() {
  // TODO: Fetch all undelivered emails and send them
  bucket.initialize({
    apikey: process.env.API_KEY,
  });
}

export function sendWhenAdded({ current: email }) {
  // TODO: send when added
  bucket.initialize({
    apikey: process.env.API_KEY,
  });
}
