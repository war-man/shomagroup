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
    
    public partial class usp_GetServiceRequestListDashboard_Result
    {
        public long ServiceID { get; set; }
        public Nullable<long> TenantID { get; set; }
        public Nullable<int> ProblemCategory { get; set; }
        public string ProblemCategoryName { get; set; }
        public string Details { get; set; }
        public Nullable<int> PermissionEnterApartment { get; set; }
        public string Status { get; set; }
        public Nullable<int> Location { get; set; }
        public Nullable<int> ItemCaussing { get; set; }
        public Nullable<int> ItemIssue { get; set; }
        public string OtherItemCaussing { get; set; }
        public string OtherItemIssue { get; set; }
        public string ServiceDate { get; set; }
        public string UnitNo { get; set; }
    }
}
