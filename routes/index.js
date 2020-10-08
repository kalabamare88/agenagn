var express = require('express');
var router = express.Router();
myFunction = require('../controller/myFunctions');
var multer = require('multer');
var path = require('path');

mongoose = require('mongoose');
var mainFilterPointes = mongoose.model('mainFilterPointes');
var delalaDatas = mongoose.model('delalaDatas');
/* GET home page. */
router.get('/',myFunction.indexRender);
router.get('/guestHouse',myFunction.guestHouseRender);
router.get('/q',myFunction.filterRender);
router.get('/qg',myFunction.filterRenderGuestHouse);
router.get('/detail/:idontheURL',myFunction.detailRender);
router.get('/detailForAdmin/:idontheURL',myFunction.detailAdminRender);
router.get('/userPost',myFunction.userPostRender);
router.post('/confirmRegistration', myFunction.confirmRegistrationRender);
/*router.get('/addDataDelala', myFunction.addDataDelalaRender);*/
router.post('/upload/:idofregistrar/:nameof', myFunction.upload);
router.post('/iamtheadmin',myFunction.iamtheadmin);
router.get('/adminLogin',myFunction.adminLogin);
router.post('/detailForAdmin/userApprovedMessage/:idontheURLAdmin',myFunction.userApprovedMessageRender);
module.exports = router;
