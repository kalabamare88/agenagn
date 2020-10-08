mongoose = require('mongoose');
fs = require('fs');
var path = require('path');

var multer = require('multer');

var mainFilterPointes = mongoose.model('mainFilterPointes');
var delalaDatas = mongoose.model('delalaDatas');

module.exports.indexRender = function (req, res) {
    global.myfilcd = [];

    mainFilterPointes.find({approval: true, GuestHouse: false}, function (err, docs) {
        if (err) {
            res.send(err);
        } else {

            for (var i = 0; i < docs.length; i++) {

                var directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);
                var directoryPathtwo = path.join(__dirname, '../public/images/' + docs[i].place);
                //passsing directoryPath and callback function
                if (!fs.existsSync(directoryPathtwo)) {
                    var k = i;

                    fs.mkdirSync('./public/images/' + docs[i].place, function (err1) {
                        if (err1) {
                            console.log("unable to create a diretory  " + err1);
                        } else {

                        }


                    });
                    fs.mkdirSync('./public/images/' + docs[k].place + "/" + docs[i]._id, function (err1) {

                    });
                    directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);


                } else if (!fs.existsSync(directoryPath)) {

                    fs.mkdirSync('./public/images/' + docs[i].place + "/" + docs[i]._id, function (err1) {

                    });
                    directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);

                } else {
                    "they all exites";
                }
                fs.readdir(directoryPath, function (err, files) {
                    //handling error
                    if (err) {
                        return console.log('Unable to scan directory: ' + err);
                    }
                    myfilcd.push(files);

                });

            }
            var pr = function (str) {
                console.log("Print str: " + str);
            };
            setTimeout(function () {
                console.log(docs[0]);
                res.render('index', {mydocs: docs, myfil: myfilcd, title: "አገናኝ"});

            }, 1000);

        }

    });
};
module.exports.guestHouseRender = function (req, res) {
    global.myfilcd = [];

    mainFilterPointes.find({approval: true, GuestHouse: true}, function (err, docs) {
        if (err) {
            res.send(err);
        } else {

            for (var i = 0; i < docs.length; i++) {

                var directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);
                var directoryPathtwo = path.join(__dirname, '../public/images/' + docs[i].place);
                //passsing directoryPath and callback function
                if (!fs.existsSync(directoryPathtwo)) {
                    var k = i;

                    fs.mkdirSync('./public/images/' + docs[i].place, function (err1) {
                        if (err1) {
                            console.log("unable to create a diretory  " + err1);
                        } else {

                        }


                    });
                    fs.mkdirSync('./public/images/' + docs[k].place + "/" + docs[i]._id, function (err1) {

                    });
                    directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);


                } else if (!fs.existsSync(directoryPath)) {

                    fs.mkdirSync('./public/images/' + docs[i].place + "/" + docs[i]._id, function (err1) {

                    });
                    directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);

                } else {
                    "they all exites";
                }
                fs.readdir(directoryPath, function (err, files) {
                    //handling error
                    if (err) {
                        return console.log('Unable to scan directory: ' + err);
                    }
                    myfilcd.push(files);

                });

            }
            var pr = function (str) {
                console.log("Print str: " + str);
            };
            setTimeout(function () {
                console.log(docs[0]);
                res.render('guestHouse', {mydocs: docs, myfil: myfilcd, title: "አገናኝ"});

            }, 1000);

        }

    });
};

module.exports.filterRenderGuestHouse = function (req, res) {
    /* function now(mydocument) {
         global.myfilcd = [];
         for (var i = 0; i < mydocument.length; i++) {

             var directoryPath = path.join(__dirname, '../public/images/' + mydocument[i].place + '/' + mydocument[i]._id);
             var directoryPathtwo = path.join(__dirname, '../public/images/' + mydocument[i].place);
             //passsing directoryPath and callback function
             if (!fs.existsSync(directoryPathtwo)) {
                 var k = i;

                 fs.mkdirSync('./public/images/' + mydocument[i].place , function (err1) {
                     if (err1){
                         console.log("unable to create a diretory  " + err1);
                     }else {

                     }


                 });
                 fs.mkdirSync('./public/images/' + mydocument[k].place + "/" + mydocument[i]._id, function (err1) {

                 });
                 directoryPath = path.join(__dirname, '../public/images/' + mydocument[i].place + '/' + mydocument[i]._id);


             }else if(!fs.existsSync(directoryPath)){

                 fs.mkdirSync('./public/images/' + docs[i].place + "/" + docs[i]._id, function (err1) {

                 });
                 directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);

             }else {
                 "they all exites";}
             fs.readdir(directoryPath, function (err, files) {
                 //handling error
                 if (err) {
                     return console.log('Unable to scan directory: ' + err);
                 }
                 myfilcd.push(files);

             });

         }
         var pr = function (str) {
             console.log("Print str: " + str);
         };
         setTimeout(function () {
             /!*res.render('index', {mydocs: docs, myfil: myfilcd, title: "አገናኝ"});*!/
             console.log(myfilcd + "this is myfilcd");
                 return myfilcd;
         }, 1000);

     }*/
    if ("Any" == req.query.place && "Any" == req.query.bedroom) {
        global.myfilcd = [];
        mainFilterPointes.find({approval: true, GuestHouse: true}, function (err, docs) {
            if (err) {
                res.send(err);
            } else {
                for (var i = 0; i < docs.length; i++) {

                    var directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);
                    var directoryPathtwo = path.join(__dirname, '../public/images/' + docs[i].place);
                    //passsing directoryPath and callback function
                    if (!fs.existsSync(directoryPathtwo)) {
                        var k = i;

                        fs.mkdirSync('./public/images/' + docs[i].place, function (err1) {
                            if (err1) {
                                console.log("unable to create a diretory  " + err1);
                            } else {

                            }


                        });
                        fs.mkdirSync('./public/images/' + docs[k].place + "/" + docs[i]._id, function (err1) {

                        });
                        directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);


                    } else if (!fs.existsSync(directoryPath)) {

                        fs.mkdirSync('./public/images/' + docs[i].place + "/" + docs[i]._id, function (err1) {

                        });
                        directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);

                    } else {
                        "they all exites";
                    }
                    fs.readdir(directoryPath, function (err, files) {
                        //handling error
                        if (err) {
                            return console.log('Unable to scan directory: ' + err);
                        }
                        myfilcd.push(files);

                    });

                }
                setTimeout(function () {
                    console.log(docs[0]);
                    res.render('guestHouse', {mydocs: docs, myfil: myfilcd, title: "አገናኝ"});

                }, 1000);
            }
        })
    }
    else if ("Any" == req.query.place && "Any" != req.query.bedroom) {
        global.myfilcd = [];
        mainFilterPointes.find({
            approval: true,
            GuestHouse: true,
            numberOfBedRoom: req.query.bedroom
        }, function (err, docs) {
            if (err) {
                res.send(err);
            } else {
                for (var i = 0; i < docs.length; i++) {

                    var directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);
                    var directoryPathtwo = path.join(__dirname, '../public/images/' + docs[i].place);
                    //passsing directoryPath and callback function
                    if (!fs.existsSync(directoryPathtwo)) {
                        var k = i;

                        fs.mkdirSync('./public/images/' + docs[i].place, function (err1) {
                            if (err1) {
                                console.log("unable to create a diretory  " + err1);
                            } else {

                            }


                        });
                        fs.mkdirSync('./public/images/' + docs[k].place + "/" + docs[i]._id, function (err1) {

                        });
                        directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);


                    } else if (!fs.existsSync(directoryPath)) {

                        fs.mkdirSync('./public/images/' + docs[i].place + "/" + docs[i]._id, function (err1) {

                        });
                        directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);

                    } else {
                        "they all exites";
                    }
                    fs.readdir(directoryPath, function (err, files) {
                        //handling error
                        if (err) {
                            return console.log('Unable to scan directory: ' + err);
                        }
                        myfilcd.push(files);

                    });

                }
                var pr = function (str) {
                    console.log("Print str: " + str);
                };
                setTimeout(function () {
                    console.log(docs[0]);
                    res.render('guestHouse', {mydocs: docs, myfil: myfilcd, title: "አገናኝ"});

                }, 1000);
            }
        })
    }
    else if ("Any" != req.query.place && "Any" == req.query.bedroom) {
        global.myfilcd = [];
        mainFilterPointes.find({approval: true, GuestHouse: true, place: req.query.place}, function (err, docs) {
            if (err) {
                res.send(err);
            } else {
                for (var i = 0; i < docs.length; i++) {

                    var directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);
                    var directoryPathtwo = path.join(__dirname, '../public/images/' + docs[i].place);
                    //passsing directoryPath and callback function
                    if (!fs.existsSync(directoryPathtwo)) {
                        var k = i;

                        fs.mkdirSync('./public/images/' + docs[i].place, function (err1) {
                            if (err1) {
                                console.log("unable to create a diretory  " + err1);
                            } else {

                            }


                        });
                        fs.mkdirSync('./public/images/' + docs[k].place + "/" + docs[i]._id, function (err1) {

                        });
                        directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);


                    } else if (!fs.existsSync(directoryPath)) {

                        fs.mkdirSync('./public/images/' + docs[i].place + "/" + docs[i]._id, function (err1) {

                        });
                        directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);

                    } else {
                        "they all exites";
                    }
                    fs.readdir(directoryPath, function (err, files) {
                        //handling error
                        if (err) {
                            return console.log('Unable to scan directory: ' + err);
                        }
                        myfilcd.push(files);

                    });

                }
                setTimeout(function () {
                    res.render('guestHouse', {mydocs: docs, myfil: myfilcd, title: "አገናኝ"});

                }, 1000);
            }
        })
    }
    else {
        global.myfilcd = [];
        mainFilterPointes.find({
            approval: true,
            GuestHouse: true,
            place: req.query.place,
            numberOfBedRoom: req.query.bedroom
        }, function (err, docs) {
            if (err) {
                res.send(err);
            } else {
                for (var i = 0; i < docs.length; i++) {

                    var directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);
                    var directoryPathtwo = path.join(__dirname, '../public/images/' + docs[i].place);
                    //passsing directoryPath and callback function
                    if (!fs.existsSync(directoryPathtwo)) {
                        var k = i;

                        fs.mkdirSync('./public/images/' + docs[i].place, function (err1) {
                            if (err1) {
                                console.log("unable to create a diretory  " + err1);
                            } else {

                            }


                        });
                        fs.mkdirSync('./public/images/' + docs[k].place + "/" + docs[i]._id, function (err1) {

                        });
                        directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);


                    } else if (!fs.existsSync(directoryPath)) {

                        fs.mkdirSync('./public/images/' + docs[i].place + "/" + docs[i]._id, function (err1) {

                        });
                        directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);

                    } else {
                        "they all exites";
                    }
                    fs.readdir(directoryPath, function (err, files) {
                        //handling error
                        if (err) {
                            return console.log('Unable to scan directory: ' + err);
                        }
                        myfilcd.push(files);

                    });

                }
                setTimeout(function () {
                    console.log(docs[0]);
                    res.render('guestHouse', {mydocs: docs, myfil: myfilcd, title: "አገናኝ"});

                }, 1000);
            }
        })
    }

};
module.exports.filterRender = function (req, res) {
    if ("Any" == req.query.place && "Any" == req.query.bedroom) {
        global.myfilcd = [];
        mainFilterPointes.find({approval: true, GuestHouse: false}, function (err, docs) {
            if (err) {
                res.send(err);
            } else {
                for (var i = 0; i < docs.length; i++) {

                    var directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);
                    var directoryPathtwo = path.join(__dirname, '../public/images/' + docs[i].place);
                    //passsing directoryPath and callback function
                    if (!fs.existsSync(directoryPathtwo)) {
                        var k = i;

                        fs.mkdirSync('./public/images/' + docs[i].place, function (err1) {
                            if (err1) {
                                console.log("unable to create a diretory  " + err1);
                            } else {

                            }


                        });
                        fs.mkdirSync('./public/images/' + docs[k].place + "/" + docs[i]._id, function (err1) {

                        });
                        directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);


                    } else if (!fs.existsSync(directoryPath)) {

                        fs.mkdirSync('./public/images/' + docs[i].place + "/" + docs[i]._id, function (err1) {

                        });
                        directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);

                    } else {
                        "they all exites";
                    }
                    fs.readdir(directoryPath, function (err, files) {
                        //handling error
                        if (err) {
                            return console.log('Unable to scan directory: ' + err);
                        }
                        myfilcd.push(files);

                    });

                }
                setTimeout(function () {
                    console.log(docs[0]);
                    res.render('index', {mydocs: docs, myfil: myfilcd, title: "አገናኝ"});

                }, 1000);
            }
        })
    }
    else if ("Any" == req.query.place && "Any" != req.query.bedroom) {
        global.myfilcd = [];
        mainFilterPointes.find({
            approval: true,
            GuestHouse: false,
            numberOfBedRoom: req.query.bedroom
        }, function (err, docs) {
            if (err) {
                res.send(err);
            } else {
                for (var i = 0; i < docs.length; i++) {

                    var directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);
                    var directoryPathtwo = path.join(__dirname, '../public/images/' + docs[i].place);
                    //passsing directoryPath and callback function
                    if (!fs.existsSync(directoryPathtwo)) {
                        var k = i;

                        fs.mkdirSync('./public/images/' + docs[i].place, function (err1) {
                            if (err1) {
                                console.log("unable to create a diretory  " + err1);
                            } else {

                            }


                        });
                        fs.mkdirSync('./public/images/' + docs[k].place + "/" + docs[i]._id, function (err1) {

                        });
                        directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);


                    } else if (!fs.existsSync(directoryPath)) {

                        fs.mkdirSync('./public/images/' + docs[i].place + "/" + docs[i]._id, function (err1) {

                        });
                        directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);

                    } else {
                        "they all exites";
                    }
                    fs.readdir(directoryPath, function (err, files) {
                        //handling error
                        if (err) {
                            return console.log('Unable to scan directory: ' + err);
                        }
                        myfilcd.push(files);

                    });

                }
                var pr = function (str) {
                    console.log("Print str: " + str);
                };
                setTimeout(function () {
                    res.render('index', {mydocs: docs, myfil: myfilcd, title: "አገናኝ"});

                }, 1000);
            }
        })
    }
    else if ("Any" != req.query.place && "Any" == req.query.bedroom) {
        global.myfilcd = [];
        mainFilterPointes.find({approval: true, GuestHouse: false, place: req.query.place}, function (err, docs) {
            if (err) {
                res.send(err);
            } else {
                for (var i = 0; i < docs.length; i++) {

                    var directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);
                    var directoryPathtwo = path.join(__dirname, '../public/images/' + docs[i].place);
                    //passsing directoryPath and callback function
                    if (!fs.existsSync(directoryPathtwo)) {
                        var k = i;

                        fs.mkdirSync('./public/images/' + docs[i].place, function (err1) {
                            if (err1) {
                                console.log("unable to create a diretory  " + err1);
                            } else {

                            }


                        });
                        fs.mkdirSync('./public/images/' + docs[k].place + "/" + docs[i]._id, function (err1) {

                        });
                        directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);


                    } else if (!fs.existsSync(directoryPath)) {

                        fs.mkdirSync('./public/images/' + docs[i].place + "/" + docs[i]._id, function (err1) {

                        });
                        directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);

                    } else {
                        "they all exites";
                    }
                    fs.readdir(directoryPath, function (err, files) {
                        //handling error
                        if (err) {
                            return console.log('Unable to scan directory: ' + err);
                        }
                        myfilcd.push(files);

                    });

                }
                setTimeout(function () {
                    res.render('index', {mydocs: docs, myfil: myfilcd, title: "አገናኝ"});

                }, 1000);
            }
        })
    }
    else {
        global.myfilcd = [];
        mainFilterPointes.find({
            approval: true,
            GuestHouse: false,
            place: req.query.place,
            numberOfBedRoom: req.query.bedroom
        }, function (err, docs) {
            if (err) {
                res.send(err);
            } else {
                for (var i = 0; i < docs.length; i++) {

                    var directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);
                    var directoryPathtwo = path.join(__dirname, '../public/images/' + docs[i].place);
                    //passsing directoryPath and callback function
                    if (!fs.existsSync(directoryPathtwo)) {
                        var k = i;

                        fs.mkdirSync('./public/images/' + docs[i].place, function (err1) {
                            if (err1) {
                                console.log("unable to create a diretory  " + err1);
                            } else {

                            }


                        });
                        fs.mkdirSync('./public/images/' + docs[k].place + "/" + docs[i]._id, function (err1) {

                        });
                        directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);


                    } else if (!fs.existsSync(directoryPath)) {

                        fs.mkdirSync('./public/images/' + docs[i].place + "/" + docs[i]._id, function (err1) {

                        });
                        directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);

                    } else {
                        "they all exites";
                    }
                    fs.readdir(directoryPath, function (err, files) {
                        //handling error
                        if (err) {
                            return console.log('Unable to scan directory: ' + err);
                        }
                        myfilcd.push(files);

                    });

                }
                setTimeout(function () {
                    res.render('index', {mydocs: docs, myfil: myfilcd, title: "አገናኝ"});

                }, 1000);
            }
        })
    }

};
module.exports.detailRender = function (req, res) {
    mainFilterPointes.find({_id: req.params.idontheURL}, function (err, docs) {
        if (err) {
            res.send(err);
        } else {

            const directoryPath = path.join(__dirname, '../public/images/' + docs[0].place + '/' + docs[0]._id);
            if (fs.existsSync(directoryPath)) {
                fs.readdir(directoryPath, function (err, files) {
                    if (err) {
                        return console.log('Unable to scan directory: ' + err);
                    }
                    console.log(files.length + "files .length");

                    res.render('detail', {myDocsId: docs[0], myfil: files})

                });
            }
        }

    });
};

module.exports.just = function (req, res) {
    res.render('just', {title: "just"});
};
module.exports.userPostRender = function (req, res) {
    res.render('userPost', {title: "Register Your Home"})
};

module.exports.iamtheadmin = function (req, res) {

    console.log("I am the admin");
    console.log(req.body.username);
    delalaDatas.find({delalaUsername : req.body.username, password : req.body.password}, function (err, docs) {
        if (err) {
            res.send(err);
        } else {
         if (docs.length===1){
             global.myfilcd = [];

             mainFilterPointes.find({approval: false}, function (err, docs) {
                 if (err) {
                     res.send(err);
                 } else {

                     console.log(docs);
                     for (var i = 0; i < docs.length; i++) {

                         const directoryPath = path.join(__dirname, '../public/images/' + docs[i].place + '/' + docs[i]._id);
                         //passsing directoryPath and callback function
                         fs.readdir(directoryPath, function (err, files) {
                             //handling error
                             if (err) {
                                 return console.log('Unable to scan directory: ' + err);
                             }
                             console.log(files[0]);
                             myfilcd.push(files);
                             files.forEach(function (file) {
                                 // Do whatever you want to do with the file
                                 console.log(file);
                                 /* myfilcd = myfilcd + file;*/
                             });
                             var str = "Out setTimeout print: " + myfilcd;
                             setTimeout(pr, 1000, str);


                             /*res.render('admin', {mydocs: docs, myfil:files, title:"register Your Home!"})*/
                         });

                     }
                     var pr = function (str) {
                         console.log("Print str: " + str);
                     };
                     setTimeout(function () {
                         res.render('admin', {mydocs: docs, myfil: myfilcd, title: "register Your Home!"});

                         pr("Out setTimeout print: " + myfilcd + "this is out of the ufntion");
                     }, 1000);
                     /*res.render('admin', {mydocs: docs, title: "register Your Home!"})*/

                     /*res.render('admin', {mydocs: docs, title: "Register Your Home"})*/
                 }

             });
         }
         else {
             res.render('adminLogin', {errlogin : "Username or Password error"})
         }
        }});





};
module.exports.adminLogin = function (req, res) {
    res.render('adminLogin', {errlogin : ""});

};
module.exports.confirmRegistrationRender = function (req, res) {
    mainFilterPointes.create({
        place: req.body.locationOfCondeminium,
        numberOfBedRoom: req.body.numberOfBedRoomSelect,
        Flour: req.body.numberOfFloor,
        monthlyrent: req.body.monthlyRent,
        userphonenumber: req.body.phoneNumberInput,
        GuestHouse: req.body.guestHouse,
        approval: false
    }, function (err, docs) {

        if (err) {
            res.send(err)
        } else {
            fs.mkdir('./public/images/' + docs.place + "/" + docs._id, function (err1) {
                console.log(req.body.locationOfCondeminium, docs._id, docs.monthlyrent, req.body);
                res.render("confirmRegistration", {title: "confirmRegistrationRender", mydocsReg: docs});

            });
        }
    })
};
/*module.exports.addDataDelalaRender = function (req, res) {
    delalaDatas.create({
        delalaUsername: "meme",
        password : "12"
    }, function (err, docs) {

        if (err) {
            res.send(err)
        } else {
            console.log(docs);
        }
    });
    res.render('just');
};*/

module.exports.upload = function (req, res, docs) {
    var i = 0;
    console.log(req.body);
    console.log(req.body.placeOf);
    var storage = multer.diskStorage({

        /*destination: './public/images/'+req.body.placeOf+'/'+req.body.idOf,*/
        destination: './public/images/' + req.params.nameof + '/' + req.params.idofregistrar,
        filename: function (req, file, cb) {

            // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
            i = i + 1;
            console.log(path.extname(file.originalname));
            cb(null, i + path.extname(file.originalname));


        }
    });

    var upload = multer({
        i: 2,
        storage: storage,
        limits: {fileSize: 10000000},
        fileFilter: function (req, file, cb) {
            checkFileType(file, cb);
        },

    }).array('files[]', 5);

    function checkFileType(file, cb) {
        const filetypes = /jpeg|jpg|png|gif/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: Images Only')
        }
    }

    upload(req, res, function (err) {
        if (err) {
            res.render('upload', {msg: err});
            console.log(err);
        } else {
            console.log(req.file);

            res.end("File has been uploaded");
            res.render('upload', {title: "huf"});
        }
    })

};

module.exports.detailAdminRender = function (req, res) {

    mainFilterPointes.find({_id: req.params.idontheURL}, function (err, docs) {
        if (err) {
            res.send(err);
        } else {
            //console.log(req.body.condominiumPlace);

            //joining path of directory
            const directoryPath = path.join(__dirname, '../public/images/' + docs[0].place + '/' + docs[0]._id);
            //passsing directoryPath and callback function
            fs.readdir(directoryPath, function (err, files) {
                //handling error
                if (err) {
                    return console.log('Unable to scan directory: ' + err);
                }
                console.log(files);
                /*//listing all files using forEach
                files.forEach(function (file) {
                    // Do whatever you want to do with the file
                    console.log(file);
                    myfilee = file;
                   /!* res.render('detailForAdmin', {myDocsId: docs[0], myfile:file})*!/*/

                res.render('detailForAdmin', {myDocsId: docs[0], myfil: files})

            });

        }

    });
};
module.exports.userApprovedMessageRender = function (req, res) {

    mainFilterPointes.updateOne({_id: req.params.idontheURLAdmin}, {$set: {approval: true}}, function (err, docs) {
        console.log(req.params.idontheURLAdmin);
        console.log(docs.approval);

        if (err) {
            res.send(err)
        } else {
            res.render('userApprovedMessage', {title: "userApprovedMessageRender"})
        }
    })
};