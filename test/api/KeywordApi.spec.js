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
    instance = new ViaNettIntegrationApi.KeywordApi();
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

  describe('KeywordApi', function() {
    describe('keywordByIdDelete', function() {
      it('should call keywordByIdDelete successfully', function(done) {
        //uncomment below and update the code to test keywordByIdDelete
        //instance.keywordByIdDelete(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('keywordByIdGet', function() {
      it('should call keywordByIdGet successfully', function(done) {
        //uncomment below and update the code to test keywordByIdGet
        //instance.keywordByIdGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('keywordCheckGet', function() {
      it('should call keywordCheckGet successfully', function(done) {
        //uncomment below and update the code to test keywordCheckGet
        //instance.keywordCheckGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('keywordGet', function() {
      it('should call keywordGet successfully', function(done) {
        //uncomment below and update the code to test keywordGet
        //instance.keywordGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('keywordPost', function() {
      it('should call keywordPost successfully', function(done) {
        //uncomment below and update the code to test keywordPost
        //instance.keywordPost(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
