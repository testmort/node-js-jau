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
    instance = new ViaNettIntegrationApi.Campaign();
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

  describe('Campaign', function() {
    it('should create an instance of Campaign', function() {
      // uncomment below and update the code to test Campaign
      //var instane = new ViaNettIntegrationApi.Campaign();
      //expect(instance).to.be.a(ViaNettIntegrationApi.Campaign);
    });

    it('should have the property campaignId (base name: "campaignId")', function() {
      // uncomment below and update the code to test the property campaignId
      //var instane = new ViaNettIntegrationApi.Campaign();
      //expect(instance).to.be();
    });

    it('should have the property companyId (base name: "companyId")', function() {
      // uncomment below and update the code to test the property companyId
      //var instane = new ViaNettIntegrationApi.Campaign();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ViaNettIntegrationApi.Campaign();
      //expect(instance).to.be();
    });

    it('should have the property msgLimitEnabled (base name: "msgLimitEnabled")', function() {
      // uncomment below and update the code to test the property msgLimitEnabled
      //var instane = new ViaNettIntegrationApi.Campaign();
      //expect(instance).to.be();
    });

    it('should have the property msgLimitRemainingSms (base name: "msgLimitRemainingSms")', function() {
      // uncomment below and update the code to test the property msgLimitRemainingSms
      //var instane = new ViaNettIntegrationApi.Campaign();
      //expect(instance).to.be();
    });

    it('should have the property msgLimitRemainingMms (base name: "msgLimitRemainingMms")', function() {
      // uncomment below and update the code to test the property msgLimitRemainingMms
      //var instane = new ViaNettIntegrationApi.Campaign();
      //expect(instance).to.be();
    });

    it('should have the property fromNrEnabled (base name: "fromNrEnabled")', function() {
      // uncomment below and update the code to test the property fromNrEnabled
      //var instane = new ViaNettIntegrationApi.Campaign();
      //expect(instance).to.be();
    });

    it('should have the property pricegroupEnabled (base name: "pricegroupEnabled")', function() {
      // uncomment below and update the code to test the property pricegroupEnabled
      //var instane = new ViaNettIntegrationApi.Campaign();
      //expect(instance).to.be();
    });

    it('should have the property minimumAge (base name: "minimumAge")', function() {
      // uncomment below and update the code to test the property minimumAge
      //var instane = new ViaNettIntegrationApi.Campaign();
      //expect(instance).to.be();
    });

    it('should have the property contentDescription (base name: "contentDescription")', function() {
      // uncomment below and update the code to test the property contentDescription
      //var instane = new ViaNettIntegrationApi.Campaign();
      //expect(instance).to.be();
    });

  });

}));
