
const http = require("http")
const express = require("express")
const db = require('./db')


const app = express()
const port = 400

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const morgan = require('morgan');
const serveStatic = require('serve-static')

const server = http.createServer(app)

app.get ('/' , (req, res) => {
 res.render(`home`);

});

app.get ('/pets' , (req, res) => {
    res.render('dogs');
    console.log(`
        <h1>choose a pet name below</h1>
        <ul>
            <li>My current pet: Aries</li>
            <li>My previous pet: King</li>
            <li>My first pet: Max</li>

        </ul>
    `)
})

const petLinks = myPets.map()
console.log(myPets);
console.log(petLinks)
res.render((`lists`, {
    locals: {
        pets: petLinks,
    },
    partials: {
        header: '/partials/header',
        footer: '/partials/footer',
        
    }
}))

app.get ('/pets:name' , (req, res) => {
    res.render('');

})

server.listen (port, () => console.log(`listening on ${port}`))