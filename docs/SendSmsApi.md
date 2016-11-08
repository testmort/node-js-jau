# ViaNettIntegrationApi.SendSmsApi

All URIs are relative to *https://api.vianett.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendsmsBatchPost**](SendSmsApi.md#sendsmsBatchPost) | **POST** /sendsms/batch | Send a batch of messages
[**sendsmsPost**](SendSmsApi.md#sendsmsPost) | **POST** /sendsms | Send a single message
[**sendsmsSimpleGet**](SendSmsApi.md#sendsmsSimpleGet) | **GET** /sendsms/simple | Send SMS using a plain GET request without OAuth2


<a name="sendsmsBatchPost"></a>
# **sendsmsBatchPost**
> sendsmsBatchPost(opts)

Send a batch of messages

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.SendSmsApi();

var opts = { 
  'body': new ViaNettIntegrationApi.SmsMessageBatch() // SmsMessageBatch | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sendsmsBatchPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SmsMessageBatch**](SmsMessageBatch.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="sendsmsPost"></a>
# **sendsmsPost**
> sendsmsPost(opts)

Send a single message

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.SendSmsApi();

var opts = { 
  'body': new ViaNettIntegrationApi.SmsMessage() // SmsMessage | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sendsmsPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SmsMessage**](SmsMessage.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="sendsmsSimpleGet"></a>
# **sendsmsSimpleGet**
> sendsmsSimpleGet(opts)

Send SMS using a plain GET request without OAuth2

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.SendSmsApi();

var opts = { 
  'username': "username_example", // String | 
  'password': "password_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sendsmsSimpleGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

