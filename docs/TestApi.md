# ViaNettIntegrationApi.TestApi

All URIs are relative to *https://api.vianett.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**testClaimsGet**](TestApi.md#testClaimsGet) | **GET** /test/claims | Return all claims for the authenticated user
[**testLoginGet**](TestApi.md#testLoginGet) | **GET** /test/login | OpenID login
[**testLogoutGet**](TestApi.md#testLogoutGet) | **GET** /test/logout | OpenID sign-out
[**testPingGet**](TestApi.md#testPingGet) | **GET** /test/ping | 


<a name="testClaimsGet"></a>
# **testClaimsGet**
> testClaimsGet()

Return all claims for the authenticated user

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.TestApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.testClaimsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="testLoginGet"></a>
# **testLoginGet**
> testLoginGet()

OpenID login

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.TestApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.testLoginGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="testLogoutGet"></a>
# **testLogoutGet**
> testLogoutGet()

OpenID sign-out

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.TestApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.testLogoutGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="testPingGet"></a>
# **testPingGet**
> Pong testPingGet(opts)



### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.TestApi();

var opts = { 
  'key': "key_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testPingGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**|  | [optional] 

### Return type

[**Pong**](Pong.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

