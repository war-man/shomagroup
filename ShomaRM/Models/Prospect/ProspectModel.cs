﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ShomaRM.Data;

namespace ShomaRM.Models
{
    public class ProspectModel
    {
        public long PID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNo { get; set; }
        public string EmailId { get; set; }
        public Nullable<int> State { get; set; }
        public Nullable<int> City { get; set; }
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
        public int PropertyID { get; set; }
        public Nullable<System.DateTime> RequiredDate { get; set; }
        public Nullable<int> Term { get; set; }
        public string ReasonForMovingIn { get; set; }
        public Nullable<System.DateTime> VisitDateTime { get; set; }
        public Nullable<int> LeasingAgent { get; set; }
        public string MarketSource { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> LastModifiedBy { get; set; }
        public Nullable<System.DateTime> LastModifiedeDate { get; set; }
       

        public string SaveProspectForm(ProspectModel model)
        {
            string MSG = "";
            ShomaRMEntities db = new ShomaRMEntities();
            var saveTenant = new tbl_Prospect()
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                PhoneNo = model.PhoneNo,
                EmailId = model.EmailId,
                State = null,
                City = model.City,
                Address = model.Address,
                Message = model.Message,
                HavingPets = model.HavingPets,
                UnitID = model.UnitID,
                PropertyID = null,
                CreatedBy = 1,
                CreatedDate = DateTime.Now,
                VisitDateTime=model.VisitDateTime,
                Status=0,
                MarketSource=model.MarketSource,
            };
            db.tbl_Prospect.Add(saveTenant);
            db.SaveChanges();
            MSG = "Prospect Form Submitted Successfully";
            return MSG;
        }
    }
    
}