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
    
    public partial class tbl_Vehicle
    {
        public long Vehicle_ID { get; set; }
        public long TenantID { get; set; }
        public string License { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string Color { get; set; }
        public Nullable<long> ProspectID { get; set; }
        public string VehicleRegistration { get; set; }
        public string OwnerName { get; set; }
        public string Notes { get; set; }
        public string OriginalVehicleReg { get; set; }
        public string Year { get; set; }
        public string State { get; set; }
        public string Tag { get; set; }
        public Nullable<int> ParkingID { get; set; }
    
        public virtual tbl_ApplyNow tbl_ApplyNow { get; set; }
    }
}
