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
    
    public partial class tbl_RequestOffer
    {
        public long ROID { get; set; }
        public Nullable<int> CompanyId { get; set; }
        public string brokerage { get; set; }
        public string Description { get; set; }
        public string DocumentName { get; set; }
        public Nullable<long> CustomerID { get; set; }
        public string Size { get; set; }
        public Nullable<long> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
    }
}
