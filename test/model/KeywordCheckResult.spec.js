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
    instance = new ViaNettIntegrationApi.KeywordCheckResult();
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

  describe('KeywordCheckResult', function() {
    it('should create an instance of KeywordCheckResult', function() {
      // uncomment below and update the code to test KeywordCheckResult
      //var instane = new ViaNettIntegrationApi.KeywordCheckResult();
      //expect(instance).to.be.a(ViaNettIntegrationApi.KeywordCheckResult);
    });

    it('should have the property accessNumber (base name: "accessNumber")', function() {
      // uncomment below and update the code to test the property accessNumber
      //var instane = new ViaNettIntegrationApi.KeywordCheckResult();
      //expect(instance).to.be();
    });

    it('should have the property mcc (base name: "mcc")', function() {
      // uncomment below and update the code to test the property mcc
      //var instane = new ViaNettIntegrationApi.KeywordCheckResult();
      //expect(instance).to.be();
    });

    it('should have the property companyId (base name: "companyId")', function() {
      // uncomment below and update the code to test the property companyId
      //var instane = new ViaNettIntegrationApi.KeywordCheckResult();
      //expect(instance).to.be();
    });

    it('should have the property prefix (base name: "prefix")', function() {
      // uncomment below and update the code to test the property prefix
      //var instane = new ViaNettIntegrationApi.KeywordCheckResult();
      //expect(instance).to.be();
    });

    it('should have the property isAvailable (base name: "isAvailable")', function() {
      // uncomment below and update the code to test the property isAvailable
      //var instane = new ViaNettIntegrationApi.KeywordCheckResult();
      //expect(instance).to.be();
    });

    it('should have the property isManualProcessingRequired (base name: "isManualProcessingRequired")', function() {
      // uncomment below and update the code to test the property isManualProcessingRequired
      //var instane = new ViaNettIntegrationApi.KeywordCheckResult();
      //expect(instance).to.be();
    });

    it('should have the property errorCode (base name: "errorCode")', function() {
      // uncomment below and update the code to test the property errorCode
      //var instane = new ViaNettIntegrationApi.KeywordCheckResult();
      //expect(instance).to.be();
    });

    it('should have the property establishmentFee (base name: "establishmentFee")', function() {
      // uncomment below and update the code to test the property establishmentFee
      //var instane = new ViaNettIntegrationApi.KeywordCheckResult();
      //expect(instance).to.be();
    });

    it('should have the property monthlyFee (base name: "monthlyFee")', function() {
      // uncomment below and update the code to test the property monthlyFee
      //var instane = new ViaNettIntegrationApi.KeywordCheckResult();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ViaNettIntegrationApi.KeywordCheckResult();
      //expect(instance).to.be();
    });

    it('should have the property debug (base name: "debug")', function() {
      // uncomment below and update the code to test the property debug
      //var instane = new ViaNettIntegrationApi.KeywordCheckResult();
      //expect(instance).to.be();
    });

  });

}));