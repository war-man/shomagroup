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
    
    public partial class tbl_Document
    {
        public long DocID { get; set; }
        public Nullable<long> TenantID { get; set; }
        public string DocumentName { get; set; }
        public string DocumentType { get; set; }
        public string DocumentNumber { get; set; }
        public Nullable<System.DateTime> UploadDate { get; set; }
        public Nullable<long> UploadBy { get; set; }
    
        public virtual tbl_Prospect tbl_Prospect { get; set; }
    }
}
