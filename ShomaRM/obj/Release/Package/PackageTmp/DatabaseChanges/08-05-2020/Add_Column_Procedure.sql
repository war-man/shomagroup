
GO
ALTER TABLE tbl_TenantOnline ALTER COLUMN IsPaystub INT
GO
ALTER TABLE tbl_TenantInfo ALTER COLUMN IsPaystub INT
GO
ALTER TABLE tbl_MoveInChecklist ADD PreMoveInDate DATETIME
GO
ALTER TABLE tbl_MoveInChecklist ADD PreMoveInTime NVARCHAR(50)
GO
ALTER TABLE tbl_MoveInChecklist ADD Movers INT


GO
/****** Object:  StoredProcedure [dbo].[usp_GetOnlineTransactionList]    Script Date: 5/8/2020 9:58:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[usp_GetOnlineTransactionList]
	@TenantID BIGINT,
	@AppID	INT=0
AS
BEGIN
	DECLARE @IsPrimaryApp INT =0
	SET @IsPrimaryApp=ISNULL((SELECT COUNT(*) FROM tbl_Applicant WHERE ApplicantID=@AppID AND Type='Primary Applicant'),0)

	SELECT [TransID]    
      ,[LeaseID]
      ,[Revision_Num]
      ,[Transaction_Date]
      ,ISNULL([Run],0) AS Run
      ,CASE WHEN [Charge_Type]=1 THEN 'Application Fees'  WHEN [Charge_Type]=2 THEN 'Move In Charge' WHEN [Charge_Type]=3 THEN 'Administrative Fee' WHEN [Charge_Type]=4 THEN 'Credit Check Fee' WHEN [Charge_Type]=5 THEN 'Background Check Fee'  ELSE 'CHARGE' END AS [Transaction_Type]
      ,[Description]
      ,[Charge_Date]
      ,(SELECT  top 1 Charge_Type FROM tbl_ChargeType WHERE CTID=T.[Charge_Type]) AS Charge_Type
      ,[Reference]
      ,ISNULL([Credit_Amount],0) AS [Credit_Amount]
      ,ISNULL([Charge_Amount],0) AS [Charge_Amount]
	  ,[TBankName]
      ,[CreatedDate]
	  ,A.FirstName+' '+A.LastName AS ApplicantName
	  ,A.Type AS ApplicantType
  FROM  [tbl_Transaction] T INNER JOIN tbl_OnlinePayment OP ON T.Transaction_Type=OP.ID INNER JOIN tbl_Applicant A ON OP.ApplicantID=A.ApplicantID
  WHERE  T.TenantID=@TenantID AND (OP.ApplicantID=@AppID OR  @IsPrimaryApp=1)
END






















