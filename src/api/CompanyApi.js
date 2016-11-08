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
    define(['ApiClient', 'model/Company'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Company'));
  } else {
    // Browser globals (root is window)
    if (!root.ViaNettIntegrationApi) {
      root.ViaNettIntegrationApi = {};
    }
    root.ViaNettIntegrationApi.CompanyApi = factory(root.ViaNettIntegrationApi.ApiClient, root.ViaNettIntegrationApi.Company);
  }
}(this, function(ApiClient, Company) {
  'use strict';

  /**
   * Company service.
   * @module api/CompanyApi
   * @version v6
   */

  /**
   * Constructs a new CompanyApi. 
   * @alias module:api/CompanyApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the companyByIdDelete operation.
     * @callback module:api/CompanyApi~companyByIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete sub-account
     * @param {Integer} id 
     * @param {module:api/CompanyApi~companyByIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.companyByIdDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling companyByIdDelete";
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
        '/company/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the companyByIdGet operation.
     * @callback module:api/CompanyApi~companyByIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Company} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get sub-account
     * @param {Integer} id 
     * @param {module:api/CompanyApi~companyByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Company}
     */
    this.companyByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling companyByIdGet";
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
      var returnType = Company;

      return this.apiClient.callApi(
        '/company/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the companyByIdPut operation.
     * @callback module:api/CompanyApi~companyByIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Company} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update account / sub-account
     * @param {Integer} id Set to 0 to update current account
     * @param {Object} opts Optional parameters
     * @param {module:model/Company} opts.value 
     * @param {module:api/CompanyApi~companyByIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Company}
     */
    this.companyByIdPut = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['value'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling companyByIdPut";
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
      var accepts = ['application/json'];
      var returnType = Company;

      return this.apiClient.callApi(
        '/company/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the companyCurrentGet operation.
     * @callback module:api/CompanyApi~companyCurrentGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Company} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current account
     * @param {module:api/CompanyApi~companyCurrentGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Company}
     */
    this.companyCurrentGet = function(callback) {
      var postBody = null;


      var pathParams = {
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
      var returnType = Company;

      return this.apiClient.callApi(
        '/company/current', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the companyGet operation.
     * @callback module:api/CompanyApi~companyGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Company>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List sub-accounts
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.companyId Default is current account
     * @param {module:api/CompanyApi~companyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Company>}
     */
    this.companyGet = function(opts, callback) {
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
      var returnType = [Company];

      return this.apiClient.callApi(
        '/company', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the companyPost operation.
     * @callback module:api/CompanyApi~companyPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Company} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new sub-account
     * @param {Object} opts Optional parameters
     * @param {module:model/Company} opts.value 
     * @param {module:api/CompanyApi~companyPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Company}
     */
    this.companyPost = function(opts, callback) {
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
      var accepts = ['application/json'];
      var returnType = Company;

      return this.apiClient.callApi(
        '/company', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
