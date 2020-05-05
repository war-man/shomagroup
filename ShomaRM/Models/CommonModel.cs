﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ShomaRM.Models;
using ShomaRM.Data;
using System.Data.Common;
using System.Data;
using System.IO;
using Microsoft.IdentityModel.Protocols;
using System.Configuration;

namespace ShomaRM.Models
{
    public class CommonModel
    {
        public static string GetUserFirstName()
        {
            return ShomaGroupWebSession.CurrentUser.LoggedInUser;
        }
        public static string GetUserFullName()
        {
            return ShomaGroupWebSession.CurrentUser.FullName;
        }
        public static string GetUserExitension()
        {
            return ShomaGroupWebSession.CurrentUser.Extension;
        }
        public void AddPageLoginHistory(string pageName)
        {
            try
            {
                ShomaRMEntities db = new ShomaRMEntities();
                int userid = ShomaRM.Models.ShomaGroupWebSession.CurrentUser != null ? ShomaRM.Models.ShomaGroupWebSession.CurrentUser.UserID : 0;
                using (var cmd = db.Database.Connection.CreateCommand())
                {
                    try
                    {
                        db.Database.Connection.Open();
                        cmd.CommandText = "usp_AddPageLoginHistory";
                        cmd.CommandType = CommandType.StoredProcedure;

                        DbParameter paramUserID = cmd.CreateParameter();
                        paramUserID.ParameterName = "UserID";
                        paramUserID.Value = userid;
                        cmd.Parameters.Add(paramUserID);

                        DbParameter paramSessionID = cmd.CreateParameter();
                        paramSessionID.ParameterName = "SessionID";
                        paramSessionID.Value = HttpContext.Current.Session.SessionID.ToString();
                        cmd.Parameters.Add(paramSessionID);

                        DbParameter paramPageName = cmd.CreateParameter();
                        paramPageName.ParameterName = "PageName";
                        paramPageName.Value = (pageName);
                        cmd.Parameters.Add(paramPageName);

                        DbDataAdapter da = DbProviderFactories.GetFactory("System.Data.SqlClient").CreateDataAdapter();
                        da.SelectCommand = cmd;
                        cmd.ExecuteNonQuery();
                        db.Database.Connection.Close();
                    }
                    catch
                    {
                        db.Database.Connection.Close();
                    }
                }
                db.Dispose();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public void Log(string message)
        {
            string filePath = HttpContext.Current.Server.MapPath("~/Log");
            FileStream fs = new FileStream(filePath + "/Log.txt", FileMode.OpenOrCreate, FileAccess.Write);
            StreamWriter sw = new StreamWriter(fs);
            sw.BaseStream.Seek(0, SeekOrigin.End);
            sw.WriteLine(message);
            sw.Flush();
            sw.Close();
        }
        public static string ScriptVersion ()
        {
            return ConfigurationManager.AppSettings["ScriptVer"];
        }
    }
}