# ViaNettIntegrationApi.ServiceTypeApi

All URIs are relative to *https://api.vianett.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**serviceTypeGet**](ServiceTypeApi.md#serviceTypeGet) | **GET** /service-type | List available service types


<a name="serviceTypeGet"></a>
# **serviceTypeGet**
> [ServiceType] serviceTypeGet(opts)

List available service types

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.ServiceTypeApi();

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
apiInstance.serviceTypeGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Integer**| Default is current account | [optional] 

### Return type

[**[ServiceType]**](ServiceType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

