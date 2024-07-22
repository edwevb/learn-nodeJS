const fs = require("fs");
const dirPath = "./data";
const filePath = "./data/contacts.json";

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]", "utf-8");
}

// const questions = (question) => {
//   return new Promise((resolve, reject) => {
//     rl.question(question, function (nama) {
//       resolve(nama);
//     });
//     console.log(reject());
//   });
// };

const saveContact = (nama = null, email = null, noHP = null) => {
  const data = { nama, email, noHP };
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);

  contacts.push(data);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts, null, 2));
  console.log(`Terima kasih ${data.nama}`);
  rl.close();
};

module.exports = { saveContact };
