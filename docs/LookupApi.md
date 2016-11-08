# ViaNettIntegrationApi.LookupApi

All URIs are relative to *https://api.vianett.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lookupByTelDetailsGet**](LookupApi.md#lookupByTelDetailsGet) | **GET** /lookup/{tel}/details | Return details for tel
[**lookupByTelDetailsPut**](LookupApi.md#lookupByTelDetailsPut) | **PUT** /lookup/{tel}/details | Update primary contact details for tel
[**lookupByTelGet**](LookupApi.md#lookupByTelGet) | **GET** /lookup/{tel} | Return all known data for tel
[**lookupByTelHlrGet**](LookupApi.md#lookupByTelHlrGet) | **GET** /lookup/{tel}/hlr | HLR lookup
[**lookupByTelLogsGet**](LookupApi.md#lookupByTelLogsGet) | **GET** /lookup/{tel}/logs | Return SMS logs for tel


<a name="lookupByTelDetailsGet"></a>
# **lookupByTelDetailsGet**
> ContactDetailsResult lookupByTelDetailsGet(tel, opts)

Return details for tel

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.LookupApi();

var tel = 789; // Integer | Phone number with country code

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
apiInstance.lookupByTelDetailsGet(tel, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tel** | **Integer**| Phone number with country code | 
 **companyId** | **Integer**| Default is current account | [optional] 

### Return type

[**ContactDetailsResult**](ContactDetailsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lookupByTelDetailsPut"></a>
# **lookupByTelDetailsPut**
> lookupByTelDetailsPut(tel, opts)

Update primary contact details for tel

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.LookupApi();

var tel = 789; // Integer | Phone number with country code

var opts = { 
  'value': new ViaNettIntegrationApi.ContactDetails(), // ContactDetails | 
  'companyId': 56 // Integer | Default is current account
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.lookupByTelDetailsPut(tel, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tel** | **Integer**| Phone number with country code | 
 **value** | [**ContactDetails**](ContactDetails.md)|  | [optional] 
 **companyId** | **Integer**| Default is current account | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="lookupByTelGet"></a>
# **lookupByTelGet**
> LookupResult lookupByTelGet(tel, opts)

Return all known data for tel

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.LookupApi();

var tel = 789; // Integer | Phone number with country code

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
apiInstance.lookupByTelGet(tel, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tel** | **Integer**| Phone number with country code | 
 **companyId** | **Integer**| Default is current account | [optional] 

### Return type

[**LookupResult**](LookupResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lookupByTelHlrGet"></a>
# **lookupByTelHlrGet**
> HlrLookupResult lookupByTelHlrGet(tel, opts)

HLR lookup

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.LookupApi();

var tel = 789; // Integer | Phone number with country code

var opts = { 
  'maxAgeInSeconds': 56, // Integer | Run live HLR request if cached entry is older than N seconds. Default is 48 hours. Set to 0 to disable cache
  'companyId': 56 // Integer | Default is current account
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.lookupByTelHlrGet(tel, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tel** | **Integer**| Phone number with country code | 
 **maxAgeInSeconds** | **Integer**| Run live HLR request if cached entry is older than N seconds. Default is 48 hours. Set to 0 to disable cache | [optional] 
 **companyId** | **Integer**| Default is current account | [optional] 

### Return type

[**HlrLookupResult**](HlrLookupResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lookupByTelLogsGet"></a>
# **lookupByTelLogsGet**
> [MessageLogItem] lookupByTelLogsGet(tel, opts)

Return SMS logs for tel

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.LookupApi();

var tel = 789; // Integer | Phone number with country code

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
apiInstance.lookupByTelLogsGet(tel, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tel** | **Integer**| Phone number with country code | 
 **companyId** | **Integer**| Default is current account | [optional] 

### Return type

[**[MessageLogItem]**](MessageLogItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

