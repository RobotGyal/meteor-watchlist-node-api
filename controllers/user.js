const User = require("../models/users");
const jwt = require('jsonwebtoken');

module.exports = (app) => {
    // SIGN UP FORM
    app.get("/sign-up", (req, res) => {
        // res.render("sign-up");
        res.send("Sign Up GET route")
    });

    // // SIGN UP POST
    // app.post("/sign-up", (req, res) => {
    //     // Create User and JWT
    //     res.send("Sign Up POST route beginning")
    //     const user = new User(req.body);
    //     user.save().then((user) => {
    //             const token = jwt.sign({
    //                 _id: user._id
    //             }, process.env.SECRET, {
    //                 expiresIn: "60 days"
    //             });
    //             res.cookie('nToken', token, {
    //                 maxAge: 900000,
    //                 httpOnly: true
    //             });
    //             res.redirect('/');
    //         })
    //         .catch(err => {
    //             console.log(err.message);
    //             return res.status(400).send({
    //                 err: err
    //             });
    //         });
    // });

    app.post("/sign-up", (req, res) => {
        mongoose.connect(connUri, { useNewUrlParser : true }, (err) => {
          let result = {};
          let status = 201;
          if (!err) {
            const { name, password } = req.body;
            const user = new User({ name, password }); // document = instance of a model
            // TODO: We can hash the password here before we insert instead of in the model
            user.save((err, user) => {
              if (!err) {
                result.status = status;
                result.result = user;
              } else {
                status = 500;
                result.status = status;
                result.error = err;
              }
              res.status(status).send(result);
            });
          } else {
            status = 500;
            result.status = status;
            result.error = err;
            res.status(status).send(result);
          }
        });
      },
    )






    // LOGOUT
    app.get('/logout', (req, res) => {
        res.clearCookie('nToken');
        // res.redirect('/');
        res.send("Logout GET route")
    });


    // LOGIN FORM
    app.get('/login', (req, res) => {
        // res.render('login');
        res.send("Login GET route")
    });


    // LOGIN
    app.post("/login", (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        res.send("Login POST route")
        // Find this user name
        User.findOne({
                username
            }, "username password")
            .then(user => {
                if (!user) {
                    // User not found
                    return res.status(401).send({
                        message: "Wrong Username or Password"
                    });
                }
                // Check the password
                user.comparePassword(password, (err, isMatch) => {
                    if (!isMatch) {
                        // Password does not match
                        return res.status(401).send({
                            message: "Wrong Username or password"
                        });
                    }
                    // Create a token
                    const token = jwt.sign({
                        _id: user._id,
                        username: user.username
                    }, process.env.SECRET, {
                        expiresIn: "60 days"
                    });
                    // Set a cookie and redirect to root
                    res.cookie("nToken", token, {
                        maxAge: 900000,
                        httpOnly: true
                    });
                    res.redirect("/");
                });
            })
            .catch(err => {
                console.log(err);
            });
    });
}



