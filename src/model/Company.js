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
    root.ViaNettIntegrationApi.Company = factory(root.ViaNettIntegrationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Company model module.
   * @module model/Company
   * @version v6
   */

  /**
   * Constructs a new <code>Company</code>.
   * Company configuration
   * @alias module:model/Company
   * @class
   */
  var exports = function() {
    var _this = this;



























  };

  /**
   * Constructs a <code>Company</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Company} obj Optional instance to populate.
   * @return {module:model/Company} The populated <code>Company</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('companyId')) {
        obj['companyId'] = ApiClient.convertToType(data['companyId'], 'Integer');
      }
      if (data.hasOwnProperty('motherCompanyId')) {
        obj['motherCompanyId'] = ApiClient.convertToType(data['motherCompanyId'], 'Integer');
      }
      if (data.hasOwnProperty('mainCompanyId')) {
        obj['mainCompanyId'] = ApiClient.convertToType(data['mainCompanyId'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('disabled')) {
        obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
      }
      if (data.hasOwnProperty('demo')) {
        obj['demo'] = ApiClient.convertToType(data['demo'], 'Boolean');
      }
      if (data.hasOwnProperty('fromMcc')) {
        obj['fromMcc'] = ApiClient.convertToType(data['fromMcc'], 'Integer');
      }
      if (data.hasOwnProperty('fromNrEnabled')) {
        obj['fromNrEnabled'] = ApiClient.convertToType(data['fromNrEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('pricegroupEnabled')) {
        obj['pricegroupEnabled'] = ApiClient.convertToType(data['pricegroupEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('locationServiceEnabled')) {
        obj['locationServiceEnabled'] = ApiClient.convertToType(data['locationServiceEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('msgLimitEnabled')) {
        obj['msgLimitEnabled'] = ApiClient.convertToType(data['msgLimitEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('balanceLimitEnabled')) {
        obj['balanceLimitEnabled'] = ApiClient.convertToType(data['balanceLimitEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('hidePricesEnabled')) {
        obj['hidePricesEnabled'] = ApiClient.convertToType(data['hidePricesEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('postalAddress')) {
        obj['postalAddress'] = ApiClient.convertToType(data['postalAddress'], 'String');
      }
      if (data.hasOwnProperty('postalZip')) {
        obj['postalZip'] = ApiClient.convertToType(data['postalZip'], 'String');
      }
      if (data.hasOwnProperty('postalCity')) {
        obj['postalCity'] = ApiClient.convertToType(data['postalCity'], 'String');
      }
      if (data.hasOwnProperty('postalCountry')) {
        obj['postalCountry'] = ApiClient.convertToType(data['postalCountry'], 'String');
      }
      if (data.hasOwnProperty('homepage')) {
        obj['homepage'] = ApiClient.convertToType(data['homepage'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('customerSupportEmail')) {
        obj['customerSupportEmail'] = ApiClient.convertToType(data['customerSupportEmail'], 'String');
      }
      if (data.hasOwnProperty('technicalContactEmail')) {
        obj['technicalContactEmail'] = ApiClient.convertToType(data['technicalContactEmail'], 'String');
      }
      if (data.hasOwnProperty('technicalContactPhone')) {
        obj['technicalContactPhone'] = ApiClient.convertToType(data['technicalContactPhone'], 'String');
      }
      if (data.hasOwnProperty('autoResponseEmail')) {
        obj['autoResponseEmail'] = ApiClient.convertToType(data['autoResponseEmail'], 'String');
      }
      if (data.hasOwnProperty('defaultConnectionId')) {
        obj['defaultConnectionId'] = ApiClient.convertToType(data['defaultConnectionId'], 'Integer');
      }
      if (data.hasOwnProperty('defaultCampaignId')) {
        obj['defaultCampaignId'] = ApiClient.convertToType(data['defaultCampaignId'], 'Integer');
      }
      if (data.hasOwnProperty('sendAlertInvalidMsisdnEnabled')) {
        obj['sendAlertInvalidMsisdnEnabled'] = ApiClient.convertToType(data['sendAlertInvalidMsisdnEnabled'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Primary key
   * @member {Integer} companyId
   */
  exports.prototype['companyId'] = undefined;
  /**
   * The mother company (i.e. the companyid to which this companyid is a sub account, or 0 if top-level account)
   * @member {Integer} motherCompanyId
   */
  exports.prototype['motherCompanyId'] = undefined;
  /**
   * The top-level account (is identical to CompanyId if not a sub account)
   * @member {Integer} mainCompanyId
   */
  exports.prototype['mainCompanyId'] = undefined;
  /**
   * The customer name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Company account is disabled
   * @member {Boolean} disabled
   */
  exports.prototype['disabled'] = undefined;
  /**
   * Company account is demo
   * @member {Boolean} demo
   */
  exports.prototype['demo'] = undefined;
  /**
   * The country where the customer belongs (specified as a mobile country code)
   * @member {Integer} fromMcc
   */
  exports.prototype['fromMcc'] = undefined;
  /**
   * Whether dynamic sender is enabled
   * @member {Boolean} fromNrEnabled
   */
  exports.prototype['fromNrEnabled'] = undefined;
  /**
   * Whether SMS billing (CPA, GAS, etc) is enabled
   * @member {Boolean} pricegroupEnabled
   */
  exports.prototype['pricegroupEnabled'] = undefined;
  /**
   * Whether location service (GPS coordinates) is enabled
   * @member {Boolean} locationServiceEnabled
   */
  exports.prototype['locationServiceEnabled'] = undefined;
  /**
   * Whether a message limit (as specified in SMS_Left and MMS_Left) is enabled on the account
   * @member {Boolean} msgLimitEnabled
   */
  exports.prototype['msgLimitEnabled'] = undefined;
  /**
   * Whether a balance limit (as specified in Balance, BalanceLimit and BalanceCurNo) is enabled
   * @member {Boolean} balanceLimitEnabled
   */
  exports.prototype['balanceLimitEnabled'] = undefined;
  /**
   * Whether the account will display prices on the website (usually disabled for sub accounts)
   * @member {Boolean} hidePricesEnabled
   */
  exports.prototype['hidePricesEnabled'] = undefined;
  /**
   * The postal address
   * @member {String} postalAddress
   */
  exports.prototype['postalAddress'] = undefined;
  /**
   * The postal zip
   * @member {String} postalZip
   */
  exports.prototype['postalZip'] = undefined;
  /**
   * The postal city
   * @member {String} postalCity
   */
  exports.prototype['postalCity'] = undefined;
  /**
   * The postal country
   * @member {String} postalCountry
   */
  exports.prototype['postalCountry'] = undefined;
  /**
   * The URL to the customer's home page
   * @member {String} homepage
   */
  exports.prototype['homepage'] = undefined;
  /**
   * The customer's (commercial) e-mail
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The customer's e-mail for customer support enquiries
   * @member {String} customerSupportEmail
   */
  exports.prototype['customerSupportEmail'] = undefined;
  /**
   * The customer's e-mail for technical enquiries
   * @member {String} technicalContactEmail
   */
  exports.prototype['technicalContactEmail'] = undefined;
  /**
   * The customer's e-mail for technical enquiries
   * @member {String} technicalContactPhone
   */
  exports.prototype['technicalContactPhone'] = undefined;
  /**
   * The customer's e-mail for automatically generated technical notifications
   * @member {String} autoResponseEmail
   */
  exports.prototype['autoResponseEmail'] = undefined;
  /**
   * The default connection
   * @member {Integer} defaultConnectionId
   */
  exports.prototype['defaultConnectionId'] = undefined;
  /**
   * The default campaign
   * @member {Integer} defaultCampaignId
   */
  exports.prototype['defaultCampaignId'] = undefined;
  /**
   * Whether to send the customer an e-mail whenever they try to send a message to an invalid MSISDN
   * @member {Boolean} sendAlertInvalidMsisdnEnabled
   */
  exports.prototype['sendAlertInvalidMsisdnEnabled'] = undefined;



  return exports;
}));


