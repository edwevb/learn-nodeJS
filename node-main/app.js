const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const {
  loadContact,
  findContact,
  addContact,
  checkName,
  updateContact,
  deleteContact,
} = require('./utils/contacts')

const { body, validationResult } = require('express-validator')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

const app = express()
const port = 3000

const { MongoClient } = require('mongodb')

// Replace the uri string with your connection string.
const uri = 'mongodb://localhost:27017'
const client = new MongoClient(uri)
async function run() {
  try {
    // Get the database and collection on which to run the operation
    const database = client.db('node')
    const employee = database.collection('employee')

    // Execute query
    const data = await employee.find().toArray()
    // Print a message if no documents were found
    if ((await employee.countDocuments()) === 0) {
      console.log('No documents found!')
    }
    console.log(data)
  } finally {
    await client.close()
  }
}
run().catch(console.dir)

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser('secret'))
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
)
app.use(flash())

//middleware
app.use((req, res, next) => {
  console.log('time:', Date.now())
  next()
})

app.get('/', (req, res) => {
  // res.sendFile('./index.html', { root: __dirname })
  const employees = [
    {
      nama: 'Edward',
      email: 'edward@gmail.com',
    },
    {
      nama: 'Erik',
      email: 'erik@gmail.com',
    },
    {
      nama: 'John',
      email: 'john@gmail.com',
    },
  ]
  res.render('index', {
    layout: 'layouts/main-layout',
    nama: 'Edward',
    title: 'Homepage',
    employees,
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout',
    title: 'About',
  })
})

app.get('/contact', (req, res) => {
  const contacts = loadContact()
  res.render('contact', {
    layout: 'layouts/main-layout',
    title: 'Contact',
    contacts,
    msg: req.flash('msg'),
  })
})

app.get('/contact/add', (req, res) => {
  res.render('add-contact', {
    layout: 'layouts/main-layout',
    title: 'Add Contact',
  })
})

app.post(
  '/contact',
  [
    body('nama')
      .trim()
      .notEmpty()
      .custom(async (val) => {
        const existingName = await checkName(val)
        if (existingName) {
          throw new Error('Name is already exists')
        }
        return true
      }),
    body('email', 'Invalid email address').trim().isEmail(),
    body('phone', 'Invalid phone number').trim().isMobilePhone('id-ID'),
  ],
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.render('add-contact', {
        layout: 'layouts/main-layout',
        title: 'Add Contact',
        errors: errors.array(),
      })
    } else {
      addContact(req.body)
      req.flash('msg', 'Succesfully Added!')
      res.redirect('/contact')
    }
  }
)

app.get('/contact/delete/:nama', (req, res) => {
  const contact = findContact(req.params.nama)
  if (!contact) {
    res.status(404)
    res.send('404 Not Found')
  } else {
    deleteContact(req.params.nama)
    req.flash('msg', 'Succesfully Deleted!')
    res.redirect('/contact')
  }
})

app.get('/contact/edit/:nama', (req, res) => {
  const contact = findContact(req.params.nama)
  res.render('edit-contact', {
    layout: 'layouts/main-layout',
    title: 'Edit Contact',
    contact,
  })
})

app.post(
  '/contact/update',
  [
    body('nama')
      .trim()
      .notEmpty()
      .custom(async (val, { req }) => {
        const existingName = await checkName(val)
        if (val !== req.body.oldNama && existingName) {
          throw new Error('Name is already exists')
        }
        return true
      }),
    body('email', 'Invalid email address').trim().isEmail(),
    body('phone', 'Invalid phone number').trim().isMobilePhone('id-ID'),
  ],
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.render('edit-contact', {
        layout: 'layouts/main-layout',
        title: 'Edit Contact',
        errors: errors.array(),
        contact: req.body,
      })
    } else {
      updateContact(req.body)
      req.flash('msg', 'Succesfully Updated!')
      res.redirect('/contact')
    }
  }
)
app.get('/contact/:nama', (req, res) => {
  const contact = findContact(req.params.nama)
  res.render('detail', {
    layout: 'layouts/main-layout',
    title: 'Detail Contact',
    contact,
  })
})

app.get('/product/:slug', (req, res) => {
  res.send(`Product slug: ${req.params.slug}`)
})

app.use('/', (req, res) => {
  res.status(404)
  res.send('404 Not Found')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// const http = require("http");
// const fs = require("fs");
// const port = 3000;

// const renderHTML = (path, res) => {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.write("Error: file not found");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// };

// http
//   .createServer((req, res) => {
//     const url = req.url;
//     if (url === "/about") {
//       renderHTML("./about.html", res);
//     } else if (url === "/contact") {
//       renderHTML("./contact.html", res);
//     } else {
//       renderHTML("./index.html", res);
//     }
//   })
//   .listen(port, () => {
//     console.log(`Listen to port ${port} ...`);
//   });
