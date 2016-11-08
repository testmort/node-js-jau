/**
 * ViaNett Integration API
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ViaNettIntegrationApi);
  }
}(this, function(expect, ViaNettIntegrationApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ViaNettIntegrationApi.ContactDetails();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ContactDetails', function() {
    it('should create an instance of ContactDetails', function() {
      // uncomment below and update the code to test ContactDetails
      //var instane = new ViaNettIntegrationApi.ContactDetails();
      //expect(instance).to.be.a(ViaNettIntegrationApi.ContactDetails);
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instane = new ViaNettIntegrationApi.ContactDetails();
      //expect(instance).to.be();
    });

    it('should have the property middlename (base name: "middlename")', function() {
      // uncomment below and update the code to test the property middlename
      //var instane = new ViaNettIntegrationApi.ContactDetails();
      //expect(instance).to.be();
    });

    it('should have the property lastname (base name: "lastname")', function() {
      // uncomment below and update the code to test the property lastname
      //var instane = new ViaNettIntegrationApi.ContactDetails();
      //expect(instance).to.be();
    });

    it('should have the property streetAddress (base name: "streetAddress")', function() {
      // uncomment below and update the code to test the property streetAddress
      //var instane = new ViaNettIntegrationApi.ContactDetails();
      //expect(instance).to.be();
    });

    it('should have the property streetAddressZipCode (base name: "streetAddressZipCode")', function() {
      // uncomment below and update the code to test the property streetAddressZipCode
      //var instane = new ViaNettIntegrationApi.ContactDetails();
      //expect(instance).to.be();
    });

    it('should have the property streetCity (base name: "streetCity")', function() {
      // uncomment below and update the code to test the property streetCity
      //var instane = new ViaNettIntegrationApi.ContactDetails();
      //expect(instance).to.be();
    });

    it('should have the property dateBorn (base name: "dateBorn")', function() {
      // uncomment below and update the code to test the property dateBorn
      //var instane = new ViaNettIntegrationApi.ContactDetails();
      //expect(instance).to.be();
    });

    it('should have the property telephoneNr (base name: "telephoneNr")', function() {
      // uncomment below and update the code to test the property telephoneNr
      //var instane = new ViaNettIntegrationApi.ContactDetails();
      //expect(instance).to.be();
    });

    it('should have the property deathDate (base name: "deathDate")', function() {
      // uncomment below and update the code to test the property deathDate
      //var instane = new ViaNettIntegrationApi.ContactDetails();
      //expect(instance).to.be();
    });

    it('should have the property sex (base name: "sex")', function() {
      // uncomment below and update the code to test the property sex
      //var instane = new ViaNettIntegrationApi.ContactDetails();
      //expect(instance).to.be();
    });

  });

}));