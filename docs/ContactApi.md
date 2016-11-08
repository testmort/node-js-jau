# ViaNettIntegrationApi.ContactApi

All URIs are relative to *https://api.vianett.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactGroupsGet**](ContactApi.md#contactGroupsGet) | **GET** /contact/groups | List contact groups


<a name="contactGroupsGet"></a>
# **contactGroupsGet**
> [ContactGroup] contactGroupsGet(opts)

List contact groups

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.ContactApi();

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
apiInstance.contactGroupsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Integer**| Default is current account | [optional] 

### Return type

[**[ContactGroup]**](ContactGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

