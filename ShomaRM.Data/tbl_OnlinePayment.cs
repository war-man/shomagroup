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
    
    public partial class tbl_OnlinePayment
    {
        public int ID { get; set; }
        public Nullable<long> PID { get; set; }
        public string Name_On_Card { get; set; }
        public string CardNumber { get; set; }
        public Nullable<int> CardMonth { get; set; }
        public Nullable<int> CardYear { get; set; }
        public Nullable<int> CCVNumber { get; set; }
        public Nullable<long> ProspectId { get; set; }
        public Nullable<int> PaymentMethod { get; set; }
    }
}
