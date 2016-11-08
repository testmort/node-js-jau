# ViaNettIntegrationApi.Campaign

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaignId** | **Integer** | Primary key | [optional] 
**companyId** | **Integer** | The company ID (account) the campaign belongs to | [optional] 
**name** | **String** | The name (description) of the campaign | [optional] 
**msgLimitEnabled** | **Boolean** | Whether a message limit is enabled on traffic sent on this campaign | [optional] 
**msgLimitRemainingSms** | **Integer** | The number of remaining SMS (if MsgLimitEnabled is activated) allowed on this campaign | [optional] 
**msgLimitRemainingMms** | **Integer** | The number of remaining MMS (if MsgLimitEnabled is activated) allowed on this campaign | [optional] 
**fromNrEnabled** | **Boolean** | Whether dynamic sender address is enabled on traffic sent on this campaign | [optional] 
**pricegroupEnabled** | **Boolean** | Whether dynamic sender address is enabled on traffic sent on this campaign | [optional] 
**minimumAge** | **String** | The minimum age required for the recipient of the traffic sent on this campaign (only applies to billing traffic in certain markets) | [optional] 
**contentDescription** | **String** | The description shown on the end-user&#39;s phone bill for traffic sent on this campaign (only applies to billing traffic in certain markets) | [optional] 


