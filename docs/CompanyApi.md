# ViaNettIntegrationApi.CompanyApi

All URIs are relative to *https://api.vianett.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companyByIdDelete**](CompanyApi.md#companyByIdDelete) | **DELETE** /company/{id} | Delete sub-account
[**companyByIdGet**](CompanyApi.md#companyByIdGet) | **GET** /company/{id} | Get sub-account
[**companyByIdPut**](CompanyApi.md#companyByIdPut) | **PUT** /company/{id} | Update account / sub-account
[**companyCurrentGet**](CompanyApi.md#companyCurrentGet) | **GET** /company/current | Get current account
[**companyGet**](CompanyApi.md#companyGet) | **GET** /company | List sub-accounts
[**companyPost**](CompanyApi.md#companyPost) | **POST** /company | Create new sub-account


<a name="companyByIdDelete"></a>
# **companyByIdDelete**
> companyByIdDelete(id)

Delete sub-account

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.CompanyApi();

var id = 56; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.companyByIdDelete(id, callback);
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

<a name="companyByIdGet"></a>
# **companyByIdGet**
> Company companyByIdGet(id)

Get sub-account

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.CompanyApi();

var id = 56; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.companyByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

[**Company**](Company.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="companyByIdPut"></a>
# **companyByIdPut**
> Company companyByIdPut(id, opts)

Update account / sub-account

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.CompanyApi();

var id = 56; // Integer | Set to 0 to update current account

var opts = { 
  'value': new ViaNettIntegrationApi.Company() // Company | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.companyByIdPut(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Set to 0 to update current account | 
 **value** | [**Company**](Company.md)|  | [optional] 

### Return type

[**Company**](Company.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: application/json

<a name="companyCurrentGet"></a>
# **companyCurrentGet**
> Company companyCurrentGet()

Get current account

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.CompanyApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.companyCurrentGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Company**](Company.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="companyGet"></a>
# **companyGet**
> [Company] companyGet(opts)

List sub-accounts

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.CompanyApi();

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
apiInstance.companyGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Integer**| Default is current account | [optional] 

### Return type

[**[Company]**](Company.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="companyPost"></a>
# **companyPost**
> Company companyPost(opts)

Create new sub-account

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.CompanyApi();

var opts = { 
  'value': new ViaNettIntegrationApi.Company() // Company | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.companyPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**Company**](Company.md)|  | [optional] 

### Return type

[**Company**](Company.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: application/json

