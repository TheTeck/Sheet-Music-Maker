const { getNodeText } = require('@testing-library/dom');
const express = require('express');
const router = express.Router();
const operaCtrl = require('../../controllers/opera');
/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.post('/', isAuthorized, operaCtrl.create);
router.put('/:id', isAuthorized, operaCtrl.update);
router.get('/', isAuthorized, operaCtrl.index);
router.get('/:id', isAuthorized, operaCtrl.show);
router.delete('/:id', isAuthorized, operaCtrl.deleteOpus);

function isAuthorized(req, res, next) {
    if (req.user) return next();
    res.redirect('/api/users/login');
}

module.exports = router;