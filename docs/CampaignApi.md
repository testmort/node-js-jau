# ViaNettIntegrationApi.CampaignApi

All URIs are relative to *https://api.vianett.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**campaignByIdDelete**](CampaignApi.md#campaignByIdDelete) | **DELETE** /campaign/{id} | Delete campaign
[**campaignByIdGet**](CampaignApi.md#campaignByIdGet) | **GET** /campaign/{id} | Get campaign
[**campaignByIdKeywordsGet**](CampaignApi.md#campaignByIdKeywordsGet) | **GET** /campaign/{id}/keywords | List keywords for campaign
[**campaignByIdPut**](CampaignApi.md#campaignByIdPut) | **PUT** /campaign/{id} | Update campaign
[**campaignGet**](CampaignApi.md#campaignGet) | **GET** /campaign | List campaigns
[**campaignPost**](CampaignApi.md#campaignPost) | **POST** /campaign | Create new campaign


<a name="campaignByIdDelete"></a>
# **campaignByIdDelete**
> campaignByIdDelete(id)

Delete campaign

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.CampaignApi();

var id = 56; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.campaignByIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="campaignByIdGet"></a>
# **campaignByIdGet**
> Campaign campaignByIdGet(id)

Get campaign

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.CampaignApi();

var id = 56; // Integer | CampaignID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| CampaignID | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="campaignByIdKeywordsGet"></a>
# **campaignByIdKeywordsGet**
> [Keyword] campaignByIdKeywordsGet(id)

List keywords for campaign

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.CampaignApi();

var id = 56; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignByIdKeywordsGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

[**[Keyword]**](Keyword.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="campaignByIdPut"></a>
# **campaignByIdPut**
> campaignByIdPut(id, opts)

Update campaign

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.CampaignApi();

var id = 56; // Integer | CampaignID

var opts = { 
  'value': new ViaNettIntegrationApi.Campaign() // Campaign | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.campaignByIdPut(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| CampaignID | 
 **value** | [**Campaign**](Campaign.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="campaignGet"></a>
# **campaignGet**
> [Campaign] campaignGet(opts)

List campaigns

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.CampaignApi();

var opts = { 
  'companyId': 56 // Integer | Default is current account
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Integer**| Default is current account | [optional] 

### Return type

[**[Campaign]**](Campaign.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="campaignPost"></a>
# **campaignPost**
> campaignPost(opts)

Create new campaign

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.CampaignApi();

var opts = { 
  'value': new ViaNettIntegrationApi.Campaign() // Campaign | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.campaignPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**Campaign**](Campaign.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

