const Router = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
});

router.post('/accounts', function (req, res) {
    const user = req.body
    res.status(201).json(user);
});

module.exports = router;
