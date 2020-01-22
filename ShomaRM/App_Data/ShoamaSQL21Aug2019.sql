USE [ShomaRM]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetWorkOrderList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetWorkOrderList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetWorkOrderList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetVisitList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetVisitList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetVisitList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetVendorPaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetVendorPaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetVendorPaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetVendorList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetVendorList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetVendorList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetUtilityPaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetUtilityPaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetUtilityPaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetUtilityList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetUtilityList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetUtilityList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetUtilityBillingList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetUtilityBillingList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetUtilityBillingList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetUsersList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetUsersList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetUsersList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetUserPaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetUserPaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetUserPaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetUserListByType]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetUserListByType]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetUserListByType]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetTransactionPaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetTransactionPaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetTransactionPaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetTransactionList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetTransactionList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetTransactionList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetTenantTransactionList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetTenantTransactionList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetTenantTransactionList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetTenantPaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetTenantPaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetTenantPaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetTenantOnlineData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetTenantOnlineData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetTenantOnlineData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetTenantNoticeList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetTenantNoticeList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetTenantNoticeList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetTenantList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetTenantList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetTenantList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetTenantInfoData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetTenantInfoData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetTenantInfoData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetStoragePaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetStoragePaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetStoragePaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetStatePaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetStatePaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetStatePaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetStateList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetStateList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetStateList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetSalesAgentList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetSalesAgentList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetSalesAgentList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetPurchaseOrderPaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPurchaseOrderPaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetPurchaseOrderPaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetPurchaseOrderList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPurchaseOrderList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetPurchaseOrderList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetProspectVerifyPaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetProspectVerifyPaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetProspectVerifyPaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetProspectVerificationList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetProspectVerificationList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetProspectVerificationList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetProspectTransactionList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetProspectTransactionList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetProspectTransactionList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetProspectPaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetProspectPaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetProspectPaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetProspectList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetProspectList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetProspectList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetProspectDocumentList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetProspectDocumentList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetProspectDocumentList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetPropertyUnitPaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPropertyUnitPaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetPropertyUnitPaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetPropertyUnitListCord]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPropertyUnitListCord]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetPropertyUnitListCord]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetPropertyUnitList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPropertyUnitList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetPropertyUnitList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetPropertyUnitDDL]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPropertyUnitDDL]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetPropertyUnitDDL]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetPropertySearchList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPropertySearchList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetPropertySearchList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetPropertyPaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPropertyPaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetPropertyPaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetPropertyList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPropertyList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetPropertyList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetPropertyFloorCord]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPropertyFloorCord]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetPropertyFloorCord]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetPromotionPaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPromotionPaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetPromotionPaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetPromotionList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPromotionList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetPromotionList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetPetPlacePaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPetPlacePaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetPetPlacePaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetParkingPaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetParkingPaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetParkingPaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetOnlineTransactionList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetOnlineTransactionList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetOnlineTransactionList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetNoticePaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetNoticePaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetNoticePaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetNoticeList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetNoticeList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetNoticeList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetInvoicePaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetInvoicePaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetInvoicePaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetInvoiceList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetInvoiceList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetInvoiceList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetFacilityPaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetFacilityPaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetFacilityPaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetFacilityList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetFacilityList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetFacilityList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetFacilityBookingList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetFacilityBookingList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetFacilityBookingList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetEventPaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetEventPaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetEventPaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetEventList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetEventList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetEventList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetEventBookingList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetEventBookingList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetEventBookingList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetDocumentList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetDocumentList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetDocumentList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetCountryList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetCountryList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetCountryList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetClientUnitList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetClientUnitList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetClientUnitList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetCityPaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetCityPaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetCityPaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetCityListbyState]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetCityListbyState]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetCityListbyState]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetCityList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetCityList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetCityList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetChargeTypeList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetChargeTypeList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetChargeTypeList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetCashReceiptPaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetCashReceiptPaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetCashReceiptPaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetCashReceiptList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetCashReceiptList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetCashReceiptList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetBankAccountPaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetBankAccountPaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetBankAccountPaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetBankAccountList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetBankAccountList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetBankAccountList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetAmenitySearchList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetAmenitySearchList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetAmenitySearchList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetAmenityPaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetAmenityPaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetAmenityPaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetAmenityList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetAmenityList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetAmenityList]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetAdvertiserPaginationAndSearchData]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetAdvertiserPaginationAndSearchData]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_GetAdvertiserPaginationAndSearchData]
GO
/****** Object:  StoredProcedure [dbo].[usp_Get_TenantList_XML]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_TenantList_XML]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_Get_TenantList_XML]
GO
/****** Object:  StoredProcedure [dbo].[usp_Get_TenantList_bak]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_TenantList_bak]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_Get_TenantList_bak]
GO
/****** Object:  StoredProcedure [dbo].[usp_Get_TenantList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_TenantList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_Get_TenantList]
GO
/****** Object:  StoredProcedure [dbo].[usp_Get_Storage_SearchList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_Storage_SearchList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_Get_Storage_SearchList]
GO
/****** Object:  StoredProcedure [dbo].[usp_Get_Storage]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_Storage]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_Get_Storage]
GO
/****** Object:  StoredProcedure [dbo].[usp_Get_PetPlace_SearchList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_PetPlace_SearchList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_Get_PetPlace_SearchList]
GO
/****** Object:  StoredProcedure [dbo].[usp_Get_PetPlace]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_PetPlace]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_Get_PetPlace]
GO
/****** Object:  StoredProcedure [dbo].[usp_Get_Parking_SearchList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_Parking_SearchList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_Get_Parking_SearchList]
GO
/****** Object:  StoredProcedure [dbo].[usp_Get_Parking]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_Parking]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_Get_Parking]
GO
/****** Object:  StoredProcedure [dbo].[usp_Get_Advertiser_SearchList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_Advertiser_SearchList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_Get_Advertiser_SearchList]
GO
/****** Object:  StoredProcedure [dbo].[usp_Get_Advertiser]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_Advertiser]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_Get_Advertiser]
GO
/****** Object:  StoredProcedure [dbo].[usp_FillStateDropDownListByCountryID]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_FillStateDropDownListByCountryID]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_FillStateDropDownListByCountryID]
GO
/****** Object:  StoredProcedure [dbo].[usp_BuildPagination_TenantList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_BuildPagination_TenantList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_BuildPagination_TenantList]
GO
/****** Object:  StoredProcedure [dbo].[usp_ApplyNowList]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_ApplyNowList]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[usp_ApplyNowList]
GO
/****** Object:  StoredProcedure [dbo].[sp_TestDelete]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[sp_TestDelete]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[sp_TestDelete]
GO
/****** Object:  StoredProcedure [dbo].[sp_Test]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[sp_Test]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[sp_Test]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_ZipCodes_tbl_State]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_ZipCodes]'))
ALTER TABLE [dbo].[tbl_ZipCodes] DROP CONSTRAINT [FK_tbl_ZipCodes_tbl_State]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_ZipCodes_tbl_City]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_ZipCodes]'))
ALTER TABLE [dbo].[tbl_ZipCodes] DROP CONSTRAINT [FK_tbl_ZipCodes_tbl_City]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_WorkOrder_tbl_Vendor]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_WorkOrder]'))
ALTER TABLE [dbo].[tbl_WorkOrder] DROP CONSTRAINT [FK_tbl_WorkOrder_tbl_Vendor]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_WorkOrder_tbl_Tenant]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_WorkOrder]'))
ALTER TABLE [dbo].[tbl_WorkOrder] DROP CONSTRAINT [FK_tbl_WorkOrder_tbl_Tenant]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_WorkOrder_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_WorkOrder]'))
ALTER TABLE [dbo].[tbl_WorkOrder] DROP CONSTRAINT [FK_tbl_WorkOrder_tbl_PropertyUnits]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_WorkOrder_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_WorkOrder]'))
ALTER TABLE [dbo].[tbl_WorkOrder] DROP CONSTRAINT [FK_tbl_WorkOrder_tbl_Properties]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Visit_tbl_Prospect]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Visit]'))
ALTER TABLE [dbo].[tbl_Visit] DROP CONSTRAINT [FK_tbl_Visit_tbl_Prospect]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Vendor_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Vendor]'))
ALTER TABLE [dbo].[tbl_Vendor] DROP CONSTRAINT [FK_tbl_Vendor_tbl_Login]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Vehicle_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Vehicle]'))
ALTER TABLE [dbo].[tbl_Vehicle] DROP CONSTRAINT [FK_tbl_Vehicle_tbl_ApplyNow]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_UtilityBilling_tbl_Utility]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_UtilityBilling]'))
ALTER TABLE [dbo].[tbl_UtilityBilling] DROP CONSTRAINT [FK_tbl_UtilityBilling_tbl_Utility]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_UtilityBilling_tbl_Tenant]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_UtilityBilling]'))
ALTER TABLE [dbo].[tbl_UtilityBilling] DROP CONSTRAINT [FK_tbl_UtilityBilling_tbl_Tenant]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_UtilityBilling_tbl_Lease]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_UtilityBilling]'))
ALTER TABLE [dbo].[tbl_UtilityBilling] DROP CONSTRAINT [FK_tbl_UtilityBilling_tbl_Lease]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Transaction_tbl_PropertyUnits1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Transaction]'))
ALTER TABLE [dbo].[tbl_Transaction] DROP CONSTRAINT [FK_tbl_Transaction_tbl_PropertyUnits1]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Transaction_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Transaction]'))
ALTER TABLE [dbo].[tbl_Transaction] DROP CONSTRAINT [FK_tbl_Transaction_tbl_PropertyUnits]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantStorage_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantStorage]'))
ALTER TABLE [dbo].[tbl_TenantStorage] DROP CONSTRAINT [FK_tbl_TenantStorage_tbl_ApplyNow]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantPetPlace_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantPetPlace]'))
ALTER TABLE [dbo].[tbl_TenantPetPlace] DROP CONSTRAINT [FK_tbl_TenantPetPlace_tbl_ApplyNow]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantPet_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantPet]'))
ALTER TABLE [dbo].[tbl_TenantPet] DROP CONSTRAINT [FK_tbl_TenantPet_tbl_ApplyNow]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantParking_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantParking]'))
ALTER TABLE [dbo].[tbl_TenantParking] DROP CONSTRAINT [FK_tbl_TenantParking_tbl_ApplyNow]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantOnline_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantOnline]'))
ALTER TABLE [dbo].[tbl_TenantOnline] DROP CONSTRAINT [FK_tbl_TenantOnline_tbl_ApplyNow]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantInfo_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantInfo]'))
ALTER TABLE [dbo].[tbl_TenantInfo] DROP CONSTRAINT [FK_tbl_TenantInfo_tbl_PropertyUnits]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantInfo_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantInfo]'))
ALTER TABLE [dbo].[tbl_TenantInfo] DROP CONSTRAINT [FK_tbl_TenantInfo_tbl_Properties]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantInfo_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantInfo]'))
ALTER TABLE [dbo].[tbl_TenantInfo] DROP CONSTRAINT [FK_tbl_TenantInfo_tbl_ApplyNow]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_PropertyUnits1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant] DROP CONSTRAINT [FK_tbl_Tenant_tbl_PropertyUnits1]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant] DROP CONSTRAINT [FK_tbl_Tenant_tbl_PropertyUnits]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_Properties1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant] DROP CONSTRAINT [FK_tbl_Tenant_tbl_Properties1]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant] DROP CONSTRAINT [FK_tbl_Tenant_tbl_Properties]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_Login3]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant] DROP CONSTRAINT [FK_tbl_Tenant_tbl_Login3]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_Login2]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant] DROP CONSTRAINT [FK_tbl_Tenant_tbl_Login2]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_Login1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant] DROP CONSTRAINT [FK_tbl_Tenant_tbl_Login1]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant] DROP CONSTRAINT [FK_tbl_Tenant_tbl_Login]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Storage_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Storage]'))
ALTER TABLE [dbo].[tbl_Storage] DROP CONSTRAINT [FK_tbl_Storage_tbl_Properties]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_SalesAgent_tbl_State]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_SalesAgent]'))
ALTER TABLE [dbo].[tbl_SalesAgent] DROP CONSTRAINT [FK_tbl_SalesAgent_tbl_State]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_SalesAgent_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_SalesAgent]'))
ALTER TABLE [dbo].[tbl_SalesAgent] DROP CONSTRAINT [FK_tbl_SalesAgent_tbl_Properties]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_SalesAgent_tbl_City]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_SalesAgent]'))
ALTER TABLE [dbo].[tbl_SalesAgent] DROP CONSTRAINT [FK_tbl_SalesAgent_tbl_City]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_PurchaseOrder_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_PurchaseOrder]'))
ALTER TABLE [dbo].[tbl_PurchaseOrder] DROP CONSTRAINT [FK_tbl_PurchaseOrder_tbl_Properties]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_PurchaseOrder_tbl_Login1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_PurchaseOrder]'))
ALTER TABLE [dbo].[tbl_PurchaseOrder] DROP CONSTRAINT [FK_tbl_PurchaseOrder_tbl_Login1]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_PurchaseOrder_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_PurchaseOrder]'))
ALTER TABLE [dbo].[tbl_PurchaseOrder] DROP CONSTRAINT [FK_tbl_PurchaseOrder_tbl_Login]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Prospect_tbl_State]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Prospect]'))
ALTER TABLE [dbo].[tbl_Prospect] DROP CONSTRAINT [FK_tbl_Prospect_tbl_State]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Prospect_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Prospect]'))
ALTER TABLE [dbo].[tbl_Prospect] DROP CONSTRAINT [FK_tbl_Prospect_tbl_Properties]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Prospect_tbl_Login1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Prospect]'))
ALTER TABLE [dbo].[tbl_Prospect] DROP CONSTRAINT [FK_tbl_Prospect_tbl_Login1]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Prospect_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Prospect]'))
ALTER TABLE [dbo].[tbl_Prospect] DROP CONSTRAINT [FK_tbl_Prospect_tbl_Login]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Prospect_tbl_City]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Prospect]'))
ALTER TABLE [dbo].[tbl_Prospect] DROP CONSTRAINT [FK_tbl_Prospect_tbl_City]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_PropertyUnits_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_PropertyUnits]'))
ALTER TABLE [dbo].[tbl_PropertyUnits] DROP CONSTRAINT [FK_tbl_PropertyUnits_tbl_Properties]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_PropertyFloor_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_PropertyFloor]'))
ALTER TABLE [dbo].[tbl_PropertyFloor] DROP CONSTRAINT [FK_tbl_PropertyFloor_tbl_Properties]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Properties_tbl_State]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Properties]'))
ALTER TABLE [dbo].[tbl_Properties] DROP CONSTRAINT [FK_tbl_Properties_tbl_State]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Properties_tbl_Properties1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Properties]'))
ALTER TABLE [dbo].[tbl_Properties] DROP CONSTRAINT [FK_tbl_Properties_tbl_Properties1]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Properties_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Properties]'))
ALTER TABLE [dbo].[tbl_Properties] DROP CONSTRAINT [FK_tbl_Properties_tbl_Properties]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Properties_tbl_Login1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Properties]'))
ALTER TABLE [dbo].[tbl_Properties] DROP CONSTRAINT [FK_tbl_Properties_tbl_Login1]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Properties_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Properties]'))
ALTER TABLE [dbo].[tbl_Properties] DROP CONSTRAINT [FK_tbl_Properties_tbl_Login]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Properties_tbl_City]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Properties]'))
ALTER TABLE [dbo].[tbl_Properties] DROP CONSTRAINT [FK_tbl_Properties_tbl_City]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Promotion_tbl_Promotion]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Promotion]'))
ALTER TABLE [dbo].[tbl_Promotion] DROP CONSTRAINT [FK_tbl_Promotion_tbl_Promotion]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_PetPlace_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_PetPlace]'))
ALTER TABLE [dbo].[tbl_PetPlace] DROP CONSTRAINT [FK_tbl_PetPlace_tbl_Properties]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Parking_tbl_Parking]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Parking]'))
ALTER TABLE [dbo].[tbl_Parking] DROP CONSTRAINT [FK_tbl_Parking_tbl_Parking]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Notice_tbl_Tenant]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Notice]'))
ALTER TABLE [dbo].[tbl_Notice] DROP CONSTRAINT [FK_tbl_Notice_tbl_Tenant]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Notice_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Notice]'))
ALTER TABLE [dbo].[tbl_Notice] DROP CONSTRAINT [FK_tbl_Notice_tbl_PropertyUnits]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Notice_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Notice]'))
ALTER TABLE [dbo].[tbl_Notice] DROP CONSTRAINT [FK_tbl_Notice_tbl_Properties]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Notice_tbl_Lease]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Notice]'))
ALTER TABLE [dbo].[tbl_Notice] DROP CONSTRAINT [FK_tbl_Notice_tbl_Lease]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_LeaseTransfer_tbl_Lease]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_LeaseTransfer]'))
ALTER TABLE [dbo].[tbl_LeaseTransfer] DROP CONSTRAINT [FK_tbl_LeaseTransfer_tbl_Lease]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_LeaseRenewal_tbl_Lease]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_LeaseRenewal]'))
ALTER TABLE [dbo].[tbl_LeaseRenewal] DROP CONSTRAINT [FK_tbl_LeaseRenewal_tbl_Lease]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Lease_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Lease]'))
ALTER TABLE [dbo].[tbl_Lease] DROP CONSTRAINT [FK_tbl_Lease_tbl_PropertyUnits]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Lease_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Lease]'))
ALTER TABLE [dbo].[tbl_Lease] DROP CONSTRAINT [FK_tbl_Lease_tbl_Properties]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Lease_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Lease]'))
ALTER TABLE [dbo].[tbl_Lease] DROP CONSTRAINT [FK_tbl_Lease_tbl_Login]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Invoice_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Invoice]'))
ALTER TABLE [dbo].[tbl_Invoice] DROP CONSTRAINT [FK_tbl_Invoice_tbl_Login]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Gallery_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Gallery]'))
ALTER TABLE [dbo].[tbl_Gallery] DROP CONSTRAINT [FK_tbl_Gallery_tbl_Properties]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_FacilityBooking_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_FacilityBooking]'))
ALTER TABLE [dbo].[tbl_FacilityBooking] DROP CONSTRAINT [FK_tbl_FacilityBooking_tbl_Login]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_FacilityBooking_tbl_FacilityBooking]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_FacilityBooking]'))
ALTER TABLE [dbo].[tbl_FacilityBooking] DROP CONSTRAINT [FK_tbl_FacilityBooking_tbl_FacilityBooking]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_FacilityBooking_tbl_Facility]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_FacilityBooking]'))
ALTER TABLE [dbo].[tbl_FacilityBooking] DROP CONSTRAINT [FK_tbl_FacilityBooking_tbl_Facility]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Facility_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Facility]'))
ALTER TABLE [dbo].[tbl_Facility] DROP CONSTRAINT [FK_tbl_Facility_tbl_Properties]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Facility_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Facility]'))
ALTER TABLE [dbo].[tbl_Facility] DROP CONSTRAINT [FK_tbl_Facility_tbl_Login]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_EventBooking_tbl_Tenant]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_EventBooking]'))
ALTER TABLE [dbo].[tbl_EventBooking] DROP CONSTRAINT [FK_tbl_EventBooking_tbl_Tenant]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_EventBooking_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_EventBooking]'))
ALTER TABLE [dbo].[tbl_EventBooking] DROP CONSTRAINT [FK_tbl_EventBooking_tbl_Login]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_EventBooking_tbl_Event]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_EventBooking]'))
ALTER TABLE [dbo].[tbl_EventBooking] DROP CONSTRAINT [FK_tbl_EventBooking_tbl_Event]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Event_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Event]'))
ALTER TABLE [dbo].[tbl_Event] DROP CONSTRAINT [FK_tbl_Event_tbl_Properties]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Event_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Event]'))
ALTER TABLE [dbo].[tbl_Event] DROP CONSTRAINT [FK_tbl_Event_tbl_Login]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_DocumentVerification_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_DocumentVerification]'))
ALTER TABLE [dbo].[tbl_DocumentVerification] DROP CONSTRAINT [FK_tbl_DocumentVerification_tbl_Login]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Document_tbl_Prospect]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Document]'))
ALTER TABLE [dbo].[tbl_Document] DROP CONSTRAINT [FK_tbl_Document_tbl_Prospect]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_City_tbl_State]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_City]'))
ALTER TABLE [dbo].[tbl_City] DROP CONSTRAINT [FK_tbl_City_tbl_State]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_ChargeType_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_ChargeType]'))
ALTER TABLE [dbo].[tbl_ChargeType] DROP CONSTRAINT [FK_tbl_ChargeType_tbl_Login]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_CashReceipts_tbl_Tenant]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_CashReceipts]'))
ALTER TABLE [dbo].[tbl_CashReceipts] DROP CONSTRAINT [FK_tbl_CashReceipts_tbl_Tenant]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_CashReceipts_tbl_PropertyUnits1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_CashReceipts]'))
ALTER TABLE [dbo].[tbl_CashReceipts] DROP CONSTRAINT [FK_tbl_CashReceipts_tbl_PropertyUnits1]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_CashReceipts_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_CashReceipts]'))
ALTER TABLE [dbo].[tbl_CashReceipts] DROP CONSTRAINT [FK_tbl_CashReceipts_tbl_PropertyUnits]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_CashReceipts_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_CashReceipts]'))
ALTER TABLE [dbo].[tbl_CashReceipts] DROP CONSTRAINT [FK_tbl_CashReceipts_tbl_Properties]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_CashReceipts_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_CashReceipts]'))
ALTER TABLE [dbo].[tbl_CashReceipts] DROP CONSTRAINT [FK_tbl_CashReceipts_tbl_Login]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_CashReceipts_tbl_Lease]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_CashReceipts]'))
ALTER TABLE [dbo].[tbl_CashReceipts] DROP CONSTRAINT [FK_tbl_CashReceipts_tbl_Lease]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_ApplyNow_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_ApplyNow]'))
ALTER TABLE [dbo].[tbl_ApplyNow] DROP CONSTRAINT [FK_tbl_ApplyNow_tbl_PropertyUnits]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Applicant_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Applicant]'))
ALTER TABLE [dbo].[tbl_Applicant] DROP CONSTRAINT [FK_tbl_Applicant_tbl_ApplyNow]
GO
IF  EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_tbl_Login_IsSuperUser]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[tbl_Login] DROP CONSTRAINT [DF_tbl_Login_IsSuperUser]
END

GO
/****** Object:  Table [dbo].[tbl_ZipCodes]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_ZipCodes]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_ZipCodes]
GO
/****** Object:  Table [dbo].[tbl_WorkOrder]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_WorkOrder]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_WorkOrder]
GO
/****** Object:  Table [dbo].[tbl_Visit]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Visit]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Visit]
GO
/****** Object:  Table [dbo].[tbl_Vendor]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Vendor]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Vendor]
GO
/****** Object:  Table [dbo].[tbl_Vehicle]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Vehicle]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Vehicle]
GO
/****** Object:  Table [dbo].[tbl_UtilityBilling]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_UtilityBilling]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_UtilityBilling]
GO
/****** Object:  Table [dbo].[tbl_Utility]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Utility]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Utility]
GO
/****** Object:  Table [dbo].[tbl_Transaction]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Transaction]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Transaction]
GO
/****** Object:  Table [dbo].[tbl_TenantStorage]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_TenantStorage]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_TenantStorage]
GO
/****** Object:  Table [dbo].[tbl_TenantPetPlace]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_TenantPetPlace]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_TenantPetPlace]
GO
/****** Object:  Table [dbo].[tbl_TenantPet]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_TenantPet]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_TenantPet]
GO
/****** Object:  Table [dbo].[tbl_TenantParking]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_TenantParking]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_TenantParking]
GO
/****** Object:  Table [dbo].[tbl_TenantOnline]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_TenantOnline]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_TenantOnline]
GO
/****** Object:  Table [dbo].[tbl_TenantInfo]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_TenantInfo]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_TenantInfo]
GO
/****** Object:  Table [dbo].[tbl_Tenant]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Tenant]
GO
/****** Object:  Table [dbo].[tbl_Storage]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Storage]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Storage]
GO
/****** Object:  Table [dbo].[tbl_State]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_State]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_State]
GO
/****** Object:  Table [dbo].[tbl_SalesAgent]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_SalesAgent]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_SalesAgent]
GO
/****** Object:  Table [dbo].[tbl_PurchaseOrder]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_PurchaseOrder]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_PurchaseOrder]
GO
/****** Object:  Table [dbo].[tbl_Prospect]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Prospect]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Prospect]
GO
/****** Object:  Table [dbo].[tbl_PropertyUnits]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_PropertyUnits]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_PropertyUnits]
GO
/****** Object:  Table [dbo].[tbl_PropertyFloor]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_PropertyFloor]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_PropertyFloor]
GO
/****** Object:  Table [dbo].[tbl_Properties]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Properties]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Properties]
GO
/****** Object:  Table [dbo].[tbl_Promotion]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Promotion]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Promotion]
GO
/****** Object:  Table [dbo].[tbl_PetPlace]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_PetPlace]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_PetPlace]
GO
/****** Object:  Table [dbo].[tbl_Parking]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Parking]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Parking]
GO
/****** Object:  Table [dbo].[tbl_OnlinePayment]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_OnlinePayment]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_OnlinePayment]
GO
/****** Object:  Table [dbo].[tbl_Notice]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Notice]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Notice]
GO
/****** Object:  Table [dbo].[tbl_LoginHistory]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_LoginHistory]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_LoginHistory]
GO
/****** Object:  Table [dbo].[tbl_Login]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Login]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Login]
GO
/****** Object:  Table [dbo].[tbl_LeaseTransfer]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_LeaseTransfer]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_LeaseTransfer]
GO
/****** Object:  Table [dbo].[tbl_LeaseRenewal]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_LeaseRenewal]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_LeaseRenewal]
GO
/****** Object:  Table [dbo].[tbl_Lease]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Lease]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Lease]
GO
/****** Object:  Table [dbo].[tbl_Invoice]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Invoice]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Invoice]
GO
/****** Object:  Table [dbo].[tbl_Gallery]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Gallery]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Gallery]
GO
/****** Object:  Table [dbo].[tbl_FacilityBooking]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_FacilityBooking]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_FacilityBooking]
GO
/****** Object:  Table [dbo].[tbl_Facility]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Facility]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Facility]
GO
/****** Object:  Table [dbo].[tbl_EventBooking]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_EventBooking]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_EventBooking]
GO
/****** Object:  Table [dbo].[tbl_Event]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Event]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Event]
GO
/****** Object:  Table [dbo].[tbl_DocumentVerification]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_DocumentVerification]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_DocumentVerification]
GO
/****** Object:  Table [dbo].[tbl_Document]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Document]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Document]
GO
/****** Object:  Table [dbo].[tbl_Country]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Country]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Country]
GO
/****** Object:  Table [dbo].[tbl_City]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_City]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_City]
GO
/****** Object:  Table [dbo].[tbl_ChargeType]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_ChargeType]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_ChargeType]
GO
/****** Object:  Table [dbo].[tbl_CashReceipts]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_CashReceipts]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_CashReceipts]
GO
/****** Object:  Table [dbo].[tbl_BankAccount]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_BankAccount]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_BankAccount]
GO
/****** Object:  Table [dbo].[tbl_ApplyNow]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_ApplyNow]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_ApplyNow]
GO
/****** Object:  Table [dbo].[tbl_Applicant]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Applicant]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Applicant]
GO
/****** Object:  Table [dbo].[tbl_Amenities]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Amenities]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Amenities]
GO
/****** Object:  Table [dbo].[tbl_Advertiser]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Advertiser]') AND type in (N'U'))
DROP TABLE [dbo].[tbl_Advertiser]
GO
/****** Object:  Table [dbo].[CountryState]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[CountryState]') AND type in (N'U'))
DROP TABLE [dbo].[CountryState]
GO
/****** Object:  UserDefinedFunction [dbo].[SPLIT]    Script Date: 08/21/2019 7:06:10 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[SPLIT]') AND type in (N'FN', N'IF', N'TF', N'FS', N'FT'))
DROP FUNCTION [dbo].[SPLIT]
GO
/****** Object:  UserDefinedFunction [dbo].[SPLIT]    Script Date: 08/21/2019 7:06:10 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[SPLIT]') AND type in (N'FN', N'IF', N'TF', N'FS', N'FT'))
BEGIN
execute dbo.sp_executesql @statement = N'



CREATE FUNCTION [dbo].[SPLIT] (

@str_in VARCHAR(8000)

 )

RETURNS @strtable TABLE (strval VARCHAR(50))

AS

BEGIN

DECLARE

@Occurrences INT,

@Counter INT,

@tmpStr VARCHAR(8000),
@separator VARCHAR(4)

set @separator='',''

SET @Counter = 0

IF SUBSTRING(@str_in,LEN(@str_in),1) <> @separator 

SET @str_in = @str_in + @separator

SET @Occurrences = (DATALENGTH(REPLACE(@str_in,@separator,@separator+''#'')) - DATALENGTH(@str_in))/ DATALENGTH(@separator)

SET @tmpStr = @str_in

WHILE @Counter <= @Occurrences 

BEGIN

SET @Counter = @Counter + 1

INSERT INTO @strtable

VALUES ( SUBSTRING(@tmpStr,1,CHARINDEX(@separator,@tmpStr)-1))

SET @tmpStr = SUBSTRING(@tmpStr,CHARINDEX(@separator,@tmpStr)+1,8000)


IF DATALENGTH(@tmpStr) = 0

BREAK


END

RETURN 

END



' 
END

GO
/****** Object:  Table [dbo].[CountryState]    Script Date: 08/21/2019 7:06:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[CountryState]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[CountryState](
	[ID] [varchar](500) NULL,
	[CountryName] [varchar](500) NULL,
	[StateID] [varchar](500) NULL,
	[CountryID] [varchar](500) NULL,
	[StateName] [varchar](500) NULL
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_Advertiser]    Script Date: 08/21/2019 7:06:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Advertiser]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Advertiser](
	[AdID] [int] IDENTITY(1,1) NOT NULL,
	[Advertiser] [nvarchar](100) NULL,
 CONSTRAINT [PK_tbl_Advertiser] PRIMARY KEY CLUSTERED 
(
	[AdID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[tbl_Amenities]    Script Date: 08/21/2019 7:06:13 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Amenities]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Amenities](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Amenity] [nvarchar](100) NULL,
	[AmenityDetails] [nvarchar](1000) NULL,
 CONSTRAINT [PK_tbl_Amenities] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[tbl_Applicant]    Script Date: 08/21/2019 7:06:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Applicant]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Applicant](
	[ApplicantID] [bigint] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
	[DateOfBirth] [datetime] NULL,
	[Gender] [int] NULL,
	[Phone] [varchar](15) NULL,
	[Email] [varchar](255) NULL,
	[TenantID] [bigint] NULL,
	[Type] [nvarchar](20) NULL,
	[Relationship] [nvarchar](50) NULL,
 CONSTRAINT [PK_tbl_Applicant] PRIMARY KEY CLUSTERED 
(
	[ApplicantID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_ApplyNow]    Script Date: 08/21/2019 7:06:14 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_ApplyNow]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_ApplyNow](
	[ID] [bigint] IDENTITY(1,1) NOT NULL,
	[PropertyId] [bigint] NULL,
	[FirstName] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
	[Email] [varchar](100) NULL,
	[Phone] [varchar](15) NULL,
	[Date] [datetime] NULL,
	[Status] [char](10) NULL,
	[Address] [varchar](max) NULL,
	[Password] [varchar](50) NULL,
	[IsApplyNow] [int] NULL,
	[CreatedBy] [bigint] NULL,
	[CreatedDate] [datetime] NULL,
	[DateofBirth] [datetime] NULL,
	[AnnualIncome] [varchar](10) NULL,
	[AddiAnnualIncome] [varchar](10) NULL,
	[UserId] [bigint] NULL,
	[Marketsource] [int] NULL,
	[MoveInDate] [datetime] NULL,
	[ParkingAmt] [money] NULL,
	[StorageAmt] [money] NULL,
	[PetPlaceAmt] [money] NULL,
	[Deposit] [money] NULL,
	[Rent] [money] NULL,
	[PetDeposit] [money] NULL,
	[TrashAmt] [money] NULL,
	[PestAmt] [money] NULL,
	[ConvergentAmt] [money] NULL,
	[TotalAmt] [money] NULL,
 CONSTRAINT [PK_tbl_ApplyNow] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_BankAccount]    Script Date: 08/21/2019 7:06:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_BankAccount]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_BankAccount](
	[BAID] [int] IDENTITY(1,1) NOT NULL,
	[Bank_Name] [varchar](100) NULL,
	[Account_Number] [varchar](29) NULL,
	[Account_Type] [int] NULL,
 CONSTRAINT [PK_tbl_BankAccount] PRIMARY KEY CLUSTERED 
(
	[BAID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_CashReceipts]    Script Date: 08/21/2019 7:06:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING OFF
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_CashReceipts]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_CashReceipts](
	[CRID] [bigint] IDENTITY(1,1) NOT NULL,
	[TenantID] [bigint] NULL,
	[Balance] [money] NULL,
	[PrePayment] [money] NULL,
	[PaymentAmount] [money] NULL,
	[PaymentDate] [datetime] NULL,
	[CheckNumber] [varchar](20) NULL,
	[PropertyID] [bigint] NULL,
	[UnitID] [bigint] NULL,
	[LeaseID] [bigint] NULL,
	[Revision_Num] [int] NULL,
	[PaymentType] [varchar](20) NULL,
	[IsApplicant] [int] NULL,
	[Status] [int] NULL,
	[Description] [varchar](500) NULL,
	[Batch] [varchar](50) NULL,
	[UserID] [int] NULL,
	[BankAccount] [varchar](10) NULL,
	[DateStamp] [datetime] NULL,
	[DepositAcctDate] [datetime] NULL,
 CONSTRAINT [PK_tbl_CashReceipts] PRIMARY KEY CLUSTERED 
(
	[CRID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_ChargeType]    Script Date: 08/21/2019 7:06:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_ChargeType]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_ChargeType](
	[CTID] [bigint] IDENTITY(1,1) NOT NULL,
	[Charge_Type] [varchar](10) NOT NULL,
	[Summary_Charge_Type] [varchar](10) NOT NULL,
	[Charge_Description] [varchar](30) NOT NULL,
	[Charge_Reference] [varchar](10) NOT NULL,
	[Payment_Description] [varchar](30) NOT NULL,
	[Payment_Reference] [varchar](10) NOT NULL,
	[Revenue_Account] [varchar](16) NULL,
	[Receivable_Account] [varchar](16) NULL,
	[Prepayment_Account] [varchar](16) NULL,
	[CreatedBy] [int] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[Time_Stamp] [varchar](8) NOT NULL,
	[Concession] [smallint] NOT NULL,
 CONSTRAINT [PK_tbl_ChargeType] PRIMARY KEY CLUSTERED 
(
	[CTID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_City]    Script Date: 08/21/2019 7:06:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_City]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_City](
	[ID] [bigint] IDENTITY(1,1) NOT NULL,
	[CityName] [varchar](100) NULL,
	[StateID] [bigint] NULL,
 CONSTRAINT [PK_tbl_City] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_Country]    Script Date: 08/21/2019 7:06:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Country]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Country](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[CountryName] [nvarchar](100) NOT NULL
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[tbl_Document]    Script Date: 08/21/2019 7:06:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Document]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Document](
	[DocID] [bigint] IDENTITY(1,1) NOT NULL,
	[TenantID] [bigint] NULL,
	[DocumentName] [nvarchar](500) NULL,
	[DocumentType] [nvarchar](50) NULL,
	[DocumentNumber] [nvarchar](500) NULL,
	[UploadDate] [datetime] NULL,
	[UploadBy] [bigint] NULL,
 CONSTRAINT [PK_tbl_Document] PRIMARY KEY CLUSTERED 
(
	[DocID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[tbl_DocumentVerification]    Script Date: 08/21/2019 7:06:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_DocumentVerification]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_DocumentVerification](
	[DocID] [bigint] IDENTITY(1,1) NOT NULL,
	[ProspectusID] [bigint] NULL,
	[Address] [nvarchar](max) NULL,
	[DocumentType] [int] NULL,
	[DocumentName] [nvarchar](500) NULL,
	[VerificationStatus] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[LeaseDocuments] [varchar](500) NULL,
	[DocumentState] [varchar](500) NULL,
	[DocumentIDNumber] [varchar](500) NULL,
 CONSTRAINT [PK_tbl_DocumentVerification] PRIMARY KEY CLUSTERED 
(
	[DocID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_Event]    Script Date: 08/21/2019 7:06:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Event]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Event](
	[EventID] [bigint] IDENTITY(1,1) NOT NULL,
	[EventName] [nvarchar](200) NOT NULL,
	[PropertyID] [bigint] NULL,
	[EventDate] [datetime] NULL,
	[Photo] [nvarchar](500) NULL,
	[Description] [nvarchar](max) NULL,
	[CreatedByID] [int] NULL,
	[CreatedByDate] [datetime] NULL,
 CONSTRAINT [PK_tbl_Event] PRIMARY KEY CLUSTERED 
(
	[EventID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[tbl_EventBooking]    Script Date: 08/21/2019 7:06:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_EventBooking]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_EventBooking](
	[EventBookingID] [bigint] IDENTITY(1,1) NOT NULL,
	[TenantID] [bigint] NULL,
	[EventID] [bigint] NULL,
	[BookingDate] [datetime] NOT NULL,
	[BookingDetails] [nvarchar](max) NULL,
	[CreatedByID] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[NoOfGuest] [int] NULL,
 CONSTRAINT [PK_tbl_EventBooking] PRIMARY KEY CLUSTERED 
(
	[EventBookingID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[tbl_Facility]    Script Date: 08/21/2019 7:06:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Facility]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Facility](
	[FacilityID] [int] IDENTITY(1,1) NOT NULL,
	[FacilityName] [nvarchar](200) NOT NULL,
	[PropertyID] [bigint] NULL,
	[Description] [nvarchar](max) NULL,
	[Photo] [nvarchar](500) NULL,
	[CreatedByID] [int] NULL,
	[CreatedDate] [datetime] NULL,
 CONSTRAINT [PK_tbl_Facility] PRIMARY KEY CLUSTERED 
(
	[FacilityID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[tbl_FacilityBooking]    Script Date: 08/21/2019 7:06:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_FacilityBooking]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_FacilityBooking](
	[FacilityBookingID] [bigint] IDENTITY(1,1) NOT NULL,
	[TenantID] [bigint] NULL,
	[FacilityID] [int] NULL,
	[BookingDate] [datetime] NULL,
	[BookingDetails] [nvarchar](max) NULL,
	[CreatedByID] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[RequiredFromDate] [datetime] NULL,
	[RequiredToDate] [datetime] NULL,
 CONSTRAINT [PK_tbl_Booking] PRIMARY KEY CLUSTERED 
(
	[FacilityBookingID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[tbl_Gallery]    Script Date: 08/21/2019 7:06:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Gallery]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Gallery](
	[GID] [bigint] IDENTITY(1,1) NOT NULL,
	[PhotoPath] [nvarchar](50) NULL,
	[UploadedDate] [datetime] NULL,
	[PID] [bigint] NULL,
	[ToolTip] [nvarchar](50) NULL,
 CONSTRAINT [PK_tbl_Gallery] PRIMARY KEY CLUSTERED 
(
	[GID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[tbl_Invoice]    Script Date: 08/21/2019 7:06:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Invoice]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Invoice](
	[InvoiceID] [bigint] IDENTITY(1,1) NOT NULL,
	[InvoiceNumber] [varchar](15) NULL,
	[Vendor] [varchar](10) NULL,
	[InvoiceDesc] [varchar](30) NULL,
	[InvoiceDate] [datetime] NULL,
	[ReceivedDate] [datetime] NULL,
	[PaymentDate] [datetime] NULL,
	[TotalAmount] [money] NULL,
	[Route] [varchar](50) NULL,
	[ExportNow] [smallint] NULL,
	[ExportedDate] [datetime] NULL,
	[ExportedBy] [int] NULL,
	[Approved] [datetime] NULL,
	[ApprovedBy] [varchar](255) NULL,
	[BatchID] [varchar](15) NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
 CONSTRAINT [PK_tbl_Invoice] PRIMARY KEY CLUSTERED 
(
	[InvoiceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_Lease]    Script Date: 08/21/2019 7:06:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Lease]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Lease](
	[LID] [bigint] IDENTITY(1,1) NOT NULL,
	[PID] [bigint] NULL,
	[UID] [bigint] NULL,
	[TenantID] [bigint] NOT NULL,
	[Revision_Num] [int] NULL,
	[Status] [int] NULL,
	[Being_Terminated] [int] NULL,
	[Phase] [varchar](200) NULL,
	[Notice_Date] [datetime] NULL,
	[Termination_Reason] [varchar](200) NULL,
	[Balance] [money] NULL,
	[Previous_Balance] [money] NULL,
	[Returned_Check_Limit] [int] NULL,
	[Number_Returned_Checks] [int] NULL,
	[Last_Return_Ck_Date] [datetime] NULL,
	[Last_Return_Pmt_ID] [int] NULL,
	[Last_Return_Ck_Num] [int] NULL,
	[Original_Start] [datetime] NULL,
	[Actual_Start] [datetime] NULL,
	[Original_Lease_End] [datetime] NULL,
	[Actual_Lease_End] [datetime] NULL,
	[Intended_MoveIn_Date] [datetime] NULL,
	[Actual_MoveIn_Date] [datetime] NULL,
	[Intend_MoveOut_Date] [datetime] NULL,
	[Actual_MoveOut_Date] [datetime] NULL,
	[Statement_Type] [varchar](200) NULL,
	[Last_Rent_Roll_Date] [datetime] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[Reconciled] [datetime] NULL,
	[Term] [varchar](500) NULL,
 CONSTRAINT [PK_tbl_Lease] PRIMARY KEY CLUSTERED 
(
	[LID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_LeaseRenewal]    Script Date: 08/21/2019 7:06:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_LeaseRenewal]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_LeaseRenewal](
	[LID] [bigint] NOT NULL,
	[Revision_Num] [int] NULL,
	[RenewalDate] [datetime] NULL,
	[EffectiveDate] [datetime] NULL,
	[PriorLeaseBegin] [datetime] NULL,
	[PriorLeaseEnd] [datetime] NULL,
	[ID] [bigint] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_tbl_LeaseRenewal] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[tbl_LeaseTransfer]    Script Date: 08/21/2019 7:06:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_LeaseTransfer]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_LeaseTransfer](
	[LID] [bigint] NOT NULL,
	[Revision_Num] [int] NOT NULL,
	[LeaseStart] [datetime] NULL,
	[LeaseEnd] [datetime] NULL,
	[UnitFrom] [varchar](10) NULL,
	[UnitTo] [varchar](10) NULL,
	[MoveIn] [datetime] NULL,
	[ID] [bigint] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_tbl_LeaseTransfer] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_Login]    Script Date: 08/21/2019 7:06:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Login]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Login](
	[UserID] [int] IDENTITY(1,1) NOT FOR REPLICATION NOT NULL,
	[Username] [nvarchar](255) NULL,
	[Password] [nvarchar](255) NULL,
	[FirstName] [varchar](100) NULL,
	[LastName] [varchar](100) NULL,
	[Email] [varchar](260) NULL,
	[CellPhone] [varchar](15) NULL,
	[IsActive] [int] NULL,
	[TenantID] [bigint] NULL,
	[IsSuperUser] [int] NULL,
	[UserType] [int] NULL,
 CONSTRAINT [PK_tbl_Login] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_LoginHistory]    Script Date: 08/21/2019 7:06:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_LoginHistory]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_LoginHistory](
	[ID] [bigint] IDENTITY(1,1) NOT FOR REPLICATION NOT NULL,
	[UserID] [int] NULL,
	[SessionID] [varchar](500) NULL,
	[IPAddress] [varchar](50) NULL,
	[PageName] [varchar](100) NULL,
	[LoginDateTime] [datetime] NULL,
	[LogoutDateTime] [datetime] NULL,
 CONSTRAINT [PK_tbl_LoginHistory] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_Notice]    Script Date: 08/21/2019 7:06:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Notice]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Notice](
	[NoticeID] [bigint] IDENTITY(1,1) NOT NULL,
	[PID] [bigint] NULL,
	[UID] [bigint] NULL,
	[TID] [bigint] NULL,
	[LeaseID] [bigint] NULL,
	[Revision_Num] [int] NULL,
	[NoticeDate] [datetime] NULL,
	[IntendedMoveOut] [datetime] NULL,
	[TerminationReason] [varchar](500) NULL,
	[CancelNoticeDate] [datetime] NULL,
 CONSTRAINT [PK_tbl_Notice] PRIMARY KEY CLUSTERED 
(
	[NoticeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_OnlinePayment]    Script Date: 08/21/2019 7:06:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_OnlinePayment]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_OnlinePayment](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[PID] [bigint] NULL,
	[Name_On_Card] [nvarchar](29) NULL,
	[CardNumber] [nvarchar](15) NULL,
	[CardMonth] [int] NULL,
	[CardYear] [int] NULL,
	[CCVNumber] [int] NULL,
	[ProspectId] [bigint] NULL,
	[PaymentMethod] [int] NULL,
 CONSTRAINT [PK_tbl_OnlinePayment] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[tbl_Parking]    Script Date: 08/21/2019 7:06:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Parking]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Parking](
	[ParkingID] [bigint] IDENTITY(1,1) NOT NULL,
	[PropertyID] [bigint] NULL,
	[ParkingName] [nvarchar](50) NULL,
	[Charges] [money] NULL,
	[Description] [nvarchar](500) NULL,
	[Type] [int] NULL,
	[Status] [int] NULL,
 CONSTRAINT [PK_tbl_Parking] PRIMARY KEY CLUSTERED 
(
	[ParkingID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[tbl_PetPlace]    Script Date: 08/21/2019 7:06:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_PetPlace]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_PetPlace](
	[PetPlaceID] [bigint] IDENTITY(1,1) NOT NULL,
	[PropertyID] [bigint] NULL,
	[PetPlace] [nvarchar](50) NULL,
	[Charges] [money] NULL,
	[Description] [nvarchar](500) NULL,
	[Type] [int] NULL,
	[Status] [int] NULL,
 CONSTRAINT [PK_tbl_PetPlace] PRIMARY KEY CLUSTERED 
(
	[PetPlaceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[tbl_Promotion]    Script Date: 08/21/2019 7:06:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Promotion]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Promotion](
	[PromotionID] [int] IDENTITY(1,1) NOT NULL,
	[PropertyID] [bigint] NULL,
	[PromotionTitle] [varchar](500) NULL,
	[StartDate] [datetime] NULL,
	[EndDate] [datetime] NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedById] [int] NULL,
 CONSTRAINT [PK_tbl_Promotion] PRIMARY KEY CLUSTERED 
(
	[PromotionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_Properties]    Script Date: 08/21/2019 7:06:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Properties]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Properties](
	[PID] [bigint] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NULL,
	[Description] [nvarchar](1000) NULL,
	[Status] [int] NULL,
	[Area] [nvarchar](50) NULL,
	[Location] [nvarchar](500) NULL,
	[LocationGoogle] [nvarchar](500) NULL,
	[Garages] [int] NULL,
	[BuiltIn] [nvarchar](50) NULL,
	[Parking] [nvarchar](200) NULL,
	[Waterfront] [nvarchar](500) NULL,
	[Amenities] [varchar](1000) NULL,
	[NoOfUnits] [int] NULL,
	[NoOfFloors] [int] NULL,
	[AgentID] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[LastModifiedBy] [int] NULL,
	[LastModifiedeDate] [datetime] NULL,
	[Picture] [nvarchar](50) NULL,
	[YouTube] [nvarchar](500) NULL,
	[State] [bigint] NULL,
	[City] [bigint] NULL,
 CONSTRAINT [PK_tbl_Properties] PRIMARY KEY CLUSTERED 
(
	[PID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_PropertyFloor]    Script Date: 08/21/2019 7:06:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_PropertyFloor]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_PropertyFloor](
	[FloorID] [bigint] IDENTITY(1,1) NOT NULL,
	[PID] [bigint] NULL,
	[Coordinates] [nvarchar](1000) NULL,
	[FloorNo] [varchar](50) NULL,
	[FloorPlan] [nvarchar](200) NULL,
 CONSTRAINT [PK_tbl_PropertyFloor] PRIMARY KEY CLUSTERED 
(
	[FloorID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_PropertyUnits]    Script Date: 08/21/2019 7:06:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_PropertyUnits]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_PropertyUnits](
	[UID] [bigint] IDENTITY(1,1) NOT NULL,
	[PID] [bigint] NULL,
	[UnitNo] [nvarchar](10) NULL,
	[Wing] [varchar](10) NOT NULL,
	[Building] [varchar](10) NOT NULL,
	[FloorNo] [int] NULL,
	[Current_Rent] [money] NOT NULL,
	[Previous_Rent] [money] NOT NULL,
	[Market_Rent] [money] NOT NULL,
	[Deposit] [money] NOT NULL,
	[Leased] [nvarchar](50) NULL,
	[Rooms] [int] NOT NULL,
	[Bedroom] [int] NULL,
	[Bathroom] [int] NULL,
	[Hall] [int] NULL,
	[Den] [int] NOT NULL,
	[Furnished] [int] NOT NULL,
	[Fireplace] [int] NOT NULL,
	[Carpet] [int] NOT NULL,
	[Carpet_Color] [varchar](15) NOT NULL,
	[Wall_Paint_Color] [varchar](25) NOT NULL,
	[Drapes] [int] NOT NULL,
	[Air_Conditioning] [int] NOT NULL,
	[Range] [int] NOT NULL,
	[Gas_Range] [int] NOT NULL,
	[Elec_Range] [int] NOT NULL,
	[Washer_Hookup] [int] NOT NULL,
	[Dryer_Hookup] [int] NOT NULL,
	[Gas_Dryer_Hookup] [int] NOT NULL,
	[Elec_Dryer_Hookup] [int] NOT NULL,
	[Washer] [int] NOT NULL,
	[Dryer] [int] NOT NULL,
	[Refrigerator] [int] NOT NULL,
	[Dishwasher] [int] NOT NULL,
	[Disposal] [int] NOT NULL,
	[PetDetails] [nvarchar](500) NULL,
	[Area] [nvarchar](50) NULL,
	[FloorPlan] [nvarchar](50) NULL,
	[AvailableDate] [datetime] NULL,
	[PendingMoveIn] [int] NOT NULL,
	[IntendedMoveIn_Date] [datetime] NULL,
	[ActualMoveInDate] [datetime] NULL,
	[PendingMoveOut] [int] NOT NULL,
	[IntendMoveOutDate] [datetime] NULL,
	[ActualMoveOutDate] [datetime] NULL,
	[VacancyLoss_Date] [datetime] NULL,
	[OccupancyDate] [datetime] NULL,
	[Coordinates] [nvarchar](1000) NULL,
 CONSTRAINT [PK_tbl_PropertyUnits] PRIMARY KEY CLUSTERED 
(
	[UID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_Prospect]    Script Date: 08/21/2019 7:06:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Prospect]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Prospect](
	[PID] [bigint] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](50) NOT NULL,
	[LastName] [nvarchar](50) NULL,
	[PhoneNo] [nvarchar](20) NULL,
	[EmailId] [nvarchar](50) NULL,
	[State] [bigint] NULL,
	[City] [bigint] NULL,
	[Address] [nvarchar](500) NULL,
	[Message] [nvarchar](500) NULL,
	[HavingPets] [int] NULL,
	[PetsDetails] [varchar](100) NULL,
	[VehicleDetails] [varchar](100) NULL,
	[MinBedroom] [int] NULL,
	[MinBathroom] [int] NULL,
	[MinRent] [decimal](18, 2) NULL,
	[MaxBedroom] [int] NULL,
	[MaxBathroom] [int] NULL,
	[MaxRent] [decimal](18, 2) NULL,
	[UnitID] [bigint] NULL,
	[RequiredDate] [datetime] NULL,
	[Term] [int] NULL,
	[ReasonForMovingIn] [varchar](100) NULL,
	[VisitDateTime] [smalldatetime] NULL,
	[LeasingAgent] [int] NULL,
	[MarketSource] [varchar](20) NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[LastModifiedBy] [int] NULL,
	[LastModifiedeDate] [datetime] NULL,
	[Status] [int] NULL,
	[PropertyID] [bigint] NULL,
 CONSTRAINT [PK_tbl_Prospect] PRIMARY KEY CLUSTERED 
(
	[PID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_PurchaseOrder]    Script Date: 08/21/2019 7:06:29 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_PurchaseOrder]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_PurchaseOrder](
	[POID] [bigint] IDENTITY(1,1) NOT NULL,
	[PropertyID] [bigint] NULL,
	[OrderNumber] [varchar](20) NULL,
	[Vendor] [varchar](10) NULL,
	[PODesc] [varchar](30) NULL,
	[PODate] [smalldatetime] NULL,
	[TotalAmount] [money] NULL,
	[Route] [varchar](50) NULL,
	[ApprovedDate] [datetime] NULL,
	[ApprovedBy] [varchar](255) NULL,
	[CanceledDate] [datetime] NULL,
	[CanceledBy] [int] NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
 CONSTRAINT [PK_tbl_PurchaseOrder] PRIMARY KEY CLUSTERED 
(
	[POID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_SalesAgent]    Script Date: 08/21/2019 7:06:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_SalesAgent]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_SalesAgent](
	[AgentID] [int] IDENTITY(1,1) NOT FOR REPLICATION NOT NULL,
	[FirstName] [nvarchar](100) NULL,
	[LastName] [nvarchar](100) NULL,
	[Mobile] [nvarchar](100) NULL,
	[Email] [nvarchar](100) NULL,
	[Address] [varchar](500) NULL,
	[State] [bigint] NULL,
	[City] [bigint] NULL,
	[PID] [bigint] NULL,
	[Designation] [nvarchar](100) NULL,
	[Photo] [varchar](500) NULL,
 CONSTRAINT [PK_tbl_SalesAgent] PRIMARY KEY CLUSTERED 
(
	[AgentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_State]    Script Date: 08/21/2019 7:06:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_State]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_State](
	[ID] [bigint] IDENTITY(1,1) NOT NULL,
	[StateName] [varchar](100) NULL,
	[Abbreviation] [varchar](10) NULL,
	[CountryID] [bigint] NULL,
 CONSTRAINT [PK_tbl_State] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_Storage]    Script Date: 08/21/2019 7:06:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Storage]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Storage](
	[StorageID] [bigint] IDENTITY(1,1) NOT NULL,
	[PropertyID] [bigint] NULL,
	[StorageName] [nvarchar](50) NULL,
	[Charges] [money] NULL,
	[Description] [nvarchar](500) NULL,
	[Type] [int] NULL,
	[Status] [int] NULL,
 CONSTRAINT [PK_tbl_Storage] PRIMARY KEY CLUSTERED 
(
	[StorageID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[tbl_Tenant]    Script Date: 08/21/2019 7:06:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Tenant](
	[ID] [bigint] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](50) NULL,
	[MiddleInitial] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
	[DateOfBirth] [datetime] NULL,
	[Gender] [int] NULL,
	[MaritalStatus] [int] NULL,
	[StudentStatus] [int] NULL,
	[Address] [varchar](300) NULL,
	[City] [varchar](50) NULL,
	[State] [bigint] NULL,
	[Zip] [varchar](5) NULL,
	[HomePhone] [varchar](15) NULL,
	[SocialSecurityNum] [varchar](15) NULL,
	[DriverLicense] [varchar](15) NULL,
	[CarMake] [varchar](50) NULL,
	[CarModel] [varchar](50) NULL,
	[CarLic] [varchar](50) NULL,
	[EmergencyContact] [varchar](50) NULL,
	[EmergencyPhone] [varchar](15) NULL,
	[RentResp] [int] NULL,
	[Income] [money] NULL,
	[PropertyID] [bigint] NULL,
	[UnitID] [bigint] NULL,
	[Occupation] [varchar](50) NULL,
	[OfficeName] [varchar](50) NULL,
	[JobCode] [varchar](50) NULL,
	[OfficeEmail] [varchar](255) NULL,
	[OfficePhone] [varchar](15) NULL,
	[OfficePhoneExtension] [varchar](5) NULL,
	[OfficeAddress] [varchar](300) NULL,
	[OfficeCity] [varchar](50) NULL,
	[OfficeState] [int] NULL,
	[OfficeZip] [varchar](5) NULL,
	[EmployerContact] [varchar](50) NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[LastModifiedBy] [int] NULL,
	[LastModifiedeDate] [datetime] NULL,
 CONSTRAINT [PK_tbl_Tenant] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_TenantInfo]    Script Date: 08/21/2019 7:06:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_TenantInfo]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_TenantInfo](
	[TenantID] [bigint] IDENTITY(1,1) NOT NULL,
	[ProspectID] [bigint] NULL,
	[FirstName] [varchar](50) NULL,
	[MiddleInitial] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
	[DateOfBirth] [datetime] NULL,
	[Gender] [int] NULL,
	[Email] [varchar](255) NULL,
	[Mobile] [varchar](15) NULL,
	[PassportNumber] [varchar](50) NULL,
	[CountryIssuance] [varchar](50) NULL,
	[DateIssuance] [datetime] NULL,
	[DateExpire] [datetime] NULL,
	[IDType] [int] NULL,
	[State] [bigint] NULL,
	[IDNumber] [nvarchar](50) NULL,
	[Country] [varchar](50) NULL,
	[HomeAddress1] [varchar](300) NULL,
	[HomeAddress2] [varchar](300) NULL,
	[StateHome] [bigint] NULL,
	[CityHome] [varchar](50) NULL,
	[ZipHome] [varchar](5) NULL,
	[RentOwn] [int] NULL,
	[MoveInDate] [datetime] NULL,
	[MonthlyPayment] [varchar](50) NULL,
	[Reason] [varchar](50) NULL,
	[EmployerName] [varchar](50) NULL,
	[JobTitle] [varchar](50) NULL,
	[JobType] [int] NULL,
	[StartDate] [datetime] NULL,
	[Income] [money] NULL,
	[AdditionalIncome] [money] NULL,
	[SupervisorName] [varchar](50) NULL,
	[SupervisorPhone] [varchar](15) NULL,
	[SupervisorEmail] [varchar](255) NULL,
	[OfficeCountry] [varchar](50) NULL,
	[OfficeAddress1] [varchar](300) NULL,
	[OfficeAddress2] [varchar](300) NULL,
	[OfficeState] [bigint] NULL,
	[OfficeCity] [varchar](50) NULL,
	[OfficeZip] [varchar](5) NULL,
	[Relationship] [varchar](50) NULL,
	[EmergencyFirstName] [varchar](50) NULL,
	[EmergencyLastName] [varchar](50) NULL,
	[EmergencyMobile] [varchar](15) NULL,
	[EmergencyHomePhone] [varchar](15) NULL,
	[EmergencyWorkPhone] [varchar](15) NULL,
	[EmergencyEmail] [varchar](255) NULL,
	[EmergencyCountry] [varchar](50) NULL,
	[EmergencyAddress1] [varchar](300) NULL,
	[EmergencyAddress2] [varchar](300) NULL,
	[EmergencyStateHome] [bigint] NULL,
	[EmergencyCityHome] [varchar](50) NULL,
	[EmergencyZipHome] [varchar](5) NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[LastModifiedBy] [int] NULL,
	[LastModifiedeDate] [datetime] NULL,
	[IsInternational] [int] NULL,
	[PropertyID] [bigint] NULL,
	[UnitID] [bigint] NULL,
 CONSTRAINT [PK_tbl_TenantInfo] PRIMARY KEY CLUSTERED 
(
	[TenantID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_TenantOnline]    Script Date: 08/21/2019 7:06:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING OFF
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_TenantOnline]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_TenantOnline](
	[ID] [bigint] IDENTITY(1,1) NOT NULL,
	[ProspectID] [bigint] NULL,
	[FirstName] [varchar](50) NULL,
	[MiddleInitial] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
	[DateOfBirth] [datetime] NULL,
	[Gender] [int] NULL,
	[Email] [varchar](255) NULL,
	[Mobile] [varchar](15) NULL,
	[PassportNumber] [varchar](50) NULL,
	[CountryIssuance] [varchar](50) NULL,
	[DateIssuance] [datetime] NULL,
	[DateExpire] [datetime] NULL,
	[IDType] [int] NULL,
	[State] [bigint] NULL
) ON [PRIMARY]
SET ANSI_PADDING ON
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [IDNumber] [varchar](50) NULL
SET ANSI_PADDING OFF
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [Country] [varchar](50) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [HomeAddress1] [varchar](300) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [HomeAddress2] [varchar](300) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [StateHome] [bigint] NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [CityHome] [varchar](50) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [ZipHome] [varchar](5) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [RentOwn] [int] NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [MoveInDate] [datetime] NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [MonthlyPayment] [varchar](50) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [Reason] [varchar](50) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [EmployerName] [varchar](50) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [JobTitle] [varchar](50) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [JobType] [int] NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [StartDate] [datetime] NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [Income] [money] NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [AdditionalIncome] [money] NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [SupervisorName] [varchar](50) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [SupervisorPhone] [varchar](15) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [SupervisorEmail] [varchar](255) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [OfficeCountry] [varchar](50) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [OfficeAddress1] [varchar](300) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [OfficeAddress2] [varchar](300) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [OfficeState] [bigint] NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [OfficeCity] [varchar](50) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [OfficeZip] [varchar](5) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [Relationship] [varchar](50) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [EmergencyFirstName] [varchar](50) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [EmergencyLastName] [varchar](50) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [EmergencyMobile] [varchar](15) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [EmergencyHomePhone] [varchar](15) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [EmergencyWorkPhone] [varchar](15) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [EmergencyEmail] [varchar](255) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [EmergencyCountry] [varchar](50) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [EmergencyAddress1] [varchar](300) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [EmergencyAddress2] [varchar](300) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [EmergencyStateHome] [bigint] NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [EmergencyCityHome] [varchar](50) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [EmergencyZipHome] [varchar](5) NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [CreatedDate] [datetime] NULL
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [IsInternational] [int] NULL
SET ANSI_PADDING ON
ALTER TABLE [dbo].[tbl_TenantOnline] ADD [OtherGender] [varchar](100) NULL
 CONSTRAINT [PK_tbl_TenantOnline] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_TenantParking]    Script Date: 08/21/2019 7:06:34 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_TenantParking]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_TenantParking](
	[TPID] [bigint] IDENTITY(1,1) NOT NULL,
	[ParkingID] [bigint] NULL,
	[TenantID] [bigint] NULL,
	[Charges] [money] NULL,
	[CreatedDate] [datetime] NULL,
 CONSTRAINT [PK_tbl_TenantParking] PRIMARY KEY CLUSTERED 
(
	[TPID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[tbl_TenantPet]    Script Date: 08/21/2019 7:06:34 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_TenantPet]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_TenantPet](
	[PetID] [int] IDENTITY(1,1) NOT NULL,
	[TenantID] [bigint] NULL,
	[PetType] [int] NULL,
	[Breed] [varchar](50) NULL,
	[Weight] [varchar](50) NULL,
	[Age] [varchar](50) NULL,
 CONSTRAINT [PK_tbl_TenantPet] PRIMARY KEY CLUSTERED 
(
	[PetID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_TenantPetPlace]    Script Date: 08/21/2019 7:06:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_TenantPetPlace]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_TenantPetPlace](
	[TPetID] [bigint] IDENTITY(1,1) NOT NULL,
	[PetPlaceID] [bigint] NULL,
	[TenantID] [bigint] NULL,
	[Charges] [money] NULL,
	[CreatedDate] [datetime] NULL,
 CONSTRAINT [PK_tbl_TenantPetPlace] PRIMARY KEY CLUSTERED 
(
	[TPetID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[tbl_TenantStorage]    Script Date: 08/21/2019 7:06:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_TenantStorage]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_TenantStorage](
	[TSID] [bigint] IDENTITY(1,1) NOT NULL,
	[StorageID] [bigint] NULL,
	[TenantID] [bigint] NULL,
	[Charges] [money] NULL,
	[CreatedDate] [datetime] NULL,
 CONSTRAINT [PK_tbl_TenantStorage] PRIMARY KEY CLUSTERED 
(
	[TSID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[tbl_Transaction]    Script Date: 08/21/2019 7:06:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Transaction]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Transaction](
	[TransID] [int] IDENTITY(1,1) NOT NULL,
	[PropertyID] [bigint] NULL,
	[UnitID] [bigint] NULL,
	[TenantID] [bigint] NOT NULL,
	[LeaseID] [bigint] NOT NULL,
	[Revision_Num] [int] NOT NULL,
	[Transaction_Date] [datetime] NOT NULL,
	[Run] [int] NOT NULL,
	[Tax_Sequence] [int] NULL,
	[Transaction_Type] [varchar](20) NULL,
	[Description] [varchar](500) NULL,
	[Charge_Date] [datetime] NULL,
	[Summary_Charge_Type] [varchar](10) NULL,
	[Payment_ID] [int] NULL,
	[Reference] [varchar](10) NULL,
	[Charge_Amount] [money] NULL,
	[Credit_Amount] [money] NULL,
	[Miscellaneous_Amount] [money] NULL,
	[Accounting_Date] [datetime] NULL,
	[Journal] [int] NULL,
	[Accrual_Debit_Acct] [varchar](29) NULL,
	[Accrual_Credit_Acct] [varchar](29) NULL,
	[Cash_Debit_Account] [varchar](29) NULL,
	[Cash_Credit_Account] [varchar](29) NULL,
	[Appl_of_Origin] [varchar](3) NULL,
	[Batch] [varchar](10) NULL,
	[Batch_Source] [varchar](20) NULL,
	[CreatedBy] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[GL_Trans_Description] [varchar](500) NULL,
	[GL_Trans_Reference_1] [varchar](100) NULL,
	[GL_Trans_Reference_2] [varchar](100) NULL,
	[GL_Entries_Created] [int] NULL,
	[Charge_Type] [int] NULL,
	[ProspectID] [bigint] NULL,
	[TBankName] [nvarchar](100) NULL,
	[TAccCardName] [nvarchar](100) NULL,
	[TAccCardNumber] [nvarchar](29) NULL,
	[TRoutingNumber] [nvarchar](29) NULL,
	[TSecurityNumber] [nvarchar](29) NULL,
	[TCardExpirationMonth] [nvarchar](29) NULL,
	[TCardExpirationYear] [nvarchar](29) NULL,
 CONSTRAINT [PK_tbl_Transaction] PRIMARY KEY CLUSTERED 
(
	[TransID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_Utility]    Script Date: 08/21/2019 7:06:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Utility]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Utility](
	[UtilityID] [int] IDENTITY(1,1) NOT NULL,
	[UtilityTitle] [nvarchar](100) NULL,
	[UtilityDetails] [nvarchar](500) NULL,
 CONSTRAINT [PK_tbl_Utility] PRIMARY KEY CLUSTERED 
(
	[UtilityID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[tbl_UtilityBilling]    Script Date: 08/21/2019 7:06:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING OFF
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_UtilityBilling]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_UtilityBilling](
	[UBID] [bigint] IDENTITY(1,1) NOT NULL,
	[UtilityID] [int] NULL,
	[LeaseID] [bigint] NULL,
	[Revision_Num] [int] NULL,
	[Unit] [varchar](10) NULL,
	[ChargeType] [varchar](10) NULL,
	[EffectiveDate] [datetime] NULL,
	[MeterReading] [decimal](9, 1) NULL,
	[PricePerUnit] [decimal](9, 5) NULL,
	[Posted] [datetime] NULL,
	[TenantID] [bigint] NOT NULL,
 CONSTRAINT [PK_tbl_UtilityBilling] PRIMARY KEY CLUSTERED 
(
	[UBID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_Vehicle]    Script Date: 08/21/2019 7:06:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING OFF
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Vehicle]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Vehicle](
	[Vehicle_ID] [bigint] IDENTITY(1,1) NOT NULL,
	[TenantID] [bigint] NOT NULL,
	[License] [varchar](30) NULL,
	[State] [varchar](2) NULL,
	[Make] [varchar](30) NULL,
	[Model] [varchar](30) NULL,
	[Color] [varchar](30) NULL,
	[ProspectID] [bigint] NULL
) ON [PRIMARY]
SET ANSI_PADDING ON
ALTER TABLE [dbo].[tbl_Vehicle] ADD [Year] [varchar](5) NULL
 CONSTRAINT [PK_tbl_Vehicle] PRIMARY KEY CLUSTERED 
(
	[Vehicle_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_Vendor]    Script Date: 08/21/2019 7:06:38 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Vendor]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Vendor](
	[Vendor_ID] [bigint] IDENTITY(1,1) NOT NULL,
	[Vendor_Name] [varchar](60) NOT NULL,
	[Mobile_Number] [nvarchar](50) NULL,
	[Email_Id] [nvarchar](50) NULL,
	[Address] [nvarchar](200) NULL,
	[State] [int] NULL,
	[City] [int] NULL,
	[Created_By] [int] NULL,
	[Created_Date] [datetime] NULL,
 CONSTRAINT [PK_tbl_Vendor] PRIMARY KEY CLUSTERED 
(
	[Vendor_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_Visit]    Script Date: 08/21/2019 7:06:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING OFF
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_Visit]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_Visit](
	[VisitID] [bigint] IDENTITY(1,1) NOT NULL,
	[ProspectID] [bigint] NULL,
	[VisitNumber] [int] NULL,
	[VisitDateTime] [datetime] NULL,
	[ResultCode] [varchar](20) NULL,
	[Details] [varchar](1000) NULL,
	[Activity] [int] NULL,
	[VisitIncharge] [int] NULL,
	[VisitSlot] [int] NULL,
 CONSTRAINT [PK_tbl_Visit] PRIMARY KEY CLUSTERED 
(
	[VisitID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_WorkOrder]    Script Date: 08/21/2019 7:06:39 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_WorkOrder]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_WorkOrder](
	[WOID] [bigint] IDENTITY(1,1) NOT NULL,
	[TenantID] [bigint] NULL,
	[UnitID] [bigint] NULL,
	[PropertyID] [bigint] NULL,
	[ProblemID] [varchar](20) NULL,
	[Description] [varchar](500) NULL,
	[DateOpened] [datetime] NULL,
	[DateClosed] [datetime] NULL,
	[ReportedBy] [int] NULL,
	[ContactPhone] [varchar](15) NULL,
	[AssignedTo] [varchar](50) NULL,
	[Resolution] [varchar](500) NULL,
	[VendorID] [bigint] NULL,
 CONSTRAINT [PK_tbl_WorkOrder] PRIMARY KEY CLUSTERED 
(
	[WOID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[tbl_ZipCodes]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING OFF
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[tbl_ZipCodes]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[tbl_ZipCodes](
	[City] [bigint] NOT NULL,
	[State] [bigint] NOT NULL,
	[Zip] [varchar](5) NULL,
	[AreaCode] [varchar](3) NULL,
	[ID] [bigint] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_tbl_ZipCodes] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_tbl_Login_IsSuperUser]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[tbl_Login] ADD  CONSTRAINT [DF_tbl_Login_IsSuperUser]  DEFAULT ((0)) FOR [IsSuperUser]
END

GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Applicant_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Applicant]'))
ALTER TABLE [dbo].[tbl_Applicant]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Applicant_tbl_ApplyNow] FOREIGN KEY([TenantID])
REFERENCES [dbo].[tbl_ApplyNow] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Applicant_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Applicant]'))
ALTER TABLE [dbo].[tbl_Applicant] CHECK CONSTRAINT [FK_tbl_Applicant_tbl_ApplyNow]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_ApplyNow_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_ApplyNow]'))
ALTER TABLE [dbo].[tbl_ApplyNow]  WITH CHECK ADD  CONSTRAINT [FK_tbl_ApplyNow_tbl_PropertyUnits] FOREIGN KEY([PropertyId])
REFERENCES [dbo].[tbl_PropertyUnits] ([UID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_ApplyNow_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_ApplyNow]'))
ALTER TABLE [dbo].[tbl_ApplyNow] CHECK CONSTRAINT [FK_tbl_ApplyNow_tbl_PropertyUnits]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_CashReceipts_tbl_Lease]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_CashReceipts]'))
ALTER TABLE [dbo].[tbl_CashReceipts]  WITH CHECK ADD  CONSTRAINT [FK_tbl_CashReceipts_tbl_Lease] FOREIGN KEY([LeaseID])
REFERENCES [dbo].[tbl_Lease] ([LID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_CashReceipts_tbl_Lease]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_CashReceipts]'))
ALTER TABLE [dbo].[tbl_CashReceipts] CHECK CONSTRAINT [FK_tbl_CashReceipts_tbl_Lease]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_CashReceipts_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_CashReceipts]'))
ALTER TABLE [dbo].[tbl_CashReceipts]  WITH CHECK ADD  CONSTRAINT [FK_tbl_CashReceipts_tbl_Login] FOREIGN KEY([UserID])
REFERENCES [dbo].[tbl_Login] ([UserID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_CashReceipts_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_CashReceipts]'))
ALTER TABLE [dbo].[tbl_CashReceipts] CHECK CONSTRAINT [FK_tbl_CashReceipts_tbl_Login]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_CashReceipts_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_CashReceipts]'))
ALTER TABLE [dbo].[tbl_CashReceipts]  WITH CHECK ADD  CONSTRAINT [FK_tbl_CashReceipts_tbl_Properties] FOREIGN KEY([PropertyID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_CashReceipts_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_CashReceipts]'))
ALTER TABLE [dbo].[tbl_CashReceipts] CHECK CONSTRAINT [FK_tbl_CashReceipts_tbl_Properties]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_CashReceipts_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_CashReceipts]'))
ALTER TABLE [dbo].[tbl_CashReceipts]  WITH CHECK ADD  CONSTRAINT [FK_tbl_CashReceipts_tbl_PropertyUnits] FOREIGN KEY([PropertyID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_CashReceipts_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_CashReceipts]'))
ALTER TABLE [dbo].[tbl_CashReceipts] CHECK CONSTRAINT [FK_tbl_CashReceipts_tbl_PropertyUnits]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_CashReceipts_tbl_PropertyUnits1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_CashReceipts]'))
ALTER TABLE [dbo].[tbl_CashReceipts]  WITH CHECK ADD  CONSTRAINT [FK_tbl_CashReceipts_tbl_PropertyUnits1] FOREIGN KEY([UnitID])
REFERENCES [dbo].[tbl_PropertyUnits] ([UID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_CashReceipts_tbl_PropertyUnits1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_CashReceipts]'))
ALTER TABLE [dbo].[tbl_CashReceipts] CHECK CONSTRAINT [FK_tbl_CashReceipts_tbl_PropertyUnits1]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_CashReceipts_tbl_Tenant]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_CashReceipts]'))
ALTER TABLE [dbo].[tbl_CashReceipts]  WITH CHECK ADD  CONSTRAINT [FK_tbl_CashReceipts_tbl_Tenant] FOREIGN KEY([TenantID])
REFERENCES [dbo].[tbl_Tenant] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_CashReceipts_tbl_Tenant]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_CashReceipts]'))
ALTER TABLE [dbo].[tbl_CashReceipts] CHECK CONSTRAINT [FK_tbl_CashReceipts_tbl_Tenant]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_ChargeType_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_ChargeType]'))
ALTER TABLE [dbo].[tbl_ChargeType]  WITH CHECK ADD  CONSTRAINT [FK_tbl_ChargeType_tbl_Login] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[tbl_Login] ([UserID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_ChargeType_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_ChargeType]'))
ALTER TABLE [dbo].[tbl_ChargeType] CHECK CONSTRAINT [FK_tbl_ChargeType_tbl_Login]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_City_tbl_State]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_City]'))
ALTER TABLE [dbo].[tbl_City]  WITH CHECK ADD  CONSTRAINT [FK_tbl_City_tbl_State] FOREIGN KEY([StateID])
REFERENCES [dbo].[tbl_State] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_City_tbl_State]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_City]'))
ALTER TABLE [dbo].[tbl_City] CHECK CONSTRAINT [FK_tbl_City_tbl_State]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Document_tbl_Prospect]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Document]'))
ALTER TABLE [dbo].[tbl_Document]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Document_tbl_Prospect] FOREIGN KEY([TenantID])
REFERENCES [dbo].[tbl_Prospect] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Document_tbl_Prospect]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Document]'))
ALTER TABLE [dbo].[tbl_Document] CHECK CONSTRAINT [FK_tbl_Document_tbl_Prospect]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_DocumentVerification_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_DocumentVerification]'))
ALTER TABLE [dbo].[tbl_DocumentVerification]  WITH CHECK ADD  CONSTRAINT [FK_tbl_DocumentVerification_tbl_Login] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[tbl_Login] ([UserID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_DocumentVerification_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_DocumentVerification]'))
ALTER TABLE [dbo].[tbl_DocumentVerification] CHECK CONSTRAINT [FK_tbl_DocumentVerification_tbl_Login]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Event_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Event]'))
ALTER TABLE [dbo].[tbl_Event]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Event_tbl_Login] FOREIGN KEY([CreatedByID])
REFERENCES [dbo].[tbl_Login] ([UserID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Event_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Event]'))
ALTER TABLE [dbo].[tbl_Event] CHECK CONSTRAINT [FK_tbl_Event_tbl_Login]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Event_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Event]'))
ALTER TABLE [dbo].[tbl_Event]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Event_tbl_Properties] FOREIGN KEY([PropertyID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Event_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Event]'))
ALTER TABLE [dbo].[tbl_Event] CHECK CONSTRAINT [FK_tbl_Event_tbl_Properties]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_EventBooking_tbl_Event]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_EventBooking]'))
ALTER TABLE [dbo].[tbl_EventBooking]  WITH CHECK ADD  CONSTRAINT [FK_tbl_EventBooking_tbl_Event] FOREIGN KEY([EventID])
REFERENCES [dbo].[tbl_Event] ([EventID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_EventBooking_tbl_Event]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_EventBooking]'))
ALTER TABLE [dbo].[tbl_EventBooking] CHECK CONSTRAINT [FK_tbl_EventBooking_tbl_Event]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_EventBooking_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_EventBooking]'))
ALTER TABLE [dbo].[tbl_EventBooking]  WITH CHECK ADD  CONSTRAINT [FK_tbl_EventBooking_tbl_Login] FOREIGN KEY([CreatedByID])
REFERENCES [dbo].[tbl_Login] ([UserID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_EventBooking_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_EventBooking]'))
ALTER TABLE [dbo].[tbl_EventBooking] CHECK CONSTRAINT [FK_tbl_EventBooking_tbl_Login]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_EventBooking_tbl_Tenant]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_EventBooking]'))
ALTER TABLE [dbo].[tbl_EventBooking]  WITH CHECK ADD  CONSTRAINT [FK_tbl_EventBooking_tbl_Tenant] FOREIGN KEY([TenantID])
REFERENCES [dbo].[tbl_Tenant] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_EventBooking_tbl_Tenant]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_EventBooking]'))
ALTER TABLE [dbo].[tbl_EventBooking] CHECK CONSTRAINT [FK_tbl_EventBooking_tbl_Tenant]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Facility_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Facility]'))
ALTER TABLE [dbo].[tbl_Facility]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Facility_tbl_Login] FOREIGN KEY([CreatedByID])
REFERENCES [dbo].[tbl_Login] ([UserID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Facility_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Facility]'))
ALTER TABLE [dbo].[tbl_Facility] CHECK CONSTRAINT [FK_tbl_Facility_tbl_Login]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Facility_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Facility]'))
ALTER TABLE [dbo].[tbl_Facility]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Facility_tbl_Properties] FOREIGN KEY([PropertyID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Facility_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Facility]'))
ALTER TABLE [dbo].[tbl_Facility] CHECK CONSTRAINT [FK_tbl_Facility_tbl_Properties]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_FacilityBooking_tbl_Facility]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_FacilityBooking]'))
ALTER TABLE [dbo].[tbl_FacilityBooking]  WITH CHECK ADD  CONSTRAINT [FK_tbl_FacilityBooking_tbl_Facility] FOREIGN KEY([FacilityID])
REFERENCES [dbo].[tbl_Facility] ([FacilityID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_FacilityBooking_tbl_Facility]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_FacilityBooking]'))
ALTER TABLE [dbo].[tbl_FacilityBooking] CHECK CONSTRAINT [FK_tbl_FacilityBooking_tbl_Facility]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_FacilityBooking_tbl_FacilityBooking]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_FacilityBooking]'))
ALTER TABLE [dbo].[tbl_FacilityBooking]  WITH CHECK ADD  CONSTRAINT [FK_tbl_FacilityBooking_tbl_FacilityBooking] FOREIGN KEY([TenantID])
REFERENCES [dbo].[tbl_Tenant] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_FacilityBooking_tbl_FacilityBooking]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_FacilityBooking]'))
ALTER TABLE [dbo].[tbl_FacilityBooking] CHECK CONSTRAINT [FK_tbl_FacilityBooking_tbl_FacilityBooking]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_FacilityBooking_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_FacilityBooking]'))
ALTER TABLE [dbo].[tbl_FacilityBooking]  WITH CHECK ADD  CONSTRAINT [FK_tbl_FacilityBooking_tbl_Login] FOREIGN KEY([CreatedByID])
REFERENCES [dbo].[tbl_Login] ([UserID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_FacilityBooking_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_FacilityBooking]'))
ALTER TABLE [dbo].[tbl_FacilityBooking] CHECK CONSTRAINT [FK_tbl_FacilityBooking_tbl_Login]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Gallery_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Gallery]'))
ALTER TABLE [dbo].[tbl_Gallery]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Gallery_tbl_Properties] FOREIGN KEY([PID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Gallery_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Gallery]'))
ALTER TABLE [dbo].[tbl_Gallery] CHECK CONSTRAINT [FK_tbl_Gallery_tbl_Properties]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Invoice_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Invoice]'))
ALTER TABLE [dbo].[tbl_Invoice]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Invoice_tbl_Login] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[tbl_Login] ([UserID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Invoice_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Invoice]'))
ALTER TABLE [dbo].[tbl_Invoice] CHECK CONSTRAINT [FK_tbl_Invoice_tbl_Login]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Lease_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Lease]'))
ALTER TABLE [dbo].[tbl_Lease]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Lease_tbl_Login] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[tbl_Login] ([UserID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Lease_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Lease]'))
ALTER TABLE [dbo].[tbl_Lease] CHECK CONSTRAINT [FK_tbl_Lease_tbl_Login]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Lease_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Lease]'))
ALTER TABLE [dbo].[tbl_Lease]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Lease_tbl_Properties] FOREIGN KEY([PID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Lease_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Lease]'))
ALTER TABLE [dbo].[tbl_Lease] CHECK CONSTRAINT [FK_tbl_Lease_tbl_Properties]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Lease_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Lease]'))
ALTER TABLE [dbo].[tbl_Lease]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Lease_tbl_PropertyUnits] FOREIGN KEY([UID])
REFERENCES [dbo].[tbl_PropertyUnits] ([UID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Lease_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Lease]'))
ALTER TABLE [dbo].[tbl_Lease] CHECK CONSTRAINT [FK_tbl_Lease_tbl_PropertyUnits]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_LeaseRenewal_tbl_Lease]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_LeaseRenewal]'))
ALTER TABLE [dbo].[tbl_LeaseRenewal]  WITH CHECK ADD  CONSTRAINT [FK_tbl_LeaseRenewal_tbl_Lease] FOREIGN KEY([LID])
REFERENCES [dbo].[tbl_Lease] ([LID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_LeaseRenewal_tbl_Lease]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_LeaseRenewal]'))
ALTER TABLE [dbo].[tbl_LeaseRenewal] CHECK CONSTRAINT [FK_tbl_LeaseRenewal_tbl_Lease]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_LeaseTransfer_tbl_Lease]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_LeaseTransfer]'))
ALTER TABLE [dbo].[tbl_LeaseTransfer]  WITH CHECK ADD  CONSTRAINT [FK_tbl_LeaseTransfer_tbl_Lease] FOREIGN KEY([LID])
REFERENCES [dbo].[tbl_Lease] ([LID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_LeaseTransfer_tbl_Lease]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_LeaseTransfer]'))
ALTER TABLE [dbo].[tbl_LeaseTransfer] CHECK CONSTRAINT [FK_tbl_LeaseTransfer_tbl_Lease]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Notice_tbl_Lease]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Notice]'))
ALTER TABLE [dbo].[tbl_Notice]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Notice_tbl_Lease] FOREIGN KEY([LeaseID])
REFERENCES [dbo].[tbl_Lease] ([LID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Notice_tbl_Lease]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Notice]'))
ALTER TABLE [dbo].[tbl_Notice] CHECK CONSTRAINT [FK_tbl_Notice_tbl_Lease]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Notice_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Notice]'))
ALTER TABLE [dbo].[tbl_Notice]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Notice_tbl_Properties] FOREIGN KEY([PID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Notice_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Notice]'))
ALTER TABLE [dbo].[tbl_Notice] CHECK CONSTRAINT [FK_tbl_Notice_tbl_Properties]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Notice_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Notice]'))
ALTER TABLE [dbo].[tbl_Notice]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Notice_tbl_PropertyUnits] FOREIGN KEY([UID])
REFERENCES [dbo].[tbl_PropertyUnits] ([UID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Notice_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Notice]'))
ALTER TABLE [dbo].[tbl_Notice] CHECK CONSTRAINT [FK_tbl_Notice_tbl_PropertyUnits]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Notice_tbl_Tenant]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Notice]'))
ALTER TABLE [dbo].[tbl_Notice]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Notice_tbl_Tenant] FOREIGN KEY([TID])
REFERENCES [dbo].[tbl_Tenant] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Notice_tbl_Tenant]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Notice]'))
ALTER TABLE [dbo].[tbl_Notice] CHECK CONSTRAINT [FK_tbl_Notice_tbl_Tenant]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Parking_tbl_Parking]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Parking]'))
ALTER TABLE [dbo].[tbl_Parking]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Parking_tbl_Parking] FOREIGN KEY([PropertyID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Parking_tbl_Parking]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Parking]'))
ALTER TABLE [dbo].[tbl_Parking] CHECK CONSTRAINT [FK_tbl_Parking_tbl_Parking]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_PetPlace_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_PetPlace]'))
ALTER TABLE [dbo].[tbl_PetPlace]  WITH CHECK ADD  CONSTRAINT [FK_tbl_PetPlace_tbl_Properties] FOREIGN KEY([PropertyID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_PetPlace_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_PetPlace]'))
ALTER TABLE [dbo].[tbl_PetPlace] CHECK CONSTRAINT [FK_tbl_PetPlace_tbl_Properties]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Promotion_tbl_Promotion]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Promotion]'))
ALTER TABLE [dbo].[tbl_Promotion]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Promotion_tbl_Promotion] FOREIGN KEY([PropertyID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Promotion_tbl_Promotion]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Promotion]'))
ALTER TABLE [dbo].[tbl_Promotion] CHECK CONSTRAINT [FK_tbl_Promotion_tbl_Promotion]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Properties_tbl_City]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Properties]'))
ALTER TABLE [dbo].[tbl_Properties]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Properties_tbl_City] FOREIGN KEY([City])
REFERENCES [dbo].[tbl_City] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Properties_tbl_City]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Properties]'))
ALTER TABLE [dbo].[tbl_Properties] CHECK CONSTRAINT [FK_tbl_Properties_tbl_City]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Properties_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Properties]'))
ALTER TABLE [dbo].[tbl_Properties]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Properties_tbl_Login] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[tbl_Login] ([UserID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Properties_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Properties]'))
ALTER TABLE [dbo].[tbl_Properties] CHECK CONSTRAINT [FK_tbl_Properties_tbl_Login]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Properties_tbl_Login1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Properties]'))
ALTER TABLE [dbo].[tbl_Properties]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Properties_tbl_Login1] FOREIGN KEY([LastModifiedBy])
REFERENCES [dbo].[tbl_Login] ([UserID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Properties_tbl_Login1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Properties]'))
ALTER TABLE [dbo].[tbl_Properties] CHECK CONSTRAINT [FK_tbl_Properties_tbl_Login1]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Properties_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Properties]'))
ALTER TABLE [dbo].[tbl_Properties]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Properties_tbl_Properties] FOREIGN KEY([PID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Properties_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Properties]'))
ALTER TABLE [dbo].[tbl_Properties] CHECK CONSTRAINT [FK_tbl_Properties_tbl_Properties]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Properties_tbl_Properties1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Properties]'))
ALTER TABLE [dbo].[tbl_Properties]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Properties_tbl_Properties1] FOREIGN KEY([PID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Properties_tbl_Properties1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Properties]'))
ALTER TABLE [dbo].[tbl_Properties] CHECK CONSTRAINT [FK_tbl_Properties_tbl_Properties1]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Properties_tbl_State]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Properties]'))
ALTER TABLE [dbo].[tbl_Properties]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Properties_tbl_State] FOREIGN KEY([State])
REFERENCES [dbo].[tbl_State] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Properties_tbl_State]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Properties]'))
ALTER TABLE [dbo].[tbl_Properties] CHECK CONSTRAINT [FK_tbl_Properties_tbl_State]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_PropertyFloor_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_PropertyFloor]'))
ALTER TABLE [dbo].[tbl_PropertyFloor]  WITH CHECK ADD  CONSTRAINT [FK_tbl_PropertyFloor_tbl_Properties] FOREIGN KEY([PID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_PropertyFloor_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_PropertyFloor]'))
ALTER TABLE [dbo].[tbl_PropertyFloor] CHECK CONSTRAINT [FK_tbl_PropertyFloor_tbl_Properties]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_PropertyUnits_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_PropertyUnits]'))
ALTER TABLE [dbo].[tbl_PropertyUnits]  WITH CHECK ADD  CONSTRAINT [FK_tbl_PropertyUnits_tbl_Properties] FOREIGN KEY([PID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_PropertyUnits_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_PropertyUnits]'))
ALTER TABLE [dbo].[tbl_PropertyUnits] CHECK CONSTRAINT [FK_tbl_PropertyUnits_tbl_Properties]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Prospect_tbl_City]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Prospect]'))
ALTER TABLE [dbo].[tbl_Prospect]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Prospect_tbl_City] FOREIGN KEY([City])
REFERENCES [dbo].[tbl_City] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Prospect_tbl_City]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Prospect]'))
ALTER TABLE [dbo].[tbl_Prospect] CHECK CONSTRAINT [FK_tbl_Prospect_tbl_City]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Prospect_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Prospect]'))
ALTER TABLE [dbo].[tbl_Prospect]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Prospect_tbl_Login] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[tbl_Login] ([UserID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Prospect_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Prospect]'))
ALTER TABLE [dbo].[tbl_Prospect] CHECK CONSTRAINT [FK_tbl_Prospect_tbl_Login]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Prospect_tbl_Login1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Prospect]'))
ALTER TABLE [dbo].[tbl_Prospect]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Prospect_tbl_Login1] FOREIGN KEY([LastModifiedBy])
REFERENCES [dbo].[tbl_Login] ([UserID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Prospect_tbl_Login1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Prospect]'))
ALTER TABLE [dbo].[tbl_Prospect] CHECK CONSTRAINT [FK_tbl_Prospect_tbl_Login1]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Prospect_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Prospect]'))
ALTER TABLE [dbo].[tbl_Prospect]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Prospect_tbl_Properties] FOREIGN KEY([PropertyID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Prospect_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Prospect]'))
ALTER TABLE [dbo].[tbl_Prospect] CHECK CONSTRAINT [FK_tbl_Prospect_tbl_Properties]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Prospect_tbl_State]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Prospect]'))
ALTER TABLE [dbo].[tbl_Prospect]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Prospect_tbl_State] FOREIGN KEY([State])
REFERENCES [dbo].[tbl_State] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Prospect_tbl_State]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Prospect]'))
ALTER TABLE [dbo].[tbl_Prospect] CHECK CONSTRAINT [FK_tbl_Prospect_tbl_State]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_PurchaseOrder_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_PurchaseOrder]'))
ALTER TABLE [dbo].[tbl_PurchaseOrder]  WITH CHECK ADD  CONSTRAINT [FK_tbl_PurchaseOrder_tbl_Login] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[tbl_Login] ([UserID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_PurchaseOrder_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_PurchaseOrder]'))
ALTER TABLE [dbo].[tbl_PurchaseOrder] CHECK CONSTRAINT [FK_tbl_PurchaseOrder_tbl_Login]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_PurchaseOrder_tbl_Login1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_PurchaseOrder]'))
ALTER TABLE [dbo].[tbl_PurchaseOrder]  WITH CHECK ADD  CONSTRAINT [FK_tbl_PurchaseOrder_tbl_Login1] FOREIGN KEY([CanceledBy])
REFERENCES [dbo].[tbl_Login] ([UserID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_PurchaseOrder_tbl_Login1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_PurchaseOrder]'))
ALTER TABLE [dbo].[tbl_PurchaseOrder] CHECK CONSTRAINT [FK_tbl_PurchaseOrder_tbl_Login1]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_PurchaseOrder_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_PurchaseOrder]'))
ALTER TABLE [dbo].[tbl_PurchaseOrder]  WITH CHECK ADD  CONSTRAINT [FK_tbl_PurchaseOrder_tbl_Properties] FOREIGN KEY([PropertyID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_PurchaseOrder_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_PurchaseOrder]'))
ALTER TABLE [dbo].[tbl_PurchaseOrder] CHECK CONSTRAINT [FK_tbl_PurchaseOrder_tbl_Properties]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_SalesAgent_tbl_City]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_SalesAgent]'))
ALTER TABLE [dbo].[tbl_SalesAgent]  WITH CHECK ADD  CONSTRAINT [FK_tbl_SalesAgent_tbl_City] FOREIGN KEY([City])
REFERENCES [dbo].[tbl_City] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_SalesAgent_tbl_City]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_SalesAgent]'))
ALTER TABLE [dbo].[tbl_SalesAgent] CHECK CONSTRAINT [FK_tbl_SalesAgent_tbl_City]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_SalesAgent_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_SalesAgent]'))
ALTER TABLE [dbo].[tbl_SalesAgent]  WITH CHECK ADD  CONSTRAINT [FK_tbl_SalesAgent_tbl_Properties] FOREIGN KEY([PID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_SalesAgent_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_SalesAgent]'))
ALTER TABLE [dbo].[tbl_SalesAgent] CHECK CONSTRAINT [FK_tbl_SalesAgent_tbl_Properties]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_SalesAgent_tbl_State]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_SalesAgent]'))
ALTER TABLE [dbo].[tbl_SalesAgent]  WITH CHECK ADD  CONSTRAINT [FK_tbl_SalesAgent_tbl_State] FOREIGN KEY([State])
REFERENCES [dbo].[tbl_State] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_SalesAgent_tbl_State]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_SalesAgent]'))
ALTER TABLE [dbo].[tbl_SalesAgent] CHECK CONSTRAINT [FK_tbl_SalesAgent_tbl_State]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Storage_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Storage]'))
ALTER TABLE [dbo].[tbl_Storage]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Storage_tbl_Properties] FOREIGN KEY([PropertyID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Storage_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Storage]'))
ALTER TABLE [dbo].[tbl_Storage] CHECK CONSTRAINT [FK_tbl_Storage_tbl_Properties]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Tenant_tbl_Login] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[tbl_Login] ([UserID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant] CHECK CONSTRAINT [FK_tbl_Tenant_tbl_Login]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_Login1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Tenant_tbl_Login1] FOREIGN KEY([LastModifiedBy])
REFERENCES [dbo].[tbl_Login] ([UserID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_Login1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant] CHECK CONSTRAINT [FK_tbl_Tenant_tbl_Login1]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_Login2]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Tenant_tbl_Login2] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[tbl_Login] ([UserID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_Login2]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant] CHECK CONSTRAINT [FK_tbl_Tenant_tbl_Login2]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_Login3]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Tenant_tbl_Login3] FOREIGN KEY([LastModifiedBy])
REFERENCES [dbo].[tbl_Login] ([UserID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_Login3]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant] CHECK CONSTRAINT [FK_tbl_Tenant_tbl_Login3]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Tenant_tbl_Properties] FOREIGN KEY([PropertyID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant] CHECK CONSTRAINT [FK_tbl_Tenant_tbl_Properties]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_Properties1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Tenant_tbl_Properties1] FOREIGN KEY([PropertyID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_Properties1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant] CHECK CONSTRAINT [FK_tbl_Tenant_tbl_Properties1]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Tenant_tbl_PropertyUnits] FOREIGN KEY([UnitID])
REFERENCES [dbo].[tbl_PropertyUnits] ([UID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant] CHECK CONSTRAINT [FK_tbl_Tenant_tbl_PropertyUnits]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_PropertyUnits1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Tenant_tbl_PropertyUnits1] FOREIGN KEY([UnitID])
REFERENCES [dbo].[tbl_PropertyUnits] ([UID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Tenant_tbl_PropertyUnits1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Tenant]'))
ALTER TABLE [dbo].[tbl_Tenant] CHECK CONSTRAINT [FK_tbl_Tenant_tbl_PropertyUnits1]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantInfo_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantInfo]'))
ALTER TABLE [dbo].[tbl_TenantInfo]  WITH CHECK ADD  CONSTRAINT [FK_tbl_TenantInfo_tbl_ApplyNow] FOREIGN KEY([ProspectID])
REFERENCES [dbo].[tbl_ApplyNow] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantInfo_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantInfo]'))
ALTER TABLE [dbo].[tbl_TenantInfo] CHECK CONSTRAINT [FK_tbl_TenantInfo_tbl_ApplyNow]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantInfo_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantInfo]'))
ALTER TABLE [dbo].[tbl_TenantInfo]  WITH CHECK ADD  CONSTRAINT [FK_tbl_TenantInfo_tbl_Properties] FOREIGN KEY([PropertyID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantInfo_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantInfo]'))
ALTER TABLE [dbo].[tbl_TenantInfo] CHECK CONSTRAINT [FK_tbl_TenantInfo_tbl_Properties]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantInfo_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantInfo]'))
ALTER TABLE [dbo].[tbl_TenantInfo]  WITH CHECK ADD  CONSTRAINT [FK_tbl_TenantInfo_tbl_PropertyUnits] FOREIGN KEY([UnitID])
REFERENCES [dbo].[tbl_PropertyUnits] ([UID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantInfo_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantInfo]'))
ALTER TABLE [dbo].[tbl_TenantInfo] CHECK CONSTRAINT [FK_tbl_TenantInfo_tbl_PropertyUnits]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantOnline_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantOnline]'))
ALTER TABLE [dbo].[tbl_TenantOnline]  WITH CHECK ADD  CONSTRAINT [FK_tbl_TenantOnline_tbl_ApplyNow] FOREIGN KEY([ProspectID])
REFERENCES [dbo].[tbl_ApplyNow] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantOnline_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantOnline]'))
ALTER TABLE [dbo].[tbl_TenantOnline] CHECK CONSTRAINT [FK_tbl_TenantOnline_tbl_ApplyNow]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantParking_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantParking]'))
ALTER TABLE [dbo].[tbl_TenantParking]  WITH CHECK ADD  CONSTRAINT [FK_tbl_TenantParking_tbl_ApplyNow] FOREIGN KEY([TenantID])
REFERENCES [dbo].[tbl_ApplyNow] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantParking_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantParking]'))
ALTER TABLE [dbo].[tbl_TenantParking] CHECK CONSTRAINT [FK_tbl_TenantParking_tbl_ApplyNow]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantPet_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantPet]'))
ALTER TABLE [dbo].[tbl_TenantPet]  WITH CHECK ADD  CONSTRAINT [FK_tbl_TenantPet_tbl_ApplyNow] FOREIGN KEY([TenantID])
REFERENCES [dbo].[tbl_ApplyNow] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantPet_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantPet]'))
ALTER TABLE [dbo].[tbl_TenantPet] CHECK CONSTRAINT [FK_tbl_TenantPet_tbl_ApplyNow]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantPetPlace_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantPetPlace]'))
ALTER TABLE [dbo].[tbl_TenantPetPlace]  WITH CHECK ADD  CONSTRAINT [FK_tbl_TenantPetPlace_tbl_ApplyNow] FOREIGN KEY([TenantID])
REFERENCES [dbo].[tbl_ApplyNow] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantPetPlace_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantPetPlace]'))
ALTER TABLE [dbo].[tbl_TenantPetPlace] CHECK CONSTRAINT [FK_tbl_TenantPetPlace_tbl_ApplyNow]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantStorage_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantStorage]'))
ALTER TABLE [dbo].[tbl_TenantStorage]  WITH CHECK ADD  CONSTRAINT [FK_tbl_TenantStorage_tbl_ApplyNow] FOREIGN KEY([TenantID])
REFERENCES [dbo].[tbl_ApplyNow] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_TenantStorage_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_TenantStorage]'))
ALTER TABLE [dbo].[tbl_TenantStorage] CHECK CONSTRAINT [FK_tbl_TenantStorage_tbl_ApplyNow]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Transaction_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Transaction]'))
ALTER TABLE [dbo].[tbl_Transaction]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Transaction_tbl_PropertyUnits] FOREIGN KEY([UnitID])
REFERENCES [dbo].[tbl_PropertyUnits] ([UID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Transaction_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Transaction]'))
ALTER TABLE [dbo].[tbl_Transaction] CHECK CONSTRAINT [FK_tbl_Transaction_tbl_PropertyUnits]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Transaction_tbl_PropertyUnits1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Transaction]'))
ALTER TABLE [dbo].[tbl_Transaction]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Transaction_tbl_PropertyUnits1] FOREIGN KEY([UnitID])
REFERENCES [dbo].[tbl_PropertyUnits] ([UID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Transaction_tbl_PropertyUnits1]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Transaction]'))
ALTER TABLE [dbo].[tbl_Transaction] CHECK CONSTRAINT [FK_tbl_Transaction_tbl_PropertyUnits1]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_UtilityBilling_tbl_Lease]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_UtilityBilling]'))
ALTER TABLE [dbo].[tbl_UtilityBilling]  WITH CHECK ADD  CONSTRAINT [FK_tbl_UtilityBilling_tbl_Lease] FOREIGN KEY([LeaseID])
REFERENCES [dbo].[tbl_Lease] ([LID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_UtilityBilling_tbl_Lease]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_UtilityBilling]'))
ALTER TABLE [dbo].[tbl_UtilityBilling] CHECK CONSTRAINT [FK_tbl_UtilityBilling_tbl_Lease]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_UtilityBilling_tbl_Tenant]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_UtilityBilling]'))
ALTER TABLE [dbo].[tbl_UtilityBilling]  WITH CHECK ADD  CONSTRAINT [FK_tbl_UtilityBilling_tbl_Tenant] FOREIGN KEY([TenantID])
REFERENCES [dbo].[tbl_Tenant] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_UtilityBilling_tbl_Tenant]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_UtilityBilling]'))
ALTER TABLE [dbo].[tbl_UtilityBilling] CHECK CONSTRAINT [FK_tbl_UtilityBilling_tbl_Tenant]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_UtilityBilling_tbl_Utility]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_UtilityBilling]'))
ALTER TABLE [dbo].[tbl_UtilityBilling]  WITH CHECK ADD  CONSTRAINT [FK_tbl_UtilityBilling_tbl_Utility] FOREIGN KEY([UtilityID])
REFERENCES [dbo].[tbl_Utility] ([UtilityID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_UtilityBilling_tbl_Utility]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_UtilityBilling]'))
ALTER TABLE [dbo].[tbl_UtilityBilling] CHECK CONSTRAINT [FK_tbl_UtilityBilling_tbl_Utility]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Vehicle_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Vehicle]'))
ALTER TABLE [dbo].[tbl_Vehicle]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Vehicle_tbl_ApplyNow] FOREIGN KEY([ProspectID])
REFERENCES [dbo].[tbl_ApplyNow] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Vehicle_tbl_ApplyNow]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Vehicle]'))
ALTER TABLE [dbo].[tbl_Vehicle] CHECK CONSTRAINT [FK_tbl_Vehicle_tbl_ApplyNow]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Vendor_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Vendor]'))
ALTER TABLE [dbo].[tbl_Vendor]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Vendor_tbl_Login] FOREIGN KEY([Created_By])
REFERENCES [dbo].[tbl_Login] ([UserID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Vendor_tbl_Login]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Vendor]'))
ALTER TABLE [dbo].[tbl_Vendor] CHECK CONSTRAINT [FK_tbl_Vendor_tbl_Login]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Visit_tbl_Prospect]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Visit]'))
ALTER TABLE [dbo].[tbl_Visit]  WITH CHECK ADD  CONSTRAINT [FK_tbl_Visit_tbl_Prospect] FOREIGN KEY([ProspectID])
REFERENCES [dbo].[tbl_Prospect] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_Visit_tbl_Prospect]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_Visit]'))
ALTER TABLE [dbo].[tbl_Visit] CHECK CONSTRAINT [FK_tbl_Visit_tbl_Prospect]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_WorkOrder_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_WorkOrder]'))
ALTER TABLE [dbo].[tbl_WorkOrder]  WITH CHECK ADD  CONSTRAINT [FK_tbl_WorkOrder_tbl_Properties] FOREIGN KEY([PropertyID])
REFERENCES [dbo].[tbl_Properties] ([PID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_WorkOrder_tbl_Properties]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_WorkOrder]'))
ALTER TABLE [dbo].[tbl_WorkOrder] CHECK CONSTRAINT [FK_tbl_WorkOrder_tbl_Properties]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_WorkOrder_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_WorkOrder]'))
ALTER TABLE [dbo].[tbl_WorkOrder]  WITH CHECK ADD  CONSTRAINT [FK_tbl_WorkOrder_tbl_PropertyUnits] FOREIGN KEY([UnitID])
REFERENCES [dbo].[tbl_PropertyUnits] ([UID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_WorkOrder_tbl_PropertyUnits]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_WorkOrder]'))
ALTER TABLE [dbo].[tbl_WorkOrder] CHECK CONSTRAINT [FK_tbl_WorkOrder_tbl_PropertyUnits]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_WorkOrder_tbl_Tenant]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_WorkOrder]'))
ALTER TABLE [dbo].[tbl_WorkOrder]  WITH CHECK ADD  CONSTRAINT [FK_tbl_WorkOrder_tbl_Tenant] FOREIGN KEY([TenantID])
REFERENCES [dbo].[tbl_Tenant] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_WorkOrder_tbl_Tenant]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_WorkOrder]'))
ALTER TABLE [dbo].[tbl_WorkOrder] CHECK CONSTRAINT [FK_tbl_WorkOrder_tbl_Tenant]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_WorkOrder_tbl_Vendor]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_WorkOrder]'))
ALTER TABLE [dbo].[tbl_WorkOrder]  WITH CHECK ADD  CONSTRAINT [FK_tbl_WorkOrder_tbl_Vendor] FOREIGN KEY([VendorID])
REFERENCES [dbo].[tbl_Vendor] ([Vendor_ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_WorkOrder_tbl_Vendor]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_WorkOrder]'))
ALTER TABLE [dbo].[tbl_WorkOrder] CHECK CONSTRAINT [FK_tbl_WorkOrder_tbl_Vendor]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_ZipCodes_tbl_City]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_ZipCodes]'))
ALTER TABLE [dbo].[tbl_ZipCodes]  WITH CHECK ADD  CONSTRAINT [FK_tbl_ZipCodes_tbl_City] FOREIGN KEY([City])
REFERENCES [dbo].[tbl_City] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_ZipCodes_tbl_City]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_ZipCodes]'))
ALTER TABLE [dbo].[tbl_ZipCodes] CHECK CONSTRAINT [FK_tbl_ZipCodes_tbl_City]
GO
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_ZipCodes_tbl_State]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_ZipCodes]'))
ALTER TABLE [dbo].[tbl_ZipCodes]  WITH CHECK ADD  CONSTRAINT [FK_tbl_ZipCodes_tbl_State] FOREIGN KEY([State])
REFERENCES [dbo].[tbl_State] ([ID])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_tbl_ZipCodes_tbl_State]') AND parent_object_id = OBJECT_ID(N'[dbo].[tbl_ZipCodes]'))
ALTER TABLE [dbo].[tbl_ZipCodes] CHECK CONSTRAINT [FK_tbl_ZipCodes_tbl_State]
GO
/****** Object:  StoredProcedure [dbo].[sp_Test]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[sp_Test]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[sp_Test] AS' 
END
GO
ALTER PROCEDURE [dbo].[sp_Test]
	@ID	INT,
	@FKIDs	VARCHAR(100)
AS
BEGIN
	EXEC sp_TestDelete @ID, '1,1'
	SELECT * FrOM tbl_TestData
END





GO
/****** Object:  StoredProcedure [dbo].[sp_TestDelete]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[sp_TestDelete]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[sp_TestDelete] AS' 
END
GO

ALTER PROCEDURE [dbo].[sp_TestDelete]
@ID	INT,
@FKIDs	VARCHAR(100)
	
AS
BEGIN
	DELETE FrOM tbl_TestData WHERE ID=@ID AND @FKIDs IN (@FKIDs)
END





GO
/****** Object:  StoredProcedure [dbo].[usp_ApplyNowList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_ApplyNowList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_ApplyNowList] AS' 
END
GO







ALTER PROCEDURE [dbo].[usp_ApplyNowList]
	@Id int
AS

BEGIN

	select FirstName , LastName , Email , Phone , Address
from [dbo].[tbl_ApplyNow]
where id = @Id
END







GO
/****** Object:  StoredProcedure [dbo].[usp_BuildPagination_TenantList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_BuildPagination_TenantList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_BuildPagination_TenantList] AS' 
END
GO

--EXEC usp_BuildPagination_TenantList '05/31/2019','07/01/2019 23:59:59',50
--SELECT * FROM tbl_Tenant
ALTER PROCEDURE [dbo].[usp_BuildPagination_TenantList]
	@FromDate			VARCHAR(20)=NULL,
	@ToDate				VARCHAR(20)=NULL,
	@NumberOfRows		INT=NULL
AS
BEGIN
	DECLARE @TenantData TABLE (TenantID BIGINT)

	DECLARE	@TotalRows	BIGINT
	DECLARE @LowerLimit	BIGINT
	DECLARE	@UpperLimit	BIGINT
	DECLARE @PageNumber	BIGINT
	DECLARE @ModValue	BIGINT
	
	INSERT INTO @TenantData (TenantID) 
	SELECT ID FROM tbl_Tenant WHERE CreatedDate BETWEEN @FromDate AND @ToDate;
	
	WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.TenantID DESC)) AS RowNum
	FROM @TenantData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @PageNumber=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @PageNumber=@PageNumber+1;
	END

	SELECT @PageNumber AS PageNumber
END


GO
/****** Object:  StoredProcedure [dbo].[usp_FillStateDropDownListByCountryID]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_FillStateDropDownListByCountryID]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_FillStateDropDownListByCountryID] AS' 
END
GO
--EXEC [usp_FillStateDropDownListByCountryID] 1
ALTER PROCEDURE [dbo].[usp_FillStateDropDownListByCountryID]
	@CID	INT
AS
BEGIN
	SELECT ID, StateName, Abbreviation FROM tbl_State WHERE CountryID=@CID ORDER BY StateName
END

GO
/****** Object:  StoredProcedure [dbo].[usp_Get_Advertiser]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_Advertiser]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_Get_Advertiser] AS' 
END
GO
ALTER procedure [dbo].[usp_Get_Advertiser]
as
begin
select AdID, Advertiser from [tbl_Advertiser];
end;
GO
/****** Object:  StoredProcedure [dbo].[usp_Get_Advertiser_SearchList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_Advertiser_SearchList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_Get_Advertiser_SearchList] AS' 
END
GO


ALTER procedure [dbo].[usp_Get_Advertiser_SearchList]
@SearchText varchar (50)
as
begin
select AdID, Advertiser from [tbl_Advertiser]
where Advertiser LIKE '%'+@SearchText+'%';
end;


GO
/****** Object:  StoredProcedure [dbo].[usp_Get_Parking]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_Parking]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_Get_Parking] AS' 
END
GO

ALTER procedure [dbo].[usp_Get_Parking]
as
begin
select [ParkingID], [PropertyID],[ParkingName],[Charges],[Description],[Type],[Status] from [tbl_Parking];
end;

GO
/****** Object:  StoredProcedure [dbo].[usp_Get_Parking_SearchList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_Parking_SearchList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_Get_Parking_SearchList] AS' 
END
GO



ALTER procedure [dbo].[usp_Get_Parking_SearchList]
@SearchText nvarchar(50)
as
begin
select [ParkingID], [PropertyID],[ParkingName],[Charges],[Description],[Type],[Status] from [tbl_Parking]
where [ParkingName] LIKE '%' + @SearchText + '%';
end;



GO
/****** Object:  StoredProcedure [dbo].[usp_Get_PetPlace]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_PetPlace]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_Get_PetPlace] AS' 
END
GO

ALTER procedure [dbo].[usp_Get_PetPlace]
as
begin
select [PetPlaceID],[PropertyID],[PetPlace],[Charges],[Description],[Type],[Status] from [tbl_PetPlace];
end;

GO
/****** Object:  StoredProcedure [dbo].[usp_Get_PetPlace_SearchList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_PetPlace_SearchList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_Get_PetPlace_SearchList] AS' 
END
GO



ALTER procedure [dbo].[usp_Get_PetPlace_SearchList]
@SearchText nvarchar(50)
as
begin
select [PetPlaceID],[PropertyID],[PetPlace],[Charges],[Description],[Type],[Status] from [tbl_PetPlace]
where [PetPlace] LIKE '%'+@SearchText+'%';
end;



GO
/****** Object:  StoredProcedure [dbo].[usp_Get_Storage]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_Storage]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_Get_Storage] AS' 
END
GO

ALTER procedure [dbo].[usp_Get_Storage]
as
begin
select [StorageID],[PropertyID],[StorageName],[Charges],[Description],[Type],[Status] from [tbl_Storage];
end;

GO
/****** Object:  StoredProcedure [dbo].[usp_Get_Storage_SearchList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_Storage_SearchList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_Get_Storage_SearchList] AS' 
END
GO



ALTER procedure [dbo].[usp_Get_Storage_SearchList]
@SearchText nvarchar(50)
as
begin
select [StorageID],[PropertyID],[StorageName],[Charges],[Description],[Type],[Status] from [tbl_Storage]
where [StorageName] LIKE '%'+@SearchText+'%';
end;



GO
/****** Object:  StoredProcedure [dbo].[usp_Get_TenantList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_TenantList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_Get_TenantList] AS' 
END
GO

ALTER PROCEDURE [dbo].[usp_Get_TenantList]
	@PageNumber			INT,
	@NumberOfRows		INT,
	@FromDate			DATETIME,
	@ToDate				DATETIME,
	@FirstName			VARCHAR(100),
    @LastName			VARCHAR(100),
    @Gender				INT,
    @MaritalStatus		INT,
    @State				INT,
    @City				INT,
    @PropertyID			INT,
    @UnitID				INT,
    @SocialSecurityNum	VARCHAR(100),
    @Occupation			VARCHAR(100),
    @OfficeState		INT,
    @OfficeCity			INT
AS
BEGIN
	IF @Gender=0
	BEGIN
		SET @Gender=NULL
	END
	IF @MaritalStatus=0
	BEGIN
		SET @MaritalStatus=NULL
	END
	IF @State=0
	BEGIN
		SET @State=NULL
	END
	IF @City=0
	BEGIN
		SET @City=NULL
	END
	IF @PropertyID=0
	BEGIN
		SET @PropertyID=NULL
	END
	IF @UnitID=0
	BEGIN
		SET @UnitID=NULL
	END
	IF @OfficeState=0
	BEGIN
		SET @OfficeState=NULL
	END
	IF @OfficeCity=0
	BEGIN
		SET @OfficeCity=NULL
	END

	DECLARE	@TotalRows	BIGINT
	DECLARE @LowerLimit	BIGINT
	DECLARE	@UpperLimit	BIGINT
	DECLARE @PageIndex	BIGINT
	DECLARE @ModValue	BIGINT

	DECLARE @TenantData TABLE (TenantID BIGINT, FirstName VARCHAR(500), LastName VARCHAR(500), Property VARCHAR(500), UnitNo VARCHAR(500), NOP INT )
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 
	INSERT INTO @TenantData (TenantID, FirstName, LastName, Property, UnitNo) 
	SELECT T.TenantID, T.FirstName, T.LastName, P.Title AS Property, U.UnitNo
	FROM tbl_TenantInfo T 
	LEFT OUTER JOIN tbl_Properties P ON T.PropertyID=P.PID
	LEFT OUTER JOIN tbl_PropertyUnits U ON T.UnitID=U.[UID]
	WHERE T.CreatedDate >=@FromDate AND T.CreatedDate<=@ToDate+' 23:59:59'
	AND ISNULL(T.FirstName,'') LIKE CASE WHEN LEN(@FirstName) > 0 THEN '%'+CONVERT(VARCHAR(100),@FirstName)+'%' ELSE '%%' END
	AND ISNULL(T.LastName,'') LIKE CASE WHEN LEN(@LastName) > 0 THEN '%'+CONVERT(VARCHAR(100),@LastName)+'%' ELSE '%%' END
	AND (T.Gender=ISNULL(@Gender,0) OR @Gender IS NULL)
	AND (T.[State]=ISNULL(@State,0) OR @State IS NULL)
	AND (T.CityHome=ISNULL(@City,0) OR @City IS NULL)
	AND (T.[OfficeState]=ISNULL(@OfficeState,0) OR @OfficeState IS NULL)
	AND (T.OfficeCity=ISNULL(@OfficeCity,0) OR @OfficeCity IS NULL)
	AND (T.PropertyID=ISNULL(@PropertyID,0) OR @PropertyID IS NULL)
	AND (T.UnitID=ISNULL(@UnitID,0) OR @UnitID IS NULL)
	AND ISNULL(T.JobTitle,'') LIKE CASE WHEN LEN(@Occupation) > 0 THEN '%'+CONVERT(VARCHAR(100),@Occupation)+'%' ELSE '%%' END

	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.TenantID DESC)) AS RowNum
	FROM @TenantData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @PageIndex=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @PageIndex=@PageIndex+1;
	END

	UPDATE @TenantData SET NOP=@PageIndex
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.FirstName+' '+TD.LastName ASC)) AS RowNum, TenantID
	FROM @TenantData TD)
	SELECT
		FR.TenantID, T.FirstName, T.LastName, T.Property, T.UnitNo, NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @TenantData T ON FR.TenantID=T.TenantID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END





GO
/****** Object:  StoredProcedure [dbo].[usp_Get_TenantList_bak]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_TenantList_bak]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_Get_TenantList_bak] AS' 
END
GO

--EXEC usp_Get_TenantList '04/30/2019','07/31/3019',3,25
ALTER PROCEDURE [dbo].[usp_Get_TenantList_bak]
	@FromDate			DATETIME,
	@ToDate				DATETIME,
	@PageNumber			INT,
	@NumberOfRows		INT
AS
BEGIN
	DECLARE @TenantData TABLE (TenantID BIGINT, FirstName VARCHAR(500), LastName VARCHAR(500), Property VARCHAR(500), UnitNo VARCHAR(500) )
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT
	
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows


	INSERT INTO @TenantData (TenantID, FirstName, LastName, Property, UnitNo) 
	SELECT T.ID AS TenantID, FirstName, LastName, P.Title AS Property, U.UnitNo
	FROM tbl_Tenant T 
	LEFT OUTER JOIN tbl_Properties P ON T.PropertyID=P.PID
	LEFT OUTER JOIN tbl_PropertyUnits U ON T.UnitID=U.[UID]
	WHERE  T.CreatedDate >=@FromDate AND T.CreatedDate<=@ToDate+' 23:59:59'

	;
	WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.FirstName+' '+TD.LastName ASC)) AS RowNum, TenantID
	FROM @TenantData TD)
	SELECT
		FR.TenantID, T.FirstName, T.LastName, T.Property, T.UnitNo
	FROM 
		FilterRows FR INNER JOIN @TenantData T ON FR.TenantID=T.TenantID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;

	
END



GO
/****** Object:  StoredProcedure [dbo].[usp_Get_TenantList_XML]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_Get_TenantList_XML]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_Get_TenantList_XML] AS' 
END
GO

--EXEC usp_Get_TenantList '<nodeP><nodeC><FN>name</FN><LN></LN><GEN>0</GEN><MS>0</MS><ST>0</ST><CT>0</CT><PID>0</PID><UID>0</UID><SSN></SSN><OCC></OCC><OST>0</OST><OCT>0</OCT><FD>06/02/2019</FD><TD>07/02/2019</TD><PN>2</PN><NOR>20</NOR></nodeC></nodeP>'
ALTER PROCEDURE [dbo].[usp_Get_TenantList_XML]
	@ParamXML	XML
AS
BEGIN
	SET ANSI_NULLS ON
	SET ANSI_PADDING ON
	SET ANSI_WARNINGS ON
	SET ARITHABORT ON
	SET CONCAT_NULL_YIELDS_NULL ON
	SET QUOTED_IDENTIFIER ON

	DECLARE @PageNumber			INT
	DECLARE @NumberOfRows		INT
	DECLARE @FromDate			DATETIME
	DECLARE @ToDate				DATETIME
	DECLARE @FirstName			VARCHAR(100)
    DECLARE @LastName			VARCHAR(100)
    DECLARE @Gender				INT
    DECLARE @MaritalStatus		INT
    DECLARE @State				INT
    DECLARE @City				INT
    DECLARE @PropertyID			INT
    DECLARE @UnitID				INT
    DECLARE @SocialSecurityNum	VARCHAR(100)
    DECLARE @Occupation			VARCHAR(100)
    DECLARE @OfficeState		INT
    DECLARE @OfficeCity			INT

	SET @PageNumber=(SELECT crXML.ci.value('PN[1]','VARCHAR(100)') FROM @ParamXML.nodes('/nodeP/nodeC') crXML(ci) )
	SET @NumberOfRows=(SELECT crXML.ci.value('NOR[1]','VARCHAR(100)') FROM @ParamXML.nodes('/nodeP/nodeC') crXML(ci) )
	SET @FromDate=(SELECT crXML.ci.value('FD[1]','VARCHAR(100)') FROM @ParamXML.nodes('/nodeP/nodeC') crXML(ci) )
	SET @ToDate=(SELECT crXML.ci.value('TD[1]','VARCHAR(100)') FROM @ParamXML.nodes('/nodeP/nodeC') crXML(ci) )
	SET @FirstName=(SELECT crXML.ci.value('FN[1]','VARCHAR(100)') FROM @ParamXML.nodes('/nodeP/nodeC') crXML(ci) )
	SET @LastName=(SELECT crXML.ci.value('LN[1]','VARCHAR(100)') FROM @ParamXML.nodes('/nodeP/nodeC') crXML(ci) )
	SET @Gender=(SELECT CASE crXML.ci.value('GEN[1]','VARCHAR(100)') WHEN 0 THEN NULL ELSE crXML.ci.value('GEN[1]','VARCHAR(100)') END FROM @ParamXML.nodes('/nodeP/nodeC') crXML(ci) )
	SET @MaritalStatus=(SELECT CASE crXML.ci.value('MS[1]','VARCHAR(100)') WHEN 0 THEN NULL ELSE crXML.ci.value('MS[1]','VARCHAR(100)') END FROM @ParamXML.nodes('/nodeP/nodeC') crXML(ci) )
	SET @State=(SELECT CASE crXML.ci.value('ST[1]','VARCHAR(100)') WHEN 0 THEN NULL ELSE crXML.ci.value('ST[1]','VARCHAR(100)') END FROM @ParamXML.nodes('/nodeP/nodeC') crXML(ci) )
	SET @City=(SELECT CASE crXML.ci.value('CT[1]','VARCHAR(100)') WHEN 0 THEN NULL ELSE crXML.ci.value('CT[1]','VARCHAR(100)') END FROM @ParamXML.nodes('/nodeP/nodeC') crXML(ci) )
	SET @PropertyID=(SELECT CASE crXML.ci.value('PID[1]','VARCHAR(100)') WHEN 0 THEN NULL ELSE crXML.ci.value('PID[1]','VARCHAR(100)') END FROM @ParamXML.nodes('/nodeP/nodeC') crXML(ci) )
	SET @UnitID=(SELECT CASE crXML.ci.value('UID[1]','VARCHAR(100)') WHEN 0 THEN NULL ELSE crXML.ci.value('UID[1]','VARCHAR(100)') END FROM @ParamXML.nodes('/nodeP/nodeC') crXML(ci) )
	SET @SocialSecurityNum=(SELECT crXML.ci.value('SSN[1]','VARCHAR(100)') FROM @ParamXML.nodes('/nodeP/nodeC') crXML(ci) )
	SET @Occupation=(SELECT crXML.ci.value('OCC[1]','VARCHAR(100)') FROM @ParamXML.nodes('/nodeP/nodeC') crXML(ci) )
	SET @OfficeState=(SELECT CASE crXML.ci.value('OST[1]','VARCHAR(100)') WHEN 0 THEN NULL ELSE crXML.ci.value('OST[1]','VARCHAR(100)') END FROM @ParamXML.nodes('/nodeP/nodeC') crXML(ci) )
	SET @OfficeCity=(SELECT CASE crXML.ci.value('OCT[1]','VARCHAR(100)') WHEN 0 THEN NULL ELSE crXML.ci.value('OCT[1]','VARCHAR(100)') END FROM @ParamXML.nodes('/nodeP/nodeC') crXML(ci) )

	DECLARE @TenantData TABLE (TenantID BIGINT, FirstName VARCHAR(500), LastName VARCHAR(500), Property VARCHAR(500), UnitNo VARCHAR(500) )
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 
	INSERT INTO @TenantData (TenantID, FirstName, LastName, Property, UnitNo) 
	SELECT T.ID AS TenantID, T.FirstName, T.LastName, P.Title AS Property, U.UnitNo
	FROM tbl_Tenant T 
	LEFT OUTER JOIN tbl_Properties P ON T.PropertyID=P.PID
	LEFT OUTER JOIN tbl_PropertyUnits U ON T.UnitID=U.[UID]
	WHERE T.CreatedDate >=@FromDate AND T.CreatedDate<=@ToDate+' 23:59:59'
	AND ISNULL(T.FirstName,'') LIKE CASE WHEN LEN(@FirstName) > 0 THEN '%'+CONVERT(VARCHAR(100),@FirstName)+'%' ELSE '%%' END
	AND ISNULL(T.LastName,'') LIKE CASE WHEN LEN(@LastName) > 0 THEN '%'+CONVERT(VARCHAR(100),@LastName)+'%' ELSE '%%' END
	AND (T.Gender=ISNULL(@Gender,0) OR @Gender IS NULL)
	AND (T.MaritalStatus=ISNULL(@MaritalStatus,0) OR @MaritalStatus IS NULL)
	AND (T.[State]=ISNULL(@State,0) OR @State IS NULL)
	AND (T.City=ISNULL(@City,0) OR @City IS NULL)
	AND (T.[OfficeState]=ISNULL(@OfficeState,0) OR @OfficeState IS NULL)
	AND (T.OfficeCity=ISNULL(@OfficeCity,0) OR @OfficeCity IS NULL)
	AND (T.PropertyID=ISNULL(@PropertyID,0) OR @PropertyID IS NULL)
	AND (T.UnitID=ISNULL(@UnitID,0) OR @UnitID IS NULL)
	AND ISNULL(T.Occupation,'') LIKE CASE WHEN LEN(@Occupation) > 0 THEN '%'+CONVERT(VARCHAR(100),@Occupation)+'%' ELSE '%%' END
	AND ISNULL(T.SocialSecurityNum,'') LIKE CASE WHEN LEN(@SocialSecurityNum) > 0 THEN '%'+CONVERT(VARCHAR(100),@SocialSecurityNum)+'%' ELSE '%%' END
	;
	WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.FirstName+' '+TD.LastName ASC)) AS RowNum, TenantID
	FROM @TenantData TD)
	SELECT
		FR.TenantID, T.FirstName, T.LastName, T.Property, T.UnitNo
	FROM 
		FilterRows FR INNER JOIN @TenantData T ON FR.TenantID=T.TenantID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;

	SET ANSI_NULLS OFF
	SET ANSI_PADDING OFF
	SET ANSI_WARNINGS OFF
	SET ARITHABORT OFF
	SET CONCAT_NULL_YIELDS_NULL OFF
	SET QUOTED_IDENTIFIER OFF
END



GO
/****** Object:  StoredProcedure [dbo].[usp_GetAdvertiserPaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetAdvertiserPaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetAdvertiserPaginationAndSearchData] AS' 
END
GO
--EXEC [usp_GetAdvertiserPaginationAndSearchData] 'a',1,20
ALTER PROCEDURE [dbo].[usp_GetAdvertiserPaginationAndSearchData]
	@Criteria		VARCHAR(50)=NULL,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount			INT
	DECLARE	@TotalRows			BIGINT
	DECLARE @LowerLimit			BIGINT
	DECLARE	@UpperLimit			BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue			BIGINT
	DECLARE @AdvertiserData			TABLE 
	(
		AdID BIGINT, Advertiser VARCHAR(500), NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT

	INSERT INTO @AdvertiserData (AdID, Advertiser, NOP ) 
	SELECT S.AdID, S.Advertiser, 0
	FROM tbl_Advertiser S 
	WHERE Advertiser LIKE ''+@Criteria+'%' OR @Criteria IS NULL ORDER BY S.Advertiser
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 SET @RowCount=(SELECT COUNT(*) FROM @AdvertiserData)

	 IF @RowCount<@RowNumLower
	 BEGIN
		SET @RowNumLower=0
	 END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.AdID DESC)) AS RowNum
	FROM @AdvertiserData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @AdvertiserData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.AdID ASC)) AS RowNum, AdID
	FROM @AdvertiserData TD)
	SELECT
		FR.AdID, VD.Advertiser, VD.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @AdvertiserData VD ON FR.AdID=VD.AdID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END











GO
/****** Object:  StoredProcedure [dbo].[usp_GetAmenityList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetAmenityList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetAmenityList] AS' 
END
GO

ALTER PROCEDURE [dbo].[usp_GetAmenityList]
	@Criteria	VARCHAR(50)=NULL
AS
BEGIN
	BEGIN
		SELECT ID, Amenity, AmenityDetails
		FROM tbl_Amenities
		WHERE Amenity LIKE '%'+@Criteria+'%' OR @Criteria IS NULL ORDER BY Amenity
	END
END







GO
/****** Object:  StoredProcedure [dbo].[usp_GetAmenityPaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetAmenityPaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetAmenityPaginationAndSearchData] AS' 
END
GO
--EXEC usp_GetAmenityPaginationAndSearchData '',4,20
ALTER PROCEDURE [dbo].[usp_GetAmenityPaginationAndSearchData]
	@Criteria		VARCHAR(50)=NULL,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount			INT
	DECLARE	@TotalRows			BIGINT
	DECLARE @LowerLimit			BIGINT
	DECLARE	@UpperLimit			BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue			BIGINT
	DECLARE @AmenitiesData		TABLE 
	(
		ID BIGINT, Amenity VARCHAR(500), AmenityDetails VARCHAR(500), NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT

	INSERT INTO @AmenitiesData (ID, Amenity, AmenityDetails, NOP ) 
	SELECT ID, Amenity, AmenityDetails, 0 
	FROM tbl_Amenities  
	WHERE Amenity LIKE '%'+@Criteria+'%' OR @Criteria IS NULL 
	ORDER BY Amenity
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 SET @RowCount=(SELECT COUNT(*) FROM @AmenitiesData)

	 IF @RowCount<@RowNumLower
	 BEGIN
		SET @RowNumLower=0
	 END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.ID DESC)) AS RowNum
	FROM @AmenitiesData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @AmenitiesData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.ID ASC)) AS RowNum, ID
	FROM @AmenitiesData TD)
	SELECT
		FR.ID, VD.Amenity, AmenityDetails, VD.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @AmenitiesData VD ON FR.ID=VD.ID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END









GO
/****** Object:  StoredProcedure [dbo].[usp_GetAmenitySearchList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetAmenitySearchList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetAmenitySearchList] AS' 
END
GO
--EXEC usp_GetAmenitySearchList '',4,20
ALTER PROCEDURE [dbo].[usp_GetAmenitySearchList]
	@Criteria		VARCHAR(50)=NULL,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount			INT
	DECLARE	@TotalRows			BIGINT
	DECLARE @LowerLimit			BIGINT
	DECLARE	@UpperLimit			BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue			BIGINT
	DECLARE @AmenitiesData		TABLE 
	(
		ID BIGINT, Amenity VARCHAR(500), AmenityDetails VARCHAR(500), NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT

	INSERT INTO @AmenitiesData (ID, Amenity, AmenityDetails, NOP ) 
	SELECT ID, Amenity, AmenityDetails, 0 
	FROM tbl_Amenities  
	WHERE Amenity LIKE '%'+@Criteria+'%' OR @Criteria IS NULL 
	ORDER BY Amenity
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 SET @RowCount=(SELECT COUNT(*) FROM @AmenitiesData)

	 IF @RowCount<@RowNumLower
	 BEGIN
		SET @RowNumLower=0
	 END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.ID DESC)) AS RowNum
	FROM @AmenitiesData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @AmenitiesData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.ID ASC)) AS RowNum, ID
	FROM @AmenitiesData TD)
	SELECT
		FR.ID, VD.Amenity, AmenityDetails, VD.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @AmenitiesData VD ON FR.ID=VD.ID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END









GO
/****** Object:  StoredProcedure [dbo].[usp_GetBankAccountList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetBankAccountList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetBankAccountList] AS' 
END
GO


ALTER PROCEDURE [dbo].[usp_GetBankAccountList]
	@FromDate datetime,
	@ToDate	datetime
	AS
BEGIN
	SELECT [BAID]
      ,[Bank_Name]
      ,[Account_Number]
      ,CASE WHEN [Account_Type]=1 THEN 'CASH DEBIT ACCOUNT'  WHEN [Account_Type]=2 THEN 'CASH CREDIT ACCOUNT' WHEN [Account_Type]=3 THEN 'ACCRUAL DEBIT ACCOUNT' WHEN [Account_Type]=4 THEN 'ACCRUAL CREDIT ACCOUNT' ELSE '' END AS [Account_Type]
  FROM dbo.tbl_BankAccount
 -- where [NoticeDate] >=@FromDate AND [NoticeDate]<=@ToDate+'23:59:59' 
END







GO
/****** Object:  StoredProcedure [dbo].[usp_GetBankAccountPaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetBankAccountPaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetBankAccountPaginationAndSearchData] AS' 
END
GO

--EXEC usp_GetBankAccountPaginationAndSearchData 'AccountType','acc',1,20
ALTER PROCEDURE [dbo].[usp_GetBankAccountPaginationAndSearchData]
	@Filter			VARCHAR(50)=NULL,
	@Criteria		VARCHAR(50)=NULL,
	@PageNumber		INT=NULL,
	@NumberOfRows	INT=NULL
AS
BEGIN
	DECLARE	@TotalRows	BIGINT
	DECLARE @LowerLimit	BIGINT
	DECLARE	@UpperLimit	BIGINT
	DECLARE @PageIndex	BIGINT
	DECLARE @ModValue	BIGINT

	DECLARE @BankAccount TABLE (
		BAID BIGINT, Bank_Name VARCHAR(100), Account_Type VARCHAR(100), Account_Number VARCHAR(100), NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 
	INSERT INTO @BankAccount (BAID, Bank_Name, Account_Type, Account_Number, NOP ) 
	SELECT BAID, Bank_Name, 
	CASE [Account_Type] WHEN 1 THEN 'CASH DEBIT ACCOUNT' WHEN 2 THEN 'CASH CREDIT ACCOUNT' WHEN 3 THEN 'ACCRUAL DEBIT ACCOUNT' WHEN 4 THEN 'ACCRUAL CREDIT ACCOUNT' ELSE '' END,
	Account_Number, 0 
	FROM tbl_BankAccount 
	WHERE 
	(Bank_Name LIKE CASE @Filter WHEN 'BankName' THEN ''+@Criteria+'%' END OR @Filter IS NULL)
	OR (CASE [Account_Type] WHEN 1 THEN 'CASH DEBIT ACCOUNT' WHEN 2 THEN 'CASH CREDIT ACCOUNT' WHEN 3 THEN 'ACCRUAL DEBIT ACCOUNT' 
	WHEN 4 THEN 'ACCRUAL CREDIT ACCOUNT' ELSE '' END) LIKE CASE @Filter WHEN 'AccountType' THEN ''+@Criteria+'%' END
	ORDER BY Bank_Name ASC

	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.BAID DESC)) AS RowNum
	FROM @BankAccount PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @PageIndex=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @PageIndex=@PageIndex+1;
	END

	UPDATE @BankAccount SET NOP=@PageIndex
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.BAID ASC)) AS RowNum, BAID
	FROM @BankAccount TD)
	SELECT
		FR.BAID, BA.Bank_Name, BA.Account_Type, BA.Account_Number, BA.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @BankAccount BA ON FR.BAID=BA.BAID
	WHERE 
		(RowNum>=@RowNumLower OR @RowNumLower IS NULL) AND (RowNum<=@RowNumUpper OR @RowNumUpper IS NULL)
	ORDER BY 
		RowNum
	;
END








GO
/****** Object:  StoredProcedure [dbo].[usp_GetCashReceiptList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetCashReceiptList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetCashReceiptList] AS' 
END
GO







ALTER PROCEDURE [dbo].[usp_GetCashReceiptList]
	@FromDate		datetime,
	@ToDate	datetime
AS
BEGIN
	SELECT [CRID]
      ,(SELECT (FirstName + LastName) as Name FROM tbl_Tenant WHERE ID=[TenantID]) AS TenantID
      ,[Balance]
      ,[PrePayment]
      ,[PaymentAmount]
      ,[PaymentDate]
      ,[CheckNumber]
      ,(SELECT Title FROM tbl_Properties WHERE PID=[PropertyID]) AS PropertyID
      ,(SELECT UnitNo FROM tbl_PropertyUnits WHERE UID=[UnitID]) AS UnitID
      ,[LeaseID]
      ,[Revision_Num]
      ,[PaymentType]
      ,[IsApplicant]
      ,[Status]
      ,[Description]
      ,[Batch]
      ,[UserID]
      ,[BankAccount]
      ,[DateStamp]
      ,[DepositAcctDate]
  FROM [ShomaRM].[dbo].[tbl_CashReceipts]
  --where [DateStamp] >=@FromDate AND [DateStamp]<=@ToDate+'23:59:59'
END







GO
/****** Object:  StoredProcedure [dbo].[usp_GetCashReceiptPaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetCashReceiptPaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetCashReceiptPaginationAndSearchData] AS' 
END
GO
--EXEC usp_GetCashReceiptPaginationAndSearchData '06/01/2019','07/01/2019',1,20
ALTER PROCEDURE [dbo].[usp_GetCashReceiptPaginationAndSearchData]
	@FromDate		DATETIME,
	@ToDate			DATETIME,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount			INT
	DECLARE	@TotalRows			BIGINT
	DECLARE @LowerLimit			BIGINT
	DECLARE	@UpperLimit			BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue			BIGINT
	DECLARE @CashReceiptData		TABLE 
	(
		CRID BIGINT, TenantID VARCHAR(100), Balance VARCHAR(100), PrePayment VARCHAR(100), PaymentAmount  VARCHAR(100), PaymentDate VARCHAR(50),
		CheckNumber VARCHAR(100), PropertyID VARCHAR(100), UnitID VARCHAR(100), LeaseID  VARCHAR(100), Revision_Num VARCHAR(50), 
		PaymentType VARCHAR(100), Status VARCHAR(100), Description VARCHAR(MAX), Batch  VARCHAR(100), BankAccount VARCHAR(50), 
		DateStamp VARCHAR(100), DepositAcctDate VARCHAR(100), NOP INT 
	)

	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT

	INSERT INTO @CashReceiptData (CRID, TenantID, Balance, PrePayment, PaymentAmount, PaymentDate, CheckNumber, PropertyID, UnitID, LeaseID, Revision_Num, PaymentType, 
	Status, Description, Batch, BankAccount, DateStamp, DepositAcctDate, NOP ) 

	SELECT CR.CRID, ISNULL(T.FirstName,'')+' '+ISNULL(T.LastName,'') AS TenantID, CR.Balance, CR.PrePayment, CR.PaymentAmount, 
	CONVERT(VARCHAR(10),CR.PaymentDate,101) AS PaymentDate, CR.CheckNumber, 
	P.Title AS PropertyID, PU.UnitNo AS UnitID, CR.LeaseID, CR.Revision_Num, CR.PaymentType, CR.Status, CR.Description, CR.Batch, 
	CR.BankAccount, CONVERT(VARCHAR(10),CR.DateStamp,101) AS DateStamp, CONVERT(VARCHAR(10),CR.DepositAcctDate,101) AS DepositAcctDate,
	0 AS NOP
	FROM tbl_CashReceipts CR
	LEFT OUTER JOIN tbl_Properties P ON CR.PropertyID=P.PID
	LEFT OUTER JOIN tbl_PropertyUnits PU ON CR.UnitID=PU.[UID]
	LEFT OUTER JOIN tbl_Tenant T ON CR.TenantID=T.ID
	WHERE CR.DateStamp >=@FromDate AND CR.DateStamp<=@ToDate+' 23:59:59'
	ORDER BY CR.DateStamp DESC
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 SET @RowCount=(SELECT COUNT(*) FROM @CashReceiptData)

	 IF @RowCount<@RowNumLower
	 BEGIN
		SET @RowNumLower=0
	 END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.CRID DESC)) AS RowNum
	FROM @CashReceiptData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;
	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @CashReceiptData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.CRID ASC)) AS RowNum, CRID
	FROM @CashReceiptData TD)
	SELECT
		FR.CRID, TenantID, Balance, PrePayment, PaymentAmount, PaymentDate, CheckNumber, PropertyID, UnitID, LeaseID, Revision_Num, PaymentType, 
		Status, Description, Batch, BankAccount, DateStamp, DepositAcctDate, ND.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @CashReceiptData ND ON FR.CRID=ND.CRID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END









GO
/****** Object:  StoredProcedure [dbo].[usp_GetChargeTypeList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetChargeTypeList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetChargeTypeList] AS' 
END
GO

ALTER PROCEDURE [dbo].[usp_GetChargeTypeList]
	@Criteria	VARCHAR(50)=NULL
AS
BEGIN
	BEGIN
	SELECT	[CTID]
      ,[Charge_Type]
      ,[Summary_Charge_Type]
      ,[Charge_Description]
      ,[Charge_Reference]
      ,[Payment_Description]
      ,[Payment_Reference]
      ,[Revenue_Account]
      ,[Receivable_Account]
      ,[Prepayment_Account]
      ,[CreatedBy]
      ,[CreatedDate]
      ,[Time_Stamp]
      ,[Concession]
  FROM [dbo].[tbl_ChargeType]
		WHERE Charge_Type LIKE '%'+@Criteria+'%' OR @Criteria IS NULL ORDER BY Charge_Type
	END
END







GO
/****** Object:  StoredProcedure [dbo].[usp_GetCityList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetCityList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetCityList] AS' 
END
GO
--EXEC [usp_GetCityList] '',4,20
ALTER PROCEDURE [dbo].[usp_GetCityList]
	@Criteria		VARCHAR(50)=NULL,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount			INT
	DECLARE	@TotalRows			BIGINT
	DECLARE @LowerLimit			BIGINT
	DECLARE	@UpperLimit			BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue			BIGINT
	DECLARE @CityData			TABLE 
	(
		ID BIGINT, CityName VARCHAR(500), StateName VARCHAR(500), NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT

	INSERT INTO @CityData (ID, CityName, StateName, NOP ) 
	SELECT C.ID, C.CityName, S.StateName, 0
	FROM tbl_City C 
	LEFT OUTER JOIN tbl_State S ON S.ID=C.StateID
	WHERE CityName LIKE ''+@Criteria+'%' OR @Criteria IS NULL ORDER BY CityName
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 SET @RowCount=(SELECT COUNT(*) FROM @CityData)

	 IF @RowCount<@RowNumLower
	 BEGIN
		SET @RowNumLower=0
	 END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.ID DESC)) AS RowNum
	FROM @CityData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @CityData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.ID ASC)) AS RowNum, ID
	FROM @CityData TD)
	SELECT
		FR.ID, VD.CityName, VD.StateName, VD.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @CityData VD ON FR.ID=VD.ID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END









GO
/****** Object:  StoredProcedure [dbo].[usp_GetCityListbyState]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetCityListbyState]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetCityListbyState] AS' 
END
GO
ALTER PROCEDURE [dbo].[usp_GetCityListbyState]
	@StateID int
AS
BEGIN
	SELECT ID,CityName
	FROM tbl_City 	
	WHERE StateID=@StateID
END







GO
/****** Object:  StoredProcedure [dbo].[usp_GetCityPaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetCityPaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetCityPaginationAndSearchData] AS' 
END
GO
--EXEC [usp_GetCityPaginationAndSearchData] '',4,20
ALTER PROCEDURE [dbo].[usp_GetCityPaginationAndSearchData]
	@Criteria		VARCHAR(50)=NULL,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount			INT
	DECLARE	@TotalRows			BIGINT
	DECLARE @LowerLimit			BIGINT
	DECLARE	@UpperLimit			BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue			BIGINT
	DECLARE @CityData			TABLE 
	(
		ID BIGINT, CityName VARCHAR(500), StateName VARCHAR(500), NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT

	INSERT INTO @CityData (ID, CityName, StateName, NOP ) 
	SELECT C.ID, C.CityName, S.StateName, 0
	FROM tbl_City C 
	LEFT OUTER JOIN tbl_State S ON S.ID=C.StateID
	WHERE CityName LIKE ''+@Criteria+'%' OR @Criteria IS NULL ORDER BY CityName
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 SET @RowCount=(SELECT COUNT(*) FROM @CityData)

	 IF @RowCount<@RowNumLower
	 BEGIN
		SET @RowNumLower=0
	 END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.ID DESC)) AS RowNum
	FROM @CityData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @CityData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.ID ASC)) AS RowNum, ID
	FROM @CityData TD)
	SELECT
		FR.ID, VD.CityName, VD.StateName, VD.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @CityData VD ON FR.ID=VD.ID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END









GO
/****** Object:  StoredProcedure [dbo].[usp_GetClientUnitList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetClientUnitList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetClientUnitList] AS' 
END
GO
-- EXEC [usp_GetPropertyUnitList] 8,'',0,1
ALTER PROCEDURE [dbo].[usp_GetClientUnitList]
    @PID BIGINT,
	@AvailableDate		datetime,
	@FloorNo int=0,
	@Bedroom int=0,
	@Current_Rent decimal=5000
AS
BEGIN
IF (@Bedroom!=0)
BEGIN
SELECT PU.UID,PU.PID,PU.UnitNo,PU.Wing,PU.Building     
	,PF.FloorNo ,PU.Current_Rent,PU.Deposit,PU.Leased,PU.Rooms,PU.Bedroom,PU.Bathroom,PU.Hall,PU.Area,PU.FloorPlan,PU.AvailableDate
 FROM tbl_PropertyUnits PU INNER JOIN tbl_PropertyFloor PF ON PU.FloorNo=PF.FloorID
  WHERE PU.AvailableDate<=@AvailableDate AND PU.PID=@PID AND PU.Bedroom=@Bedroom AND PU.Current_Rent<=@Current_Rent AND PU.UID NOT IN (SELECT UID FROM tbl_Lease WHERE STATUS=1)
END
ELSE
BEGIN
SELECT PU.UID,PU.PID,PU.UnitNo,PU.Wing,PU.Building     
	,PF.FloorNo ,PU.Current_Rent,PU.Deposit,PU.Leased,PU.Rooms,PU.Bedroom,PU.Bathroom,PU.Hall,PU.Area,PU.FloorPlan,PU.AvailableDate
 FROM tbl_PropertyUnits PU INNER JOIN tbl_PropertyFloor PF ON PU.FloorNo=PF.FloorID
  WHERE PU.AvailableDate<=@AvailableDate AND PU.PID=@PID AND PU.Current_Rent<=@Current_Rent AND PU.UID NOT IN (SELECT UID FROM tbl_Lease WHERE STATUS=1)
END
END







GO
/****** Object:  StoredProcedure [dbo].[usp_GetCountryList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetCountryList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetCountryList] AS' 
END
GO
ALTER PROCEDURE [dbo].[usp_GetCountryList] 
AS
BEGIN
	SET NOCOUNT ON;
	SELECT ID, CountryName FROM tbl_Country ORDER BY ID, CountryName
END


GO
/****** Object:  StoredProcedure [dbo].[usp_GetDocumentList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetDocumentList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetDocumentList] AS' 
END
GO





ALTER PROCEDURE [dbo].[usp_GetDocumentList]
	@FromDate		datetime,
	@ToDate	datetime
AS
BEGIN
	SELECT [DocID]
      ,[TenantID]
	  ,([FirstName] + ' ' + [LastName]) as TenantName
      ,[DocumentName]
      ,[DocumentType]
      ,[DocumentNumber]
      ,[UploadDate]
      ,[UploadBy]
  FROM [ShomaRM].[dbo].[tbl_Document],[dbo].[tbl_Tenant]
	WHERE [tbl_Tenant].[ID] = [tbl_Document].[TenantID]
	--and [CreatedDate] >=@FromDate AND [CreatedDate]<=@ToDate+'23:59:59'
END














GO
/****** Object:  StoredProcedure [dbo].[usp_GetEventBookingList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetEventBookingList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetEventBookingList] AS' 
END
GO






ALTER PROCEDURE [dbo].[usp_GetEventBookingList]
	@FromDate		datetime,
	@ToDate	datetime,
	@UserId int
AS
BEGIN
	SELECT [EventBookingID]
      ,[TenantID]
      ,[tbl_EventBooking].[EventID]
      ,[EventName]
      ,[BookingDate]
      ,[NoOfGuest]
      ,[BookingDetails]
      ,[tbl_EventBooking].[CreatedByID]
      ,[tbl_EventBooking].[CreatedDate]
  FROM [tbl_EventBooking],[tbl_Event]
  where [tbl_EventBooking].EventID = [tbl_Event].[EventID]
  --and [tbl_FacilityBooking].[CreatedDate] >=@FromDate AND [tbl_FacilityBooking].[CreatedDate]<=@ToDate+'23:59:59'
  and [TenantID] = @UserId
END















GO
/****** Object:  StoredProcedure [dbo].[usp_GetEventList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetEventList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetEventList] AS' 
END
GO





ALTER PROCEDURE [dbo].[usp_GetEventList]
	@FromDate		datetime,
	@ToDate	datetime
AS
BEGIN
	SELECT [EventID]
      ,[EventName]
    ,[PropertyID]
    ,[EventDate]
    ,[Title] as PropertyName
      ,[Photo]
      ,[tbl_Event].[Description]
      ,[CreatedByID]
      ,[CreatedByDate]
  FROM [ShomaRM].[dbo].[tbl_Event],[tbl_Properties]
	WHERE [tbl_Properties].PID = [tbl_Event].PropertyID
	AND [CreatedByDate] >=@FromDate AND [CreatedByDate]<=@ToDate+'23:59:59'
END





GO
/****** Object:  StoredProcedure [dbo].[usp_GetEventPaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetEventPaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetEventPaginationAndSearchData] AS' 
END
GO
--EXEC usp_GetEventPaginationAndSearchData '06/01/2019','07/31/2019',200,25
ALTER PROCEDURE [dbo].[usp_GetEventPaginationAndSearchData]
	@FromDate		DATETIME,
	@ToDate			DATETIME,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount			INT
	DECLARE	@TotalRows			BIGINT
	DECLARE @LowerLimit			BIGINT
	DECLARE	@UpperLimit			BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue			BIGINT
	DECLARE @EventData		TABLE 
	(
		EventID BIGINT, EventName VARCHAR(100), EventDate VARCHAR(10), PropertyName VARCHAR(100), Description VARCHAR(MAX),
		CreatedByDate VARCHAR(10), CreatedBy VARCHAR(100), Photo VARCHAR(100), NOP INT 
	)
	
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT

	INSERT INTO @EventData (EventID, EventName, EventDate, PropertyName, Description, CreatedByDate, CreatedBy, Photo, NOP ) 

	SELECT E.EventID, E.EventName, CONVERT(VARCHAR(10),E.EventDate,101) AS EventDate, P.Title AS PropertyName, E.Description, 
	CONVERT(VARCHAR(10),E.CreatedByDate,101) AS CreatedByDate,  L.FirstName+' '+L.LastName AS CreatedBy, Photo, 0 AS NOP
	FROM tbl_Event E
	LEFT OUTER JOIN tbl_Properties P ON E.PropertyID=P.PID
	LEFT OUTER JOIN tbl_Login L ON E.CreatedByID=L.UserID
	WHERE E.CreatedByDate BETWEEN @FromDate AND @ToDate+' 23:59:59' ORDER BY E.EventDate DESC, E.EventName ASC
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	SET @RowCount=(SELECT COUNT(*) FROM @EventData)

	 IF @RowCount<@RowNumLower
	 BEGIN
		SET @RowNumLower=0
	 END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.EventID DESC)) AS RowNum
	FROM @EventData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;
	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @EventData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.EventName ASC)) AS RowNum, EventID
	FROM @EventData TD)
	SELECT
		FR.EventID, ED.EventName, ED.EventDate, ED.PropertyName, ED.Description, ED.CreatedByDate, ED.CreatedBy, ED.Photo, ED.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @EventData ED ON FR.EventID=ED.EventID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END









GO
/****** Object:  StoredProcedure [dbo].[usp_GetFacilityBookingList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetFacilityBookingList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetFacilityBookingList] AS' 
END
GO





ALTER PROCEDURE [dbo].[usp_GetFacilityBookingList]
	@FromDate		datetime,
	@ToDate	datetime,
	@UserId int
AS
BEGIN
	SELECT [FacilityBookingID]
      ,[TenantID]
      ,[tbl_FacilityBooking].[FacilityID]
      ,[FacilityName]
      ,[BookingDate]
      ,[RequiredFromDate]
	  ,[RequiredToDate]
      ,[BookingDetails]
      ,[tbl_FacilityBooking].[CreatedByID]
      ,[tbl_FacilityBooking].[CreatedDate]
  FROM [ShomaRM].[dbo].[tbl_FacilityBooking],[ShomaRM].[dbo].[tbl_Facility]
  where [tbl_FacilityBooking].FacilityID = [tbl_Facility].[FacilityID]
  --and [tbl_FacilityBooking].[CreatedDate] >=@FromDate AND [tbl_FacilityBooking].[CreatedDate]<=@ToDate+'23:59:59'
  and [TenantID] = @UserId
END














GO
/****** Object:  StoredProcedure [dbo].[usp_GetFacilityList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetFacilityList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetFacilityList] AS' 
END
GO






ALTER PROCEDURE [dbo].[usp_GetFacilityList]
	@FromDate		datetime,
	@ToDate	datetime
AS
BEGIN
	SELECT [FacilityID]
      ,[FacilityName]
      ,[PropertyID]
      ,[tbl_Properties].Title as PropertyName
      ,[tbl_Facility].[Description]
      ,[Photo]
      ,[CreatedByID]
      ,[tbl_Facility].[CreatedDate]
  FROM [ShomaRM].[dbo].[tbl_Facility],[tbl_Properties]
	WHERE [tbl_Properties].PID = [tbl_Facility].PropertyID
	AND [tbl_Facility].[CreatedDate] >=@FromDate AND [tbl_Facility].[CreatedDate]<=@ToDate+'23:59:59'
END






GO
/****** Object:  StoredProcedure [dbo].[usp_GetFacilityPaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetFacilityPaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetFacilityPaginationAndSearchData] AS' 
END
GO


--EXEC usp_GetFacilityPaginationAndSearchData '06/01/2019','07/31/2019',1,20
ALTER PROCEDURE [dbo].[usp_GetFacilityPaginationAndSearchData]
	@FromDate		DATETIME,
	@ToDate			DATETIME,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount			INT
	DECLARE	@TotalRows			BIGINT
	DECLARE @LowerLimit			BIGINT
	DECLARE	@UpperLimit			BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue			BIGINT
	DECLARE @FacilityData		TABLE 
	(
		FacilityID BIGINT, FacilityName VARCHAR(100), PropertyName VARCHAR(100), Description VARCHAR(MAX), 
		Photo VARCHAR(MAX), CreatedBy VARCHAR(100), CreatedDate VARCHAR(10), NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT

	INSERT INTO @FacilityData (FacilityID, FacilityName, PropertyName, Description, Photo, CreatedBy, CreatedDate, NOP) 
	SELECT F.FacilityID, F.FacilityName, P.Title AS PropertyName, F.Description, F.Photo, ISNULL(L.FirstName,'')+' '+ISNULL(L.LastName,''), CONVERT(VARCHAR(10),F.CreatedDate,101), 0 AS NOP
	FROM tbl_Facility F
	LEFT OUTER JOIN tbl_Properties P ON F.PropertyID=P.PID
	LEFT OUTER JOIN tbl_Login L ON F.CreatedByID=L.UserID
	WHERE F.CreatedDate BETWEEN @FromDate AND @ToDate+' 23:59:59'
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 SET @RowCount=(SELECT COUNT(*) FROM @FacilityData)

	 IF @RowCount<@RowNumLower
	 BEGIN
		SET @RowNumLower=0
	 END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.FacilityID DESC)) AS RowNum
	FROM @FacilityData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;
	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @FacilityData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.FacilityID ASC)) AS RowNum, FacilityID
	FROM @FacilityData TD)
	SELECT
		FR.FacilityID, FD.FacilityName, FD.PropertyName, FD.Description, FD.Photo, FD.CreatedBy, FD.CreatedDate, FD.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @FacilityData FD ON FR.FacilityID=FD.FacilityID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END









GO
/****** Object:  StoredProcedure [dbo].[usp_GetInvoiceList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetInvoiceList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetInvoiceList] AS' 
END
GO




ALTER PROCEDURE [dbo].[usp_GetInvoiceList]
	@FromDate		datetime,
	@ToDate	datetime
AS
BEGIN
	SELECT [InvoiceID]
      ,[InvoiceNumber]
    ,(select Vendor_Name from tbl_Vendor where Vendor_ID = [Vendor]) as [Vendor]
      ,[InvoiceDesc]
      ,[InvoiceDate]
      ,[ReceivedDate]
      ,[PaymentDate]
      ,[TotalAmount]
      ,[Route]
      ,[ExportNow]
      ,[ExportedDate]
      ,[ExportedBy]
      ,[Approved]
      ,[ApprovedBy]
      ,[BatchID]
      ,[CreatedBy]
      ,[CreatedDate]
  FROM [ShomaRM].[dbo].[tbl_Invoice]
	WHERE [CreatedDate] >=@FromDate AND [CreatedDate]<=@ToDate+'23:59:59'
END













GO
/****** Object:  StoredProcedure [dbo].[usp_GetInvoicePaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetInvoicePaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetInvoicePaginationAndSearchData] AS' 
END
GO
--EXEC usp_GetInvoicePaginationAndSearchData '06/01/2019','07/31/2019',1,20
ALTER PROCEDURE [dbo].[usp_GetInvoicePaginationAndSearchData]
	@FromDate		DATETIME,
	@ToDate			DATETIME,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount			INT
	DECLARE	@TotalRows			BIGINT
	DECLARE @LowerLimit			BIGINT
	DECLARE	@UpperLimit			BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue			BIGINT
	DECLARE @InvoiceData		TABLE 
	(
		InvoiceID BIGINT, InvoiceNumber VARCHAR(100), Vendor VARCHAR(100), InvoiceDate VARCHAR(10), 
		ReceivedDate VARCHAR(10), PaymentDate VARCHAR(10), TotalAmount MONEY, Approved VARCHAR(10), ApprovedBy VARCHAR(100), CreatedDate VARCHAR(10), NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT

	INSERT INTO @InvoiceData (InvoiceID, InvoiceNumber, Vendor, InvoiceDate, ReceivedDate, PaymentDate, TotalAmount, Approved, ApprovedBy, CreatedDate, NOP ) 
	SELECT I.InvoiceID, I.InvoiceNumber, V.Vendor_Name AS Vendor, CONVERT(VARCHAR(10),I.InvoiceDate,101), CONVERT(VARCHAR(10),I.ReceivedDate,101), CONVERT(VARCHAR(10),I.PaymentDate,101), ISNULL(I.TotalAmount,0), CONVERT(VARCHAR(10),I.Approved,101), I.ApprovedBy, CONVERT(VARCHAR(10),I.CreatedDate,101), 0
	FROM tbl_Invoice I
	LEFT OUTER JOIN tbl_Vendor V ON I.Vendor=V.Vendor_ID
	WHERE I.CreatedDate BETWEEN @FromDate AND @ToDate+' 23:59:59' 
	ORDER BY I.PaymentDate DESC
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 SET @RowCount=(SELECT COUNT(*) FROM @InvoiceData)

	 IF @RowCount<@RowNumLower
	 BEGIN
		SET @RowNumLower=0
	 END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.InvoiceID DESC)) AS RowNum
	FROM @InvoiceData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;
	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @InvoiceData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.InvoiceID ASC)) AS RowNum, InvoiceID
	FROM @InvoiceData TD)
	SELECT
		FR.InvoiceID, I.InvoiceID, I.InvoiceNumber, I.Vendor, I.InvoiceDate, I.ReceivedDate, I.PaymentDate, I.TotalAmount, I.Approved, I.ApprovedBy, I.CreatedDate, I.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @InvoiceData I ON FR.InvoiceID=I.InvoiceID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END









GO
/****** Object:  StoredProcedure [dbo].[usp_GetNoticeList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetNoticeList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetNoticeList] AS' 
END
GO






ALTER PROCEDURE [dbo].[usp_GetNoticeList]
	@FromDate		datetime,
	@ToDate	datetime
AS
BEGIN
	SELECT [NoticeID]
      ,dbo.tbl_Notice.[PID]
      ,(dbo.tbl_Properties.Title) as PidString
      ,dbo.tbl_Notice.[UID]
      ,(dbo.tbl_PropertyUnits.UnitNo) as UidString
      ,dbo.tbl_Notice.[TID]
      ,(dbo.tbl_Tenant.FirstName + ' ' + dbo.tbl_Tenant.LastName) as TenantName
      ,[LeaseID]
      ,[Revision_Num]
      ,[NoticeDate]
      ,[IntendedMoveOut]
      ,[TerminationReason]
      ,[CancelNoticeDate]
  FROM dbo.tbl_Notice,dbo.tbl_Properties,dbo.tbl_PropertyUnits,dbo.tbl_Tenant
  where dbo.tbl_Properties.PID = dbo.tbl_Notice.PID
  and dbo.tbl_PropertyUnits.UID = dbo.tbl_Notice.UID
  and dbo.tbl_Tenant.ID = dbo.tbl_Notice.TID
	and [NoticeDate] >=@FromDate AND [NoticeDate]<=@ToDate+'23:59:59'
END






GO
/****** Object:  StoredProcedure [dbo].[usp_GetNoticePaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetNoticePaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetNoticePaginationAndSearchData] AS' 
END
GO
--EXEC usp_FillNoticeSearchGrid '06/01/2019','07/01/2019',1,20
ALTER PROCEDURE [dbo].[usp_GetNoticePaginationAndSearchData]
	@FromDate		DATETIME,
	@ToDate			DATETIME,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount			INT
	DECLARE	@TotalRows			BIGINT
	DECLARE @LowerLimit			BIGINT
	DECLARE	@UpperLimit			BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue			BIGINT
	DECLARE @NoticeData		TABLE 
	(
		NoticeID BIGINT, PropertyName VARCHAR(100), UnitName VARCHAR(100), TenantName VARCHAR(100), Revision_Num  VARCHAR(100), NoticeDate VARCHAR(50), NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT

	INSERT INTO @NoticeData (NoticeID, PropertyName, UnitName, TenantName, Revision_Num, NoticeDate, NOP ) 
	SELECT N.NoticeID, P.Title, PU.UnitNo, T.FirstName+' '+T.LastName, N.Revision_Num, CONVERT(VARCHAR(10),N.NoticeDate,101), 0 FROM tbl_Notice N
	LEFT OUTER JOIN tbl_Properties P ON N.PID=P.PID
	LEFT OUTER JOIN tbl_PropertyUnits PU ON N.[UID]=PU.[UID]
	LEFT OUTER JOIN tbl_Tenant T ON N.TID=T.ID
	WHERE N.NoticeDate BETWEEN @FromDate AND @ToDate+' 23:59:59'
	ORDER BY N.NoticeDate DESC
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 SET @RowCount=(SELECT COUNT(*) FROM @NoticeData)

	 IF @RowCount<@RowNumLower
	 BEGIN
		SET @RowNumLower=0
	 END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.NoticeID DESC)) AS RowNum
	FROM @NoticeData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;
	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @NoticeData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.NoticeID ASC)) AS RowNum, NoticeID
	FROM @NoticeData TD)
	SELECT
		FR.NoticeID, ND.PropertyName, ND.UnitName, ND.TenantName, ND.Revision_Num, ND.NoticeDate, ND.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @NoticeData ND ON FR.NoticeID=ND.NoticeID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END









GO
/****** Object:  StoredProcedure [dbo].[usp_GetOnlineTransactionList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetOnlineTransactionList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetOnlineTransactionList] AS' 
END
GO

-- EXEC [usp_GetTransactionList] '12/12/2018','12/12/2019'


ALTER PROCEDURE [dbo].[usp_GetOnlineTransactionList]

	@TenantID BIGINT
AS
BEGIN
	SELECT [TransID]    

      ,[LeaseID]
      ,[Revision_Num]
      ,[Transaction_Date]
      ,ISNULL([Run],0) AS Run
      ,CASE WHEN [Transaction_Type]=5 THEN 'Application Fees'  WHEN [Transaction_Type]=6 THEN 'Admin Fees' WHEN [Transaction_Type]=7 THEN 'Security Deposit' ELSE 'CHARGE' END AS [Transaction_Type]
      ,[Description]
      ,[Charge_Date]
      ,(SELECT  top 1 Charge_Type FROM tbl_ChargeType WHERE CTID=T.[Charge_Type]) AS Charge_Type
      ,[Reference]
      ,ISNULL([Credit_Amount],0) AS [Credit_Amount]
      ,ISNULL([Charge_Amount],0) AS [Charge_Amount]
	  ,[TBankName]
      ,[CreatedDate]
    
  FROM  [tbl_Transaction] T
  WHERE  TenantID=@TenantID
END








GO
/****** Object:  StoredProcedure [dbo].[usp_GetParkingPaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetParkingPaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetParkingPaginationAndSearchData] AS' 
END
GO
--EXEC [usp_GetParkingPaginationAndSearchData] 'p',1,20
ALTER PROCEDURE [dbo].[usp_GetParkingPaginationAndSearchData]
	@Criteria		VARCHAR(50)=NULL,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount				INT
	DECLARE	@TotalRows				BIGINT
	DECLARE @LowerLimit				BIGINT
	DECLARE	@UpperLimit				BIGINT
	DECLARE @TotalNumberOfPages		BIGINT
	DECLARE @ModValue				BIGINT
	DECLARE @ParkingData			TABLE 
	(
		ParkingID BIGINT, 
		PropertyID BIGINT,
		ParkingName VARCHAR(500), 
		Charges DECIMAL(18,2), 
		Description VARCHAR(MAX), 
		Type VARCHAR(500), 
		Status VARCHAR(500), 
		NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT

	INSERT INTO @ParkingData (ParkingID, PropertyID, ParkingName, Charges, Description, Type, Status, NOP ) 
	SELECT ParkingID, PropertyID, ParkingName, ISNULL(Charges,0), Description, ISNULL(Type,0), ISNULL(Status,0), 0
	FROM tbl_Parking S 
	WHERE ParkingName LIKE ''+@Criteria+'%' OR @Criteria IS NULL ORDER BY S.ParkingName
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 SET @RowCount=(SELECT COUNT(*) FROM @ParkingData)

	 IF @RowCount<@RowNumLower
	 BEGIN
		SET @RowNumLower=0
	 END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.ParkingID DESC)) AS RowNum
	FROM @ParkingData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @ParkingData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.ParkingID ASC)) AS RowNum, ParkingID
	FROM @ParkingData TD)
	SELECT
		FR.ParkingID, PropertyID, ParkingName, Charges, Description, Type, Status, NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @ParkingData VD ON FR.ParkingID=VD.ParkingID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END











GO
/****** Object:  StoredProcedure [dbo].[usp_GetPetPlacePaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPetPlacePaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetPetPlacePaginationAndSearchData] AS' 
END
GO
--EXEC [usp_GetPetPlacePaginationAndSearchData] '',1,20
ALTER PROCEDURE [dbo].[usp_GetPetPlacePaginationAndSearchData]
	@Criteria		VARCHAR(50)=NULL,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount				INT
	DECLARE	@TotalRows				BIGINT
	DECLARE @LowerLimit				BIGINT
	DECLARE	@UpperLimit				BIGINT
	DECLARE @TotalNumberOfPages		BIGINT
	DECLARE @ModValue				BIGINT
	DECLARE @PetPlaceData			TABLE 
	(
		PetPlaceID BIGINT, 
		PropertyID BIGINT,
		PetPlace VARCHAR(500), 
		Charges DECIMAL(18,2), 
		Description VARCHAR(MAX), 
		Type VARCHAR(500), 
		Status VARCHAR(500), 
		NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT

	INSERT INTO @PetPlaceData (PetPlaceID, PropertyID, PetPlace, Charges, Description, Type, Status, NOP ) 
	SELECT PetPlaceID, PropertyID, PetPlace, ISNULL(Charges,0), Description, ISNULL(Type,0), ISNULL(Status,0), 0
	FROM tbl_PetPlace S 
	WHERE PetPlace LIKE ''+@Criteria+'%' OR @Criteria IS NULL ORDER BY S.PetPlace
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 SET @RowCount=(SELECT COUNT(*) FROM @PetPlaceData)

	 IF @RowCount<@RowNumLower
	 BEGIN
		SET @RowNumLower=0
	 END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.PetPlaceID DESC)) AS RowNum
	FROM @PetPlaceData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @PetPlaceData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.PetPlaceID ASC)) AS RowNum, PetPlaceID
	FROM @PetPlaceData TD)
	SELECT
		FR.PetPlaceID, PropertyID, PetPlace, Charges, Description, Type, Status, NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @PetPlaceData VD ON FR.PetPlaceID=VD.PetPlaceID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END











GO
/****** Object:  StoredProcedure [dbo].[usp_GetPromotionList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPromotionList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetPromotionList] AS' 
END
GO


ALTER PROCEDURE [dbo].[usp_GetPromotionList]
	@FromDate		datetime,
	@ToDate			datetime
AS
BEGIN

	SELECT [PromotionID]
      ,(SELECT Title FROM tbl_Properties WHERE PID=[PropertyID]) AS PropertyID
      ,[PromotionTitle]
      ,[StartDate]
      ,[EndDate]
      ,[CreatedDate]
      ,[CreatedById]
  FROM [ShomaRM].[dbo].[tbl_Promotion]
	where [StartDate] <=@FromDate AND [EndDate]>=@ToDate+'23:59:59'
END


GO
/****** Object:  StoredProcedure [dbo].[usp_GetPromotionPaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPromotionPaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetPromotionPaginationAndSearchData] AS' 
END
GO
--EXEC [usp_GetPromotionPaginationAndSearchData] 'ps 10',1,20
ALTER PROCEDURE [dbo].[usp_GetPromotionPaginationAndSearchData]
	@StartDate		DATETIME,
	@EndDate		DATETIME,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount				INT
	DECLARE	@TotalRows				BIGINT
	DECLARE @LowerLimit				BIGINT
	DECLARE	@UpperLimit				BIGINT
	DECLARE @TotalNumberOfPages		BIGINT
	DECLARE @ModValue				BIGINT
	DECLARE @PromotionData			TABLE 
	(
		PromotionID		BIGINT, 
		PropertyID		BIGINT, 
		PropertyName	VARCHAR(500),
		PromotionTitle	VARCHAR(1000), 
		StartDate		VARCHAR(10), 
		EndDate			VARCHAR(10), 
		CreatedDate		VARCHAR(10), 
		CreatedBy		VARCHAR(100),
		NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT

	INSERT INTO @PromotionData (PromotionID, PropertyID, PropertyName, PromotionTitle, StartDate, EndDate, CreatedDate, CreatedBy, NOP ) 
	SELECT PromotionID, ISNULL(S.PropertyID,0), P.Title, PromotionTitle, CONVERT(VARCHAR(10),StartDate,101), CONVERT(VARCHAR(10),EndDate,101), CONVERT(VARCHAR(10),S.CreatedDate,101), 
	ISNULL(L.FirstName,'')+' '+ISNULL(L.LastName,'') AS CreatedBy, 0
	FROM tbl_Promotion S 
	LEFT OUTER JOIN tbl_Login L ON S.CreatedById=L.UserID
	LEFT OUTER JOIN tbl_Properties P ON S.PropertyID=P.PID
	WHERE StartDate BETWEEN @StartDate AND @EndDate+' 23:59:59'
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 SET @RowCount=(SELECT COUNT(*) FROM @PromotionData)

	 IF @RowCount<@RowNumLower
	 BEGIN
		SET @RowNumLower=0
	 END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.PromotionID DESC)) AS RowNum
	FROM @PromotionData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @PromotionData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.PromotionID ASC)) AS RowNum, PromotionID
	FROM @PromotionData TD)
	SELECT
		FR.PromotionID, PropertyID, PropertyName, PromotionTitle, StartDate, EndDate, CreatedDate, CreatedBy, NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @PromotionData VD ON FR.PromotionID=VD.PromotionID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END











GO
/****** Object:  StoredProcedure [dbo].[usp_GetPropertyFloorCord]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPropertyFloorCord]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetPropertyFloorCord] AS' 
END
GO
-- EXEC [usp_GetPropertyFloorCord] 8,3,'08/19/2019'
ALTER PROCEDURE [dbo].[usp_GetPropertyFloorCord]
    @PID BIGINT,
	@Bedroom INT=0,
	@AvailableDate DATETIME
AS
BEGIN
	CREATE TABLE #TEMPFLOOR (FloorID INT,Coordinates NVARCHAR(MAX),IsAvail INT, IsProcess INT)
	
	INSERT INTO #TEMPFLOOR 
	SELECT 
		PF.FloorID, PF.Coordinates, 0, 0
	FROM  
		tbl_PropertyFloor PF 
	WHERE 
		PF.PID=@PID 


	WHILE((SELECT COUNT(*) FROM #TEMPFLOOR WHERE IsProcess=0)>0)
	BEGIN
		DECLARE @FloorID INT=0
		DECLARE @IsAval INT=0
		SET @FloorID=(SELECT TOP 1 FloorID FROM #TEMPFLOOR WHERE IsProcess=0)

		IF(@Bedroom>0)
		BEGIN
			SET @IsAval=(SELECT CASE WHEN COUNT(*)>0 THEN 1 ELSE 0 END FROM tbl_PropertyUnits PU WHERE PU.FloorNo=@FloorID AND PU.Bedroom=@BedRoom AND PU.AvailableDate<=@AvailableDate AND PU.UID NOT IN (SELECT UID FROM tbl_Lease WHERE STATUS=1))
			IF(@IsAval=0)
			BEGIN
				SET @IsAval=(SELECT CASE WHEN COUNT(*)>0 THEN 2 ELSE 0 END FROM tbl_PropertyUnits PU WHERE PU.FloorNo=@FloorID AND PU.AvailableDate<=@AvailableDate AND PU.UID NOT IN (SELECT UID FROM tbl_Lease WHERE STATUS=1))
			END
		END
		ELSE
		BEGIN
			SET @IsAval=(SELECT CASE WHEN COUNT(*)>0 THEN 1 ELSE 0 END FROM tbl_PropertyUnits PU WHERE PU.FloorNo=@FloorID AND PU.AvailableDate<=@AvailableDate AND PU.UID NOT IN (SELECT UID FROM tbl_Lease WHERE STATUS=1))
		END

		UPDATE #TEMPFLOOR SET IsAvail=@IsAval, IsProcess=1 WHERE FloorID=@FloorID
	END

--IF (@Bedroom!=0)
--BEGIN
--  INSERT INTO #TEMPUNIT 
--   SELECT  PF.FloorID,PF.Coordinates,0
--  FROM tbl_PropertyUnits PU INNER JOIN tbl_PropertyFloor PF ON PU.FloorNo=PF.FloorID
--  WHERE PU.AvailableDate<=@AvailableDate AND PU.PID=@PID  AND PU.Bedroom=@Bedroom
--  AND PU.UID IN (SELECT UID FROM tbl_Lease WHERE STATUS=1)
--END
--ELSE
--BEGIN
--  INSERT INTO #TEMPUNIT 
--   SELECT  PF.FloorID,PF.Coordinates,0
--  FROM tbl_PropertyUnits PU INNER JOIN tbl_PropertyFloor PF ON PU.FloorNo=PF.FloorID
--  WHERE PU.AvailableDate<=@AvailableDate AND PU.PID=@PID 

--END

  SELECT DISTINCT * FROM #TEMPFLOOR 

  DROP TABLE #TEMPFLOOR
END







GO
/****** Object:  StoredProcedure [dbo].[usp_GetPropertyList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPropertyList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetPropertyList] AS' 
END
GO
ALTER PROCEDURE [dbo].[usp_GetPropertyList]
	@SearchText	VARCHAR(50)=NULL,
	@City int=0
AS
BEGIN
   IF (@City=0)
	BEGIN
	SELECT	[PID]      ,[Title]      ,[Description]      ,[Status]      ,[Area]      ,[Location]      ,[LocationGoogle]       ,[NoOfUnits]      ,[NoOfFloors]     
      ,[Picture]          ,[State]      ,[City]		FROM tbl_Properties
		WHERE Title LIKE '%'+@SearchText+'%' OR @SearchText IS NULL  ORDER BY PID ASC
	END
	ELSE
	BEGIN
	SELECT	[PID]      ,[Title]      ,[Description]      ,[Status]      ,[Area]      ,[Location]      ,[LocationGoogle]       ,[NoOfUnits]      ,[NoOfFloors]     
      ,[Picture]          ,[State]      ,[City]		FROM tbl_Properties
		WHERE (Title LIKE '%'+@SearchText+'%' OR @SearchText IS NULL) AND City=@City  ORDER BY PID ASC
	END
END


GO
/****** Object:  StoredProcedure [dbo].[usp_GetPropertyPaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPropertyPaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetPropertyPaginationAndSearchData] AS' 
END
GO

--EXEC [usp_GetPropertyPaginationAndSearchData] 'te',null,null,1,20
ALTER PROCEDURE [dbo].[usp_GetPropertyPaginationAndSearchData]
	@SearchText		VARCHAR(50)=NULL,
	@State			VARCHAR(50)=NULL,
	@City			VARCHAR(50)=NULL,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE	@TotalRows	BIGINT
	DECLARE @LowerLimit	BIGINT
	DECLARE	@UpperLimit	BIGINT
	DECLARE @PageIndex	BIGINT
	DECLARE @ModValue	BIGINT

	DECLARE @PropertyData TABLE (
		PID BIGINT, Title VARCHAR(100), Description VARCHAR(MAX), [Status] VARCHAR(100), Area VARCHAR(500), Location VARCHAR(500), 
		LocationGoogle VARCHAR(500), NoOfUnits INT, NoOfFloors INT, Picture  VARCHAR(MAX), [State]  VARCHAR(100), City VARCHAR(100), NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 
	INSERT INTO @PropertyData (PID, Title, Description, Status, Area, Location, LocationGoogle, NoOfUnits, NoOfFloors, Picture, State, City, NOP ) 
	SELECT P.PID, P.Title, P.Description, P.Status, P.Area, P.Location, P.LocationGoogle ,P.NoOfUnits, P.NoOfFloors ,P.Picture ,S.StateName, C.CityName, 0 
	FROM tbl_Properties P 
	LEFT OUTER JOIN tbl_State S ON P.State=S.ID
	LEFT OUTER JOIN tbl_City C ON P.City=C.ID
	WHERE 
	(P.Title LIKE ''+@SearchText+'%' OR @SearchText IS NULL)
	AND (P.State=@State OR @State IS NULL) 
	AND (P.City=@City OR @City IS NULL)  
	ORDER BY P.Title ASC

	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.PID DESC)) AS RowNum
	FROM @PropertyData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @PageIndex=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @PageIndex=@PageIndex+1;
	END

	UPDATE @PropertyData SET NOP=@PageIndex
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.PID ASC)) AS RowNum, PID
	FROM @PropertyData TD)
	SELECT
		FR.PID, P.Title, P.Description, P.Status, P.Area, P.Location, P.LocationGoogle ,P.NoOfUnits, P.NoOfFloors, P.Picture, P.State, P.City, P.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @PropertyData P ON FR.PID=P.PID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END








GO
/****** Object:  StoredProcedure [dbo].[usp_GetPropertySearchList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPropertySearchList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetPropertySearchList] AS' 
END
GO

--EXEC [usp_GetPropertySearchList] 'te',null,null,1,20
ALTER PROCEDURE [dbo].[usp_GetPropertySearchList]
	@SearchText		VARCHAR(50)=NULL,
	@State			VARCHAR(50)=NULL,
	@City			VARCHAR(50)=NULL,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE	@TotalRows	BIGINT
	DECLARE @LowerLimit	BIGINT
	DECLARE	@UpperLimit	BIGINT
	DECLARE @PageIndex	BIGINT
	DECLARE @ModValue	BIGINT

	DECLARE @PropertyData TABLE (
		PID BIGINT, Title VARCHAR(100), Description VARCHAR(MAX), [Status] VARCHAR(100), Area VARCHAR(500), Location VARCHAR(500), 
		LocationGoogle VARCHAR(500), NoOfUnits INT, NoOfFloors INT, Picture  VARCHAR(MAX), [State]  VARCHAR(100), City VARCHAR(100), NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 
	INSERT INTO @PropertyData (PID, Title, Description, Status, Area, Location, LocationGoogle, NoOfUnits, NoOfFloors, Picture, State, City, NOP ) 
	SELECT P.PID, P.Title, P.Description, P.Status, P.Area, P.Location, P.LocationGoogle ,P.NoOfUnits, P.NoOfFloors ,P.Picture ,S.StateName, C.CityName, 0 
	FROM tbl_Properties P 
	LEFT OUTER JOIN tbl_State S ON P.State=S.ID
	LEFT OUTER JOIN tbl_City C ON P.City=C.ID
	WHERE 
	(P.Title LIKE ''+@SearchText+'%' OR @SearchText IS NULL)
	AND (P.State=@State OR @State IS NULL) 
	AND (P.City=@City OR @City IS NULL)  
	ORDER BY P.Title ASC

	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.PID DESC)) AS RowNum
	FROM @PropertyData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @PageIndex=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @PageIndex=@PageIndex+1;
	END

	UPDATE @PropertyData SET NOP=@PageIndex
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.PID ASC)) AS RowNum, PID
	FROM @PropertyData TD)
	SELECT
		FR.PID, P.Title, P.Description, P.Status, P.Area, P.Location, P.LocationGoogle ,P.NoOfUnits, P.NoOfFloors, P.Picture, P.State, P.City, P.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @PropertyData P ON FR.PID=P.PID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END







GO
/****** Object:  StoredProcedure [dbo].[usp_GetPropertyUnitDDL]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPropertyUnitDDL]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetPropertyUnitDDL] AS' 
END
GO
-- EXEC [usp_GetPropertyUnitList] 8,'',0,1
ALTER PROCEDURE [dbo].[usp_GetPropertyUnitDDL]
    @PID BIGINT
AS
BEGIN
	SELECT 
		UID,PID,UnitNo,'Floor'+CONVERT(VARCHAR(100),ISNULL(FloorNo,0))+UnitNo AS FloorNoText, ISNULL(Current_Rent,0) AS Current_Rent, ISNULL(Bathroom,0) AS Bathroom, 
		ISNULL(Bedroom,0) AS Bedroom, ISNULL(Hall,0) AS Hall, ISNULL(Area,'') AS Area, ISNULL(CONVERT(VARCHAR(10),AvailableDate,101),'') AS AvailableDate 
	FROM 
		tbl_PropertyUnits 
	WHERE  
		PID=@PID 
END





GO
/****** Object:  StoredProcedure [dbo].[usp_GetPropertyUnitList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPropertyUnitList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetPropertyUnitList] AS' 
END
GO
-- EXEC [usp_GetPropertyUnitList] 8,'',0,1
ALTER PROCEDURE [dbo].[usp_GetPropertyUnitList]
    @PID BIGINT,
	@AvailableDate		datetime,
	@FloorNo int=0,
	@Bedroom int=0,
	@Type int
AS
BEGIN
IF(@Type=1)
    BEGIN
		SELECT PU.UID,PU.PID,PU.UnitNo,PU.Wing,PU.Building     
	,PF.FloorNo ,PU.Current_Rent,PU.Deposit,PU.Leased,PU.Rooms,PU.Bedroom,PU.Bathroom,PU.Hall,PU.Area,PU.FloorPlan,PU.AvailableDate
 
 FROM tbl_PropertyUnits PU INNER JOIN tbl_PropertyFloor PF ON PU.FloorNo=PF.FloorID
  WHERE  PU.PID=@PID AND PU.UID NOT IN (SELECT UID FROM tbl_Lease WHERE STATUS=1)
  END

ELSE IF(@Type=2)
   BEGIN
		SELECT PU.UID,PU.PID,PU.UnitNo,PU.Wing,PU.Building     
	,PF.FloorNo ,PU.Current_Rent,PU.Deposit,PU.Leased,PU.Rooms,PU.Bedroom,PU.Bathroom,PU.Hall,PU.Area,PU.FloorPlan,PU.AvailableDate
 FROM tbl_PropertyUnits PU INNER JOIN tbl_PropertyFloor PF ON PU.FloorNo=PF.FloorID
  WHERE PU.AvailableDate<=@AvailableDate AND PU.PID=@PID 
  END

ELSE IF(@Type=3)
   BEGIN
		SELECT PU.UID,PU.PID,PU.UnitNo,PU.Wing,PU.Building     
	,PF.FloorNo ,PU.Current_Rent,PU.Deposit,PU.Leased,PU.Rooms,PU.Bedroom,PU.Bathroom,PU.Hall,PU.Area,PU.FloorPlan,PU.AvailableDate
 FROM tbl_PropertyUnits PU INNER JOIN tbl_PropertyFloor PF ON PU.FloorNo=PF.FloorID
  WHERE PU.AvailableDate<=@AvailableDate AND PU.PID=@PID AND PU.Bedroom=@Bedroom
  END
  ELSE IF(@Type=4)
   BEGIN
		SELECT PU.UID,PU.PID,PU.UnitNo,PU.Wing,PU.Building     
	,PF.FloorNo ,PU.Current_Rent,PU.Deposit,PU.Leased,PU.Rooms,PU.Bedroom,PU.Bathroom,PU.Hall,PU.Area,PU.FloorPlan,PU.AvailableDate
 FROM tbl_PropertyUnits PU INNER JOIN tbl_PropertyFloor PF ON PU.FloorNo=PF.FloorID
  WHERE PU.AvailableDate<=@AvailableDate AND PU.PID=@PID order by PU.Current_Rent Desc
  END
  ELSE IF(@Type=5)
   BEGIN
		SELECT PU.UID,PU.PID,PU.UnitNo,PU.Wing,PU.Building     
	,PF.FloorNo ,PU.Current_Rent,PU.Deposit,PU.Leased,PU.Rooms,PU.Bedroom,PU.Bathroom,PU.Hall,PU.Area,PU.FloorPlan,PU.AvailableDate
 FROM tbl_PropertyUnits PU INNER JOIN tbl_PropertyFloor PF ON PU.FloorNo=PF.FloorID
  WHERE PU.AvailableDate<=@AvailableDate AND PU.PID=@PID  order by PU.Current_Rent Asc
  END
  ELSE
   BEGIN
		SELECT PU.UID,PU.PID,PU.UnitNo,PU.Wing,PU.Building     
	,PF.FloorNo ,PU.Current_Rent,PU.Deposit,PU.Leased,PU.Rooms,PU.Bedroom,PU.Bathroom,PU.Hall,PU.Area,PU.FloorPlan,PU.AvailableDate
 FROM tbl_PropertyUnits PU INNER JOIN tbl_PropertyFloor PF ON PU.FloorNo=PF.FloorID
  WHERE AvailableDate<=@AvailableDate AND PU.PID=@PID 
  END
END






GO
/****** Object:  StoredProcedure [dbo].[usp_GetPropertyUnitListCord]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPropertyUnitListCord]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetPropertyUnitListCord] AS' 
END
GO
-- EXEC [usp_GetPropertyUnitListCord] 8,1,2,'09/07/2019'
ALTER PROCEDURE [dbo].[usp_GetPropertyUnitListCord]
    @PID BIGINT,
	@FloorNo int=0,
	@Bedroom int=0,
	@AvailableDate datetime
AS
BEGIN
   CREATE TABLE #TEMPUNIT (UID BIGINT,UnitNo NVARCHAR(50),FloorNo INT,Coordinates NVARCHAR(MAX),IsAvail INT, IsProcess INT)
   INSERT INTO #TEMPUNIT 
  SELECT PU.UID,PU.UnitNo,PF.FloorNo,PU.Coordinates,0,0
  FROM tbl_PropertyUnits PU INNER JOIN tbl_PropertyFloor PF ON PU.FloorNo=PF.FloorID
  WHERE PU.PID=@PID AND PU.FloorNo=@FloorNo 
 
 WHILE((SELECT COUNT(*) FROM #TEMPUNIT WHERE IsProcess=0)>0)
	BEGIN
		DECLARE @UID BIGINT=0
		DECLARE @IsAval INT=0
		SET @UID=(SELECT TOP 1 UID FROM #TEMPUNIT WHERE IsProcess=0)

		IF(@Bedroom>0)
		BEGIN
			SET @IsAval=(SELECT CASE WHEN COUNT(*)>0 THEN 1 ELSE 0 END FROM tbl_PropertyUnits PU WHERE PU.UID=@UID AND PU.Bedroom=@BedRoom AND PU.AvailableDate<=@AvailableDate AND PU.UID NOT IN (SELECT UID FROM tbl_Lease WHERE STATUS=1))
			IF(@IsAval=0)
			BEGIN
				SET @IsAval=(SELECT CASE WHEN COUNT(*)>0 THEN 2 ELSE 0 END FROM tbl_PropertyUnits PU WHERE PU.UID=@UID AND PU.AvailableDate<=@AvailableDate AND PU.UID NOT IN (SELECT UID FROM tbl_Lease WHERE STATUS=1))
			END
		END
		ELSE
		BEGIN
			SET @IsAval=(SELECT CASE WHEN COUNT(*)>0 THEN 1 ELSE 0 END FROM tbl_PropertyUnits PU WHERE PU.UID=@UID AND PU.AvailableDate<=@AvailableDate AND PU.UID NOT IN (SELECT UID FROM tbl_Lease WHERE STATUS=1))
		END

		UPDATE #TEMPUNIT SET IsAvail=@IsAval, IsProcess=1 WHERE UID=@UID
	END
 

--  IF (@Bedroom!=0)
--BEGIN
--   INSERT INTO #TEMPUNIT 
--   SELECT PU.UID,PU.UnitNo,PF.FloorNo,PU.Coordinates,0
--  FROM tbl_PropertyUnits PU INNER JOIN tbl_PropertyFloor PF ON PU.FloorNo=PF.FloorID
--  WHERE PU.AvailableDate<=@AvailableDate AND PU.PID=@PID AND PU.FloorNo=@FloorNo AND PU.Bedroom=@Bedroom
--  AND PU.UID IN (SELECT UID FROM tbl_Lease WHERE STATUS=1)

--END
--ELSE
--BEGIN
--  INSERT INTO #TEMPUNIT 
--   SELECT PU.UID,PU.UnitNo,PF.FloorNo,PU.Coordinates,0
--  FROM tbl_PropertyUnits PU INNER JOIN tbl_PropertyFloor PF ON PU.FloorNo=PF.FloorID
--  WHERE PU.AvailableDate<=@AvailableDate AND PU.PID=@PID AND PU.FloorNo=@FloorNo 
--  AND PU.UID IN (SELECT UID FROM tbl_Lease WHERE STATUS=1)

--END

  SELECT * FROM #TEMPUNIT

  DROP TABLE #TEMPUNIT
END







GO
/****** Object:  StoredProcedure [dbo].[usp_GetPropertyUnitPaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPropertyUnitPaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetPropertyUnitPaginationAndSearchData] AS' 
END
GO
--EXEC usp_GetPropertyUnitPaginationAndSearchData '',4,20
ALTER PROCEDURE [dbo].[usp_GetPropertyUnitPaginationAndSearchData]
	@PropertyID		BIGINT,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount			INT
	DECLARE	@TotalRows			BIGINT
	DECLARE @LowerLimit			BIGINT
	DECLARE	@UpperLimit			BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue			BIGINT
	DECLARE @PropertyUnitData		TABLE 
	(
		[UID] BIGINT, PID BIGINT, UnitNo VARCHAR(100), FloorNoText VARCHAR(500), Current_Rent VARCHAR(50), Bathroom VARCHAR(50), 
		Bedroom VARCHAR(50), Hall VARCHAR(50), Area VARCHAR(50), AvailableDate VARCHAR(10), NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT

	

	INSERT INTO @PropertyUnitData (UID, PID, UnitNo, FloorNoText, Current_Rent, Bathroom, Bedroom, Hall, Area, AvailableDate, NOP ) 
	SELECT 
		UID , PID, UnitNo,'Floor'+CONVERT(VARCHAR(100),ISNULL(FloorNo,0))+UnitNo AS FloorNoText, ISNULL(Current_Rent,0) AS Current_Rent, ISNULL(Bathroom,0) AS Bathroom, 
		ISNULL(Bedroom,0) AS Bedroom, ISNULL(Hall,0) AS Hall, ISNULL(Area,'') AS Area, ISNULL(CONVERT(VARCHAR(10),AvailableDate,101),'') AS AvailableDate, 0 AS NOP
	FROM 
		tbl_PropertyUnits 
	WHERE  
		PID=@PropertyID 
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 SET @RowCount=(SELECT COUNT(*) FROM @PropertyUnitData)

	 IF @RowCount<@RowNumLower
	 BEGIN
		SET @RowNumLower=0
	 END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.[UID] DESC)) AS RowNum
	FROM @PropertyUnitData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @PropertyUnitData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.[UID] ASC)) AS RowNum, [UID]
	FROM @PropertyUnitData TD)
	SELECT
		FR.[UID], PID, UnitNo, FloorNoText, Current_Rent, Bathroom, Bedroom, Hall, Area, AvailableDate, NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @PropertyUnitData VD ON FR.[UID]=VD.[UID]
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END









GO
/****** Object:  StoredProcedure [dbo].[usp_GetProspectDocumentList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetProspectDocumentList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetProspectDocumentList] AS' 
END
GO


ALTER PROCEDURE [dbo].[usp_GetProspectDocumentList]
	@ProspectID		bigint
AS
BEGIN
	SELECT [DocID]
      ,[TenantID]
	 
      ,[DocumentName]
	  ,CASE WHEN [DocumentType]=1 THEN 'Electric Bill'  WHEN [DocumentType]=2 THEN 'Green Card' WHEN [DocumentType]=3 THEN 'Driving Licence' ELSE 'Lease Agreement' END AS [DocumentType]

      ,[DocumentNumber]
      ,[UploadDate]
      ,[UploadBy]
  FROM [tbl_Document]
	WHERE TenantID=@ProspectID
END














GO
/****** Object:  StoredProcedure [dbo].[usp_GetProspectList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetProspectList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetProspectList] AS' 
END
GO
--EXEC usp_GetProspectList '06/19/2019','07/19/2019',1,20
ALTER PROCEDURE [dbo].[usp_GetProspectList]
	@FromDate		DATETIME,
	@ToDate			DATETIME,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE	@TotalRows	BIGINT
	DECLARE @LowerLimit	BIGINT
	DECLARE	@UpperLimit	BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue	BIGINT

	DECLARE @ProspectData TABLE (
		PID BIGINT, FirstName VARCHAR(100), LastName VARCHAR(100), PhoneNo VARCHAR(50), EmailId VARCHAR(255), StateName VARCHAR(500), CityName VARCHAR(500), 
		[Address] VARCHAR(500), [Message] VARCHAR(500), HavingPets VARCHAR(500), VisitDateTime DATETIME,
		LeasingAgent VARCHAR(100), MarketSource VARCHAR(100), CreatedBy VARCHAR(100), CreatedDate DATETIME, NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 
	INSERT INTO @ProspectData (PID, FirstName, LastName, PhoneNo, EmailId, StateName, CityName, [Address], [Message], HavingPets, VisitDateTime,
	LeasingAgent, MarketSource, CreatedBy, CreatedDate, NOP ) 
	SELECT P.PID, P.FirstName, P.LastName, P.PhoneNo, P.EmailId, S.StateName, C.CityName, P.[Address], P.[Message], CASE ISNULL(P.HavingPets,0) WHEN 1 THEN 'Yes' ELSE 'No' END AS HavingPets, 
	P.VisitDateTime,
	P.LeasingAgent, P.MarketSource, ISNULL(CB.FirstName,'')+' '+ISNULL(CB.LastName,'') AS CreatedBy, CONVERT(VARCHAR(10),P.CreatedDate,101) AS CreatedDate,
	0
	FROM tbl_Prospect P
	LEFT OUTER JOIN tbl_State S ON P.State=S.ID
	LEFT OUTER JOIN tbl_City C ON P.City=C.ID
	LEFT OUTER JOIN tbl_Login CB ON P.CreatedBy=CB.UserID
	WHERE P.CreatedDate BETWEEN @FromDate AND @ToDate+' 23:59:59'
	AND ISNULL(P.[Status],0)=0
	ORDER BY P.FirstName, P.LastName ASC

	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.PID DESC)) AS RowNum
	FROM @ProspectData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @ProspectData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.PID ASC)) AS RowNum, PID
	FROM @ProspectData TD)
	SELECT
		FR.PID, P.FirstName, P.LastName, P.PhoneNo, P.EmailId, StateName, CityName, P.[Address], P.[Message], HavingPets, 
		P.VisitDateTime,
		P.LeasingAgent, P.MarketSource, CreatedBy, CreatedDate, P.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @ProspectData P ON FR.PID=P.PID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END









GO
/****** Object:  StoredProcedure [dbo].[usp_GetProspectPaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetProspectPaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetProspectPaginationAndSearchData] AS' 
END
GO
--EXEC usp_GetProspectPaginationAndSearchData '06/19/2019','07/19/2019',1,20
ALTER PROCEDURE [dbo].[usp_GetProspectPaginationAndSearchData]
	@FromDate		DATETIME,
	@ToDate			DATETIME,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE	@TotalRows	BIGINT
	DECLARE @LowerLimit	BIGINT
	DECLARE	@UpperLimit	BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue	BIGINT

	DECLARE @ProspectData TABLE (
		PID BIGINT, FirstName VARCHAR(100), LastName VARCHAR(100), PhoneNo VARCHAR(50), EmailId VARCHAR(255), StateName VARCHAR(500), CityName VARCHAR(500), 
		[Address] VARCHAR(500), [Message] VARCHAR(500), HavingPets VARCHAR(500), VisitDateTime DATETIME,
		LeasingAgent VARCHAR(100), MarketSource VARCHAR(100), CreatedBy VARCHAR(100), CreatedDate DATETIME, NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 
	INSERT INTO @ProspectData (PID, FirstName, LastName, PhoneNo, EmailId, StateName, CityName, [Address], [Message], HavingPets, VisitDateTime,
	LeasingAgent, MarketSource, CreatedBy, CreatedDate, NOP ) 
	SELECT P.PID, P.FirstName, P.LastName, P.PhoneNo, P.EmailId, S.StateName, C.CityName, P.[Address], P.[Message], CASE ISNULL(P.HavingPets,0) WHEN 1 THEN 'Yes' ELSE 'No' END AS HavingPets, 
	P.VisitDateTime,
	P.LeasingAgent, P.MarketSource, ISNULL(CB.FirstName,'')+' '+ISNULL(CB.LastName,'') AS CreatedBy, CONVERT(VARCHAR(10),P.CreatedDate,101) AS CreatedDate,
	0
	FROM tbl_Prospect P
	LEFT OUTER JOIN tbl_State S ON P.State=S.ID
	LEFT OUTER JOIN tbl_City C ON P.City=C.ID
	LEFT OUTER JOIN tbl_Login CB ON P.CreatedBy=CB.UserID
	WHERE P.CreatedDate BETWEEN @FromDate AND @ToDate+' 23:59:59'
	AND ISNULL(P.[Status],0)=0
	ORDER BY P.FirstName, P.LastName ASC

	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.PID DESC)) AS RowNum
	FROM @ProspectData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @ProspectData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.PID ASC)) AS RowNum, PID
	FROM @ProspectData TD)
	SELECT
		FR.PID, P.FirstName, P.LastName, P.PhoneNo, P.EmailId, StateName, CityName, P.[Address], P.[Message], HavingPets, 
		P.VisitDateTime,
		P.LeasingAgent, P.MarketSource, CreatedBy, CreatedDate, P.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @ProspectData P ON FR.PID=P.PID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END









GO
/****** Object:  StoredProcedure [dbo].[usp_GetProspectTransactionList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetProspectTransactionList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetProspectTransactionList] AS' 
END
GO

-- EXEC [usp_GetTransactionList] '12/12/2018','12/12/2019'


ALTER PROCEDURE [dbo].[usp_GetProspectTransactionList]

	@ProspectID BIGINT
AS
BEGIN
	SELECT [TransID]    

      ,[LeaseID]
      ,[Revision_Num]
      ,[Transaction_Date]
      ,ISNULL([Run],0) AS Run
      ,CASE WHEN [Transaction_Type]=5 THEN 'Application Fees'  WHEN [Transaction_Type]=6 THEN 'Admin Fees' WHEN [Transaction_Type]=7 THEN 'Security Deposit' ELSE 'CHARGE' END AS [Transaction_Type]
      ,[Description]
      ,[Charge_Date]
      ,(SELECT  top 1 Charge_Type FROM tbl_ChargeType WHERE CTID=T.[Charge_Type]) AS Charge_Type
      ,[Reference]
      ,ISNULL([Credit_Amount],0) AS [Credit_Amount]
      ,ISNULL([Charge_Amount],0) AS [Charge_Amount]
	  ,[TBankName]
      ,[CreatedDate]
    
  FROM  [tbl_Transaction] T
  WHERE  ProspectID=@ProspectID
END








GO
/****** Object:  StoredProcedure [dbo].[usp_GetProspectVerificationList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetProspectVerificationList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetProspectVerificationList] AS' 
END
GO
--EXEC usp_GetProspectVerificationList '06/10/2019','07/11/2019'
ALTER PROCEDURE [dbo].[usp_GetProspectVerificationList]
	@FromDate		datetime,
	@ToDate	datetime
AS
BEGIN
	SELECT AN.ID,AN.UserID, ISNULL(DV.DocID,0) AS DocID, AN.FirstName, AN.LastName, AN.Phone, AN.Email, ISNULL(DV.DocumentType,0) AS DocumentType, 
	ISNULL(DV.DocumentName,'') AS DocumentName, ISNULL(DV.VerificationStatus,0) AS VerificationStatus  
	FROM tbl_ApplyNow AN LEFT OUTER JOIN tbl_DocumentVerification DV ON AN.ID=DV.ProspectusID
	WHERE AN.CreatedDate>=@FromDate AND AN.CreatedDate<=@ToDate AND AN.IsApplyNow!=3
END








GO
/****** Object:  StoredProcedure [dbo].[usp_GetProspectVerifyPaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetProspectVerifyPaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetProspectVerifyPaginationAndSearchData] AS' 
END
GO
--EXEC usp_GetProspectVerifyPaginationAndSearchData '06/01/2019','07/31/2019',1,20
ALTER PROCEDURE [dbo].[usp_GetProspectVerifyPaginationAndSearchData]
	@FromDate		DATETIME,
	@ToDate			DATETIME,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount			INT
	DECLARE	@TotalRows			BIGINT
	DECLARE @LowerLimit			BIGINT
	DECLARE	@UpperLimit			BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue			BIGINT
	DECLARE @PropsectVerificationData		TABLE 
	(
		ID BIGINT,UserID BIGINT, DocID BIGINT, FirstName VARCHAR(100), LastName VARCHAR(100), Phone VARCHAR(100), Email  VARCHAR(100), DocumentType VARCHAR(100), 
		DocumentName VARCHAR(100), VerificationStatus VARCHAR(100), NOP INT 
		
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT


	INSERT INTO @PropsectVerificationData (ID,UserID, DocID, FirstName, LastName, Phone, Email, DocumentType, DocumentName, VerificationStatus, NOP ) 
	SELECT AN.ID,AN.UserID, ISNULL(DV.DocID,0) AS DocID, AN.FirstName, AN.LastName, AN.Phone, AN.Email, 
	CASE ISNULL(DV.DocumentType,0) WHEN 1 THEN 'Driving Licence' WHEN 2 THEN 'SSN' WHEN 3 THEN 'PAN' WHEN 4 THEN 'Passport' ELSE '' END AS DocumentType,
	ISNULL(DV.DocumentName,'') AS DocumentName, ISNULL(DV.VerificationStatus,0) AS VerificationStatus, 0 AS NOP  
	FROM tbl_ApplyNow AN 
	LEFT OUTER JOIN tbl_DocumentVerification DV ON AN.ID=DV.ProspectusID
	WHERE AN.CreatedDate BETWEEN @FromDate AND @ToDate+' 23:59:59'
	AND AN.IsApplyNow!=3
	ORDER BY AN.FirstName, AN.LastName ASC
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	SET @RowCount=(SELECT COUNT(*) FROM @PropsectVerificationData)

	IF @RowCount<@RowNumLower
	BEGIN
	SET @RowNumLower=0
	END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.ID DESC)) AS RowNum
	FROM @PropsectVerificationData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;
	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @PropsectVerificationData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.FirstName, TD.LastName, TD.ID ASC)) AS RowNum, ID
	FROM @PropsectVerificationData TD)
	SELECT
		FR.ID,PVD.UserID, PVD.DocID, PVD.FirstName, PVD.LastName, PVD.Phone, PVD.Email, PVD.DocumentType, PVD.DocumentName, PVD.VerificationStatus, PVD.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @PropsectVerificationData PVD ON FR.ID=PVD.ID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END









GO
/****** Object:  StoredProcedure [dbo].[usp_GetPurchaseOrderList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPurchaseOrderList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetPurchaseOrderList] AS' 
END
GO


ALTER PROCEDURE [dbo].[usp_GetPurchaseOrderList]
	@FromDate		datetime,
	@ToDate	datetime
AS
BEGIN
	SELECT [POID]
      ,(select Title from [tbl_Properties] where PID = [PropertyID]) as PropertyID
      ,[OrderNumber]
      ,(select Vendor_Name from tbl_Vendor where Vendor_ID = [Vendor]) as [Vendor]
      ,[PODesc]
      ,[PODate]
      ,[TotalAmount]
      ,[Route]
      ,[ApprovedDate]
      ,[ApprovedBy]
      ,[CanceledDate]
      ,[CanceledBy]
      ,[CreatedBy]
      ,[CreatedDate]
  FROM [ShomaRM].[dbo].[tbl_PurchaseOrder]
	WHERE [CreatedDate] >=@FromDate AND [CreatedDate]<=@ToDate+'23:59:59'
END














GO
/****** Object:  StoredProcedure [dbo].[usp_GetPurchaseOrderPaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetPurchaseOrderPaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetPurchaseOrderPaginationAndSearchData] AS' 
END
GO
--EXEC usp_GetPurchaseOrderPaginationAndSearchData '06/01/2019','07/31/2019',1,20
ALTER PROCEDURE [dbo].[usp_GetPurchaseOrderPaginationAndSearchData]
	@FromDate		DATETIME,
	@ToDate			DATETIME,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount			INT
	DECLARE	@TotalRows			BIGINT
	DECLARE @LowerLimit			BIGINT
	DECLARE	@UpperLimit			BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue			BIGINT
	DECLARE @PurchaseOrderData		TABLE 
	(
		POID BIGINT, PropertyID VARCHAR(100), OrderNumber VARCHAR(100), Vendor VARCHAR(100), PODesc VARCHAR(1000), PODate VARCHAR(10),
		TotalAmount MONEY, Route VARCHAR(100), ApprovedDate VARCHAR(10), ApprovedBy  VARCHAR(100), CanceledDate VARCHAR(10), 
		CanceledBy VARCHAR(100), CreatedBy VARCHAR(100), CreatedDate VARCHAR(10), NOP INT 
	)

	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT
	
	INSERT INTO @PurchaseOrderData (POID, PropertyID, OrderNumber, Vendor, PODesc, PODate, TotalAmount, Route, ApprovedDate, ApprovedBy, CanceledDate, CanceledBy, CreatedBy, CreatedDate, NOP ) 

	SELECT PO.POID, P.Title AS PropertyID, PO.OrderNumber, V.Vendor_Name AS Vendor, PO.PODesc, CONVERT(VARCHAR(10),PO.PODate,101), ISNULL(PO.TotalAmount,0), ISNULL(PO.Route,0), CONVERT(VARCHAR(10),PO.ApprovedDate,101) AS ApprovedDate, 
	PO.ApprovedBy, CONVERT(VARCHAR(10),PO.CanceledDate,101), PO.CanceledBy, PO.CreatedBy, CONVERT(VARCHAR(10),PO.CreatedDate,101) AS CreatedDate, 0 AS NOP
	FROM tbl_PurchaseOrder PO
	LEFT OUTER JOIN tbl_Properties P ON PO.PropertyID=P.PID
	LEFT OUTER JOIN tbl_Vendor V ON PO.Vendor=V.Vendor_ID
	WHERE PO.CreatedDate BETWEEN @FromDate AND @ToDate+' 23:59:59'
	ORDER BY PO.CreatedDate DESC
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 SET @RowCount=(SELECT COUNT(*) FROM @PurchaseOrderData)

	 IF @RowCount<@RowNumLower
	 BEGIN
		SET @RowNumLower=0
	 END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.POID DESC)) AS RowNum
	FROM @PurchaseOrderData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;
	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @PurchaseOrderData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.POID ASC)) AS RowNum, POID
	FROM @PurchaseOrderData TD)
	SELECT
		FR.POID, PO.PropertyID, PO.OrderNumber, PO.Vendor, PO.PODesc, PO.PODate, PO.TotalAmount, PO.Route, PO.ApprovedDate, PO.ApprovedBy, PO.CanceledDate, PO.CanceledBy, PO.CreatedBy, PO.CreatedDate, PO.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @PurchaseOrderData PO ON FR.POID=PO.POID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END









GO
/****** Object:  StoredProcedure [dbo].[usp_GetSalesAgentList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetSalesAgentList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetSalesAgentList] AS' 
END
GO

--EXEC usp_GetSalesAgentList '',''
ALTER PROCEDURE [dbo].[usp_GetSalesAgentList]
	@FirstName	VARCHAR(100)=NULL,
	@LastName	VARCHAR(100)=NULL,
	@FromDate	DATETIME=NULL,
	@ToDate		DATETIME=NULL
AS
BEGIN
	SELECT SA.AgentID
      ,FirstName
      ,LastName
      ,Mobile
      ,Email
      ,Address
      ,S.StateName AS State
      ,C.CityName AS City
      ,P.Title AS PID
      ,Designation
      ,Photo
	  FROM tbl_SalesAgent SA
	  LEFT OUTER JOIN tbl_State S ON SA.[State]=S.ID
	  LEFT OUTER JOIN tbl_City C ON SA.[City]=C.ID
	  LEFT OUTER JOIN tbl_Properties P ON SA.PID=P.PID
	  --WHERE SA.FirstName LIKE '%'+@FirstName+'%' OR @FirstName IS NULL
	  --AND SA.LastName LIKE '%'+@LastName+'%' OR @LastName IS NULL
END







GO
/****** Object:  StoredProcedure [dbo].[usp_GetStateList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetStateList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetStateList] AS' 
END
GO
--EXEC [usp_GetStateList] 'a',1,20
ALTER PROCEDURE [dbo].[usp_GetStateList]
	@Criteria		VARCHAR(50)=NULL,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount			INT
	DECLARE	@TotalRows			BIGINT
	DECLARE @LowerLimit			BIGINT
	DECLARE	@UpperLimit			BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue			BIGINT
	DECLARE @StateData			TABLE 
	(
		ID BIGINT, StateName VARCHAR(500), Abbreviation VARCHAR(500), NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT

	INSERT INTO @StateData (ID, StateName, Abbreviation, NOP ) 
	SELECT S.ID, S.StateName, S.Abbreviation, 0
	FROM tbl_State S 
	WHERE StateName LIKE ''+@Criteria+'%' OR @Criteria IS NULL ORDER BY S.StateName
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 SET @RowCount=(SELECT COUNT(*) FROM @StateData)

	 IF @RowCount<@RowNumLower
	 BEGIN
		SET @RowNumLower=0
	 END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.ID DESC)) AS RowNum
	FROM @StateData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @StateData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.ID ASC)) AS RowNum, ID
	FROM @StateData TD)
	SELECT
		FR.ID, VD.Abbreviation, VD.StateName, VD.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @StateData VD ON FR.ID=VD.ID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END









GO
/****** Object:  StoredProcedure [dbo].[usp_GetStatePaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetStatePaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetStatePaginationAndSearchData] AS' 
END
GO
--EXEC [usp_GetStateList] 'a',1,20
ALTER PROCEDURE [dbo].[usp_GetStatePaginationAndSearchData]
	@Criteria		VARCHAR(50)=NULL,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount			INT
	DECLARE	@TotalRows			BIGINT
	DECLARE @LowerLimit			BIGINT
	DECLARE	@UpperLimit			BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue			BIGINT
	DECLARE @StateData			TABLE 
	(
		ID BIGINT, StateName VARCHAR(500), Abbreviation VARCHAR(500), NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT

	INSERT INTO @StateData (ID, StateName, Abbreviation, NOP ) 
	SELECT S.ID, S.StateName, S.Abbreviation, 0
	FROM tbl_State S 
	WHERE StateName LIKE ''+@Criteria+'%' OR @Criteria IS NULL ORDER BY S.StateName
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 SET @RowCount=(SELECT COUNT(*) FROM @StateData)

	 IF @RowCount<@RowNumLower
	 BEGIN
		SET @RowNumLower=0
	 END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.ID DESC)) AS RowNum
	FROM @StateData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @StateData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.ID ASC)) AS RowNum, ID
	FROM @StateData TD)
	SELECT
		FR.ID, VD.Abbreviation, VD.StateName, VD.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @StateData VD ON FR.ID=VD.ID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END









GO
/****** Object:  StoredProcedure [dbo].[usp_GetStoragePaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetStoragePaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetStoragePaginationAndSearchData] AS' 
END
GO
--EXEC [usp_GetStoragePaginationAndSearchData] 'p',1,20
ALTER PROCEDURE [dbo].[usp_GetStoragePaginationAndSearchData]
	@Criteria		VARCHAR(50)=NULL,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount				INT
	DECLARE	@TotalRows				BIGINT
	DECLARE @LowerLimit				BIGINT
	DECLARE	@UpperLimit				BIGINT
	DECLARE @TotalNumberOfPages		BIGINT
	DECLARE @ModValue				BIGINT
	DECLARE @StorageData			TABLE 
	(
		StorageID BIGINT, 
		PropertyID BIGINT,
		StorageName VARCHAR(500), 
		Charges DECIMAL(18,2), 
		Description VARCHAR(MAX), 
		Type VARCHAR(500), 
		Status VARCHAR(500), 
		NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT

	INSERT INTO @StorageData (StorageID, PropertyID, StorageName, Charges, Description, Type, Status, NOP ) 
	SELECT StorageID, PropertyID, StorageName, ISNULL(Charges,0), Description, ISNULL(Type,0), ISNULL(Status,0), 0
	FROM tbl_Storage S 
	WHERE StorageName LIKE ''+@Criteria+'%' OR @Criteria IS NULL ORDER BY S.StorageName
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 SET @RowCount=(SELECT COUNT(*) FROM @StorageData)

	 IF @RowCount<@RowNumLower
	 BEGIN
		SET @RowNumLower=0
	 END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.StorageID DESC)) AS RowNum
	FROM @StorageData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @StorageData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.StorageID ASC)) AS RowNum, StorageID
	FROM @StorageData TD)
	SELECT
		FR.StorageID, PropertyID, StorageName, Charges, Description, Type, Status, NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @StorageData VD ON FR.StorageID=VD.StorageID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END











GO
/****** Object:  StoredProcedure [dbo].[usp_GetTenantInfoData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetTenantInfoData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetTenantInfoData] AS' 
END
GO




ALTER procedure [dbo].[usp_GetTenantInfoData]
	@id bigint 
as
begin
SELECT [TenantID]
      ,[ProspectID]
      ,[FirstName]
      ,[MiddleInitial]
      ,[LastName]
      ,[DateOfBirth]
      ,ISNULL([Gender],0) as [Gender]
      ,[Email]
      ,[Mobile]
      ,[PassportNumber]
      ,[CountryIssuance]
      ,[DateIssuance]
      ,[DateExpire]
	  ,ISNULL([IDType],0) as [IDType]
	  ,ISNULL([State],0) as [State]
	  ,ISNULL([IDNumber],0) as [IDNumber]
      ,[Country]
      ,[HomeAddress1]
      ,[HomeAddress2]
	  ,ISNULL([StateHome],0) as [StateHome]
      ,[CityHome]
      ,[ZipHome]
	  ,ISNULL([RentOwn],0) as [RentOwn]
      ,[MoveInDate]
      ,[MonthlyPayment]
      ,[Reason]
      ,[EmployerName]
      ,[JobTitle]
	  ,ISNULL([JobType],0) as [JobType]
      ,[StartDate]
	  ,ISNULL([Income],0.00) as [Income]
	  ,ISNULL([AdditionalIncome],0.00) as [AdditionalIncome]
      ,[SupervisorName]
      ,[SupervisorPhone]
      ,[SupervisorEmail]
      ,[OfficeCountry]
      ,[OfficeAddress1]
      ,[OfficeAddress2]
	  ,ISNULL([OfficeState],0) as [OfficeState]
      ,[OfficeCity]
      ,[OfficeZip]
      ,[Relationship]
      ,[EmergencyFirstName]
      ,[EmergencyLastName]
      ,[EmergencyMobile]
      ,[EmergencyHomePhone]
      ,[EmergencyWorkPhone]
      ,[EmergencyEmail]
      ,[EmergencyCountry]
      ,[EmergencyAddress1]
      ,[EmergencyAddress2]
	  ,ISNULL([EmergencyStateHome],0) as [EmergencyStateHome]
      ,[EmergencyCityHome]
      ,[EmergencyZipHome]
      ,[CreatedDate]
	   ,[IsInternational]
  FROM [tbl_TenantInfo]
  where TenantID = @id
end;


GO
/****** Object:  StoredProcedure [dbo].[usp_GetTenantList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetTenantList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetTenantList] AS' 
END
GO
--EXEC [usp_GetTenantList] 1,''
ALTER PROCEDURE [dbo].[usp_GetTenantList]
	@FromDate		datetime,
	@ToDate	datetime
AS
BEGIN
	SELECT T.TenantID, FirstName, LastName
	FROM tbl_TenantInfo T 
	--LEFT OUTER JOIN tbl_Properties P ON T.PropertyID=P.PID
	--LEFT OUTER JOIN tbl_PropertyUnits U ON T.UnitID=U.[UID]
	WHERE  T.CreatedDate >=@FromDate AND T.CreatedDate<=@ToDate+'23:59:59'
END





GO
/****** Object:  StoredProcedure [dbo].[usp_GetTenantNoticeList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetTenantNoticeList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetTenantNoticeList] AS' 
END
GO

ALTER PROCEDURE [dbo].[usp_GetTenantNoticeList]
	@FromDate		datetime,
	@ToDate	datetime,
	@TenantID bigint
AS
BEGIN
	SELECT [NoticeID]
    
       ,[LeaseID]
      ,[Revision_Num]
      ,[NoticeDate]
      ,[IntendedMoveOut]
      ,[TerminationReason]
      ,[CancelNoticeDate]
  FROM dbo.tbl_Notice
  where [NoticeDate] >=@FromDate AND [NoticeDate]<=@ToDate+'23:59:59' AND [TID]=@TenantID
END






GO
/****** Object:  StoredProcedure [dbo].[usp_GetTenantOnlineData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetTenantOnlineData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetTenantOnlineData] AS' 
END
GO


ALTER procedure [dbo].[usp_GetTenantOnlineData]
	@id bigint 
as
begin
SELECT [ID]
       ,[ProspectID]
      ,[FirstName]
      ,[MiddleInitial]
      ,[LastName]
      ,[DateOfBirth]
      ,ISNULL([Gender],0) as [Gender]
      ,[Email]
      ,[Mobile]
      ,[PassportNumber]
      ,[CountryIssuance]
      ,[DateIssuance]
      ,[DateExpire]
	  ,ISNULL([IDType],0) as [IDType]
	  ,ISNULL([State],0) as [State]
	  ,ISNULL([IDNumber],0) as [IDNumber]
      ,[Country]
      ,[HomeAddress1]
      ,[HomeAddress2]
	  ,ISNULL([StateHome],0) as [StateHome]
      ,[CityHome]
      ,[ZipHome]
	  ,ISNULL([RentOwn],0) as [RentOwn]
      ,[MoveInDate]
      ,[MonthlyPayment]
      ,[Reason]
      ,[EmployerName]
      ,[JobTitle]
	  ,ISNULL([JobType],0) as [JobType]
      ,[StartDate]
	  ,ISNULL([Income],0.00) as [Income]
	  ,ISNULL([AdditionalIncome],0.00) as [AdditionalIncome]
      ,[SupervisorName]
      ,[SupervisorPhone]
      ,[SupervisorEmail]
      ,[OfficeCountry]
      ,[OfficeAddress1]
      ,[OfficeAddress2]
	  ,ISNULL([OfficeState],0) as [OfficeState]
      ,[OfficeCity]
      ,[OfficeZip]
      ,[Relationship]
      ,[EmergencyFirstName]
      ,[EmergencyLastName]
      ,[EmergencyMobile]
      ,[EmergencyHomePhone]
      ,[EmergencyWorkPhone]
      ,[EmergencyEmail]
      ,[EmergencyCountry]
      ,[EmergencyAddress1]
      ,[EmergencyAddress2]
	  ,ISNULL([EmergencyStateHome],0) as [EmergencyStateHome]
      ,[EmergencyCityHome]
      ,[EmergencyZipHome]
      ,[CreatedDate]
	  ,[IsInternational]
	  ,ISNULL([OtherGender],'') as [OtherGender]
  FROM [tbl_TenantOnline]
  where ProspectID = @id
end;

GO
/****** Object:  StoredProcedure [dbo].[usp_GetTenantPaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetTenantPaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetTenantPaginationAndSearchData] AS' 
END
GO

ALTER PROCEDURE [dbo].[usp_GetTenantPaginationAndSearchData]
	@PageNumber			INT,
	@NumberOfRows		INT,
	@FromDate			DATETIME,
	@ToDate				DATETIME,
	@FirstName			VARCHAR(100),
    @LastName			VARCHAR(100),
    @Gender				INT,
    @MaritalStatus		INT,
    @State				INT,
    @City				INT,
    @PropertyID			INT,
    @UnitID				INT,
    @SocialSecurityNum	VARCHAR(100),
    @Occupation			VARCHAR(100),
    @OfficeState		INT,
    @OfficeCity			INT
AS
BEGIN
	IF @Gender=0
	BEGIN
		SET @Gender=NULL
	END
	IF @MaritalStatus=0
	BEGIN
		SET @MaritalStatus=NULL
	END
	IF @State=0
	BEGIN
		SET @State=NULL
	END
	IF @City=0
	BEGIN
		SET @City=NULL
	END
	IF @PropertyID=0
	BEGIN
		SET @PropertyID=NULL
	END
	IF @UnitID=0
	BEGIN
		SET @UnitID=NULL
	END
	IF @OfficeState=0
	BEGIN
		SET @OfficeState=NULL
	END
	IF @OfficeCity=0
	BEGIN
		SET @OfficeCity=NULL
	END

	DECLARE	@TotalRows	BIGINT
	DECLARE @LowerLimit	BIGINT
	DECLARE	@UpperLimit	BIGINT
	DECLARE @PageIndex	BIGINT
	DECLARE @ModValue	BIGINT

	DECLARE @TenantData TABLE (TenantID BIGINT, FirstName VARCHAR(500), LastName VARCHAR(500), Property VARCHAR(500), UnitNo VARCHAR(500), NOP INT )
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 
	INSERT INTO @TenantData (TenantID, FirstName, LastName, Property, UnitNo) 
	SELECT T.ID AS TenantID, T.FirstName, T.LastName, P.Title AS Property, U.UnitNo
	FROM tbl_Tenant T 
	LEFT OUTER JOIN tbl_Properties P ON T.PropertyID=P.PID
	LEFT OUTER JOIN tbl_PropertyUnits U ON T.UnitID=U.[UID]
	WHERE T.CreatedDate >=@FromDate AND T.CreatedDate<=@ToDate+' 23:59:59'
	AND ISNULL(T.FirstName,'') LIKE CASE WHEN LEN(@FirstName) > 0 THEN '%'+CONVERT(VARCHAR(100),@FirstName)+'%' ELSE '%%' END
	AND ISNULL(T.LastName,'') LIKE CASE WHEN LEN(@LastName) > 0 THEN '%'+CONVERT(VARCHAR(100),@LastName)+'%' ELSE '%%' END
	AND (T.Gender=ISNULL(@Gender,0) OR @Gender IS NULL)
	AND (T.MaritalStatus=ISNULL(@MaritalStatus,0) OR @MaritalStatus IS NULL)
	AND (T.[State]=ISNULL(@State,0) OR @State IS NULL)
	AND (T.City=ISNULL(@City,0) OR @City IS NULL)
	AND (T.[OfficeState]=ISNULL(@OfficeState,0) OR @OfficeState IS NULL)
	AND (T.OfficeCity=ISNULL(@OfficeCity,0) OR @OfficeCity IS NULL)
	AND (T.PropertyID=ISNULL(@PropertyID,0) OR @PropertyID IS NULL)
	AND (T.UnitID=ISNULL(@UnitID,0) OR @UnitID IS NULL)
	AND ISNULL(T.Occupation,'') LIKE CASE WHEN LEN(@Occupation) > 0 THEN '%'+CONVERT(VARCHAR(100),@Occupation)+'%' ELSE '%%' END
	AND ISNULL(T.SocialSecurityNum,'') LIKE CASE WHEN LEN(@SocialSecurityNum) > 0 THEN '%'+CONVERT(VARCHAR(100),@SocialSecurityNum)+'%' ELSE '%%' END

	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.TenantID DESC)) AS RowNum
	FROM @TenantData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @PageIndex=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @PageIndex=@PageIndex+1;
	END

	UPDATE @TenantData SET NOP=@PageIndex
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.FirstName+' '+TD.LastName ASC)) AS RowNum, TenantID
	FROM @TenantData TD)
	SELECT
		FR.TenantID, T.FirstName, T.LastName, T.Property, T.UnitNo, NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @TenantData T ON FR.TenantID=T.TenantID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END





GO
/****** Object:  StoredProcedure [dbo].[usp_GetTenantTransactionList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetTenantTransactionList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetTenantTransactionList] AS' 
END
GO

-- EXEC [usp_GetTransactionList] '12/12/2018','12/12/2019'


ALTER PROCEDURE [dbo].[usp_GetTenantTransactionList]
	@FromDate		datetime,
	@ToDate	datetime,
	@TenantID BIGINT
AS
BEGIN
	SELECT [TransID]    
      ,(SELECT  top 1 (FirstName+' ' + LastName) as Name FROM tbl_Tenant WHERE ID=[TenantID]) AS TenantID
      ,[LeaseID]
      ,[Revision_Num]
      ,[Transaction_Date]
      ,ISNULL([Run],0) AS Run
      ,CASE WHEN [Transaction_Type]=1 THEN 'CREDIT'  WHEN [Transaction_Type]=1 THEN 'DEBIT' WHEN [Transaction_Type]=1 THEN 'REFUND' ELSE 'DEPOSIT' END AS [Transaction_Type]
      ,[Description]
      ,[Charge_Date]
      ,(SELECT  top 1 Charge_Type FROM tbl_ChargeType WHERE CTID=T.[Charge_Type]) AS Charge_Type
      ,[Reference]
      ,ISNULL([Credit_Amount],0) AS [Credit_Amount]
      ,ISNULL([Charge_Amount],0) AS [Charge_Amount]
  
      ,(SELECT  top 1 (FirstName +' ' +LastName) as Name FROM tbl_Login WHERE UserID=[CreatedBy]) AS CreatedByText
      ,[CreatedDate]
    
  FROM [ShomaRM].[dbo].[tbl_Transaction] T
  WHERE  [Transaction_Date]>=@FromDate AND [Transaction_Date]<=@ToDate+'23:59:59' AND TenantID=@TenantID
END








GO
/****** Object:  StoredProcedure [dbo].[usp_GetTransactionList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetTransactionList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetTransactionList] AS' 
END
GO

-- EXEC [usp_GetTransactionList] '12/12/2018','12/12/2019'


ALTER PROCEDURE [dbo].[usp_GetTransactionList]
	@FromDate		datetime,
	@ToDate	datetime
AS
BEGIN
	SELECT [TransID]    
      ,(SELECT  top 1 (FirstName+' ' + LastName) as Name FROM tbl_Tenant WHERE ID=[TenantID]) AS TenantID
      ,[LeaseID]
      ,[Revision_Num]
      ,[Transaction_Date]
      ,ISNULL([Run],0) AS Run
      ,CASE WHEN [Transaction_Type]=1 THEN 'CREDIT'  WHEN [Transaction_Type]=1 THEN 'DEBIT' WHEN [Transaction_Type]=1 THEN 'REFUND' ELSE 'DEPOSIT' END AS [Transaction_Type]
      ,[Description]
      ,[Charge_Date]
      ,(SELECT  top 1 Charge_Type FROM tbl_ChargeType WHERE CTID=T.[Charge_Type]) AS Charge_Type
      ,[Reference]
      ,ISNULL([Credit_Amount],0) AS [Credit_Amount]
      ,ISNULL([Charge_Amount],0) AS [Charge_Amount]
  
      ,(SELECT  top 1 (FirstName +' ' +LastName) as Name FROM tbl_Login WHERE UserID=[CreatedBy]) AS CreatedByText
      ,[CreatedDate]
    
  FROM [ShomaRM].[dbo].[tbl_Transaction] T
  WHERE  [Transaction_Date]>=@FromDate AND [Transaction_Date]<=@ToDate+'23:59:59'
END








GO
/****** Object:  StoredProcedure [dbo].[usp_GetTransactionPaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetTransactionPaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetTransactionPaginationAndSearchData] AS' 
END
GO
--EXEC usp_GetTransactionPaginationAndSearchData '06/19/2019','07/19/2019',1,25
ALTER PROCEDURE [dbo].[usp_GetTransactionPaginationAndSearchData]
	@FromDate		DATETIME,
	@ToDate			DATETIME,
	@PageNumber		INT=NULL,
	@NumberOfRows	INT=NULL
AS
BEGIN
	DECLARE	@TotalRows	BIGINT
	DECLARE @LowerLimit	BIGINT
	DECLARE	@UpperLimit	BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue	BIGINT

	DECLARE @TransactionData TABLE (
	TransID BIGINT, TenantID VARCHAR(100), LeaseID VARCHAR(100), Revision_Num VARCHAR(50), Transaction_Date DATETIME, Run INT, Transaction_Type VARCHAR(50), 
	[Description] VARCHAR(500), Charge_Date DATETIME, Charge_Type VARCHAR(500), Reference VARCHAR(100),
	Credit_Amount MONEY, Charge_Amount MONEY, CreatedByText VARCHAR(100), CreatedDate DATETIME, NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 
	INSERT INTO @TransactionData (TransID, TenantID, LeaseID, Revision_Num, Transaction_Date, Run, Transaction_Type, Description, 
	Charge_Date, Charge_Type, Reference, Credit_Amount, Charge_Amount, CreatedByText, CreatedDate, NOP ) 
	SELECT Trans.TransID, ISNULL(T.FirstName,'') +' ' +ISNULL(T.LastName,'') AS TenantID, ISNULL(Le.Term,0) AS LeaseID, Trans.Revision_Num, CONVERT(VARCHAR(10),Trans.CreatedDate,101) AS Transaction_Date
	,ISNULL(Trans.Run,0) AS Run, CASE Trans.Transaction_Type WHEN 1 THEN 'CREDIT' WHEN 2 THEN 'DEBIT' WHEN 3 THEN 'REFUND' ELSE 'DEPOSIT' END AS Transaction_Type
	,Trans.Description, Trans.Charge_Date, CT.Charge_Type, Trans.Reference, ISNULL(Trans.Credit_Amount,0) AS Credit_Amount, ISNULL(Trans.Charge_Amount,0) AS Charge_Amount
	,ISNULL(L.FirstName,'') +' ' +ISNULL(L.LastName,'') AS CreatedByText, CONVERT(VARCHAR(10),Trans.CreatedDate,101) AS CreatedDate, 0 AS NOP
	FROM tbl_Transaction Trans
	LEFT OUTER JOIN tbl_Tenant T ON Trans.TenantID=T.ID
	LEFT OUTER JOIN tbl_Login L ON Trans.CreatedBy=L.UserID
	LEFT OUTER JOIN tbl_ChargeType CT ON Trans.Charge_Type=CT.CTID
	LEFT OUTER JOIN tbl_Lease Le ON Trans.LeaseID=Le.LID
	WHERE Trans.CreatedDate BETWEEN @FromDate AND @ToDate+' 23:59:59'
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.TransID DESC)) AS RowNum
	FROM @TransactionData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @TransactionData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.TransID ASC)) AS RowNum, TransID
	FROM @TransactionData TD)
	SELECT
		FR.TransID, TD.TenantID, TD.LeaseID, TD.Revision_Num, TD.Transaction_Date, TD.Run, TD.Transaction_Type, TD.Description, 
		TD.Charge_Date, TD.Charge_Type, TD.Reference, TD.Credit_Amount, TD.Charge_Amount, TD.CreatedByText, TD.CreatedDate, ISNULL(TD.NOP,0) AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @TransactionData TD ON FR.TransID=TD.TransID
	WHERE 
		(RowNum>=@RowNumLower OR @RowNumLower IS NULL) AND (RowNum<=@RowNumUpper OR @RowNumUpper IS NULL) 
	ORDER BY 
		RowNum
	;
END









GO
/****** Object:  StoredProcedure [dbo].[usp_GetUserListByType]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetUserListByType]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetUserListByType] AS' 
END
GO
ALTER PROCEDURE [dbo].[usp_GetUserListByType]
	@UserType int
AS
BEGIN
	SELECT UserID, FirstName, LastName, Username, Password, ISNULL(TenantID,0) AS TenantID,
	CASE IsActive WHEN 1 THEN 'Active' ELSE 'Inactive' END AS [Status]
	FROM tbl_Login WHERE UserType=@UserType ORDER BY FirstName, LastName
END







GO
/****** Object:  StoredProcedure [dbo].[usp_GetUserPaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetUserPaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetUserPaginationAndSearchData] AS' 
END
GO
--EXEC usp_GetUserPaginationAndSearchData '06/01/2019','07/31/2019',1,20
ALTER PROCEDURE [dbo].[usp_GetUserPaginationAndSearchData]
	@Filter			VARCHAR(100),
	@Criteria		VARCHAR(100),
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount			INT
	DECLARE	@TotalRows			BIGINT
	DECLARE @LowerLimit			BIGINT
	DECLARE	@UpperLimit			BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue			BIGINT
	DECLARE @UserData			TABLE 
	(
		UserID BIGINT, FirstName VARCHAR(100), LastName VARCHAR(100), Username VARCHAR(100), [Status]  VARCHAR(100), NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT


	INSERT INTO @UserData (UserID, FirstName, LastName, Username, [Status], NOP ) 
	SELECT UserID, FirstName, LastName, Username, CASE IsActive WHEN 1 THEN 'Active' ELSE 'Inactive' END AS [Status], 0 AS NOP 
	FROM tbl_Login
	WHERE (FirstName LIKE CASE @Filter WHEN 'FirstName' THEN ''+@Criteria+'%' END 
	OR LastName LIKE CASE @Filter WHEN 'LastName' THEN ''+@Criteria+'%' END
	OR Username LIKE CASE @Filter WHEN 'Username' THEN ''+@Criteria+'%' END)
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	SET @RowCount=(SELECT COUNT(*) FROM @UserData)

	IF @RowCount<@RowNumLower
	BEGIN
	SET @RowNumLower=0
	END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.UserID DESC)) AS RowNum
	FROM @UserData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;
	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @UserData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.FirstName, TD.LastName, TD.UserID ASC)) AS RowNum, UserID
	FROM @UserData TD)
	SELECT
		FR.UserID, FirstName, LastName, Username, [Status], NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @UserData UD ON FR.UserID=UD.UserID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END









GO
/****** Object:  StoredProcedure [dbo].[usp_GetUsersList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetUsersList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetUsersList] AS' 
END
GO
ALTER PROCEDURE [dbo].[usp_GetUsersList]
	@Filter		VARCHAR(50),
	@Criteria	VARCHAR(50)=NULL
AS
BEGIN
	SELECT UserID, FirstName, LastName, Username, Password, ISNULL(TenantID,0) AS TenantID,
	CASE IsActive WHEN 1 THEN 'Active' ELSE 'Inactive' END AS [Status]
	FROM tbl_Login WHERE FirstName LIKE '%'+@Criteria+'%' OR @Criteria IS NULL ORDER BY FirstName, LastName
END







GO
/****** Object:  StoredProcedure [dbo].[usp_GetUtilityBillingList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetUtilityBillingList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetUtilityBillingList] AS' 
END
GO


ALTER PROCEDURE [dbo].[usp_GetUtilityBillingList]
	@FromDate		datetime,
	@ToDate	datetime
AS
BEGIN
	SELECT UB.[UBID]
      ,U.UtilityTitle AS UtilityTitle
	  ,UB.[UtilityID]
      ,UB.[LeaseID]
      ,UB.[Revision_Num]
      ,UB.[Unit]
      ,UB.[ChargeType]
      ,UB.[EffectiveDate]
      ,UB.[MeterReading]
      ,UB.[PricePerUnit]
      ,UB.[Posted]
      ,UB.[TenantID]
  FROM [ShomaRM].[dbo].[tbl_UtilityBilling] UB INNER JOIN dbo.[tbl_Utility] U ON UB.UtilityID=U.UtilityID
	WHERE [Posted] >=@FromDate AND [Posted]<=@ToDate+'23:59:59'
END










GO
/****** Object:  StoredProcedure [dbo].[usp_GetUtilityList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetUtilityList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetUtilityList] AS' 
END
GO
--EXEC [usp_GetUtilityList] '',4,20
ALTER PROCEDURE [dbo].[usp_GetUtilityList]
	@Criteria		VARCHAR(50)=NULL,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount			INT
	DECLARE	@TotalRows			BIGINT
	DECLARE @LowerLimit			BIGINT
	DECLARE	@UpperLimit			BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue			BIGINT
	DECLARE @UtilityData			TABLE 
	(
		UtilityID BIGINT, UtilityTitle VARCHAR(500), UtilityDetails VARCHAR(500), NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT

	INSERT INTO @UtilityData (UtilityID, UtilityTitle, UtilityDetails, NOP) 
	SELECT UtilityID, UtilityTitle, UtilityDetails, 0
	FROM tbl_Utility
	WHERE (UtilityTitle LIKE '%'+@Criteria+'%' OR @Criteria IS NULL) 
	ORDER BY UtilityTitle
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 SET @RowCount=(SELECT COUNT(*) FROM @UtilityData)

	 IF @RowCount<@RowNumLower
	 BEGIN
		SET @RowNumLower=0
	 END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.UtilityID DESC)) AS RowNum
	FROM @UtilityData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @UtilityData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.UtilityID ASC)) AS RowNum, UtilityID
	FROM @UtilityData TD)
	SELECT
		FR.UtilityID, VD.UtilityTitle, VD.UtilityDetails, VD.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @UtilityData VD ON FR.UtilityID=VD.UtilityID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END









GO
/****** Object:  StoredProcedure [dbo].[usp_GetUtilityPaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetUtilityPaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetUtilityPaginationAndSearchData] AS' 
END
GO
--EXEC [usp_GetUtilityList] '',4,20
ALTER PROCEDURE [dbo].[usp_GetUtilityPaginationAndSearchData]
	@Criteria		VARCHAR(50)=NULL,
	@PageNumber		INT,
	@NumberOfRows	INT
AS
BEGIN
	DECLARE @RowCount			INT
	DECLARE	@TotalRows			BIGINT
	DECLARE @LowerLimit			BIGINT
	DECLARE	@UpperLimit			BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue			BIGINT
	DECLARE @UtilityData			TABLE 
	(
		UtilityID BIGINT, UtilityTitle VARCHAR(500), UtilityDetails VARCHAR(500), NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT

	INSERT INTO @UtilityData (UtilityID, UtilityTitle, UtilityDetails, NOP) 
	SELECT UtilityID, UtilityTitle, UtilityDetails, 0
	FROM tbl_Utility
	WHERE (UtilityTitle LIKE '%'+@Criteria+'%' OR @Criteria IS NULL) 
	ORDER BY UtilityTitle
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 SET @RowCount=(SELECT COUNT(*) FROM @UtilityData)

	 IF @RowCount<@RowNumLower
	 BEGIN
		SET @RowNumLower=0
	 END
	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.UtilityID DESC)) AS RowNum
	FROM @UtilityData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @UtilityData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.UtilityID ASC)) AS RowNum, UtilityID
	FROM @UtilityData TD)
	SELECT
		FR.UtilityID, VD.UtilityTitle, VD.UtilityDetails, VD.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @UtilityData VD ON FR.UtilityID=VD.UtilityID
	WHERE 
		RowNum>=@RowNumLower AND RowNum<=@RowNumUpper 
	ORDER BY 
		RowNum
	;
END









GO
/****** Object:  StoredProcedure [dbo].[usp_GetVendorList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetVendorList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetVendorList] AS' 
END
GO





ALTER PROCEDURE [dbo].[usp_GetVendorList]
	@FromDate		datetime,
	@ToDate	datetime
AS
BEGIN
	SELECT [Vendor_ID]
      ,[Vendor_Name]
      ,[Mobile_Number]
      ,[Email_Id]
      ,[Address]
      ,[State]
      ,[City]
      ,[Created_By]
      ,[Created_Date]
  FROM [ShomaRM].[dbo].[tbl_Vendor]
	WHERE [Created_Date] >=@FromDate AND [Created_Date]<=@ToDate+'23:59:59'
END





GO
/****** Object:  StoredProcedure [dbo].[usp_GetVendorPaginationAndSearchData]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetVendorPaginationAndSearchData]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetVendorPaginationAndSearchData] AS' 
END
GO
--EXEC usp_GetVendorPaginationAndSearchData '12/12/2018','06/18/2019',1,20
ALTER PROCEDURE [dbo].[usp_GetVendorPaginationAndSearchData]
	@FromDate		DATETIME,
	@ToDate			DATETIME,
	@PageNumber		INT=NULL,
	@NumberOfRows	INT=NULL
AS
BEGIN
	DECLARE	@TotalRows	BIGINT
	DECLARE @LowerLimit	BIGINT
	DECLARE	@UpperLimit	BIGINT
	DECLARE @TotalNumberOfPages	BIGINT
	DECLARE @ModValue	BIGINT

	DECLARE @VendorData TABLE (
		Vendor_ID BIGINT, Vendor_Name VARCHAR(100), Mobile_Number VARCHAR(20), Email_Id VARCHAR(255), [Address] VARCHAR(500), [State] VARCHAR(500), 
		City VARCHAR(500), Created_By VARCHAR(100), Created_Date DATETIME, NOP INT 
	)
	DECLARE @RowNumLower BIGINT
	DECLARE @RowNumUpper BIGINT
	 
	SET @RowNumLower=(@PageNumber*@NumberOfRows-@NumberOfRows)+1
	SET @RowNumUpper=@PageNumber*@NumberOfRows
	 
	INSERT INTO @VendorData (Vendor_ID, Vendor_Name, Mobile_Number, Email_Id, [Address], [State], City, Created_By, Created_Date, NOP ) 
	SELECT V.Vendor_ID, V.Vendor_Name, V.Mobile_Number, V.Email_Id, V.[Address], S.StateName AS [State], ISNULL(C.CityName,'') AS City, 
	ISNULL(L.FirstName,'')+' '+ISNULL(L.LastName,'') AS Created_By, CONVERT(VARCHAR(10),V.Created_Date,101) AS Created_Date, 0 
	FROM tbl_Vendor V 
	LEFT OUTER JOIN tbl_State S ON V.State=S.ID
	LEFT OUTER JOIN tbl_City C ON V.City=C.ID
	LEFT OUTER JOIN tbl_Login L ON V.Created_By=L.UserID
	WHERE V.Created_Date BETWEEN @FromDate AND @ToDate+' 23:59:59'
	ORDER BY V.Vendor_Name ASC

	--------------------------------------------------------------------------------------------------------------------------------------
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY PD.Vendor_ID DESC)) AS RowNum
	FROM @VendorData PD )
	SELECT @TotalRows=COUNT(*) FROM FilterRows
	;

	SET @TotalNumberOfPages=(@TotalRows/@NumberOfRows);
	SET @ModValue=(@TotalRows%@NumberOfRows);

	IF(@ModValue>0)
	BEGIN
		SET @TotalNumberOfPages=@TotalNumberOfPages+1;
	END

	UPDATE @VendorData SET NOP=@TotalNumberOfPages
	--------------------------------------------------------------------------------------------------------------------------------------
	
	;WITH FilterRows AS (
	SELECT (ROW_NUMBER() OVER (ORDER BY TD.Vendor_ID ASC)) AS RowNum, Vendor_ID
	FROM @VendorData TD)
	SELECT
		FR.Vendor_ID, VD.Vendor_Name, VD.Mobile_Number, VD.Email_Id, VD.[Address], VD.[State], VD.City, VD.Created_By, VD.Created_Date, VD.NOP AS NumberOfPages
	FROM 
		FilterRows FR INNER JOIN @VendorData VD ON FR.Vendor_ID=VD.Vendor_ID
	WHERE 
		(RowNum>=@RowNumLower OR @RowNumLower IS NULL) AND (RowNum<=@RowNumUpper OR @RowNumUpper IS NULL) 
	ORDER BY 
		RowNum
	;
END









GO
/****** Object:  StoredProcedure [dbo].[usp_GetVisitList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetVisitList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetVisitList] AS' 
END
GO

ALTER PROCEDURE [dbo].[usp_GetVisitList]
	@ProspectID		BIGINT

AS
BEGIN
	SELECT [VisitID]
      ,[ProspectID]
      ,[VisitNumber]
      ,[VisitDateTime]
      ,[ResultCode]
      ,[Details]
      ,[Activity]
	  ,[VisitSlot]
	  ,(SELECT  top 1 (FirstName +' ' +LastName) as Name FROM tbl_Login WHERE UserID=[VisitIncharge]) AS VisitInchargeText
  FROM [dbo].[tbl_Visit]
  WHERE ProspectID=@ProspectID 
  ORDER BY [VisitNumber] DESC
END






GO
/****** Object:  StoredProcedure [dbo].[usp_GetWorkOrderList]    Script Date: 08/21/2019 7:06:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[usp_GetWorkOrderList]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[usp_GetWorkOrderList] AS' 
END
GO


ALTER PROCEDURE [dbo].[usp_GetWorkOrderList]
	@FromDate		datetime,
	@ToDate	datetime
AS
BEGIN
	SELECT [WOID]
      ,[TenantID]
      ,(SELECT UnitNo FROM tbl_PropertyUnits WHERE UID=[UnitID]) AS UnitID
      ,(SELECT Title FROM tbl_Properties WHERE PID=[PropertyID]) AS PropertyID
      ,[ProblemID]
      ,[Description]
      ,[DateOpened]
      ,[DateClosed]
      ,[ReportedBy]
      ,[ContactPhone]
      ,[AssignedTo]
      ,[Resolution]
      ,[VendorID]
  FROM [ShomaRM].[dbo].[tbl_WorkOrder] 
  --WHERE CreatedDate >=@FromDate AND CreatedDate<=@ToDate+'23:59:59'
END










GO
