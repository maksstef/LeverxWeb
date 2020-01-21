var express = require('express');
var { createFridge, getAllFridges, getSingleFridge, updateFridge, deleteFridge } = require('../controllers/fridge');
const router = express.Router();

router.post('/fridges', createFridge);
router.get('/fridges', getAllFridges);
router.get('/fridges/:fridgeId', getSingleFridge);
router.patch('/fridgess/:fridgeId', updateFridge);
router.delete('/frisgess/:fridgeId', deleteFridge);

module.exports = router;