const Router = require('express');
const router = Router();


router.get('', (_req, res, _next) => {
    res.status(200);

    res.render('index', {
        title: "Checker"
    });
});

module.exports = router;