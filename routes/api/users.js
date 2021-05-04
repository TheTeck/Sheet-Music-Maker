const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');
const multer = require('multer');
const upload = multer();
/*---------- Public Routes ----------*/
router.post('/signup', upload.single('photo'), usersCtrl.signup);
router.post('/login', usersCtrl.login);

/*---------- Protected Routes ----------*/
router.get('/', isAuthorized, usersCtrl.index);
router.get('/:id', isAuthorized, usersCtrl.show);
router.put('/:id', isAuthorized, usersCtrl.update);
router.delete('/:id', isAuthorized, usersCtrl.deleteUser);

function isAuthorized(req, res, next) {
    if (req.user) return next();
    res.redirect('/api/users/login');
}

module.exports = router;