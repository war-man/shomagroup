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
    
    public partial class usp_GetEventPaginationAndSearchData_Result
    {
        public Nullable<long> EventID { get; set; }
        public string EventName { get; set; }
        public string EventDate { get; set; }
        public string PropertyName { get; set; }
        public string Description { get; set; }
        public string CreatedByDate { get; set; }
        public string CreatedBy { get; set; }
        public string Photo { get; set; }
        public Nullable<int> NumberOfPages { get; set; }
        public Nullable<int> Type { get; set; }
    }
}