const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const {sign} = require('jsonwebtoken')
const { hash } = require('bcrypt')
const {validateToken} = require('../server/middlewares/AuthMiddleware')
const saltRounds = 10
const multer = require('multer')
var path = require('path')

const app = express()

app.use(express.json())
app.use(express.static(__dirname+'/public'));
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ("GET,POST,PUT,DELETE"),
    credentials: true
}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "test_db"
})
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


app.post("/register",(req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    bcrypt.hash(password,saltRounds,(err,hash) => {
        db.query(
            "INSERT INTO account (username,password) VALUES(?,?)",
            [username,hash],
            (err,res) => {
                console.log(err);
            }
        )
    })
    res.json("SUCCESS")
})
app.post("/login",(req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM account WHERE username = ? ;",
        username,
        (err,result) => {
            if (err) {
                res.send({err:err});
            }
            if (result.length >0){
                bcrypt.compare(password,result[0].password,(error,response)=>{
                    if (response){
                        const accessToken = sign(
                            {username: result[0].username, id: result[0].account_id}, 
                            "importantsecret"
                        );
                        res.json({token: accessToken, username: result[0].username, id: result[0].account_id})
                    } else{
                        res.json({error: "Wrong username/password combination"})
                    }
                })
            } else{
                res.json({error: "User doesn't exist"})
            }
        }
    )
})


app.get("/GetAllUser",(req,res) => {
    db.query("SELECT user_id, nick_name, user_name, role_name FROM user inner join role on user.role_id = role.role_id order by user_id asc",
            (err,result) => {
                if(err){
                    res.json("error:",err)
                }
                res.json(result)
            }
    )
})
app.post("/CreateUser",(req,res) => {
    const nick_name = req.body.nick_name;
    const user_name = req.body.user_name;
    const phone_number = req.body.phone_number;
    const address = req.body.address;
    const address_mail = req.body.address_mail;
    db.query("insert into user(nick_name,user_name,phone_number,address,mail_address,role_id) values (?,?,?,?,?,?)",
            [nick_name,user_name,phone_number,address,address_mail,3],
            (err) => {
                if(err){
                    res.json("error:",err)
                }
                res.json("SUCCESS create a user")
            }
    )
})
app.get("/GetAllPost",(req,res) => {
    db.query("SELECT * FROM posts",
            (err,result) => {
                if(err){
                    res.json("error:",err)
                }
                res.json(result)
            }
    )
})
app.post("/Likes",validateToken,(req,res) => {
    const post_id = req.body.post_id;
    const user_id = req.user.id;
    db.query("SELECT * FROM likes WHERE post_id = ? AND user_id = ?",
            [post_id,user_id],
            (err,result) => {
                if (err){
                    res.json("error:",err)
                }
                else if (result.length ==0) {
                    db.query("INSERT INTO likes(post_id,user_id) VALUES(?,?)",
                    [post_id,user_id],
                    (err) => {
                        if(err){
                            res.json("error:",err)
                        }
                        res.json("Liked the post")
                    })
                }
                else {
                    db.query("DELETE FROM likes WHERE post_id = ? AND user_id = ?",
                    [post_id,user_id],
                    (err) => {
                        if(err){
                            res.json("error:",err)
                        }
                        res.json("Unliked the post")
                    })
                }
            }
    )
})

app.delete("/DeleteUser/:id",(req,res)=>{
    const user_id = req.params.id;
    console.log(user_id)
    db.query("DELETE FROM user WHERE user_id = ?", 
            user_id,
            (err) => {
                if(err){
                    res.json("error:",err)
                }
                res.json("SUCCESS Delete a user")
            } 
    )
})
app.put("/UpdateUser",(req,res) =>{
    const user_id = req.body.user_id;
    const role_id = req.body.role_id;
    console.log(user_id)
    db.query("UPDATE user SET role_id = ? WHERE user_id = ?",
            [role_id,user_id],
            (err) => {
                if(err){
                    res.json("error:",err)
                }
                res.json("SUCCESS Update a user")
            }
    )
})
app.get("/auth",validateToken,(req,res) =>{
    res.json(req.user)
})

app.listen(3001,() => {
    console.log("Server running on port 3001")
})


var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/images/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
 
var upload = multer({
    storage: storage
});
 
//@type   POST
//route for post data
app.post("/upload", upload.single('file'),validateToken, (req, res) => {
    if (!req.file) {
        console.log("No file upload");
    } else {
        console.log(req.file.filename)
        const user_id = req.user.id
        const title = req.body.title
        const content = req.body.content
        var imgsrc = 'http://127.0.0.1:3001/images/' + req.file.filename
        console.log(req.body.post_id)
        var insertData = "INSERT INTO posts(title,content,user_id,img_src)VALUES(?,?,?,?)"
        db.query(insertData, [title,content,user_id,imgsrc], (err, result) => {
            if (err) throw err
            res.json("SUCCESS")
        })
    }
});



 







