﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ShomaRM.Models;
using ShomaRM.Areas.Tenant.Models;

namespace ShomaRM.Controllers
{
    public class PayLinkController : Controller
    {
        // GET: PayLink
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult LeaseNow()
        {
            ViewBag.UID = "0";
            if(ShomaGroupWebSession.CurrentUser!=null)
            {
                ViewBag.UID = ShomaGroupWebSession.CurrentUser.UserID.ToString();
            }
          
            return View();
        }
        
        public ActionResult GetProspectData(long UID)
        {
            try
            {
                return Json(new { model = (new OnlineProspectModule().GetProspectData(UID)) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { msg = ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult PayAmenityCharges(int ARID, int FromAcc)
        {
            ViewBag.UID = "0";
            ViewBag.FromAcc = FromAcc;
            ViewBag.ARID = ARID;
            var model = new AmenitiesReservationModel().GetRRInfo(ARID);
            if (FromAcc != 0)
            {
                if (ShomaGroupWebSession.CurrentUser != null)
                {
                    ViewBag.UID = ShomaGroupWebSession.CurrentUser.UserID.ToString();
                }
            }
            return View("..//Paylink//PayAmenityCharges", model);
        }
        public ActionResult PayServiceCharges(int EID, int FromAcc)
        {
            ViewBag.UID = "0";
            ViewBag.FromAcc = FromAcc;
            ViewBag.ARID = EID;
            var model = new AmenitiesReservationModel().GetRRInfo(EID);
            if (FromAcc != 0)
            {
                if (ShomaGroupWebSession.CurrentUser != null)
                {
                    ViewBag.UID = ShomaGroupWebSession.CurrentUser.UserID.ToString();
                }
            }
            return View("..//Paylink//PayServiceCharges", model);
        }
    }
}