var db = require('../models/');
var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
var salt = bcrypt.genSaltSync(saltRounds);
var jwt = require('jsonwebtoken');


function showAll(req, res, next) {
  let token = req.headers.token;
  if (token) {
    let decode = jwt.verify(token, 'BIMILIYA')
    if (decode.role === 'admin') {
      db.User.findAll().then(data => {
        res.send(data);
      })
    } else {
      res.send('sori coy, admin only...')
    }
  } else {
    res.send('login dlu donk...')
  }
}

function create(req, res, next) {
  let token = req.headers.token;
  if (token) {
    let decode = jwt.verify(token, 'BIMILIYA');
    if (decode.role === 'admin') {
      db.User.create(req.body).then(() => {
        res.send('berhasil buat')
      })
    } else {
      res.send('admin only ...')
    }
  } else {
    res.send('login dlu dnk ...')
  }

}

function find(req, res, next) {
  let token = req.headers.token;
  if (token) {
    let decode = jwt.verify(token, 'BIMILIYA');
    if (decode.role === 'admin' || decode.role === 'user') {
      let aidi = req.params.id
      db.User.findOne({
        where: {
          id: aidi
        }
      }).then(data => {
        if (data) res.send(data)
        else res.send('not found')
      })
    } else {
      res.send('akun belum ter atuhtentikasi')
    }
  } else {
    res.send('login dlu dnk ...')
  }


}

function hapus(req, res, next) {
  let aidi = req.params.id
  let token = req.headers.token;
  if (token) {
    let decode = jwt.verify(token, 'BIMILIYA');
    if (decode.role === 'admin') {
      db.User.destroy({
        where: {
          id: aidi
        }
      }).then( () => {
        res.send('Berhasil di hapus!!')
      })
    } else {
      res.send('admin only (*´∀`*)')
    }
  } else {
    res.send('login dlu')
  }
}

function apdet(req, res, next) {
  let aidi = req.params.id
  let newName = req.body.name
  let newUser = req.body.username
  let newEmail = req.body.email
  let token = req.headers.token;
  if (token) {
    let decode = jwt.verify(token, 'BIMILIYA');
    if (decode !== undefined) {
      db.User.update({
        name: newName,
        username: newUser,
        email: newEmail
      }, { where: {
        id: aidi
      }}).then(() => {
        res.send('terupdate!!')
      })
    } else {
      res.send('(ﾉ^ヮ^)ﾉ*:・ﾟ✧ admin or authenticated user aja, ')
    }
  } else {
    res.send('login dlu dnkk')
  }
}

function signUp(req, res, next) {
  let form = req.body
  let newName = form.name;
  let newUser = form.username;
  let newEmail = form.email;
  let newPass = bcrypt.hashSync(form.password, salt);

  db.User.create({
    name: newName,
    username: newUser,
    email: newEmail,
    password: newPass,
    createdAt: new Date(),
    updatedAt: new Date()
  }).then( () => {
    res.send('create berhasil')
  }).catch( err => console.log(err))
  // res.send(`${newName} ${newUserame} ${newName} ${newName} `)
}

function signIn(req, res, next) {
  let user = req.body.username;
  let pass = req.body.password;

  db.User.findOne({
    where: {
      username: user
    }
  }).then( data => {
    if (data) {
      if (bcrypt.compare(pass, data.password)) {
        let token = jwt.sign({username: data.username, role: data.role}, 'BIMILIYA')
        res.send('berhasil, anda sudah dapat jsonwebtoken: ' + token)
      } else {
        res.send('hmm?? password nya salah tuch')
      }
    } else {
      res.send('username salah')
    }
  })
}

module.exports={
  showAll,
  create,
  find,
  hapus,
  apdet,
  signUp,
  signIn
}
