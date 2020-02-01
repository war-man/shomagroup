﻿using ShomaRM.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShomaRM.Areas.Tenant.Models.Club
{
    public class ClubModel
    {
        public long Id { get; set; }
        public string ClubTitle { get; set; }
        public long ActivityId { get; set; }

        public DateTime StartDate { get; set; }
        public string Venue { get; set; }
        public long DayId { get; set; }
        public string Time { get; set; }
        public string Contact { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public bool PhoneCheck { get; set; }
        public bool EmailCheck { get; set; }
        public long LevelId { get; set; }
        public string SpecialInstruction { get; set; }
        public string Description { get; set; }
        public string BriefDescription { get; set; }
        public bool TermsAndCondition { get; set; }
        public long? TenantID { get; set; }
        public long UserId { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastUpdatedDate { get; set; }

        public string SaveclubEvent(ClubModel model)
        {
            string msg = "";
            ShomaRMEntities db = new ShomaRMEntities();

            if (model != null)
            {
                var ClubCreate = new tbl_Club()
                {
                    Id = model.Id,
                    ClubTitle = model.ClubTitle,
                    ActivityId = model.ActivityId,
                    StartDate = model.StartDate,
                    Venue = model.Venue,
                    DayId = model.DayId,
                    Time = model.Time,
                    Contact = model.Contact,
                    Email = model.Email,
                    PhoneNumber = model.PhoneNumber,
                    PhoneCheck = model.PhoneCheck,
                    EmailCheck = model.EmailCheck,
                    LevelId = model.LevelId,
                    SpecialInstruction = model.SpecialInstruction,
                    Description = model.Description,
                    BriefDescription = model.BriefDescription,
                    TermsAndCondition = model.TermsAndCondition,
                    TenantID = model.TenantID,
                    UserId = model.UserId,
                    IsDeleted = false,
                    CreatedDate = DateTime.UtcNow,
                    LastUpdatedDate = DateTime.UtcNow
                };
                db.tbl_Club.Add(ClubCreate);
                db.SaveChanges();
                var CreateClubMap = new tbl_ClubMapping()
                {
                    Id = 0,
                    ClubId = ClubCreate.Id,
                    UserId = model.UserId
                };
                db.tbl_ClubMapping.Add(CreateClubMap);
                db.SaveChanges();
                msg = "Progress Saved";
            }
            else
            {
                msg = "You Already Registered For This Event";
            }
            db.Dispose();
            return msg;
        }

    }
}