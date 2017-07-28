const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: String,
  url: String,
  more: String
});

module.exports = mongoose.model('video',videoSchema,'videos');
