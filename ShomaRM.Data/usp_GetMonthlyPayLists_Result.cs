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
    
    public partial class usp_GetMonthlyPayLists_Result
    {
        public long TMPID { get; set; }
        public int Revision_Num { get; set; }
        public System.DateTime Transaction_Date { get; set; }
        public string Description { get; set; }
        public decimal Charge_Amount { get; set; }
        public long TenantID { get; set; }
        public int PAID { get; set; }
        public int UserID { get; set; }
    }
}
