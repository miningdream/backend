const router = require("express").Router();
const fetch = require("node-fetch").default;

router.get("/", async(req, res) => {

});

router.get("/search", async(req, res) => {

    let { q } = req.query;

});

module.exports = router;