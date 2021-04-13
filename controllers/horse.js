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
exports.horse_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await horse.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.horse_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await horse.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }

};
// Handle horse update form on PUT.
exports.horse_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await horse.findById(req.params.id)
        if (req.body.horsename) toUpdate.horsename = req.body.horsename;
        if (req.body.habitat) toUpdate.habitat = req.body.habitat;
        if (req.body.classification) toUpdate.classification = req.body.classification;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
    failed`);
    }
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
// Handle a show one view with id specified by query
exports.horse_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await horse.findById(req.query.id)
        res.render('horsedetail', { title: 'horse Detail', toShow: result });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.horse_create_Page = function(req, res) {
    console.log("create view")
    try {
        res.render('horsecreate', { title: 'horse Create' });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a costume.
// query provides the id
exports.horse_update_Page = async function(req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await horse.findById(req.query.id)
        res.render('horseupdate', { title: 'horse Update', toShow: result });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};