const express = require('express');
const hbs = require('hbs')

const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.get('/', (request, response) => {
    //response.send('<h1>Hello from Express!</h1>');
    response.render('welcome.hbs', {
        title: "Welcome to my site!",
        text: "or not!..."
    });
});

app.get('/about', (request, response) => {
    response.render('welcome.hbs', {
        title: "About",
        text: "about what?!"
    });
});

app.get('/carochao', (request, response) => {
    var date = new Date().toString();

    response.render('carochao.hbs', {
        text: date
    });
});


app.listen(3100);