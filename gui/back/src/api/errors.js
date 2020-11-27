'use strict';

module.exports[404] = function pageNotFound(req, res) {
    res.status(404);
    res.send('404 Error: Page not found!');
};
