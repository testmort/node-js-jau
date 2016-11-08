# ViaNettIntegrationApi.SmsMessage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceAddr** | **String** | The sender address of the message (numeric or alphanumeric) | 
**tel** | **Integer** | The recipient of this message | 
**teleOp** | **Integer** | The route or routing class used to send this message (default 0) | [optional] 
**campaignId** | **Integer** | The campaign on which the message is sent | [optional] 
**pricegroup** | **Integer** | The amount (denoted in the local sub currency unit, e.g. øre in Scandinavia) to charge the recipient, or 0 if free for the recipient | [optional] 
**msgID** | **Integer** | The ID for the message (returned in delivery report) | [optional] 
**msgBinary** | **Boolean** | Whether the message is a binary message (in which case the Msg parameter needs to be a hexadecimal string) | [optional] 
**msgHeader** | **String** | The message header (e.g. concat header), specified in hexadecimal format | [optional] 
**msg** | **String** | The message contents | 
**replyPathId** | **Integer** | If set to a value &amp;gt; 0, the ID of a replypath conversation (any responding incoming messages will be tagged with this value) | [optional] 
**replyPathValue** | **Integer** | If replypath activated, this is the amount of time in minutes it will be possible for the recipient to respond to this message | [optional] 
**nRq** | **Boolean** | Whether a notification request (i.e. the actual delivery status) will be returned | [optional] 
**scheduledDate** | **Date** | The date and time when the message should be sent (default now) | [optional] 
**tagId** | **String** | A tag used for various internal purposes on a per-customer basis (default null) | [optional] 
**priority** | **Integer** | The priority of the message. Larger value means higher priority. (default 0) | [optional] 


