const express = require('express');
const { allTranscation, creditTranscation, debitTranscation, addfunds} = require('../controller/transController');

const router = express.Router();

router.get('/all-trans',allTranscation); 
router.post('/credit-trans',creditTranscation);
router.post('/debit-trans',debitTranscation);

module.exports = router;

