const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const homeRoutes = require('./routes/home');
const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');
app.set('views', 'Views');

app.use(express.json({
    extended: false
}));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
app.use(morgan('dev'))
app.use('/', homeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
});
