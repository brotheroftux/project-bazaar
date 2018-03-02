const md5 = require('md5')
const objectId = require('mongodb').ObjectID;
const data_projects  = require('../../../projects.js');
const data_roles  = require('../../../roles.js');
//const now = require("date-now")
module.exports = function(app, database) {

function findOnePromise (collection, query) {
    return new Promise((resolve, reject) => {
        collection.findOne(query, (err, item) => {
            if (err)
                reject(err)
            else
                resolve(item)
        })
    })
}

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
    //console.log(req.body.hasOwnProperty('email'))

    if (req.body.hasOwnProperty('email')){
      user.findOne(req.body, (err, item) => {
        if (err || !item  ) {

          let result = {
            error : {
              status: 404,
              description: 'Do not find user!'
            }
          }
          //console.log(result)
          res.send(result);
        } else {
          //console.log(item, err)
          let ml =  md5(Date.now()) + md5('salt' + Date.now())
          item.magic_link = ml
          // FIXED IT добавить отправку на мыло. Если отправилось, то возвращать статус 200
          user.update(req.body, {magic_link: ml}, (err, item) => {
            if (err) {
                res.send({'error':'Do not update magic-link'});
            } else {

              let result = {
                response : {
                  status: 200,
                  magic: '/auth/' + ml
                }
              }
              //console.log(result)
              res.send(result)
            }
          })

        }
      })
    } else {
      let result = {
        response : {
          status: 500,
          description: "do not email in query"
        }
      }
     //console.log(result)
      res.send(result)
  }
  });

  /*-------------------------------------------------------------------
  /* Send token
  /*-----------------------------------------------------------------*/
  app.post('/api/auth/magic/', (req, res) => {
    console.log(req.body)
    if (req.body.hasOwnProperty('magic')){
      user.findOne({ magic_link: req.body.magic}, (err, item) => {
        if (err || !item  ) {
            let result = {
              error : {
                status: 404,
                description: 'Do not find user!'
              }
            }
            //console.log(result)
            res.send(result);
        } else {
          let tok = md5( Date.now() + item.magic )
          let uid = item.id
          //res.send(tok)

          user.update({ magic_link: req.body.magic}, {token: tok}, (err, item) => {
            if (err) {
                res.send({'error':'Don\'t update token'});
            } else {

              let result = {
                response : {
                  status: 200,
                  token: tok,
                  user_id: uid
                }
              }
              //console.log(result)
              res.send(result)
            }
          })
        }
      })
    } else {
      let result = {
        error : {
          status: 500,
          description: "do not magic in query"
        }
      }
      //console.log(result)
      res.send(result)

    }
  });


/*---------------------------------------------------------------------
/*
/*  Служебная хуйня, чтобы добавлять в базу всякое
/*
---------------------------------------------------------------------*/

  app.get('/api/project/add/:id', (req, res) => {

    let id_proj = req.params.id

    let newProject = new project(data_projects[id_proj])

    newProject.save(function(err) {
      if (err){
        console.log("Something goes wrong with user ")
      }else{
        console.log("Project has been added in DB!")
        res.send('Project has been added in DB!')
      }
    })
  });

  app.get('/api/project/role/add/:id', (req, res) => {

    let id_role = req.params.id

    let newRole = new role(data_roles[id_role])
    //console.log(data_roles[id_role])
    //res.send('Hello')

    newRole.save(function(err) {
      if (err){
        console.log("Something goes wrong with user ")
      }else{
        console.log("Project has been added in DB!")
        res.send('Project has been added in DB!')
      }
    })
  })




  /*---------------------------------------------------------------------
  /*
  /*  get project
  /*
  ---------------------------------------------------------------------*/
  app.get('/api/project/:id', (req, res) => {
      const id_project = { 'id_project': new objectId(req.params.id) }
      console.log(id_project)
      //res.send(id_project)


      project.findOne({'_id': new objectId(req.params.id)}, (err, item) =>{
          console.log(err)
          if (err || !item  ) {
              let result = {
                  error : {
                      status: 404,
                      description: 'Do not find project!'
                  }
              }
              console.log(result)
              res.send(result);
          } else {
              //console.log(item)
              let rrr
              rrr = item
              //console.log(rrr)
              //res.send(rrr)

              role.find(id_project, (err, roles) =>{
                  console.log(err)
                  if (err || !roles  ) {
                      let result = {
                          error : {
                              status: 404,
                              description: 'Do not find roles!'
                          }
                      }
                      console.log(result)
                      res.send(result);
                  } else {
                      res.send('response: { project: ' + rrr + ', \n\n roles: ' + roles + "}")
                  }
              })
          }
      })
  })


  app.get('/api/user/:id', (req, res) => {
      const id_user = { 'status': {  'value': 1,'id_user': new objectId(req.params.id) } }
      console.log(req.params.id)
      //res.send(id_project)


      user.findOne({'_id': new objectId(req.params.id)}, (err, item) =>{
          //console.log(err)
          if (err || !item  ) {
              let result = {
                  error : {
                      status: 404,
                      description: 'Do not find project!'
                  }
              }
              console.log(result)
              res.send(result);
          } else {
              //console.log(item)
              let rrr
              rrr = item

              role.find(id_user, (err, roles) =>{
                 // console.log(err)
                  if (err || !roles  ) {
                      let result = {
                          error : {
                              status: 404,
                              description: 'Do not find roles!'
                          }
                      }
                      //console.log(result)
                      res.send(result);
                  } else {
                      res.send('{ "response" : { "user": ' + JSON.stringify(rrr) + ', \n\n "roles": '
                        + JSON.stringify(roles) + "}}")
                  }
              })
          }
      })
  })


  app.post('/notes', (req, res) => {
    console.log(req.body)
  });

}
