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
    
    public partial class tbl_TenantInfo
    {
        public long TenantID { get; set; }
        public Nullable<long> ProspectID { get; set; }
        public string FirstName { get; set; }
        public string MiddleInitial { get; set; }
        public string LastName { get; set; }
        public Nullable<System.DateTime> DateOfBirth { get; set; }
        public Nullable<int> Gender { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public string PassportNumber { get; set; }
        public string CountryIssuance { get; set; }
        public Nullable<System.DateTime> DateIssuance { get; set; }
        public Nullable<System.DateTime> DateExpire { get; set; }
        public Nullable<int> IDType { get; set; }
        public Nullable<long> State { get; set; }
        public Nullable<long> PropertyID { get; set; }
        public Nullable<long> UnitID { get; set; }
        public string IDNumber { get; set; }
        public string Country { get; set; }
        public string HomeAddress1 { get; set; }
        public string HomeAddress2 { get; set; }
        public Nullable<long> StateHome { get; set; }
        public string CityHome { get; set; }
        public string ZipHome { get; set; }
        public Nullable<int> RentOwn { get; set; }
        public Nullable<System.DateTime> MoveInDate { get; set; }
        public string MonthlyPayment { get; set; }
        public string Reason { get; set; }
        public string EmployerName { get; set; }
        public string JobTitle { get; set; }
        public Nullable<int> JobType { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<decimal> Income { get; set; }
        public Nullable<decimal> AdditionalIncome { get; set; }
        public string SupervisorName { get; set; }
        public string SupervisorPhone { get; set; }
        public string SupervisorEmail { get; set; }
        public string OfficeCountry { get; set; }
        public string OfficeAddress1 { get; set; }
        public string OfficeAddress2 { get; set; }
        public Nullable<long> OfficeState { get; set; }
        public string OfficeCity { get; set; }
        public string OfficeZip { get; set; }
        public string Relationship { get; set; }
        public string EmergencyFirstName { get; set; }
        public string EmergencyLastName { get; set; }
        public string EmergencyMobile { get; set; }
        public string EmergencyHomePhone { get; set; }
        public string EmergencyWorkPhone { get; set; }
        public string EmergencyEmail { get; set; }
        public string EmergencyCountry { get; set; }
        public string EmergencyAddress1 { get; set; }
        public string EmergencyAddress2 { get; set; }
        public Nullable<long> EmergencyStateHome { get; set; }
        public string EmergencyCityHome { get; set; }
        public string EmergencyZipHome { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> IsInternational { get; set; }
        public string OtherGender { get; set; }
        public Nullable<System.DateTime> MoveInDateFrom { get; set; }
        public Nullable<System.DateTime> MoveInDateTo { get; set; }
        public string Country2 { get; set; }
        public string HomeAddress12 { get; set; }
        public string HomeAddress22 { get; set; }
        public Nullable<long> StateHome2 { get; set; }
        public string CityHome2 { get; set; }
        public string ZipHome2 { get; set; }
        public Nullable<int> RentOwn2 { get; set; }
        public Nullable<System.DateTime> MoveInDateFrom2 { get; set; }
        public Nullable<System.DateTime> MoveInDateTo2 { get; set; }
        public string MonthlyPayment2 { get; set; }
        public string Reason2 { get; set; }
        public Nullable<int> IsAdditionalRHistory { get; set; }
        public string PassportDocument { get; set; }
        public string IdentityDocument { get; set; }
        public string TaxReturn { get; set; }
        public string SSN { get; set; }
        public string TaxReturn2 { get; set; }
        public string TaxReturn3 { get; set; }
        public Nullable<bool> HaveVehicle { get; set; }
        public string TaxReturnOrginalFile { get; set; }
        public string TaxReturnOrginalFile2 { get; set; }
        public string TaxReturnOrginalFile3 { get; set; }
        public Nullable<bool> HavePet { get; set; }
        public string PassportDocumentOriginalFile { get; set; }
        public string IdentityDocumentOriginalFile { get; set; }
        public Nullable<bool> IsPaystub { get; set; }
        public string ProfilePicture { get; set; }
        public string OrginalProfilePicture { get; set; }
        public Nullable<int> IsAgreePostDisclaimer { get; set; }
        public Nullable<long> ParentTenantID { get; set; }
    
        public virtual tbl_ApplyNow tbl_ApplyNow { get; set; }
    }
}
