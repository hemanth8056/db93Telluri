var horse = require('../models/horse');
// List of all horses
exports.horse_list = async function(req, res) {
    try {
        thehorses = await horse.find();
        res.send(thehorses);
    } catch (err) {
        res.send(`{"error": ${err}}`);
        res.status(500);
    }
};
// for a specific horse.
exports.horse_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: horse detail: ' + req.params.id);
};
// Handle horse create on POST.
exports.horse_create_post = async function(req, res) {
    console.log(req.body)
    let document = new horse();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // { horsename: "Treasure", habitat: "Trees", classification: " phylum Chordata", price: 500 }
    document.horsename = req.body.horsename;
    document.habitat = req.body.habitat;
    document.classification = req.body.classification;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle horse delete form on DELETE.
exports.horse_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: horse delete DELETE ' + req.params.id);
};
// Handle horse update form on PUT.
exports.horse_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: horse update PUT' + req.params.id);
};
// Handle a show all view
exports.horse_view_all_Page = async function(req, res) {
    try {
        thehorses = await horse.find();
        console.log("njfndw")
        res.render('horses', { title: 'horse Search Results', results: thehorses });
    } catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};