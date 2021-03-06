/**
 * ViaNett Integration API
 * api.vianett.io
 *
 * OpenAPI spec version: v6
 * Contact: api@vianett.io
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Keyword', 'model/KeywordCheckResult', 'model/KeywordCreateModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Keyword'), require('../model/KeywordCheckResult'), require('../model/KeywordCreateModel'));
  } else {
    // Browser globals (root is window)
    if (!root.ViaNettIntegrationApi) {
      root.ViaNettIntegrationApi = {};
    }
    root.ViaNettIntegrationApi.KeywordApi = factory(root.ViaNettIntegrationApi.ApiClient, root.ViaNettIntegrationApi.Keyword, root.ViaNettIntegrationApi.KeywordCheckResult, root.ViaNettIntegrationApi.KeywordCreateModel);
  }
}(this, function(ApiClient, Keyword, KeywordCheckResult, KeywordCreateModel) {
  'use strict';

  /**
   * Keyword service.
   * @module api/KeywordApi
   * @version v6
   */

  /**
   * Constructs a new KeywordApi. 
   * @alias module:api/KeywordApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the keywordByIdDelete operation.
     * @callback module:api/KeywordApi~keywordByIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete keyword
     * @param {Integer} id 
     * @param {module:api/KeywordApi~keywordByIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.keywordByIdDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling keywordByIdDelete";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/keyword/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the keywordByIdGet operation.
     * @callback module:api/KeywordApi~keywordByIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Keyword} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get keyword
     * @param {Integer} id 
     * @param {module:api/KeywordApi~keywordByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Keyword}
     */
    this.keywordByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling keywordByIdGet";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Keyword;

      return this.apiClient.callApi(
        '/keyword/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the keywordCheckGet operation.
     * @callback module:api/KeywordApi~keywordCheckGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/KeywordCheckResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if keyword is available
     * @param {Object} opts Optional parameters
     * @param {String} opts.keyword 
     * @param {Integer} opts.mcc 
     * @param {Integer} opts.companyId Default is current account
     * @param {module:api/KeywordApi~keywordCheckGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/KeywordCheckResult>}
     */
    this.keywordCheckGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'keyword': opts['keyword'],
        'mcc': opts['mcc'],
        'companyId': opts['companyId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [KeywordCheckResult];

      return this.apiClient.callApi(
        '/keyword/check', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the keywordGet operation.
     * @callback module:api/KeywordApi~keywordGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Keyword>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List keywords
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.companyId Default is current account
     * @param {module:api/KeywordApi~keywordGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Keyword>}
     */
    this.keywordGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'companyId': opts['companyId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Keyword];

      return this.apiClient.callApi(
        '/keyword', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the keywordPost operation.
     * @callback module:api/KeywordApi~keywordPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new keyword
     * @param {Object} opts Optional parameters
     * @param {module:model/KeywordCreateModel} opts.value 
     * @param {module:api/KeywordApi~keywordPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.keywordPost = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['value'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/keyword', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
