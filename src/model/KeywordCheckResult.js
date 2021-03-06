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
    root.ViaNettIntegrationApi.KeywordCheckResult = factory(root.ViaNettIntegrationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The KeywordCheckResult model module.
   * @module model/KeywordCheckResult
   * @version v6
   */

  /**
   * Constructs a new <code>KeywordCheckResult</code>.
   * @alias module:model/KeywordCheckResult
   * @class
   * @param accessNumber {String} 
   * @param mcc {Integer} 
   * @param companyId {Integer} 
   * @param prefix {String} 
   * @param isAvailable {Boolean} True if the keyword can be created
   * @param isManualProcessingRequired {Boolean} True if the keyword must be manually processed after creation
   * @param errorCode {Integer} 
   */
  var exports = function(accessNumber, mcc, companyId, prefix, isAvailable, isManualProcessingRequired, errorCode) {
    var _this = this;

    _this['accessNumber'] = accessNumber;
    _this['mcc'] = mcc;
    _this['companyId'] = companyId;
    _this['prefix'] = prefix;
    _this['isAvailable'] = isAvailable;
    _this['isManualProcessingRequired'] = isManualProcessingRequired;
    _this['errorCode'] = errorCode;




  };

  /**
   * Constructs a <code>KeywordCheckResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KeywordCheckResult} obj Optional instance to populate.
   * @return {module:model/KeywordCheckResult} The populated <code>KeywordCheckResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessNumber')) {
        obj['accessNumber'] = ApiClient.convertToType(data['accessNumber'], 'String');
      }
      if (data.hasOwnProperty('mcc')) {
        obj['mcc'] = ApiClient.convertToType(data['mcc'], 'Integer');
      }
      if (data.hasOwnProperty('companyId')) {
        obj['companyId'] = ApiClient.convertToType(data['companyId'], 'Integer');
      }
      if (data.hasOwnProperty('prefix')) {
        obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
      }
      if (data.hasOwnProperty('isAvailable')) {
        obj['isAvailable'] = ApiClient.convertToType(data['isAvailable'], 'Boolean');
      }
      if (data.hasOwnProperty('isManualProcessingRequired')) {
        obj['isManualProcessingRequired'] = ApiClient.convertToType(data['isManualProcessingRequired'], 'Boolean');
      }
      if (data.hasOwnProperty('errorCode')) {
        obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'Integer');
      }
      if (data.hasOwnProperty('establishmentFee')) {
        obj['establishmentFee'] = ApiClient.convertToType(data['establishmentFee'], 'Number');
      }
      if (data.hasOwnProperty('monthlyFee')) {
        obj['monthlyFee'] = ApiClient.convertToType(data['monthlyFee'], 'Number');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('debug')) {
        obj['debug'] = ApiClient.convertToType(data['debug'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} accessNumber
   */
  exports.prototype['accessNumber'] = undefined;
  /**
   * @member {Integer} mcc
   */
  exports.prototype['mcc'] = undefined;
  /**
   * @member {Integer} companyId
   */
  exports.prototype['companyId'] = undefined;
  /**
   * @member {String} prefix
   */
  exports.prototype['prefix'] = undefined;
  /**
   * True if the keyword can be created
   * @member {Boolean} isAvailable
   */
  exports.prototype['isAvailable'] = undefined;
  /**
   * True if the keyword must be manually processed after creation
   * @member {Boolean} isManualProcessingRequired
   */
  exports.prototype['isManualProcessingRequired'] = undefined;
  /**
   * @member {Integer} errorCode
   */
  exports.prototype['errorCode'] = undefined;
  /**
   * @member {Number} establishmentFee
   */
  exports.prototype['establishmentFee'] = undefined;
  /**
   * @member {Number} monthlyFee
   */
  exports.prototype['monthlyFee'] = undefined;
  /**
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * Informational message to help you troubleshoot
   * @member {String} debug
   */
  exports.prototype['debug'] = undefined;



  return exports;
}));


