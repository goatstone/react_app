/** @jsx React.DOM */
var React = require('react');
var App = require('./App.js');
var Spinner = require('./ui/Spinner.js');

React.render(<App/>, document.body);
React.render(<Spinner/>, document.querySelector('div div')); 