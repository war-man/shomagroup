//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ShomaRM.Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class tbl_GuestRegistration
    {
        public long GuestID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public Nullable<System.DateTime> VisitStartDate { get; set; }
        public Nullable<System.DateTime> VisitEndDate { get; set; }
        public string VehicleMake { get; set; }
        public string VehicleModel { get; set; }
        public string Tag { get; set; }
        public string DriverLicence { get; set; }
        public string VehicleRegistration { get; set; }
        public Nullable<long> TenantID { get; set; }
        public string OriginalDriverLicence { get; set; }
        public string OriginalVehicleRegistration { get; set; }
    }
}
