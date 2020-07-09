const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Shoes_Store', {
    useNewUrlParser: true
})
    .then(db => console.log('DB is conected'))
    .catch(db => console.error(err));