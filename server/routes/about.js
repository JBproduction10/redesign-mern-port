const router = require('express').Router();
const {
    getAbout, 
    addAbout, 
    getAboutId, 
    updateAboutId,
    deleteAbout
} = require("../controllers/about");

// get about user
router.get("/about", getAbout);

// add about user
router.post('/about', addAbout);

// get a specific about user by id
router.get('/about/:id', getAboutId);

// update about user
router.put('/about/update/:id', updateAboutId);

// delete about user
router.delete('/about/:id', deleteAbout);

module.exports = router;