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
    
    public partial class tbl_Storage
    {
        public long StorageID { get; set; }
        public Nullable<long> PropertyID { get; set; }
        public string StorageName { get; set; }
        public Nullable<decimal> Charges { get; set; }
        public string Description { get; set; }
        public Nullable<int> Type { get; set; }
        public Nullable<int> Status { get; set; }
    
        public virtual tbl_Properties tbl_Properties { get; set; }
    }
}
