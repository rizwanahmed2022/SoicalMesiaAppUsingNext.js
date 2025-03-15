"use server";
import fs from "fs/promises";
export const submitAction = async (e) => {
  console.log(e.get("name"));
  console.log(e.get("email"));
  await fs.appendFile(
    "rizwa.text",
    ` \n\nName:  ${e.get("name")}\nEmail: ${e.get("email")}\nMessage: ${e.get(
      "mes"
    )} `
  ); 



  let y = await fs.readFile("rizwa.text", "utf8");
  console.log(y);
};
