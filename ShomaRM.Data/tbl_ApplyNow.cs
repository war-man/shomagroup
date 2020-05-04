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
    
    public partial class tbl_ApplyNow
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tbl_ApplyNow()
        {
            this.tbl_TenantInfo = new HashSet<tbl_TenantInfo>();
            this.tbl_TenantParking = new HashSet<tbl_TenantParking>();
            this.tbl_TenantPetPlace = new HashSet<tbl_TenantPetPlace>();
            this.tbl_TenantStorage = new HashSet<tbl_TenantStorage>();
            this.tbl_TenantOnline = new HashSet<tbl_TenantOnline>();
            this.tbl_Applicant = new HashSet<tbl_Applicant>();
            this.tbl_TenantPet = new HashSet<tbl_TenantPet>();
            this.tbl_Vehicle = new HashSet<tbl_Vehicle>();
        }
    
        public long ID { get; set; }
        public Nullable<long> PropertyId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public string Status { get; set; }
        public string Address { get; set; }
        public string Password { get; set; }
        public Nullable<int> IsApplyNow { get; set; }
        public Nullable<long> CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<System.DateTime> DateofBirth { get; set; }
        public string AnnualIncome { get; set; }
        public string AddiAnnualIncome { get; set; }
        public Nullable<long> UserId { get; set; }
        public Nullable<int> Marketsource { get; set; }
        public Nullable<System.DateTime> MoveInDate { get; set; }
        public Nullable<decimal> ParkingAmt { get; set; }
        public Nullable<decimal> StorageAmt { get; set; }
        public Nullable<decimal> PetPlaceAmt { get; set; }
        public Nullable<decimal> Deposit { get; set; }
        public Nullable<decimal> Rent { get; set; }
        public Nullable<decimal> PetDeposit { get; set; }
        public Nullable<decimal> TrashAmt { get; set; }
        public Nullable<decimal> PestAmt { get; set; }
        public Nullable<decimal> ConvergentAmt { get; set; }
        public Nullable<decimal> MoveInCharges { get; set; }
        public Nullable<decimal> FOBAmt { get; set; }
        public Nullable<int> IsRentalPolicy { get; set; }
        public Nullable<int> IsRentalQualification { get; set; }
        public string EnvelopeID { get; set; }
        public Nullable<decimal> Prorated_Rent { get; set; }
        public Nullable<decimal> VehicleRegistration { get; set; }
        public Nullable<decimal> AdministrationFee { get; set; }
        public Nullable<int> LeaseTerm { get; set; }
        public Nullable<decimal> MonthlyCharges { get; set; }
        public string EsignatureID { get; set; }
        public Nullable<decimal> PetDNAAmt { get; set; }
        public Nullable<int> StepCompleted { get; set; }
        public Nullable<int> AcceptSummary { get; set; }
        public Nullable<int> AdditionalParking { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbl_TenantInfo> tbl_TenantInfo { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbl_TenantParking> tbl_TenantParking { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbl_TenantPetPlace> tbl_TenantPetPlace { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbl_TenantStorage> tbl_TenantStorage { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbl_TenantOnline> tbl_TenantOnline { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbl_Applicant> tbl_Applicant { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbl_TenantPet> tbl_TenantPet { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbl_Vehicle> tbl_Vehicle { get; set; }
    }
}
