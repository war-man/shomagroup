﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Web;
using ShomaRM.Data;


namespace ShomaRM.Areas.Admin.Models
{
    public class ProspectManagementModel
    {
        public long PID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNo { get; set; }
        public string EmailId { get; set; }
        public Nullable<long> State { get; set; }
        public Nullable<long> City { get; set; }
        public string StateName { get; set; }
        public string CityName { get; set; }
        public string Address { get; set; }
        public string Message { get; set; }
        public Nullable<int> HavingPets { get; set; }
        public string PetsDetails { get; set; }
        public string VehicleDetails { get; set; }
        public Nullable<int> MinBedroom { get; set; }
        public Nullable<int> MinBathroom { get; set; }
        public Nullable<decimal> MinRent { get; set; }
        public Nullable<int> MaxBedroom { get; set; }
        public Nullable<int> MaxBathroom { get; set; }
        public Nullable<decimal> MaxRent { get; set; }
        public Nullable<long> UnitID { get; set; }
        public Nullable<long> PropertyID { get; set; }
        public Nullable<System.DateTime> RequiredDate { get; set; }
        public string RequiredDateText { get; set; }
        public Nullable<int> Term { get; set; }
        public string ReasonForMovingIn { get; set; }
        public Nullable<System.DateTime> VisitDateTime { get; set; }
        public string VisitDateTimeText { get; set; }
        public Nullable<int> LeasingAgent { get; set; }
        public string MarketSource { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public string CreatedDateText { get; set; }
        public Nullable<int> LastModifiedBy { get; set; }
        public Nullable<System.DateTime> LastModifiedeDate { get; set; }

        public int AdID { get; set; }
        public string Advertiser { get; set; }

        public List<ProspectManagementModel> GetProspectList(DateTime FromDate, DateTime ToDate)
        {
            ShomaRMEntities db = new ShomaRMEntities();
            List<ProspectManagementModel> lstpr = new List<ProspectManagementModel>();
            try
            {
                DataTable dtTable = new DataTable();
                using (var cmd = db.Database.Connection.CreateCommand())
                {
                    db.Database.Connection.Open();
                    cmd.CommandText = "usp_GetProspectList";
                    cmd.CommandType = CommandType.StoredProcedure;

                    DbParameter paramF = cmd.CreateParameter();
                    paramF.ParameterName = "FromDate";
                    paramF.Value = FromDate;
                    cmd.Parameters.Add(paramF);

                    DbParameter paramC = cmd.CreateParameter();
                    paramC.ParameterName = "ToDate";
                    paramC.Value = ToDate;
                    cmd.Parameters.Add(paramC);

                    DbDataAdapter da = DbProviderFactories.GetFactory("System.Data.SqlClient").CreateDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dtTable);
                    db.Database.Connection.Close();
                }
                foreach (DataRow dr in dtTable.Rows)
                {
                    ProspectManagementModel pr = new ProspectManagementModel();
                    DateTime? createdDate = null;
                    try
                    {
                        createdDate = Convert.ToDateTime(dr["CreatedDate"].ToString());
                    }
                    catch
                    {

                    }
                    DateTime? visitDate = null;
                    try
                    {
                        visitDate = Convert.ToDateTime(dr["VisitDateTime"].ToString());
                    }
                    catch
                    {

                    }
                    DateTime? requiredDate = null;
                    try
                    {
                        requiredDate = Convert.ToDateTime(dr["RequiredDate"].ToString());
                    }
                    catch
                    {

                    }
                    pr.PID = Convert.ToInt32(dr["PID"].ToString());
                    pr.FirstName = dr["FirstName"].ToString();
                    pr.LastName = dr["LastName"].ToString();
                    pr.PhoneNo = dr["PhoneNo"].ToString();
                    pr.EmailId = dr["EmailId"].ToString();
                    pr.StateName = dr["StateName"].ToString();
                    pr.CityName = dr["CityName"].ToString();
                    pr.Address = dr["Address"].ToString();
                    pr.Message = dr["Message"].ToString();
                    pr.HavingPets = Convert.ToInt32(dr["HavingPets"].ToString());
                    pr.UnitID = Convert.ToInt32(dr["UnitID"].ToString());
                    pr.CreatedDateText = createdDate == null ? "" : createdDate.Value.ToString("MM/dd/yyy");
                    pr.VisitDateTimeText = visitDate == null ? "" : visitDate.Value.ToString("MM/dd/yyy");
                    pr.RequiredDateText = requiredDate == null ? "" : requiredDate.Value.ToString("MM/dd/yyy");
                    lstpr.Add(pr);
                }
                db.Dispose();
                return lstpr.ToList();
            }
            catch (Exception ex)
            {
                db.Database.Connection.Close();
                throw ex;
            }

        }
        public int BuildPaganationProspectList(ProspectSearchModel model)
        {
            int NOP = 0;
            ShomaRMEntities db = new ShomaRMEntities();
            try
            {
                DataTable dtTable = new DataTable();
                using (var cmd = db.Database.Connection.CreateCommand())
                {
                    db.Database.Connection.Open();
                    cmd.CommandText = "usp_GetProspectPaginationAndSearchData";
                    cmd.CommandType = CommandType.StoredProcedure;

                    DbParameter param0 = cmd.CreateParameter();
                    param0.ParameterName = "FromDate";
                    param0.Value = model.FromDate;
                    cmd.Parameters.Add(param0);

                    DbParameter param1 = cmd.CreateParameter();
                    param1.ParameterName = "ToDate";
                    param1.Value = model.ToDate;
                    cmd.Parameters.Add(param1);

                    DbParameter param3 = cmd.CreateParameter();
                    param3.ParameterName = "PageNumber";
                    param3.Value = model.PageNumber;
                    cmd.Parameters.Add(param3);

                    DbParameter param4 = cmd.CreateParameter();
                    param4.ParameterName = "NumberOfRows";
                    param4.Value = model.NumberOfRows;
                    cmd.Parameters.Add(param4);

                    DbDataAdapter da = DbProviderFactories.GetFactory("System.Data.SqlClient").CreateDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dtTable);
                    db.Database.Connection.Close();
                }
                if (dtTable.Rows.Count > 0)
                {
                    NOP = int.Parse(dtTable.Rows[0]["NumberOfPages"].ToString());
                }
                db.Dispose();
                return NOP;
            }
            catch (Exception ex)
            {
                db.Database.Connection.Close();
                throw ex;
            }
        }
        public List<ProspectSearchModel> FillProspectSearchGrid(ProspectSearchModel model)
        {
            ShomaRMEntities db = new ShomaRMEntities();
            List<ProspectSearchModel> lstProspect = new List<ProspectSearchModel>();
            try
            {
                DataTable dtTable = new DataTable();
                using (var cmd = db.Database.Connection.CreateCommand())
                {
                    db.Database.Connection.Open();
                    cmd.CommandText = "usp_GetProspectPaginationAndSearchData";
                    cmd.CommandType = CommandType.StoredProcedure;

                    DbParameter param0 = cmd.CreateParameter();
                    param0.ParameterName = "FromDate";
                    param0.Value = model.FromDate;
                    cmd.Parameters.Add(param0);

                    DbParameter param1 = cmd.CreateParameter();
                    param1.ParameterName = "ToDate";
                    param1.Value = model.ToDate;
                    cmd.Parameters.Add(param1);

                    DbParameter param3 = cmd.CreateParameter();
                    param3.ParameterName = "PageNumber";
                    param3.Value = model.PageNumber;
                    cmd.Parameters.Add(param3);

                    DbParameter param4 = cmd.CreateParameter();
                    param4.ParameterName = "NumberOfRows";
                    param4.Value = model.NumberOfRows;
                    cmd.Parameters.Add(param4);

                    DbDataAdapter da = DbProviderFactories.GetFactory("System.Data.SqlClient").CreateDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dtTable);
                    db.Database.Connection.Close();
                }
                foreach (DataRow dr in dtTable.Rows)
                {
                    ProspectSearchModel psmodel = new ProspectSearchModel();
                    psmodel.PID = Convert.ToInt64(dr["PID"].ToString());
                    psmodel.FirstName = dr["FirstName"].ToString();
                    psmodel.LastName = dr["LastName"].ToString();
                    psmodel.PhoneNo = dr["PhoneNo"].ToString();
                    psmodel.EmailId = dr["EmailId"].ToString();
                    psmodel.StateName = dr["StateName"].ToString();
                    psmodel.CityName = dr["CityName"].ToString();
                    psmodel.Address = dr["Address"].ToString();
                    psmodel.Message = dr["Message"].ToString();
                    psmodel.HavingPets = dr["HavingPets"].ToString();
                    //psmodel.UnitID = dr["UnitID"].ToString();
                    psmodel.CreatedDate = dr["CreatedDate"].ToString();
                    psmodel.VisitDateTime = dr["VisitDateTime"].ToString();
                    lstProspect.Add(psmodel);
                }
                db.Dispose();
                return lstProspect.ToList();
            }
            catch (Exception ex)
            {
                db.Database.Connection.Close();
                throw ex;
            }
        }
        public string SaveProspectForm(ProspectManagementModel model)
        {
            string MSG = "";
            ShomaRMEntities db = new ShomaRMEntities();
            var prospData = db.tbl_Prospect.Where(p => p.PID == model.PID).FirstOrDefault();
            if (model.PID == 0)
            {
                var propsData = new tbl_Prospect()
                {
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    PhoneNo = model.PhoneNo,
                    EmailId = model.EmailId,
                    State = model.State,
                    City = model.City,
                    Address = model.Address,
                    Message = model.Message,
                    HavingPets = model.HavingPets,
                    UnitID = model.UnitID,
                    PropertyID = model.PropertyID,
                    RequiredDate = model.RequiredDate,
                    VisitDateTime = model.VisitDateTime,
                    CreatedDate=DateTime.Now,
                    CreatedBy= ShomaRM.Models.ShomaGroupWebSession.CurrentUser.UserID
                };
                db.tbl_Prospect.Add(propsData);
                db.SaveChanges();
                model.PID = prospData.PID;
            }
            else
            {
                if (prospData != null)
                {
                    prospData.FirstName = model.FirstName;
                    prospData.LastName = model.LastName;
                    prospData.PhoneNo = model.PhoneNo;
                    prospData.EmailId = model.EmailId;
                    prospData.State = model.State;
                    prospData.City = model.City;
                    prospData.Address = model.Address;
                    prospData.Message = model.Message;
                    prospData.HavingPets = model.HavingPets;
                    prospData.UnitID = model.UnitID;
                    prospData.PropertyID = model.PropertyID;
                    prospData.RequiredDate = model.RequiredDate;
                    prospData.VisitDateTime = model.VisitDateTime;

                };

                db.SaveChanges();
            }
        
            MSG =model.PID.ToString() ;
            return MSG;
        }
        public ProspectManagementModel GetProspectDetails(int id)
        {
            ShomaRMEntities db = new ShomaRMEntities();
            ProspectManagementModel model = new ProspectManagementModel();
            model.CreatedDate = DateTime.Now;
           var prospectData = db.tbl_Prospect.Where(p => p.PID == id).FirstOrDefault();
            if(prospectData!=null)
            {
                model.PID = prospectData.PID;
                model.FirstName = prospectData.FirstName;
                model.LastName = prospectData.LastName;
                model.PhoneNo = prospectData.PhoneNo;
                model.EmailId = prospectData.EmailId;
                model.State = prospectData.State;
                model.City = prospectData.City;
                model.Address = prospectData.Address;
                model.Message = prospectData.Message;
                model.HavingPets = prospectData.HavingPets;
                model.PropertyID = prospectData.PropertyID;
                model.UnitID = prospectData.UnitID;
                model.CreatedBy = 1;
                model.CreatedDate = prospectData.CreatedDate;
                model.VisitDateTime = prospectData.VisitDateTime;
                model.RequiredDate = prospectData.RequiredDate;
                model.MarketSource = prospectData.MarketSource;
                model.PetsDetails = prospectData.PetsDetails;
            }

            return model;
        }
        public List<ProspectManagementModel> GetDdlMarketSourceList()
        {
            ShomaRMEntities db = new ShomaRMEntities();
            var Advertiser = db.tbl_Advertiser.OrderBy(co => co.Advertiser).ToList();
            List<ProspectManagementModel> li = new List<ProspectManagementModel>();

            foreach (var item in Advertiser)
            {
                li.Add(new ProspectManagementModel
                {
                    AdID=item.AdID,
                    Advertiser=item.Advertiser
                });
            }

            return li.ToList();
        }
    }
    public class ProspectSearchModel
    {
        public long PID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNo { get; set; }
        public string EmailId { get; set; }
        public string StateName { get; set; }
        public string CityName { get; set; }
        public string Address { get; set; }
        public string Message { get; set; }
        public string HavingPets { get; set; }
        public string UnitID { get; set; }
        public string CreatedDate { get; set; }
        public string VisitDateTime { get; set; }
        public string RequiredDate { get; set; }
        public string FromDate { get; set; }
        public string ToDate { get; set; }
        public int PageNumber { get; set; }
        public int NumberOfRows { get; set; }
    }
    public partial class VisitModel
    {
        public long VisitID { get; set; }
        public Nullable<long> ProspectID { get; set; }
        public Nullable<int> VisitNumber { get; set; }
        public Nullable<System.DateTime> VisitDateTime { get; set; }
        public string VisitDateTimeText { get; set; }
        public string ResultCode { get; set; }
        public string Details { get; set; }
        public Nullable<int> Activity { get; set; }
        public Nullable<int> VisitIncharge { get; set; }
        public Nullable<int> VisitSlot { get; set; }
        public string   VisitInchargeText { get; set; }
        public VisitModel GetVisitDetails(int id)
        {
            ShomaRMEntities db = new ShomaRMEntities();
            VisitModel model = new VisitModel();

            var getVisitDet = db.tbl_Visit.Where(p => p.VisitID == id).FirstOrDefault();
            if (getVisitDet != null)
            {
                DateTime? visitDateTime = null;
                try
                {

                    visitDateTime = Convert.ToDateTime(getVisitDet.VisitDateTime);
                }
                catch
                {

                }

                model.VisitID = getVisitDet.VisitID;
                model.ProspectID = getVisitDet.ProspectID;
                model.VisitDateTimeText = visitDateTime == null ? "" : visitDateTime.Value.ToString("MM/dd/yyy");
                model.ResultCode = getVisitDet.ResultCode;
                model.VisitNumber = getVisitDet.VisitNumber;
                model.Details = getVisitDet.Details;
                model.Activity = getVisitDet.Activity;
                model.VisitIncharge = getVisitDet.VisitIncharge;
                
                model.VisitSlot = getVisitDet.VisitSlot;
            }
           return model;
        }

        public string SaveUpdateVisit(VisitModel model)
        {
            ShomaRMEntities db = new ShomaRMEntities();
            string msg = "";
            var visitID = db.tbl_Visit.Where(p => p.VisitID==model.VisitID).FirstOrDefault();
            if (model.VisitID == 0)
            {
                var saveVisit = new tbl_Visit()
                {
                    VisitID = model.VisitID,
                    ProspectID = model.ProspectID,
                    VisitDateTime = model.VisitDateTime,
                    ResultCode = model.ResultCode,
                    VisitNumber = model.VisitNumber,
                    Details = model.Details,
                    Activity = model.Activity,
                    VisitIncharge = model.VisitIncharge,
                VisitSlot = model.VisitSlot,
            };
                db.tbl_Visit.Add(saveVisit);
                db.SaveChanges();


                msg = "Visit Saved Successfully";
            }
            else
            {
                var visitData = db.tbl_Visit.Where(p => p.VisitID == model.VisitID).FirstOrDefault();
                if (visitData != null)
                {

                    visitData.VisitID = model.VisitID;
                    visitData.ProspectID = model.ProspectID;
                    visitData.VisitDateTime = model.VisitDateTime;
                    visitData.ResultCode = model.ResultCode;
                    visitData.VisitNumber = model.VisitNumber;
                    visitData.Details = model.Details;
                    visitData.Activity = model.Activity;
                    visitData.VisitIncharge = model.VisitIncharge;
                    visitData.VisitSlot = model.VisitSlot;
                }
                db.SaveChanges();
                msg = "Visit Updated Successfully";
            }

            db.Dispose();
            return msg;


        }

        public List<VisitModel> GetVisitList(long ProspectID)
        {
            ShomaRMEntities db = new ShomaRMEntities();
            List<VisitModel> lstpr = new List<VisitModel>();
            try
            {
                DataTable dtTable = new DataTable();
                dtTable.Clear();
                using (var cmd = db.Database.Connection.CreateCommand())
                {
                    db.Database.Connection.Open();
                    cmd.CommandText = "usp_GetVisitList";
                    cmd.CommandType = CommandType.StoredProcedure;

                    DbParameter paramF = cmd.CreateParameter();
                    paramF.ParameterName = "ProspectID";
                    paramF.Value = ProspectID;
                    cmd.Parameters.Add(paramF);                    

                    DbDataAdapter da = DbProviderFactories.GetFactory("System.Data.SqlClient").CreateDataAdapter();
                    da.SelectCommand = cmd;
                    da.Fill(dtTable);
                    db.Database.Connection.Close();
                }
                foreach (DataRow dr in dtTable.Rows)
                {
                    VisitModel pr = new VisitModel();
                    DateTime? visitDateTime = null;
                    try
                    {

                        visitDateTime = Convert.ToDateTime(dr["VisitDateTime"].ToString());
                    }
                    catch
                    {

                    }
                    pr.VisitID = Convert.ToInt64(dr["VisitID"].ToString());
                    pr.ProspectID = Convert.ToInt64(dr["ProspectID"].ToString());
                    pr.ResultCode = dr["ResultCode"].ToString();
                    pr.Details= dr["Details"].ToString();                 
                    pr.Activity = Convert.ToInt32(dr["Activity"].ToString());
                    pr.VisitNumber = Convert.ToInt32(dr["VisitNumber"].ToString());
                    pr.VisitSlot = Convert.ToInt32(dr["VisitSlot"].ToString());
                    pr.VisitInchargeText =dr["VisitInchargeText"].ToString();
                    pr.VisitDateTimeText = visitDateTime == null ? "" : visitDateTime.Value.ToString("MM/dd/yyy");
                    lstpr.Add(pr);
                }
                db.Dispose();
                return lstpr.ToList();
            }
            catch (Exception ex)
            {
                db.Database.Connection.Close();
                throw ex;
            }
        }
    }
}