var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'budi123';
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        console.log(hash)
    });
});

let hash = "$2a$10$3ALoXdnJYbyVIEHtT5mwa.5i/EAbKLk8rHTUX5pKzCyS4r42vmuet";

bcrypt.compare("budi123", "$2a$10$fK/W8CkOkAQrQzSZVf2FlO03EeNpq2wgjOmUf5Ef0DmOz9p1P1pXG", function(err, res) {
    // res == true
    console.log(res)
});