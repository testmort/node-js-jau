# ViaNettIntegrationApi.FreeOfChargeUserApi

All URIs are relative to *https://api.vianett.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**testTelByIdDelete**](FreeOfChargeUserApi.md#testTelByIdDelete) | **DELETE** /test-tel/{id} | Delete free of charge user
[**testTelByIdGet**](FreeOfChargeUserApi.md#testTelByIdGet) | **GET** /test-tel/{id} | Get free of charge user
[**testTelGet**](FreeOfChargeUserApi.md#testTelGet) | **GET** /test-tel | List free of charge users
[**testTelPost**](FreeOfChargeUserApi.md#testTelPost) | **POST** /test-tel | Add free of charge user


<a name="testTelByIdDelete"></a>
# **testTelByIdDelete**
> NoContentResult testTelByIdDelete(id)

Delete free of charge user

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.FreeOfChargeUserApi();

var id = 56; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testTelByIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

[**NoContentResult**](NoContentResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testTelByIdGet"></a>
# **testTelByIdGet**
> FreeOfChargeUser testTelByIdGet(id)

Get free of charge user

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.FreeOfChargeUserApi();

var id = 56; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testTelByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

[**FreeOfChargeUser**](FreeOfChargeUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testTelGet"></a>
# **testTelGet**
> [FreeOfChargeUser] testTelGet(opts)

List free of charge users

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.FreeOfChargeUserApi();

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
apiInstance.testTelGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Integer**| Default is current account | [optional] 

### Return type

[**[FreeOfChargeUser]**](FreeOfChargeUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testTelPost"></a>
# **testTelPost**
> FreeOfChargeUser testTelPost(opts)

Add free of charge user

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.FreeOfChargeUserApi();

var opts = { 
  'value': new ViaNettIntegrationApi.FreeOfChargeUser() // FreeOfChargeUser | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testTelPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**FreeOfChargeUser**](FreeOfChargeUser.md)|  | [optional] 

### Return type

[**FreeOfChargeUser**](FreeOfChargeUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: application/json

