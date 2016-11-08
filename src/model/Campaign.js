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
    root.ViaNettIntegrationApi.Campaign = factory(root.ViaNettIntegrationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Campaign model module.
   * @module model/Campaign
   * @version v6
   */

  /**
   * Constructs a new <code>Campaign</code>.
   * @alias module:model/Campaign
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>Campaign</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Campaign} obj Optional instance to populate.
   * @return {module:model/Campaign} The populated <code>Campaign</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('campaignId')) {
        obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Integer');
      }
      if (data.hasOwnProperty('companyId')) {
        obj['companyId'] = ApiClient.convertToType(data['companyId'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('msgLimitEnabled')) {
        obj['msgLimitEnabled'] = ApiClient.convertToType(data['msgLimitEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('msgLimitRemainingSms')) {
        obj['msgLimitRemainingSms'] = ApiClient.convertToType(data['msgLimitRemainingSms'], 'Integer');
      }
      if (data.hasOwnProperty('msgLimitRemainingMms')) {
        obj['msgLimitRemainingMms'] = ApiClient.convertToType(data['msgLimitRemainingMms'], 'Integer');
      }
      if (data.hasOwnProperty('fromNrEnabled')) {
        obj['fromNrEnabled'] = ApiClient.convertToType(data['fromNrEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('pricegroupEnabled')) {
        obj['pricegroupEnabled'] = ApiClient.convertToType(data['pricegroupEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('minimumAge')) {
        obj['minimumAge'] = ApiClient.convertToType(data['minimumAge'], 'String');
      }
      if (data.hasOwnProperty('contentDescription')) {
        obj['contentDescription'] = ApiClient.convertToType(data['contentDescription'], 'String');
      }
    }
    return obj;
  }

  /**
   * Primary key
   * @member {Integer} campaignId
   */
  exports.prototype['campaignId'] = undefined;
  /**
   * The company ID (account) the campaign belongs to
   * @member {Integer} companyId
   */
  exports.prototype['companyId'] = undefined;
  /**
   * The name (description) of the campaign
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Whether a message limit is enabled on traffic sent on this campaign
   * @member {Boolean} msgLimitEnabled
   */
  exports.prototype['msgLimitEnabled'] = undefined;
  /**
   * The number of remaining SMS (if MsgLimitEnabled is activated) allowed on this campaign
   * @member {Integer} msgLimitRemainingSms
   */
  exports.prototype['msgLimitRemainingSms'] = undefined;
  /**
   * The number of remaining MMS (if MsgLimitEnabled is activated) allowed on this campaign
   * @member {Integer} msgLimitRemainingMms
   */
  exports.prototype['msgLimitRemainingMms'] = undefined;
  /**
   * Whether dynamic sender address is enabled on traffic sent on this campaign
   * @member {Boolean} fromNrEnabled
   */
  exports.prototype['fromNrEnabled'] = undefined;
  /**
   * Whether dynamic sender address is enabled on traffic sent on this campaign
   * @member {Boolean} pricegroupEnabled
   */
  exports.prototype['pricegroupEnabled'] = undefined;
  /**
   * The minimum age required for the recipient of the traffic sent on this campaign (only applies to billing traffic in certain markets)
   * @member {String} minimumAge
   */
  exports.prototype['minimumAge'] = undefined;
  /**
   * The description shown on the end-user's phone bill for traffic sent on this campaign (only applies to billing traffic in certain markets)
   * @member {String} contentDescription
   */
  exports.prototype['contentDescription'] = undefined;



  return exports;
}));


