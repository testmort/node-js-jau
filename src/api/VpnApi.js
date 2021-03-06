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
    define(['ApiClient', 'model/VpnConnection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/VpnConnection'));
  } else {
    // Browser globals (root is window)
    if (!root.ViaNettIntegrationApi) {
      root.ViaNettIntegrationApi = {};
    }
    root.ViaNettIntegrationApi.VpnApi = factory(root.ViaNettIntegrationApi.ApiClient, root.ViaNettIntegrationApi.VpnConnection);
  }
}(this, function(ApiClient, VpnConnection) {
  'use strict';

  /**
   * Vpn service.
   * @module api/VpnApi
   * @version v6
   */

  /**
   * Constructs a new VpnApi. 
   * @alias module:api/VpnApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the vpnByIdGet operation.
     * @callback module:api/VpnApi~vpnByIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VpnConnection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get VPN connection
     * @param {Integer} id 
     * @param {module:api/VpnApi~vpnByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VpnConnection}
     */
    this.vpnByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling vpnByIdGet";
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
      var returnType = VpnConnection;

      return this.apiClient.callApi(
        '/vpn/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the vpnByIdPkiCaGet operation.
     * @callback module:api/VpnApi~vpnByIdPkiCaGetCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Certificate Authority (CA)
     * @param {Integer} id 
     * @param {module:api/VpnApi~vpnByIdPkiCaGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.vpnByIdPkiCaGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling vpnByIdPkiCaGet";
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/vpn/{id}/pki/ca', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the vpnByIdPkiRevokePost operation.
     * @callback module:api/VpnApi~vpnByIdPkiRevokePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke a certificate
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.subject Subject or &#39;all&#39; to revoke all certificates signed for this connection
     * @param {module:api/VpnApi~vpnByIdPkiRevokePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.vpnByIdPkiRevokePost = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling vpnByIdPkiRevokePost";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'subject': opts['subject']
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
        '/vpn/{id}/pki/revoke', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the vpnByIdPkiSignPost operation.
     * @callback module:api/VpnApi~vpnByIdPkiSignPostCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sign a certificate
     * @param {Integer} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/VpnApi~vpnByIdPkiSignPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.vpnByIdPkiSignPost = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling vpnByIdPkiSignPost";
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/vpn/{id}/pki/sign', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the vpnGet operation.
     * @callback module:api/VpnApi~vpnGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/VpnConnection>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List VPN connections
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.companyId Default is current account
     * @param {module:api/VpnApi~vpnGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/VpnConnection>}
     */
    this.vpnGet = function(opts, callback) {
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
      var returnType = [VpnConnection];

      return this.apiClient.callApi(
        '/vpn', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the vpnPost operation.
     * @callback module:api/VpnApi~vpnPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new VPN connection
     * @param {Object} opts Optional parameters
     * @param {module:model/VpnConnection} opts.value 
     * @param {module:api/VpnApi~vpnPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.vpnPost = function(opts, callback) {
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
        '/vpn', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
