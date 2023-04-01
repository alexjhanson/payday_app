const Request = require('../models/request');

module.exports = {
    create,
    delete: deleteRequest,
    update,
}

function create(req, res) {
    Request.create(req.body)
    .then(r => res.status(200).json(r))
    .catch(e =>  {
        console.log(`could not add request ${e}`);
        res.status(400).json(e) });
}

function deleteRequest(req, res) {
    Request.deleteOne({_id: req.params.id})
    .then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e));
}

function update(req, res) {
    Request.findOneAndUpdate({_id: req.params.id}, {...req.body}, {new: true})
    .then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e));
}