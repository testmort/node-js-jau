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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ViaNettIntegrationApi) {
      root.ViaNettIntegrationApi = {};
    }
    root.ViaNettIntegrationApi.Connection = factory(root.ViaNettIntegrationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Connection model module.
   * @module model/Connection
   * @version v6
   */

  /**
   * Constructs a new <code>Connection</code>.
   * @alias module:model/Connection
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>Connection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Connection} obj Optional instance to populate.
   * @return {module:model/Connection} The populated <code>Connection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('connectionId')) {
        obj['connectionId'] = ApiClient.convertToType(data['connectionId'], 'Integer');
      }
      if (data.hasOwnProperty('companyId')) {
        obj['companyId'] = ApiClient.convertToType(data['companyId'], 'Integer');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('priorityOffset')) {
        obj['priorityOffset'] = ApiClient.convertToType(data['priorityOffset'], 'Integer');
      }
      if (data.hasOwnProperty('defaultCampaignId')) {
        obj['defaultCampaignId'] = ApiClient.convertToType(data['defaultCampaignId'], 'Integer');
      }
      if (data.hasOwnProperty('httpMoUrl')) {
        obj['httpMoUrl'] = ApiClient.convertToType(data['httpMoUrl'], 'String');
      }
      if (data.hasOwnProperty('httpMoIncludeFullMsg')) {
        obj['httpMoIncludeFullMsg'] = ApiClient.convertToType(data['httpMoIncludeFullMsg'], 'Boolean');
      }
      if (data.hasOwnProperty('httpDrUrl')) {
        obj['httpDrUrl'] = ApiClient.convertToType(data['httpDrUrl'], 'String');
      }
      if (data.hasOwnProperty('httpDrExtended')) {
        obj['httpDrExtended'] = ApiClient.convertToType(data['httpDrExtended'], 'Boolean');
      }
      if (data.hasOwnProperty('httpPost')) {
        obj['httpPost'] = ApiClient.convertToType(data['httpPost'], 'Boolean');
      }
      if (data.hasOwnProperty('httpQueryStringEncoding')) {
        obj['httpQueryStringEncoding'] = ApiClient.convertToType(data['httpQueryStringEncoding'], 'String');
      }
    }
    return obj;
  }

  /**
   * Primary key
   * @member {Integer} connectionId
   */
  exports.prototype['connectionId'] = undefined;
  /**
   * The company ID to which this connection belongs
   * @member {Integer} companyId
   */
  exports.prototype['companyId'] = undefined;
  /**
   * A description of the connection
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The username for this connection
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * The password for this connection
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * 
   * @member {Integer} priorityOffset
   */
  exports.prototype['priorityOffset'] = undefined;
  /**
   * The default campaign ID for the connection
   * @member {Integer} defaultCampaignId
   */
  exports.prototype['defaultCampaignId'] = undefined;
  /**
   * The HTTP URL to which incoming messages (MO) are forwarded
   * @member {String} httpMoUrl
   */
  exports.prototype['httpMoUrl'] = undefined;
  /**
   * Whether an incoming message (MO) will be forwarded with a parameter fullmessage (containing the incoming message in its entirety) in addition to the regular prefix and message parameters
   * @member {Boolean} httpMoIncludeFullMsg
   */
  exports.prototype['httpMoIncludeFullMsg'] = undefined;
  /**
   * The HTTP URL to which delivery reports (DR) are forwarded
   * @member {String} httpDrUrl
   */
  exports.prototype['httpDrUrl'] = undefined;
  /**
   * Whether delivery reports (DR) are on extended format (i.e. more parameters and detailed information) or not (legacy mode)
   * @member {Boolean} httpDrExtended
   */
  exports.prototype['httpDrExtended'] = undefined;
  /**
   * Whether HTTP requests for incoming messages (MO) and delivery reports (DR) are always forwarded as HTTP POST (if disabled, both types are forwarded as HTTP GET, except incoming MMS, which are forwarded as HTTP POST)
   * @member {Boolean} httpPost
   */
  exports.prototype['httpPost'] = undefined;
  /**
   * The URL encoding of the HTTP forwarding requests for incoming messages (MO) and delivery reports (DR). \"Default\" means ISO-8859-1, whereas \"UTF8\" specifies UTF-8.
   * @member {String} httpQueryStringEncoding
   */
  exports.prototype['httpQueryStringEncoding'] = undefined;



  return exports;
}));


