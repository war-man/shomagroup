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
    
    public partial class tbl_Models
    {
        public int ModelID { get; set; }
        public string Area { get; set; }
        public Nullable<decimal> Rent { get; set; }
        public Nullable<int> Bedroom { get; set; }
        public Nullable<int> Bathroom { get; set; }
        public string FloorPlan { get; set; }
        public string ModelName { get; set; }
        public string FloorPlanDetails { get; set; }
        public Nullable<decimal> Deposit { get; set; }
        public Nullable<decimal> MinRent { get; set; }
        public Nullable<decimal> MaxRent { get; set; }
        public string BalconyArea { get; set; }
        public string InteriorArea { get; set; }
    }
}
