const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Data from posts...')
});

router.post('/', (req, res) => {
    res.send('Data from post posts...')
});

module.exports = router;