const express = require('express');
const router = express.Router();
const operaCtrl = require('../../controllers/opera');
/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.post('/', operaCtrl.create);
router.get('/', operaCtrl.index);
router.get('/:id', operaCtrl.show);
router.delete('/:id', operaCtrl.deleteOpus);

module.exports = router;