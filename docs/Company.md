# ViaNettIntegrationApi.Company

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyId** | **Integer** | Primary key | [optional] 
**motherCompanyId** | **Integer** | The mother company (i.e. the companyid to which this companyid is a sub account, or 0 if top-level account) | [optional] 
**mainCompanyId** | **Integer** | The top-level account (is identical to CompanyId if not a sub account) | [optional] 
**name** | **String** | The customer name | [optional] 
**disabled** | **Boolean** | Company account is disabled | [optional] 
**demo** | **Boolean** | Company account is demo | [optional] 
**fromMcc** | **Integer** | The country where the customer belongs (specified as a mobile country code) | [optional] 
**fromNrEnabled** | **Boolean** | Whether dynamic sender is enabled | [optional] 
**pricegroupEnabled** | **Boolean** | Whether SMS billing (CPA, GAS, etc) is enabled | [optional] 
**locationServiceEnabled** | **Boolean** | Whether location service (GPS coordinates) is enabled | [optional] 
**msgLimitEnabled** | **Boolean** | Whether a message limit (as specified in SMS_Left and MMS_Left) is enabled on the account | [optional] 
**balanceLimitEnabled** | **Boolean** | Whether a balance limit (as specified in Balance, BalanceLimit and BalanceCurNo) is enabled | [optional] 
**hidePricesEnabled** | **Boolean** | Whether the account will display prices on the website (usually disabled for sub accounts) | [optional] 
**postalAddress** | **String** | The postal address | [optional] 
**postalZip** | **String** | The postal zip | [optional] 
**postalCity** | **String** | The postal city | [optional] 
**postalCountry** | **String** | The postal country | [optional] 
**homepage** | **String** | The URL to the customer&#39;s home page | [optional] 
**email** | **String** | The customer&#39;s (commercial) e-mail | [optional] 
**customerSupportEmail** | **String** | The customer&#39;s e-mail for customer support enquiries | [optional] 
**technicalContactEmail** | **String** | The customer&#39;s e-mail for technical enquiries | [optional] 
**technicalContactPhone** | **String** | The customer&#39;s e-mail for technical enquiries | [optional] 
**autoResponseEmail** | **String** | The customer&#39;s e-mail for automatically generated technical notifications | [optional] 
**defaultConnectionId** | **Integer** | The default connection | [optional] 
**defaultCampaignId** | **Integer** | The default campaign | [optional] 
**sendAlertInvalidMsisdnEnabled** | **Boolean** | Whether to send the customer an e-mail whenever they try to send a message to an invalid MSISDN | [optional] 


