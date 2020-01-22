﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ShomaRM.Areas.Admin.Models;
using ShomaRM.Data;

namespace ShomaRM.Areas.Admin.Controllers
{
    public class AmenitiesController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.ActiveMenu = "admin";
            UsersModel model = new UsersModel();
            if (model.HasRight == 1)
            {
                return RedirectToAction("Index", "Home");
            }
            return View(); 
        }
        public ActionResult GetAmenityList(string Amenity)
        {
            try
            {
                return Json((new AmenitiesModel()).GetAmenityList(Amenity), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { error = ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult FillAmenitySearchGrid(AmenityList model)
        {
            try
            {
                return Json((new AmenitiesModel()).FillAmenitySearchGrid(model), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { error = ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult BuildPaganationAmenityList(AmenityList model)
        {
            try
            {
                return Json(new { NOP = (new AmenitiesModel()).BuildPaganationAmenityList(model) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { error = ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult GetAmenityInfo(int AmenityID = 0)
        {
            try
            {
                return Json((new AmenitiesModel()).GetAmenityInfo(AmenityID), JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { error = ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult SaveUpdateAmenity(AmenitiesModel model)
        {
            try
            {
                return Json(new { result = 1, ID = model.SaveUpdateAmenity(model) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { error = ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }


        public ActionResult DeleteAmenities(long AmenitiesID)
        {
            try
            {
                return Json(new { model = new AmenitiesModel().DeleteAmenities(AmenitiesID) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { model = ex.Message }, JsonRequestBehavior.AllowGet);
            }


        }
    }
}