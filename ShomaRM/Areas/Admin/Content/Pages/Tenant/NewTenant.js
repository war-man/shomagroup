﻿$(document).ready(function () {
    
    var newTenantID = localStorage.getItem("NewTenantID");
    $("#hndNewTenant").val(newTenantID);
    getAccountHistory();
    getServiceRequestList();
    getServiceRequestOnAlarm();
    breakdownPaymentFunction();
    getLeaseInfoDocuments();
    
    getReservationRequestList();
    getTenantData(newTenantID);

   
    $("#ddlAmenities").on("change", function () {
        console.log();
        $("#SelectedAminity").html($(this).find(":selected").text());
        $("#SelectedAminity").attr("data-value", $(this).find(":selected").val());
    });

    $("#txtDesiredTime").on("keyup", function () {
        $("#SelectedTime").html($(this).val());
    });



    $("#ddlAmenities").on("change", function () {
        var selectedOption = $(this).val();

        getDurationSlot(selectedOption);
    });

    $("#ddlDesiredDuration").on("change", function () {
        var optionDep = $(this).find(":selected").attr("data-dep");
        var optionRes = $(this).find(":selected").attr("data-res");
        $("#AmenitySDR").html(optionDep);
        $("#AmenityRF").html(optionRes);

    });

    $("#rbtnApertmentPermission1").prop("checked", true);

    $('input[type=radio]').on('ifChanged', function (event) {

        if ($("#rbtnApertmentPermission2").is(":checked")) {
            $("#PreferredDate").removeClass('hidden');

        }
        else if ($("#rbtnApertmentPermission1").is(":checked")) {
            $("#PreferredDate").addClass('hidden');
        }
    });
    $("#ddlPaymentHistory").on("click", function (event) {

        if ($(this).val() == 4) {
            dateRangeAccountHistory();
        }
        else {
            getTransationLists();
        }
   });


    $("#fileUploadService").on("change", function () {
        uploadServiceFile();
    });
   
    $("#ddlProblemCategory").on('change', function (evt, params) {
        var selected = $(this).val();
        if (selected != null) {
            if (selected == 10 || selected == 0) {
                $("#ddlProblemCategory1").empty();
                $("#Issue").addClass("hidden");
                $("#MoreDetails").removeClass("hidden");
                $("#CausingIssue").addClass("hidden");
                $("#OtherCausingIssue").addClass("hidden");
                $("#OtherIssue").addClass("hidden");
            }
            else {
                fillCaussingIssue(selected);
                $("#MoreDetails").addClass("hidden");
                $("#CausingIssue").removeClass("hidden");
                $("#ddlProblemCategory2").empty();
                $("#Issue").addClass("hidden");
                $("#OtherIssue").addClass("hidden");
                $("#OtherCausingIssue").addClass("hidden");
            }
        }
    });
    $("#ddlProblemCategory1").on('change', function (evt, params) {
        var i = $("#ddlProblemCategory").val();
        var selected = $(this).find(":Selected").val();
        if (selected != null) {
            if (selected == 8 || selected == 11 || selected == 18 || selected == 40 || selected == 41 || selected == 42 || selected == 52) {
                $("#OtherCausingIssue").removeClass("hidden");
                $("#Issue").addClass("hidden");
                $("#OtherIssue").addClass("hidden");
            }
            else {
                $("#OtherIssue").addClass("hidden");
                $("#Issue").removeClass("hidden");
                $("#OtherCausingIssue").addClass("hidden");
                fillDdlIssue(selected, i);
            }

        }
    });
    $("#ddlProblemCategory2").on('change', function (evt, params) {
        var selected = $(this).find(":Selected").val();
        if (selected != null) {
            if (selected == 5 || selected == 14 || selected == 23 || selected == 27 || selected == 34 || selected == 43 || selected == 60 || selected == 61 || selected == 62 || selected == 67 || selected == 71 || selected == 78 || selected == 83 || selected == 88 || selected == 90 || selected == 100 || selected == 103 || selected == 106 || selected == 114 || selected == 115 || selected == 118 || selected == 122 || selected == 123 || selected == 126 || selected == 134 || selected == 139 || selected == 144 || selected == 147 || selected == 149 || selected == 173 || selected == 175 || selected == 179) {
                $("#OtherIssue").removeClass("hidden");

            }
            else {
                $("#Issue").removeClass("hidden");
                $("#OtherIssue").addClass("hidden");
                fillDdlIssue(selected, i);
            }

        }
    });
    $("#ddlPriority").on('change', function (evt, params) {
        var selected = $(this).find(":Selected").val();
        if (selected != null) {
            if (selected == 4) {
                $("#Mobile").removeClass("hidden");
            }
            else {
                $("#Mobile").addClass("hidden");
            }

        }
    });

});



var getAccountHistory = function () {

    var model = {
        TenantId: $("#hndNewTenant").val()
    };
    $.ajax({
        url: '/Transaction/getAccountHistory',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#tblAccountHistory>tbody").empty();
            $.each(response.model, function (elementType, elementValue) {
                var html = "<tr data-value=" + elementValue.TransID + ">";
                html += "<td>" + elementValue.TransactionDateString + "</td>";
                html += "<td>" + elementValue.Description + "</td>";
                html += "<td>" + elementValue.Charge_Amount + "</td>";
                html += "</tr>";
                $("#tblAccountHistory>tbody").append(html);
            });
        }
    });
}

var getServiceRequestList = function () {
    var tenantId = $("#hndNewTenant").val();
    var serviceReq = $("#ddlOpenServiceRequest").val();
    var model = {
        TenantId: tenantId,
        ServiceRequest: serviceReq
    };
    $.ajax({
        url: '/ServiceRequest/GetServiceRequestList',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#tblServiceRequest>tbody").empty();
            $.each(response.model, function (elementType, elementValue) {
                var html = "<tr data-value=" + elementValue.ServiceID + ">";
                html += "<td>" + elementValue.DateString + "</td>";
                html += "<td>" + elementValue.ProblemCategorystring + "</td>";
                html += "<td>" + elementValue.StatusString + "</td>";
                html += "<td>" + elementValue.PriorityString + "</td>";
                //html += "<td align='center'><img src='/content/assets/img/pet/" + elementValue.TempServiceFile + "' class='picture-src' title='' style='height:70px;width:70px;'/></td>";
                // html += "<td> <a  target='_blank' href='/Content/assets/img/Document/" + elementValue.TempServiceFile + "'><i class='fa fa-eye'></i></a></td>";
                html += "</tr>";
                $("#tblServiceRequest>tbody").append(html);
            });
        }
    });
}

var getReservationRequestList = function () {
    var tenantID = $("#hndNewTenant").val();
    var ProspectID = $("#hndUserId").val();
    //alert(tenantID + " " + ProspectID);
    var model = {
        TenantID: tenantID
    };
    $.ajax({
        url: '/Tenant/MyAccount/FillRRList',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            if ($.trim(response.error) !== "") {
                //this.cancelChanges();
            } else {
                $("#tblReservationRequest>tbody").empty();
                $.each(response, function (elementType, elementValue) {
                    console.log(JSON.stringify(response));
                    var html = "<tr data-value=" + elementValue.ARID + " data-amenity=" + elementValue.AmenityID + " data-tenantid=" + elementValue.TenantID + ">";
                    html += "<td>" + elementValue.TenantName + "</td>";
                    html += "<td>" + elementValue.AmenityName + "</td>";
                    html += "<td>" + elementValue.DesiredDate + "</td>";
                    html += "<td>" + elementValue.DesiredTime + "</td>";
                    html += "<td>" + elementValue.Duration + "</td>";
                    html += "<td>" + elementValue.Status + "</td>";

                    html += "</tr>";
                    $("#tblReservationRequest>tbody").append(html);
                });
            }
        }
    });
};

var getLeaseInfoDocuments = function () {
    var model = { UserId: $("#hndNewTenant").val() };

    $.ajax({
        url: '/MyAccount/GetAllLeaseDocuments',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            var intCount = parseInt(1);

            //For Lease Documents
            $('#accordionSubLeaseDocument').empty();
            var Ldhtml = '';
            if (response.model.EnvelopeID != null) {
                intCount++;
                Ldhtml += "<div class='panel panel-default'>";
                Ldhtml += "<div class='panel-heading'>";
                Ldhtml += "<h3 class='panel-title'>";
                Ldhtml += "<a data-toggle='collapse' data-parent='#accordionSubLeaseDocuments' href='#collapse1Sub1" + intCount + "'><i class='fa fa-file-pdf-o' style='color:red'></i> " + response.model.EnvelopeID + "<i class='fa fa-angle-right pull-right'></i></a>";
                Ldhtml += "</h3>";
                Ldhtml += "</div>";
                Ldhtml += "<div id='collapse1Sub1" + intCount + "' class='panel-collapse collapse'>";
                Ldhtml += "<div class='panel-body'>";
                var resultLease = doesFileExist('/Content/assets/img/Document/' + response.model.EnvelopeID);
                if (resultLease == true) {
                    Ldhtml += "<a class='btn btn-primary' data-toggle='tooltip' title='Download' download='" + response.model.EnvelopeID + "' href='/Content/assets/img/Document/" + response.model.EnvelopeID + "'><i class='fa fa-download'></i></a>";
                    Ldhtml += "<a class='btn btn-primary' data-toggle='tooltip' title='View' target='_blank' href='/Content/assets/img/Document/" + response.model.EnvelopeID + "' style='margin-left: 15px;'><i class='fa fa-eye'></i></a>";
                }
                else {
                    Ldhtml += "<a class='btn btn-primary' data-toggle='tooltip' title='Download' href='javascript:void(0);' onclick='FileNotFound();'><i class='fa fa-download'></i></a>";
                    Ldhtml += "<a class='btn btn-primary' data-toggle='tooltip' title='View' style='margin-left: 15px;' onclick='FileNotFound();'><i class='fa fa-eye'></i></a>";
                }
                Ldhtml += "</div>";
                Ldhtml += "</div>";
                Ldhtml += "</div>";
            }
            $('#accordionSubLeaseDocument').append(Ldhtml);

            //For Identity
            $('#accordionSubIdentity').empty();
            var Html = '';
            if (response.model.PassportDoc != null) {
                if (response.model.PassportDoc != '0') {
                    intCount++;
                    Html += "<div class='panel panel-default'>";
                    Html += "<div class='panel-heading'>";
                    Html += "<h3 class='panel-title'>";
                    Html += "<a data-toggle='collapse' data-parent='#accordionSubIdentity' href='#collapse2Sub1" + intCount + "'><i class='fa fa-file-pdf-o' style='color:red'></i> " + response.model.OriginalPassportDoc + "<i class='fa fa-angle-right pull-right'></i></a>";
                    Html += "</h3>";
                    Html += "</div>";
                    Html += "<div id='collapse2Sub1" + intCount + "' class='panel-collapse collapse'>";
                    Html += "<div class='panel-body'>";
                    var resultPass = doesFileExist('/Content/assets/img/PersonalInformation/' + response.model.PassportDoc);
                    if (resultPass == true) {
                        Html += "<a class='btn btn-primary' data-toggle='tooltip' title='Download' download='" + response.model.OriginalPassportDoc + "' href='/Content/assets/img/PersonalInformation/" + response.model.PassportDoc + "'><i class='fa fa-download'></i></a>";
                        Html += "<a class='btn btn-primary' data-toggle='tooltip' title='View' target='_blank' href='/Content/assets/img/PersonalInformation/" + response.model.PassportDoc + "' style='margin-left: 15px;'><i class='fa fa-eye'></i></a>";
                    }
                    else {
                        Html += "<a class='btn btn-primary' data-toggle='tooltip' title='Download' href='javascript:void(0);' onclick='FileNotFound();'><i class='fa fa-download'></i></a>";
                        Html += "<a class='btn btn-primary' data-toggle='tooltip' title='View' style='margin-left: 15px;' onclick='FileNotFound();'><i class='fa fa-eye'></i></a>";
                    }
                    Html += "</div>";
                    Html += "</div>";
                    Html += "</div>";
                }
            }

            if (response.model.IdentityDoc != null) {
                if (response.model.IdentityDoc != '0') {
                    intCount++;
                    Html += "<div class='panel panel-default'>";
                    Html += "<div class='panel-heading'>";
                    Html += "<h3 class='panel-title'>";
                    Html += "<a data-toggle='collapse' data-parent='#accordionSubIdentity' href='#collapse2Sub2" + intCount + "'><i class='fa fa-file-pdf-o' style='color:red'></i> " + response.model.OriginalIdentityDoc + "<i class='fa fa-angle-right pull-right'></i></a>";
                    Html += "</h3>";
                    Html += "</div>";
                    Html += "<div id='collapse2Sub2" + intCount + "' class='panel-collapse collapse'>";
                    Html += "<div class='panel-body'>";
                    var resultIdent = doesFileExist('/Content/assets/img/PersonalInformation/' + response.model.IdentityDoc);
                    if (resultIdent == true) {
                        Html += "<a class='btn btn-primary' data-toggle='tooltip' title='Download' download='" + response.model.OriginalIdentityDoc + "' href='/Content/assets/img/PersonalInformation/" + response.model.IdentityDoc + "'><i class='fa fa-download'></i></a>";
                        Html += "<a class='btn btn-primary' data-toggle='tooltip' title='View' target='_blank' href='/Content/assets/img/PersonalInformation/" + response.model.IdentityDoc + "' style='margin-left: 15px;'><i class='fa fa-eye'></i></a>";
                    }
                    else {
                        Html += "<a class='btn btn-primary' data-toggle='tooltip' title='Download' href='javascript:void(0);' onclick='FileNotFound();'><i class='fa fa-download'></i></a>";
                        Html += "<a class='btn btn-primary' data-toggle='tooltip' title='View' style='margin-left: 15px;' onclick='FileNotFound();'><i class='fa fa-eye'></i></a>";
                    }
                    Html += "</div>";
                    Html += "</div>";
                    Html += "</div>";
                }
            }
            $('#accordionSubIdentity').append(Html);

            //For Tax Return
            $('#accordionSubTaxReturn').empty();
            var Thtml = '';
            if (response.model.TaxReturnDoc1 != null) {
                if (response.model.TaxReturnDoc1 != '0') {
                    intCount++;
                    Thtml += "<div class='panel panel-default'>";
                    Thtml += "<div class='panel-heading'>";
                    Thtml += "<h3 class='panel-title'>";
                    Thtml += "<a data-toggle='collapse' data-parent='#accordionSubTaxReturn' href='#collapse3Sub1" + intCount + "'><i class='fa fa-file-pdf-o' style='color:red'></i> " + response.model.OriginalTaxReturnDoc1 + "<i class='fa fa-angle-right pull-right'></i></a>";
                    Thtml += "</h3>";
                    Thtml += "</div>";
                    Thtml += "<div id='collapse3Sub1" + intCount + "' class='panel-collapse collapse'>";
                    Thtml += "<div class='panel-body'>";
                    var resultTax1 = doesFileExist('/Content/assets/img/PersonalInformation/' + response.model.TaxReturnDoc1);
                    if (resultTax1 == true) {
                        Thtml += "<a class='btn btn-primary' data-toggle='tooltip' title='Download' download='" + response.model.OriginalTaxReturnDoc1 + "' href='/Content/assets/img/PersonalInformation/" + response.model.TaxReturnDoc1 + "'><i class='fa fa-download'></i></a>";
                        Thtml += "<a class='btn btn-primary' data-toggle='tooltip' title='View' target='_blank' href='/Content/assets/img/PersonalInformation/" + response.model.TaxReturnDoc1 + "' style='margin-left: 15px;'><i class='fa fa-eye'></i></a>";
                    }
                    else {
                        Thtml += "<a class='btn btn-primary' data-toggle='tooltip' title='Download' href='javascript:void(0);' onclick='FileNotFound();'><i class='fa fa-download'></i></a>";
                        Thtml += "<a class='btn btn-primary' data-toggle='tooltip' title='View' style='margin-left: 15px;' onclick='FileNotFound();'><i class='fa fa-eye'></i></a>";
                    }
                    Thtml += "</div>";
                    Thtml += "</div>";
                    Thtml += "</div>";
                }
            }

            if (response.model.TaxReturnDoc2 != null) {
                if (response.model.TaxReturnDoc2 != '0') {
                    intCount++;
                    Thtml += "<div class='panel panel-default'>";
                    Thtml += "<div class='panel-heading'>";
                    Thtml += "<h3 class='panel-title'>";
                    Thtml += "<a data-toggle='collapse' data-parent='#accordionSubTaxReturn' href='#collapse3Sub2" + intCount + "'><i class='fa fa-file-pdf-o' style='color:red'></i> " + response.model.OriginalTaxReturnDoc2 + "<i class='fa fa-angle-right pull-right'></i></a>";
                    Thtml += "</h3>";
                    Thtml += "</div>";
                    Thtml += "<div id='collapse3Sub2" + intCount + "' class='panel-collapse collapse'>";
                    Thtml += "<div class='panel-body'>";
                    var resultTax2 = doesFileExist('/Content/assets/img/PersonalInformation/' + response.model.TaxReturnDoc2);
                    if (resultTax2 == true) {
                        Thtml += "<a class='btn btn-primary' data-toggle='tooltip' title='Download' download='" + response.model.OriginalTaxReturnDoc2 + "' href='/Content/assets/img/PersonalInformation/" + response.model.TaxReturnDoc2 + "'><i class='fa fa-download'></i></a>";
                        Thtml += "<a class='btn btn-primary' data-toggle='tooltip' title='View' target='_blank' href='/Content/assets/img/PersonalInformation/" + response.model.TaxReturnDoc2 + "' style='margin-left: 15px;'><i class='fa fa-eye'></i></a>";
                    }
                    else {
                        Thtml += "<a class='btn btn-primary' data-toggle='tooltip' title='Download' href='javascript:void(0);' onclick='FileNotFound();'><i class='fa fa-download'></i></a>";
                        Thtml += "<a class='btn btn-primary' data-toggle='tooltip' title='View' style='margin-left: 15px;' onclick='FileNotFound();'><i class='fa fa-eye'></i></a>";
                    }
                    Thtml += "</div>";
                    Thtml += "</div>";
                    Thtml += "</div>";
                }
            }

            if (response.model.TaxReturnDoc3 != null) {
                if (response.model.TaxReturnDoc3 != '0') {
                    intCount++;
                    Thtml += "<div class='panel panel-default'>";
                    Thtml += "<div class='panel-heading'>";
                    Thtml += "<h3 class='panel-title'>";
                    Thtml += "<a data-toggle='collapse' data-parent='#accordionSubTaxReturn' href='#collapse3Sub3" + intCount + "'><i class='fa fa-file-pdf-o' style='color:red'></i> " + response.model.OriginalTaxReturnDoc3 + "<i class='fa fa-angle-right pull-right'></i></a>";
                    Thtml += "</h3>";
                    Thtml += "</div>";
                    Thtml += "<div id='collapse3Sub3" + intCount + "' class='panel-collapse collapse'>";
                    Thtml += "<div class='panel-body'>";
                    var resultTax3 = doesFileExist('/Content/assets/img/PersonalInformation/' + response.model.TaxReturnDoc3);
                    if (resultTax3 == true) {
                        Thtml += "<a class='btn btn-primary' data-toggle='tooltip' title='Download' download='" + response.model.OriginalTaxReturnDoc3 + "' href='/Content/assets/img/PersonalInformation/" + response.model.TaxReturnDoc3 + "'><i class='fa fa-download'></i></a>";
                        Thtml += "<a class='btn btn-primary' data-toggle='tooltip' title='View' target='_blank' href='/Content/assets/img/PersonalInformation/" + response.model.TaxReturnDoc3 + "' style='margin-left: 15px;'><i class='fa fa-eye'></i></a>";
                    }
                    else {
                        Thtml += "<a class='btn btn-primary' data-toggle='tooltip' title='Download' href='javascript:void(0);' onclick='FileNotFound();'><i class='fa fa-download'></i></a>";
                        Thtml += "<a class='btn btn-primary' data-toggle='tooltip' title='View' style='margin-left: 15px;' onclick='FileNotFound();'><i class='fa fa-eye'></i></a>";
                    }
                    Thtml += "</div>";
                    Thtml += "</div>";
                    Thtml += "</div>";
                }
            }

            $('#accordionSubTaxReturn').append(Thtml);
        }
    });
};

var goToStep = function (stepid, id) {
    if (stepid == "1") {
        $("#li1").addClass("active");
        $("#step1").removeClass("hidden");

        $("#step2").addClass("hidden");
        $("#li2").removeClass("active");
        $("#step3").addClass("hidden");
        $("#li3").removeClass("active");
        $("#step4").addClass("hidden");
        $("#li4").removeClass("active");
        $("#step5").addClass("hidden");
        $("#li5").removeClass("active");
        $("#li6").removeClass("active");
        $("#step6").addClass("hidden");
        $("#step7").addClass("hidden");
        $("#li7").removeClass("active");
        $("#step8").addClass("hidden");
        $("#li8").removeClass("active");
        $("#li9").removeClass("active");
        $("#step9").addClass("hidden");
        $("#li10").removeClass("active");
        $("#step10").addClass("hidden");
        $("#li11").removeClass("active");
        $("#step11").addClass("hidden");
        $("#li12").removeClass("active");
        $("#step12").addClass("hidden");
        $("#li13").removeClass("active");
        $("#step13").addClass("hidden");
    }
    if (stepid == "2") {
        //$.get("../../Lease/Edit/?id=" + id, function (data) {
        //    $("#step2").html(data);
        //});
        $("#li2").addClass("active");
        $("#step2").removeClass("hidden");


        $("#step1").addClass("hidden");
        $("#li1").removeClass("active");
        $("#step3").addClass("hidden");
        $("#li3").removeClass("active");
        $("#step4").addClass("hidden");
        $("#li4").removeClass("active");
        $("#step5").addClass("hidden");
        $("#li5").removeClass("active");
        $("#li6").removeClass("active");
        $("#step6").addClass("hidden");
        $("#step7").addClass("hidden");
        $("#li7").removeClass("active");
        $("#step8").addClass("hidden");
        $("#li8").removeClass("active");
        $("#li9").removeClass("active");
        $("#step9").addClass("hidden");
        $("#li10").removeClass("active");
        $("#step10").addClass("hidden");
        $("#li11").removeClass("active");
        $("#step11").addClass("hidden");
        $("#li12").removeClass("active");
        $("#step12").addClass("hidden");
        $("#li13").removeClass("active");
        $("#step13").addClass("hidden");
    }
    if (stepid == "3") {
        //getUpTransationLists();
        //getAllDues();
        //getTransationLists();
        //getPaymentAccountsCreditCard();
        $("#li3").addClass("active");
        $("#step3").removeClass("hidden");

        $("#step1").addClass("hidden");
        $("#li1").removeClass("active");
        $("#step2").addClass("hidden");
        $("#li2").removeClass("active");
        $("#step4").addClass("hidden");
        $("#li4").removeClass("active");
        $("#step5").addClass("hidden");
        $("#li5").removeClass("active");
        $("#li6").removeClass("active");
        $("#step6").addClass("hidden");
        $("#step7").addClass("hidden");
        $("#li7").removeClass("active");
        $("#step8").addClass("hidden");
        $("#li8").removeClass("active");
        $("#li9").removeClass("active");
        $("#step9").addClass("hidden");
        $("#li10").removeClass("active");
        $("#step10").addClass("hidden");
        $("#li11").removeClass("active");
        $("#step11").addClass("hidden");
        $("#li12").removeClass("active");
        $("#step12").addClass("hidden");
        $("#li13").removeClass("active");
        $("#step13").addClass("hidden");
    }
    if (stepid == "4") {
        getServiceRequestList();
        serviceRequestChangeDDL();
        getServiceInfo();

        $("#li4").addClass("active");
        $("#step4").removeClass("hidden");

        $("#step1").addClass("hidden");
        $("#li1").removeClass("active");
        $("#step2").addClass("hidden");
        $("#li2").removeClass("active");
        $("#step3").addClass("hidden");
        $("#li3").removeClass("active");
        $("#step5").addClass("hidden");
        $("#li5").removeClass("active");
        $("#li6").removeClass("active");
        $("#step6").addClass("hidden");
        $("#step7").addClass("hidden");
        $("#li7").removeClass("active");
        $("#step8").addClass("hidden");
        $("#li8").removeClass("active");
        $("#li9").removeClass("active");
        $("#step9").addClass("hidden");
        $("#li10").removeClass("active");
        $("#step10").addClass("hidden");
        $("#li11").removeClass("active");
        $("#step11").addClass("hidden");
        $("#li12").removeClass("active");
        $("#step12").addClass("hidden");
        $("#li13").removeClass("active");
        $("#step13").addClass("hidden");
    }
    if (stepid == "5") {
        $("#step5").removeClass("hidden");
        //getVehicleLists();
        $("#li5").addClass("active");

        $("#step1").addClass("hidden");
        $("#li1").removeClass("active");
        $("#step2").addClass("hidden");
        $("#li2").removeClass("active");
        $("#step3").addClass("hidden");
        $("#li3").removeClass("active");
        $("#step4").addClass("hidden");
        $("#li4").removeClass("active");
        $("#li6").removeClass("active");
        $("#step6").addClass("hidden");
        $("#step7").addClass("hidden");
        $("#li7").removeClass("active");
        $("#step8").addClass("hidden");
        $("#li8").removeClass("active");
        $("#li9").removeClass("active");
        $("#step9").addClass("hidden");
        $("#li10").removeClass("active");
        $("#step10").addClass("hidden");
        $("#li11").removeClass("active");
        $("#step11").addClass("hidden");
        $("#li12").removeClass("active");
        $("#step12").addClass("hidden");
        $("#li13").removeClass("active");
        $("#step13").addClass("hidden");

    }
    if (stepid == "6") {
        //getPetLists();
        $("#li6").addClass("active");
        $("#step6").removeClass("hidden");


        $("#step1").addClass("hidden");
        $("#li1").removeClass("active");
        $("#step2").addClass("hidden");
        $("#li2").removeClass("active");
        $("#step3").addClass("hidden");
        $("#li3").removeClass("active");
        $("#step4").addClass("hidden");
        $("#li4").removeClass("active");
        $("#step5").addClass("hidden");
        $("#li5").removeClass("active");
        $("#step7").addClass("hidden");
        $("#li7").removeClass("active");
        $("#step8").addClass("hidden");
        $("#li8").removeClass("active");
        $("#li9").removeClass("active");
        $("#step9").addClass("hidden");
        $("#li10").removeClass("active");
        $("#step10").addClass("hidden");
        $("#li11").removeClass("active");
        $("#step11").addClass("hidden");
        $("#li12").removeClass("active");
        $("#step12").addClass("hidden");
        $("#li13").removeClass("active");
        $("#step13").addClass("hidden");

    }
    if (stepid == "7") {
        copyGuestName();
        document.getElementById('fileUploadGuestDriverLicence').onchange = function () {
            uploadGuestDriverLicence();
        };
        document.getElementById('fileUploadGuestRegistration').onchange = function () {
            uploadGuestVehicleRegistration();
        };
        getServiceInfo();
        $("#li7").addClass("active");
        $("#step7").removeClass("hidden");


        $("#step1").addClass("hidden");
        $("#li1").removeClass("active");
        $("#step2").addClass("hidden");
        $("#li2").removeClass("active");
        $("#step3").addClass("hidden");
        $("#li3").removeClass("active");
        $("#step4").addClass("hidden");
        $("#li4").removeClass("active");
        $("#step5").addClass("hidden");
        $("#li5").removeClass("active");
        $("#step6").addClass("hidden");
        $("#li6").removeClass("active");
        $("#step8").addClass("hidden");
        $("#li8").removeClass("active");
        $("#li9").removeClass("active");
        $("#step9").addClass("hidden");
        $("#li10").removeClass("active");
        $("#step10").addClass("hidden");
        $("#li11").removeClass("active");
        $("#step11").addClass("hidden");
        $("#li12").removeClass("active");
        $("#step12").addClass("hidden");
        $("#li13").removeClass("active");
        $("#step13").addClass("hidden");

    }

    if (stepid == "8") {
        getServiceInfo();
        $("#li8").addClass("active");
        $("#step8").removeClass("hidden");

        $("#step1").addClass("hidden");
        $("#li1").removeClass("active");
        $("#step2").addClass("hidden");
        $("#li2").removeClass("active");
        $("#step3").addClass("hidden");
        $("#li3").removeClass("active");
        $("#step4").addClass("hidden");
        $("#li4").removeClass("active");
        $("#step5").addClass("hidden");
        $("#li5").removeClass("active");
        $("#step6").addClass("hidden");
        $("#li6").removeClass("active");
        $("#li7").removeClass("active");
        $("#step7").addClass("hidden");

        $("#li9").removeClass("active");
        $("#step9").addClass("hidden");
        $("#li10").removeClass("active");
        $("#step10").addClass("hidden");
        $("#li11").removeClass("active");
        $("#step11").addClass("hidden");
        $("#li12").removeClass("active");
        $("#step12").addClass("hidden");
        $("#li13").removeClass("active");
        $("#step13").addClass("hidden");

    }

    if (stepid == "9") {

        $("#li9").addClass("active");
        $("#step9").removeClass("hidden");

        $("#step1").addClass("hidden");
        $("#li1").removeClass("active");
        $("#step2").addClass("hidden");
        $("#li2").removeClass("active");
        $("#step3").addClass("hidden");
        $("#li3").removeClass("active");
        $("#step4").addClass("hidden");
        $("#li4").removeClass("active");
        $("#step5").addClass("hidden");
        $("#li5").removeClass("active");
        $("#step6").addClass("hidden");
        $("#li6").removeClass("active");
        $("#li7").removeClass("active");
        $("#step7").addClass("hidden");

        $("#li8").removeClass("active");
        $("#step8").addClass("hidden");
        $("#li10").removeClass("active");
        $("#step10").addClass("hidden");
        $("#li11").removeClass("active");
        $("#step11").addClass("hidden");
        $("#li12").removeClass("active");
        $("#step12").addClass("hidden");
        $("#li13").removeClass("active");
        $("#step13").addClass("hidden");
    }
    if (stepid == "10") {
        $("#li10").addClass("active");
        $("#step10").removeClass("hidden");

        $("#step1").addClass("hidden");
        $("#li1").removeClass("active");
        $("#step2").addClass("hidden");
        $("#li2").removeClass("active");
        $("#step3").addClass("hidden");
        $("#li3").removeClass("active");
        $("#step4").addClass("hidden");
        $("#li4").removeClass("active");
        $("#step5").addClass("hidden");
        $("#li5").removeClass("active");
        $("#step6").addClass("hidden");
        $("#li6").removeClass("active");
        $("#li7").removeClass("active");
        $("#step7").addClass("hidden");

        $("#li8").removeClass("active");
        $("#step8").addClass("hidden");
        $("#li9").removeClass("active");
        $("#step9").addClass("hidden");
        $("#li11").removeClass("active");
        $("#step11").addClass("hidden");
        $("#li12").removeClass("active");
        $("#step12").addClass("hidden");
        $("#li13").removeClass("active");
        $("#step13").addClass("hidden");
    }
    if (stepid == "11") {
        $("#li11").addClass("active");
        $("#step11").removeClass("hidden");

        $("#step1").addClass("hidden");
        $("#li1").removeClass("active");
        $("#step2").addClass("hidden");
        $("#li2").removeClass("active");
        $("#step3").addClass("hidden");
        $("#li3").removeClass("active");
        $("#step4").addClass("hidden");
        $("#li4").removeClass("active");
        $("#step5").addClass("hidden");
        $("#li5").removeClass("active");
        $("#step6").addClass("hidden");
        $("#li6").removeClass("active");
        $("#li7").removeClass("active");
        $("#step7").addClass("hidden");
        $("#li8").removeClass("active");
        $("#step8").addClass("hidden");
        $("#li9").removeClass("active");
        $("#step9").addClass("hidden");
        $("#li10").removeClass("active");
        $("#step10").addClass("hidden");

        $("#li12").removeClass("active");
        $("#step12").addClass("hidden");
        $("#li13").removeClass("active");
        $("#step13").addClass("hidden");
    }
    if (stepid == "12") {
        $("#li12").addClass("active");
        $("#step12").removeClass("hidden");

        $("#step1").addClass("hidden");
        $("#li1").removeClass("active");
        $("#step2").addClass("hidden");
        $("#li2").removeClass("active");
        $("#step3").addClass("hidden");
        $("#li3").removeClass("active");
        $("#step4").addClass("hidden");
        $("#li4").removeClass("active");
        $("#step5").addClass("hidden");
        $("#li5").removeClass("active");
        $("#step6").addClass("hidden");
        $("#li6").removeClass("active");
        $("#li7").removeClass("active");
        $("#step7").addClass("hidden");
        $("#li8").removeClass("active");
        $("#step8").addClass("hidden");
        $("#li9").removeClass("active");
        $("#step9").addClass("hidden");
        $("#li10").removeClass("active");
        $("#step10").addClass("hidden");
        $("#li11").removeClass("active");
        $("#step11").addClass("hidden");

        $("#li13").removeClass("active");
        $("#step13").addClass("hidden");
    }
    if (stepid == "13") {
        $("#li13").addClass("active");
        $("#step13").removeClass("hidden");

        $("#step1").addClass("hidden");
        $("#li1").removeClass("active");
        $("#step2").addClass("hidden");
        $("#li2").removeClass("active");
        $("#step3").addClass("hidden");
        $("#li3").removeClass("active");
        $("#step4").addClass("hidden");
        $("#li4").removeClass("active");
        $("#step5").addClass("hidden");
        $("#li5").removeClass("active");
        $("#step6").addClass("hidden");
        $("#li6").removeClass("active");
        $("#li7").removeClass("active");
        $("#step7").addClass("hidden");
        $("#li8").removeClass("active");
        $("#step8").addClass("hidden");
        $("#li9").removeClass("active");
        $("#step9").addClass("hidden");
        $("#li10").removeClass("active");
        $("#step10").addClass("hidden");
        $("#li11").removeClass("active");
        $("#step11").addClass("hidden");
        $("#li12").removeClass("active");
        $("#step12").addClass("hidden");

    }

};
//My profile



var getTenantData = function (userID) {
    //alert(userID);
    var params = { TenantID: userID };
    $.ajax({
        url: "../GetTenantInfo",
        method: "post",
        data: JSON.stringify(params),
        contentType: "application/json; charset=utf-8", // content type sent to server
        dataType: "json", //Expected data format from server
        success: function (response) {

            if ($.trim(response.error) != "") {
                //showMessage("Error!", response.error);
            } else {
                $("#hndNewTenant").val(response.ID);
                $("#txtFirstName").val(response.FirstName);
                $("#txtMiddleInitial").val(response.MiddleInitial);
                $("#txtLastName").val(response.LastName);

                $("#txtAddress").val(response.Address);
                $("#txtCity").val(response.City);

                $("#txtZip").val(response.Zip);
                $("#ddlGender").val(response.Gender);
                $("#txtJobCode").val(response.JobCode);
                $("#txtWorkPhone").val(response.OfficePhone);
                $("#txtHomePhone").val(response.HomePhone);
                $("#txtWorkExtension").val(response.OfficePhoneExtension);
                $("#txtOfficeEmail").val(response.OfficeEmail);
                $("#txtOfficeName").val(response.OfficeName);
                $("#txtOfficeAddress").val(response.OfficeAddress);
                $("#txtOfficeCity").val(response.OfficeCity);

                $("#txtOfficeZip").val(response.OfficeZip);
                $("#txtOccupation").val(response.Occupation);
                $("#txtSocialSecurityNumber").val(response.SocialSecurityNum);
                $("#txtDrivingLicense").val(response.DriverLicense);
                $("#txtDateOfBirth").val(response.DateOfBirthText);
                $("#txtCarMake").val(response.CarMake);
                $("#txtCarModel").val(response.CarModel);
                $("#txtCarLicense").val(response.CarLic);
                $("#txtEmergencyContact").val(response.EmergencyContact);
                $("#txtEmergencyPhone").val(response.EmergencyPhone);
                $("#txtIncome").val(response.Income);
                $("#txtEmployerContact").val(response.EmployerContact);

                $("#txtRentResp").val(response.RentResp);

                $("#ddlGender").val(response.Gender);
                $("#ddlGender").trigger('change');

                $("#ddlMaritalStatus").val(response.MaritalStatus);
                $("#ddlMaritalStatus").trigger('change');



                setTimeout(function () {
                    $("#ddlState").val(response.State);
                    $("#ddlState").trigger('change');

                    $("#ddlOfficeState").val(response.OfficeState);
                    $("#ddlOfficeState").trigger('change');

                    $("#ddlProperty").val(response.PropertyID);
                    $("#ddlProperty").trigger('change');

                }, 1200);

                setTimeout(function () {

                    $("#ddlCity").val(response.City);
                    $("#ddlCity").trigger('change');

                    $("#ddlOfficeCity").val(response.OfficeCity);
                    $("#ddlOfficeCity").trigger('change');


                    $("#ddlUnit").val(response.UnitID);
                    $("#ddlUnit").trigger('change');
                }, 1600);



                $("#ddlStudentStatus").val(response.StudentStatus);
                $("#ddlStudentStatus").trigger('change');

                if ($("#hndNewTenant").val() != "0") {
                    $("#spanSaveUpdate").text("Update");
                }
                else {
                    $("#spanSaveUpdate").text("Save");
                }

            }
        }
    });
}

// piyush
var getServiceInfo = function () {
    var tenantId = $("#hndNewTenant").val();
    var model = {
        TenantId: tenantId,
    };
    $.ajax({
        url: '/ServiceRequest/GetServiceInfo',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#lblNameUnitAccess").text(response.msg.Name);
            $("#lblUnitUnitAccess").text(response.msg.Unit);
            $("#lblPhoneUnitAccess").text(response.msg.Phone);
            $("#lblEmergencyPhoneUnitAccess").text(response.msg.EmergencyPhone);
            $("#lblEmailUnitAccess").text(response.msg.Email);
            $("#lblEmailUnitAccess").text(response.msg.Email);
            $("#spanTenantSignName").text(response.msg.Name);
        }
    });
}

var GetTenantDetails = function (TenantID) {

    var params = { TenantID: $("#hndNewTenant").val() };
    $.ajax({
        url: "/MyAccount/GetTenantDetails",
        method: "post",
        data: JSON.stringify(params),
        contentType: "application/json; charset=utf-8", // content type sent to server
        dataType: "json", //Expected data format from server
        success: function (response) {

            if ($.trim(response.error) != "") {
                //showMessage("Error!", response.error);
            } else {
                $("#hndNewTenant").val(response.ID);
                $("#FirstName").text(response.FirstName + " " + response.LastName);
                $("#Mobile").text(response.Mobile);
                $("#Email").text(response.Email);

                $("#FirstName1").text(response.FirstName + " " + response.LastName);
                $("#Mobile1").text(response.Mobile);
                $("#Email1").text(response.Email);

                $("#EmFirstName").text(response.EmFirstNane + " " + response.EmLastName);
                $("#EmRelationship").text(response.EmRelation);
                $("#EmAddress").text(response.EmergencyAddress1);
                $("#EmMobile").text(response.EmMobile);
                $("#EmWorkPhone").text(response.EmWorkPhone);
                $("#EmEmail").text(response.EmEmail);
                $("#EmAddress").text(response.EmAddress1 + "" + response.EmAddress1);

                $("#txtFirstName").val(response.FirstName);
                $("#txtLastName").val(response.LastName);
                $("#txtMobile").val(response.Mobile);
                $("#txtEmail").val(response.Email);
                $("#txtMiddleName").val(response.MiddleInitial);


                $("#txtEmFirstName").val(response.EmFirstNane);
                $("#txtEmLastName").val(response.EmLastName);
                $("#txtEmRelationship").val(response.EmRelation);
                $("#txtEmergencyAddress1").val(response.EmAddress1);
                $("#txtEmergencyAddress2").val(response.EmAddress2);
                $("#txtEmMobile").val(response.EmMobile);
                $("#txtEmHomePhone").val(response.EmHomePhone);
                $("#txtEmWorkPhone").val(response.EmWorkPhone);
                $("#txtEmEmail").val(response.EmEmail);

                $("#EmployerName").text(response.EmployerName);
                $("#JobTitle").text(response.JobTitle);
                $("#JobType").text(response.JobTypeString);
                $("#txtEmployerName").val(response.EmployerName);
                $("#txtJobTitle").val(response.JobTitle);
                $('#imgTenantProfilePicture').attr('src');
                if (response.TempProfilePic != null) {
                    var fileExist = doesFileExist('/Content/assets/img/tenantProfile/' + response.TempProfilePic);
                    if (fileExist) {
                        $('#imgTenantProfilePicture').attr('src', '/Content/assets/img/tenantProfile/' + response.TempProfilePic);
                    }
                    else {
                        $('#imgTenantProfilePicture').attr('src', '/Content/assets/img/Circle.png');
                    }
                }
                else {
                    $('#imgTenantProfilePicture').attr('src', '/Content/assets/img/Circle.png');
                }
                setTimeout(function () {
                    $("#ddlJobType").find("option[value='" + response.JobType + "']").attr('selected', 'selected');
                }, 1500);

                $("#ddlGender").val(response.Gender);
                $("#ddlGender").trigger('change');

                $("#ddlMaritalStatus").val(response.MaritalStatus);
                $("#ddlMaritalStatus").trigger('change');



                setTimeout(function () {
                    $("#ddlState").val(response.State);
                    $("#ddlState").trigger('change');

                    $("#ddlOfficeState").val(response.OfficeState);
                    $("#ddlOfficeState").trigger('change');

                    $("#ddlProperty").val(response.PropertyID);
                    $("#ddlProperty").trigger('change');

                }, 1200);

                setTimeout(function () {

                    $("#ddlCity").val(response.City);
                    $("#ddlCity").trigger('change');

                    $("#ddlOfficeCity").val(response.OfficeCity);
                    $("#ddlOfficeCity").trigger('change');


                    $("#ddlUnit").val(response.UnitID);
                    $("#ddlUnit").trigger('change');
                }, 1600);



                $("#ddlStudentStatus").val(response.StudentStatus);
                $("#ddlStudentStatus").trigger('change');

                if ($("#hndNewTenant").val() != "0") {
                    $("#spanSaveUpdate").text("Update");
                }
                else {
                    $("#spanSaveUpdate").text("Save");
                }

            }
        }
    });
}

var UpdateContactInfo = function () {
    var msg = '';
    var tenantId = $("#hndNewTenant").val();
    var firstName = $("#txtFirstName").val();
    var middleName = $("#txtMiddleName").val();
    var lastName = $("#txtLastName").val();
    var mobile = $("#txtMobile").val();
    var email = $("#txtEmail").val();


    if (firstName == '') {
        msg += 'Plese Enter First Name</br>'
    }
    if (lastName == '') {
        msg += 'Plese Enter Last Name</br>'
    }

    if (mobile == '') {
        msg += 'Plese Enter The Mobile Number</br>'
    }
    if (email == '') {
        msg += 'Plese Enter The Email</br>'
    }

    if (msg != '') {
        $.alert({
            title: "",
            content: msg,
            type: 'red'
        });
        return
    }
    var model = {
        ID: tenantId,
        FirstName: firstName,
        MiddleInitial: middleName,
        LastName: lastName,
        Mobile: mobile,
        Email: email,
    };

    $.ajax({
        url: "/MyAccount/UpdateContactInfo",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#popContactInfo").modal("hide");
            $.alert({
                title: "",
                content: "Progress Saved.",
                type: 'blue'
            });
            GetTenantDetails($("#hndNewTenant").val());

        }
    });
};

var UpdateWorkInfo = function () {
    var msg = '';
    var tenantId = $("#hndNewTenant").val();
    var employername = $("#txtEmployerName").val();
    var jobtitle = $("#txtJobTitle").val();
    var jobtype = $("#ddlJobType").val();



    if (employername == '') {
        msg += 'Plese Enter Employer Name</br>'
    }
    //if (lastName == '') {
    //    msg += 'Plese Enter Last Name</br>'
    //}

    //if (mobile == '') {
    //    msg += 'Plese Enter The Mobile Number</br>'
    //}
    //if (email == '') {
    //    msg += 'Plese Enter The Email</br>'
    //}

    if (msg != '') {
        $.alert({
            title: "",
            content: msg,
            type: 'red'
        });
        return
    }
    var model = {
        ID: tenantId,
        EmployerName: employername,
        JobTitle: jobtitle,
        JobType: jobtype,

    };

    $.ajax({
        url: "/MyAccount/UpdateWorkInfo",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#popWorkInfo").modal("hide");
            $.alert({
                title: "",
                content: "Progress Saved.",
                type: 'blue'
            });
            GetTenantDetails($("#hndNewTenant").val());

        }
    });
};

var UpdateEmContactInfo = function () {

    var msg = '';

    var tenantId = $("#hndNewTenant").val();
    var emfirstName = $("#txtEmFirstName").val();
    var emlastName = $("#txtEmLastName").val();
    var emRelationship = $("#txtEmRelationship").val();
    var emEmergencyAddress1 = $("#txtEmergencyAddress1").val();
    var emEmergencyAddress2 = $("#txtEmergencyAddress2").val();
    var emMobile = $("#txtEmMobile").val();
    var emHomePhone = $("#txtEmHomePhone").val();
    var emWorkPhone = $("#txtEmWorkPhone").val();

    var emEmail = $("#txtEmEmail").val();



    if (emfirstName == '') {
        msg += 'Plese Enter First Name</br>'
    }
    if (emlastName == '') {
        msg += 'Plese Enter Last Name</br>'
    }

    if (emRelationship == '') {
        msg += 'Plese Enter The Relationship</br>'
    }
    if (emMobile == '') {
        msg += 'Plese Enter The Mobile</br>'
    }
    if (emEmail == '') {
        msg += 'Plese Enter The Email</br>'
    }


    if (msg != '') {
        $.alert({
            title: "",
            content: msg,
            type: 'red'
        });
        return
    }


    var model = {
        ID: tenantId,
        EmFirstNane: emfirstName,
        EmLastName: emlastName,
        EmEmail: emEmail,
        EmMobile: emMobile,
        EmWorkPhone: emWorkPhone,
        EmHomePhone: emHomePhone,
        EmRelation: emRelationship,
        EmAddress1: emEmergencyAddress1,
        EmAddress2: emEmergencyAddress2,
    };

    $.ajax({
        url: "/MyAccount/UpdateEmContactInfo",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#popEmergencyContact").modal("hide");
            $.alert({
                title: "",
                content: "Progress Saved.",
                type: 'blue'
            });
            GetTenantDetails($("#hndNewTenant").val());

        }
    });
};

var getTenantVehicleList = function () {

    var model = {

        TenantID: $("#hndUserId").val(),
    }
    $.ajax({
        url: "/Vehicle/GetProfileVehicleList",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {

            $("#tblVehicle>tbody").empty();
            $.each(response.model, function (elementType, elementValue) {
                var html = "<tr data-value=" + elementValue.Vehicle_ID + ">";
                html += "<td style='width:80px'>" + elementValue.Year + "</td>";
                html += "<td style='width:120px'>" + elementValue.VModel + "</td>";
                html += "<td sstyle='width:70px'>" + elementValue.Color + "</td>";
                $("#tblVehicle>tbody").append(html);
            });
        }
    });
}

var saveupdateVehiclepop = function () {

    var msg = "";
    var vid = $("#hndVehicleID").val();
    var vtype = $("#ddlVehicleType").val();
    var vmake = $("#txtVehicleMake").val();
    var vmodel = $("#txtVehicleModel").val();
    var vyear = $("#ddlVehicleyear").val();
    var vcolor = $("#txtVehicleColor").val();
    var vlicence = $("#txtVehicleLicence").val();
    var vstate = $("#ddlVState").val();
    var vfileUploadVehicleRegistation = $("#fileUploadVehicleRegistation").val();
    var prospectID = $("#hdnOPId").val();
    var TenantID = $("#hndNewTenant").val();

    var vehicleRegistration = document.getElementById("fileUploadVehicleRegistation");
    var vOwnerName = $("#txtVehicleOwnerName").val();
    var vNotes = $("#txtVehicleNote").val();
    var vRegistationCert = $("#hndVehicleRegistation").val();
    var vOriginalRegistationCert = $("#hndOriginalVehicleRegistation").val();


    if (!vmake) {
        msg += "Enter Vehicle Make</br>";
    }
    if (!vlicence) {
        msg += "Enter Vehicle Licence</br>";
    }
    if (vyear == "0") {
        msg += "Enter Vehicle Year</br>";
    }
    if (vstate == "0") {
        msg += "Select Vehicle State</br>";
    }
    if ($("#hndVehicleRegistation").val() == '0') {
        if (document.getElementById("fileUploadVehicleRegistation").files.length == '0') {
            msg += "Upload The Vehicle Registration Certificate</br>";
        }
    }
    if (msg != "") {
        $.alert({
            title: "",
            content: msg,
            type: 'red'
        });
        return;
    }


    $formData = new FormData();
    $formData.append('Vehicle_ID', vid);
    $formData.append('Make', vmake);
    $formData.append('VModel', vmodel);
    $formData.append('Year', vyear);
    $formData.append('Color', vcolor);
    $formData.append('State', vstate);
    $formData.append('License', vlicence);
    $formData.append('TenantID', $("#hndNewTenant").val());
    $formData.append('OwnerName', vOwnerName);
    $formData.append('Notes', vNotes);
    $formData.append('VehicleRegistration', vRegistationCert);
    $formData.append('OriginalVehicleRegistation', vOriginalRegistationCert);
    $formData.append('UserId', $('#hndUserId').val());
    $.ajax({
        url: "/Tenant/Vehicle/SaveUpdateVehicleTenanat/",
        type: "post",
        contentType: "application/json utf-8",
        data: $formData,
        contentType: false,
        processData: false,
        dataType: "JSON",
        success: function (response) {
            $.alert({
                title: "",
                content: "Progress Saved.",
                type: 'red',
            });
        }

    });
    getTenantVehicleList($("#hndNewTenant").val());
    $("#popVehicle").modal("hide");
}


var getVehicletInfo = function (id) {

    $("#popVehicle").modal("show");
    var model = {
        VehicleId: id
    };
    $.ajax({
        url: '/Vehicle/GetVehicleInfo/',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#hndVehicleID").val(response.model.Vehicle_ID);
            $("#txtVehicleOwnerName").val(response.model.OwnerName);
            $("#txtVehicleNote").val(response.model.Notes);
            $("#ddlVehicleyear").val(response.model.Year);
            $("#txtVehicleMake").val(response.model.Make);
            $("#txtVehicleModel").val(response.model.VModel);
            $("#txtVehicleColor").val(response.model.Color);
            $("#txtVehicleLicence").val(response.model.License);
            $("#ddlVState").val(response.model.State);
            //   $("#VehicleRegistationShow").text(response.model.OriginalVehicleRegistation);
            $("#hndVehicleRegistation").val(response.model.VehicleRegistration);
            $("#hndOriginalVehicleRegistation").val(response.model.OriginalVehicleRegistation);
            if (response.model.OriginalVehicleRegistation != '') {
                $("#VehicleRegistationShow").text(response.model.OriginalVehicleRegistation);
            }


        }
    });
};

var delVehicle = function (vehId) {

    var model = {
        VID: vehId
    };

    $.alert({
        title: "",
        content: "Are you sure to remove Vehicle?",
        type: 'blue',
        buttons: {
            yes: {
                text: 'Yes',
                action: function (yes) {
                    $.ajax({
                        url: "/Vehicle/DeleteTenantVehicle",
                        type: "post",
                        contentType: "application/json utf-8",
                        data: JSON.stringify(model),
                        dataType: "JSON",
                        success: function (response) {
                            $('#tr_' + vehId).remove();
                        }
                    });
                    getTenantVehicleList($("#hndNewTenant").val());
                }
            },
            no: {
                text: 'No',
                action: function (no) {
                }
            }
        }
    });
};
var UpdatePasswordUser = function () {
    var msg = '';
    var tenantId = $("#hndNewTenant").val();
    var oldPassword = $("#txtOldPassword").val();
    var newPassword = $("#txtNewPassword").val();
    var confirmNewPassword = $("#txtConfirmNewPassword").val();


    if (oldPassword == '') {
        msg += 'Plese Enter Old Password </br>'
    }
    if (newPassword == '') {
        msg += 'Plese Enter New Password </br>'
    }
    if (confirmNewPassword == '') {
        msg += 'Plese Enter Confirm New Password </br>'
    }

    if (newPassword != confirmNewPassword) {
        msg += 'Confirm New Password does not Match</br>'
    }


    if (msg != '') {
        $.alert({
            title: "",
            content: msg,
            type: 'red'
        });
        return
    }
    var model = {
        OldPassword: oldPassword,
        NewPassword: newPassword,
        ConfirmNewPassword: confirmNewPassword,
    };

    $.ajax({
        url: "/Users/UpdatePasswordUser",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#popChangePsw").modal("hide");
            $.alert({
                title: "",
                content: response.model,
                type: 'blue'
            });


        }
    });
};

var clearVehiclepop = function () {
    $("#hndVehicleID").val(0);
    $("#txtVehicleMake").val("");
    $("#txtVehicleModel").val("");
    $("#txtVehicleNote").val("");
    $("#txtVehicleOwnerName").val("");
    $("#txtVehicleColor").val("");
    $("#txtVehicleLicence").val("");
    $("#ddlVState").val(0);
    $("#ddlVehicleyear").val(0);

}

var uploadVehicleCertificatepop = function () {

    $formData = new FormData();

    var vehicleCertificate = document.getElementById('fileUploadVehicleRegistation');

    for (var i = 0; i < vehicleCertificate.files.length; i++) {
        $formData.append('file-' + i, vehicleCertificate.files[i]);
    }

    $.ajax({
        url: '/ApplyNow/UploadVehicleRegistation',
        type: 'post',
        data: $formData,
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            $('#hndVehicleRegistation').val(response.model.TempVehicleRegistation);
            $('#hndOriginalVehicleRegistation').val(response.model.OriginalVehicleRegistation);
            $('#VehicleRegistationShow').text(response.model.OriginalVehicleRegistation);
            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'red'
            });
        }
    });
};

var addApplicant = function (at) {

    if (at == 1) {

        $("#ddlApplicantType").text("Co-Applicant");
        //$("#popApplicant").PopupWindow("setTitle", "Add Applicant");
        var modal = $(popApplicant);
        modal.find('.modal-title').text('Add Applicant');
        $("#appphone").removeClass("hidden");
        $("#appemail").removeClass("hidden");
        $("#apprelationship").addClass("hidden");
        $//("#ddlGRelationship").removeClass("hidden");
        //$("#ddlGRelationship").val(response.model.Relationship).change();
        //$("#ddlARelationship").addClass("hidden");
        $("#ddlARelationship").empty();
        var opt = "<option value='0'>Select Relationship</option>";
        opt += "<option value='1'>Spouse</option>";
        opt += "<option value='2'>Partner</option>";
        opt += "<option value='3'>Adult Child</option>";
        opt += "<option value='4'>Friend/Roommate</option>";

        $("#ddlARelationship").append(opt);
        $("#ddlARelationship").val(0).change();
        var dtApp = new Date();
        dtApp.setFullYear(new Date().getFullYear() - 18);
        $('#txtADateOfBirth').datepicker({ endDate: dtApp, autoclose: true });

        $('#txtADateOfBirth').removeClass("hidden");
        $('#txtHDateOfBirth').addClass("hidden");
        $('#txtMDateOfBirth').addClass("hidden");
        $('#txtGDateOfBirth').addClass("hidden");

        $('#txtApplicantOtherGender').val('');
        $('#appGenderOther').addClass('hidden');
    }
    else if (at == 2) {
        $("#ddlApplicantType").text("Minor");
        //$("#popApplicant").PopupWindow("setTitle", "Add Minor");
        var modal = $(popApplicant);
        modal.find('.modal-title').text('Add Minor');
        $("#appphone").addClass("hidden");
        $("#appemail").addClass("hidden");
        $("#apprelationship").removeClass("hidden");
        $('#txtMDateOfBirth').removeClass("hidden");
        $('#txtADateOfBirth').addClass("hidden");
        $('#txtHDateOfBirth').addClass("hidden");
        $('#txtGDateOfBirth').addClass("hidden");
        $//("#ddlGRelationship").removeClass("hidden");
        //$("#ddlGRelationship").val(response.model.Relationship).change();
        //$("#ddlARelationship").addClass("hidden");
        $("#ddlARelationship").empty();
        var opt = "<option value='0'>Select Relationship</option>";
        opt += "<option value='1'>Family Member</option>";
        opt += "<option value='2'>Child</option>";
        $("#ddlARelationship").append(opt);
        $("#ddlARelationship").val(0).change();
        var dtMin = new Date();
        dtMin.setFullYear(new Date().getFullYear() - 18);
        var dtEnd = new Date();
        $('#txtMDateOfBirth').datepicker({ viewMode: "years", startDate: dtMin, endDate: dtEnd, autoclose: true });

        $('#txtApplicantOtherGender').val('');
        $('#appGenderOther').addClass('hidden');
    }
    else if (at == 3) {
        $("#ddlApplicantType").text("Guarantor");
        //$("#popApplicant").PopupWindow("setTitle", "Add Guarantor");
        var modal = $(popApplicant);
        modal.find('.modal-title').text('Add Guarantor');
        $("#appphone").addClass("hidden");
        $("#appemail").addClass("hidden");
        $("#apprelationship").removeClass("hidden");
        $('#txtGDateOfBirth').removeClass("hidden");
        $('#txtMDateOfBirth').addClass("hidden");
        $('#txtADateOfBirth').addClass("hidden");
        $('#txtHDateOfBirth').addClass("hidden");
        $//("#ddlGRelationship").removeClass("hidden");
        //$("#ddlGRelationship").val(response.model.Relationship).change();
        //$("#ddlARelationship").addClass("hidden");
        $("#ddlARelationship").empty();
        var opt = "<option value='0'>Select Relationship</option>";
        opt += "<option value='1'>Family Member</option>";
        opt += "<option value='2'>Friend</option>";
        $("#ddlARelationship").append(opt);
        $("#ddlARelationship").val(0).change();
        var dtGApp = new Date();
        dtGApp.setFullYear(new Date().getFullYear() - 18);
        $('#txtGDateOfBirth').datepicker({ endDate: dtGApp, autoclose: true });

        $('#txtApplicantOtherGender').val('');
        $('#appGenderOther').addClass('hidden');
    }

    clearApplicant();

    //$("#popApplicant").PopupWindow("open");
    $("#popApplicant").modal("show");
};

var saveupdateApplicant = function () {

    var msg = "";
    var aid = $("#hndApplicantID").val();
    var prospectID = $("#hdnOPId").val();
    var fname = $("#txtApplicantFirstName").val();
    var lname = $("#txtApplicantLastName").val();
    var aphone = ($("#txtApplicantPhone").val());
    var aemail = $("#txtApplicantEmail").val();
    var agender = $("#ddlApplicantGender").val();
    var type = $("#ddlApplicantType").text();

    var aotherGender = $("#txtApplicantOtherGender").val();

    if (agender == '3') {
        if (!($("#txtApplicantOtherGender").val())) {
            msg += "Enter The Other Gender </br>";
        }
    }
    var dob = "";
    if (type == "Co-Applicant") {
        dob = $("#txtADateOfBirth").val();
    } else if (type == "Minor") {
        dob = $("#txtMDateOfBirth").val();
    }
    else if (type == "Guarantor") {
        dob = $("#txtGDateOfBirth").val();
    }
    else {
        dob = $("#txtHDateOfBirth").val();
    }


    var relationship = $("#ddlARelationship").val();

    if (!fname) {
        msg += "Enter Applicant First Name</br>";
    }
    if (!lname) {
        msg += "Enter Applicant Last Name</br>";
    }

    if (agender == "0") {
        msg += "Select The Gender</br>";
    }

    //if (type != "Minor" && type != "Guarantor") {
    //    if (!aphone) {
    //        msg += "Enter Phone Number</br>";
    //    }
    //    else {
    //        if (!validatePhone(aphone)) {
    //            msg += "Enter Valid Phone Number</br>";
    //        }
    //    }
    //}

    //if (aemail.length > 0) {
    //    if (!validateEmail(aemail)) {
    //        msg += "Enter Valid Email</br>";
    //    }
    //}
    if ($('#ddlARelationship').val() == '0') {
        msg += "Select The Relationship </br>";
    }
    if (!dob) {
        msg += "Enter The Date Of Birth </br>";
    }
    if (msg != "") {
        $.alert({
            title: "",
            content: msg,
            type: 'red'
        });
        return;
    }

    var model = {
        ApplicantID: aid,
        FirstName: fname,
        LastName: lname,
        Phone: aphone,
        Email: aemail,
        Gender: agender,
        DateOfBirth: dob,
        TenantID: prospectID,
        Type: type,
        Relationship: relationship,
    };

    $.ajax({
        url: "/Tenant/Applicant/SaveUpdateApplicant/",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#popApplicant").modal("hide");
            $.alert({
                title: "",
                content: "Progress Saved.",
                type: 'blue',
            });

            getApplicantLists();

        }


    });

}

var saveupdatePet = function () {

    var msg = "";
    var petId = $("#hndPetID").val();
    var breed = $("#txtpetBreed").val();
    var weight = $("#txtpetWeight").val();
    var TenantID = $("#hndNewTenant").val();
    var prospectID = $("#hdnOPId").val();
    var photo = document.getElementById('pet-picture');
    var petVaccinationCertificate = document.getElementById('filePetVaccinationCertificate');
    var petName = $("#txtpetName").val();
    var vetsName = $("#txtpetVetsName").val();
    var hiddenPetPicture = $("#hndPetPicture").val();
    var hiddenPetVaccinationCertificate = $("#hndPetVaccinationCertificate").val();
    var hiddenOriginalPetPicture = $("#hndOriginalPetPicture").val();
    var hiddenOriginalPetVaccinationCertificate = $("#hndOriginalPetVaccinationCertificate").val();

    if (!breed) {
        msg += "Enter Pet Breed</br>";
    }
    if (document.getElementById('filePetVaccinationCertificate').files.length == '0') {
        msg += " Enter Pet Vaccination Certificate</br>";
    }
    if (hiddenPetPicture.length == '0') {
        if (document.getElementById('pet-picture').files.length == '0') {
            msg += "Please Upload Pet Picture</br>";
        }
    }
    if (hiddenPetVaccinationCertificate.length == '0') {
        if (document.getElementById('filePetVaccinationCertificate').files.length == '0') {
            msg += "Please Upload Pet Vaccination Certificate</br>";
        }
    }
    if (msg !== "") {
        $.alert({
            title: "",
            content: msg,
            type: 'red'
        });
        return;
    }
    $formData = new FormData();

    $formData.append('PetID', petId);
    //$formData.append('PetType', petType);
    $formData.append('Breed', breed);
    $formData.append('Weight', weight);
    //$formData.append('Age', age);
    $formData.append('TenantID', TenantID);
    $formData.append('PetName', petName);
    $formData.append('VetsName', vetsName);
    $formData.append('Photo', hiddenPetPicture);
    $formData.append('PetVaccinationCertificate', hiddenPetVaccinationCertificate);
    $formData.append('OriginalPetNameFile', hiddenOriginalPetPicture);
    $formData.append('OriginalPetVaccinationCertificateFile', hiddenOriginalPetVaccinationCertificate);
    $formData.append('UserId', $('#hndUserId').val());

    $.ajax({
        url: "/Tenant/Pet/SaveUpdateTenanatPet/",
        type: "post",
        data: $formData,
        contentType: "application/json utf-8",
        contentType: false,
        processData: false,
        dataType: 'json',

        success: function (response) {
            //localStorage.setItem('tenantIds', response.Msg);

            //var str = localStorage.getItem('tenantIds');
            //var tId = str.split(',');
            // document.getElementById('hdnOPId').value = tId[0];
            //$("#hdnOPId").val(tId[0]);
            getPetLists();
            $.alert({
                title: "",
                content: "Progress Saved.",
                type: 'red'
            });
            $("#popPet").modal("hide");
            $("#txtpetName").val('');
            $("#txtpetBreed").val('');
            $("#txtpetWeight").val('');
            $("#txtpetVetsName").val('');
            document.getElementById('filePetPictireShow').value = '';
            document.getElementById('filePetVaccinationCertificate').value = '';
        }
    });
    checkPetsForAdd();
};
var getPetLists = function () {
    var model = {
        TenantID: $("#hndUserId").val()
        //TenantID: 202
    };
    $.ajax({
        url: "/Pet/GetProfilePetList",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#tblPet>tbody").empty();
            $.each(response.model, function (elementType, elementValue) {
                var html = "<tr id='tr_" + elementValue.PetID + "' data-value='" + elementValue.PetID + "'>";
                // html += "<td align='center'><img src='/content/assets/img/pet/" + elementValue.Photo + "' class='picture-src' title='' style='height:70px;width:70px;'/></td>";
                html += "<td style='width:100px'>" + elementValue.PetName + "</td>";
                html += "<td style='width:70px'>" + elementValue.Breed + "</td>";
                //html += "<td>" + elementValue.Weight + "</td>";
                //html += "<td>" + elementValue.VetsName + "</td>";
                // html += "<td>";
                // html += "<a style='background: transparent; margin-right:10px' href='JavaScript:Void(0);' id='updatePetInfo' onclick='getPetInfo(" + elementValue.PetID + ")'><span class='fa fa-edit' ></span></a>";
                //html += "<td> <a href='javascript:void(0);' id='updatePetInfo' onclick='getPetInfo(" + elementValue.PetID + ")'><i class='fa fa-edit'></i></a> </td>";
                //html += "<td> <a href='javascript:void(0);' onclick='delPet(" + elementValue.PetID + ")' > <i class='fa fa-trash'></i></a > </td>";
                // html += "<a style='background: transparent; margin-right:10px' href='JavaScript:Void(0);' onclick='delPet(" + elementValue.PetID + ")'><span class='fa fa-trash' ></span></a>";
                //  html += "<a href='../../Content/assets/img/pet/" + elementValue.PetVaccinationCertificate + "' download=" + elementValue.PetVaccinationCertificate + " target='_blank'><span class='fa fa-download'></span></a>";
                html += "</td >";
                html += "</tr>";
                $("#tblPet>tbody").append(html);
            });

            //getTenantPetPlaceData();

        }
    });
    checkPetsForAdd();
};

var getPetInfo = function (id) {
    //$("#popPet").PopupWindow("open");
    $("#popPet").modal("show");
    var model = {
        id: id
    };
    $.ajax({
        url: '/Tenant/Pet/GetPetDetails/',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#hndPetID").val(response.model.PetID);
            $("#txtpetName").val(response.model.PetName);
            $("#txtpetVetsName").val(response.model.VetsName);
            $("#ddlpetType").val(response.model.PetType);
            $("#txtpetBreed").val(response.model.Breed);
            $("#txtpetWeight").val(response.model.Weight);
            $("#txtpetAge").val(response.model.Age);
            $("#hndPetPicture").val(response.model.Photo);
            $("#hndOriginalPetPicture").val(response.model.OriginalPetNameFile);
            $("#hndPetVaccinationCertificate").val(response.model.PetVaccinationCertificate);
            $("#hndOriginalPetVaccinationCertificate").val(response.model.OriginalPetVaccinationCertificateFile);

            if (response.model.OriginalPetVaccinationCertificateFile != '') {
                $("#filePetPictireShow").text(response.model.OriginalPetNameFile);
            }
            if (response.model.OriginalPetVaccinationCertificateFile != '') {
                $("#filePetVaccinationCertificateShow").text(response.model.OriginalPetVaccinationCertificateFile);
            }
        }
    });
};
var clearPet = function () {
    var petId = $("#hndPetID").val("0");
    var petType = $("#ddlpetType").val("0");
    var breed = $("#txtpetBreed").val("");
    var weight = $("#txtpetWeight").val("");
    var age = $("#txtpetAge").val("");
    $("#txtpetName").val("");
    $("#txtpetVetsName").val("");
};
var clearApplicant = function () {
    $("#hndApplicantID").val(0);
    $("#txtApplicantFirstName").val("");
    $("#txtApplicantLastName").val("");

    $("#txtApplicantPhone").val("");
    $("#txtApplicantEmail").val("");
    $("#ddlApplicantGender").val(0);
    $('#txtMDateOfBirth').val("");
    $('#txtADateOfBirth').val("");
    $('#txtHDateOfBirth').val("");
    $('#txtGDateOfBirth').val("");
}
var delPet = function (petId) {
    var model = {
        PetID: petId
    };

    $.alert({
        title: "",
        content: "Are you sure to remove Pet?",
        type: 'blue',
        buttons: {
            yes: {
                text: 'Yes',
                action: function (yes) {
                    $.ajax({
                        url: "/Tenant/Pet/DeleteTenantPet/",
                        type: "post",
                        contentType: "application/json utf-8",
                        data: JSON.stringify(model),
                        dataType: "JSON",
                        success: function (response) {
                            //$.alert({
                            //    title: "",
                            //    content: "Progress Saved.",
                            //    type: 'blue',
                            //});
                            $('#tr_' + petId).remove();
                            //if ($("#tblPet>tbody tr").length == 1 && $("#hndPetPlaceID").val() == 1) {
                            //    $("#btnAddPet").css("background-color","#B4ADA5").attr("disabled", "disabled");
                            //}
                            //else if ($("#tblPet>tbody tr").length == 2 && $("#hndPetPlaceID").val() == 2) {
                            //    $("#btnAddPet").css("background-color","#B4ADA5").attr("disabled", "disabled");
                            //}
                            //else if ($("#hndPetPlaceID").val() == 0) {
                            //    $("#btnAddPet").css("background-color","#B4ADA5").attr("disabled", "disabled");
                            //}
                            //else {
                            //    $("#btnAddPet").removeAttr("disabled");
                            //}
                            getTenantPetPlaceData();
                        }
                    });
                }
            },
            no: {
                text: 'No',
                action: function (no) {
                }
            }
        }
    });
};
var delApplicant = function (appliId) {
    var model = {
        AID: appliId
    };

    $.alert({
        title: "",
        content: "Are you sure to remove?",
        type: 'blue',
        buttons: {
            yes: {
                text: 'Yes',
                action: function (yes) {
                    $.ajax({
                        url: "/Tenant/Applicant/DeleteApplicant/",
                        type: "post",
                        contentType: "application/json utf-8",
                        data: JSON.stringify(model),
                        dataType: "JSON",
                        success: function (response) {
                            $('#div_' + appliId).remove();
                        }
                    });
                }
            },
            no: {
                text: 'No',
                action: function (no) {
                }
            }
        }
    });

}

//Upload Pet Documents
var uploadPetPhoto = function () {
    $formData = new FormData();

    var petPhotoFile = document.getElementById('pet-picture');

    for (var i = 0; i < petPhotoFile.files.length; i++) {
        $formData.append('file-' + i, petPhotoFile.files[i]);
    }

    $.ajax({
        url: '/ApplyNow/UploadPetPhoto',
        type: 'post',
        data: $formData,
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            $('#hndPetPicture').val(response.model.TempPetNameFile);
            $('#hndOriginalPetPicture').val(response.model.OriginalPetNameFile);
            $('#filePetPictireShow').text(response.model.OriginalPetNameFile);
            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'red'
            });
        }
    });
};

var uploadPetVaccination = function () {
    $formData = new FormData();

    var petVaccinationCertificateFile = document.getElementById('filePetVaccinationCertificate');

    for (var i = 0; i < petVaccinationCertificateFile.files.length; i++) {
        $formData.append('file-' + i, petVaccinationCertificateFile.files[i]);
    }

    $.ajax({
        url: '/ApplyNow/UploadPetVaccinationCertificate',
        type: 'post',
        data: $formData,
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            $('#hndPetVaccinationCertificate').val(response.model.TempPetVaccinationCertificateFile);
            $('#hndOriginalPetVaccinationCertificate').val(response.model.OriginalPetVaccinationCertificateFile);
            $('#filePetVaccinationCertificateShow').text(response.model.OriginalPetVaccinationCertificateFile);
            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'red'
            });
        }
    });
};

var uploadProfilePicture = function () {
    $formData = new FormData();

    var profilePic = document.getElementById('ProfilePic');

    for (var i = 0; i < profilePic.files.length; i++) {
        $formData.append('file-' + i, profilePic.files[i]);
    }

    $.ajax({
        url: '/MyProfile/UploadProfile',
        type: 'post',
        data: $formData,
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            $('#hndProfilePic').val(response.model.TempProfilePic);
            $('#hndOriginalProfilePic').val(response.model.OriginalProfileFile);
            SaveProfilePicture();
            $.alert({
                title: "",
                content: "Profile Picture uploaded Successfully.",
                type: 'red'
            });
        }
    });
};
var SaveProfilePicture = function () {
    var msg = '';
    var tenantId = $("#hndNewTenant").val();
    var ProfilePic = $("#hndProfilePic").val();
    var OriginalProfilePic = $("#hndOriginalProfilePic").val();


    if (msg != '') {
        $.alert({
            title: "",
            content: msg,
            type: 'red'
        });
        return
    }
    var model = {
        ID: tenantId,
        TempProfilePic: ProfilePic,
        OriginalProfileFile: OriginalProfilePic,
    };

    $.ajax({
        url: "/MyProfile/SaveProfilePicture",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            //$.alert({
            //    title: "",
            //    content: "Progress Saved.",
            //    type: 'blue'
            //});
            GetTenantDetails($("#hndNewTenant").val());

        }
    });
};
var getAllDues = function () {
    var UserId = $("#hndUserId").val();
    var model = {
        UserId: UserId,
    };
    $.ajax({
        url: '/ApplyNow/GetAllTotalDues',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $('#spanCurrentAmountDue').text(response.model.TotalAmountString);
        }
    });
};

var goToEditApplicant = function (aid) {

    if (aid != null) {

        $("#hndApplicantID").val(aid);
        var model = { id: aid };
        $.ajax({
            url: "/Tenant/Applicant/GetApplicantDetails",
            type: "post",
            contentType: "application/json utf-8",
            data: JSON.stringify(model),
            dataType: "JSON",
            success: function (response) {

                $("#txtApplicantFirstName").val(response.model.FirstName);
                $("#txtApplicantLastName").val(response.model.LastName);

                if (response.model.Type == "Primary Applicant") {
                    $("#ddlApplicantGender").val(response.model.Gender);
                    $("#ddlApplicantGender").trigger('change');
                    $("#ddlApplicantType").text("Primary Applicant");
                    //$("#popApplicant").PopupWindow("setTitle", "Edit Primary Applicant");
                    //$("#popApplicant").PopupWindow("open");
                    var modal = $(popApplicant);
                    modal.find('.modal-title').text('Edit Primary Applicant');
                    $("#popApplicant").modal("show");
                    $("#appphone").removeClass("hidden");
                    $("#appemail").removeClass("hidden");
                    $("#apprelationship").addClass("hidden");
                    $("#txtApplicantPhone").val(formatPhoneFax(response.model.Phone));
                    $("#txtApplicantEmail").val(response.model.Email);
                    //$("#ddlARelationship").removeCs("hidden");
                    $("#ddlARelationship").empty();
                    var opt = "<option value='0'>Select Relationship</option>";
                    opt += "<option value='1'>Self</option>";
                    $("#ddlARelationship").append(opt);
                    $("#ddlARelationship").val(response.model.Relationship).change();

                    //$("#ddlGRelationship").addClass("hidden");
                    $('#txtADateOfBirth').addClass("hidden");
                    $('#txtHDateOfBirth').removeClass("hidden");
                    $("#txtHDateOfBirth").val(response.model.DateOfBirthTxt);
                    $('#txtMDateOfBirth').addClass("hidden");
                    $('#txtGDateOfBirth').addClass('hidden');
                    var dtHApp = new Date();
                    dtHApp.setFullYear(new Date().getFullYear() - 18);
                    $('#txtHDateOfBirth').datepicker({ endDate: dtHApp, autoclose: true });
                    $("#txtApplicantOtherGender").val(response.model.OtherGender);

                }
                else if (response.model.Type == "Co-Applicant") {
                    $("#ddlApplicantGender").val(response.model.Gender);
                    $("#ddlApplicantGender").trigger('change');
                    $("#ddlApplicantType").text("Co-Applicant");
                    //$("#popApplicant").PopupWindow("setTitle", "Edit Applicant");
                    //$("#popApplicant").PopupWindow("open");
                    var modal = $(popApplicant);
                    modal.find('.modal-title').text('Edit Applicant');
                    $("#popApplicant").modal("show");
                    $("#appphone").removeClass("hidden");
                    $("#apprelationship").addClass("hidden");
                    $("#txtApplicantPhone").val(formatPhoneFax(response.model.Phone));
                    $("#txtApplicantEmail").val(response.model.Email);
                    //$("#ddlARelationship").removeClass("hidden");
                    $("#ddlARelationship").empty();
                    var opt = "<option value='0'>Select Relationship</option>";
                    opt += "<option value='1'>Spouse</option>";
                    opt += "<option value='2'>Partner</option>";
                    opt += "<option value='3'>Adult Child</option>";
                    opt += "<option value='4'>Friend/Roommate</option>";
                    $("#ddlARelationship").append(opt);
                    $("#ddlARelationship").val(response.model.Relationship).change();
                    //$("#ddlGRelationship").addClass("hidden");
                    $('#txtADateOfBirth').removeClass("hidden");
                    $("#txtADateOfBirth").val(response.model.DateOfBirthTxt);
                    $('#txtHDateOfBirth').addClass("hidden");
                    $('#txtMDateOfBirth').addClass("hidden");
                    $('#txtGDateOfBirth').addClass('hidden');
                    var dtApp = new Date();
                    dtApp.setFullYear(new Date().getFullYear() - 18);
                    $('#txtADateOfBirth').datepicker({ endDate: dtApp, autoclose: true });
                    $("#txtApplicantOtherGender").val(response.model.OtherGender);

                }
                else if (response.model.Type == "Minor") {
                    $("#ddlApplicantGender").val(response.model.Gender);
                    $("#ddlApplicantGender").trigger('change');
                    $("#ddlApplicantType").text("Minor");
                    //$("#popApplicant").PopupWindow("setTitle", "Edit Minor");
                    //$("#popApplicant").PopupWindow("open");
                    var modal = $(popApplicant);
                    modal.find('.modal-title').text('Edit Minor');
                    $("#popApplicant").modal("show");
                    $("#appphone").addClass("hidden");
                    $("#appemail").addClass("hidden");
                    $('#txtMDateOfBirth').removeClass("hidden");
                    $('#txtADateOfBirth').addClass("hidden");
                    $('#txtHDateOfBirth').addClass("hidden");
                    $('#txtGDateOfBirth').addClass('hidden');
                    $("#txtMDateOfBirth").val(response.model.DateOfBirthTxt);
                    //$("#ddlARelationship").removeClass("hidden");
                    $("#ddlARelationship").empty();
                    var opt = "<option value='0'>Select Relationship</option>";
                    opt += "<option value='1'>Family Member</option>";
                    opt += "<option value='2'>Child</option>";
                    $("#ddlARelationship").append(opt);
                    $("#ddlARelationship").val(response.model.Relationship).change();
                    //$("#ddlGRelationship").addClass("hidden");
                    // $("#ddlGRelationship").addClass("hidden");
                    var dtMin = new Date();
                    dtMin.setFullYear(new Date().getFullYear() - 18);
                    var dtEnd = new Date();
                    $('#txtMDateOfBirth').datepicker({ viewMode: "years", startDate: dtMin, endDate: dtEnd, autoclose: true });
                    $("#txtApplicantOtherGender").val(response.model.OtherGender);
                    $('#appGenderOther').addClass('hidden');

                }
                else if (response.model.Type == "Guarantor") {

                    $("#ddlApplicantGender").val(response.model.Gender);
                    $("#ddlApplicantGender").trigger('change');
                    $("#ddlApplicantType").text("Guarantor");
                    //$("#popApplicant").PopupWindow("setTitle", "Edit Guarantor");
                    //$("#popApplicant").PopupWindow("open");
                    var modal = $(popApplicant);
                    modal.find('.modal-title').text('Edit Guarantor');
                    $("#popApplicant").modal("show");
                    $("#appphone").addClass("hidden");
                    $("#appemail").removeClass("hidden");
                    // $("#apprelationship").removeClass("hidden");
                    $('#txtGDateOfBirth').removeClass("hidden");
                    $('#txtMDateOfBirth').addClass("hidden");
                    $('#txtADateOfBirth').addClass("hidden");
                    $('#txtHDateOfBirth').addClass("hidden");
                    $("#txtGDateOfBirth").val(response.model.DateOfBirthTxt);
                    $//("#ddlGRelationship").removeClass("hidden");
                    //$("#ddlGRelationship").val(response.model.Relationship).change();
                    //$("#ddlARelationship").addClass("hidden");
                    $("#ddlARelationship").empty();
                    var opt = "<option value='0'>Select Relationship</option>";
                    opt += "<option value='1'>Family</option>";
                    opt += "<option value='2'>Friend</option>";
                    $("#ddlARelationship").append(opt);
                    $("#ddlARelationship").val(response.model.Relationship).change();
                    var dtGApp = new Date();
                    dtGApp.setFullYear(new Date().getFullYear() - 18);
                    $('#txtGDateOfBirth').datepicker({ endDate: dtGApp, autoclose: true });
                    $("#txtApplicantOtherGender").val(response.model.OtherGender);
                }
            }
        });

    }
};

//
var saveUpdateTenant = function () {

    var msg = "";
    if ($.trim($("#txtFirstName").val()).length <= 0) {
        msg += "First Name is required.</br>"
    }
    if ($.trim($("#txtLastName").val()).length <= 0) {
        msg += "Last Name is required.</br>"
    }
    if ($("#ddlGender").val() == 0) {
        msg += "Gender is required.</br>"
    }
    if ($.trim($("#txtDateOfBirth").val()).length <= 0) {
        msg += "Date of Birth is required.</br>"
    }
    if ($("#ddlMaritalStatus").val() == 0) {
        msg += "Marital Status is required.</br>"
    }
    if ($("#ddlState").val() == 0) {
        msg += "Sate is required.</br>"
    }
    if ($("#ddlCity").val() == 0) {
        msg += "City is required.</br>"
    }

    if (msg != "") {
        $.alert({
            title: 'Alert!',
            content: msg,
            type: 'red'
        })
        return;
    }
    else {
        var model = {
            ID: $("#hndNewTenant").val(),
            FirstName: $("#txtFirstName").val(),
            MiddleInitial: $("#txtMiddleInitial").val(),
            LastName: $("#txtLastName").val(),
            PropertyID: $("#ddlProperty").val(),
            UnitID: $("#ddlUnit").val(),
            Address: $("#txtAddress").val(),
            City: $("#ddlCity").val(),
            State: $("#ddlState").val(),
            Zip: $("#txtZip").val(),
            Gender: $("#ddlGender").val(),
            JobCode: $("#txtJobCode").val(),
            HomePhone: $("#txtHomePhone").val(),
            OfficePhoneExtension: $("#txtWorkExtension").val(),
            OfficeEmail: $("#txtOfficeEmail").val(),
            OfficePhone: $("#txtWorkPhone").val(),
            OfficeName: $("#txtOfficeName").val(),
            OfficeAddress: $("#txtOfficeAddress").val(),
            OfficeCity: $("#ddlOfficeCity").val(),
            OfficeState: $("#ddlOfficeState").val(),
            OfficeZip: $("#txtOfficeZip").val(),
            Occupation: $("#txtOccupation").val(),
            SocialSecurityNum: $("#txtSocialSecurityNumber").val(),
            DriverLicense: $("#txtDrivingLicense").val(),
            DateOfBirth: $("#txtDateOfBirth").val(),
            CarMake: $("#txtCarMake").val(),
            CarModel: $("#txtCarModel").val(),
            CarLic: $("#txtCarLicense").val(),
            EmergencyContact: $("#txtEmergencyContact").val(),
            EmergencyPhone: $("#txtEmergencyPhone").val(),
            Income: $("#txtIncome").val(),
            EmployerContact: $("#txtEmployerContact").val(),
            MaritalStatus: $("#ddlMaritalStatus").val(),
            StudentStatus: $("#ddlStudentStatus").val(),
            RentResp: $("#txtRentResp").val(),
        };
        $.ajax({
            url: "../SaveUpdateTenant",
            method: "post",
            data: JSON.stringify(model),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (response) {
                //hideProgress('#btnSaveUpdate');
                if (response.result == "1") {
                    if ($("#hndNewTenant").val() == 0) {
                        $.alert({
                            title: 'Alert!',
                            content: 'Data Saved Successfully',
                            type: 'blue'
                        })
                        $("#hndNewTenant").val(response.ID);
                        window.location.href = "../Index/" + response.ID;
                    }
                    else {
                        $("#hndNewTenant").val(response.ID);
                        $.alert({
                            title: 'Alert!',
                            content: 'Data Updated Successfully',
                            type: 'blue'
                        })
                    }
                }
                else {
                    //showMessage("Error!", response.error);
                }
            }
        });
    }
}

var fillStateDDL = function () {

    $.ajax({
        url: '/City/FillStateDropDownList',
        method: "post",
        //data: JSON.stringify(param),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {
                $("#ddlState").empty();
                $("#ddlStatePersonal").empty();
                $("#ddlStateHome").empty();
                $("#ddlStateEmployee").empty();
                $("#ddlStateContact").empty();
                $("#ddlVState").empty();
                $("#ddlState").append("<option value='0'>Select State</option>");
                $("#ddlStatePersonal").append("<option value='0'>Select State</option>");
                $("#ddlStateHome").append("<option value='0'>Select State</option>");
                $("#ddlStateEmployee").append("<option value='0'>Select State</option>");
                $("#ddlStateContact").append("<option value='0'>Select State</option>");
                $("#ddlVState").append("<option value='0'>Select State</option>");
                $.each(response, function (index, elementValue) {
                    $("#ddlState").append("<option value=" + elementValue.ID + ">" + elementValue.StateName + "</option>");
                    $("#ddlStatePersonal").append("<option value=" + elementValue.ID + ">" + elementValue.StateName + "</option>");
                    $("#ddlStateHome").append("<option value=" + elementValue.ID + ">" + elementValue.StateName + "</option>");
                    $("#ddlStateEmployee").append("<option value=" + elementValue.ID + ">" + elementValue.StateName + "</option>");
                    $("#ddlStateContact").append("<option value=" + elementValue.ID + ">" + elementValue.StateName + "</option>");
                    $("#ddlVState").append("<option value=" + elementValue.ID + ">" + elementValue.StateName + "</option>");
                });

            }
        }
    });
}

var fillCityList = function (stateid) {
    var params = { StateID: stateid };
    $.ajax({
        url: '/City/GetCityListbyState',
        method: "post",
        data: JSON.stringify(params),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {

                $("#ddlCity").empty();
                $("#ddlCity").append("<option value='0'>Select City</option>");
                $.each(response, function (index, elementValue) {
                    $("#ddlCity").append("<option value=" + elementValue.ID + ">" + elementValue.CityName + "</option>");
                });
            }
        }
    });
}
var fillCityListHome = function (stateid) {

    var params = { StateID: stateid };
    $.ajax({
        url: '/City/GetCityListbyState',
        method: "post",
        data: JSON.stringify(params),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {

                $("#ddlCityHome").empty();
                $("#ddlCityHome").append("<option value='0'>Select City</option>");
                $.each(response, function (index, elementValue) {

                    $("#ddlCityHome").append("<option value=" + elementValue.ID + ">" + elementValue.CityName + "</option>");

                });
            }
        }
    });
}
var fillCityListEmployee = function (stateid) {
    var params = { StateID: stateid };
    $.ajax({
        url: '/City/GetCityListbyState',
        method: "post",
        data: JSON.stringify(params),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {

                $("#ddlCityEmployee").empty();
                $("#ddlCityEmployee").append("<option value='0'>Select City</option>");
                $.each(response, function (index, elementValue) {

                    $("#ddlCityEmployee").append("<option value=" + elementValue.ID + ">" + elementValue.CityName + "</option>");

                });
            }
        }
    });
}
var fillCityListContact = function (stateid) {
    var params = { StateID: stateid };
    $.ajax({
        url: '/City/GetCityListbyState',
        method: "post",
        data: JSON.stringify(params),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {

                $("#ddlCityContact").empty();
                $("#ddlCityContact").append("<option value='0'>Select City</option>");
                $.each(response, function (index, elementValue) {

                    $("#ddlCityContact").append("<option value=" + elementValue.ID + ">" + elementValue.CityName + "</option>");


                });
            }
        }
    });
}

var getApplicantLists = function () {
    var model = {

        TenantID: $("#hndNewTenant").val(),
    }
    $.ajax({
        url: "/Applicant/GetApplicantList",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {

            $("#tblApplicant>tbody").empty();

            $.each(response.model, function (elementType, elementValue) {
                if (elementValue.Type == "Minor") {
                    var html = "<tr data-value=" + elementValue.ApplicantID + ">";
                    html += "<td>" + elementValue.FirstName + " " + elementValue.LastName + "</td>";
                    html += "<td>" + elementValue.RelationshipString + "</td>";
                    html += "<td>" + elementValue.DateOfBirthTxt + "</td>";
                    html += "<td>" + elementValue.GenderString + "</td>";
                    html += "<td> <a href='javascript:void(0);' id='' onclick='goToEditApplicant(" + elementValue.ApplicantID + ")'><i class='fa fa-edit'></i></a> </td>";
                    html += "<td> <a href='javascript:void(0);' onclick='delApplicant(" + elementValue.ApplicantID + ")' > <i class='fa fa-trash'></i></a > </td>";
                    html += "</tr>";
                    $("#tblApplicant>tbody").append(html);
                }
            });

        }

    });
}

var petCheck = function () {

    var model = {
        TenantId: $("#hndNewTenant").val()
    };
    $.ajax({
        url: "/MyAccount/CheckTenantPet/",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $.alert({
                title: 'Message!',
                content: response.Msg,
                type: 'blue'
            });

            //getPetLists();
            //$("#popPet").PopupWindow("close");
        }
    });
};

var goToMakeAPayment = function () {
    model = {
        StepId: 3,
        PayStepId: 2
    };

    $.ajax({
        url: '/MyProfile/SetSessionMakePayments',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            window.location.href = '/Tenant/MyAccount/Index/' + response.model;
        }
    });
};

var goToSetUpRecurringPayment = function () {
    model = {
        StepId: 3,
        PayStepId: 4
    };

    $.ajax({
        url: '/MyProfile/SetSessionSetRecurringPayments',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            window.location.href = '/Tenant/MyAccount/Index/' + response.model;
        }
    });
};
//piyush
var goToReserveAmenities = function () {
    model = {
        StepId: 5,
        PayStepId: 2
    };

    $.ajax({
        url: '/MyProfile/SetSessionSetReserveAmenities',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            window.location.href = '/Tenant/MyAccount/Index/' + response.model;
        }
    });
};
var goToRegisterGuest = function () {
    model = {
        StepId: 7

    };

    $.ajax({
        url: '/MyProfile/SetSessionSetRegisterGuest',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            window.location.href = '/Tenant/MyAccount/Index/' + response.model;
        }
    });
};
var goToSubmitServiceRequest = function () {
    model = {
        StepId: 4,
        ServiceRequestId: 2
    };

    $.ajax({
        url: '/MyProfile/SetSessionSetSubmitServiceRequest',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            window.location.href = '/Tenant/MyAccount/Index/' + response.model;
        }
    });
};
var getServiceRequestOnAlarm = function () {
    var model = { TenantId: $("#hndNewTenant").val() };

    $.ajax({
        url: '/ServiceRequest/GetServiceRequestForAlarm',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $('#divServiceRequestAlarm').empty();
            $.each(response.model, function (elementType, elementValue) {
                var Html = '<div class="center">';
                Html += '<span id="spanServiceRequestlabelAlarm" style="font-size:12pt;">' + elementValue.ProblemCategoryName + '</span>';
                Html += '</div>';
                Html += '<div class="center">';
                Html += '<span id="spanServiceRequestDateTimeAlarm" style="font-size:08pt;">' + elementValue.PermissionComeDateString + ' at ' + elementValue.PermissionComeTime + '</span>';
                Html += '</div>';
                $('#divServiceRequestAlarm').append(Html);
            });
            //if (response.model.length == '0') {
            //    var Html = '<div class="center">';
            //    Html += '<span id="spanServiceRequestlabelAlarm" style="font-size:08pt;">No Service Request Today</span>';
            //    Html += '</div>';
            //    Html += '<div class="center">';
            //    Html += '<span id="spanServiceRequestDateTimeAlarm" style="font-size:08pt;"></span>';
            //    Html += '</div>';
            //    $('#divServiceRequestAlarm').append(Html);
            //}
        }
    });
};

var checkPetsForAdd = function () {
    var model = { UserId: $('#hndUserId').val() };

    $.ajax({
        url: "/Pet/CheckPetRegistration",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {

            if (response.model.TenantPetPlace == response.model.PetCount) {
                $('#btnAddPet').addClass('disabled');
            }
            else {
                $('#btnAddPet').removeClass('disabled');
            }
        }
    });
};

var openPaymentBreakdown = function () {
    $('#popPaymentBreakdown').modal('show');
};

var breakdownPaymentFunction = function () {
    $("#divLoader").show();
    var model = { UserId: $("#hndUserId").val() };

    $.ajax({
        url: '/MonthlyPayment/GetMonthlyPayment',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#lblMonthlyChargesBreakdown").text('$' + formatMoney(response.modal.MonthlyCharges));
            $("#lblAdditionalParkingBreakdown").text('$' + formatMoney(response.modal.AdditionalParking));
            $("#lblStorageChargesBreakdown").text('$' + formatMoney(response.modal.StorageCharges));
            $("#lblPetRentBreakdown").text('$' + formatMoney(response.modal.PetRent));
            $("#lblTrashRecycleBreakdown").text('$' + formatMoney(response.modal.TrashRecycle));
            $("#lblPestControlBreakdown").text('$' + formatMoney(response.modal.PestControl));
            $("#lblConvergentBillingBreakdown").text('$' + formatMoney(response.modal.ConvergentBilling));
            $("#lblTotalMonthlyChargesBreakdown").text('$' + formatMoney(response.modal.TotalMonthlyCharges));
            $("#spanCurrentAmountDue").text('$' + formatMoney(response.modal.TotalMonthlyCharges));
            $("#lblCurrentPrePayAmount").text('$' + formatMoney(response.modal.TotalMonthlyCharges));
            localStorage.setItem('currentAmountDue', response.modal.TotalMonthlyCharges);
        }
    });
    $("#divLoader").hide();
};


