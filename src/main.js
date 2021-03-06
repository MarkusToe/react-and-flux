'use strict';

var React = require('react');
const Router = require('react-router');
const routes = require('./routes');

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
