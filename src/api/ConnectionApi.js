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
    define(['ApiClient', 'model/Connection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Connection'));
  } else {
    // Browser globals (root is window)
    if (!root.ViaNettIntegrationApi) {
      root.ViaNettIntegrationApi = {};
    }
    root.ViaNettIntegrationApi.ConnectionApi = factory(root.ViaNettIntegrationApi.ApiClient, root.ViaNettIntegrationApi.Connection);
  }
}(this, function(ApiClient, Connection) {
  'use strict';

  /**
   * Connection service.
   * @module api/ConnectionApi
   * @version v6
   */

  /**
   * Constructs a new ConnectionApi. 
   * @alias module:api/ConnectionApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the connectionByIdDelete operation.
     * @callback module:api/ConnectionApi~connectionByIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete connection
     * @param {Integer} id 
     * @param {module:api/ConnectionApi~connectionByIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.connectionByIdDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling connectionByIdDelete";
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
        '/connection/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the connectionByIdGet operation.
     * @callback module:api/ConnectionApi~connectionByIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Connection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get connection
     * @param {Integer} id 
     * @param {module:api/ConnectionApi~connectionByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Connection}
     */
    this.connectionByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling connectionByIdGet";
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
      var returnType = Connection;

      return this.apiClient.callApi(
        '/connection/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the connectionByIdPut operation.
     * @callback module:api/ConnectionApi~connectionByIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update connection
     * @param {Integer} id ConnectionID
     * @param {Object} opts Optional parameters
     * @param {module:model/Connection} opts.value 
     * @param {module:api/ConnectionApi~connectionByIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.connectionByIdPut = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['value'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling connectionByIdPut";
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
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/connection/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the connectionDefaultGet operation.
     * @callback module:api/ConnectionApi~connectionDefaultGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Connection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get default connection
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.companyId Default is current account
     * @param {module:api/ConnectionApi~connectionDefaultGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Connection}
     */
    this.connectionDefaultGet = function(opts, callback) {
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
      var returnType = Connection;

      return this.apiClient.callApi(
        '/connection/default', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the connectionDefaultPut operation.
     * @callback module:api/ConnectionApi~connectionDefaultPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update default connection
     * @param {Object} opts Optional parameters
     * @param {module:model/Connection} opts.value 
     * @param {module:api/ConnectionApi~connectionDefaultPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.connectionDefaultPut = function(opts, callback) {
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
        '/connection/default', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the connectionGet operation.
     * @callback module:api/ConnectionApi~connectionGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Connection>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List connections
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.companyId Default is current account
     * @param {module:api/ConnectionApi~connectionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Connection>}
     */
    this.connectionGet = function(opts, callback) {
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
      var returnType = [Connection];

      return this.apiClient.callApi(
        '/connection', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the connectionPost operation.
     * @callback module:api/ConnectionApi~connectionPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new connection
     * @param {Object} opts Optional parameters
     * @param {module:model/Connection} opts.value 
     * @param {module:api/ConnectionApi~connectionPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.connectionPost = function(opts, callback) {
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
        '/connection', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
