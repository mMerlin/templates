/*jslint browser: true, devel: true, indent: 2, maxlen: 82 */
/* jshint bitwise: true, curly: true, eqeqeq: true, es3: false,
   forin: true, freeze: true, futurehostile: true, latedef: true,
   maxcomplexity: 8, maxstatements: 35, noarg: true, nocomma: true,
   noempty: true, nonew: true, singleGroups: true, undef: true, unused: true,
   plusplus: true, strict: true, browser: true, devel: true
*/
// When jQuery (or some other libraries) is being used
/*global $, jQuery */

// Start things off when the DOM is ready
$(function () {
  'use strict';

  var myConfig = {};
  // Use an inner self-running anonymous function to really kick things off
  // if need to pass any configuration information on startup.
  (function (config) {
    return config;
  }(myConfig));// ./function(config)


  /*jslint vars: true */
  //////////////////////////////
  // Object Decorator Pattern //
  //////////////////////////////
  /**
   * Add functionality to an existing object
   *
   * Takes in an object, and one or more properties to it, and returns
   * the enhanced (decorated) object.
   *
   * name as the category of [real world] object being created, plus an
   * adjective describing the operation
   */
  var noun1Like = function (obj) {// , parameterList…
    obj.propertyName = {};// literal, calculation, function, object
    return obj;
  };
  // Starting from object, or with existing properties
  var myObj1a = noun1Like({});// , argumentList…
  var myObj1b = noun1Like({a: 10});
  /*jslint vars: false */


  /*jslint vars: true */
  //////////////////////////////
  // Functional Class Pattern //
  //////////////////////////////
  /**
   * Noun2 (Class) constructor function
   */
  var Noun2 = function () {// parameterList…
    var nounInstance = {prop1: 1};// properties: constants | parameters
    nounInstance.method1 = function () {
      // nounInstance from closure scope; new value or calculation
      nounInstance.prop2 = {};
    };
    return nounInstance;
  };
  var myObj2a = Noun2();// argumentList…
  /*jslint vars: false */


  /*jslint vars: true */
  ///////////////////////////////
  // Functional Shared Pattern //
  ///////////////////////////////
  /**
   * method to be run on any Noun3 instance
   */
  var noun3Method1 = function () {// parameterList…
    this.propertyName = {};// new value, maybe new property
  };
  /**
   * Noun3 (Class) constructor function
   *
   * functional class pattern with shared methods
   */
  var Noun3 = function () {// parameterList…
    var nounInstance = {prop1: 1};// properties: constants or from parameters
    nounInstance.method1 = noun3Method1;
    //nounInstance.methodN = nounMethodN;
    jQuery.extend(nounInstance, Noun3.methods);
    return nounInstance;
  };
  Noun3.methods = {
    method1 : function () {// parameterList…
      this.propertyName = {};// new value, maybe new property
    }
    // , methodn : function () {}
  };
  var myObj3a = Noun3();// argumentList…
  /*jslint vars: false */


  /*jslint vars: true */
  //////////////////////////////
  // Prototypal Class Pattern //
  //////////////////////////////
  /**
   * Noun4 (Class) constructor function
   */
  var Noun4 = function () {// parameterList…
    var nounInstance = Object.create(Noun4.methods);
    nounInstance.prop1 = {};// properties: constants or from parameters
    return nounInstance;
  };
  Noun4.methods = {
    method1 : function () {// parameterList…
      this.propertyName = {};// new value, maybe new property
    }
    // , methodn : function () {}
  };
  var myObj4a = Noun4();// argumentList…
  /*jslint vars: false */


  /*jslint vars: true */
  /**
   * Noun5 (Class) constructor function
   *
   * using the automatically supplied .prototype property
   */
  var Noun5 = function () {// parameterList…
    var nounInstance = Object.create(Noun5.prototype);
    nounInstance.prop1 = {};// properties: constants or from parameters
    return nounInstance;
  };
  Noun5.prototype.method1 = function () {// parameterList…
    this.propertyName = {};// new value, maybe new property
  };
  var myObj5a = Noun5();// argumentList…
  /*jslint vars: false */


  /*jslint vars: true */
  /////////////////////////////
  // Pseudoclassical Pattern //
  /////////////////////////////
  /**
   * Noun6 (Class constructor function)
   *
   * Syntactic sugar, but interpreter does optimizations
   */
  var Noun6 = function () {// parameterList…
    // auto provided (invisible) code from 'new'
    // this = Object.create(Noun6.prototype);
    this.prop1 = {};// properties: constants or from parameters
    // auto provided (invisible) code from 'new'
    // return this;
  };
  Noun6.prototype.method1 = function () {// parameterList…
    this.propertyName = {};// new value, maybe new property
  };
  var myObj6a = new Noun6();// argumentList…
  /*jslint vars: false */


  /*jslint vars: true */
  /////////////////////////////////
  // Pseudoclassical Subclassing //
  /////////////////////////////////
  /**
   * Superclass1 constructor function)
   *
   * Normal Pseudoclassical Pattern
   */
  var Superclass1 = function () {// parameterList…
    this.prop1 = {};// properties: constants or from parameters
  };
  Superclass1.prototype.method1 = function () {// parameterList…
    this.propertyName = {};// new value, maybe new property
  };
  /**
   * SubClass1 constructor function
   */
  var Subclass1 = function () {// parameterList…
    Superclass1.call(this);// , parameterList…
    // These could override properties of the superclass
    this.prop2 = {};// properties: constants or from parameters
  };
  Subclass1.prototype = Object.create(Superclass1.prototype);
  Subclass1.prototype.constructor = Subclass1;
  // These could override methods of the superclass
  Subclass1.prototype.method2 = function () {// parameterList…
    this.propertyName = {};// new value, maybe new property
  };
  var myObjS1a = new Subclass1();// argumentList…
  /*jslint vars: false */

  //Reduce jslint complaints for the template code
  return [myObj1a, myObj1b, myObj2a, myObj3a, myObj4a, myObj5a, myObj6a,
    myObjS1a];
});// ./function ()
