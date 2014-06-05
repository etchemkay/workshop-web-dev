'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var AdzGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Adz generator!'));

    var prompts = [
      {
        type: 'confirm',
        name: 'headache',
        message: 'Kuchh lete kyun nahi? Coldarin lee?',
        default: false
      },
      {
        name: 'health',
        message: 'Kya hai jahan, tandurusti hai wahan??',
        default: 'Hint:Some Soap'
      }
    ];

    this.prompt(prompts, function (props) {
      this.tablet = props.headache;
      this.soap = props.health;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/templates');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = AdzGenerator;
