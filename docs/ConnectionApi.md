# ViaNettIntegrationApi.ConnectionApi

All URIs are relative to *https://api.vianett.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connectionByIdDelete**](ConnectionApi.md#connectionByIdDelete) | **DELETE** /connection/{id} | Delete connection
[**connectionByIdGet**](ConnectionApi.md#connectionByIdGet) | **GET** /connection/{id} | Get connection
[**connectionByIdPut**](ConnectionApi.md#connectionByIdPut) | **PUT** /connection/{id} | Update connection
[**connectionDefaultGet**](ConnectionApi.md#connectionDefaultGet) | **GET** /connection/default | Get default connection
[**connectionDefaultPut**](ConnectionApi.md#connectionDefaultPut) | **PUT** /connection/default | Update default connection
[**connectionGet**](ConnectionApi.md#connectionGet) | **GET** /connection | List connections
[**connectionPost**](ConnectionApi.md#connectionPost) | **POST** /connection | Create new connection


<a name="connectionByIdDelete"></a>
# **connectionByIdDelete**
> connectionByIdDelete(id)

Delete connection

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.ConnectionApi();

var id = 56; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.connectionByIdDelete(id, callback);
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

<a name="connectionByIdGet"></a>
# **connectionByIdGet**
> Connection connectionByIdGet(id)

Get connection

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.ConnectionApi();

var id = 56; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.connectionByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

[**Connection**](Connection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="connectionByIdPut"></a>
# **connectionByIdPut**
> connectionByIdPut(id, opts)

Update connection

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.ConnectionApi();

var id = 56; // Integer | ConnectionID

var opts = { 
  'value': new ViaNettIntegrationApi.Connection() // Connection | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.connectionByIdPut(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| ConnectionID | 
 **value** | [**Connection**](Connection.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="connectionDefaultGet"></a>
# **connectionDefaultGet**
> Connection connectionDefaultGet(opts)

Get default connection

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.ConnectionApi();

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
apiInstance.connectionDefaultGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Integer**| Default is current account | [optional] 

### Return type

[**Connection**](Connection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="connectionDefaultPut"></a>
# **connectionDefaultPut**
> connectionDefaultPut(opts)

Update default connection

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.ConnectionApi();

var opts = { 
  'value': new ViaNettIntegrationApi.Connection() // Connection | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.connectionDefaultPut(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**Connection**](Connection.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

<a name="connectionGet"></a>
# **connectionGet**
> [Connection] connectionGet(opts)

List connections

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.ConnectionApi();

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
apiInstance.connectionGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Integer**| Default is current account | [optional] 

### Return type

[**[Connection]**](Connection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="connectionPost"></a>
# **connectionPost**
> connectionPost(opts)

Create new connection

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.ConnectionApi();

var opts = { 
  'value': new ViaNettIntegrationApi.Connection() // Connection | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.connectionPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**Connection**](Connection.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

