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



  app.post('/api/auth/send_link/', (req, res) => {
    user.findOne(req.body, (err, item) => {
      if (err) {
        console.log(err)
        res.send({'error':'Don\'t find user!'});
      } else {
        item.magic_link = md5(Date.now()) + md5('salt' + Date.now())

// FIXED добавить отправку на мыло. Если отправилось, то возвращать статус 200

        let result = {
          response : {
            status: 200,
            magic: '/auth/magic/' + item.magic_link
          }
        }
        res.send(result)
      }
    })
  });



    app.post('/api/auth/magic/', (req, res) => {
       user.findOne(req.body, (err, item) => {
         if (err) {
           console.log(err)
           res.send({'error':'Don\'t find user!'});
         } else {
           item.token  = md5(Date.now() + item.email)
           let result = {
             response : {
               status: 200,
               token: item.token
             }
           }
           res.send(result)
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
