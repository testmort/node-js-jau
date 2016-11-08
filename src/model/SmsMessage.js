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
    root.ViaNettIntegrationApi.SmsMessage = factory(root.ViaNettIntegrationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SmsMessage model module.
   * @module model/SmsMessage
   * @version v6
   */

  /**
   * Constructs a new <code>SmsMessage</code>.
   * SMS Message
   * @alias module:model/SmsMessage
   * @class
   * @param sourceAddr {String} The sender address of the message (numeric or alphanumeric)
   * @param tel {Integer} The recipient of this message
   * @param msg {String} The message contents
   */
  var exports = function(sourceAddr, tel, msg) {
    var _this = this;

    _this['sourceAddr'] = sourceAddr;
    _this['tel'] = tel;






    _this['msg'] = msg;






  };

  /**
   * Constructs a <code>SmsMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SmsMessage} obj Optional instance to populate.
   * @return {module:model/SmsMessage} The populated <code>SmsMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sourceAddr')) {
        obj['sourceAddr'] = ApiClient.convertToType(data['sourceAddr'], 'String');
      }
      if (data.hasOwnProperty('tel')) {
        obj['tel'] = ApiClient.convertToType(data['tel'], 'Integer');
      }
      if (data.hasOwnProperty('teleOp')) {
        obj['teleOp'] = ApiClient.convertToType(data['teleOp'], 'Integer');
      }
      if (data.hasOwnProperty('campaignId')) {
        obj['campaignId'] = ApiClient.convertToType(data['campaignId'], 'Integer');
      }
      if (data.hasOwnProperty('pricegroup')) {
        obj['pricegroup'] = ApiClient.convertToType(data['pricegroup'], 'Integer');
      }
      if (data.hasOwnProperty('msgID')) {
        obj['msgID'] = ApiClient.convertToType(data['msgID'], 'Integer');
      }
      if (data.hasOwnProperty('msgBinary')) {
        obj['msgBinary'] = ApiClient.convertToType(data['msgBinary'], 'Boolean');
      }
      if (data.hasOwnProperty('msgHeader')) {
        obj['msgHeader'] = ApiClient.convertToType(data['msgHeader'], 'String');
      }
      if (data.hasOwnProperty('msg')) {
        obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
      }
      if (data.hasOwnProperty('replyPathId')) {
        obj['replyPathId'] = ApiClient.convertToType(data['replyPathId'], 'Integer');
      }
      if (data.hasOwnProperty('replyPathValue')) {
        obj['replyPathValue'] = ApiClient.convertToType(data['replyPathValue'], 'Integer');
      }
      if (data.hasOwnProperty('nRq')) {
        obj['nRq'] = ApiClient.convertToType(data['nRq'], 'Boolean');
      }
      if (data.hasOwnProperty('scheduledDate')) {
        obj['scheduledDate'] = ApiClient.convertToType(data['scheduledDate'], 'Date');
      }
      if (data.hasOwnProperty('tagId')) {
        obj['tagId'] = ApiClient.convertToType(data['tagId'], 'String');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * The sender address of the message (numeric or alphanumeric)
   * @member {String} sourceAddr
   */
  exports.prototype['sourceAddr'] = undefined;
  /**
   * The recipient of this message
   * @member {Integer} tel
   */
  exports.prototype['tel'] = undefined;
  /**
   * The route or routing class used to send this message (default 0)
   * @member {Integer} teleOp
   */
  exports.prototype['teleOp'] = undefined;
  /**
   * The campaign on which the message is sent
   * @member {Integer} campaignId
   */
  exports.prototype['campaignId'] = undefined;
  /**
   * The amount (denoted in the local sub currency unit, e.g. øre in Scandinavia) to charge the recipient, or 0 if free for the recipient
   * @member {Integer} pricegroup
   */
  exports.prototype['pricegroup'] = undefined;
  /**
   * The ID for the message (returned in delivery report)
   * @member {Integer} msgID
   */
  exports.prototype['msgID'] = undefined;
  /**
   * Whether the message is a binary message (in which case the Msg parameter needs to be a hexadecimal string)
   * @member {Boolean} msgBinary
   */
  exports.prototype['msgBinary'] = undefined;
  /**
   * The message header (e.g. concat header), specified in hexadecimal format
   * @member {String} msgHeader
   */
  exports.prototype['msgHeader'] = undefined;
  /**
   * The message contents
   * @member {String} msg
   */
  exports.prototype['msg'] = undefined;
  /**
   * If set to a value &gt; 0, the ID of a replypath conversation (any responding incoming messages will be tagged with this value)
   * @member {Integer} replyPathId
   */
  exports.prototype['replyPathId'] = undefined;
  /**
   * If replypath activated, this is the amount of time in minutes it will be possible for the recipient to respond to this message
   * @member {Integer} replyPathValue
   */
  exports.prototype['replyPathValue'] = undefined;
  /**
   * Whether a notification request (i.e. the actual delivery status) will be returned
   * @member {Boolean} nRq
   */
  exports.prototype['nRq'] = undefined;
  /**
   * The date and time when the message should be sent (default now)
   * @member {Date} scheduledDate
   */
  exports.prototype['scheduledDate'] = undefined;
  /**
   * A tag used for various internal purposes on a per-customer basis (default null)
   * @member {String} tagId
   */
  exports.prototype['tagId'] = undefined;
  /**
   * The priority of the message. Larger value means higher priority. (default 0)
   * @member {Integer} priority
   */
  exports.prototype['priority'] = undefined;



  return exports;
}));


