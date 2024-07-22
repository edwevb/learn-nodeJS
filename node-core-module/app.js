const yargs = require("yargs");
const { saveContact } = require("./contacts.js");

const main = async () => {
  yargs.command({
    command: "add",
    describe: "Add new contact",
    builder: {
      nama: {
        describe: "Full Name",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: true,
        type: "string",
      },
      noHP: {
        describe: "No HP",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      // const contact = {
      //   nama: argv.nama,
      //   email: argv.email,
      //   noHP: argv.noHP,
      // };
      // console.log(contact);
      saveContact(argv.nama, argv.email, argv.noHP);
    },
  });

  yargs.parse();
  // const nama = await questions("Masukkan nama anda:");
  // const email = await questions("Masukkan email anda:");
  // const noHP = await questions("Masukkan No HP anda:");
  // saveContact(nama, email, noHP);
};

main();
