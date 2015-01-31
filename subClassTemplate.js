/*jslint browser: true, devel: true, indent: 2, maxlen: 82 */
/*global $, jQuery */
// Execute anonymous function when DOM is ready
$(function () {
  'use strict';
  var MyClass, myInstance;
  // Pseudoclassical subclassing
  /**
   * Support for:
   *  Shared Class properties (variables and functions in .prototype)
   *  Instance properties (this.) (variables)
   *   - Instance methods would work, but not typically needed/wanted
   *  Private variables and functions (creator function closure scope)
   *  Inherited properties (instance and shared)
   */

  /**
   * MyClass class description
   *
   * NOTE: The class (variable) name here must match the name that the closure
   *   scope wrapper assigns the result to.  Any dump (console.log) of an
   *   instance will show the class name created here.  Which would be expected
   *   to be the same as the 'external' class name.
   * NOTE: jslint complains about MyClass variable redefinition due to using
   *   the same name in the outer scope, but that is the intended functionality.
   *
   * @param {object} SuperClass the class to inherit from
   * @param {array|object}  extraMethods mixin methods container(s)
   */
  MyClass = (function (SuperClass, extraMethods) {
    //Superclass could be hard-coded, but passing it in seems more flexible
    var MyClass, privateData;

    // {Properties of} a single object can hold all class private data, or
    // separate variables can be used.
    privateData = {id: 0};

    // Helper and utility functions
    // Only visible in the closure scope used to build the class
    privateData.privateMethod1 = function () {
      privateData.id += 1;
      return privateData.id;
    };

    /**
    * MyClass class constructor description
    *
    * constructor parameter templates and descriptions
    **/
    MyClass = function () {// constructor parameters...
      SuperClass.call(this);// , arguments... for SuperClass constructor
      // hard-coded initialization, from parameters, defaults, or calculations
      // based on closure scope private class data: IE, increment a counter to
      // create a unique ID for the instance.
      this.id = privateData.privateMethod1();
      this.instanceProp1 = {};
    };
    MyClass.prototype = Object.create(SuperClass.prototype);
    MyClass.prototype.constructor = MyClass;

    // Mixin pattern?
    // Need more logic to handle overrides: probably want to merge all of the
    // provided objects/properties into an empty object, then merged the
    // existing prototype contents into that.  So that the explicitly created
    // prototype methods do now get overridden.  Or (better), do the mixin
    // first, then override with the local class properties.
    privateData.mixin = function (extras) {
      var extra, extrasCount;
      if (jQuery.isArray(extras)) {
        extrasCount = extras.length;
        for (extra = 0; extra < extrasCount; extra += 1) {
          privateData.mixin(extras[extra]);
        }
      } else {
        jQuery.extend(MyClass.prototype, extras);
      }
    };
    if (extraMethods) {
      privateData.mixin(extraMethods);
    }

    // Function(s) accessible from the class object, but not as a method of an
    // instance.
    MyClass.classMethod = function () {
      return null;
    };

    // Shared methods of the current (being created) class
    MyClass.prototype.sharedMethod1 = function () {// method parameters...
      privateData.privateMethod1();// method arguments...
      this.instanceProp1 = {};// access, create, update instance properties
    };

    return MyClass;// The subclassed object {constructor function}
  }(Object, Function.prototype));// ./(function () {}())
  // Pass the desired super class to the class creator function, as well as an
  // object [or array of objects] containing additional methods (actually
  // properties) to include in the new class' prototype

  myInstance = new MyClass();// constructor arguments...
  myInstance.sharedMethod1();// method arguments...
  console.log('::MyClass::');
  console.log(MyClass);// The construcor function
  console.log('::myInstance::');
  console.log(myInstance);// MyClass object including shared methods
  console.log('::myInstance.constructor::');
  console.log(myInstance.constructor);// function (MyClass)
  console.log('::typof myInstance.privateData::');
  console.log(typeof myInstance.privateData); // undefined
  console.log('::myInstance instanceof MyClass::');
  console.log(myInstance instanceof MyClass);
  console.log('end');
});// ./$(function()
