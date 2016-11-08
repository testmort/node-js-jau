# ViaNettIntegrationApi.KeywordApi

All URIs are relative to *https://api.vianett.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**keywordByIdDelete**](KeywordApi.md#keywordByIdDelete) | **DELETE** /keyword/{id} | Delete keyword
[**keywordByIdGet**](KeywordApi.md#keywordByIdGet) | **GET** /keyword/{id} | Get keyword
[**keywordCheckGet**](KeywordApi.md#keywordCheckGet) | **GET** /keyword/check | Check if keyword is available
[**keywordGet**](KeywordApi.md#keywordGet) | **GET** /keyword | List keywords
[**keywordPost**](KeywordApi.md#keywordPost) | **POST** /keyword | Create new keyword


<a name="keywordByIdDelete"></a>
# **keywordByIdDelete**
> keywordByIdDelete(id)

Delete keyword

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.KeywordApi();

var id = 56; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.keywordByIdDelete(id, callback);
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

<a name="keywordByIdGet"></a>
# **keywordByIdGet**
> Keyword keywordByIdGet(id)

Get keyword

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.KeywordApi();

var id = 56; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.keywordByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

[**Keyword**](Keyword.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="keywordCheckGet"></a>
# **keywordCheckGet**
> [KeywordCheckResult] keywordCheckGet(opts)

Check if keyword is available

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.KeywordApi();

var opts = { 
  'keyword': "keyword_example", // String | 
  'mcc': 56, // Integer | 
  'companyId': 56 // Integer | Default is current account
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.keywordCheckGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyword** | **String**|  | [optional] 
 **mcc** | **Integer**|  | [optional] 
 **companyId** | **Integer**| Default is current account | [optional] 

### Return type

[**[KeywordCheckResult]**](KeywordCheckResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="keywordGet"></a>
# **keywordGet**
> [Keyword] keywordGet(opts)

List keywords

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.KeywordApi();

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
apiInstance.keywordGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Integer**| Default is current account | [optional] 

### Return type

[**[Keyword]**](Keyword.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="keywordPost"></a>
# **keywordPost**
> keywordPost(opts)

Create new keyword

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.KeywordApi();

var opts = { 
  'value': new ViaNettIntegrationApi.KeywordCreateModel() // KeywordCreateModel | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.keywordPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**KeywordCreateModel**](KeywordCreateModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

