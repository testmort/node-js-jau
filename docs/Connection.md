# ViaNettIntegrationApi.Connection

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connectionId** | **Integer** | Primary key | [optional] 
**companyId** | **Integer** | The company ID to which this connection belongs | [optional] 
**description** | **String** | A description of the connection | [optional] 
**username** | **String** | The username for this connection | [optional] 
**password** | **String** | The password for this connection | [optional] 
**priorityOffset** | **Integer** |  | [optional] 
**defaultCampaignId** | **Integer** | The default campaign ID for the connection | [optional] 
**httpMoUrl** | **String** | The HTTP URL to which incoming messages (MO) are forwarded | [optional] 
**httpMoIncludeFullMsg** | **Boolean** | Whether an incoming message (MO) will be forwarded with a parameter fullmessage (containing the incoming message in its entirety) in addition to the regular prefix and message parameters | [optional] 
**httpDrUrl** | **String** | The HTTP URL to which delivery reports (DR) are forwarded | [optional] 
**httpDrExtended** | **Boolean** | Whether delivery reports (DR) are on extended format (i.e. more parameters and detailed information) or not (legacy mode) | [optional] 
**httpPost** | **Boolean** | Whether HTTP requests for incoming messages (MO) and delivery reports (DR) are always forwarded as HTTP POST (if disabled, both types are forwarded as HTTP GET, except incoming MMS, which are forwarded as HTTP POST) | [optional] 
**httpQueryStringEncoding** | **String** | The URL encoding of the HTTP forwarding requests for incoming messages (MO) and delivery reports (DR). \&quot;Default\&quot; means ISO-8859-1, whereas \&quot;UTF8\&quot; specifies UTF-8. | [optional] 


