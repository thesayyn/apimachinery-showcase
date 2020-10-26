import { sendMail, processAllUndeliveredMails, sendWhenAdded } from "../src/sendmail";

test("should throw an error when .to is not present", () => {
  expect(() => sendMail({})).toThrow("property .to was not present.");
});

test("should throw an error when .template is not present", () => {
  expect(() => sendMail({ to: "test" })).toThrow(
    "property .template was not present."
  );
});


test("should invoke", () => {
  expect(processAllUndeliveredMails()).toBe(undefined);
  expect(sendWhenAdded({current: {}})).toBe(undefined);
})