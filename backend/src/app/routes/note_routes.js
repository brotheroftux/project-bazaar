const md5 = require('md5')
//const now = require("date-now")
module.exports = function(app, database) {


/*-------------------------------------------------------------------
/* Registration user
/*-----------------------------------------------------------------*/
  app.post('/api/registration/user/', (req, res) => {
    let userData = req.body.user_data.split('|')

    let newUser = new user({
        first_name: userData[0],
        last_name: userData[1],
        email: userData[3]
      })

    newUser.save(function(err) {
      if (err){
        console.log("Something goes wrong with user ")
      }else{
        res.send(userData[0] + ' ' + userData[1] + ' has been added in DB!')
      }
    })
  });


  /*-------------------------------------------------------------------
  /* Send_link
  /*-----------------------------------------------------------------*/
  app.post('/api/auth/send_link/', (req, res) => {
    user.findOne(req.body, (err, item) => {
      if (err) {
        console.log(err)
        res.send({'error':'Don\'t find user!'});
      } else {
        let ml =  md5(Date.now()) + md5('salt' + Date.now())
        item.magic_link = ml
        // FIXED IT добавить отправку на мыло. Если отправилось, то возвращать статус 200
        user.update(req.body, {magic_link: ml}, (err, item) => {
          if (err) {
              res.send({'error':'Don\'t update magic-link'});
          } else {
            let result = {
              response : {
                status: 200,
                magic: '/auth/magic/' + ml
              }
            }
            res.send(result)
          }
        })

      }
    })
  });




  app.post('/api/auth/magic/', (req, res) => {
//    res.send(req.body)
    user.findOne({ magic_link: req.body.magic}, (err, item) => {
      if (err) {
        console.log(err)
        res.send({'error':'Don\'t find user!'});
      } else {
        let tok = md5( Date.now() + item.email )
        //res.send(tok)

        user.update({ magic_link: req.body.magic}, {token: tok}, (err, item) => {
          if (err) {
              res.send({'error':'Don\'t update token'});
          } else {
            let result = {
              response : {
                status: 200,
                token: tok
              }
            }
            res.send(result)
          }
        })



/*
        item.token =  tok

        let result = {
          response : {
            status: 200,
            token: tok
          }
        }

        res.send(result)
*/
      }
    })


  });


  app.get('/notes', (req, res) => {
    res.send('Hello, pidor!'+ newUser)
    console.log( newUser)
  });

  app.post('/notes', (req, res) => {
    console.log(req.body)
  });

}
