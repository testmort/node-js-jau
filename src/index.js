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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Campaign', 'model/Company', 'model/Connection', 'model/ContactDetails', 'model/ContactDetailsResult', 'model/ContactGroup', 'model/FreeOfChargeUser', 'model/HlrLookupResult', 'model/Keyword', 'model/KeywordCheckResult', 'model/KeywordCreateModel', 'model/LookupResult', 'model/MessageLogItem', 'model/NoContentResult', 'model/Pong', 'model/ServiceType', 'model/SmsMessage', 'model/SmsMessageBatch', 'model/VpnConnection', 'api/CampaignApi', 'api/CompanyApi', 'api/ConnectionApi', 'api/ContactApi', 'api/FreeOfChargeUserApi', 'api/KeywordApi', 'api/LookupApi', 'api/SendSmsApi', 'api/ServiceTypeApi', 'api/TestApi', 'api/VpnApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Campaign'), require('./model/Company'), require('./model/Connection'), require('./model/ContactDetails'), require('./model/ContactDetailsResult'), require('./model/ContactGroup'), require('./model/FreeOfChargeUser'), require('./model/HlrLookupResult'), require('./model/Keyword'), require('./model/KeywordCheckResult'), require('./model/KeywordCreateModel'), require('./model/LookupResult'), require('./model/MessageLogItem'), require('./model/NoContentResult'), require('./model/Pong'), require('./model/ServiceType'), require('./model/SmsMessage'), require('./model/SmsMessageBatch'), require('./model/VpnConnection'), require('./api/CampaignApi'), require('./api/CompanyApi'), require('./api/ConnectionApi'), require('./api/ContactApi'), require('./api/FreeOfChargeUserApi'), require('./api/KeywordApi'), require('./api/LookupApi'), require('./api/SendSmsApi'), require('./api/ServiceTypeApi'), require('./api/TestApi'), require('./api/VpnApi'));
  }
}(function(ApiClient, Campaign, Company, Connection, ContactDetails, ContactDetailsResult, ContactGroup, FreeOfChargeUser, HlrLookupResult, Keyword, KeywordCheckResult, KeywordCreateModel, LookupResult, MessageLogItem, NoContentResult, Pong, ServiceType, SmsMessage, SmsMessageBatch, VpnConnection, CampaignApi, CompanyApi, ConnectionApi, ContactApi, FreeOfChargeUserApi, KeywordApi, LookupApi, SendSmsApi, ServiceTypeApi, TestApi, VpnApi) {
  'use strict';

  /**
   * api_vianett_io.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ViaNettIntegrationApi = require('index'); // See note below*.
   * var xxxSvc = new ViaNettIntegrationApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ViaNettIntegrationApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ViaNettIntegrationApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ViaNettIntegrationApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version v6
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Campaign model constructor.
     * @property {module:model/Campaign}
     */
    Campaign: Campaign,
    /**
     * The Company model constructor.
     * @property {module:model/Company}
     */
    Company: Company,
    /**
     * The Connection model constructor.
     * @property {module:model/Connection}
     */
    Connection: Connection,
    /**
     * The ContactDetails model constructor.
     * @property {module:model/ContactDetails}
     */
    ContactDetails: ContactDetails,
    /**
     * The ContactDetailsResult model constructor.
     * @property {module:model/ContactDetailsResult}
     */
    ContactDetailsResult: ContactDetailsResult,
    /**
     * The ContactGroup model constructor.
     * @property {module:model/ContactGroup}
     */
    ContactGroup: ContactGroup,
    /**
     * The FreeOfChargeUser model constructor.
     * @property {module:model/FreeOfChargeUser}
     */
    FreeOfChargeUser: FreeOfChargeUser,
    /**
     * The HlrLookupResult model constructor.
     * @property {module:model/HlrLookupResult}
     */
    HlrLookupResult: HlrLookupResult,
    /**
     * The Keyword model constructor.
     * @property {module:model/Keyword}
     */
    Keyword: Keyword,
    /**
     * The KeywordCheckResult model constructor.
     * @property {module:model/KeywordCheckResult}
     */
    KeywordCheckResult: KeywordCheckResult,
    /**
     * The KeywordCreateModel model constructor.
     * @property {module:model/KeywordCreateModel}
     */
    KeywordCreateModel: KeywordCreateModel,
    /**
     * The LookupResult model constructor.
     * @property {module:model/LookupResult}
     */
    LookupResult: LookupResult,
    /**
     * The MessageLogItem model constructor.
     * @property {module:model/MessageLogItem}
     */
    MessageLogItem: MessageLogItem,
    /**
     * The NoContentResult model constructor.
     * @property {module:model/NoContentResult}
     */
    NoContentResult: NoContentResult,
    /**
     * The Pong model constructor.
     * @property {module:model/Pong}
     */
    Pong: Pong,
    /**
     * The ServiceType model constructor.
     * @property {module:model/ServiceType}
     */
    ServiceType: ServiceType,
    /**
     * The SmsMessage model constructor.
     * @property {module:model/SmsMessage}
     */
    SmsMessage: SmsMessage,
    /**
     * The SmsMessageBatch model constructor.
     * @property {module:model/SmsMessageBatch}
     */
    SmsMessageBatch: SmsMessageBatch,
    /**
     * The VpnConnection model constructor.
     * @property {module:model/VpnConnection}
     */
    VpnConnection: VpnConnection,
    /**
     * The CampaignApi service constructor.
     * @property {module:api/CampaignApi}
     */
    CampaignApi: CampaignApi,
    /**
     * The CompanyApi service constructor.
     * @property {module:api/CompanyApi}
     */
    CompanyApi: CompanyApi,
    /**
     * The ConnectionApi service constructor.
     * @property {module:api/ConnectionApi}
     */
    ConnectionApi: ConnectionApi,
    /**
     * The ContactApi service constructor.
     * @property {module:api/ContactApi}
     */
    ContactApi: ContactApi,
    /**
     * The FreeOfChargeUserApi service constructor.
     * @property {module:api/FreeOfChargeUserApi}
     */
    FreeOfChargeUserApi: FreeOfChargeUserApi,
    /**
     * The KeywordApi service constructor.
     * @property {module:api/KeywordApi}
     */
    KeywordApi: KeywordApi,
    /**
     * The LookupApi service constructor.
     * @property {module:api/LookupApi}
     */
    LookupApi: LookupApi,
    /**
     * The SendSmsApi service constructor.
     * @property {module:api/SendSmsApi}
     */
    SendSmsApi: SendSmsApi,
    /**
     * The ServiceTypeApi service constructor.
     * @property {module:api/ServiceTypeApi}
     */
    ServiceTypeApi: ServiceTypeApi,
    /**
     * The TestApi service constructor.
     * @property {module:api/TestApi}
     */
    TestApi: TestApi,
    /**
     * The VpnApi service constructor.
     * @property {module:api/VpnApi}
     */
    VpnApi: VpnApi
  };

  return exports;
}));