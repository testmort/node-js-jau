# ViaNettIntegrationApi.Keyword

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | Primary key | [optional] 
**campaignId** | **Integer** | The campaign on which the keyword is configured | [optional] 
**companyId** | **Integer** | The company id on which the keyword is configured | [optional] 
**accessNumber** | **String** | The short code or long code on which the keyword is configured | [optional] 
**prefix** | **String** | The keyword | [optional] 
**serviceTypeId** | **Integer** | The type of service the keyword is configured as | [optional] 
**countryId** | **Integer** | The country Id to which the AccessNumber belongs (0 is used for long codes, 1 for Norway, 2 for Sweden, 8 for Denmark, 105 for Finland, etc) | [optional] 
**establishmentFee** | **Number** | The initial setup fee amount for this keyword | [optional] 
**monthlyFee** | **Number** | The monthly fee amount for this keyword | [optional] 
**numBillingMonths** | **Integer** | The billing frequency in months of the keyword | [optional] 
**currency** | **String** | The currency for the amounts specified in EstablishmentFee and MonthlyFee | [optional] 
**paidUntil** | **Date** | How long the keyword has been paid for thus far | [optional] 
**paymentTypeId** | **Integer** | The payment type (included, auto-charged, etc) for the keyword | [optional] 
**isLookupEnabled** | **Boolean** | Whether a name and address lookup is triggered for incoming messages to this keyword | [optional] 


