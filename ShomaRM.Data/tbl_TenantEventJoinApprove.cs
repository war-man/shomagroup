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
    
    public partial class tbl_TenantEventJoinApprove
    {
        public long TEJAID { get; set; }
        public Nullable<long> EventID { get; set; }
        public Nullable<long> EventJoinID { get; set; }
        public Nullable<long> TenantID { get; set; }
        public Nullable<int> Status { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
    }
}