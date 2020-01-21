'use strict';
var mongoose = require('mongoose');
var Fridge = require('../models/fridge');

module.exports.createFridge =  function (req, res) {
  const fridge = new Fridge({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    model: req.body.model,
  });
  return fridge
    .save()
    .then((newFridge) => {
      return res.status(201).json({
        success: true,
        message: 'New fridge has been created',
        Fridge: newFridge,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: error.message,
      });
    });
}

module.exports.getAllFridges =  function (req, res) {
    Fridge.find()
      .select('_id name model')
      .then((allFridges) => {
        return res.status(200).json({
          success: true,
          message: 'List of all fridges',
          Fridge: allFridges,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: err.message,
        });
    });
}

module.exports.getSingleFridge =  function (req, res) {
    const id = req.params.fridgeId;
    Fridge.findById(id)
      .then((singleFridge) => {
        res.status(200).json({
          success: true,
          message: `More on ${singleFridge.name}`,
          Fridge: singleFridge,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: 'This fridge does not exist',
          error: err.message,
        });
    });
}

module.exports.updateFridge =  function (req, res) {
    const id = req.params.fridgeId;
    const updateObject = req.body;
    Fridge.update({ _id:id }, { $set:updateObject })
      .exec()
      .then(() => {
        res.status(200).json({
          success: true,
          message: 'Fridge is updated',
          updateFridge: updateObject,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: 'Server error. Please try again.'
        });
    });
}

module.exports.deleteFridge =  function (req, res) {
    const id = req.params.fridgeId;
    Fridge.findByIdAndRemove(id)
      .exec()
      .then(()=> res.status(204).json({
        success: true,
      }))
      .catch((err) => res.status(500).json({
        success: false,
    }));
}