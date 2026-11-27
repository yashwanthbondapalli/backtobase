import assert from "node:assert/strict";
import test from "node:test";
import { createApplicationMailtoUrl, createMailtoComposeUrl } from "../src/data/contact.ts";

test("mailto drafts preserve encoded subject and body text", () => {
  const url = createMailtoComposeUrl("Hello there", "First line\nSecond line & more");
  const [recipient, query] = url.slice("mailto:".length).split("?");
  const params = new URLSearchParams(query);

  assert.equal(recipient, "backtobase923@gmail.com");
  assert.equal(params.get("subject"), "Hello there");
  assert.equal(params.get("body"), "First line\nSecond line & more");
});

test("application mailto draft keeps the same details as Gmail compose", () => {
  const url = createApplicationMailtoUrl({
    name: " Jamie\r\nLee ",
    email: " jamie@example.com ",
    role: "student",
    institution: " CBIT ",
    interest: "attending",
    message: " Looking forward to joining. ",
  });
  const params = new URLSearchParams(url.slice(url.indexOf("?") + 1));

  assert.equal(params.get("subject"), "Community application from Jamie Lee");
  assert.match(params.get("body"), /Name: Jamie Lee/);
  assert.match(params.get("body"), /Email: jamie@example.com/);
  assert.match(params.get("body"), /College \/ company: CBIT/);
  assert.match(params.get("body"), /Looking forward to joining\./);
});
