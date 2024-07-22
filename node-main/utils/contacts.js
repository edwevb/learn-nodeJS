const fs = require('fs')
const dirPath = './data'
const filePath = './data/contacts.json'

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath)
}
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, '[]', 'utf-8')
}

// const saveContact = (nama = null, email = null, noHP = null) => {
//   const data = { nama, email, noHP }
//   const file = fs.readFileSync('data/contacts.json', 'utf-8')
//   const contacts = JSON.parse(file)

//   contacts.push(data)

//   fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2))
//   console.log(`Terima kasih ${data.nama}`)
//   rl.close()
// }

const loadContact = () => {
  const file = fs.readFileSync('data/contacts.json', 'utf-8')
  const contacts = JSON.parse(file)
  return contacts
}

const findContact = (nama) => {
  const contacts = loadContact()
  const contact = contacts.find(
    (el) => el.nama.toLowerCase() === nama.toLowerCase()
  )
  return contact
}

const addContact = (contact) => {
  const contacts = loadContact()
  contacts.push(contact)
  saveContact(contacts)
}

const saveContact = (contacts) => {
  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2))
}

const checkName = (nama) => {
  const contacts = loadContact()
  return contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  )
}

const updateContact = (newContact) => {
  const contacts = loadContact()
  const filtered = contacts.filter(function (contact) {
    return contact.nama !== newContact.oldNama
  })

  delete newContact.oldNama
  filtered.push(newContact)
  saveContact(filtered)
}

const deleteContact = (nama) => {
  const contacts = loadContact()
  const filtered = contacts.filter((contact) => contact.nama !== nama)
  saveContact(filtered)
}
module.exports = {
  loadContact,
  findContact,
  addContact,
  checkName,
  updateContact,
  deleteContact,
}
