# ViaNettIntegrationApi.VpnApi

All URIs are relative to *https://api.vianett.io/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vpnByIdGet**](VpnApi.md#vpnByIdGet) | **GET** /vpn/{id} | Get VPN connection
[**vpnByIdPkiCaGet**](VpnApi.md#vpnByIdPkiCaGet) | **GET** /vpn/{id}/pki/ca | Get Certificate Authority (CA)
[**vpnByIdPkiRevokePost**](VpnApi.md#vpnByIdPkiRevokePost) | **POST** /vpn/{id}/pki/revoke | Revoke a certificate
[**vpnByIdPkiSignPost**](VpnApi.md#vpnByIdPkiSignPost) | **POST** /vpn/{id}/pki/sign | Sign a certificate
[**vpnGet**](VpnApi.md#vpnGet) | **GET** /vpn | List VPN connections
[**vpnPost**](VpnApi.md#vpnPost) | **POST** /vpn | Create new VPN connection


<a name="vpnByIdGet"></a>
# **vpnByIdGet**
> VpnConnection vpnByIdGet(id)

Get VPN connection

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.VpnApi();

var id = 56; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vpnByIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

[**VpnConnection**](VpnConnection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vpnByIdPkiCaGet"></a>
# **vpnByIdPkiCaGet**
> &#39;String&#39; vpnByIdPkiCaGet(id)

Get Certificate Authority (CA)

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.VpnApi();

var id = 56; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vpnByIdPkiCaGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vpnByIdPkiRevokePost"></a>
# **vpnByIdPkiRevokePost**
> vpnByIdPkiRevokePost(id, opts)

Revoke a certificate

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.VpnApi();

var id = "id_example"; // String | 

var opts = { 
  'subject': "subject_example" // String | Subject or 'all' to revoke all certificates signed for this connection
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.vpnByIdPkiRevokePost(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **subject** | **String**| Subject or &#39;all&#39; to revoke all certificates signed for this connection | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="vpnByIdPkiSignPost"></a>
# **vpnByIdPkiSignPost**
> &#39;String&#39; vpnByIdPkiSignPost(id, opts)

Sign a certificate

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.VpnApi();

var id = 56; // Integer | 

var opts = { 
  'body': "body_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.vpnByIdPkiSignPost(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 
 **body** | **String**|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: application/json

<a name="vpnGet"></a>
# **vpnGet**
> [VpnConnection] vpnGet(opts)

List VPN connections

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.VpnApi();

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
apiInstance.vpnGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Integer**| Default is current account | [optional] 

### Return type

[**[VpnConnection]**](VpnConnection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="vpnPost"></a>
# **vpnPost**
> vpnPost(opts)

Create new VPN connection

### Example
```javascript
var ViaNettIntegrationApi = require('via_nett_integration_api');

var apiInstance = new ViaNettIntegrationApi.VpnApi();

var opts = { 
  'value': new ViaNettIntegrationApi.VpnConnection() // VpnConnection | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.vpnPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **value** | [**VpnConnection**](VpnConnection.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json
 - **Accept**: Not defined

