var remainingday = 0;
var numberOfDays = 0;
var QuoteExpires = "";
var tenantOnlineID = 0;
var addApplicntArray = [];
var addUpArray = [];
var nofup = 0;
var rbtnClick = "";
var paystubFileArray = [];
var fedralFileArray = [];
var bankstatementFileArray = [];
$(document).ready(function () {
    $('#txtApplicantSSNNumber').bind("cut copy paste contextmenu", function (e) {
        e.preventDefault();
    }).keypress(function (event) {
        return isPureNumber(event);
    }).focusin(function () {
        getEncDecValue(this, 1);
    }).focusout(function () {
        var ssn = $(this).val();
        if (ssn.length < 9) {
            alert("SSN must be 9 digit");
            $(this).focusin();
            $("#chkCCPay").prop("disabled", true);
            $("#chkCCPay").iCheck("uncheck").prop("disabled", true);
            $('#divCreditCheckPayment').addClass('hidden');
            return;
        } else {
            if ($("#hndCreditPaid").val() != "1") {
                $("#divchkCCPay").removeClass("hidden");  
            }
            $("#chkCCPay").prop("disabled", false);
        }
        if (ssn.length == 9) {
            getEncDecValue(this, 2);
            $(this).val("***-**-" + ssn.substr(ssn.length - 4, 4));
        }
    });
    $("#hndForPaystub").val("0");
    $("#hndForFedral").val("0");
    $("#hndForBankStatement").val("0");
    //alert($("#hdnOPId").val());
    onFocusApplyNow();
    localStorage.removeItem("CheckReload");
    fillMarketSourceDDLA();
    if ($("#rbtnPaystub").on('ifChanged', function () {
        rbtnClick = "Paystub";
    }));
    if ($("#rbtnBankStatement").on('ifChanged', function () {
        rbtnClick = "BankStatement";
    }));
    if ($("#rbtnFedralTax").on('ifChanged', function () {
        rbtnClick = "FedralTax";
    }));

    if ($("#rbtnPaystub").is(":checked")) {
        $('#divUpload3').removeClass('hidden');
    }
    else {
        $('#divUpload3').addClass('hidden');
    }
    if ($("#rbtnBankStatement").is(":checked")) {
        $('#divBankUpload').removeClass('hidden');
    }
    else {
        $('#divBankUpload').addClass('hidden');
    }
    if ($("#rbtnFedralTax").is(":checked")) {
        $('#divFederalTax').removeClass('hidden');
    }
    else {
        $('#divFederalTax').addClass('hidden');
    }

    $('input[type=checkbox]').on('ifChanged', function (event) {
        addUpArray = [];
        $('.empup').each(function (i, obj) {
            if ($(obj).is(':checked')) {
                addUpArray.push(1);
            }
        });

        nofup = addUpArray.length;
        if ($("#rbtnPaystub").is(":checked")) {
            if (nofup < 3) {
                $('#divUpload3').removeClass('hidden');
                $("#mpayFile1").removeClass("hidden");
                $("#mpayFile2").removeClass("hidden");
                $("#mpayFile3").removeClass("hidden");
            } else {
                if (rbtnClick == "Paystub") {
                    setTimeout(function () {
                        $("#rbtnPaystub").prop("checked", false);
                        $("#rbtnPaystub").parent().removeClass("checked");
                        $.alert({
                            title: "",
                            content: "Please Select any two of the three options (tax return, paystubs, and bank statements).<br/> If you want to select Paystub then <strong>please uncheck</strong> from any one of the selected items.",
                            type: 'red'
                        })
                    }, 200);
                    return;
                }
            }
        }
        else {
            $('#divUpload3').addClass('hidden');
            $("#mpayFile1").addClass("hidden");
            $("#mpayFile2").addClass("hidden");
            $("#mpayFile3").addClass("hidden");
        }
        if ($("#rbtnBankStatement").is(":checked")) {
            if (nofup < 3) {
                $('#divBankUpload').removeClass('hidden');
                $("#mbankstateFile1").removeClass("hidden");
                $("#mbankstateFile2").removeClass("hidden");
                $("#mbankstateFile3").removeClass("hidden");
            } else {
                if (rbtnClick == "BankStatement") {
                    setTimeout(function () {
                        $("#rbtnBankStatement").prop("checked", false);
                        $("#rbtnBankStatement").parent().removeClass("checked");
                        $.alert({
                            title: "",
                            content: "Please Select any  two of the three options (tax return, paystubs, and bank statements).<br/> If you want to select Bank Statement then <strong>please uncheck</strong> from any one of the selected items.",
                            type: 'red'
                        })
                    }, 200);
                    return;
                }
            }
        } else {
            $('#divBankUpload').addClass('hidden');
            $("#mbankstateFile1").addClass("hidden");
            $("#mbankstateFile2").addClass("hidden");
            $("#mbankstateFile3").addClass("hidden");
        }
        if ($("#rbtnFedralTax").is(":checked")) {
            if (nofup < 3) {
                $('#divFederalTax').removeClass('hidden');
                $("#mfedFile1").removeClass("hidden");
                $("#mfedFile2").removeClass("hidden");
            } else {
                if (rbtnClick == "FedralTax") {
                    setTimeout(function () {
                        $("#rbtnFedralTax").prop("checked", false);
                        $("#rbtnFedralTax").parent().removeClass("checked");
                        $.alert({
                            title: "",
                            content: "Please Select any  two of the three options (tax return, paystubs, and bank statements).<br/> If you want to select Fedral Tax then <strong>please uncheck</strong> from any one of the selected items.",
                            type: 'red'
                        })
                    }, 200);
                    return;
                }
            }
        } else {
            $('#divFederalTax').addClass('hidden');
            $("#mfedFile1").addClass("hidden");
            $("#mfedFile2").addClass("hidden");
        }
    });
    $("#popRentalQualification").modal("hide");
    checkExpiry();
    $("#chkAgreePetTerms").on('ifChanged', function (event) {
        if ($(this).is(":checked")) {
            modalPetPolicy.style.display = "block";
        }
        else {
            modalPetPolicy.style.display = "none";
        }
    });
    //sachin m 14 m1y
    $("#chkCCPay").on('ifChanged', function (event) {
        var modal = $("#popApplicant");
        if ($(this).is(":checked")) {
            //$("#popCCPay").modal("show");
            $('#btnsaveapplandpay').removeClass('hidden');
            $('#btnsaveappl').addClass('hidden');
            //modal.find('.modal-content').css("height", "760px");
            $('#divCreditCheckPayment').removeClass('hidden');
           
        }
        else {
            //$("#popCCPay").modal("hide");
            clearBank1();
            clearCard1();
            $('#btnsaveapplandpay').addClass('hidden');
            $('#btnsaveappl').removeClass('hidden');
            //modal.find('.modal-content').css("height", "560px");
            $('#divCreditCheckPayment').addClass('hidden');
        }
    });

     //Sachin M 17 June
    //Modified By Amit 24 June
    $("#chkNoSSN").on('ifChanged', function (event) {
        $("#divloader").show();
        var checked = $(this).is(":checked");
        if (checked == true) {
            $("#txtApplicantSSNNumber").val("000000000");
            getEncDecValue("#txtApplicantSSNNumber", 2);
            $("#txtApplicantSSNNumber").val("***-**-0000");
            $("#chkCCPay").prop("disabled", false);
            $("#txtApplicantSSNNumber").prop("disabled", true);
        }
        else {
            $("#chkCCPay").iCheck("uncheck").prop("disabled", true);
            $("#txtApplicantSSNNumber").attr("data-value", "");
            $("#txtApplicantSSNNumber").val("");
            $('#divCreditCheckPayment').addClass('hidden');
            $("#txtApplicantSSNNumber").prop("disabled", false);
        }
    });

    //Sachin M 08 June
    $("#chkNewAcc").on('ifChanged', function (event) {
       
        if ($(this).is(":checked")) {           
            $('#divNewAcc').removeClass('hidden');
           $('#divExeAcc').addClass('hidden');
           
            $("#chkExeAcc").iCheck('uncheck');
            $("#hndNeEx").val(1);
        }
        else {
            $('#divNewAcc').addClass('hidden');
            $('#divExeAcc').removeClass('hidden');
            $("#hndNeEx").val(0);
        }
    });

     //Sachin M 09 June
    $("#chkExeAcc").on('ifChanged', function (event) {
       
        if ($(this).is(":checked")) {
            $('#divExeAcc').removeClass('hidden');
            $('#divNewAcc').addClass('hidden');
         
            $("#chkNewAcc").iCheck('uncheck');
            $("#hndNeEx").val(2);
        }
        else {
            $('#divNewAcc').removeClass('hidden');
            $('#divExeAcc').addClass('hidden');
            $("#hndNeEx").val(1);
        }
    });


    //Sachin M 09 July
    if ($("#hndCreditPaid").val() == 1) {
        $('#divCreditCheckPayment').addClass('hidden');
        $('#divchkCCPay').addClass('hidden');
        
    }
    $("#mainApplName").text($("#txtFirstNamePersonal").val() + " " + ((!$("#txtMiddleInitial").val()) ? "" : $("#txtMiddleInitial").val() + " ") + $("#txtLastNamePersonal").val());

    $("#listUnit tbody").on("click", "tr", function (e) {
        var floorfromplan = localStorage.getItem("floorfromplan");
        var floorid = $(this).data("floorid");
        $("#fa_" + floorid).addClass('active_area', 'active_mouse').data('maphilight', { alwaysOn: true, fillColor: '0af11c', strokeColor: '0af11c' }).trigger('alwaysOn.maphilight');
        if (floorid == floorfromplan) {
            $("#fa_" + floorid).addClass('active_area', 'active_mouse').data('maphilight', { alwaysOn: true, fillColor: '0af11c', strokeColor: '0af11c' }).trigger('alwaysOn.maphilight');
        }
        else {
            $("#fa_" + floorfromplan).removeClass('active_area', 'active_mouse').data('maphilight', { alwaysOn: false }).trigger('alwaysOn.maphilight');
        }
    });


    if ($("#rbtnPaystubHEI").is(":checked")) {
        $('#divUpload3HEI').removeClass('hidden');
        $('#lblUpload1HEI').text('Paystub 1');
        $('#lblUpload2HEI').text('Paystub 2');
        $('#lblUpload3HEI').text('Paystub 3');
    }

    else if ($("#rbtnFedralTaxHEI").is(":checked")) {
        $('#divUpload3HEI').addClass('hidden');
        document.getElementById('fileUploadTaxReturn3').value = '';
        $('#lblUpload1HEI').text('Fedral Tax Return 1');
        $('#lblUpload2HEI').text('Fedral Tax Return 2');
        $('#lblUpload3HEI').text('Fedral Tax Return 3');
    }

    $('input[type=radio]').on('ifChanged', function (event) {

        if ($("#rbtnPaystubHEI").is(":checked")) {
            $('#divUpload3HEI').removeClass('hidden');
            $('#lblUpload1HEI').text('Paystub 1');
            $('#lblUpload2HEI').text('Paystub 2');
            $('#lblUpload3HEI').text('Paystub 3');
        }
        else if ($("#rbtnFedralTaxHEI").is(":checked")) {
            $('#divUpload3HEI').addClass('hidden');
            document.getElementById('fileUploadTaxReturn3').value = '';
            $('#lblUpload1HEI').text('Fedral Tax Return 1');
            $('#lblUpload2HEI').text('Fedral Tax Return 2');
            $('#lblUpload3HEI').text('Fedral Tax Return 3');
        }

    });

    document.getElementById('fileUploadPassport').onchange = function () {
        var fileUploadPassportBool = restrictFileUpload($(this).val());
        if (fileUploadPassportBool == true) {
            uploadPassport();
        }
        else {
            document.getElementById('fileUploadPassport').value = '';
            $('#fileUploadPassportShow').html('Choose a file...');
            $.alert({
                title: "",
                content: "Only the following file extensions are allowed...</br>'gif', 'png', 'jpg', 'jpeg', 'bmp', 'psd', 'xls', 'doc', 'docx', 'pdf', 'rtf', 'tex', 'txt', 'wpd'",
                type: 'blue'
            });
        }
    };
    document.getElementById('fileUploadIdentity').onchange = function () {
        var fileUploadIdentityBool = restrictFileUpload($(this).val());
        if (fileUploadIdentityBool == true) {
            uploadIdentityDocument();
        }
        else {
            document.getElementById('fileUploadIdentity').value = '';
            $('#fileUploadIdentityShow').html('Choose a file...');
            $.alert({
                title: "",
                content: "Only the following file extensions are allowed...</br>'gif', 'png', 'jpg', 'jpeg', 'bmp', 'psd', 'xls', 'doc', 'docx', 'pdf', 'rtf', 'tex', 'txt', 'wpd'",
                type: 'blue'
            });
        }

    };

    // New Upload Code Start //

    // new code paystub file upload
    document.getElementById('fileUploadPaystub').onchange = function () {
        var paystubFile = document.getElementById('fileUploadPaystub');
        var uploadFileCount = 0;
        var remainUploadFileCount = 0;
        uploadFileCount = paystubFile.files.length;
        remainUploadFileCount = parseInt(3 - paystubFileArray.length);
        if (uploadFileCount > remainUploadFileCount) {
            if (remainUploadFileCount == 0) {
                $('#fileUploadPaystubShow').html('3 files selected');
                $.alert({
                    title: "",
                    content: "You can not upload more than 3 files",
                    type: 'blue'
                });
                return;
            }
            else {
                $.alert({
                    title: "",
                    content: "You can select only number of " + remainUploadFileCount + " files to upload",
                    type: 'blue'
                });
                return;
            }

        }
        if (paystubFile.files.length == 1) {
            for (var i = 0; i < paystubFile.files.length; i++) {

                var name1 = paystubFile.files[0].name;

                var filePaystubBool1 = restrictFileUpload(name1);

                if (filePaystubBool1 == false) {
                    document.getElementById('fileUploadPaystub').value = '';
                    $('#fileUploadPaystubShow').html('Choose a file...');
                    $.alert({
                        title: "",
                        content: "Only the following file extensions are allowed...</br>'gif', 'png', 'jpg', 'jpeg', 'bmp', 'psd', 'xls', 'doc', 'docx', 'pdf', 'rtf', 'tex', 'txt', 'wpd'",
                        type: 'blue'
                    });
                    return;
                }
                if (paystubFileArray.length < 3) {
                    paystubFileArray.push(paystubFile.files[i]);
                    if (paystubFileArray.length == 1) {
                        $('#mpayFile1').removeClass('hidden');
                        $('#apayFile1').removeClass('hidden');
                        $('#spayFile1').text(paystubFile.files[i].name);
                        $('#fileUploadPaystubShow').html('1 file selected');
                        $('#spayFile2').text('');
                        $('#spayFile3').text('');
                        $('#mpayFile2').addClass('hidden');
                        $('#mpayFile3').addClass('hidden');
                        $('#hndForPaystub').val('1');
                    }
                    else if (paystubFileArray.length == 2) {
                        $('#mpayFile2').removeClass('hidden');
                        $('#apayFile2').removeClass('hidden');
                        $('#spayFile2').text(paystubFile.files[i].name);
                        $('#fileUploadPaystubShow').html('2 files selected');
                    }
                    else if (paystubFileArray.length == 3) {
                        $('#mpayFile3').removeClass('hidden');
                        $('#apayFile3').removeClass('hidden');
                        $('#spayFile3').text(paystubFile.files[i].name);
                        $('#fileUploadPaystubShow').html('3 files selected');
                    }
                }
                else {
                    $.alert({
                        title: "",
                        content: "You can select only number of 3 files to upload",
                        type: 'blue'
                    });
                    return;
                }
            }
            if (paystubFileArray.length == 3) {
                paystubFileUpload(paystubFileArray);
            }
        }
        else if (paystubFile.files.length == 2) {
            for (var i = 0; i < paystubFile.files.length; i++) {

                var name1 = paystubFile.files[0].name;
                var name2 = paystubFile.files[1].name;

                var filePaystubBool1 = restrictFileUpload(name1);
                var filePaystubBool2 = restrictFileUpload(name2);

                if (filePaystubBool1 == false) {
                    document.getElementById('fileUploadPaystub').value = '';
                    $('#fileUploadPaystubShow').html('Choose a file...');
                    $.alert({
                        title: "",
                        content: "Only the following file extensions are allowed...</br>'gif', 'png', 'jpg', 'jpeg', 'bmp', 'psd', 'xls', 'doc', 'docx', 'pdf', 'rtf', 'tex', 'txt', 'wpd'",
                        type: 'blue'
                    });
                    return;
                }
                if (filePaystubBool2 == false) {
                    document.getElementById('fileUploadPaystub').value = '';
                    $('#fileUploadPaystubShow').html('Choose a file...');
                    $.alert({
                        title: "",
                        content: "Only the following file extensions are allowed...</br>'gif', 'png', 'jpg', 'jpeg', 'bmp', 'psd', 'xls', 'doc', 'docx', 'pdf', 'rtf', 'tex', 'txt', 'wpd'",
                        type: 'blue'
                    });
                    return;
                }
                if (paystubFileArray.length < 3) {
                    paystubFileArray.push(paystubFile.files[i]);
                    if (paystubFileArray.length == 1) {
                        $('#mpayFile1').removeClass('hidden');
                        $('#apayFile1').removeClass('hidden');
                        $('#spayFile1').text(paystubFile.files[i].name);
                        $('#fileUploadPaystubShow').html('1 file selected');
                        $('#spayFile2').text('');
                        $('#spayFile3').text('');
                        $('#mpayFile2').addClass('hidden');
                        $('#mpayFile3').addClass('hidden');
                        $('#hndForPaystub').val('1');
                    }
                    else if (paystubFileArray.length == 2) {
                        $('#mpayFile2').removeClass('hidden');
                        $('#apayFile2').removeClass('hidden');
                        $('#spayFile2').text(paystubFile.files[i].name);
                        $('#fileUploadPaystubShow').html('2 files selected');
                    }
                    else if (paystubFileArray.length == 3) {
                        $('#mpayFile3').removeClass('hidden');
                        $('#apayFile3').removeClass('hidden');
                        $('#spayFile3').text(paystubFile.files[i].name);
                        $('#fileUploadPaystubShow').html('3 files selected');
                    }
                }
                else {
                    $.alert({
                        title: "",
                        content: "You can select only number of 3 files to upload",
                        type: 'blue'
                    });
                    return;
                }
            }
            if (paystubFileArray.length == 3) {
                paystubFileUpload(paystubFileArray);
            }
        }
        else if (paystubFile.files.length == 3) {
            for (var i = 0; i < paystubFile.files.length; i++) {

                var name1 = paystubFile.files[0].name;
                var name2 = paystubFile.files[1].name;
                var name3 = paystubFile.files[2].name;

                var filePaystubBool1 = restrictFileUpload(name1);
                var filePaystubBool2 = restrictFileUpload(name2);
                var filePaystubBool3 = restrictFileUpload(name3);

                if (filePaystubBool1 == false) {
                    document.getElementById('fileUploadPaystub').value = '';
                    $('#fileUploadPaystubShow').html('Choose a file...');
                    $.alert({
                        title: "",
                        content: "Only the following file extensions are allowed...</br>'gif', 'png', 'jpg', 'jpeg', 'bmp', 'psd', 'xls', 'doc', 'docx', 'pdf', 'rtf', 'tex', 'txt', 'wpd'",
                        type: 'blue'
                    });
                    return;
                }
                if (filePaystubBool2 == false) {
                    document.getElementById('fileUploadPaystub').value = '';
                    $('#fileUploadPaystubShow').html('Choose a file...');
                    $.alert({
                        title: "",
                        content: "Only the following file extensions are allowed...</br>'gif', 'png', 'jpg', 'jpeg', 'bmp', 'psd', 'xls', 'doc', 'docx', 'pdf', 'rtf', 'tex', 'txt', 'wpd'",
                        type: 'blue'
                    });
                    return;
                }
                if (filePaystubBool3 == false) {
                    document.getElementById('fileUploadPaystub').value = '';
                    $('#fileUploadPaystubShow').html('Choose a file...');
                    $.alert({
                        title: "",
                        content: "Only the following file extensions are allowed...</br>'gif', 'png', 'jpg', 'jpeg', 'bmp', 'psd', 'xls', 'doc', 'docx', 'pdf', 'rtf', 'tex', 'txt', 'wpd'",
                        type: 'blue'
                    });
                    return;
                }
                if (paystubFileArray.length < 3) {
                    paystubFileArray.push(paystubFile.files[i]);
                    if (paystubFileArray.length == 1) {
                        $('#mpayFile1').removeClass('hidden');
                        $('#apayFile1').removeClass('hidden');
                        $('#spayFile1').text(paystubFile.files[i].name);
                        $('#fileUploadPaystubShow').html('1 file selected');
                        $('#spayFile2').text('');
                        $('#spayFile3').text('');
                        $('#mpayFile2').addClass('hidden');
                        $('#mpayFile3').addClass('hidden');
                        $('#hndForPaystub').val('1');
                    }
                    else if (paystubFileArray.length == 2) {
                        $('#mpayFile2').removeClass('hidden');
                        $('#apayFile2').removeClass('hidden');
                        $('#spayFile2').text(paystubFile.files[i].name);
                        $('#fileUploadPaystubShow').html('2 files selected');
                    }
                    else if (paystubFileArray.length == 3) {
                        $('#mpayFile3').removeClass('hidden');
                        $('#apayFile3').removeClass('hidden');
                        $('#spayFile3').text(paystubFile.files[i].name);
                        $('#fileUploadPaystubShow').html('3 files selected');
                    }
                }
                else {
                    $.alert({
                        title: "",
                        content: "You can select only number of 3 files to upload",
                        type: 'blue'
                    });
                    return;
                }
            }
            if (paystubFileArray.length == 3) {
                paystubFileUpload(paystubFileArray);
            }
        }
        else {
            document.getElementById('fileUploadPaystub').value = '';
            $('#fileUploadPaystubShow').html('Choose a file...');
            $.alert({
                title: "",
                content: "You can select only number of 3 files to upload",
                type: 'blue'
            });
            return;
        }
    };
    $('#apayFile1').on('click', function () {
        paystubFileArray.pop();
        if (paystubFileArray.length == 2) {
            $('#mpayFile1').removeClass('hidden');
            $('#apayFile1').removeClass('hidden');
            $('#spayFile1').text($('#spayFile2').text());
            $('#mpayFile2').removeClass('hidden');
            $('#apayFile2').removeClass('hidden');
            $('#spayFile2').text($('#spayFile3').text());
            $('#mpayFile3').addClass('hidden');
            $('#apayFile3').addClass('hidden');
            $('#fileUploadPaystubShow').html('2 files selected');
        }
        else if (paystubFileArray.length == 0) {
            $('#mpayFile1').addClass('hidden');
            $('#apayFile1').addClass('hidden');
            $('#mpayFile2').addClass('hidden');
            $('#apayFile2').addClass('hidden');
            $('#mpayFile3').addClass('hidden');
            $('#apayFile3').addClass('hidden');
            $('#fileUploadPaystubShow').html('Choose a file...');
        }
        else if (paystubFileArray.length == 1) {
            $('#mpayFile1').removeClass('hidden');
            $('#apayFile1').removeClass('hidden');
            $('#spayFile1').text($('#spayFile2').text());
            $('#mpayFile2').addClass('hidden');
            $('#apayFile2').addClass('hidden');
            $('#mpayFile3').addClass('hidden');
            $('#apayFile3').addClass('hidden');
            $('#fileUploadPaystubShow').html('1 file selected');
        }

    });
    $('#apayFile2').on('click', function () {
        if (paystubFileArray.length == 3) {
            paystubFileArray.splice(1, 1);
            $('#mpayFile2').removeClass('hidden');
            $('#apayFile2').removeClass('hidden');
            $('#spayFile2').text($('#spayFile3').text());
            $('#mpayFile3').addClass('hidden');
            $('#apayFile3').addClass('hidden');
            $('#fileUploadPaystubShow').html('2 file selected');
        }
        if (paystubFileArray.length == 2) {
            paystubFileArray.shift();
            $('#mpayFile1').removeClass('hidden');
            $('#apayFile1').removeClass('hidden');
            $('#mpayFile2').addClass('hidden');
            $('#apayFile2').addClass('hidden');
            $('#mpayFile3').addClass('hidden');
            $('#apayFile3').addClass('hidden');
            $('#fileUploadPaystubShow').html('1 file selected');
        }
    });
    $('#apayFile3').on('click', function () {
        paystubFileArray.shift();
        $('#mpayFile3').addClass('hidden');
        $('#apayFile3').addClass('hidden');
        $('#fileUploadPaystubShow').html('2 files selected');
    });

    // new code fedral file upload
    document.getElementById('fileUploadFedral').onchange = function () {
        var fedralFile = document.getElementById('fileUploadFedral');
        var uploadFileCount = 0;
        var remainUploadFileCount = 0;
        uploadFileCount = fedralFile.files.length;
        remainUploadFileCount = parseInt(2 - fedralFileArray.length);
        if (uploadFileCount > remainUploadFileCount) {
            if (remainUploadFileCount == 0) {
                $('#fileUploadFedralShow').html('2 files selected');
                $.alert({
                    title: "",
                    content: "You can not upload more than 2 files",
                    type: 'blue'
                });
                return;
            }
            else {
                $.alert({
                    title: "",
                    content: "You can select only number of " + remainUploadFileCount + " files to upload",
                    type: 'blue'
                });
                return;
            }

        }
        if (fedralFile.files.length == 1) {
            for (var i = 0; i < fedralFile.files.length; i++) {

                var name1 = fedralFile.files[0].name;

                var fileFedralBool1 = restrictFileUpload(name1);

                if (fileFedralBool1 == false) {
                    document.getElementById('fileUploadFedral').value = '';
                    $('#fileUploadFedralShow').html('Choose a file...');
                    $.alert({
                        title: "",
                        content: "Only the following file extensions are allowed...</br>'gif', 'png', 'jpg', 'jpeg', 'bmp', 'psd', 'xls', 'doc', 'docx', 'pdf', 'rtf', 'tex', 'txt', 'wpd'",
                        type: 'blue'
                    });
                    return;
                }
                if (fedralFileArray.length < 2) {
                    fedralFileArray.push(fedralFile.files[i]);
                    if (fedralFileArray.length == 1) {
                        $('#mfedFile1').removeClass('hidden');
                        $('#afedFile1').removeClass('hidden');
                        $('#sfedFile1').text(fedralFile.files[0].name);
                        $('#fileUploadFedralShow').html('1 file selected');
                        $('#sfedFile2').text("");
                        $('#mfedFile2').addClass('hidden');
                        $('#afedFile2').removeClass('hidden');
                        $('#hndForFedral').val('1');
                    }
                    else if (fedralFileArray.length == 0) {
                        $('#mfedFile1').addClass('hidden');
                        $('#afedFile1').addClass('hidden');
                        $('#fileUploadFedralShow').html('Choose a file...');
                    }
                    else if (fedralFileArray.length == 2) {
                        $('#mfedFile2').removeClass('hidden');
                        $('#afedFile2').removeClass('hidden');
                        $('#sfedFile2').text(fedralFile.files[0].name);
                        $('#fileUploadFedralShow').html('2 files selected');
                    }
                }
                else {
                    $.alert({
                        title: "",
                        content: "You can select only number of 2 files to upload",
                        type: 'blue'
                    });
                    return;
                }
            }
            if (fedralFileArray.length == 2) {
                fedralFileUpload(fedralFileArray);
            }
        }
        else if (fedralFile.files.length == 2) {
            for (var i = 0; i < fedralFile.files.length; i++) {

                var name1 = fedralFile.files[0].name;
                var name2 = fedralFile.files[1].name;

                var fileFedralBool1 = restrictFileUpload(name1);
                var fileFedralBool2 = restrictFileUpload(name2);

                if (fileFedralBool1 == false) {
                    document.getElementById('fileUploadFedral').value = '';
                    $('#fileUploadFedralShow').html('Choose a file...');
                    $.alert({
                        title: "",
                        content: "Only the following file extensions are allowed...</br>'gif', 'png', 'jpg', 'jpeg', 'bmp', 'psd', 'xls', 'doc', 'docx', 'pdf', 'rtf', 'tex', 'txt', 'wpd'",
                        type: 'blue'
                    });
                    return;
                }
                if (fileFedralBool2 == false) {
                    document.getElementById('fileUploadFedral').value = '';
                    $('#fileUploadFedralShow').html('Choose a file...');
                    $.alert({
                        title: "",
                        content: "Only the following file extensions are allowed...</br>'gif', 'png', 'jpg', 'jpeg', 'bmp', 'psd', 'xls', 'doc', 'docx', 'pdf', 'rtf', 'tex', 'txt', 'wpd'",
                        type: 'blue'
                    });
                    return;
                }
                if (fedralFileArray.length < 2) {
                    fedralFileArray.push(fedralFile.files[i]);
                    if (fedralFileArray.length == 1) {
                        $('#mfedFile1').removeClass('hidden');
                        $('#afedFile1').removeClass('hidden');
                        $('#sfedFile1').text(fedralFile.files[i].name);
                        $('#fileUploadFedralShow').html('1 file selected');
                        $('#sfedFile2').text("");
                        $('#mfedFile2').addClass('hidden');
                        $('#afedFile2').removeClass('hidden');
                        $('#hndForFedral').val('1');
                    }
                    else if (fedralFileArray.length == 0) {
                        $('#mfedFile1').addClass('hidden');
                        $('#afedFile1').addClass('hidden');
                        $('#fileUploadFedralShow').html('Choose a file...');
                    }
                    else if (fedralFileArray.length == 2) {
                        $('#mfedFile2').removeClass('hidden');
                        $('#afedFile2').removeClass('hidden');
                        $('#sfedFile2').text(fedralFile.files[i].name);
                        $('#fileUploadFedralShow').html('2 files selected');
                    }
                }
                else {
                    $.alert({
                        title: "",
                        content: "You can select only number of 2 files to upload",
                        type: 'blue'
                    });
                    return;
                }
            }
            if (fedralFileArray.length == 2) {
                fedralFileUpload(fedralFileArray);
            }
        }
        else {
            $.alert({
                title: "",
                content: "You can select only number of 2 files to upload",
                type: 'blue'
            });
            return;
        }
    };
    $('#afedFile1').on('click', function () {
        $('#mfedFile1').addClass('hidden');
        fedralFileArray.pop();
        if (fedralFileArray.length == 0) {
            $('#mfedFile1').addClass('hidden');
            $('#afedFile1').addClass('hidden');
            $('#mfedFile2').addClass('hidden');
            $('#afedFile2').addClass('hidden');
            $('#fileUploadFedralShow').html('Choose a file...');
        }
        else if (fedralFileArray.length == 1) {
            $('#mfedFile1').removeClass('hidden');
            $('#afedFile1').removeClass('hidden');
            $('#sfedFile1').text($('#sfedFile2').text());
            $('#mfedFile2').addClass('hidden');
            $('#afedFile2').addClass('hidden');
            $('#fileUploadFedralShow').html('1 file selected');
        }
    });
    $('#afedFile2').on('click', function () {
        fedralFileArray.shift();
        $('#mfedFile2').addClass('hidden');
        $('#afedFile2').addClass('hidden');
        $('#fileUploadFedralShow').html('1 files selected');
    });

    // new code bankstatement file upload
    document.getElementById('fileUploadBankStatement').onchange = function () {
        var bankstatementFile = document.getElementById('fileUploadBankStatement');
        var uploadFileCount = 0;
        var remainUploadFileCount = 0;
        uploadFileCount = bankstatementFile.files.length;
        remainUploadFileCount = parseInt(3 - bankstatementFileArray.length);
        if (uploadFileCount > remainUploadFileCount) {
            if (remainUploadFileCount == 0) {
                $('#fileUploadBankStatementShow').html('3 files selected');
                $.alert({
                    title: "",
                    content: "You can not upload more than 3 files",
                    type: 'blue'
                });
                return;
            }
            else {
                $.alert({
                    title: "",
                    content: "You can select only number of " + remainUploadFileCount + " files to upload",
                    type: 'blue'
                });
                return;
            }

        }
        if (bankstatementFile.files.length == 1) {
            for (var i = 0; i < bankstatementFile.files.length; i++) {

                var name1 = bankstatementFile.files[0].name;

                var fileBankstatementBool1 = restrictFileUpload(name1);

                if (fileBankstatementBool1 == false) {
                    document.getElementById('fileUploadBankStatement').value = '';
                    $('#fileUploadBankStatementShow').html('Choose a file...');
                    $.alert({
                        title: "",
                        content: "Only the following file extensions are allowed...</br>'gif', 'png', 'jpg', 'jpeg', 'bmp', 'psd', 'xls', 'doc', 'docx', 'pdf', 'rtf', 'tex', 'txt', 'wpd'",
                        type: 'blue'
                    });
                    return;
                }
                if (bankstatementFileArray.length < 3) {
                    bankstatementFileArray.push(bankstatementFile.files[i]);
                    if (bankstatementFileArray.length == 1) {
                        $('#mbankstateFile1').removeClass('hidden');
                        $('#abankstateFile1').removeClass('hidden');
                        $('#sbankstateFile1').text(bankstatementFile.files[0].name);
                        $('#fileUploadBankStatementShow').html('1 file selected');
                        $('#sbankstateFile2').text("");
                        $('#sbankstateFile3').text("");
                        $('#mbankstateFile2').addClass('hidden');
                        $('#abankstateFile2').removeClass('hidden');
                        $('#mbankstateFile3').addClass('hidden');
                        $('#abankstateFile3').removeClass('hidden');
                        $('#hndForBankStatement').val('1');
                    }
                    else if (bankstatementFileArray.length == 2) {
                        $('#mbankstateFile2').removeClass('hidden');
                        $('#abankstateFile2').removeClass('hidden');
                        $('#sbankstateFile2').text(bankstatementFile.files[0].name);
                        $('#fileUploadBankStatementShow').html('2 files selected');
                    }
                    else if (bankstatementFileArray.length == 3) {
                        $('#mbankstateFile3').removeClass('hidden');
                        $('#abankstateFile3').removeClass('hidden');
                        $('#sbankstateFile3').text(bankstatementFile.files[0].name);
                        $('#fileUploadBankStatementShow').html('3 files selected');
                    }
                }
                else {
                    $.alert({
                        title: "",
                        content: "You can select only number of 3 files to upload",
                        type: 'blue'
                    });
                    return;
                }
            }
            if (bankstatementFileArray.length == 3) {
                bankstatementFileUpload(bankstatementFileArray);
            }
        }
        else if (bankstatementFile.files.length == 2) {
            for (var i = 0; i < bankstatementFile.files.length; i++) {

                var name1 = bankstatementFile.files[0].name;
                var name2 = bankstatementFile.files[1].name;

                var fileBankstatementBool1 = restrictFileUpload(name1);
                var fileBankstatementBool2 = restrictFileUpload(name2);

                if (fileBankstatementBool1 == false) {
                    document.getElementById('fileUploadBankStatement').value = '';
                    $('#fileUploadBankStatementShow').html('Choose a file...');
                    $.alert({
                        title: "",
                        content: "Only the following file extensions are allowed...</br>'gif', 'png', 'jpg', 'jpeg', 'bmp', 'psd', 'xls', 'doc', 'docx', 'pdf', 'rtf', 'tex', 'txt', 'wpd'",
                        type: 'blue'
                    });
                    return;
                }
                if (fileBankstatementBool2 == false) {
                    document.getElementById('fileUploadBankStatement').value = '';
                    $('#fileUploadBankStatementShow').html('Choose a file...');
                    $.alert({
                        title: "",
                        content: "Only the following file extensions are allowed...</br>'gif', 'png', 'jpg', 'jpeg', 'bmp', 'psd', 'xls', 'doc', 'docx', 'pdf', 'rtf', 'tex', 'txt', 'wpd'",
                        type: 'blue'
                    });
                    return;
                }
                if (bankstatementFileArray.length < 3) {
                    bankstatementFileArray.push(bankstatementFile.files[i]);
                    if (bankstatementFileArray.length == 1) {
                        $('#mbankstateFile1').removeClass('hidden');
                        $('#abankstateFile1').removeClass('hidden');
                        $('#sbankstateFile1').text(bankstatementFile.files[i].name);
                        $('#fileUploadBankStatementShow').html('1 file selected');
                        $('#sbankstateFile2').text("");
                        $('#sbankstateFile3').text("");
                        $('#mbankstateFile2').addClass('hidden');
                        $('#abankstateFile2').removeClass('hidden');
                        $('#mbankstateFile3').addClass('hidden');
                        $('#abankstateFile3').removeClass('hidden');
                        $('#hndForBankStatement').val('1');
                    }
                    else if (bankstatementFileArray.length == 2) {
                        $('#mbankstateFile2').removeClass('hidden');
                        $('#abankstateFile2').removeClass('hidden');
                        $('#sbankstateFile2').text(bankstatementFile.files[i].name);
                        $('#fileUploadBankStatementShow').html('2 files selected');
                    }
                    else if (bankstatementFileArray.length == 3) {
                        $('#mbankstateFile3').removeClass('hidden');
                        $('#abankstateFile3').removeClass('hidden');
                        $('#sbankstateFile3').text(bankstatementFile.files[i].name);
                        $('#fileUploadBankStatementShow').html('3 files selected');
                    }
                }
                else {
                    $.alert({
                        title: "",
                        content: "You can select only number of 3 files to upload",
                        type: 'blue'
                    });
                    return;
                }
            }
            if (bankstatementFileArray.length == 3) {
                bankstatementFileUpload(bankstatementFileArray);
            }
        }
        else if (bankstatementFile.files.length == 3) {
            for (var i = 0; i < bankstatementFile.files.length; i++) {

                var name1 = bankstatementFile.files[0].name;
                var name2 = bankstatementFile.files[1].name;
                var name3 = bankstatementFile.files[2].name;

                var fileBankstatementBool1 = restrictFileUpload(name1);
                var fileBankstatementBool2 = restrictFileUpload(name2);
                var fileBankstatementBool3 = restrictFileUpload(name3);

                if (fileBankstatementBool1 == false) {
                    document.getElementById('fileUploadBankStatement').value = '';
                    $('#fileUploadBankStatementShow').html('Choose a file...');
                    $.alert({
                        title: "",
                        content: "Only the following file extensions are allowed...</br>'gif', 'png', 'jpg', 'jpeg', 'bmp', 'psd', 'xls', 'doc', 'docx', 'pdf', 'rtf', 'tex', 'txt', 'wpd'",
                        type: 'blue'
                    });
                    return;
                }
                if (fileBankstatementBool2 == false) {
                    document.getElementById('fileUploadBankStatement').value = '';
                    $('#fileUploadBankStatementShow').html('Choose a file...');
                    $.alert({
                        title: "",
                        content: "Only the following file extensions are allowed...</br>'gif', 'png', 'jpg', 'jpeg', 'bmp', 'psd', 'xls', 'doc', 'docx', 'pdf', 'rtf', 'tex', 'txt', 'wpd'",
                        type: 'blue'
                    });
                    return;
                }
                if (fileBankstatementBool3 == false) {
                    document.getElementById('fileUploadBankStatement').value = '';
                    $('#fileUploadBankStatementShow').html('Choose a file...');
                    $.alert({
                        title: "",
                        content: "Only the following file extensions are allowed...</br>'gif', 'png', 'jpg', 'jpeg', 'bmp', 'psd', 'xls', 'doc', 'docx', 'pdf', 'rtf', 'tex', 'txt', 'wpd'",
                        type: 'blue'
                    });
                    return;
                }
                if (bankstatementFileArray.length < 3) {
                    bankstatementFileArray.push(bankstatementFile.files[i]);
                    if (bankstatementFileArray.length == 1) {
                        $('#mbankstateFile1').removeClass('hidden');
                        $('#abankstateFile1').removeClass('hidden');
                        $('#sbankstateFile1').text(bankstatementFile.files[i].name);
                        $('#fileUploadBankStatementShow').html('1 file selected');
                        $('#sbankstateFile2').text("");
                        $('#sbankstateFile3').text("");
                        $('#mbankstateFile2').addClass('hidden');
                        $('#abankstateFile2').removeClass('hidden');
                        $('#mbankstateFile3').addClass('hidden');
                        $('#abankstateFile3').removeClass('hidden');
                        $('#hndForBankStatement').val('1');
                    }
                    else if (bankstatementFileArray.length == 2) {
                        $('#mbankstateFile2').removeClass('hidden');
                        $('#abankstateFile2').removeClass('hidden');
                        $('#sbankstateFile2').text(bankstatementFile.files[i].name);
                        $('#fileUploadBankStatementShow').html('2 files selected');
                    }
                    else if (bankstatementFileArray.length == 3) {
                        $('#mbankstateFile3').removeClass('hidden');
                        $('#abankstateFile3').removeClass('hidden');
                        $('#sbankstateFile3').text(bankstatementFile.files[i].name);
                        $('#fileUploadBankStatementShow').html('3 files selected');
                    }
                }
                else {
                    $.alert({
                        title: "",
                        content: "You can select only number of 3 files to upload",
                        type: 'blue'
                    });
                    return;
                }
            }
            if (bankstatementFileArray.length == 3) {
                bankstatementFileUpload(bankstatementFileArray);
            }
        }
        else {
            $.alert({
                title: "",
                content: "You can select only number of 3 files to upload",
                type: 'blue'
            });
            return;
        }
    };

    $('#abankstateFile1').on('click', function () {
        bankstatementFileArray.pop();
        if (bankstatementFileArray.length == 2) {
            $('#mbankstateFile1').removeClass('hidden');
            $('#abankstateFile1').removeClass('hidden');
            $('#sbankstateFile1').text($('#sbankstateFile2').text());
            $('#mbankstateFile2').removeClass('hidden');
            $('#abankstateFile2').removeClass('hidden');
            $('#sbankstateFile2').text($('#sbankstateFile3').text());
            $('#mbankstateFile3').addClass('hidden');
            $('#abankstateFile1').addClass('hidden');
            $('#fileUploadBankStatementShow').html('2 files selected');
        }
        else if (bankstatementFileArray.length == 0) {
            $('#mbankstateFile1').addClass('hidden');
            $('#abankstateFile1').addClass('hidden');
            $('#mbankstateFile2').addClass('hidden');
            $('#abankstateFile2').addClass('hidden');
            $('#mbankstateFile3').addClass('hidden');
            $('#abankstateFile3').addClass('hidden');
            $('#fileUploadBankStatementShow').html('Choose a file...');
        }
        else if (bankstatementFileArray.length == 1) {
            $('#mbankstateFile1').removeClass('hidden');
            $('#abankstateFile1').removeClass('hidden');
            $('#sbankstateFile1').text($('#sbankstateFile2').text());
            $('#mbankstateFile2').addClass('hidden');
            $('#abankstateFile2').addClass('hidden');
            $('#mbankstateFile3').addClass('hidden');
            $('#abankstateFile3').addClass('hidden');
            $('#fileUploadBankStatementShow').html('1 file selected');
        }

    });
    $('#abankstateFile2').on('click', function () {
        if (bankstatementFileArray.length == 3) {
            bankstatementFileArray.splice(1, 1);
            $('#mbankstateFile2').removeClass('hidden');
            $('#abankstateFile2').removeClass('hidden');
            $('#sbankstateFile2').text($('#sbankstateFile3').text());
            $('#mbankstateFile3').addClass('hidden');
            $('#abankstateFile3').addClass('hidden');
            $('#fileUploadBankStatementShow').html('2 file selected');
        }
        else if (bankstatementFileArray.length == 2) {
            bankstatementFileArray.shift();
            $('#mbankstateFile1').removeClass('hidden');
            $('#abankstateFile1').removeClass('hidden');
            $('#mbankstateFile2').addClass('hidden');
            $('#abankstateFile2').addClass('hidden');
            $('#mbankstateFile3').addClass('hidden');
            $('#abankstateFile3').addClass('hidden');
            $('#fileUploadBankStatementShow').html('2 file selected');
        }

    });
    $('#abankstateFile3').on('click', function () {
        bankstatementFileArray.shift();
        $('#mbankstateFile3').addClass('hidden');
        $('#abankstateFile3').addClass('hidden');
        $('#fileUploadBankStatementShow').html('2 files selected');
    });

    // New Upload Code End //

    //if ($("#chkAgreeTermsPolicy").is(":checked")) {
    //    $("#policyStart").attr("disabled", true);
    //    InnerPolicyCheck();
    //}
    //else if ($("#chkAgreeTermsPolicy").is(":not(:checked)")) {
    //    $("#policyStart").attr("disabled", true);
    //    $("#popRentalQualification").modal("hide");
    //    InnerPolicyCheck();
    //}

    //$("#chkAgreeTermsPolicy").on('ifChanged', function (event) {
    //    if ($("#chkAgreeTermsPolicy").is(":checked")) {
    //        InnerPolicyCheck();
    //        if ($("#hndShowTermPolicy").val() == 1) {
    //            $("#popRentalQualification").modal("show");
    //        }
    //        else {
    //            $("#hndShowTermPolicy").val(1);
    //        }
    //    }
    //    else if ($("#chkAgreeTermsPolicy").is(":not(:checked)")) {
    //        $("#policyStart").attr("disabled", true);
    //        $("#popRentalQualification").modal("hide");
    //        InnerPolicyCheck();
    //    }
    //});

    //$("#chkRentalQual,#chkRentalPolicy").on('ifChanged', function (event) {
    //    InnerPolicyCheck();
    //});


    $("#chkAgreeSummarry").on('ifChanged', function (event) {
        if ($("#chkAgreeSummarry").is(":checked")) {
            $("#btnpaynow").removeProp("disabled");
            if ($("#hndShowPaymentPolicy").val() == 1) {
            }
            else {
                $("#hndShowPaymentPolicy").val(1);
            }
            var model = {
                CurrentUserId: $('#hndCurrentUserId').val(),
                isAgreeSummary: 1,
            };

            $.ajax({
                url: '/ApplyNow/SaveUpdateAgreeSummary',
                type: 'post',
                data: JSON.stringify(model),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function (response) {

                }
            });
        }
        else if ($("#chkAgreeSummarry").is(":not(:checked)")) {
            var model = {
                CurrentUserId: $('#hndCurrentUserId').val(),
                isAgreeSummary: 0,
            };

            $.ajax({
                url: '/ApplyNow/SaveUpdateAgreeSummary',
                type: 'post',
                data: JSON.stringify(model),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function (response) {

                }
            });
        }
    });

    function InnerPolicyCheck() {

        if ($("#chkRentalQual").is(":checked") && $("#chkRentalPolicy").is(":checked")) {
            $("#policyStart").attr("disabled", false);
            $("#popRentalQualification").modal("hide");
        }
        else if ($("#chkRentalQual").is(":not(:checked)") || $("#chkRentalPolicy").is(":not(:checked)")) {
            $("#policyStart").attr("disabled", true);
        }
    }

    if ($("#chkDontHaveVehicle").is(":checked")) {
        $("#btnAddVehicle").attr("disabled", true);
        $("#btnAddVehicle").css("background-color", "#b4ada5");
    }

    else if ($("#chkDontHaveVehicle").is(":not(:checked)")) {
        $("#btnAddVehicle").attr("disabled", false);
        $("#btnAddVehicle").removeAttr("style");
    }

    $('input[type=checkbox]').on('ifChanged', function (event) {
        if ($("#chkDontHaveVehicle").is(":checked")) {
            $("#btnAddVehicle").attr("disabled", true);
            $("#btnAddVehicle").css("background-color", "#b4ada5");
            //deleteVehiclesListOnCheck();
            haveVehicle();
        }
        else if ($("#chkDontHaveVehicle").is(":not(:checked)")) {
            $("#btnAddVehicle").attr("disabled", false);
            $("#btnAddVehicle").removeAttr("style");
            haveVehicle();
        }
        fillUnitParkingList();
    });

    if ($("#chkDontHavePet").is(":checked")) {
        $("#btnAddPet").prop("disabled", true);
        $("#btnAddPet").css("background-color", "#b4ada5");
    }

    else if ($("#chkDontHavePet").is(":not(:checked)")) {
        $("#btnAddPet").prop("disabled", false);
        $("#btnAddPet").removeAttr("style");
    }

    $('input[type=checkbox]').on('ifChanged', function (event) {
        if ($("#chkDontHavePet").is(":checked")) {
            $("#btnAddPet").prop("disabled", true);
            $("#btnAddPet").css("background-color", "#b4ada5");
            havePet();
        }
        else if ($("#chkDontHavePet").is(":not(:checked)")) {
            $("#btnAddPet").prop("disabled", false);
            $("#btnAddPet").removeAttr("style");
            havePet();
        }
    });

    $("#ddlRoom").on("change", function () {
        getPropertyModelUnitList();
    });
    $("#ddlSortOrder").on("change", function () {
        getPropertyModelUnitList();
    });
    $("#txtDate").on("change", function () {
        if ($("#txtDate").val() != "") {
            getPropertyModelUnitList();
        }
    });
    tenantOnlineID = $("#hdnOPId").val();

    getTenantOnlineList(tenantOnlineID);
    getPreviousAddressInfo(tenantOnlineID);
    getPreviousEmployementInfo(tenantOnlineID);

    $("#txtCountry").on('change', function (evt, params) {
        var selected = $(this).val();
        if (selected != null) {
            fillStateDDL_Home(selected, 0);
        }
    });
    $("#txtCountryReg").on('change', function (evt, params) {
        var selected = $(this).val();
        if (selected != null) {
            fillStateDDLReg_IDType(selected, 0);
            fillStateDDLReg_Home(selected, 0);
        }
    });
    $("#txtCountryOffice").on('change', function (evt, params) {
        var selected = $(this).val();
        if (selected != null) {
            fillStateDDL_Office(selected, 0);
        }
    });
    $("#txtCountryOfficeHEI").on('change', function (evt, params) {
        var selected = $(this).val();
        if (selected != null) {
            fillStateDDL_OfficeHEI(selected, 0);
        }
    });
    $("#txtEmergencyCountry").on('change', function (evt, params) {
        var selected = $(this).val();
        if (selected != null) {
            fillStateDDL_EmeContact(selected, 0);
        }
    });
    //17082019 - end
    $("#txtCountry2").on('change', function (evt, params) {
        var selected = $(this).val();
        if (selected != null) {
            fillStateDDL_Home2(selected, 0);
        }
    });


    $("#btnParking").on("click", function (event) {
        fillParkingList();
        addParkingArray = [];
        $("#popParking").PopupWindow("open");
    });
    $("#btnFob").on("click", function (event) {
        fillFOBList();
        $("#popFobs").PopupWindow("open");
    });
    $("#btnStorage").on("click", function (event) {
        fillStorageListApplyNow("ASC", "Storage1Storage");
        $("#popStorage").PopupWindow("open");
    });

    $("#btnPetPlace").on("click", function (event) {
        fillPetPlaceList();
        addPetPlaceArray = [];
        $("#popPetPlace").PopupWindow("open");
    });
    
    $("#ddlIsInter").on("change", function () {
        var isInterId = $(this).val();
        ddlDocumentTypePersonal(isInterId);
        if ($(this).val() == 1) {
            $("#passportDiv").removeClass("hidden");
            $("#divSSNNumber").addClass("col-sm-4 hidden");
            $("#divCountryOfOrigin").removeClass("hidden");

        }
        else {
            $("#passportDiv").addClass("hidden");
            $("#divSSNNumber").removeClass("col-sm-4 hidden");
            $("#divSSNNumber").addClass("col-sm-4");
            $("#divCountryOfOrigin").addClass("hidden");
        }
    });
    
   

    $("#btnAddVehicle").on("click", function (event) {
        var randNo = makeid(6);
        $("#txtVehicleTag").val(randNo);
        clearVehicle();
        $("#popVehicle").PopupWindow("open");
    });

    $("#btnAddPet").on("click", function (event) {
        clearPet();
        $("#popPet").PopupWindow("open");
    });
   
    setTimeout(function () {
        getApplicantListsPrimary();
        getVehicleLists();
        getPetListsApplyNow();
    }, 2000);

    $("#ddladdHistory").on("change", function () {
        if ($(this).val() == 1) {
            $("#residence2").removeClass("hidden");
        }
        else {
            $("#txtAddress12,#txtAddress22,#txtZip2,#txtMoveInDate2,#txtMonthlyPayment2,#txtReasonforleaving2").empty();
            $("#residence2").addClass("hidden");
        }
    });
    $("#ddlDocumentTypePersonal").on("change", function () {
        var newText = $('option:selected', this).text();
        $("#lblUploadIdentity").text(newText);
    });


    $("#btnAddAHR").on("click", function (event) {
        clearApplicantHistory();
        $("#popApplicantHistory").PopupWindow("open");
    });

    $("#btnAddHEI").on("click", function (event) {
        clearHistoryOfResidence();
        $("#popHistoryEmpAndIncome").PopupWindow("open");
    });

    QuoteExpires = $("#lblFNLQuoteExpires").text();
    $("#getting-startedTimeRemainingClock").countdown(QuoteExpires, function (event) {
        $(this).text(
            event.strftime('Quote Expires in %D days %H hr : %M min')
        );
    });
    //$("#appGenderOther").addClass("hidden");
    var d = $('#txtAvailableDate').text();
    var date = new Date(d);
    var daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    var dayOfMonth = date.getDate() - 1;

    var days = daysInMonth - dayOfMonth;
    remainingday = days;
    numberOfDays = daysInMonth;
    document.getElementById('fileUploadVehicleRegistation').onchange = function () {
        var fileUploadVehicleRegistationBool = restrictFileUpload($(this).val());
        if (fileUploadVehicleRegistationBool == true) {
            uploadVehicleCertificate();
        }
        else {
            document.getElementById('fileUploadVehicleRegistation').value = '';
            $('#VehicleRegistationShow').html('Choose a file...');
            $.alert({
                title: "",
                content: "Only the following file extensions are allowed...</br>'gif', 'png', 'jpg', 'jpeg', 'bmp', 'psd', 'xls', 'doc', 'docx', 'pdf', 'rtf', 'tex', 'txt', 'wpd'",
                type: 'blue'
            });
        }
    };
    document.getElementById('pet-picture').onchange = function () {
        var filepetpictureBool = restrictFileUpload($(this).val());
        if (filepetpictureBool == true) {
            uploadPetPhoto();
        }
        else {
            document.getElementById('pet-picture').value = '';
            $('#filePetPictireShow').html('Choose a file...');
            $.alert({
                title: "",
                content: "Only the following file extensions are allowed...</br>'gif', 'png', 'jpg', 'jpeg', 'bmp', 'psd', 'xls', 'doc', 'docx', 'pdf', 'rtf', 'tex', 'txt', 'wpd'",
                type: 'blue'
            });
        }
    };
    document.getElementById('filePetVaccinationCertificate').onchange = function () {
        var filePetVaccinationCertificateBool = restrictFileUpload($(this).val());
        if (filePetVaccinationCertificateBool == true) {
            uploadPetVaccination();
        }
        else {
            document.getElementById('filePetVaccinationCertificate').value = '';
            $('#filePetVaccinationCertificateShow').html('Choose a file...');
            $.alert({
                title: "",
                content: "Only the following file extensions are allowed...</br>'gif', 'png', 'jpg', 'jpeg', 'bmp', 'psd', 'xls', 'doc', 'docx', 'pdf', 'rtf', 'tex', 'txt', 'wpd'",
                type: 'blue'
            });
        }
    };
    $("#ddlRentOwn").on("change", function () {
        if (this.value == '1') {
            $("#lbl_txtApartmentCommunity,#lbl_txtManagementCompany,#lbl_txtManagementCompanyPhone,#lblProperNoticeLeaseAgreement").addClass("star");
            $('#ddlProperNoticeLeaseAgreement').empty();
            $('#ddlProperNoticeLeaseAgreement').append('<option value="1">Yes</option>');
            $('#ddlProperNoticeLeaseAgreement').append('<option value="2">No</option>');
        }
        else if (this.value == '2') {
            $("#lbl_txtApartmentCommunity,#lbl_txtManagementCompany,#lbl_txtManagementCompanyPhone,#lblProperNoticeLeaseAgreement").removeClass("star");
            $('#ddlProperNoticeLeaseAgreement').empty();
            $('#ddlProperNoticeLeaseAgreement').append('<option value="1">N/A</option>');
        }
    });
    $("#ddlRentOwn2").on("change", function () {
        if (this.value == '1') {
            $("#lbl_txtApartmentCommunity2,#lbl_txtManagementCompany2,#lbl_txtManagementCompanyPhone2,#lblProperNoticeLeaseAgreement2").addClass("star");
            $('#ddlProperNoticeLeaseAgreement2').empty();
            $('#ddlProperNoticeLeaseAgreement2').append('<option value="1">Yes</option>');
            $('#ddlProperNoticeLeaseAgreement2').append('<option value="2">No</option>');
        }
        else if (this.value == '2') {
            $("#lbl_txtApartmentCommunity2,#lbl_txtManagementCompany2,#lbl_txtManagementCompanyPhone2,#lblProperNoticeLeaseAgreement2").removeClass("star");
            $('#ddlProperNoticeLeaseAgreement2').empty();
            $('#ddlProperNoticeLeaseAgreement2').append('<option value="1">N/A</option>');
        }
    });
    $("#txtpetWeight").keypress(function (event) { return nonNegDecimal(event, $(this)); });
    dateIconFunctions();
    clearHistoryOfResidence();
    getEmployerHistory();
    $("#ddlFurnishedUnit").on("change", function () {
        getPropertyModelUnitList();
    });

    $("#listUnitNew tbody").on("click", "tr", function (e) {
        var floorfromplan = localStorage.getItem("floorfromplan");
        var floorid = $(this).data("floorid");
        $("#fa_" + floorid).addClass('active_area', 'active_mouse').data('maphilight', { alwaysOn: true, fillColor: '0af11c', strokeColor: '0af11c' }).trigger('alwaysOn.maphilight');
        if (floorid == floorfromplan) {
            $("#fa_" + floorid).addClass('active_area', 'active_mouse').data('maphilight', { alwaysOn: true, fillColor: '0af11c', strokeColor: '0af11c' }).trigger('alwaysOn.maphilight');
        }
        else {
            $("#fa_" + floorfromplan).removeClass('active_area', 'active_mouse').data('maphilight', { alwaysOn: false }).trigger('alwaysOn.maphilight');
        }
    });

    //$("#txtApplicantSSNNumber").focusout(function () {
    //    var ssnLength = $("#txtApplicantSSNNumber").val().length;
    //   // console.log(ssnLength);
    //    if (ssnLength < 8) {
    //       // $("#divchkCCPay").add("hidden");
    //        $("#chkCCPay").prop("disabled", true);
    //    }
    //    else if (ssnLength > 8) {
    //        $("#chkCCPay").prop("disabled", false);
    //    }
    //});
    ddlAvailableFloorPlanLeaseTermOnChange();
});

var cancel = function () {

    var checkModel = { TenantID: $("#hdnOPId").val() };
    $.ajax({
        url: '/ApplyNow/CheckApplicationStatus',
        type: 'post',
        data: JSON.stringify(checkModel),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
            if (response.result == "") {
                $.alert({
                    title: "",
                    content: "Do you want to submit application?",
                    type: 'blue',
                    buttons: {
                        yes: {
                            text: 'Yes',
                            action: function (yes) {
                                $("#divLoader").show();
                                var ProspectId = $("#hdnOPId").val();
                                var model = {
                                    ID: ProspectId,
                                    StepCompleted: 18
                                };

                                $.ajax({
                                    url: '/ApplyNow/SaveUpdateStep',
                                    type: 'post',
                                    data: JSON.stringify(model),
                                    contentType: 'application/json; charset=utf-8',
                                    dataType: 'json',
                                    success: function (response) {
                                        $("#divLoader").hide();
                                        window.location.href = "/home";
                                    }
                                });
                            }
                        },
                        no: {
                            text: 'No',
                            action: function (no) {
                                $("#divLoader").hide();
                            }
                        }
                    }
                });
            } else {
                $.alert({
                    title: "",
                    content: response.result,
                    type: 'blue'
                });
            }
        }
    });






};
function checkFormstatus() {
    $("#checkForm").toggleClass("hidden");
}
var totalAmt = 0;
var goToStep = function (stepid, id, calldataupdate) {
    if (parseInt($("#hdnStepCompleted").val()) >= 15) {
        $(".gotosummary").removeClass('hidden');
    }
    $.jTimeout.setTimeOutAfter(780);
    //$.jTimeout().reset();
    if (stepid > 7) {
        if ($("#hndCreditPaid").val() == 0) {
            $.alert({
                title: "",
                content: "Please Pay Credit Check Fees, Please fill Information to get the Credit Pay Link, if alerady filled please check email for detail.",
                type: 'red'
            });
            return;
        }
    }
    if (stepid == "1") {
        $("#li1").addClass("active");
        $("#li2").removeClass("active");
        $("#li3").removeClass("active");
        $("#li4").removeClass("active");
        $("#li5").removeClass("active");
        $("#li6").removeClass("active");
        $("#li7").removeClass("active");

        $("#step1").removeClass("hidden");
        $("#step2").addClass("hidden");
        $("#step3").addClass("hidden");
        $("#step4").addClass("hidden");
        $("#step5").addClass("hidden");
        $("#step6").addClass("hidden");
        $("#step7").addClass("hidden");
        $("#step8").addClass("hidden");
        $("#step9").addClass("hidden");
        $("#step10").addClass("hidden");
        $("#step11").addClass("hidden");
        $("#step12").addClass("hidden");
        $("#step13").addClass("hidden");
        $("#step14").addClass("hidden");
        $("#step15").addClass("hidden");
        $("#step16").addClass("hidden");
        $("#step17").addClass("hidden");
        $("#subMenu").addClass("hidden");
    }
    if (stepid == "2") {

        

        if (parseInt($("#hndIsModelSelected").val()) == 0) {
            var msg = "Please select floor plan to choose your new apartment";
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
        if ($('#txtAvailableDate').text() == '') {
            $('#lblLeaseStartDate').text($('#txtDate').val());
        }
        else {
            $('#lblLeaseStartDate').text($('#txtAvailableDate').text());
        }
        if (id == "2") {
            
            var floorNoSearch = $("#hndFloorNo").val();
            var bedRoomSearch = $("#hndBedRoom").val();
            var buildingSearch = $("#hndBuilding").val();
            var ubitIdSearch = $("#hndUID").val();

            if (ubitIdSearch != 0 && buildingSearch != "" && floorNoSearch > 0) {
                showFloorPlanApplicant(floorNoSearch, bedRoomSearch, buildingSearch);
            }

            $("#subMenu").addClass("hidden");

            $("#as2").removeAttr("onclick");
            $("#as2").attr("onclick", "goToStep(2,2,1)");

            $("#li1").addClass("active");
            $("#li2").addClass("active");
            $("#li3").removeClass("active");
            $("#li4").removeClass("active");
            $("#li5").removeClass("active");
            $("#li6").removeClass("active");
            $("#li7").removeClass("active");

            $("#step1").addClass("hidden");
            $("#step3").addClass("hidden");
            $("#step4").addClass("hidden");
            $("#step2").removeClass("hidden");
            $("#step5").addClass("hidden");
            $("#step6").addClass("hidden");
            $("#step7").addClass("hidden");
            $("#step8").addClass("hidden");
            $("#step9").addClass("hidden");
            $("#step10").addClass("hidden");
            $("#step11").addClass("hidden");
            $("#step12").addClass("hidden");
            $("#step13").addClass("hidden");
            $("#step14").addClass("hidden");
            $("#step15").addClass("hidden");
            $("#step16").addClass("hidden");
            $("#step17").addClass("hidden");
            if ($("#hdnOPId").val() != '0') {
                getStaticApplicantValues();
                getPropertyUnitDetails($("#hndUID").val());
            }
           
            if ($("#listUnitNew tr").hasClass("select-unit")) {
               // $("#listUnitNew tr").trigger("click");
                var selectedID = $("#listUnitNew tr").attr("id");
                var selectedIDNew = selectedID.split('_')
                console.log(selectedIDNew[1]);
                getPropertyUnitDetails(selectedIDNew[1]);
            }
            
        }
    }
    if (stepid == "3") {

        if ($("#hndUID").val() == 0) {
            if (parseInt($("#hdnStepCompleted").val()) < 2) {
                msg = getStepCompletedMsg(parseInt($("#hdnStepCompleted").val()) + 1, 3);
                $.alert({
                    title: "",
                    content: msg,
                    type: 'red'
                });
                return;
            }
        }
        if (id == "3") {
            if ($("#hndUID").val() != 0) {
                var prospectID = $("#hdnOPId").val();
                var unitID = $("#hndUID").val();
                var model = {
                    UnitID: unitID,
                    ProspectID: prospectID
                };

                $("#divLoader").show();
                $.ajax({
                    url: "/ApplyNow/CheckUnitAvailable",
                    type: "post",
                    contentType: "application/json utf-8",
                    data: JSON.stringify(model),
                    dataType: "JSON",
                    success: function (response) {
                        //console.log(response);
                        var result = response.result.split('|');
                        $("#divLoader").hide();
                        if (result[0] == 0) {
                            $.alert({
                                title: "",
                                content: result[1] + " is not available.<br/>Please select other unit.",
                                type: 'red'
                            });
                            $("#hndUID").val(0);
                            var floorNoSearch = $("#hndFloorNo").val();
                            var bedRoomSearch = $("#hndBedRoom").val();
                            var buildingSearch = $("#hndBuilding").val();
                            var ubitIdSearch = 0;

                            if (ubitIdSearch != 0 && buildingSearch != "" && floorNoSearch > 0) {
                                showFloorPlanApplicant(floorNoSearch, bedRoomSearch, buildingSearch);
                            }
                            getPropertyUnitList(buildingSearch);
                            $("#popUnitPlan").empty();
                        }
                        else {
                            $("#as3").removeAttr("onclick");
                            $("#as3").attr("onclick", "goToStep(4,4,0)");
                            $("#subMenu").addClass("hidden");
                            SaveQuote(3);
                            var checkReload = localStorage.getItem("CheckReload");
                            if (checkReload == "Done") {
                                window.location.reload();
                            }
                            $("#li1").addClass("active");
                            $("#li2").addClass("active");
                            $("#li3").addClass("active");
                            $("#li4").removeClass("active");
                            $("#li5").removeClass("active");
                            $("#li6").removeClass("active");
                            $("#li7").removeClass("active");

                            $("#step2").addClass("hidden");
                            $("#step1").addClass("hidden");
                            $("#step4").addClass("hidden");
                            $("#step3").removeClass("hidden");
                            $("#step5").addClass("hidden");
                            $("#step6").addClass("hidden");
                            $("#step7").addClass("hidden");
                            $("#step8").addClass("hidden");
                            $("#step9").addClass("hidden");
                            $("#step10").addClass("hidden");
                            $("#step11").addClass("hidden");
                            $("#step12").addClass("hidden");
                            $("#step13").addClass("hidden");
                            $("#step14").addClass("hidden");
                            $("#step15").addClass("hidden");
                            $("#step16").addClass("hidden");
                            $("#step17").addClass("hidden");
                            if ($("#hdnOPId").val() != '0') {
                                getStaticApplicantValues();
                            }

                        }
                    }
                });

            } else {
                $.alert({
                    title: "",
                    content: "Please select your Unit",
                    type: 'red'
                });
            }
        }
    }
    if (stepid == "4") {
        if ($("#hdnUserId").val() == 0 && $("#hndUID").val() != 0) {
            msg = getStepCompletedMsg(parseInt($("#hdnStepCompleted").val()) + 2, 4);

            if (msg.indexOf("Complete Registration") == -1) {
                msg += "<b>Complete Registration</b>";
            }
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
        if (parseInt($("#hdnStepCompleted").val()) < 3) {
            msg = getStepCompletedMsg(parseInt($("#hdnStepCompleted").val()) + 1, 4);
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
        if (id == "4") {
            if ($("#hdnOPId").val() != '0') {
                getStaticApplicantValues();
            }
            if ($("#hdnUserId").val() != 0) {

                var message = "";
                var result = checkStrength($("#txtPassword").val());
                if (!result) {
                    return;
                }
                var firstName = $("#txtFirstName").val();
                var middleInitial = $("#txtMiddleInitialReg").val();
                var lastName = $("#txtLastName").val();
                var phoneNumber = unformatText($("#txtPhoneNumber").val());
                var emailId = $("#txtEmail").val();
                var password = $("#txtPassword").val();
                var gender = $("#ddlGenderReg").val();
                var otherGender = $("#txtOtherGenderReg").val();

                var confirmPassword = $("#txtConfPassword").val();
                if (!firstName) {
                    message += "Please fill the First Name </br>";
                }
                if (!lastName) {
                    message += "Please fill the  Last Name </br>";
                }
                if (!gender || gender == "0") {
                    msg += "Please Select The Gender </br>";
                }
                else if (gender == "3") {
                    if (!otherGender) {
                        msg += "Please Fill The Other Gender </br>";
                    }
                }

                if (!phoneNumber) {
                    message += "Please fill Mobile Number </br>";
                }
                else {
                    if (phoneNumber.length < 10) {
                        message += "Please enter 10 digit mobile number </br>";
                    }
                }
                if (!emailId) {
                    message += "Please fill the Email </br>";
                } else {
                    if (!validateEmail($("#txtEmail").val())) {
                        message += "Please fill Valid Email </br>";
                    }
                }

                if (!password) {
                    message += "Please fill the Password </br>";
                } else {
                    if (password.length < 8) {
                        message += "The Password should have a minimum of 8 characters.</br>";
                    }
                    if (password != confirmPassword) {
                        message += "Password and Confirm Password must be the same</br>";
                    }
                }
                if (message != "") {
                    $.alert({
                        title: "",
                        content: message,
                        type: 'red'
                    });
                    return;
                }
            } else {

            }
            savepudateOnlineProspect();
            SaveUpdateStep(4);
            //tenantOnlineID = $("#hdnOPId").val();
            //getTenantOnlineList(tenantOnlineID);

            $("#subMenu").addClass("hidden");
            $("#as4").removeAttr("onclick");
            $("#as4").attr("onclick", "goToStep(5,5,0)");

            $("#li1").addClass("active");
            $("#li2").addClass("active");
            $("#li3").addClass("active");
            $("#li4").addClass("active");
            $("#li5").removeClass("active");
            $("#li6").removeClass("active");
            $("#li7").removeClass("active");

            $("#step2").addClass("hidden");
            $("#step1").addClass("hidden");
            $("#step4").removeClass("hidden");
            $("#step3").addClass("hidden");
            $("#step5").addClass("hidden");
            $("#step6").addClass("hidden");
            $("#step7").addClass("hidden");
            $("#step8").addClass("hidden");
            $("#step9").addClass("hidden");
            $("#step10").addClass("hidden");
            $("#step11").addClass("hidden");
            $("#step12").addClass("hidden");
            $("#step13").addClass("hidden");
            $("#step14").addClass("hidden");
            $("#step15").addClass("hidden");
            $("#step16").addClass("hidden");
            $("#step17").addClass("hidden");

        }
    }
    if (stepid == "5") {
        if (parseInt($("#hdnStepCompleted").val()) < 4) {
            msg = getStepCompletedMsg(parseInt($("#hdnStepCompleted").val()) + 1, 5);
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
        if (id == "5") {
            //getStaticApplicantValues();
            $("#subMenu").addClass("hidden");
            $("#as5").removeAttr("onclick");
            $("#as5").attr("onclick", "goToStep(6,6,0)");
            SaveQuote(5);

            $("#getting-startedTimeRemainingClock").removeClass("hidden");
            $("#li1").addClass("active");
            $("#li2").addClass("active");
            $("#li3").addClass("active");
            $("#li4").addClass("active");
            $("#li5").addClass("active");
            $("#li6").removeClass("active");
            $("#li7").removeClass("active");

            $("#step2").addClass("hidden");
            $("#step1").addClass("hidden");
            $("#step4").addClass("hidden");
            $("#step3").addClass("hidden");
            $("#step5").removeClass("hidden");
            $("#step6").addClass("hidden");
            $("#step7").addClass("hidden");
            $("#step8").addClass("hidden");
            $("#step9").addClass("hidden");
            $("#step10").addClass("hidden");
            $("#step11").addClass("hidden");
            $("#step12").addClass("hidden");
            $("#step13").addClass("hidden");
            $("#step14").addClass("hidden");
            $("#step15").addClass("hidden");
            $("#step16").addClass("hidden");
            $("#step17").addClass("hidden");
            if ($("#hdnOPId").val() != '0') {
                getStaticApplicantValues();
            }
        }
    }
    if (stepid == "6") {
        getApplicantListsPrimary();
        if (parseInt($("#hdnStepCompleted").val()) < 5) {
            msg = getStepCompletedMsg(parseInt($("#hdnStepCompleted").val()) + 1, 6);
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
        if (id == "6") {
            $("#subMenu").addClass("hidden");
            SaveQuote(6);
            $('#lblRFPAdditionalParking').text($('#lblMonthly_AditionalParking').text());
            $('#lblRFPStorageUnit').text($('#lblMonthly_Storage').text());
            $('#lblRFPPetRent').text($('#lblMonthly_PetRent').text());
            //$("#lblRFPTotalMonthlyPayment").text(formatMoney((parseFloat(unformatText($("#lblRFPMonthlyCharges").text()))) + (parseFloat($("#lblRFPAdditionalParking").text())) + (parseFloat($("#lblRFPStorageUnit").text())) + (parseFloat($("#lblRFPPetRent").text())) + (parseFloat($("#lblRFPTrashRecycling").text())) + (parseFloat($("#lblRFPPestControl").text())) + (parseFloat($("#lblRFPConvergentbillingfee").text()))));
            $("#lblRFPTotalMonthlyPayment").text(formatMoney(parseFloat(unformatText($("#lblRFPMonthlyCharges").text(), 10)) + (parseFloat($("#lblRFPAdditionalParking").text().replace('$', ''))) + (parseFloat($("#lblRFPStorageUnit").text().replace('$', ''))) + (parseFloat($("#lblRFPPetRent").text().replace('$', ''))) + (parseFloat($("#lblRFPTrashRecycling").text().replace('$', ''))) + (parseFloat($("#lblRFPPestControl").text().replace('$', ''))) + (parseFloat($("#lblRFPConvergentbillingfee").text().replace('$', '')))));

            $("#li1").addClass("active");
            $("#li2").addClass("active");
            $("#li3").addClass("active");
            $("#li4").addClass("active");
            $("#li5").addClass("active");
            $("#li6").addClass("active");
            $("#li7").removeClass("active");

            $("#step2").addClass("hidden");
            $("#step1").addClass("hidden");
            $("#step4").addClass("hidden");
            $("#step3").addClass("hidden");
            $("#step5").addClass("hidden");
            $("#step6").removeClass("hidden");
            $("#step7").addClass("hidden");
            $("#step8").addClass("hidden");
            $("#step9").addClass("hidden");
            $("#step10").addClass("hidden");
            $("#step11").addClass("hidden");
            $("#step12").addClass("hidden");
            $("#step13").addClass("hidden");
            $("#step14").addClass("hidden");
            $("#step15").addClass("hidden");
            $("#step16").addClass("hidden");
            $("#step17").addClass("hidden");
            //getStaticApplicantValues();

        }
    }
    if (stepid == "7") {
        if (parseInt($("#hdnStepCompleted").val()) < 6) {
            msg = getStepCompletedMsg(parseInt($("#hdnStepCompleted").val()) + 1, 7);
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
        if (id == "7") {
            $("#popApplicantContinue").modal("hide");
            $("#subMenu").removeClass("hidden");
            SaveCheckPolicyApplicant(7);
            $("#as6").removeAttr("onclick");
            $("#as6").attr("onclick", "goToStep(7,7,0)");
            $("#step2").addClass("hidden");
            $("#step1").addClass("hidden");
            $("#step4").addClass("hidden");
            $("#step3").addClass("hidden");
            $("#step5").addClass("hidden");
            $("#step6").addClass("hidden");
            $("#step7").removeClass("hidden");
            $("#step8").addClass("hidden");
            $("#step9").addClass("hidden");
            $("#step10").addClass("hidden");
            $("#step11").addClass("hidden");
            $("#step12").addClass("hidden");
            $("#step13").addClass("hidden");
            $("#step14").addClass("hidden");
            $("#step15").addClass("hidden");
            $("#step16").addClass("hidden");
            $("#step17").addClass("hidden");

            $("#li1").addClass("active");
            $("#li2").addClass("active");
            $("#li3").addClass("active");
            $("#li4").addClass("active");
            $("#li5").addClass("active");
            $("#li6").addClass("active");
            $("#li7").addClass("active");
            $("#li8").removeClass("active");
            $("#li9").removeClass("active");
            $("#li10").removeClass("active");
            $("#li11").removeClass("active");
            $("#li12").removeClass("active");
            $("#li13").removeClass("active");
            $("#li14").removeClass("active");
            $("#li15").removeClass("active");
            $("#li16").removeClass("active");
            $("#li17").removeClass("active");
            //getStaticApplicantValues();
        }
    }
    if (stepid == "8") {
        if (parseInt($("#hdnStepCompleted").val()) < 7) {
            msg = getStepCompletedMsg(parseInt($("#hdnStepCompleted").val()) + 1, 8);
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
        if (id == "8") {
            SaveUpdateStep(8);
            $('#lblRFPAdditionalParking').text($('#lblMonthly_AditionalParking').text());
            $('#lblRFPStorageUnit').text($('#lblMonthly_Storage').text());
            $('#lblRFPPetRent').text($('#lblMonthly_PetRent').text());
            //$("#lblRFPTotalMonthlyPayment").text(formatMoney(parseFloat((parseFloat(unformatText($("#lblRFPMonthlyCharges").text()))) + (parseFloat($("#lblRFPAdditionalParking").text())) + (parseFloat($("#lblRFPStorageUnit").text())) + (parseFloat($("#lblRFPPetRent").text())) + (parseFloat($("#lblRFPTrashRecycling").text())) + (parseFloat($("#lblRFPPestControl").text())) + (parseFloat($("#lblRFPConvergentbillingfee").text()))).toFixed(2)));
            $("#lblRFPTotalMonthlyPayment").text(formatMoney(parseFloat(unformatText($("#lblRFPMonthlyCharges").text(), 10)) + (parseFloat($("#lblRFPAdditionalParking").text().replace('$', ''))) + (parseFloat($("#lblRFPStorageUnit").text().replace('$', ''))) + (parseFloat($("#lblRFPPetRent").text().replace('$', ''))) + (parseFloat($("#lblRFPTrashRecycling").text().replace('$', ''))) + (parseFloat($("#lblRFPPestControl").text().replace('$', ''))) + (parseFloat($("#lblRFPConvergentbillingfee").text().replace('$', '')))));

            $("#step2").addClass("hidden");
            $("#step1").addClass("hidden");
            $("#step4").addClass("hidden");
            $("#step3").addClass("hidden");
            $("#step5").addClass("hidden");
            $("#step6").addClass("hidden");
            $("#step7").addClass("hidden");
            $("#step8").removeClass("hidden");
            $("#step9").addClass("hidden");
            $("#step10").addClass("hidden");
            $("#step11").addClass("hidden");
            $("#step12").addClass("hidden");
            $("#step13").addClass("hidden");
            $("#step14").addClass("hidden");
            $("#step15").addClass("hidden");
            $("#step16").addClass("hidden");
            $("#step17").addClass("hidden");

            $("#li1").addClass("active");
            $("#li2").addClass("active");
            $("#li3").addClass("active");
            $("#li4").addClass("active");
            $("#li5").addClass("active");
            $("#li6").addClass("active");
            $("#li7").removeClass("active");
            $("#li8").addClass("active");
            $("#li9").removeClass("active");
            $("#li10").removeClass("active");
            $("#li11").removeClass("active");
            $("#li12").removeClass("active");
            $("#li13").removeClass("active");
            $("#li14").removeClass("active");
            $("#li15").removeClass("active");
            $("#li16").removeClass("active");
            $("#li17").removeClass("active");
            if ($("#hdnOPId").val() != '0') {
                getStaticApplicantValues();
            }

        }
    }
    if (stepid == "9") {
        if (parseInt($("#hdnStepCompleted").val()) < 8) {
            msg = getStepCompletedMsg(parseInt($("#hdnStepCompleted").val()) + 1, 9);
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
        $("#popResponsibilityContinue").modal("hide");
        msg = "";

        if (id == "9") {
            // var msg = '';
            var grandPercentage = localStorage.getItem("percentage");
            var grandPercentageMo = localStorage.getItem("percentageMo");
            var grandPercentageAF = localStorage.getItem("percentageAF");

            if (grandPercentage != 100 || grandPercentageMo != 100 || grandPercentageAF != 100) {
                msg = "For Move In Charges and Monthly Payment and Administration Fee the total must equal 100% in order to continue.";

                $.alert({
                    title: "",
                    content: msg,
                    type: 'red'
                });
                return;
            }
            else {
                $("#popApplicantSummary").modal("hide");
                saveupdatePaymentResponsibility(9);  //Amit's work
                $("#step2").addClass("hidden");
                $("#step1").addClass("hidden");
                $("#step4").addClass("hidden");
                $("#step3").addClass("hidden");
                $("#step5").addClass("hidden");
                $("#step6").addClass("hidden");
                $("#step7").addClass("hidden");
                $("#step8").addClass("hidden");
                $("#step9").removeClass("hidden");
                $("#step10").addClass("hidden");
                $("#step11").addClass("hidden");
                $("#step12").addClass("hidden");
                $("#step13").addClass("hidden");
                $("#step14").addClass("hidden");
                $("#step15").addClass("hidden");
                $("#step16").addClass("hidden");
                $("#step17").addClass("hidden");


                $("#li1").addClass("active");
                $("#li2").addClass("active");
                $("#li3").addClass("active");
                $("#li4").addClass("active");
                $("#li5").addClass("active");
                $("#li6").addClass("active");
                $("#li7").removeClass("active");
                $("#li8").removeClass("active");
                $("#li9").addClass("active");
                $("#li10").removeClass("active");
                $("#li11").removeClass("active");
                $("#li12").removeClass("active");
                $("#li13").removeClass("active");
                $("#li14").removeClass("active");
                $("#li15").removeClass("active");
                $("#li16").removeClass("active");
                $("#li17").removeClass("active");
            }


        }
    }
    if (stepid == "10") {
        if (parseInt($("#hdnStepCompleted").val()) < 9) {
            msg = getStepCompletedMsg(parseInt($("#hdnStepCompleted").val()) + 1, 10);
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
        if (id == "10") {

            getApplicantHistoryList();
            msg = '';

            if (!$("#txtFirstNamePersonal").val()) {
                msg += "Please Fill The First Name </br>";
            }
            if (!$("#txtLastNamePersonal").val()) {
                msg += "Please Fill The  Last Name </br>";
            }
            if (!$("#txtDateOfBirth").val()) {
                msg += "Please Fill The  Date Of Birth </br>";
            }


            if (!$("#txtEmailNew").val()) {
                msg += "Please Fill The Email </br>";
            }
            else {
                if (!validateEmail($("#txtEmailNew").val())) {
                    msg += "Please Fill Valid Email </br>";
                }
            }
            if (!unformatText($("#txtMobileNumber").val())) {
                msg += "Please Fill The Mobile Number </br>";
            }
            else {
                if ((unformatText($("#txtMobileNumber").val())).length < 10) {
                    msg += "Please enter 10 digit mobile number </br>";
                }
            }
            if ($("#ddlIsInter").val() == "1") {
                if (!$("#txtPassportNum").val()) {
                    msg += "Please Fill The Passport number </br>";
                }
                if (!$("#txtCOI").val()) {
                    msg += "Please Fill The Country Of Issuance </br>";
                }
                if (!$("#txtDateOfIssuance").val()) {
                    msg += "Please Fill The Date of Issuance </br>";
                }
                if (!$("#txtDateOfExpiration").val()) {
                    msg += "Please Fill The Date of Expiration </br>";
                }
                if ($("#hndHasPassportFile").val() == "0") {
                    if (document.getElementById('fileUploadPassport').files.length == '0') {
                        msg += "Please Upload The Passport </br>";
                    }
                }
                if ($("#ddlCountryOfOrigin").val() == '0') {
                    msg += "Please select the country of origin</br>";
                }
            } else {
                if (!$("#txtSSNNumber").val()) {
                    msg += "Please Fill The SSN number </br>";
                }
                else {
                    if ($("#txtSSNNumber").val().length < 9) {
                        msg += "SSN number must be 9 digit </br>";
                    }
                }
                if ($("#ddlDocumentTypePersonal").val() == '0') {
                    msg += "Please select ID Type</br>";
                }

                if ($("#ddlStatePersonal").val() == '0') {
                    msg += "Please select ID Issued State</br>";
                }
            }

            if (!$("#txtIDNumber").val()) {
                msg += "Please Fill The ID Number </br>";
            }
            else {
                if ($("#txtIDNumber").val().length < 5) {
                    msg += "ID Number should be greater then 4 digit </br>";
                }
            }

            if ($("#hndHasIdentityFile").val() == "0") {
                if (document.getElementById('fileUploadIdentity').files.length == '0') {
                    var idType = document.getElementById('lblUploadIdentity').innerHTML;
                    msg += "Please Upload The " + (idType == "Select" ? "ID Document" : idType) + " </br>";
                }
            }
            if ($("#ddlEverBeenEvicted").val() == "2") {
                if (!$("#txtEverBeenEvictedDetails").val()) {
                    msg += "Please Fill The Evicted Details</br>";
                }
            }
            if ($("#ddlEverBeenConvicted").val() == "2") {
                if (!$("#txtEverBeenConvictedDetails").val()) {
                    msg += "Please Fill The convicted of a felony Details</br>";
                }
            }
            if ($("#ddlAnyCriminalCharges").val() == "2") {
                if (!$("#txtAnyCriminalChargesDetails").val()) {
                    msg += "Please Fill The criminal charges pending, awaiting disposition, or looming in any way Details</br>";
                }
            }
            if ($("#ddlReferredByAnotherResident").val() == "2") {
                if (!$("#txtReferredByAnotherResidentName").val()) {
                    msg += "Please Fill The Provide Name</br>";
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
            else {
                $("#popApplicantSummary").modal("hide");
                $("#summName").text($("#txtFirstNamePersonal").val() + " " + ((!$("#txtMiddleInitial").val()) ? "" : $("#txtMiddleInitial").val() + " ") + $("#txtLastNamePersonal").val());
                $("#summNamep").text($("#txtFirstNamePersonal").val() + " " + ((!$("#txtMiddleInitial").val()) ? "" : $("#txtMiddleInitial").val() + " ") + $("#txtLastNamePersonal").val());
                $("#mainApplName").text($("#txtFirstNamePersonal").val() + " " + ((!$("#txtMiddleInitial").val()) ? "" : $("#txtMiddleInitial").val() + " ") + $("#txtLastNamePersonal").val());



                $("#summDob").text($("#txtDateOfBirth").val());
                $("#summSSN").text($("#txtSSNNumber").val());
                $("#summPhone").text($("#txtMobileNumber").val());
                var isUSCitizen = $("#ddlIsInter option:selected").val();
                var countryOrigin = $("#ddlCountryOfOrigin option:selected").text();
                $("#summCitizen").text(isUSCitizen == 0 ? "Yes" : "No");
                if (isUSCitizen == 1) {
                    $("#sumCOrigin_tr").removeClass("hidden");
                    $("#summCountryofOrigin").text(countryOrigin);
                }
                else {
                    $("#sumCOrigin_tr").addClass("hidden");
                    $("#summCountryofOrigin").text("");
                }

                if ($("#ddlGender").val() == 1) {
                    $("#summGender").text("Male");
                } else if ($("#ddlGender").val() == 2) {
                    $("#summGender").text("Female");
                } else {
                    $("#summGender").text($("#txtOtherGender").val());
                }
                $("#summDriverL").text($("#txtIDNumber").val());

                saveupdateTenantOnline(10);
                $("#step2").addClass("hidden");
                $("#step1").addClass("hidden");
                $("#step4").addClass("hidden");
                $("#step3").addClass("hidden");
                $("#step5").addClass("hidden");
                $("#step6").addClass("hidden");
                $("#step7").addClass("hidden");
                $("#step8").addClass("hidden");
                $("#step9").addClass("hidden");
                $("#step10").removeClass("hidden");
                $("#step11").addClass("hidden");
                $("#step12").addClass("hidden");
                $("#step13").addClass("hidden");
                $("#step14").addClass("hidden");
                $("#step15").addClass("hidden");
                $("#step16").addClass("hidden");
                $("#step17").addClass("hidden");

                $("#li1").addClass("active");
                $("#li2").addClass("active");
                $("#li3").addClass("active");
                $("#li4").addClass("active");
                $("#li5").addClass("active");
                $("#li6").addClass("active");
                $("#li7").removeClass("active");
                $("#li8").removeClass("active");
                $("#li9").removeClass("active");
                $("#li10").addClass("active");
                $("#li11").removeClass("active");
                $("#li12").removeClass("active");
                $("#li13").removeClass("active");
                $("#li14").removeClass("active");
                $("#li15").removeClass("active");
                $("#li16").removeClass("active");
                $("#li17").removeClass("active");
            }
        }
    }
    if (stepid == "11") {
        if (parseInt($("#hdnStepCompleted").val()) < 10) {
            msg = getStepCompletedMsg(parseInt($("#hdnStepCompleted").val()) + 1, 11);
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
        if (id == "11") {
            $("#divLoader").show();
            $("#popApplicantSummary").modal("hide");
            msg = '';

            if ($("#ddlRentOwn").val() == '0') {
                msg += 'Please Select Rent or Own</br>';
            }
            if (!$("#txtMoveInDateFrom").val()) {
                msg += "Please Fill Move In Date </br>";
            }
            if ($("#ddlRentOwn").val() == '1') {
                if (!$("#txtApartmentCommunity").val()) {
                    msg += "Please Fill Apartment Community </br>";
                }
                if (!$("#txtManagementCompany").val()) {
                    msg += "Please Fill Management Company </br>";
                }
                if (!unformatText($("#txtManagementCompanyPhone").val())) {
                    msg += "Please Fill Management Company Phone</br>";
                }
                else {
                    if (unformatText($("#txtManagementCompanyPhone").val()).length < 10) {
                        msg += "Please enter 10 digit management company phone number </br>";
                    }
                }
            }
            if (msg != "") {
                $.alert({
                    title: "",
                    content: msg,
                    type: 'red'
                });
                $("#divLoader").hide();
                return;
            }
            else {
                var todaysDate = new Date();
                var twoDigitMonth = ((todaysDate.getMonth().length + 1) === 1) ? (todaysDate.getMonth() + 1) : '0' + (todaysDate.getMonth() + 1);
                var twoDigitDay = ((todaysDate.getDate().length) === 1) ? (todaysDate.getDate()) : '0' + (todaysDate.getDate());
                todaysDate = twoDigitMonth + "/" + todaysDate.getDate() + "/" + todaysDate.getFullYear();
                var tenantId = $("#hdnOPId").val();
                var fromDateAppHis = $('#txtMoveInDateFrom').val();
                var toDateAppHis = todaysDate;
                model = {
                    TenantId: tenantId,
                    FromDateAppHis: fromDateAppHis,
                    ToDateAppHis: toDateAppHis
                };
                $.ajax({
                    url: '/ApplyNow/GetMonthsFromApplicantHistory',
                    type: "post",
                    contentType: "application/json utf-8",
                    data: JSON.stringify(model),
                    dataType: "JSON",
                    success: function (response) {
                        $("#hndHistory").val(response.model.TotalMonthsApplicantHistory);
                        if ($("#hndHistory").val() < 36) {
                            alert("Please provide at least 3 years of residence history");
                        } else {
                            $("#summCuAdd").text($("#txtAddress1").val() + ", " + ((!$("#txtAddress2").val()) ? "" : $("#txtAddress2").val()) + ", " + $("#ddlCityHome").val() + ", " + $("#ddlStateHome option:selected").text() + " - " + $("#txtZip").val() + ", " + $("#txtCountry option:selected").text());
                            saveupdateTenantOnline(11);

                            $("#step2").addClass("hidden");
                            $("#step1").addClass("hidden");
                            $("#step4").addClass("hidden");
                            $("#step3").addClass("hidden");
                            $("#step5").addClass("hidden");
                            $("#step6").addClass("hidden");
                            $("#step7").addClass("hidden");
                            $("#step8").addClass("hidden");
                            $("#step9").addClass("hidden");
                            $("#step10").addClass("hidden");
                            $("#step11").removeClass("hidden");
                            $("#step12").addClass("hidden");
                            $("#step13").addClass("hidden");
                            $("#step14").addClass("hidden");
                            $("#step15").addClass("hidden");
                            $("#step16").addClass("hidden");
                            $("#step17").addClass("hidden");

                            $("#li1").addClass("active");
                            $("#li2").addClass("active");
                            $("#li3").addClass("active");
                            $("#li4").addClass("active");
                            $("#li5").addClass("active");
                            $("#li6").addClass("active");
                            $("#li7").removeClass("active");
                            $("#li8").removeClass("active");
                            $("#li9").removeClass("active");
                            $("#li10").removeClass("active");
                            $("#li11").addClass("active");
                            $("#li12").removeClass("active");
                            $("#li13").removeClass("active");
                            $("#li14").removeClass("active");
                            $("#li15").removeClass("active");
                            $("#li16").removeClass("active");
                            $("#li17").removeClass("active");
                        }
                    }
                });
            }
        }
    }
    if (stepid == "12") {
        if (parseInt($("#hdnStepCompleted").val()) < 11) {
            msg = getStepCompletedMsg(parseInt($("#hdnStepCompleted").val()) + 1, 12);
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
        if (id == "12") {
            msg = '';
            if (!$("#txtEmployerName").val()) {
                msg += "Please Fill The Employer Name </br>";
            }
            if (!$("#txtStartDate").val()) {
                msg += "Please Fill The Start Date </br>";
            }
            if (!$("#txtAnnualIncome").val()) {
                msg += "Please Fill The Annual Income </br>";
            }
            if ($("#txtAnnualIncome").val() == '0.00') {
                msg += "Please Fill The Annual Income </br>";
            }
            if (!$("#txtSupervisiorName").val()) {
                msg += "Please Fill The Supervisior Name </br>";
            }

            if (!$("#txtSupervisiorPhone").val()) {
                msg += "Please Fill The Supervisior Phone </br>";
            } else if (unformatText($("#txtSupervisiorPhone").val()).length < 10) {
                msg += "Please Fill The 10 digit Supervisior Phone </br>";
            }

            if ($("#hndHasTaxReturnFile").val() == "0") {
                if (document.getElementById('fileUploadTaxReturn').files.length == '0') {
                    msg += "Please Upload last 3 paystubs or if self-employed last 2 year's Federal Tax Returns or 3 consecutive bank statements</br>";
                }
            }
            nofup = 0;
            if ($("#rbtnPaystub").is(":checked")) {
                if ($("#hndForPaystub").val() == '1') {
                    if (paystubFileArray.length < 3) {
                        msg += "Please Upload Paystub " + parseInt(3 - paystubFileArray.length) + " file</br>";
                    }
                }
                if (($("#hndHasTaxReturnFile3").val() == "0") && ($("#hndHasTaxReturnFile4").val() == "0") && ($("#hndHasTaxReturnFile5").val() == "0")) {

                    if (document.getElementById('fileUploadPaystub').files.length == '0') {
                        msg += "Please Upload Paystub </br>";
                    }
                }
                nofup += 1;
            }
            if ($("#rbtnFedralTax").is(":checked")) {
                if ($("#hndForFedral").val() == '1') {
                    if (fedralFileArray.length < 2) {
                        msg += "Please Upload Fedral " + parseInt(2 - fedralFileArray.length) + " file</br>";
                    }
                }
                if (($("#hndHasTaxReturnFile1").val() == "0") && ($("#hndHasTaxReturnFile2").val() == "0")) {
                    if (document.getElementById('fileUploadFedral').files.length == '0') {
                        msg += "Please Upload Fedral </br>";
                    }
                }
                nofup += 1;
            }
            if ($("#rbtnBankStatement").is(":checked")) {
                if ($("#hndForBankStatement").val() == '1') {
                    if (bankstatementFileArray.length < 3) {
                        msg += "Please Upload Bankstatement " + parseInt(3 - bankstatementFileArray.length) + " file</br>";
                    }
                }
                if (($("#hndHasBankStateFile1").val() == "0") && ($("#hndHasBankStateFile2").val() == "0") && ($("#hndHasBankStateFile3").val() == "0")) {
                    if (document.getElementById('fileUploadBankStatement').files.length == '0') {
                        msg += "Please Upload Bankstatement </br>";
                    }
                }
                nofup += 1;
            }
            if ($("#txtCountryOffice").val() == '0') {
                msg += "Please Select The Country </br>";
            }
            if (!$("#txtofficeAddress1").val()) {
                msg += "Please Fill The Address Line 1 </br>";
            }
            if ($("#ddlStateEmployee").val() == '0') {
                msg += "Please Select The State </br>";
            }
            if (!$("#ddlCityEmployee").val()) {
                msg += "Please Fill The City </br>";
            }
            if (!$("#txtZipOffice").val()) {
                msg += "Please Fill The Zip </br>";
            }

            if (nofup < 2) {
                msg += "Please Select any  two of the three options (tax return, paystubs, and bank statements)";
            }

            if (msg != "") {
                $.alert({
                    title: "",
                    content: msg,
                    type: 'red'
                });
                return;
            }
            else {
                todaysDate = new Date();
                twoDigitMonth = ((todaysDate.getMonth().length + 1) === 1) ? (todaysDate.getMonth() + 1) : '0' + (todaysDate.getMonth() + 1);
                twoDigitDay = ((todaysDate.getDate().length) === 1) ? (todaysDate.getDate()) : '0' + (todaysDate.getDate());
                todaysDate = twoDigitMonth + "/" + todaysDate.getDate() + "/" + todaysDate.getFullYear();
                tenantId = $("#hdnOPId").val();
                fromDateEmpHis = $('#txtStartDate').val();
                var toDateEmpHis = todaysDate;
                model = {
                    TenantId: tenantId,
                    EmpStartDate: fromDateEmpHis,
                    EmpTerminationDate: toDateEmpHis
                };
                $.ajax({
                    url: '/ApplyNow/GetMonthsFromEmployerHistory',
                    type: "post",
                    contentType: "application/json utf-8",
                    data: JSON.stringify(model),
                    dataType: "JSON",
                    success: function (response) {
                        $("#hdnEmployerHistory").val(response.model.TotalMonthsEmployerHistory);
                        if ($("#hdnEmployerHistory").val() < 36) {
                            alert("Please provide at least 3 years of employment history");
                        } else {
                            $("#summEmployer").text($("#txtEmployerName").val() + ", " + $("#txtofficeAddress1").val() + ", " + ((!$("#txtofficeAddress2").val()) ? "" : ", " + $("#txtofficeAddress2").val()) + $("#ddlCityEmployee").val() + ", " + $("#ddlStateEmployee option:selected").text() + " - " + $("#txtZipOffice").val() + ", " + $("#txtCountryOffice option:selected").text());
                            $("#summEstartdate").text($("#txtStartDate").val());
                            $("#summSalary").text(formatMoney($("#txtAnnualIncome").val()));
                            saveupdateTenantOnline(12);
                            getTenantPetPlaceData();
                            $("#step2").addClass("hidden");
                            $("#step1").addClass("hidden");
                            $("#step4").addClass("hidden");
                            $("#step3").addClass("hidden");
                            $("#step5").addClass("hidden");
                            $("#step6").addClass("hidden");
                            $("#step7").addClass("hidden");
                            $("#step8").addClass("hidden");
                            $("#step9").addClass("hidden");
                            $("#step10").addClass("hidden");
                            $("#step11").addClass("hidden");
                            $("#step12").removeClass("hidden");
                            $("#step13").addClass("hidden");
                            $("#step14").addClass("hidden");
                            $("#step15").addClass("hidden");
                            $("#step16").addClass("hidden");

                            $("#li1").addClass("active");
                            $("#li2").addClass("active");
                            $("#li3").addClass("active");
                            $("#li4").addClass("active");
                            $("#li5").addClass("active");
                            $("#li6").addClass("active");
                            $("#li7").removeClass("active");
                            $("#li8").removeClass("active");
                            $("#li9").removeClass("active");
                            $("#li10").removeClass("active");
                            $("#li11").removeClass("active");
                            $("#li12").addClass("active");
                            $("#li13").removeClass("active");
                            $("#li14").removeClass("active");
                            $("#li15").removeClass("active");
                            $("#li16").removeClass("active");
                            $("#li17").removeClass("active");
                        }
                    }
                });
            }

        }
    }
    if (stepid == "13") {
        var countVehicle = $("#tblVehicle tbody tr").length;
        //if ($("#HndAddParkingCount").val() == 0) {
        //    if (countVehicle > 0) {
        //        $("#divDontHaveVeh").addClass("hidden");
        //        $("#btnAddVehicle").prop("disabled", "").removeAttr("style");
        //    }
        //    else {
        //        $("#divDontHaveVeh").removeClass("hidden");
        //        $("#btnAddVehicle").prop("disabled", "disabled").css("background-color", "#b4ada5");
        //    }
        //}
        //else {
        //    $("#divDontHaveVeh").addClass("hidden");
        //    $("#btnAddVehicle").prop("disabled", "").removeAttr("style");

        //    if (parseInt($("#hdnStepCompleted").val()) < 12) {
        //        msg = getStepCompletedMsg(parseInt($("#hdnStepCompleted").val()) + 1, 13);
        //        $.alert({
        //            title: "",
        //            content: msg,
        //            type: 'red'
        //        });
        //        return;
        //    }
        //}

        if (id == "13") {
            msg = '';
            if (!$("#txtRelationship").val()) {
                msg += "Please Fill The Relationship </br>";
            }
            if (!$("#txtEmergencyFirstName").val()) {
                msg += "Please Fill The First Name </br>";
            }
            if (!$("#txtEmergencyLastName").val()) {
                msg += "Please Fill The Last Name </br>";
            }
            if (!unformatText($("#txtEmergencyMobile").val())) {
                msg += "Please Fill The Mobile Number </br>";
            }
            else {
                if (unformatText($("#txtEmergencyMobile").val()).length < 10) {
                    msg += "Please enter 10 digit emergency mobile number </br>";
                }
            }

            if (!$("#txtEmergencyEmail").val()) {
                msg += "Please Fill The Email </br>";
            }
            else {
                if (!validateEmail($("#txtEmergencyEmail").val())) {
                    msg += "Please Fill Valid Email </br>";
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
            else {
                SaveUpdateStep(13);
                saveupdateTenantOnline(13);
                $("#step2").addClass("hidden");
                $("#step1").addClass("hidden");
                $("#step4").addClass("hidden");
                $("#step3").addClass("hidden");
                $("#step5").addClass("hidden");
                $("#step6").addClass("hidden");
                $("#step7").addClass("hidden");
                $("#step8").addClass("hidden");
                $("#step9").addClass("hidden");
                $("#step10").addClass("hidden");
                $("#step11").addClass("hidden");
                $("#step12").addClass("hidden");
                $("#step13").removeClass("hidden");
                $("#step14").addClass("hidden");
                $("#step15").addClass("hidden");
                $("#step16").addClass("hidden");

                $("#li1").addClass("active");
                $("#li2").addClass("active");
                $("#li3").addClass("active");
                $("#li4").addClass("active");
                $("#li5").addClass("active");
                $("#li6").addClass("active");
                $("#li7").removeClass("active");
                $("#li8").removeClass("active");
                $("#li9").removeClass("active");
                $("#li10").removeClass("active");
                $("#li11").removeClass("active");
                $("#li12").removeClass("active");
                $("#li13").addClass("active");
                $("#li14").removeClass("active");
                $("#li15").removeClass("active");
                $("#li16").removeClass("active");
                $("#li17").removeClass("active");
            }
        }
    }
    if (stepid == "14") {
        if (parseInt($("#hdnStepCompleted").val()) < 13) {
            msg = getStepCompletedMsg(parseInt($("#hdnStepCompleted").val()) + 1, 14);
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
        var petAdded = $("#tblPetApplyNow tbody tr").length;
        $("#btnAddPet").prop("disabled", false);
        if (id == "14") {
            SaveUpdateStep(14);
            getTenantPetPlaceData();
            $("#step2").addClass("hidden");
            $("#step1").addClass("hidden");
            $("#step4").addClass("hidden");
            $("#step3").addClass("hidden");
            $("#step5").addClass("hidden");
            $("#step6").addClass("hidden");
            $("#step7").addClass("hidden");
            $("#step8").addClass("hidden");
            $("#step9").addClass("hidden");
            $("#step10").addClass("hidden");
            $("#step11").addClass("hidden");
            $("#step12").addClass("hidden");
            $("#step13").addClass("hidden");
            $("#step14").removeClass("hidden");
            $("#step15").addClass("hidden");
            $("#step16").addClass("hidden");
            $("#step17").addClass("hidden");

            $("#li1").addClass("active");
            $("#li2").addClass("active");
            $("#li3").addClass("active");
            $("#li4").addClass("active");
            $("#li5").addClass("active");
            $("#li6").addClass("active");
            $("#li7").removeClass("active");
            $("#li8").removeClass("active");
            $("#li9").removeClass("active");
            $("#li10").removeClass("active");
            $("#li11").removeClass("active");
            $("#li12").removeClass("active");
            $("#li13").removeClass("active");
            $("#li14").addClass("active");
            $("#li15").removeClass("active");
            $("#li16").removeClass("active");
            $("#li17").removeClass("active");
        }

    }
    if (stepid == "15") {
        $(".gotosummary").removeClass('hidden');
        if (parseInt($("#hdnStepCompleted").val()) < 14) {
            msg = getStepCompletedMsg(parseInt($("#hdnStepCompleted").val()) + 1, 15);
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
        if (id == "15") {
            $(".gotosummary").removeClass('hidden');
            $("#subMenu").removeClass("hidden");
            SaveUpdateStep(15);
            tenantOnlineID = $("#hdnOPId").val();
            getFillSummary(tenantOnlineID);
            getPreviousAddressInfo(tenantOnlineID);
            getPreviousEmployementInfo(tenantOnlineID);

            $("#step2").addClass("hidden");
            $("#step1").addClass("hidden");
            $("#step4").addClass("hidden");
            $("#step3").addClass("hidden");
            $("#step5").addClass("hidden");
            $("#step6").addClass("hidden");
            $("#step7").addClass("hidden");
            $("#step8").addClass("hidden");
            $("#step9").addClass("hidden");
            $("#step10").addClass("hidden");
            $("#step11").addClass("hidden");
            $("#step12").addClass("hidden");
            $("#step13").addClass("hidden");
            $("#step14").addClass("hidden");
            $("#step15").removeClass("hidden");
            $("#step16").addClass("hidden");
            $("#step17").addClass("hidden");

            $("#li1").addClass("active");
            $("#li2").addClass("active");
            $("#li3").addClass("active");
            $("#li4").addClass("active");
            $("#li5").addClass("active");
            $("#li6").addClass("active");
            $("#li7").removeClass("active");
            $("#li8").removeClass("active");
            $("#li9").removeClass("active");
            $("#li10").removeClass("active");
            $("#li11").removeClass("active");
            $("#li12").removeClass("active");
            $("#li13").removeClass("active");
            $("#li14").removeClass("active");
            $("#li15").addClass("active");
            $("#li16").removeClass("active");
            $("#li17").removeClass("active");
        }
    }

    if (stepid == "16") {
        $(".gotosummary").removeClass('hidden');
        if (parseInt($("#hdnStepCompleted").val()) < 15) {
            msg = getStepCompletedMsg(parseInt($("#hdnStepCompleted").val()) + 1, 16);
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
        if (id == "16") {
            var msgmm = '';
            if (parseInt($("#hdnStepCompleted").val()) > 15) {
                var numOfPets = $("#hndPetPlaceCount").val();
                petAdded = $("#tblPetApplyNow tbody tr").length;

                msgmm = '';

            }
            var isSummarychecked = $("#chkAgreeSummarry").is(":checked") ? "1" : "0";
            if (isSummarychecked != "1") {
                msgmm = 'Please ACCEPT AGREEMENTS </br>';

            }
            if (msgmm != "") {
                $.alert({
                    title: "",
                    content: msgmm,
                    type: 'red'
                });
                goToStep(15, 15, 0);
                return;
            } else {
                SaveUpdateStep(16);
                $("#subMenu").removeClass("hidden");
                $("#step2").addClass("hidden");
                $("#step1").addClass("hidden");
                $("#step4").addClass("hidden");
                $("#step3").addClass("hidden");
                $("#step5").addClass("hidden");
                $("#step6").addClass("hidden");
                $("#step7").addClass("hidden");
                $("#step8").addClass("hidden");
                $("#step9").addClass("hidden");
                $("#step10").addClass("hidden");
                $("#step11").addClass("hidden");
                $("#step12").addClass("hidden");
                $("#step13").addClass("hidden");
                $("#step14").addClass("hidden");
                $("#step15").addClass("hidden");
                $("#step16").removeClass("hidden");
                $("#step17").addClass("hidden");

                $("#li1").addClass("active");
                $("#li2").addClass("active");
                $("#li3").addClass("active");
                $("#li4").addClass("active");
                $("#li5").addClass("active");
                $("#li6").addClass("active");
                $("#li7").removeClass("active");
                $("#li8").removeClass("active");
                $("#li9").removeClass("active");
                $("#li10").removeClass("active");
                $("#li11").removeClass("active");
                $("#li12").removeClass("active");
                $("#li13").removeClass("active");
                $("#li14").removeClass("active");
                $("#li15").removeClass("active");
                $("#li16").addClass("active");
                $("#li17").removeClass("active");
            }
        }
    }
    if (stepid == "17") {
        if (parseInt($("#hdnStepCompleted").val()) < 16) {
            msg = getStepCompletedMsg(parseInt($("#hdnStepCompleted").val()) + 1, 17);
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
        var msgm = '';
        if (parseInt($("#hdnStepCompleted").val()) > 15) {
            numOfPets = $("#hndPetPlaceCount").val();
            petAdded = $("#tblPetApplyNow tbody tr").length;

            msgm = '';

        }
        if (msgm != "") {
            $.alert({
                title: "",
                content: msgm,
                type: 'red'
            });
            goToStep(15, 15, 0);
            return;
        } else {
            if (id == "17") {
                SaveUpdateStep(17);
                $("#step2").addClass("hidden");
                $("#step1").addClass("hidden");
                $("#step4").addClass("hidden");
                $("#step3").addClass("hidden");
                $("#step5").addClass("hidden");
                $("#step6").addClass("hidden");
                $("#step7").addClass("hidden");
                $("#step8").addClass("hidden");
                $("#step9").addClass("hidden");
                $("#step10").addClass("hidden");
                $("#step11").addClass("hidden");
                $("#step12").addClass("hidden");
                $("#step13").addClass("hidden");
                $("#step14").addClass("hidden");
                $("#step15").addClass("hidden");
                $("#step16").addClass("hidden");
                $("#step17").removeClass("hidden");

                $("#li1").addClass("active");
                $("#li2").addClass("active");
                $("#li3").addClass("active");
                $("#li4").addClass("active");
                $("#li5").addClass("active");
                $("#li6").addClass("active");
                $("#li7").removeClass("active");
                $("#li8").removeClass("active");
                $("#li9").removeClass("active");
                $("#li10").removeClass("active");
                $("#li11").removeClass("active");
                $("#li12").removeClass("active");
                $("#li13").removeClass("active");
                $("#li14").removeClass("active");
                $("#li15").removeClass("active");
                $("#li16").removeClass("active");
                $("#li17").addClass("active");
            }
        }
    }
};
var getStepCompletedMsg = function (currentstep, clickstep) {
    var stepArray = [{ StepID: 2, StepName: "Select Unit" }, { StepID: 3, StepName: "Complete Registration" }, { StepID: 4, StepName: "Select Options" }, { StepID: 5, StepName: "Quotation" }, { StepID: 6, StepName: "Policies & Conditions" }, { StepID: 7, StepName: "Applicants" }, { StepID: 8, StepName: "Responsibility" }, { StepID: 9, StepName: "Personal Info" }, { StepID: 10, StepName: "Residence History" }, { StepID: 11, StepName: "Employment and Income" }, { StepID: 12, StepName: "Emergency Contacts" }, { StepID: 13, StepName: "Vehicle Info" }, { StepID: 14, StepName: "Pet Info" }, { StepID: 15, StepName: "Payment" }, { StepID: 16, StepName: "Lease" }];
    var clickstepname = "";
    var remainingstepname = "";

    $.each(stepArray, function (index, elementValue) {

        if (elementValue.StepID == clickstep) {
            clickstepname = elementValue.StepName;
        }

        if (elementValue.StepID >= currentstep && elementValue.StepID < clickstep) {
            remainingstepname += "<b>" + elementValue.StepName + "</b><br/>";
        }
    });
    var msg = "To view \"<b>" + clickstepname + "</b>\", you have to complete following step(s)<br/>" + remainingstepname;
    return msg;
};

var showCurrentStep = function (stepid, id) {
    if (stepid == 1) {
        $("#subMenu").addClass("hidden");
        $("#li1").addClass("active");
        $("#li2").removeClass("active");
        $("#li3").removeClass("active");
        $("#li4").removeClass("active");
        $("#li5").removeClass("active");
        $("#li6").removeClass("active");
        $("#li7").removeClass("active");

        $("#step1").removeClass("hidden");
        $("#step2").addClass("hidden");
        $("#step3").addClass("hidden");
        $("#step4").addClass("hidden");
        $("#step5").addClass("hidden");
        $("#step6").addClass("hidden");
        $("#step7").addClass("hidden");
        $("#step8").addClass("hidden");
        $("#step9").addClass("hidden");
        $("#step10").addClass("hidden");
        $("#step11").addClass("hidden");
        $("#step12").addClass("hidden");
        $("#step13").addClass("hidden");
        $("#step14").addClass("hidden");
        $("#step15").addClass("hidden");
        $("#step16").addClass("hidden");
        $("#step17").addClass("hidden");
        $("#subMenu").addClass("hidden");
    }
    if (stepid == "2") {

        $("#subMenu").addClass("hidden");
        $("#as2").removeAttr("onclick");
        $("#as2").attr("onclick", "goToStep(2,2,1)");
        $("#li1").addClass("active");
        $("#li2").addClass("active");

        $("#li3").removeClass("active");
        $("#li4").removeClass("active");
        $("#li5").removeClass("active");
        $("#li6").removeClass("active");
        $("#li7").removeClass("active");
        $("#step1").addClass("hidden");
        $("#step3").addClass("hidden");
        $("#step4").addClass("hidden");
        $("#step2").removeClass("hidden");
        $("#step5").addClass("hidden");
        $("#step6").addClass("hidden");
        $("#step7").addClass("hidden");
        $("#step8").addClass("hidden");
        $("#step9").addClass("hidden");
        $("#step10").addClass("hidden");
        $("#step11").addClass("hidden");
        $("#step12").addClass("hidden");
        $("#step13").addClass("hidden");
        $("#step14").addClass("hidden");
        $("#step15").addClass("hidden");
        $("#step16").addClass("hidden");
        $("#step17").addClass("hidden");

    }
    if (stepid == "3") {
        $("#subMenu").addClass("hidden");
        $("#as3").removeAttr("onclick");
        $("#as3").attr("onclick", "goToStep(4,4,0)");
        $("#subMenu").addClass("hidden");

        $("#li1").addClass("active");
        $("#li2").addClass("active");
        $("#li3").addClass("active");

        $("#li4").removeClass("active");
        $("#li5").removeClass("active");
        $("#li6").removeClass("active");
        $("#li7").removeClass("active");
        $("#step2").addClass("hidden");
        $("#step1").addClass("hidden");
        $("#step4").addClass("hidden");
        $("#step3").removeClass("hidden");
        $("#step5").addClass("hidden");
        $("#step6").addClass("hidden");
        $("#step7").addClass("hidden");
        $("#step8").addClass("hidden");
        $("#step9").addClass("hidden");
        $("#step10").addClass("hidden");
        $("#step11").addClass("hidden");
        $("#step12").addClass("hidden");
        $("#step13").addClass("hidden");
        $("#step14").addClass("hidden");
        $("#step15").addClass("hidden");
        $("#step16").addClass("hidden");
        $("#step17").addClass("hidden");
        //getStaticApplicantValues();
    }
    if (stepid == "4") {

        $("#subMenu").addClass("hidden");
        $("#as4").removeAttr("onclick");
        $("#as4").attr("onclick", "goToStep(5,5,0)");

        $("#li1").addClass("active");
        $("#li2").addClass("active");
        $("#li3").addClass("active");
        $("#li4").addClass("active");
        $("#li5").removeClass("active");
        $("#li6").removeClass("active");
        $("#li7").removeClass("active");

        $("#step2").addClass("hidden");
        $("#step1").addClass("hidden");
        $("#step4").removeClass("hidden");
        $("#step3").addClass("hidden");
        $("#step5").addClass("hidden");
        $("#step6").addClass("hidden");
        $("#step7").addClass("hidden");
        $("#step8").addClass("hidden");
        $("#step9").addClass("hidden");
        $("#step10").addClass("hidden");
        $("#step11").addClass("hidden");
        $("#step12").addClass("hidden");
        $("#step13").addClass("hidden");
        $("#step14").addClass("hidden");
        $("#step15").addClass("hidden");
        $("#step16").addClass("hidden");
        $("#step17").addClass("hidden");
        //getStaticApplicantValues();

    }
    if (stepid == "5") {

        $("#subMenu").addClass("hidden");
        $("#as5").removeAttr("onclick");
        $("#as5").attr("onclick", "goToStep(6,6,0)");

        $("#mainApplName").removeClass("hidden");
        $("#getting-startedTimeRemainingClock").removeClass("hidden");
        $("#li1").addClass("active");
        $("#li2").addClass("active");
        $("#li3").addClass("active");
        $("#li4").addClass("active");

        $("#li5").removeClass("active");
        $("#li6").removeClass("active");
        $("#li7").removeClass("active");

        $("#step2").addClass("hidden");
        $("#step1").addClass("hidden");
        $("#step4").addClass("hidden");
        $("#step3").addClass("hidden");
        $("#step5").removeClass("hidden");
        $("#step6").addClass("hidden");
        $("#step7").addClass("hidden");
        $("#step8").addClass("hidden");
        $("#step9").addClass("hidden");
        $("#step10").addClass("hidden");
        $("#step11").addClass("hidden");
        $("#step12").addClass("hidden");
        $("#step13").addClass("hidden");
        $("#step14").addClass("hidden");
        $("#step15").addClass("hidden");
        $("#step16").addClass("hidden");
        $("#step17").addClass("hidden");
        if ($("#hdnOPId").val() != '0') {
            getStaticApplicantValues();
        }
    }
    if (stepid == "6") {

        $("#subMenu").addClass("hidden");
        $('#lblRFPAdditionalParking').text($('#lblMonthly_AditionalParking').text());
        $('#lblRFPStorageUnit').text($('#lblMonthly_Storage').text());
        $('#lblRFPPetRent').text($('#lblMonthly_PetRent').text());
        //$("#lblRFPTotalMonthlyPayment").text(formatMoney((parseFloat(unformatText($("#lblRFPMonthlyCharges").text()))) + (parseFloat($("#lblRFPAdditionalParking").text())) + (parseFloat($("#lblRFPStorageUnit").text())) + (parseFloat($("#lblRFPPetRent").text())) + (parseFloat($("#lblRFPTrashRecycling").text())) + (parseFloat($("#lblRFPPestControl").text())) + (parseFloat($("#lblRFPConvergentbillingfee").text()))));
        $("#lblRFPTotalMonthlyPayment").text(formatMoney(parseFloat(unformatText($("#lblRFPMonthlyCharges").text(), 10)) + (parseFloat($("#lblRFPAdditionalParking").text().replace('$', ''))) + (parseFloat($("#lblRFPStorageUnit").text().replace('$', ''))) + (parseFloat($("#lblRFPPetRent").text().replace('$', ''))) + (parseFloat($("#lblRFPTrashRecycling").text().replace('$', ''))) + (parseFloat($("#lblRFPPestControl").text().replace('$', ''))) + (parseFloat($("#lblRFPConvergentbillingfee").text().replace('$', '')))));

        $("#li1").addClass("active");
        $("#li2").addClass("active");
        $("#li3").addClass("active");
        $("#li4").addClass("active");
        $("#li5").addClass("active");

        $("#li6").addClass("active");
        $("#li7").removeClass("active");

        $("#step2").addClass("hidden");
        $("#step1").addClass("hidden");
        $("#step4").addClass("hidden");
        $("#step3").addClass("hidden");
        $("#step5").addClass("hidden");
        $("#step6").removeClass("hidden");
        $("#step7").addClass("hidden");
        $("#step8").addClass("hidden");
        $("#step9").addClass("hidden");
        $("#step10").addClass("hidden");
        $("#step11").addClass("hidden");
        $("#step12").addClass("hidden");
        $("#step13").addClass("hidden");
        $("#step14").addClass("hidden");
        $("#step15").addClass("hidden");
        $("#step16").addClass("hidden");
        $("#step17").addClass("hidden");
        //getStaticApplicantValues();

    }
    if (stepid == "7") {

        $("#subMenu").removeClass("hidden");
        $("#as6").removeAttr("onclick");
        $("#as6").attr("onclick", "goToStep(7,7,0)");
        $("#step2").addClass("hidden");
        $("#step1").addClass("hidden");
        $("#step4").addClass("hidden");
        $("#step3").addClass("hidden");
        $("#step5").addClass("hidden");
        $("#step6").addClass("hidden");
        $("#step7").removeClass("hidden");
        $("#step8").addClass("hidden");
        $("#step9").addClass("hidden");
        $("#step10").addClass("hidden");
        $("#step11").addClass("hidden");
        $("#step12").addClass("hidden");
        $("#step13").addClass("hidden");
        $("#step14").addClass("hidden");
        $("#step15").addClass("hidden");
        $("#step16").addClass("hidden");
        $("#step17").addClass("hidden");

        $("#li7").addClass("active");
        $("#li8").removeClass("active");
        $("#li9").removeClass("active");
        $("#li10").removeClass("active");
        $("#li11").removeClass("active");
        $("#li12").removeClass("active");
        $("#li13").removeClass("active");
        $("#li14").removeClass("active");
        $("#li15").removeClass("active");
        $("#li16").removeClass("active");
        $("#li17").removeClass("active");
        //getStaticApplicantValues();
    }
    if (stepid == "8") {
        $("#subMenu").removeClass("hidden");
        $('#lblRFPAdditionalParking').text($('#lblMonthly_AditionalParking').text());
        $('#lblRFPStorageUnit').text($('#lblMonthly_Storage').text());
        $('#lblRFPPetRent').text($('#lblMonthly_PetRent').text());
        //$("#lblRFPTotalMonthlyPayment").text(formatMoney(parseFloat((parseFloat(unformatText($("#lblRFPMonthlyCharges").text()))) + (parseFloat($("#lblRFPAdditionalParking").text())) + (parseFloat($("#lblRFPStorageUnit").text())) + (parseFloat($("#lblRFPPetRent").text())) + (parseFloat($("#lblRFPTrashRecycling").text())) + (parseFloat($("#lblRFPPestControl").text())) + (parseFloat($("#lblRFPConvergentbillingfee").text()))).toFixed(2)));
        $("#lblRFPTotalMonthlyPayment").text(formatMoney(parseFloat(unformatText($("#lblRFPMonthlyCharges").text(), 10)) + (parseFloat($("#lblRFPAdditionalParking").text().replace('$', ''))) + (parseFloat($("#lblRFPStorageUnit").text().replace('$', ''))) + (parseFloat($("#lblRFPPetRent").text().replace('$', ''))) + (parseFloat($("#lblRFPTrashRecycling").text().replace('$', ''))) + (parseFloat($("#lblRFPPestControl").text().replace('$', ''))) + (parseFloat($("#lblRFPConvergentbillingfee").text().replace('$', '')))));

        $("#step2").addClass("hidden");
        $("#step1").addClass("hidden");
        $("#step4").addClass("hidden");
        $("#step3").addClass("hidden");
        $("#step5").addClass("hidden");
        $("#step6").addClass("hidden");
        $("#step7").addClass("hidden");
        $("#step8").removeClass("hidden");
        $("#step9").addClass("hidden");
        $("#step10").addClass("hidden");
        $("#step11").addClass("hidden");
        $("#step12").addClass("hidden");
        $("#step13").addClass("hidden");
        $("#step14").addClass("hidden");
        $("#step15").addClass("hidden");
        $("#step16").addClass("hidden");
        $("#step17").addClass("hidden");

        $("#li8").addClass("active");
        $("#li7").removeClass("active");
        $("#li9").removeClass("active");
        $("#li10").removeClass("active");
        $("#li11").removeClass("active");
        $("#li12").removeClass("active");
        $("#li13").removeClass("active");
        $("#li14").removeClass("active");
        $("#li15").removeClass("active");
        $("#li16").removeClass("active");
        $("#li17").removeClass("active");
        if ($("#hdnOPId").val() != '0') {
            getStaticApplicantValues();
        }
    }
    if (stepid == "9") {
        $("#subMenu").removeClass("hidden");
        $("#popApplicantSummary").modal("hide");
        $("#step2").addClass("hidden");
        $("#step1").addClass("hidden");
        $("#step4").addClass("hidden");
        $("#step3").addClass("hidden");
        $("#step5").addClass("hidden");
        $("#step6").addClass("hidden");
        $("#step7").addClass("hidden");
        $("#step8").addClass("hidden");
        $("#step9").removeClass("hidden");
        $("#step10").addClass("hidden");
        $("#step11").addClass("hidden");
        $("#step12").addClass("hidden");
        $("#step13").addClass("hidden");
        $("#step14").addClass("hidden");
        $("#step15").addClass("hidden");
        $("#step16").addClass("hidden");
        $("#step17").addClass("hidden");

        $("#li9").addClass("active");
        $("#li8").removeClass("active");
        $("#li7").removeClass("active");
        $("#li10").removeClass("active");
        $("#li11").removeClass("active");
        $("#li12").removeClass("active");
        $("#li13").removeClass("active");
        $("#li14").removeClass("active");
        $("#li15").removeClass("active");
        $("#li16").removeClass("active");
        $("#li17").removeClass("active");

    }
    if (stepid == "10") {
        $("#subMenu").removeClass("hidden");
        $("#popApplicantSummary").modal("hide");
        $("#step2").addClass("hidden");
        $("#step1").addClass("hidden");
        $("#step4").addClass("hidden");
        $("#step3").addClass("hidden");
        $("#step5").addClass("hidden");
        $("#step6").addClass("hidden");
        $("#step7").addClass("hidden");
        $("#step8").addClass("hidden");
        $("#step9").addClass("hidden");
        $("#step10").removeClass("hidden");
        $("#step11").addClass("hidden");
        $("#step12").addClass("hidden");
        $("#step13").addClass("hidden");
        $("#step14").addClass("hidden");
        $("#step15").addClass("hidden");
        $("#step16").addClass("hidden");

        $("#li10").addClass("active");
        $("#li8").removeClass("active");
        $("#li9").removeClass("active");
        $("#li7").removeClass("active");
        $("#li11").removeClass("active");
        $("#li12").removeClass("active");
        $("#li13").removeClass("active");
        $("#li14").removeClass("active");
        $("#li15").removeClass("active");
        $("#li16").removeClass("active");
        $("#li17").removeClass("active");
    }
    if (stepid == "11") {
        $("#subMenu").removeClass("hidden");
        $("#step2").addClass("hidden");
        $("#step1").addClass("hidden");
        $("#step4").addClass("hidden");
        $("#step3").addClass("hidden");
        $("#step5").addClass("hidden");
        $("#step6").addClass("hidden");
        $("#step7").addClass("hidden");
        $("#step8").addClass("hidden");
        $("#step9").addClass("hidden");
        $("#step10").addClass("hidden");
        $("#step11").removeClass("hidden");
        $("#step12").addClass("hidden");
        $("#step13").addClass("hidden");
        $("#step14").addClass("hidden");
        $("#step15").addClass("hidden");
        $("#step16").addClass("hidden");
        $("#step17").addClass("hidden");

        $("#li11").addClass("active");
        $("#li8").removeClass("active");
        $("#li9").removeClass("active");
        $("#li7").removeClass("active");
        $("#li10").removeClass("active");
        $("#li12").removeClass("active");
        $("#li13").removeClass("active");
        $("#li14").removeClass("active");
        $("#li15").removeClass("active");
        $("#li16").removeClass("active");
        $("#li17").removeClass("active");
    }
    if (stepid == "12") {
        $("#subMenu").removeClass("hidden");
        $("#step2").addClass("hidden");
        $("#step1").addClass("hidden");
        $("#step4").addClass("hidden");
        $("#step3").addClass("hidden");
        $("#step5").addClass("hidden");
        $("#step6").addClass("hidden");
        $("#step7").addClass("hidden");
        $("#step8").addClass("hidden");
        $("#step9").addClass("hidden");
        $("#step10").addClass("hidden");
        $("#step11").addClass("hidden");
        $("#step12").removeClass("hidden");
        $("#step13").addClass("hidden");
        $("#step14").addClass("hidden");
        $("#step15").addClass("hidden");
        $("#step16").addClass("hidden");

        $("#li12").addClass("active");
        $("#li8").removeClass("active");
        $("#li9").removeClass("active");
        $("#li7").removeClass("active");
        $("#li11").removeClass("active");
        $("#li10").removeClass("active");
        $("#li13").removeClass("active");
        $("#li14").removeClass("active");
        $("#li15").removeClass("active");
        $("#li16").removeClass("active");
        $("#li17").removeClass("active");
    }
    if (stepid == "13") {
        $("#subMenu").removeClass("hidden");
        $("#step2").addClass("hidden");
        $("#step1").addClass("hidden");
        $("#step4").addClass("hidden");
        $("#step3").addClass("hidden");
        $("#step5").addClass("hidden");
        $("#step6").addClass("hidden");
        $("#step7").addClass("hidden");
        $("#step8").addClass("hidden");
        $("#step9").addClass("hidden");
        $("#step10").addClass("hidden");
        $("#step11").addClass("hidden");
        $("#step12").addClass("hidden");
        $("#step13").removeClass("hidden");
        $("#step14").addClass("hidden");
        $("#step15").addClass("hidden");
        $("#step16").addClass("hidden");

        $("#li13").addClass("active");
        $("#li8").removeClass("active");
        $("#li9").removeClass("active");
        $("#li7").removeClass("active");
        $("#li11").removeClass("active");
        $("#li12").removeClass("active");
        $("#li10").removeClass("active");
        $("#li14").removeClass("active");
        $("#li15").removeClass("active");
        $("#li16").removeClass("active");
        $("#li17").removeClass("active");
    }
    if (stepid == "14") {
        $("#subMenu").removeClass("hidden");
        $("#step2").addClass("hidden");
        $("#step1").addClass("hidden");
        $("#step4").addClass("hidden");
        $("#step3").addClass("hidden");
        $("#step5").addClass("hidden");
        $("#step6").addClass("hidden");
        $("#step7").addClass("hidden");
        $("#step8").addClass("hidden");
        $("#step9").addClass("hidden");
        $("#step10").addClass("hidden");
        $("#step11").addClass("hidden");
        $("#step12").addClass("hidden");
        $("#step13").addClass("hidden");
        $("#step14").removeClass("hidden");
        $("#step15").addClass("hidden");
        $("#step16").addClass("hidden");
        $("#step17").addClass("hidden");

        $("#li14").addClass("active");
        $("#li8").removeClass("active");
        $("#li9").removeClass("active");
        $("#li7").removeClass("active");
        $("#li11").removeClass("active");
        $("#li12").removeClass("active");
        $("#li13").removeClass("active");
        $("#li10").removeClass("active");
        $("#li15").removeClass("active");
        $("#li16").removeClass("active");
    }
    if (stepid == "15") {
        $(".gotosummary").removeClass('hidden');
        $("#subMenu").removeClass("hidden");
        $(".gotosummary").removeClass('hidden');

        $("#step2").addClass("hidden");
        $("#step1").addClass("hidden");
        $("#step4").addClass("hidden");
        $("#step3").addClass("hidden");
        $("#step5").addClass("hidden");
        $("#step6").addClass("hidden");
        $("#step7").addClass("hidden");
        $("#step8").addClass("hidden");
        $("#step9").addClass("hidden");
        $("#step10").addClass("hidden");
        $("#step11").addClass("hidden");
        $("#step12").addClass("hidden");
        $("#step13").addClass("hidden");
        $("#step14").addClass("hidden");
        $("#step15").removeClass("hidden");
        $("#step16").addClass("hidden");
        $("#step17").addClass("hidden");

        $("#li15").addClass("active");
        $("#li8").removeClass("active");
        $("#li9").removeClass("active");
        $("#li7").removeClass("active");
        $("#li11").removeClass("active");
        $("#li12").removeClass("active");
        $("#li13").removeClass("active");
        $("#li14").removeClass("active");
        $("#li10").removeClass("active");
        $("#li16").removeClass("active");
        $("#li17").removeClass("active");
    }
    if (stepid == "16") {


        $("#subMenu").removeClass("hidden");
        $("#step2").addClass("hidden");
        $("#step1").addClass("hidden");
        $("#step4").addClass("hidden");
        $("#step3").addClass("hidden");
        $("#step5").addClass("hidden");
        $("#step6").addClass("hidden");
        $("#step7").addClass("hidden");
        $("#step8").addClass("hidden");
        $("#step9").addClass("hidden");
        $("#step10").addClass("hidden");
        $("#step11").addClass("hidden");
        $("#step12").addClass("hidden");
        $("#step13").addClass("hidden");
        $("#step14").addClass("hidden");
        $("#step15").addClass("hidden");
        $("#step16").removeClass("hidden");
        $("#step17").addClass("hidden");

        $("#li16").addClass("active");
        $("#li8").removeClass("active");
        $("#li9").removeClass("active");
        $("#li7").removeClass("active");
        $("#li11").removeClass("active");
        $("#li12").removeClass("active");
        $("#li13").removeClass("active");
        $("#li14").removeClass("active");
        $("#li15").removeClass("active");
        $("#li10").removeClass("active");
        $("#li17").removeClass("active");
    }
    if (stepid == "17") {
        $("#subMenu").removeClass("hidden");
        $("#step2").addClass("hidden");
        $("#step1").addClass("hidden");
        $("#step4").addClass("hidden");
        $("#step3").addClass("hidden");
        $("#step5").addClass("hidden");
        $("#step6").addClass("hidden");
        $("#step7").addClass("hidden");
        $("#step8").addClass("hidden");
        $("#step9").addClass("hidden");
        $("#step10").addClass("hidden");
        $("#step11").addClass("hidden");
        $("#step12").addClass("hidden");
        $("#step13").addClass("hidden");
        $("#step14").addClass("hidden");
        $("#step15").addClass("hidden");
        $("#step16").addClass("hidden");
        $("#step17").removeClass("hidden");

        $("#li17").addClass("active");
        $("#li8").removeClass("active");
        $("#li9").removeClass("active");
        $("#li7").removeClass("active");
        $("#li11").removeClass("active");
        $("#li12").removeClass("active");
        $("#li13").removeClass("active");
        $("#li14").removeClass("active");
        $("#li15").removeClass("active");
        $("#li16").removeClass("active");
        $("#li10").removeClass("active");
    }
};
var SaveOnlineProspect = function () {
    $("#divLoader").show();
    var msg = "";
    var propertyId = $("#hndUID").val();
    var onlineProspectId = $("#hdnOPId").val();
    var firstName = $("#txtFirstName").val();
    var lastName = $("#txtLastName").val();
    var middleInitial = $("#txtMiddleInitialReg").val();

    var gender = $("#ddlGenderReg").val();
    var otherGender = $("#txtOtherGenderReg").val();

    var phoneNumber = unformatText($("#txtPhoneNumber").val());
    var emailId = $("#txtEmail").val();
   
    var ssnNumber ="";
    var ssncheck = "";


    var idType = "0";
    var idState = "0";
    var idNumber = "";

    var country = "1";
    var homeAddress1 = "";
    var homeAddress2 = "";
    var stateHome = "";
    var cityHome = "";
    var zipHome = "";

    var marketsource = $("#ddlMarketSource").val();

    var password = $("#txtPassword").val();
    var confirmPassword = $("#txtConfPassword").val();

    var address = $("#txtAddress").val();
    var dob = $("#txtDOB").val();
    var annualIncome = $("#txtAnnualIncome").val();
    var addiAnnualIncome = $("#txtAddiAnnualIncome").val();

    var moveInDate = $("#txtDate").val();
    var isAgree = $("#chkAgreeTerms").is(":checked") ? "1" : "0";
    var leaseterm = $("#hndLeaseTermID").val();

    if (!firstName) {
        msg += "Please fill the First Name </br>";
    }
    if (!lastName) {
        msg += "Please fill the  Last Name </br>";
    }

    if (!gender || gender == "0") {
        msg += "Please Select The Gender </br>";
    }
    else if (gender == "3") {
        if (!otherGender) {
            msg += "Please Fill The Other Gender </br>";
        }
    }
    if (!phoneNumber) {
        msg += "Please fill Mobile Number </br>";
    }
    else {
        if (phoneNumber.length < 10) {
            msg += "Please enter 10 digit mobile number </br>";
        }
    }
    if (!emailId) {
        msg += "Please fill the Email </br>";
    } else {
        if (!validateEmail($("#txtEmail").val())) {
            msg += "Please fill Valid Email </br>";
        }
    }

    if (!password) {
        msg += "Please fill the Password </br>";
    } else {

        var result = checkStrength($("#txtPassword").val());
        if (!result) {
            return;
        }

        if (password != confirmPassword) {
            msg += "Password and Confirm Password must be the same</br>";
        }
    }

    if (msg != "") {
        $.alert({
            title: "",
            content: msg,
            type: 'red'
        });
        $("#divLoader").hide();
        return;
    }

    var model = {
        ID: onlineProspectId,
        PropertyId: propertyId,
        FirstName: firstName,
        MiddleInitial: middleInitial,
        LastName: lastName,
        Email: emailId,
        Phone: phoneNumber,
        Address: address,
        Password: password,
        DateofBirth: dob,
        AnnualIncome: annualIncome,
        AddiAnnualIncome: addiAnnualIncome,
        Marketsource: marketsource,
        MoveInDate: moveInDate,
        LeaseTerm: leaseterm,

        DocumentType: idType,
        DocumentState: idState,
        DocumentIDNumber: idNumber,
        SSN: ssnNumber,
        Country: country,
        HomeAddress1: homeAddress1,
        HomeAddress2: homeAddress2,
        StateHome: stateHome,
        CityHome: cityHome,
        ZipHome: zipHome,

        Gender: gender,
        OtherGender: otherGender
    };

    $.ajax({
        url: '/ApplyNow/SaveOnlineProspect',
        type: 'post',
        data: JSON.stringify(model),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
            var idmsg = response.msg.split('|');
            if (idmsg[0] != 0) {
                $("#hdnOPId").val(idmsg[0]);
                $("#lblQuoteID").text("#" + idmsg[0]);
                getApplyNowList(idmsg[0]);
                getTenantOnlineList(idmsg[0]);
                getApplicantListsPrimary(idmsg[0]);
                $("#divstep3save").addClass("hidden");
                $("#divstep3").removeClass("hidden");
                $("#hdnStepCompleted").val(4);
                window.location = "/ApplyNow/Index/" + idmsg[2];
            } else {
                $("#hdnStepCompleted").val(2);
                $("#hdnOPId").val(0);
                $("#hndUID").val(0);
                showCurrentStep(2, 2);
                var floorNoSearch = $("#hndFloorNo").val();
                var bedRoomSearch = $("#hndBedRoom").val();
                var buildingSearch = $("#hndBuilding").val();
                var ubitIdSearch = 0;

                if (ubitIdSearch != 0 && buildingSearch != "" && floorNoSearch > 0) {
                    showFloorPlanApplicant(floorNoSearch, bedRoomSearch, buildingSearch);
                }
                getPropertyUnitList(buildingSearch);
                $("#popUnitPlan").empty();
                $.alert({
                    title: "",
                    content: idmsg[1],
                    type: 'red'
                });
            }
        }
    });
}
var fillMarketSourceDDLA = function () {
    $("#divLoader").show();
    $.ajax({
        url: '/Admin/ProspectManagement/GetDdlMarketSourceList',
        method: "post",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {

            $("#ddlMarketSource").empty();
            $("#ddlMarketSource").append("<option value='0'>-- Select Market Source --</option>");
            $.each(response.model, function (index, elementValue) {
                $("#ddlMarketSource").append("<option value=" + elementValue.AdID + ">" + elementValue.Advertiser + "</option>");
            });
            $("#divLoader").hide();
        }
    });
}
var SaveQuote = function (stepcompleted) {


    $("#divLoader").show();

    var id = $("#hdnUserId").val();

    //if (id != 0) {
    //    var uid = $("#hndUID").val();
    //    var model = { Id: id, UID: uid };

    //    $.ajax({
    //        url: '/ApplyNow/GetStaticApplicantValues',
    //        type: "post",
    //        contentType: "application/json utf-8",
    //        data: JSON.stringify(model),
    //        dataType: "JSON",
    //        success: function (response) {
    //            $("#divLoader").hide();
    //            /*Select Option Starts*/
    //            $("#lblArea").text(response.model.AreaSqft);
    //            $("#lblLease").text(response.model.LeaseMonths);
    //            $("#lblBed").text(response.model.Bedroom);
    //            $("#lblBath").text(response.model.Bathroom);
    //            $("#lblDeposit").text(formatMoney(response.model.Deposit));
    //            //console.log("label: " +$("#lblDeposit").text());
    //            $("#lblRent").text(formatMoney(response.model.Rent));
    //            $("#lblLease2").text(response.model.LeaseMonths);
    //            $("#lbldeposit1").text(formatMoney(response.model.Deposit));
    //            $("#lblPetDeposit").text(formatMoney(response.model.PetDeposit));
    //            $("#lblPetDNAAmt").text(formatMoney(response.model.PetDNAAmt));
    //            $("#lblFMRent").text(formatMoney(unformatText($("#lblRent").text())));
    //            $("#lblRent33").text(formatMoney(unformatText($("#lblRent").text())));
    //            $("#lblAdditionalParking").text(formatMoney(response.model.AdditionalParkingAmt));
    //            $("#lblStorageUnit").text(formatMoney(response.model.StorageAmt));
    //            $("#lblPetFee").text(formatMoney(response.model.PetPlaceAmt));
    //            $("#lblTrashAmt").text(formatMoney(response.model.TrashAmt));
    //            $("#lblPestAmt").text(formatMoney(response.model.PestAmt));
    //            $("#lblConvergentAmt").text(formatMoney(response.model.ConvergentAmt));
    //            var totalAmt = (parseFloat(response.model.Rent) + parseFloat(unformatText($("#lblAdditionalParking").text())) + parseFloat(unformatText($("#lblStorageUnit").text())) + parseFloat(unformatText($("#lblTrashAmt").text())) + parseFloat($("#lblPestAmt").text()) + parseFloat($("#lblConvergentAmt").text()) + parseFloat(unformatText($("#lblPetFee").text()))).toFixed(2);
    //            $("#lbltotalAmount").text(formatMoney(totalAmt));
    //            /*Select Option Ends*/
    //            /*Quotation Starts*/
    //            $("#lblFNLQuoteDate").text(response.model.QuoteStartDate);
    //            $("#lblFNLQuoteExpires").text(response.model.QuoteEndDate);
    //            $("#lblFNLPhone").text(formatPhoneFax(response.model.Phone));
    //            $("#lblFNLEmail").text(response.model.Email);
    //            $("#lblFNLTerm").text(response.model.LeaseMonths);
    //            $("#lblFNLResidentName1").text(response.model.ResidentName);
    //            $("#lblFNLDesiredMoveIn").text(response.model.MoveInDateString);
    //            $("#lblFNLUnit").text("#" + response.model.UnitName);
    //            $("#lblFNLModel").text(response.model.Building);
    //            $("#fdepo").text("$" + $("#lbldeposit1").text());
    //            $("#lblMonthly_MonthlyCharge").text("$" + $("#lblRent").text());
    //            // console.log(unformatText($("#lblRent").text()))
    //            $("#lblProrated_MonthlyCharge").text("$" + formatMoney(parseFloat(parseFloat(unformatText($("#lblRent").text())) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
    //            $("#spanTrashRecycle").text("$" + $("#lblTrashAmt").text());
    //            // $("#lblProrated_TrashAmt").text("$" + parseFloat($("#lblTrashAmt").text() / parseFloat(numberOfDays) * remainingday));
    //            $("#lblProrated_TrashAmt").text("$" + formatMoney(parseFloat(parseFloat(unformatText($("#lblTrashAmt").text())) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
    //            $("#spanPestControl").text("$" + $("#lblPestAmt").text());
    //            //$("#lblProrated_PestAmt").text("$" + parseFloat($("#lblPestAmt").text() / parseFloat(numberOfDays) * remainingday));
    //            $("#lblProrated_PestAmt").text("$" + formatMoney(parseFloat(parseFloat(unformatText($("#lblPestAmt").text())) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
    //            $("#spanConvergentAmt").text("$" + $("#lblConvergentAmt").text());
    //            //$("#lblProrated_ConvergentAmt").text("$" + parseFloat($("#lblConvergentAmt").text() / parseFloat(numberOfDays) * remainingday));
    //            $("#lblProrated_ConvergentAmt").text("$" + formatMoney(parseFloat(parseFloat(unformatText($("#lblConvergentAmt").text())) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
    //            $("#lblMonthly_AditionalParking").text("$" + $("#lblAdditionalParking").text());
    //            //$("#lblProrated_AditionalParking").text("$" + parseFloat($("#lblAdditionalParking").text() / parseFloat(numberOfDays) * remainingday));
    //            $("#lblProrated_AditionalParking").text("$" + formatMoney(parseFloat(parseFloat(unformatText($("#lblAdditionalParking").text())) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
    //            $("#lblMonthly_Storage").text("$" + $("#lblStorageUnit").text());
    //            //$("#lblProrated_Storage").text("$" + parseFloat($("#lblStorageUnit").text() / parseFloat(numberOfDays) * remainingday));
    //            $("#lblProrated_Storage").text("$" + formatMoney(parseFloat(parseFloat(unformatText($("#lblStorageUnit").text())) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
    //            $("#lblMonthly_PetRent").text("$" + $("#lblPetFee").text());
    //            //$("#lblProrated_PetRent").text("$" + parseFloat($("#lblPetFee").text() / parseFloat(numberOfDays) * remainingday));
    //            $("#lblProrated_PetRent").text("$" + formatMoney(parseFloat(parseFloat(unformatText($("#lblPetFee").text())) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
    //            var totalRentAmt = formatMoney(parseFloat(unformatText($("#lblMonthly_MonthlyCharge").text().replace('$', ''))) + parseFloat($("#spanTrashRecycle").text().replace('$', '')) + parseFloat($("#spanPestControl").text().replace('$', '')) + parseFloat($("#spanConvergentAmt").text().replace('$', '')) + parseFloat($("#lblMonthly_AditionalParking").text().replace('$', '')) + parseFloat($("#lblMonthly_Storage").text().replace('$', '')) + parseFloat($("#lblMonthly_PetRent").text().replace('$', '')));
    //            var totalRentAmt_Prorated = formatMoney(parseFloat(unformatText($("#lblProrated_MonthlyCharge").text().replace('$', ''))) + parseFloat($("#lblProrated_TrashAmt").text().replace('$', '')) + parseFloat($("#lblProrated_PestAmt").text().replace('$', '')) + parseFloat($("#lblProrated_ConvergentAmt").text().replace('$', '')) + parseFloat($("#lblProrated_AditionalParking").text().replace('$', '')) + parseFloat($("#lblProrated_Storage").text().replace('$', '')) + parseFloat($("#lblProrated_PetRent").text().replace('$', '')));

    //            $("#lblMonthly_TotalRent").text(totalRentAmt);
    //            $("#lblProrated_TotalRent").text(totalRentAmt_Prorated);

    //            /*Quotation Ends*/
    //            /*Responsibility left block Start*/

    //            $("#lblVehicleFees1").text(formatMoney(response.model.VehicleRegistration));
    //            $("#lbdepo6").text(formatMoney(response.model.Deposit));
    //            // $("#lbdepo6").text(formatMoney(response.model.Deposit));
    //            $("#lbpetd6").text(formatMoney(response.model.PetDeposit));
    //            $("#lbpetdna6").text(formatMoney(response.model.PetDNAAmt));
    //            $("#lblProratedRent6").text(formatMoney(response.model.Prorated_Rent));
    //            $("#lbtotdueatmov6").text(formatMoney(response.model.MoveInCharges));

    //            $("#lblRFPMonthlyCharges").text(formatMoney(response.model.Rent));
    //            $("#lblRFPAdditionalParking").text(formatMoney(response.model.AdditionalParkingAmt));
    //            $("#lblRFPStorageUnit").text(formatMoney(response.model.StorageAmt));
    //            $("#lblRFPPetRent").text(formatMoney(response.model.PetPlaceAmt));
    //            $("#lblRFPTrashRecycling").text(formatMoney(response.model.TrashAmt));
    //            $("#lblRFPPestControl").text(formatMoney(response.model.PestAmt));
    //            $("#lblRFPConvergentbillingfee").text(formatMoney(response.model.ConvergentAmt));
    //            $("#lblRFPTotalMonthlyPayment").text(formatMoney(response.model.MonthlyCharges));

    //            /*Responsibility left block Ends*/

    //        }
    //    });


    //    var msg = "";
    //    var ProspectId = $("#hdnOPId").val();
    //    var ParkingAmt = unformatText($("#lblAdditionalParking").text());
    //    var StorageAmt = unformatText($("#lblStorageUnit").text());
    //    var PetPlaceAmt = unformatText($("#lblPetFee").text());
    //    var PestAmt = $("#lblPestAmt").text();
    //    var ConvergentAmt = $("#lblConvergentAmt").text();
    //    var TrashAmt = unformatText($("#lblTrashAmt").text());
    //    var moveInDate = $("#txtDate").val();
    //    var moveInCharges = unformatText($("#ftotal").text());
    //    var monthlyCharges = unformatText($("#lblMonthly_TotalRent").text());

    //    var petDeposit = unformatText($("#lblPetDeposit").text());
    //    var fobAmt = $("#lblFobFee").text();
    //    var deposit = $("#lbdepo6").text();
    //    var rent = unformatText($("#lblFMRent").text());
    //    var proratedrent = unformatText($("#lblProrated_TotalRent").text());
    //    //var vehiclefees = $("#lblVehicleFees1").text();
    //    var vehiclefees = 0;
    //    var adminfees = $("#lblAdminFees").text();
    //    var leaseterm = $("#hndLeaseTermID").val();
    //    var petDNAAmt = unformatText($("#lblPetDNAAmt").text());
    //    var propertyId = $("#hndUID").val();
    //    var additionalParking = $("#hndAdditionalParking").val();
    //    var noofbed = $("#lblBed").text();
    //    if (parseInt(additionalParking) > 0) {
    //        if (parseInt(noofbed) < 3) {
    //            vehiclefees = 15 * (parseInt(additionalParking) + 1);
    //            $("#spanVechReg").text("Vehicle Registration (" + (parseInt(additionalParking) + 1) + " Vehicles)");
    //            $("#spanVechReg1").text("Vehicle Registration (" + (parseInt(additionalParking) + 1) + " Vehicles)");
    //        }
    //        else {
    //            vehiclefees = 15 * (parseInt(additionalParking) + 2);
    //            $("#spanVechReg").text("Vehicle Registration (" + (parseInt(additionalParking) + 2) + " Vehicles)");
    //            $("#spanVechReg1").text("Vehicle Registration (" + (parseInt(additionalParking) + 2) + " Vehicles)");
    //        }
    //        $("#lblVehicleFees").text("$" + parseFloat(vehiclefees).toFixed(2));
    //        $("#lblVehicleFees1").text(parseFloat(vehiclefees).toFixed(2));
    //    }

    //    var model = {
    //        ID: ProspectId,
    //        PropertyId: propertyId,
    //        ParkingAmt: ParkingAmt,
    //        StorageAmt: StorageAmt,
    //        PetPlaceAmt: PetPlaceAmt,
    //        PestAmt: PestAmt,
    //        ConvergentAmt: ConvergentAmt,
    //        TrashAmt: TrashAmt,
    //        MoveInCharges: moveInCharges,
    //        MonthlyCharges: monthlyCharges,
    //        MoveInDate: moveInDate,
    //        PetDeposit: petDeposit,
    //        FOBAmt: fobAmt,
    //        Deposit: deposit,
    //        Rent: rent,
    //        Prorated_Rent: proratedrent,
    //        VehicleRegistration: vehiclefees,
    //        AdminFees: adminfees,
    //        LeaseTerm: leaseterm,
    //        PetDNAAmt: petDNAAmt,
    //        StepCompleted: stepcompleted,
    //        AdditionalParking: additionalParking
    //    };

    //    $.ajax({
    //        url: '/ApplyNow/UpdateOnlineProspect',
    //        type: 'post',
    //        data: JSON.stringify(model),
    //        contentType: 'application/json; charset=utf-8',
    //        dataType: 'json',
    //        success: function (response) {
    //            $("#divLoader").hide();
    //            var idmsg = response.msg.split('|');
    //            var hasUnitChange = idmsg[1];
    //            if (hasUnitChange == 1) {
    //                updateCalculation();
    //            }
    //            $("#lblFNLQuote").text(idmsg[0]);
    //            var stepcomp = parseInt($("#hdnStepCompleted").val());
    //            if (stepcomp < stepcompleted) {
    //                $("#hdnStepCompleted").val(stepcompleted);
    //            }
    //        }
    //    });
    //}
    //else {
    //    var msg = "";
    //    var ProspectId = $("#hdnOPId").val();
    //    var ParkingAmt = unformatText($("#lblAdditionalParking").text());
    //    var StorageAmt = unformatText($("#lblStorageUnit").text());
    //    var PetPlaceAmt = unformatText($("#lblPetFee").text());
    //    var PestAmt = $("#lblPestAmt").text();
    //    var ConvergentAmt = $("#lblConvergentAmt").text();
    //    var TrashAmt = unformatText($("#lblTrashAmt").text());
    //    var moveInDate = $("#txtDate").val();
    //    var moveInCharges = unformatText($("#ftotal").text());
    //    var monthlyCharges = unformatText($("#lblMonthly_TotalRent").text());

    //    var petDeposit = unformatText($("#lblPetDeposit").text());
    //    var fobAmt = $("#lblFobFee").text();
    //    var deposit = $("#lbdepo6").text();
    //    var rent = unformatText($("#lblFMRent").text());
    //    var proratedrent = unformatText($("#lblProrated_TotalRent").text());
    //    //var vehiclefees = $("#lblVehicleFees1").text();
    //    var vehiclefees = 0;
    //    var adminfees = $("#lblAdminFees").text();
    //    var leaseterm = $("#hndLeaseTermID").val();
    //    var petDNAAmt = unformatText($("#lblPetDNAAmt").text());
    //    var propertyId = $("#hndUID").val();
    //    var additionalParking = $("#hndAdditionalParking").val();
    //    var noofbed = $("#lblBed").text();
    //    if (parseInt(additionalParking) > 0) {
    //        if (parseInt(noofbed) < 3) {
    //            vehiclefees = 15 * (parseInt(additionalParking) + 1);
    //            $("#spanVechReg").text("Vehicle Registration (" + (parseInt(additionalParking) + 1) + " Vehicles)");
    //            $("#spanVechReg1").text("Vehicle Registration (" + (parseInt(additionalParking) + 1) + " Vehicles)");
    //        }
    //        else {
    //            vehiclefees = 15 * (parseInt(additionalParking) + 2);
    //            $("#spanVechReg").text("Vehicle Registration (" + (parseInt(additionalParking) + 2) + " Vehicles)");
    //            $("#spanVechReg1").text("Vehicle Registration (" + (parseInt(additionalParking) + 2) + " Vehicles)");
    //        }
    //        $("#lblVehicleFees").text("$" + parseFloat(vehiclefees).toFixed(2));
    //        $("#lblVehicleFees1").text(parseFloat(vehiclefees).toFixed(2));
    //    }

    //    var model = {
    //        ID: ProspectId,
    //        PropertyId: propertyId,
    //        ParkingAmt: ParkingAmt,
    //        StorageAmt: StorageAmt,
    //        PetPlaceAmt: PetPlaceAmt,
    //        PestAmt: PestAmt,
    //        ConvergentAmt: ConvergentAmt,
    //        TrashAmt: TrashAmt,
    //        MoveInCharges: moveInCharges,
    //        MonthlyCharges: monthlyCharges,
    //        MoveInDate: moveInDate,
    //        PetDeposit: petDeposit,
    //        FOBAmt: fobAmt,
    //        Deposit: deposit,
    //        Rent: rent,
    //        Prorated_Rent: proratedrent,
    //        VehicleRegistration: vehiclefees,
    //        AdminFees: adminfees,
    //        LeaseTerm: leaseterm,
    //        PetDNAAmt: petDNAAmt,
    //        StepCompleted: stepcompleted,
    //        AdditionalParking: additionalParking
    //    };

    //    $.ajax({
    //        url: '/ApplyNow/UpdateOnlineProspect',
    //        type: 'post',
    //        data: JSON.stringify(model),
    //        contentType: 'application/json; charset=utf-8',
    //        dataType: 'json',
    //        success: function (response) {
    //            $("#divLoader").hide();
    //            var idmsg = response.msg.split('|');
    //            var hasUnitChange = idmsg[1];
    //            if (hasUnitChange == 1) {
    //                updateCalculation();
    //            }
    //            $("#lblFNLQuote").text(idmsg[0]);
    //            var stepcomp = parseInt($("#hdnStepCompleted").val());
    //            if (stepcomp < stepcompleted) {
    //                $("#hdnStepCompleted").val(stepcompleted);
    //            }
    //        }
    //    });
    //}
    var msg = "";
    var ProspectId = $("#hdnOPId").val();
    var ParkingAmt = unformatText($("#lblAdditionalParking").text());
    var StorageAmt = unformatText($("#lblStorageUnit").text());
    var PetPlaceAmt = unformatText($("#lblPetFee").text());
    var PestAmt = $("#lblPestAmt").text();
    var ConvergentAmt = $("#lblConvergentAmt").text();
    var TrashAmt = unformatText($("#lblTrashAmt").text());
    var moveInDate = $("#txtDate").val();
    var moveInCharges = unformatText($("#ftotal").text());
    var monthlyCharges = unformatText($("#lblMonthly_TotalRent").text());

    var petDeposit = unformatText($("#lblPetDeposit").text());
    var fobAmt = $("#lblFobFee").text();
    var deposit = $("#lbdepo6").text();
    var rent = unformatText($("#lblFMRent").text());
    var proratedrent = unformatText($("#lblProrated_TotalRent").text());
    //var vehiclefees = $("#lblVehicleFees1").text();
    var vehiclefees = 0;
    var adminfees = $("#lblAdminFees").text();
    var leaseterm = $("#hndLeaseTermID").val();
    var petDNAAmt = unformatText($("#lblPetDNAAmt").text());
    var propertyId = $("#hndUID").val();
    var additionalParking = $("#hndAdditionalParking").val();
    var noofbed = $("#lblBed").text();
    if (parseInt(additionalParking) > 0) {
        if (parseInt(noofbed) < 3) {
            vehiclefees = 15 * (parseInt(additionalParking) + 1);
            $("#spanVechReg").text("Vehicle Registration (" + (parseInt(additionalParking) + 1) + " Vehicles)");
            $("#spanVechReg1").text("Vehicle Registration (" + (parseInt(additionalParking) + 1) + " Vehicles)");
        }
        else {
            vehiclefees = 15 * (parseInt(additionalParking) + 2);
            $("#spanVechReg").text("Vehicle Registration (" + (parseInt(additionalParking) + 2) + " Vehicles)");
            $("#spanVechReg1").text("Vehicle Registration (" + (parseInt(additionalParking) + 2) + " Vehicles)");
        }
        $("#lblVehicleFees").text("$" + parseFloat(vehiclefees).toFixed(2));
        //$("#lblVehicleFees1").text(parseFloat(vehiclefees).toFixed(2));
    }

    var model = {
        ID: ProspectId,
        PropertyId: propertyId,
        ParkingAmt: ParkingAmt,
        StorageAmt: StorageAmt,
        PetPlaceAmt: PetPlaceAmt,
        PestAmt: PestAmt,
        ConvergentAmt: ConvergentAmt,
        TrashAmt: TrashAmt,
        MoveInCharges: moveInCharges,
        MonthlyCharges: monthlyCharges,
        MoveInDate: moveInDate,
        PetDeposit: petDeposit,
        FOBAmt: fobAmt,
        Deposit: deposit,
        Rent: rent,
        Prorated_Rent: proratedrent,
        VehicleRegistration: vehiclefees,
        AdminFees: adminfees,
        LeaseTerm: leaseterm,
        PetDNAAmt: petDNAAmt,
        StepCompleted: stepcompleted,
        AdditionalParking: additionalParking
    };

    $.ajax({
        url: '/ApplyNow/UpdateOnlineProspect',
        type: 'post',
        data: JSON.stringify(model),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: false,
        success: function (response) { $("#divLoader").show(); }
    }).done(function (response) {
        $("#divLoader").hide();
        var idmsg = response.msg.split('|');
        var hasUnitChange = idmsg[1];
        if (hasUnitChange == 1) {
            updateCalculation();
        }
        $("#lblFNLQuote").text(idmsg[0]);
        var stepcomp = parseInt($("#hdnStepCompleted").val());
        if (stepcomp < stepcompleted) {
            $("#hdnStepCompleted").val(stepcompleted);
        }
    });
};
var updateCalculation = function () {
    addParkingArray = [];
    $("#hndAdditionalParking").val(0);
    //lbltotalAmount
    $("#lblAdditionalParking").text("0.00");
    var totalAmount = (parseFloat(unformatText($("#lblFMRent").text())) + parseFloat(unformatText($("#lblStorageUnit").text())) + parseFloat(unformatText($("#lblTrashAmt").text())) + parseFloat($("#lblPestAmt").text()) + parseFloat($("#lblConvergentAmt").text()) + parseFloat(unformatText($("#lblPetFee").text()))).toFixed(2);
    $("#lbltotalAmount").text(formatMoney(totalAmount));
    getApplicantListsPrimary();
}
var SaveCheckPolicyApplicant = function (stepcompleted) {
    $("#divLoader").show();
    var msg = "";
    var ProspectId = $("#hdnOPId").val();
    var isRentalPolicy = $("#chkRentalPolicy").is(":checked") ? "1" : "0";
    var isRentalQualification = $("#chkRentalQual").is(":checked") ? "1" : "0";
    var firstName = $("#txtFirstName").val();
    var lastName = $("#txtLastName").val();

    var emailId = $("#txtEmail").val();


    if (isRentalPolicy == 0) {
        msg += "Please agree Rental Policy";
    }
    if (isRentalQualification == 0) {
        msg += "Please agree Rental Qualification";
    }

    var model = {
        ID: ProspectId,
        IsRentalPolicy: isRentalPolicy,
        IsRentalQualification: isRentalQualification,
        FirstName: firstName,
        LastName: lastName,
        Email: emailId,
        StepCompleted: stepcompleted
    };

    $.ajax({
        url: '/ApplyNow/SaveCheckPolicy',
        type: 'post',
        data: JSON.stringify(model),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
            var stepcomp = parseInt($("#hdnStepCompleted").val());
            if (stepcomp < stepcompleted) {
                $("#hdnStepCompleted").val(stepcompleted);
                
            }
        }
    });
}
function savePayment() {
  
    if ($("#chkTermsAndCondition2").is(':unchecked')) {
        $("#divLoader").hide();
        $.alert({
            title: "",
            content: "Please accept Terms & Condition </br>",
            type: 'red'
        });
        return;
    }
    $("#divLoader").show();
    var msg = "";
    if ($("#hndTransMethod2").val() == "0") {
        $("#divLoader").hide();
        $.alert({
            title: "",
            content: "Please Select Payment Method</br>",
            type: 'red'
        });
        return;
    }

    var paymentMethod = 2;
    var propertyId = 0;
    var nameonCard = "";
    var cardNumber = "";
    var cardMonth = 0;
    var cardYear = 0;
    var ccvNumber = "";
    var prospectID = 0;
    var amounttoPay = 0;
    var description = "";
    
    if ($("#hndTransMethod2").val() == "2") {
        paymentMethod = 2;
        propertyId = $("#hndUID").val();
        nameonCard = $("#txtNameonCard2").val();
        cardNumber = $("#txtCardNumber2").val();
        cardMonth = $("#ddlcardmonth2").val();
        cardYear = $("#ddlcardyear2").val();
        ccvNumber = $("#txtCCVNumber2").val();
        prospectID = $("#hdnOPId").val();
        amounttoPay = unformatText($("#sppayFees2").text());
        description = $("#lblpopcctitle").text();

        routingNumber = $("#txtRoutingNumber2").val();
        bankName = $("#txtBankName1").val();

        if (!nameonCard) {
            msg += "Please Enter Name on Card</br>";
        }
        if (cardNumber == "" || cardNumber.length != 16) {
            msg += "Please enter your 16 digit Card Number</br>";
        }
        if (cardMonth == "0") {
            msg += "Please enter Card Month</br>";
        }
        if (cardYear == "0") {
            msg += "Please enter Card Year</br>";
        }

        var GivenDate = '20' + cardYear + '-' + cardMonth + '-' + new Date().getDate();
        var CurrentDate = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

        GivenDate = new Date(GivenDate);
        CurrentDate = new Date(CurrentDate);

        if (GivenDate <= CurrentDate) {
            msg += "Your Credit Card Expired..</br>";
        }

        if (msg != "") {
            $("#divLoader").hide();
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
    } else {
        paymentMethod = 1;
        nameonCard = $("#txtAccountName2").val();
        cardNumber = $("#txtAccountNumber2").val();
        cardMonth = 0;
        cardYear = 0;
        ccvNumber = 0;
        routingNumber = $("#txtRoutingNumber2").val();
        bankName = $("#txtBankName2").val();
        amounttoPay = unformatText($("#sppayFees2").text());
        description = $("#lblpopcctitle").text();
        prospectID = $("#hdnOPId").val();
        propertyId = $("#hndUID").val();
        if (nameonCard == "") {
            msg += "Please Enter Account Name</br>";
        }
        if (cardNumber == "") {
            msg += "Please Enter Account Number</br>";
        }

        if (msg != "") {
            $("#divLoader").hide();
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
    }
        var model = {
            PID: propertyId,
            Name_On_Card: nameonCard,
            CardNumber: cardNumber,
            AccountNumber: cardNumber,
            CardMonth: cardMonth,
            CardYear: cardYear,
            CCVNumber: ccvNumber,
            Charge_Amount: amounttoPay,
            ProspectID: prospectID,
            Description: description,
         
            RoutingNumber: routingNumber,
            BankName: bankName,
            PaymentMethod: paymentMethod,
          
            lstApp: addApplicntArray,
        };
        $.alert({
            title: "",
            content: "You have chosen to pay $" + amounttoPay + " plus a $" + parseFloat(getProcessingFees()).toFixed(2) + " processing fee, your total will be $" + parseFloat(parseFloat(amounttoPay) + parseFloat(getProcessingFees())).toFixed(2) + ". Do you want to Pay Now?",
            type: 'blue',
            buttons: {
                yes: {
                    text: 'Yes',
                    action: function (yes) {
                        $.ajax({
                            url: "/ApplyNow/SavePaymentDetails/",
                            type: "post",
                            contentType: "application/json utf-8",
                            data: JSON.stringify(model),
                            dataType: "JSON",
                            success: function (response) {
                                $("#divLoader").hide();
                                if (response.Msg == "1") {
                                    //$("#carddetails").addClass("hidden");
                                    $(".payNext").removeAttr("disabled");
                                    $("#ResponseMsg").html("Payment Successfull");
                                    $.alert({
                                        title: "",
                                        content: "Payment Successfull",
                                        type: 'red'
                                    });
                                    getTransationLists($("#hdnUserId").val());
                                    getApplicantListsPrimary();
                                } else {
                                    $.alert({
                                        title: "",
                                        content: "Payment Failed",
                                        type: 'red'
                                    });
                                }
                            }
                        });
                    }
                },
                no: {
                    text: 'No',
                    action: function (no) {
                        $("#divLoader").hide();
                    }
                }
            }
        });
    
}
var getApplyNowList = function (id) {
    $("#divLoader").show();
    var model = {
        id: id
    }
    $.ajax({
        url: '/ApplyNow/GetApplyNowList',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            $("#txtBVFirstName").val(response.model.FirstName);
            $("#txtBVLastName").val(response.model.LastName);
            $("#txtBVPhone").val(response.model.Phone);
            $("#txtBVEmail").val(response.model.Email);
            $("#txtBVAddress").val(response.model.Address);
        }
    });
}

//17082019-code changed
var fillStateDDL_Home = function (countryid, selval) {
    $("#divLoader").show();
    var param = { CID: countryid };
    $.ajax({
        url: '/City/FillStateDropDownListByCountryID',
        method: "post",
        data: JSON.stringify(param),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#divLoader").hide();
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {
                $("#ddlStateHome").empty();
                $("#ddlStateHome").append("<option value='0'>--Select State--</option>");
                $.each(response, function (index, elementValue) {
                    $("#ddlStateHome").append("<option value=" + elementValue.ID + ">" + elementValue.StateName + "</option>");
                });
                $("#ddlStateHome").val(selval);
            }
        }
    });
}
var fillStateDDL_Home2 = function (countryid, selval) {
    $("#divLoader").show();
    var param = { CID: countryid };
    $.ajax({
        url: '/City/FillStateDropDownListByCountryID',
        method: "post",
        data: JSON.stringify(param),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#divLoader").hide();
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {
                $("#ddlStateHome2").empty();
                $("#ddlStateHome2").append("<option value='0'>--Select State--</option>");
                $.each(response, function (index, elementValue) {
                    $("#ddlStateHome2").append("<option value=" + elementValue.ID + ">" + elementValue.StateName + "</option>");
                });
                $("#ddlStateHome2").val(selval);
            }
        }
    });
}
var fillStateDDL_OfficeHEI = function (countryid, selval) {
    $("#divLoader").show();
    var param = { CID: countryid };
    $.ajax({
        url: '/City/FillStateDropDownListByCountryID',
        method: "post",
        data: JSON.stringify(param),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#divLoader").hide();
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {
                $("#ddlStateEmployeeHEI").empty();
                $("#ddlStateEmployeeHEI").append("<option value='0'>--Select State--</option>");
                $.each(response, function (index, elementValue) {
                    $("#ddlStateEmployeeHEI").append("<option value=" + elementValue.ID + ">" + elementValue.StateName + "</option>");
                });
                $("#ddlStateEmployeeHEI").val(selval);
            }
        }
    });
}
var fillStateDDL_Office = function (countryid, selval) {
    $("#divLoader").show();
    var param = { CID: countryid };
    $.ajax({
        url: '/City/FillStateDropDownListByCountryID',
        method: "post",
        data: JSON.stringify(param),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#divLoader").hide();
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {
                $("#ddlStateEmployee").empty();
                $("#ddlStateEmployee").append("<option value='0'>--Select State--</option>");
                $.each(response, function (index, elementValue) {
                    $("#ddlStateEmployee").append("<option value=" + elementValue.ID + ">" + elementValue.StateName + "</option>");
                });
                $("#ddlStateEmployee").val(selval);
            }
        }
    });
}
var fillStateDDL_EmeContact = function (countryid, selval) {
    $("#divLoader").show();
    var param = { CID: countryid };
    $.ajax({
        url: '/City/FillStateDropDownListByCountryID',
        method: "post",
        data: JSON.stringify(param),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#divLoader").hide();
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {
                $("#ddlStateContact").empty();
                $("#ddlStateContact").append("<option value='0'>--Select State--</option>");
                $.each(response, function (index, elementValue) {
                    $("#ddlStateContact").append("<option value=" + elementValue.ID + ">" + elementValue.StateName + "</option>");
                });
                $("#ddlStateContact").val(selval);
            }
        }
    });
}
var fillStateDDL = function () {
    $("#divLoader").show();
    var param = { CID: 1 };
    $.ajax({
        url: '/City/FillStateDropDownListByCountryID',
        method: "post",
        data: JSON.stringify(param),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#divLoader").hide();
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {
                $("#ddlState").empty();
                $("#ddlStatePersonal").empty();
                $("#ddlVState").empty();
                $("#ddlState").append("");
                $("#ddlStatePersonal").append("<option value='0'>--Select State--</option>");
                $("#ddlVState").append("<option value='0'>--Select State--</option>");
                $.each(response, function (index, elementValue) {
                    $("#ddlState").append("<option value=" + elementValue.ID + ">" + elementValue.StateName + "</option>");
                    $("#ddlStatePersonal").append("<option value=" + elementValue.ID + ">" + elementValue.StateName + "</option>");
                    $("#ddlVState").append("<option value=" + elementValue.ID + ">" + elementValue.StateName + "</option>");
                });
            }
        }
    });
}

var fillStateDDLReg_Home = function (countryid, selval) {
    $("#divLoader").show();
    var param = { CID: countryid };
    $.ajax({
        url: '/City/FillStateDropDownListByCountryID',
        method: "post",
        data: JSON.stringify(param),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#divLoader").hide();
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {
                $("#ddlStateIDDocReg").empty();
                $("#ddlStateIDDocReg").append("<option value='0'>--Select State--</option>");
                $.each(response, function (index, elementValue) {
                    $("#ddlStateIDDocReg").append("<option value=" + elementValue.ID + ">" + elementValue.StateName + "</option>");
                });
                $("#ddlStateIDDocReg").val(selval);

                $("#ddlStateReg").empty();
                $("#ddlStateReg").append("<option value='0'>--Select State--</option>");
                $.each(response, function (index, elementValue) {
                    $("#ddlStateReg").append("<option value=" + elementValue.ID + ">" + elementValue.StateName + "</option>");
                });
                $("#ddlStateReg").val(selval);
            }
        }
    });
}
var fillStateDDLReg_IDType = function (countryid, selval) {
    $("#divLoader").show();
    var param = { CID: countryid };
    $.ajax({
        url: '/City/FillStateDropDownListByCountryID',
        method: "post",
        data: JSON.stringify(param),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#divLoader").hide();
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {
                $("#ddlStateIDDocReg").empty();
                $("#ddlStateIDDocReg").append("<option value='0'>--Select State--</option>");
                $.each(response, function (index, elementValue) {
                    $("#ddlStateIDDocReg").append("<option value=" + elementValue.ID + ">" + elementValue.StateName + "</option>");
                });
                $("#ddlStateIDDocReg").val(selval);
            }
        }
    });
}
var fillCountryDropDownList = function () {
    $("#divLoader").show();
    $.ajax({
        url: '/City/FillCountryDropDownList',
        method: "post",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#divLoader").hide();
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {
                $("#txtCountry").empty();
                $("#txtCountry2").empty();
                $("#txtCountryOffice").empty();
                $("#txtEmergencyCountry").empty();
                $.each(response, function (index, elementValue) {
                    $("#txtCountry").append("<option value=" + elementValue.ID + ">" + elementValue.CountryName + "</option>");
                    $("#txtCountry2").append("<option value=" + elementValue.ID + ">" + elementValue.CountryName + "</option>");
                    $("#txtCountryOffice").append("<option value=" + elementValue.ID + ">" + elementValue.CountryName + "</option>");
                    $("#txtEmergencyCountry").append("<option value=" + elementValue.ID + ">" + elementValue.CountryName + "</option>");
                    $("#txtCountryOfficeHEI").append("<option value=" + elementValue.ID + ">" + elementValue.CountryName + "</option>");
                });
                $("#txtCountry").val(1);
                $("#txtCountry2").val(1);
                $("#txtCountryOffice").val(1);
                $("#txtEmergencyCountry").val(1);
                $("#txtCountryOfficeHEI").val(1);
                fillStateDDL_Home(1, 0);
                fillStateDDL_Office(1, 0);
                fillStateDDL_EmeContact(1);
                fillStateDDL_OfficeHEI(1);
            }
        }
    });
}
//17082019-fillStateDDL code changed
var fillCityList = function (stateid) {
    $("#divLoader").show();
    var params = { StateID: stateid };
    $.ajax({
        url: '/City/GetCityListbyState',
        method: "post",
        data: JSON.stringify(params),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#divLoader").hide();
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {

                $("#ddlCity").empty();
                $("#ddlCity").append("<option value='0'>--Select City--</option>");
                $.each(response, function (index, elementValue) {
                    $("#ddlCity").append("<option value=" + elementValue.ID + ">" + elementValue.CityName + "</option>");
                });
            }
        }
    });
}
var fillCityListHome = function (stateid) {
    $("#divLoader").show();
    var params = { StateID: stateid };
    $.ajax({
        url: '/City/GetCityListbyState',
        method: "post",
        data: JSON.stringify(params),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#divLoader").hide();
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {

                $("#ddlCityHome").empty();
                $("#ddlCityHome").append("<option value='0'>--Select City--</option>");
                $.each(response, function (index, elementValue) {

                    $("#ddlCityHome").append("<option value=" + elementValue.ID + ">" + elementValue.CityName + "</option>");

                });
            }
        }
    });
}
var fillCityListEmployee = function (stateid) {
    $("#divLoader").show();
    var params = { StateID: stateid };
    $.ajax({
        url: '/City/GetCityListbyState',
        method: "post",
        data: JSON.stringify(params),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#divLoader").hide();
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {

                $("#ddlCityEmployee").empty();
                $("#ddlCityEmployee").append("<option value='0'>--Select City--</option>");
                $.each(response, function (index, elementValue) {

                    $("#ddlCityEmployee").append("<option value=" + elementValue.ID + ">" + elementValue.CityName + "</option>");

                });
            }
        }
    });
}
var fillCityListContact = function (stateid) {
    $("#divLoader").show();
    var params = { StateID: stateid };
    $.ajax({
        url: '/City/GetCityListbyState',
        method: "post",
        data: JSON.stringify(params),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#divLoader").hide();
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {

                $("#ddlCityContact").empty();
                $("#ddlCityContact").append("<option value='0'>--Select City--</option>");
                $.each(response, function (index, elementValue) {

                    $("#ddlCityContact").append("<option value=" + elementValue.ID + ">" + elementValue.CityName + "</option>");


                });
            }
        }
    });
}
var addModelArray = [];
var noofcomapre = 0;



var addToCompare = function (modelname) {
    if ($("#btnCompare" + modelname).is(':checked') == true) {

        if (noofcomapre < 3) {
            $("#chkCompareid" + modelname).removeClass("hidden");
            $("#chkCompareid" + modelname).prop("checked", true);
            $("#divCompare").removeClass("hidden");
            $("#divMainSearch").addClass("hidden");
            $("#btncompRemove" + modelname).removeClass("hidden");
            // $("#btnCompare" + modelname).addClass("hidden");

            // $("#chkComp" + modelname).addClass("hidden");
            addModelArray.push(modelname);

            noofcomapre = addModelArray.length;
            $("#btncompare").text("Compare(" + noofcomapre + ")");
            getCompareModelList();
        } else {
            $.alert({
                title: "",
                content: "Please Select up to three to compare ",
                type: 'red'
            })
            $("#btnCompare" + modelname).removeAttr('checked');
        }
    } else {
        addModelArray = jQuery.grep(addModelArray, function (value) {
            return value != modelname;
        });
        //console.log(addModelArray)
        noofcomapre = addModelArray.length;
        $("#btncompare").text("Compare(" + noofcomapre + ")");
        getCompareModelList();
        if (noofcomapre == 0) {
            $("#divCompare").addClass("hidden");
            $("#divMainSearch").removeClass("hidden");
        }
    }
}
var removeToCompare = function (modelname) {
    $("#chkCompareid" + modelname).addClass("hidden");
    $("#btncompRemove" + modelname).addClass("hidden");
    $("#btnCompare" + modelname).removeClass("hidden");
    addModelArray.pop(modelname);
    noofcomapre = addModelArray.length;
    $("#btncompare").text("Compare(" + noofcomapre + ")");
    getCompareModelList();
    if (noofcomapre == 0) {
        $("#divCompare").addClass("hidden");
        $("#divMainSearch").removeClass("hidden");
    }
}
var getCompareModelList = function () {
    $("#divLoader").show();
    var maxrent = 0;
    if ($("#txtMaxRent").val() == "0") {
        //maxrent = "10000";
    }
    else {
        maxrent = $("#txtMaxRent").val();
    }

    var bedroom = 0;
    if (!$("#ddlRoom").val()) {
        bedroom = 0;
    }
    else {
        bedroom = $("#ddlRoom").val();
    }
    var availdate = $("#txtDate").val();

    var furnished = $("#ddlFurnishedUnit").val();

    var model = { PID: 8, AvailableDate: availdate, Current_Rent: maxrent, Bedroom: bedroom, SortOrder: "0", Furnished: furnished };
    $.ajax({
        url: "/Property/GetPropertyModelList/",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            if (response != null) {
                $("#listModelCompare").empty();
                //console.log(addModelArray)
                var chtml = "<div class='col-sm-3' style='margin-top:230px'>" +
                    "<div class='col-sm-12'center>" +
                    "<span ></span>" +
                    "</div>" +
                    "<div class='col-sm-12'><span><br /> </span></div>" +
                    "<div class='col-sm-12'><span> </span></div> <div class='col-sm-12'><span><b>Monthly Rent:</b></span></div>" +
                    "<div class='col-sm-12'><span><b>Square feet:</b></span></div>" +
                    "<div class='col-sm-12'><span><b>Bedrooms:</b></span></div>" +
                    "<div class='col-sm-12'><span ><b>Bathrooms:</b></span></div>" +
                    "<div class='col-sm-12'><span><b>Available:</b></span></div>" +
                    "<div class='col-sm-12'><span><b>Occupancy:</b></span></div>" +
                    "</div>";
                $.each(response.model, function (elementType, value) {
                    for (var j = 0; j < addModelArray.length; j++) {
                        if (addModelArray[j] == value.Building) {
                            chtml += "<div class='col-sm-3'>" +
                                "<div class='col-sm-12 center'>" +
                                "<span>" +
                                "<a href = '#' onclick='displayCompImg(\"" + value.Building + "\")'> <img src='/content/assets/img/plan/" + value.FloorPlan + "' class='modelimg'></a>" +
                                "</span></div>" +
                                "<div class='col-sm-12 center'><span><b>" + value.Building + "</b> </span></div>" +
                                "<div class='col-sm-12 center'>" +
                                "<span>" +
                                "<button type='button' class='btn-success btn' onclick=getPropertyUnitList(\"" + value.Building + "\") style='width:100%;padding:5px;'>Select</button><br />" +
                                "</span></div>" +
                                "<div class='col-sm-12 center'>" +
                                "<span>" + value.RentRange + " </span></div><div class='col-sm-12 center'><span>" + value.Area + "</span></div>" +
                                "<div class='col-sm-12 center'>" +
                                "<span id=''>" + value.Bedroom + " </span></div><div class='col-sm-12 center'><span id=''>" + value.Bathroom + " </span></div>" +
                                "<div class='col-sm-12 center'>" +
                                "<span>" + value.NoAvailable + " </span></div> <div class='col-sm-12 center'><span id=''>" + value.Bedroom + "</span></div></div>";

                        }
                    }
                });
                $("#listModelCompare").append(chtml);
            }
        }
    });
}
var getPropertyUnitList = function (modelname, filldata) {
    
    /*SOHAN 12062020 START */
    getPropertyFloarListRebind(modelname, filldata);
    $("#imgFloorCoordinate").attr("src", "");
    $("#imgFloorCoordinateDiv").empty();
    $('#popUnitPlan').empty();
    /*SOHAN 12062020 END */
    
    $('#hndBuilding').val(modelname);
    $('#divPriceTable').addClass('hidden');
    $('#divSelectUnit').removeClass('hidden');
    $("#hndIsModelSelected").val(1);
   
    $("#imgFloorPlan").attr("src", "/content/assets/img/plan/" + modelname + ".jpg");
    $("#imgFloorPlan2").attr("src", "/content/assets/img/plan/" + modelname + "Det.jpg");
    $("#imgFloorPlanNew").attr("src", "/content/assets/img/plan/" + modelname + ".jpg");

    $("#popModelCompare").modal("hide");
    $("#lblUnitNo").text("");

    $("#lblUnitNo").text("Model: #" + modelname);
    $("#divLoader").show();
    var maxrent = 0;
    if ($("#txtMaxRent").val() == "0") {
        maxrent = 100000; 
    }
    else {
        maxrent = $("#txtMaxRent").val();
    }

    var bedroom = 0;
    if (!$("#ddlRoom").val()) {
        bedroom = 0;
    }
    else {
        bedroom = $("#ddlRoom").val();
    }
    var availdate = $("#txtDate").val();
    var leasetermid = $("#hndLeaseTermID").val();

    var prospectid = $("#hdnOPId").val();

    var model = { ModelName: modelname, AvailableDate: availdate, Current_Rent: maxrent, Bedroom: bedroom, LeaseTermID: leasetermid, ProspectId: prospectid };

    $.ajax({
        url: "/Property/GetPropertyModelUnitList/",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            if (response != null) {
                $("#listUnit>tbody").empty();
                $("#listUnitNew>tbody").empty();
                $("#popUnitPlan").empty();
                var html = "";
                var htmlNew = "";
                $.each(response.model, function (elementType, value) {
                    //var todaysDate = new Date();
                    //var sixtyday = availdate.getMonth() + 1;
                    //alert(sixtyday)
                    if (value.IsDisable == 1) {
                     
                            html = " <tr id='unitdiv_" + value.UID + "' data-floorid = '" + value.FloorNoText + "'><td><a href='javascript:void(0);' onclick='getPropertyUnitDetails(" + value.UID + ")'><h5 style='width: 80px;'>#" + value.UnitNo + " </h5></a> </td><td style='text-align: center;width=100px'>$" + formatMoney(value.Current_Rent) + "</td><td style='text-align: center; width:45%'>" + value.Premium + "</td><td style='text-align: center;width=100px'>" + value.AvailableDateText + "</td></tr>";
                            htmlNew = " <tr id='unitdiv_" + value.UID + "' data-floorid = '" + value.FloorNoText + "'><td class='unit'><a href='javascript:void(0);' onclick='getPropertyUnitDetails(" + value.UID + ")'><h5 style='width: 80px;'>#" + value.UnitNo + " </h5></a> </td><td class='price'>$" + formatMoney(value.Current_Rent) + "</td><td class='available'>" + value.AvailableDateText + "</td><td class='charges'><a href='javascript:void(0);' class='genric-btn success' onclick='showMonthlyCharges(" + value.UID + ")'>Monthly Charges</a></td ></tr>";
                        
                    } else {
                        if (elementType == 0) {
                            html = " <tr class='select-unit' id='unitdiv_" + value.UID + "' data-floorid = '" + value.FloorNoText + "'><td><a href='javascript:void(0);' onclick='getPropertyUnitDetails(" + value.UID + ")'><h5 style='width: 80px;'>#" + value.UnitNo + " </h5></a> </td><td style='text-align: center;width=100px'>$" + formatMoney(value.Current_Rent) + "</td><td style='text-align: center; width:45%'>" + value.Premium + "</td><td style='text-align: center;width=100px'>" + value.AvailableDateText + "</td></tr>";
                            htmlNew = " <tr class='select-unit' id='unitdiv_" + value.UID + "' data-floorid = '" + value.FloorNoText + "'><td class='unit'><a href='javascript:void(0);' onclick='getPropertyUnitDetails(" + value.UID + ")'><h5 style='width: 80px;'>#" + value.UnitNo + " </h5></a> </td><td class='price'>$" + formatMoney(value.Current_Rent) + "</td><td class='available'>" + value.AvailableDateText + "</td><td class='charges'><a href ='javascript:void(0);' class='genric-btn success' onclick='showPriceTable(" + value.UID + ")'> Apply</a><a href='javascript:void(0);' class='genric-btn success' onclick='showMonthlyCharges(" + value.UID + ")'>Monthly Charges</a></td ></tr>";
                        } else {
                            html = " <tr id='unitdiv_" + value.UID + "' data-floorid = '" + value.FloorNoText + "'><td><a href='javascript:void(0);' onclick='getPropertyUnitDetails(" + value.UID + ")'><h5 style='width: 80px;'>#" + value.UnitNo + " </h5></a> </td><td style='text-align: center;width=100px'>$" + formatMoney(value.Current_Rent) + "</td><td style='text-align: center; width:45%'>" + value.Premium + "</td><td style='text-align: center;width=100px'>" + value.AvailableDateText + "</td></tr>";
                            htmlNew = " <tr id='unitdiv_" + value.UID + "' data-floorid = '" + value.FloorNoText + "'><td class='unit'><a href='javascript:void(0);' onclick='getPropertyUnitDetails(" + value.UID + ")'><h5 style='width: 80px;'>#" + value.UnitNo + " </h5></a> </td><td class='price'>$" + formatMoney(value.Current_Rent) + "</td><td class='available'>" + value.AvailableDateText + "</td><td class='charges'><a href ='javascript:void(0);' class='genric-btn success' onclick='showPriceTable(" + value.UID + ")'> Apply</a><a href='javascript:void(0);' class='genric-btn success' onclick='showMonthlyCharges(" + value.UID + ")'>Monthly Charges</a></td ></tr>";
                        }
                    }
                    
                    $("#listUnit>tbody").append(html);
                    $("#listUnitNew>tbody").append(htmlNew);
                    $("#lblArea22").text(value.Area);
                    $("#lblBed22").text(value.Bedroom);
                    $("#lblBath22").text(value.Bathroom);
                    $("#lblArea33").text(value.Area);
                    $("#lblBed33").text(value.Bedroom);
                    $("#lblBath33").text(value.Bathroom);
                    $("#lblRent33").text((value.Current_Rent).toFixed(2));
                    $("#lblOccupancy22").text((parseInt(value.Bedroom) * 2).toString());
                    $("#lblfloorPlan").text(modelname);
                }); 
            }
            
            goToStep(2, 2,0);
        }
    });
   
    
}



function displayImg() {
    $("#popFloorPlan").modal("show");
}


function displayCompImg(modname) {
    $("#imgFloorPlan2").attr("src", "/content/assets/img/plan/" + modname + "Det.jpg");
    $("#popFloorPlan").modal("show");
}
function displayComp() {

    $("#ex1").modal("show");
}
var SaveUpdateDocumentVerification = function () {
    $("#divLoader").show();
    var msg = "";
    var documentVerificationID = $("#hdnDocumentVerificationId").val();
    var prospectID = $("#hdnOPId").val();
    var documentType = $("#ddlDocumentType").val();
    var documentName = $("#txtDocumentName").val();
    var documentState = $("#ddlState").val();
    var documentIdNumber = $("#txtBVIDNumber").val();


    if (documentType == "0") {
        msg += "Please Select The Document Type </br>";
    }
    if (!documentIdNumber) {
        msg += "Please enter ID Number </br>";
    }
    if (msg != "") {
        $.alert({
            title: "",
            content: msg,
            type: 'red'
        });
        $("#divLoader").hide();
        return;
    }

    $formData = new FormData();

    $formData.append('DocID', documentVerificationID);
    $formData.append('ProspectusID', prospectID);
    $formData.append('DocumentType', documentType);
    $formData.append('DocumentName', documentName);
    $formData.append('DocumentState', documentState);
    $formData.append('DocumentIDNumber', documentIdNumber);
    var photo = document.getElementById('wizard-picture');
    if (photo.files.length > 0) {
        for (var i = 0; i < photo.files.length; i++) {
            $formData.append('file-' + i, photo.files[i]);
        }
        $.ajax({
            url: '/ApplyNow/SaveDocumentVerification',
            type: 'post',
            data: $formData,
            contentType: false,
            processData: false,
            dataType: 'json',
            success: function (response) {
                $("#divLoader").hide();
            }
        });
    } else {
        $.alert({
            content: "Please Upload Proof Document",
            type: 'blue'
        });
        $("#divLoader").hide();
    }
}
var saveLeaseDoc = function () {
    var userid = $("#hdnOPId").val();
    $("#divLoader").show();
    var param = { TenantID: userid };
    $.ajax({
        url: "/ProspectVerification/PDFBuilder",
        method: "post",
        data: JSON.stringify(param),
        contentType: "application/json; charset=utf-8", // content type sent to server
        dataType: "json", //Expected data format from server
        success: function (response) {
            $("#divLoader").hide();
            window.open("/Content/assets/img/Document/" + response.result, "popupWindow", "width=900,height=600,scrollbars=yes");
            //signLeaseDoc(response.result);
        }
    });
}

var SaveLeaseDocumentVerification = function () {
    $("#divLoader").show();

    var PID = $("#hdnOPId").val();

    $formData = new FormData();

    $formData.append('ProspectusID', PID);
    var photo = document.getElementById('upleasedoc');
    if (photo.files.length > 0) {
        for (var i = 0; i < photo.files.length; i++) {
            $formData.append('file-' + i, photo.files[i]);
        }

        $.ajax({
            url: '/Verification/SaveLeaseDocumentVerification',
            type: 'post',
            data: $formData,
            contentType: false,
            processData: false,
            dataType: 'json',
            success: function (response) {
                $("#divLoader").hide();
                $.alert({
                    title: "",
                    content: "Progress Saved.",
                    type: 'blue'
                });
            }
        });
    }
    else {
        $("#divLoader").hide();
        $.alert({
            title: "",
            content: "Please Upload Lease Agreement",
            type: 'blue'
        });
    }
}
var paidamt = 0;
var getTransationLists = function (userid) {
    $("#divLoader").show();
    var model = {
        TenantID: userid,
    }
    $.ajax({
        url: "/Transaction/GetOnlineTransactionList",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            $("#tblTransaction>tbody").empty();

            $.each(response.model, function (elementType, elementValue) {
                $("#Divtranslist").removeClass("hidden");

                $("#btnpaynext").removeProp("disabled");
                var html = "<tr data-value=" + elementValue.TransID + ">";
                html += "<td>" + elementValue.ApplicantName + "(" + elementValue.ApplicantType + ")</td>";
                html += "<td>" + elementValue.Transaction_DateString + "</td>";
                html += "<td>$" + parseFloat(elementValue.Charge_Amount).toFixed(2) + "</td>";
                html += "<td>" + elementValue.Transaction_Type + "</td>";
                html += "<td>" + elementValue.Description + "</td>";
                html += "<td>Paid</td>";
                html += "</tr>";
                $("#tblTransaction>tbody").append(html);
                paidamt += parseFloat(elementValue.Charge_Amount);
            });

            setTimeout(function () {
                if (paidamt == (totpaid + totnotpaid) && (totpaid + totnotpaid) > 0) {
                    $("#carddetails").addClass("hidden");
                    $("#getting-startedTimeRemainingClock").addClass("hidden");
                }
            }, 1500);
        }
    });
}
var clearBank = function () {
    $("#hndTransMethod").val(1);
    $("#chkBank").addClass("active");
    $("#chkACH").removeClass("active");
    $("#divCard").addClass("hidden");
    $("#divBank").removeClass("hidden");

    $("#lblPaymentDet").text("Enter Bank Account Details.");
}
var clearCard = function () {
    $("#hndTransMethod").val(2);
    $("#chkACH").addClass("active");
    $("#chkBank").removeClass("active");
    $("#divCard").removeClass("hidden");
    $("#divBank").addClass("hidden");

    $("#lblPaymentDet").text("Enter Credit Card Details.");
}
var noofpark = 0;
var fillUnitParkingList = function () {
    $("#divLoader").show();
    var model = { UID: $("#hndUID").val(), PType: 2 };
    $.ajax({
        url: '/Parking/GetUnitParkingList',
        method: "post",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(model),
        dataType: "json",
        success: function (response) {
            var countPark = response.length;
            $("#divLoader").hide();
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {
                $('#ddlParking').empty();
                $("#lblParkSpace").text("");
                $("#lblAssginPakingSpace").text("");
                var dhtml = '';
                $.each(response, function (index, elementValue) {
                    if (elementValue.Status == 0) {
                        dhtml += "<option value='" + elementValue.ParkingID + "' selected='selected' data-value='" + elementValue.ParkingID + "'>" + elementValue.ParkingName + "</option>";
                        countPark--;
                    }
                    var html = "";
                    html += "<span style='text-decoration:underline; font - weight:bold;'>  #" + elementValue.ParkingName + " </span>";
                    $("#lblParkSpace").append(html);
                    $("#lblAssginPakingSpace").append(html);
                    $("#lblAssginPakingSpace1").append(html);
                    if (elementValue.Type == 2) {
                        $("#parkUnit").text("#" + elementValue.ParkingName);
                    }
                    noofpark += 1;
                });
                $('#ddlParking').append(dhtml);
            }
            if (response.length == countPark) {
                $('#btnAddVehicle').attr('disabled', 'disabled');
            }
            else {
                $('#btnAddVehicle').removeAttr('disabled');
            }
        }
    });
}

var fillParkingList = function () {
    $("#divLoader").show();
    var tenantID = $("#hdnOPId").val();
    var bedRoom = $("#hndBedRoom").val();
    var param = { TenantID: tenantID, BedRoom: bedRoom };
    //url: '/Parking/GetParkingList',
    $.ajax({
        url: '/Parking/GetParkingListByBedRoom',
        method: "post",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(param),
        dataType: "json",
        success: function (response) {
            $("#divLoader").hide();
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {
                addParkingArray = [];
                $("#tblParking>tbody").empty();
                $.each(response, function (index, elementValue) {
                    var html = '';
                    if ($("#lblBed").text() == "1" || $("#lblBed").text() == "2") {
                        $("#ModalLongDesc").text("Your Lease includes one assigned parking space. You can purchase one additional parking space for a monthly charge of $100 by clicking the “Add Item”. Additional parking spaces are limited and available on a first-come, first-serve basis.");
                    }
                    else {
                        $("#ModalLongDesc").text("Your Lease includes two assigned parking spaces. You can purchase two additional parking space for a monthly charge of $100 by clicking the “Add Item”. Additional parking spaces are limited and available on a first-come, first-serve basis.");
                    }
                    html += '<tr data-value="' + elementValue.ParkingID + '">';
                    html += '<td class="pds-id hidden" style="color:#3d3939;">' + elementValue.ParkingID + '</td>';
                    html += '<td class="pds-firstname" style="color:#3d3939;">' + elementValue.ParkingName + '</td>';
                    html += '<td class="pds-firstname" style="color:#3d3939;">$' + parseFloat(elementValue.Charges).toFixed(2) + '</td>';
                    html += '<td class="pds-firstname" style="color:#3d3939;"><input type="checkbox" id="chkAddParking"  class="addame" value=' + elementValue.ParkingID + ' onclick="selectAddParking(this)" ' + ($("#lblparkingplace").text() == elementValue.ParkingID ? "checked='checked'" : "") + ' ></td>';
                    html += '</tr>';

                    if ($("#lblparkingplace").text() == elementValue.ParkingID) {
                        addParkingArray.push({ ParkingID: elementValue.ParkingID });
                    }
                    $("#tblParking>tbody").append(html);
                });
            }
        }
    });
}
var fillStorageListApplyNow = function (orderby, sortby) {

    $("#divLoader").show();
    var tenantID = $("#hdnOPId").val();
    var param = { TenantID: tenantID, OrderBy: orderby, SortBy: sortby };
    $.ajax({
        url: '/Storage/GetStorageList',
        method: "post",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(param),
        dataType: "json",
        success: function (response) {
            $("#divLoader").hide();
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {
                addStorageArray = [];
                $("#tblStorage1>tbody").empty();
                $.each(response, function (index, elementValue) {
                    var html = '';
                    html += '<tr data-value="' + elementValue.StorageID + '">';
                    html += '<td class="pds-id hidden" style="color:#3d3939;width:0%;text-align:center;">' + elementValue.StorageID + '</td>';
                    html += '<td class="pds-firstname" style="color:#3d3939;width:18%;text-align:center;">' + elementValue.StorageName + '</td>';
                    html += '<td class="pds-firstname" style="color:#3d3939;width:48%;">' + elementValue.Description + '</td>';
                    html += '<td class="pds-firstname" style="color:#3d3939;width:20%;text-align:center;">$' + parseFloat(elementValue.Charges).toFixed(2) + '</td>';
                    html += '<td class="pds-firstname" style="color:#3d3939;width:18%;text-align:center;"><input type="checkbox" name="chkAddStorage1 id="chkAddStorage1"  class="addstorage1" value=' + elementValue.StorageID + ' onclick="selectAddStorage(this)" ' + ($("#lblstorageplace").text() == elementValue.StorageID ? "checked='checked'" : "") + '></td>';
                    html += '</tr>';
                    if ($("#lblstorageplace").text() == elementValue.StorageID) {
                        addStorageArray.push({ StorageID: elementValue.StorageID });
                    }
                    $("#tblStorage1>tbody").append(html);
                });


            }
        }
    });
};
var fillFOBList = function () {
}
var fillPetPlaceList = function () {
    $("#divLoader").show();
    $.ajax({
        url: '/PetManagement/GetPetPlaceList',
        method: "post",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $("#divLoader").hide();
            if ($.trim(response.error) != "") {
                //this.cancelChanges();
            } else {
                addPetPlaceArray = [];
                $("#tblPetPlace>tbody").empty();
                $.each(response, function (index, elementValue) {
                    var html = '';
                    html += '<tr data-value="' + elementValue.PetPlaceID + '">';
                    html += '<td class="pds-id hidden" style="color:#3d3939;">' + elementValue.PetPlaceID + '</td>';
                    html += '<td class="pds-firstname" style="color:#3d3939;">' + elementValue.PetPlace + '</td>';
                    html += '<td class="pds-firstname" style="color:#3d3939;">$' + parseFloat(elementValue.Charges).toFixed(2) + '/mo</td>';
                    html += '<td class="pds-firstname" style="color:#3d3939;"><input type="checkbox" name="chkpet id="chkAddPetPlace"  class="addpet" value=' + elementValue.PetPlaceID + ' onclick="selectAddPetPlace(this)" ' + ($("#lblpetplace").text() == elementValue.PetPlaceID ? "checked='checked'" : "") + '></td>';
                    html += '</tr>';
                    if ($("#lblpetplace").text() == elementValue.PetPlaceID) {
                        addPetPlaceArray.push({ PetPlaceID: elementValue.PetPlaceID });
                    }

                    $("#tblPetPlace>tbody").append(html);
                });
            }
        }
    });
}
var addParkingArray = [];
function selectAddParking(cont) {
    var ischeck = $(cont).is(':checked');
    $('.addame').removeAttr("checked");
    $(cont).prop("checked", ischeck);
    addParkingArray = [];
    $("#hndAdditionalParking").val(0);
    $('.addame').each(function (i, obj) {
        if ($(obj).is(':checked')) {
            var pkid = $(obj).attr("value");
            addParkingArray.push({ ParkingID: pkid });
            $("#hndAdditionalParking").val(pkid);
        }
    });

}
var addStorageArray = [];
function selectAddStorage(cont) {
    var ischeck = $(cont).is(':checked')
    $('.addstorage1').removeAttr("checked");
    $(cont).prop("checked", ischeck);
    $("#lblstorageplace").text(0);
    addStorageArray = [];
    $('.addstorage1').each(function (i, obj) {
        if ($(obj).is(':checked')) {
            var pkid = $(obj).attr("value");
            addStorageArray.push({ StorageID: pkid });
            $("#lblstorageplace").text(addStorageArray[0].StorageID);
        }
    });
}
var addPetPlaceArray = [];
function selectAddPetPlace(cont) {
    var ischeck = $(cont).is(':checked');
    $('.addpet').removeAttr("checked");
    $(cont).prop("checked", ischeck);
    addPetPlaceArray = [];
    $('.addpet').each(function (i, obj) {
        if ($(obj).is(':checked')) {
            var pkid = $(obj).attr("value");
            addPetPlaceArray.push({ PetPlaceID: pkid });
        }
    });
}

var saveupdateParking = function () {
    $("#divLoader").show();
    var tenantID = $("#hdnOPId").val();
    var uid = $("#hndUID").val();
    var param = { TenantID: tenantID, lstTParking: addParkingArray, UID: uid };
    $.ajax({
        url: "/Parking/SaveUpdateTenantParking",
        method: "post",
        data: JSON.stringify(param),
        contentType: "application/json; charset=utf-8", // content type sent to server
        dataType: "json",
        async: false,//Expected data format from server
        success: function (response) { $("#divLoader").show(); }
    }).done(function (response) {
       
        //$("#popParking").PopupWindow("close");
        $('#popParking').modal('hide');
        
        totalAmt = parseFloat(totalAmt) - unformatText($("#lblAdditionalParking").text());
        $("#lblVehicleFees").text("$0.00");
        $("#lblVehicleFees1").text("0.00");
        $("#lblAdditionalParking").text(formatMoney(parseFloat(response.totalParkingAmt).toFixed(2)));
        $("#lblMonthly_AditionalParking").text("$" + parseFloat(response.totalParkingAmt).toFixed(2));
        $("#lblProrated_AditionalParking").text("$" + parseFloat(parseFloat(response.totalParkingAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2));
        $("#lblProrated_AditionalParking_Print").text(parseFloat(parseFloat(response.totalParkingAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2));
        $("#lblparkingplace").text(addParkingArray.length > 0 ? addParkingArray[0].ParkingID : 0);
        fillUnitParkingList();
        if (parseInt(response.numOfParking) == 1) {
            $("#hndParkingID").val(0);
            if ($("#lblBed").text() == "1") {
                $("#hndNumberOfParking").val(2);
                $("#lblVehicleFees").text("$30.00");
                $("#lblVehicleFees1").text("30.00");
                $("#spanVechReg").text("Vehicle Registration (2 Vehicles):");
                $("#spanVechReg1").text("Vehicle Registration (2 Vehicles):");

                $("#HndAddParkingCount").val(1);
            }
            else if ($("#lblBed").text() == "2") {
                $("#hndNumberOfParking").val(2);
                $("#lblVehicleFees").text("30.00");
                $("#lblVehicleFees1").text("30.00");
                $("#spanVechReg").text("Vehicle Registration (2 Vehicles)");
                $("#spanVechReg1").text("Vehicle Registration (2 Vehicles)");
                $("#HndAddParkingCount").val(1);
            }
            else if ($("#lblBed").text() == "3") {

                $("#hndNumberOfParking").val(3);
                $("#lblVehicleFees").text("$45.00");
                $("#lblVehicleFees1").text("45.00");
                $("#spanVechReg").text("Vehicle Registration (3 Vehicles):");
                $("#spanVechReg1").text("Vehicle Registration (3 Vehicles):");
                $("#HndAddParkingCount").val(1);
            }
        } else if (parseInt(response.numOfParking) == 2) {
            $("#hndParkingID").val(0);
            if ($("#lblBed").text() == "3") {
                $("#hndNumberOfParking").val(4);
                $("#lblVehicleFees").text("60.00");
                $("#lblVehicleFees1").text("60.00");
                $("#spanVechReg").text("Vehicle Registration (4 Vehicles):");
                $("#spanVechReg1").text("Vehicle Registration (4 Vehicles):");
                $("#HndAddParkingCount").val(1);
            }
        }
        else {
            $("#hndParkingID").val(0);
            $("#hndNumberOfParking").val(0);
            $("#lblVehicleFees").text("$00.00");
            $("#lblVehicleFees1").text("00.00");
            $("#HndAddParkingCount").val(0);
            $("#spanVechReg").text("Vehicle Registration:");
            $("#spanVechReg1").text("Vehicle Registration:");
        }
        $("#lbltotalAmount").text(formatMoney((parseFloat(response.totalParkingAmt) + parseFloat(totalAmt)).toFixed(2)));
        totalAmt = (parseFloat(response.totalParkingAmt) + parseFloat(totalAmt)).toFixed(2);
        $("#lblMonthly_TotalRent").text("$" + formatMoney(totalAmt));
        $("#lblMonthly_TotalRent_print").text(formatMoney(totalAmt));
        $("#lblProrated_TotalRent").text("$" + formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
        $("#lblProrated_TotalRent_print").text(formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
        $("#lblProratedRent").text(formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
        $("#lblProratedRent6").text(formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));

        $("#ftotal").text(formatMoney((parseFloat(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday), 10) + parseFloat(unformatText($("#fdepo").text()), 10) + parseFloat(unformatText($("#fpetd").text()), 10) + parseFloat(unformatText($("#lblVehicleFees").text()), 10) + parseFloat($("#lblPetDNAAmt").text(), 10)).toFixed(2)));
        $("#lbtotdueatmov6").text(formatMoney((parseFloat(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday), 10) + parseFloat(unformatText($("#fdepo").text()), 10) + parseFloat(unformatText($("#fpetd").text()), 10) + parseFloat(unformatText($("#lblVehicleFees").text()), 10) + parseFloat($("#lblPetDNAAmt").text(), 10)).toFixed(2)));
        if (response.mas != "Progress saved") {
            addParkingArray = [];
            $("#lblparkingplace").text("0");
        }
        $.alert({
            title: "",
            content: response.mas,
            type: 'red'
        });
        $("#divLoader").hide();
    });
}
var saveupdateFOB = function () {
}
var saveupdatePetPlace = function () {
    $("#divLoader").show();
    var isAgree = $("#chkAgreePetTerms").is(":checked") ? "1" : "0";
    if (isAgree == "0") {
        if (addPetPlaceArray.length > 0) {
            $.alert({
                title: "",
                content: "Please agree to the pet policy",
                type: 'red'
            })
            return;
        }
    }
    var tenantID = $("#hdnOPId").val();
    var param = { PropertyID: 8, TenantID: tenantID, lstTPetPlace: addPetPlaceArray };
    $.ajax({
        url: "/PetManagement/SaveUpdateTenantPetPlace",
        method: "post",
        data: JSON.stringify(param),
        contentType: "application/json; charset=utf-8", // content type sent to server
        dataType: "json", //Expected data format from server
        success: function (response) {
            if (response.result == 0) {
                $.alert({
                    title: "",
                    content: response.msg,
                    type: 'red'
                });
                addStorageArray = [];
                $("#lblpetplace").text(0);
                fillPetPlaceList();
            } else {
                $.alert({
                    title: "",
                    content: "Progress Saved.",
                    type: 'blue'
                });
                $("#popPetPlace").modal("hide");
                $("#divLoader").hide();
                totalAmt = parseFloat(totalAmt) - parseFloat(unformatText($("#lblPetFee").text()));
                $("#lblPetDeposit").text("0.00");
                $("#lblPetDNAAmt").text("0.00");
                $("#lbpetdna6").text("0.00");

                $("#fpetd").text("$0.00");
                $("#lbpetd6").text("0.00");
                $("#fpetdna").text("$0.00");
                $("#lblPetFee").text(formatMoney(parseFloat(response.totalPetPlaceAmt).toFixed(2)));
                $("#lblMonthly_PetRent").text("$"+parseFloat(response.totalPetPlaceAmt).toFixed(2));
                $("#lblProrated_PetRent").text("$"+parseFloat(parseFloat(response.totalPetPlaceAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2));

                $("#lblpetplace").text(addPetPlaceArray.length > 0 ? addPetPlaceArray[0].PetPlaceID : 0);
                if (parseInt(response.numOfPet) == 1) {
                    $("#spanPetDNAFee1").text("Pet DNA Fee (1 Pet):");
                    $("#spanPetDNAFee2").text("Pet DNA Fee (1 Pet):");
                    $("#spanPetDNAFee3").text("Pet DNA Fee (1 Pet):");
                    $("#spanPetDNAFee4").text("Pet DNA Fee (1 Pet):");

                    $("#lblPetDeposit").text(formatMoney("500.00"));
                    $("#spPetNRDeposit").text("Pet Deposit:");

                    $("#lblPetDNAAmt").text(parseFloat(response.petDNAFees).toFixed(2));
                    $("#lbpetdna6").text(parseFloat(response.petDNAFees).toFixed(2));
                    $("#fpetdna").text("$"+parseFloat(response.petDNAFees).toFixed(2));

                    $("#fpetd").text("$500.00");
                    $("#spfpetd").text("Pet Deposit:");

                    $("#lbpetd6").text("500.00");
                    $("#spPetNRDep6").text("Pet Deposit:");

                    $("#hndPetPlaceID").val(1);
                    $("#btnAddPet").removeAttr("disabled");
                    $("#hndPetPlaceCount").val(1);

                    checkAndDeletePet(1);
                } else if (parseInt(response.numOfPet) == 2) {
                    $("#spanPetDNAFee1").text("Pet DNA Fee (2 Pets):");
                    $("#spanPetDNAFee2").text("Pet DNA Fee (2 Pets):");
                    $("#spanPetDNAFee3").text("Pet DNA Fee (2 Pets):");
                    $("#spanPetDNAFee4").text("Pet DNA Fee (2 Pets):");

                    $("#lblPetDeposit").text(formatMoney("750.00"));
                    $("#spPetNRDeposit").text("Pet Deposit:");

                    $("#lblPetDNAAmt").text((parseFloat(response.petDNAFees) * parseInt(response.numOfPet)).toFixed(2));

                    $("#lbpetdna6").text((parseFloat(response.petDNAFees) * parseInt(response.numOfPet)).toFixed(2));
                    $("#fpetdna").text("$"+(parseFloat(response.petDNAFees) * parseInt(response.numOfPet)).toFixed(2));

                    $("#fpetd").text("$750.00");
                    $("#spPetNRDep6").text("Pet Deposit:");

                    $("#lbpetd6").text("750.00");
                    $("#spfpetd").text("Pet Deposit:");

                    $("#hndPetPlaceID").val(2);
                    $("#btnAddPet").removeAttr("disabled");
                    $("#hndPetPlaceCount").val(2);
                }
                else {
                    $("#spanPetDNAFee1").text("Pet DNA Fee:");
                    $("#spanPetDNAFee2").text("Pet DNA Fee:");
                    $("#spanPetDNAFee3").text("Pet DNA Fee:");
                    $("#spanPetDNAFee4").text("Pet DNA Fee:");

                    $("#spPetNRDeposit").text("Pet Deposit:");
                    $("#spPetNRDep6").text("Pet Deposit:");
                    $("#spfpetd").text("Pet Deposit:");

                    $("#hndPetPlaceID").val(0);
                    $("#btnAddPet").css("background-color", "#B4ADA5").attr("disabled", "disabled");
                    $("#hndPetPlaceCount").val(0);
                    checkAndDeletePet(3);
                }

                totalAmt = (parseFloat(response.totalPetPlaceAmt) + parseFloat(totalAmt)).toFixed(2);
                $("#lbltotalAmount").text(formatMoney(totalAmt));
                $("#lblMonthly_TotalRent").text("$"+formatMoney(totalAmt));
                $("#lblProrated_TotalRent").text("$"+formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
                $("#lblProratedRent").text(formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
                $("#lblProratedRent6").text(formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));

                $("#ftotal").text(formatMoney((parseFloat(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday), 10) + parseFloat(unformatText($("#fdepo").text()), 10) + parseFloat(unformatText($("#fpetd").text()), 10) + parseFloat(unformatText($("#lblVehicleFees").text()), 10) + parseFloat($("#lblPetDNAAmt").text(), 10)).toFixed(2)));
                $("#lbtotdueatmov6").text(formatMoney((parseFloat(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday), 10) + parseFloat(unformatText($("#fdepo").text()), 10) + parseFloat(unformatText($("#fpetd").text()), 10) + parseFloat(unformatText($("#lblVehicleFees").text()), 10) + parseFloat($("#lblPetDNAAmt").text(), 10)).toFixed(2)));
            }
        }
    });
}
var saveupdateStorage = function () {
    $("#divLoader").show();
    var tenantID = $("#hdnOPId").val();
    var param = { TenantID: tenantID, lstTStorage: addStorageArray };
    var model = {
        Id: $("#lblstorageplace").text()
    };
    $.ajax({
        url: "/Storage/SaveUpdateTenantStorage",
        method: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(param),
        dataType: "JSON",
        success: function (response) {
            if (response.result == 1) {
                totalAmt = parseFloat(totalAmt) - parseFloat(unformatText($("#lblStorageUnit").text()));
                if (response.totalStorageAmt == null) {
                    response.totalStorageAmt = 0;
                }
                $("#lblStorageUnit").text(formatMoney(response.totalStorageAmt));

                $("#lblMonthly_Storage").text("$"+formatMoney(response.totalStorageAmt));
                $("#lblProrated_Storage").text("$"+parseFloat(parseFloat(response.totalStorageAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2));

                $("#popStorage").modal("hide");
                $("#divLoader").hide();

                totalAmt = (parseFloat(response.totalStorageAmt) + parseFloat(totalAmt)).toFixed(2);

                $("#lblMonthly_TotalRent").text("$"+formatMoney(parseFloat(totalAmt)));
                $("#lbltotalAmount").text(formatMoney(parseFloat(totalAmt)));


                $("#lblProrated_TotalRent").text("$"+formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
                $("#lblProratedRent").text(formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
                $("#lblProratedRent6").text(formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
                $("#ftotal").text(formatMoney((parseFloat(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday), 10) + parseFloat(unformatText($("#fdepo").text()), 10) + parseFloat(unformatText($("#fpetd").text()), 10) + parseFloat(unformatText($("#lblVehicleFees").text()), 10)  + parseFloat($("#lblPetDNAAmt").text(), 10)).toFixed(2)));
                $("#lbtotdueatmov6").text(formatMoney((parseFloat(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday), 10) + parseFloat(unformatText($("#fdepo").text()), 10) + parseFloat(unformatText($("#fpetd").text()), 10) + parseFloat(unformatText($("#lblVehicleFees").text()), 10) + parseFloat($("#lblPetDNAAmt").text(), 10)).toFixed(2)));
                $.alert({
                    title: "",
                    content: "Progress Saved.",
                    type: 'blue'
                });
            }

        }
    });
};


//Sohan
var addApplicant = function (at) {
    
    var modal = $("#popApplicant");
    //Sachin M 09 July
    if ($("#hndCreditPaid").val() == 1) {
        $('#divCreditCheckPayment').addClass('hidden');
        $('#divchkCCPay').addClass('hidden');

    } else {
        $("#divchkCCPay").removeClass("hidden");
    }
 
    if (at == 1) {
        $("#divPopSSN,#divPopIDType,#divPopIDState,#divPopIDNumber,#divPopCountry,#divPopAddressLine1,#divPopAddressLine2,#divPopState,#divPopCity,#divPopZip").addClass("hidden");
        //modal.find('.modal-content').css("height", "375px");
        modal.find('.modal-title').text('Add Co-Applicant');

        $("#divchkCCPay").addClass("hidden");
        $("#popApplicant").modal("show");
        $("#ddlApplicantType").text("Co-Applicant");
        $("#ddlARelationship").empty();
        opt = "<option value='0'>Select Relationship</option>";
        opt += "<option value='1'>Spouse</option>";
        opt += "<option value='2'>Partner</option>";
        opt += "<option value='3'>Adult Child</option>";
        opt += "<option value='4'>Friend/Roommate</option>";
        $("#ddlARelationship").append(opt);
        $("#ddlARelationship").val(0).change();

        $("#ddlApplicantGender").val(0);
        $("#ddlApplicantGender").trigger('change');
        $("#txtApplicantOtherGender").val('');

        $("#txtADateOfBirth").removeClass("hidden").val("");
        $('#txtHDateOfBirth').addClass("hidden");
        $('#txtMDateOfBirth').addClass("hidden");
        $('#txtGDateOfBirth').addClass('hidden');

        $("#appphone").removeClass("hidden");
        $("#appemail").removeClass("hidden");
        $("#txtApplicantMiddleName").val("");
        $("#txtApplicantPhone").val("");
        $("#txtApplicantEmail").val("");
        $("#txtApplicantSSNNumber").val('');
        $("#txtApplicantSSNNumber").attr("data-value", '');

        $("#ddlApplicantDocumentTypePersonal").val(0).change();
        $("#ddlApplicantStateDoc").val(0).change();
        $("#txtApplicantIDNumber").val('');
        $("#txtApplicantIDNumber").attr("data-value", '');

        $("#txtApplicantCountry").val(1);
        $("#txtApplicantCountry").trigger('change');
        $("#txtAddressLine1").val("");
        $("#txtAddressLine2").val("");
        $("#ddlApplicantState").val(0).change();
        $("#txtApplicantCity").val("");
        $("#txtApplicantZip2").val("");
    }
    else if (at == 2) {
        $("#divPopSSN,#divPopIDType,#divPopIDState,#divPopIDNumber,#divPopCountry,#divPopAddressLine1,#divPopAddressLine2,#divPopState,#divPopCity,#divPopZip").addClass("hidden");
        //modal.find('.modal-content').css("height", "300px");
        $("#divchkCCPay").addClass("hidden");
        modal.find('.modal-title').text('Add Minor');
        $("#popApplicant").modal("show");
        $("#ddlApplicantType").text("Minor");
        $("#ddlARelationship").empty();
        opt = "<option value='0'>Select Relationship</option>";
        opt += "<option value='1'>Family Member</option>";
        opt += "<option value='2'>Child</option>";
        $("#ddlARelationship").append(opt);
        $("#ddlARelationship").val(0).change();
        $("#txtApplicantMiddleName").val("");
        $("#ddlApplicantGender").val(0);
        $("#ddlApplicantGender").trigger('change');
        $("#txtApplicantOtherGender").val('');

        $("#txtMDateOfBirth").removeClass("hidden").val('');
        $('#txtHDateOfBirth').addClass("hidden");
        $('#txtADateOfBirth').addClass("hidden");
        $('#txtGDateOfBirth').addClass('hidden');

        $("#appphone").addClass("hidden");
        $("#appemail").addClass("hidden");
    }
    else if (at == 3) {
        $("#divPopSSN,#divPopIDType,#divPopIDState,#divPopIDNumber,#divPopCountry,#divPopAddressLine1,#divPopAddressLine2,#divPopState,#divPopCity,#divPopZip").addClass("hidden");
        //modal.find('.modal-content').css("height", "375px");
        modal.find('.modal-title').text('Add Guarantor');
        $("#divchkCCPay").addClass("hidden");
        $("#popApplicant").modal("show");
        $("#ddlApplicantType").text("Guarantor");
        $("#ddlARelationship").empty();
        opt = "<option value='0'>Select Relationship</option>";
        opt += "<option value='1'>Family</option>";
        opt += "<option value='2'>Friend</option>";
        $("#ddlARelationship").append(opt);
        $("#ddlARelationship").val(0).change();
        $("#txtApplicantMiddleName").val("");
        $("#ddlApplicantGender").val(0);
        $("#ddlApplicantGender").trigger('change');

        $("#txtApplicantOtherGender").val('');

        $("#txtGDateOfBirth").removeClass("hidden").val('');
        $('#txtHDateOfBirth').addClass("hidden");
        $('#txtADateOfBirth').addClass("hidden");
        $('#txtMDateOfBirth').addClass('hidden');

        $("#appphone").removeClass("hidden");
        $("#appemail").removeClass("hidden");
        $("#txtApplicantPhone").val('');
        $("#txtApplicantEmail").val('');

        $("#txtApplicantSSNNumber").val('');
        $("#txtApplicantSSNNumber").attr("data-value", '');

        $("#ddlApplicantDocumentTypePersonal").val(0).change();
        $("#ddlApplicantStateDoc").val(0).change();
        $("#txtApplicantIDNumber").val('');
        $("#txtApplicantIDNumber").attr("data-value", '');

        $("#txtApplicantCountry").val(1);
        $("#txtApplicantCountry").trigger('change');
        $("#txtAddressLine1").val('');
        $("#txtAddressLine2").val('');
        $("#ddlApplicantState").val(0).change();
        $("#txtApplicantCity").val('');
        $("#txtApplicantZip2").val('');
    }
    clearApplicant();
    $("#popApplicant").modal("show");
};
var saveupdatePrimaryApplicant = function (callFrom) {
    $("#divLoader").show();
    var checkEmail = 0;
    var msg = "";
    var aid = $("#hndApplicantID").val();
    var prospectID = $("#hdnOPId").val();
    var fname = $("#txtApplicantFirstName").val();
    var mname = $("#txtApplicantMiddleName").val();
    var lname = $("#txtApplicantLastName").val();
    var aphone = unformatText($("#txtApplicantPhone").val());
    var aemail = $("#txtApplicantEmail").val();
    var agender = $("#ddlApplicantGender").val();
    var type = $("#ddlApplicantType").text();
    var aotherGender = $("#txtApplicantOtherGender").val();
    var applicantSSNNumber = $("#txtApplicantSSNNumber").attr("data-value");
    var applicantIDNumber = "";
    var applicantIDType = 0;
    var applicantStateDoc = 0;

    var addressLine1 = $("#txtAddressLine1").val();
    var addressLine2 = $("#txtAddressLine2").val();
    var applicantState = $("#ddlApplicantState").val();
    var applicantCountry = $("#txtApplicantCountry").val();
    var applicantCity = $("#txtApplicantCity").val();
    var applicantApplicantZip2 = $("#txtApplicantZip2").val();
    var nossn = " ";

    if ($("#chkNoSSN").is(":checked")) {
        nossn = 1;
    }
    else {
        nossn = 0;
    }
    if (type == "Co-Applicant") {
        checkEmail = 1;
        var dob = $("#txtADateOfBirth").val();
    } else if (type == "Minor") {
        dob = $("#txtMDateOfBirth").val();
    }
    else if (type == "Guarantor") {
        dob = $("#txtGDateOfBirth").val();
    }
    else {
        checkEmail = 1;
        dob = $("#txtHDateOfBirth").val();
    }
    var relationship = $("#ddlARelationship").val();

    if (!fname) {
        msg += "Enter Applicant First Name</br>";
    }
    if (!lname) {
        msg += "Enter Applicant Last Name</br>";
    }
    if (relationship == '0') {
        msg += "Select Relationship</br>";
    }
    if (aphone) {
        if (aphone.length < 10) {
            msg += "Please enter 10 digit phone number </br>";
        }
    }
    if (checkEmail == 1) {
        if (!aemail) {
            msg += "Enter Email</br>";
        }
        else {
            if (!validateEmail(aemail)) {
                msg += "Please Fill Valid Email </br>";
            }
        }
    }

    if (!dob) {
        msg += "Enter Applicant DateOfBirth</br>";
    }

    if (!agender || agender == "0") {
        msg += "Please Select The Gender </br>";
    }
    else if (agender == "3") {
        if (!aotherGender) {
            msg += "Please Fill The Other Gender </br>";
        }
    }
    if (type == 'Primary Applicant') {
        $('#txtDateOfBirth').val(dob);
        $('#ddlGender').val(agender);

        var ssnCheck = $("#txtApplicantSSNNumber").val().replace(/-|\s/g, "");
        if (agender == '3') {
            $('#txtOtherGender').val(aotherGender);
        }
        else {
            $('#txtOtherGender').val('');
        }
        if (agender == "2") {
            if (!mname) {
                msg += "Please Fill The Middle Name </br>";
            }
        }
        if (ssnCheck) {
            if (ssnCheck.length < 9) {
                msg += "SSN# must be 9 digit</br>";
            }
        } else if (!applicantSSNNumber) {
            msg += "Please Fill Valid SSN</br>";
        }
        if (!addressLine1) {
            msg += "Enter Address Line 1</br>";
        } if (applicantState <= 0) {
            msg += "Enter State </br>";
        } if (applicantCountry <= 0) {
            msg += "Select Country</br>";
        } if (applicantCity <= 0) {
            msg += "Enter the City</br>";
        } if (applicantApplicantZip2 <= 0) {
            msg += "Select Zip</br>";
        }
    }
    if (msg != "") {
        $("#divLoader").hide();
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
        MiddleName: mname,
        LastName: lname,
        Phone: aphone,
        Email: aemail,
        Gender: agender,
        DateOfBirth: dob,
        TenantID: prospectID,
        Type: type,
        Relationship: relationship,
        OtherGender: aotherGender,
        SSN: applicantSSNNumber,
        IDNumber: applicantIDNumber,
        IDType: applicantIDType,
        State: applicantStateDoc,
        HomeAddress1: addressLine1,
        HomeAddress2: addressLine2,
        StateHome: applicantState,
        Country: applicantCountry,
        CityHome: applicantCity,
        ZipHome: applicantApplicantZip2,
        IsInternational: nossn,
    };
    $.ajax({
        url: "/Tenant/Applicant/SaveUpdateApplicant/",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        async: false,
        success: function (response) { $("#divLoader").show(); }
    }).done(function (response) {
        if (callFrom == 1) {
            $("#divLoader").hide();
            $.alert({
                title: "",
                content: "Progress Saved.",
                type: 'blue',
            });
            getApplicantListsPrimary();
            $("#popApplicant").modal("hide");
        }
        else {
            if ($("#hndTransMethod1").val() == "2") {
                var paymentMethod = 2;
                var propertyId = $("#hndUID").val();
                var nameonCard = $("#txtNameonCard1").val();
                var cardNumber = $("#txtCardNumber1").val();
                var cardMonth = $("#ddlcardmonth1").val();
                var cardYear = $("#ddlcardyear1").val();
                var ccvNumber = $("#txtCCVNumber1").val();
                var prospectID = $("#hdnOPId").val();
                var amounttoPay = unformatText($("#sppayFees").text());
                var description = $("#lblpopcctitle").text();
                var routingNumber = $("#txtRoutingNumber1").val();
                var bankName = $("#txtBankName1").val();
            } else {
                var paymentMethod = 1;
                var nameonCard = $("#txtAccountName1").val();
                var cardNumber = $("#txtAccountNumber1").val();
                var cardMonth = 0;
                var cardYear = 0;
                var ccvNumber = 0;
                var routingNumber = $("#txtRoutingNumber1").val();
                var bankName = $("#txtBankName1").val();
                var amounttoPay = unformatText($("#sppayFees").text());
                var description = $("#lblpopcctitle").text();
                var prospectID = $("#hdnOPId").val();
                var propertyId = $("#hndUID").val();
            }
            var model = {
                PID: propertyId,
                Name_On_Card: nameonCard,
                CardNumber: cardNumber,
                CardMonth: cardMonth,
                CardYear: cardYear,
                CCVNumber: ccvNumber,
                Charge_Amount: amounttoPay,
                Charge_Type: "4",
                ProspectID: prospectID,
                Description: description,
                GL_Trans_Description: description,
                RoutingNumber: routingNumber,
                BankName: bankName,
                PaymentMethod: paymentMethod,
                AID: $("#hndApplicantID").val(),
                FromAcc: $("#hndFromAcc").val(),
                IsSaveAcc: $("#chkSaveAcc0").is(":checked") ? "1" : "0",
            };
            $.ajax({
                url: "/ApplyNow/saveNewPayment/",
                type: "post",
                contentType: "application/json utf-8",
                data: JSON.stringify(model),
                dataType: "JSON",
                async: false,
                success: function (response) { $("#divLoader").show(); }
            }).done(function (response) {
                if (response.Msg != "") {
                    if (response.Msg == "1") {
                        $("#divLoader").hide();
                        $("#ResponseMsg1").html("Payment successfull");
                        window.location = "/ApplyNow/Index/" + $("#hdnUserId").val();
                    } else {
                        $("#divLoader").hide();
                        $.alert({
                            title: "",
                            content: "Payment failed",
                            type: 'red'
                        });
                    }
                }
            });
        }
    });
}


var totpaid = 0;
var totnotpaid = 0;

var getApplicantListsPrimary = function () {
    $("#divLoader").show();
    var model = {
        TenantID: $("#hdnOPId").val(),
    }
    $.ajax({
        url: "/Applicant/GetApplicantList",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        async:false,
        success: function (response) { $("#divLoader").show(); }
    }).done(function (response) {
        addApplicntArray = [];
        totpaid = 0;
        totnotpaid = 0;
        $("#tblApplicant").empty();
        $("#tblApplicant15>tbody").empty();
        $("#tblApplicant15p>tbody").empty();
        $("#tblRespo15>tbody").empty();
        $("#tblRespo15p>tbody").empty();
        $("#tblApplicantFinal").empty();
        $("#tblApplicantMinor").empty();
        $("#tblApplicantGuarantor").empty();
        $("#tblResponsibilityPay").empty();
        $("#tblPayment>tbody").empty();
        $("#tblEmailCoapplicant>tbody").empty();
        var totalFinalFees = 0;
        var noofapl = 0;
        var noofCapl = 0;
        var noofminor = 0;
        var noofgur = 0;
        var applicantFees = $("#lblApplicationFees").text();
        var guarantorFees = $("#lblGuarantorFees").text();

        var nofbed = $("#lblBed").text();
        var allowedAppli = 0;
        var allowedMinor = 0;
        var totalPeople = (parseInt(nofbed) * 2);

        $("#divLoader").hide();
        $.each(response.model, function (elementType, elementValue) {

            if (elementValue.Type == "Co-Applicant") {
                noofCapl += 1;
            }
            else if (elementValue.Type == "Minor") {
                noofminor += 1;
            }
            else if (elementValue.Type == "Primary Applicant") {
                noofapl += 1;
            }
            else {
                noofgur += 1;
            }

            var html = '';
            var prhtml = '';
            var pprhtml = '';
            var emailhtml = '';
            if (elementValue.Type != "Primary Applicant") {
                html += "<div class='col-sm-4 box-two proerty-item' id='div_" + elementValue.ApplicantID + "'>" +
                    "<div class='form-group col-sm-3 text-center'><br>" +
                    "<img src='/Content/assets/img/user.png' style='width:100px;'></div>" +
                    "<div class='form-group col-sm-9' style='margin-top: 10px !important;'><b>" + elementValue.FirstName + " " + elementValue.LastName + "</b><br/>" +
                    "<label> " + elementValue.Type + " </label><br/>" +
                    "<label><a class='cust-link' href='javascript:void(0)' onclick='goToEditApplicant(" + elementValue.ApplicantID + ")'>Edit/Complete Information</a></label>&nbsp;&nbsp;&nbsp;&nbsp;" +
                    "<label><a class='cust-link' href='javascript:void(0)' onclick='delApplicant(" + elementValue.ApplicantID + ")'><span class='fa fa-trash' ></span></a></label>";
                if (parseInt(elementValue.CreditPaid) == 0 && parseInt(elementValue.HasSSN) == 1) {
                    $("#editApplicantFees").text("Credit Check Fees");
                    $("#editApplicantFeesVal").text($("#hndAppCreditFees").val());
                    //html += "<label><a href='javascript:void(0)' onclick='payFeePop(" + elementValue.ApplicantID + ",4)'>Pay Credit Check Fees</a></label>";
                } else if (parseInt(elementValue.CreditPaid) == 1 && parseInt(elementValue.BackGroundPaid) == 0) {
                    //$("#editApplicantFees").text("Background Check Fees");
                    //$("#editApplicantFeesVal").text($("#hndAppBackgroundFees").val());
                    //html += "<label><a href='javascript:void(0)' onclick='payFeePop(" + elementValue.ApplicantID + ",5)'>Pay Background Check Fees</a></label>";
                }
                html += "</div><div><center><label><b>Status: " + elementValue.ComplStatus + "</b></label></center></div></div>";
                //$("#divchkCCPay").addClass("hidden");
                $("#divCreditCheckPayment").addClass("hidden");
            }
            else {
                html += "<div class='col-sm-4 box-two proerty-item'>" +
                    "<div class='form-group col-sm-3 text-center'><br>" +
                    "<img src='/Content/assets/img/user.png' style='width:100px;'></div>" +
                    "<div class='form-group col-sm-9' style='margin-top: 10px !important;'><b>" + elementValue.FirstName + " " + elementValue.LastName + "</b><br/>" +

                    "<label>Primary Applicant</label><br/>" +
                    "<label><a class='cust-link' href='javascript:void(0)' onclick='goToEditApplicant(" + elementValue.ApplicantID + ")'>Edit/Complete Information</a></label><br/>";
                if (parseInt(elementValue.CreditPaid) == 0) {
                    $("#editApplicantFees").text("Credit Check Fees");
                    $("#editApplicantFeesVal").text($("#hndAppCreditFees").val());
                    //html += "<label><a href='javascript:void(0)' onclick='payFeePop(" + elementValue.ApplicantID + ",4)'>Pay Credit Check Fees</a></label>";
                } else if (parseInt(elementValue.CreditPaid) == 1 && parseInt(elementValue.BackGroundPaid) == 0) {
                    //$("#editApplicantFees").text("Background Check Fees");
                    //$("#editApplicantFeesVal").text($("#hndAppBackgroundFees").val());
                    ///html += "<label><a href='javascript:void(0)' onclick='payFeePop(" + elementValue.ApplicantID + ",5)'>Pay Background Check Fees</a></label>";
                }
                html += "</div><div><center><label><b>Status: " + elementValue.ComplStatus + "</b></label></center></div></div>";
                //$("#divchkCCPay").addClass("hidden");
                $("#divCreditCheckPayment").addClass("hidden");
            }
            if (elementValue.Type == "Primary Applicant" || elementValue.Type == "Co-Applicant") {
                prhtml += "<div class='row respo' data-id='" + elementValue.ApplicantID + "'>" +
                    "<div class='col-sm-12>" +
                    "<div class='col-sm-12 box-padding'>" +
                    "<div class='col-lg-12'>" +
                    "<div class='col-lg-12'>" + elementValue.Type + ": <b>" + elementValue.FirstName + " " + elementValue.LastName + "</b>" +

                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +

                    "<div class='col-sm-12  col-lg-4'>" +
                    "<div class='col-sm-12 box-padding'>" +
                    "<div class='col-lg-12 text-center'><b>Move In Charges</b></div>" +
                    "<div class='col-lg-12'>" +
                    "<input class='input-box payper' type='text' id='txtpayper" + elementValue.ApplicantID + "' value='" + elementValue.MoveInPercentage + "' />" +
                    "<span class='input-box-span'><b>%</b></span>" +
                    "</div>" +

                    "<div class='col-sm-12 custResponsibility'>&nbsp;</div>" +

                    "<div class='col-lg-12'>" +
                    "<input class='input-box' value='" + parseFloat(elementValue.MoveInCharge).toFixed(2) + "' type='text' id='txtpayamt" + elementValue.ApplicantID + "' />" +
                    "<span class='input-box-span'><b>$</b></span>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "<div class='col-sm-12  col-lg-4'>" +
                    "<div class='col-sm-12 box-padding '>" +
                    "<div class='col-lg-12 box-padding text-center'><b>Monthly Payment</b></div>" +
                    "<div class='col-lg-12'>" +
                    "<input class='input-box payperMo' value='" + elementValue.MonthlyPercentage + "' type='text' id='txtpayperMo" + elementValue.ApplicantID + "' />" +
                    "<span class='input-box-span'><b>%</b></span>" +
                    "</div>" +

                    "<div class='col-sm-12 custResponsibility'>&nbsp;</div>" +

                    "<div class='col-lg-12'>" +
                    "<input class='input-box' value='" + parseFloat(elementValue.MonthlyPayment).toFixed(2) + "' type='text' id='txtpayamtMo" + elementValue.ApplicantID + "' />" +
                    "<span class='input-box-span'><b>$</b></span>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "<div class='col-sm-12  col-lg-4'>" +
                    "<div class='col-sm-12 box-padding '>" +
                    "<div class='col-lg-12 box-padding text-center'><b>Administation Fee</b></div>" +
                    "<div class='col-lg-12'>" +
                    "<input class='input-box payperAF' value='" + elementValue.AdminFeePercentage + "' type='text' id='txtpayperAF" + elementValue.ApplicantID + "' />" +
                    "<span class='input-box-span'><b>%</b></span>" +
                    "</div>" +

                    "<div class='col-sm-12 custResponsibility'>&nbsp;</div>" +

                    "<div class='col-lg-12'>" +
                    "<input class='input-box' value='" + parseFloat(elementValue.AdminFee).toFixed(2) + "' type='text' id='txtpayamtAF" + elementValue.ApplicantID + "' />" +
                    "<span class='input-box-span'><b>$</b></span>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +

                    "<div class='col-sm-12 custResponsibility'>&nbsp;</div>" +

                    "<div class='col-sm-12'><hr /></div>";
            }

            if (elementValue.Type == "Primary Applicant" || elementValue.Type == "Co-Applicant" || elementValue.Type == "Guarantor") {
                if (elementValue.Type == "Primary Applicant" || elementValue.Type == "Co-Applicant") {
                    if (parseInt(elementValue.CreditPaid) == 1) {
                        totpaid += parseFloat(elementValue.AppCreditFees);
                        pprhtml += "<tr data-id='" + elementValue.ApplicantID + "'><td style='width:18%; padding:6px;'>" + elementValue.Type + " </td><td style='width:40%; padding:6px;'>" + elementValue.FirstName + " " + elementValue.LastName + " (Credit Check)</td><td style='width:14%; padding:6px;'>$" + parseFloat(elementValue.AppCreditFees).toFixed(2) + "</td><td style='width:14%; padding:6px;text-align: center;'>Paid</td><td></td></tr>";
                    }
                    else {
                        if (elementValue.Type == "Primary Applicant") {
                            addApplicntArray.push({ ApplicantID: elementValue.ApplicantID, Type: 4 });
                            totalFinalFees += parseFloat(elementValue.AppCreditFees);
                            pprhtml += "<tr data-id='" + elementValue.ApplicantID + "'><td style='width:18%; padding:6px;'>" + elementValue.Type + " </td><td style='width:40%; padding:6px;'>" + elementValue.FirstName + " " + elementValue.LastName + " (Credit Check)</td><td style='width:14%; padding:6px;'>$" + parseFloat(elementValue.AppCreditFees).toFixed(2) + "</td><td style='width:14%; padding:6px;'><input type='checkbox' id='chkPayAppFees' checked disabled style='display: inline;float:left;'/><span style='color:red;display: inline;float:right;margin-top:-16px'>(Unpaid)</span></td><td></td></tr>";
                        } else {
                            if (elementValue.HasSSN == 1) {
                                pprhtml += "<tr data-id='" + elementValue.ApplicantID + "'><td style='width:18%; padding:6px;'>" + elementValue.Type + " </td><td style='width:40%; padding:6px;'>" + elementValue.FirstName + " " + elementValue.LastName + " (Credit Check)</td><td style='width:14%; padding:6px;'>$" + parseFloat(elementValue.AppCreditFees).toFixed(2) + "</td><td style='width:14%; padding:6px;'><input type='checkbox' class='chkPayAppFees" + elementValue.ApplicantID + "4' id='chkPayAppFees" + elementValue.ApplicantID + "' onclick='addAppFess(" + elementValue.AppCreditFees + "," + elementValue.ApplicantID + ",4)' style='display: inline;float:left;'/><span style='color:red;display: inline;float:right;margin-top:-16px'>(Unpaid)</span></td><td><input type='button' id='btnSendPayLink" + elementValue.ApplicantID + "4' style='width:150px;' onclick='sendPayLinkEmail(" + elementValue.AppCreditFees + "," + elementValue.ApplicantID + ",4,\"" + elementValue.Email + "\")' value='Send Payment Link'/></td></tr>";
                            } else {
                                pprhtml += "<tr data-id='" + elementValue.ApplicantID + "'><td style='width:18%; padding:6px;'>" + elementValue.Type + " </td><td style='width:40%; padding:6px;'>" + elementValue.FirstName + " " + elementValue.LastName + " (Credit Check)</td><td style='width:14%; padding:6px;'>$" + parseFloat(elementValue.AppCreditFees).toFixed(2) + "</td><td style='width:14%; padding:6px;'><input type='checkbox' class='chkPayAppFees" + elementValue.ApplicantID + "4' id='chkPayAppFees" + elementValue.ApplicantID + "' disabled onclick='addAppFess(" + elementValue.AppCreditFees + "," + elementValue.ApplicantID + ",4)' style='display: inline;float:left;'/><span style='color:red;display: inline;float:right;margin-top:-16px'>(Unpaid)</span></td><td></td></tr>";

                            }
                        }
                        totnotpaid += parseFloat(elementValue.AppCreditFees);
                    }
                    if (parseInt(elementValue.BackGroundPaid) == 1) {
                        totpaid += parseFloat(elementValue.AppBackGroundFees);
                        pprhtml += "<tr data-id='" + elementValue.ApplicantID + "'><td style='width:18%; padding:6px;'>" + elementValue.Type + " </td><td style='width:40%; padding:6px;'>" + elementValue.FirstName + " " + elementValue.LastName + " (Background Check)</td><td style='width:14%; padding:6px;'>$" + parseFloat(elementValue.AppBackGroundFees).toFixed(2) + "</td><td style='width:14%; padding:6px;text-align: center;'>Paid</td><td></td></tr>";
                    }
                    else {
                        if (elementValue.Type == "Primary Applicant") {
                            totalFinalFees += parseFloat(elementValue.AppBackGroundFees);
                            addApplicntArray.push({ ApplicantID: elementValue.ApplicantID, Type: 5 });
                            pprhtml += "<tr data-id='" + elementValue.ApplicantID + "'><td style='width:18%; padding:6px;'>" + elementValue.Type + " </td><td style='width:40%; padding:6px;'>" + elementValue.FirstName + " " + elementValue.LastName + " (Background Check)</td><td style='width:14%; padding:6px;'>$" + parseFloat(elementValue.AppBackGroundFees).toFixed(2) + "</td><td style='width:14%; padding:6px;'><input type='checkbox' id='chkPayAppFees'  checked disabled style='display: inline;float:left;'/><span style='color:red;display: inline;float:right;margin-top:-16px'>(Unpaid)</span></td><td></td></tr>";
                        } else {
                            if (elementValue.StepCompleted >= 10) {
                                pprhtml += "<tr data-id='" + elementValue.ApplicantID + "'><td style='width:18%; padding:6px;'>" + elementValue.Type + " </td><td style='width:40%; padding:6px;'>" + elementValue.FirstName + " " + elementValue.LastName + " (Background Check)</td><td style='width:14%; padding:6px;'>$" + parseFloat(elementValue.AppBackGroundFees).toFixed(2) + "</td><td style='width:14%; padding:6px;'><input type='checkbox' class='chkPayAppFees" + elementValue.ApplicantID + "5' id='chkPayAppFees" + elementValue.ApplicantID + "' onclick='addAppFess(" + elementValue.AppBackGroundFees + "," + elementValue.ApplicantID + ",5)' style='display: inline;float:left;'/><span style='color:red;display: inline;float:right;margin-top:-16px'>(Unpaid)</span></td><td><input type='button' id='btnSendPayLink" + elementValue.ApplicantID + "5' style='width:150px;' onclick='sendPayLinkEmail(" + elementValue.AppBackGroundFees + "," + elementValue.ApplicantID + ",5,\"" + elementValue.Email + "\")' value='Send Payment Link'/></td></tr>";
                            } else {
                                pprhtml += "<tr data-id='" + elementValue.ApplicantID + "'><td style='width:18%; padding:6px;'>" + elementValue.Type + " </td><td style='width:40%; padding:6px;'>" + elementValue.FirstName + " " + elementValue.LastName + " (Background Check)</td><td style='width:14%; padding:6px;'>$" + parseFloat(elementValue.AppBackGroundFees).toFixed(2) + "</td><td style='width:14%; padding:6px;'><input type='checkbox' class='chkPayAppFees" + elementValue.ApplicantID + "5' id='chkPayAppFees" + elementValue.ApplicantID + "' disabled onclick='addAppFess(" + elementValue.AppBackGroundFees + "," + elementValue.ApplicantID + ",5)' style='display: inline;float:left;'/><span style='color:red;display: inline;float:right;margin-top:-16px'>(Unpaid)</span></td><td></td></tr>";

                            }
                        }
                        totnotpaid += parseFloat(elementValue.AppBackGroundFees);
                    }
                }
                else {
                    if (parseInt(elementValue.CreditPaid) == 1) {
                        totpaid += parseFloat(elementValue.GuarCreditFees);
                        pprhtml += "<tr data-id='" + elementValue.ApplicantID + "'><td style='width:18%; padding:6px;'>" + elementValue.Type + " </td><td style='width:40%; padding:6px;'>" + elementValue.FirstName + " " + elementValue.LastName + " (Credit Check)</td><td style='width:14%; padding:6px;'>$" + parseFloat(elementValue.GuarCreditFees).toFixed(2) + "</td><td style='width:14%; padding:6px;text-align: center;'>Paid</td><td></td></tr>";
                    }
                    else {
                        if (elementValue.HasSSN == 1) {
                            pprhtml += "<tr data-id='" + elementValue.ApplicantID + "'><td style='width:18%; padding:6px;'>" + elementValue.Type + " </td><td style='width:40%; padding:6px;'>" + elementValue.FirstName + " " + elementValue.LastName + " (Credit Check)</td><td style='width:14%; padding:6px;'>$" + parseFloat(elementValue.GuarCreditFees).toFixed(2) + "</td><td style='width:14%; padding:6px;'><input type='checkbox' class='chkPayAppFees" + elementValue.ApplicantID + "4' id='chkPayAppFees" + elementValue.ApplicantID + "' onclick='addAppFess(" + elementValue.GuarCreditFees + "," + elementValue.ApplicantID + ",4)' style='display: inline;float:left;'/><span style='color:red;display: inline;float:right;margin-top:-16px'>(Unpaid)</span></td><td><input type='button' id='btnSendPayLink" + elementValue.ApplicantID + "4' style='width:150px;' onclick='sendPayLinkEmail(" + elementValue.GuarCreditFees + "," + elementValue.ApplicantID + ",4,\"" + elementValue.Email + "\")' value='Send Payment Link'/></td></tr>";
                        } else {
                            pprhtml += "<tr data-id='" + elementValue.ApplicantID + "'><td style='width:18%; padding:6px;'>" + elementValue.Type + " </td><td style='width:40%; padding:6px;'>" + elementValue.FirstName + " " + elementValue.LastName + " (Credit Check)</td><td style='width:14%; padding:6px;'>$" + parseFloat(elementValue.GuarCreditFees).toFixed(2) + "</td><td style='width:14%; padding:6px;'><input type='checkbox' class='chkPayAppFees" + elementValue.ApplicantID + "4' id='chkPayAppFees" + elementValue.ApplicantID + "' disabled onclick='addAppFess(" + elementValue.GuarCreditFees + "," + elementValue.ApplicantID + ",4)' style='display: inline;float:left;'/><span style='color:red;display: inline;float:right;margin-top:-16px'>(Unpaid)</span></td><td></td></tr>";
                        }

                        totnotpaid += parseFloat(elementValue.GuarCreditFees);
                    }
                    if (parseInt(elementValue.BackGroundPaid) == 1) {
                        totpaid += parseFloat(elementValue.GuarBackGroundFees);
                        pprhtml += "<tr data-id='" + elementValue.ApplicantID + "'><td style='width:18%; padding:6px;'>" + elementValue.Type + " </td><td style='width:40%; padding:6px;'>" + elementValue.FirstName + " " + elementValue.LastName + " (Backgroung Check)</td><td style='width:14%; padding:6px;'>$" + parseFloat(elementValue.GuarBackGroundFees).toFixed(2) + "</td><td style='width:14%; padding:6px;text-align: center;'>Paid</td><td></td></tr>";
                    }
                    else {
                        if (elementValue.StepCompleted >= 10) {
                            pprhtml += "<tr data-id='" + elementValue.ApplicantID + "'><td style='width:18%; padding:6px;'>" + elementValue.Type + " </td><td style='width:40%; padding:6px;'>" + elementValue.FirstName + " " + elementValue.LastName + " (Background Check)</td><td style='width:14%; padding:6px;'>$" + parseFloat(elementValue.GuarBackGroundFees).toFixed(2) + "</td><td style='width:14%; padding:6px;'><input type='checkbox' class='chkPayAppFees" + elementValue.ApplicantID + "5' id='chkPayAppFees" + elementValue.ApplicantID + "' onclick='addAppFess(" + elementValue.GuarBackGroundFees + "," + elementValue.ApplicantID + ",5)' style='display: inline;float:left;'/><span style='color:red;display: inline;float:right;margin-top:-16px'>(Unpaid)</span></td><td><input type='button' id='btnSendPayLink" + elementValue.ApplicantID + "5' style='width:150px;' onclick='sendPayLinkEmail(" + elementValue.GuarBackGroundFees + "," + elementValue.ApplicantID + ",5,\"" + elementValue.Email + "\")' value='Send Payment Link'/></td></tr>";
                        } else {
                            pprhtml += "<tr data-id='" + elementValue.ApplicantID + "'><td style='width:18%; padding:6px;'>" + elementValue.Type + " </td><td style='width:40%; padding:6px;'>" + elementValue.FirstName + " " + elementValue.LastName + " (Background Check)</td><td style='width:14%; padding:6px;'>$" + parseFloat(elementValue.GuarBackGroundFees).toFixed(2) + "</td><td style='width:14%; padding:6px;'><input type='checkbox' class='chkPayAppFees" + elementValue.ApplicantID + "5' id='chkPayAppFees" + elementValue.ApplicantID + "' disabled onclick='addAppFess(" + elementValue.GuarBackGroundFees + "," + elementValue.ApplicantID + ",5)' style='display: inline;float:left;'/><span style='color:red;display: inline;float:right;margin-top:-16px'>(Unpaid)</span></td><td></td></tr>";
                        }
                        totnotpaid += parseFloat(elementValue.GuarBackGroundFees);
                    }

                }
            }
            if (elementValue.Type == "Co-Applicant" || elementValue.Type == "Guarantor") {
                //Sachin's work 22-10
                $("#btnsendemail").removeClass("hidden");
                if (elementValue.Email != null) {
                    emailhtml += "<tr data-id='" + elementValue.ApplicantID + "'><td style='width:20%; padding:6px;'>" + elementValue.FirstName + " " + elementValue.LastName + "</td><td style='width:18%; padding:6px;'>" + elementValue.Email + " </td><td style='width:30%; padding:6px;'><input type='checkbox' onclick='addEmail(\"" + elementValue.Email + "\")' id='chkEmail" + elementValue.ApplicantID + "' style='width:25%; border:1px solid;' /></td></tr>";
                }

                $("#divFinalcoappemail").removeClass('hidden');
            }

            if (elementValue.Type == "Minor") {
                $("#tblApplicantMinor").append(html);
            }
            else if (elementValue.Type == "Guarantor") {
                $("#tblApplicantGuarantor").append(html);
            }
            else {
                $("#tblApplicant").append(html);
                $("#tblApplicantFinal").append(html);
            }

            var html15 = "<tr id='tr_" + elementValue.ApplicantID + "' data-value='" + elementValue.ApplicantID + "'>";

            html15 += "<td>" + elementValue.FirstName + " " + elementValue.LastName + "</td>";
            html15 += "<td>" + elementValue.Type + "</td>";
            html15 += "<td>" + elementValue.GenderString + "</td>";
            html15 += "<td>" + elementValue.Email + "</td>";
            html15 += "<td>" + elementValue.Phone + "</td>";
            html15 += "<td>" + elementValue.DateOfBirthTxt + "</td>";

            html15 += "</tr>";
            $("#tblApplicant15>tbody").append(html15);
            $("#tblApplicant15p>tbody").append(html15);

            if (elementValue.Type == "Primary Applicant") {
                var htmlResp15 = "<tr id='tr_" + elementValue.ApplicantID + "' data-value='" + elementValue.ApplicantID + "'>";
                htmlResp15 += "<td> " + elementValue.FirstName + " " + elementValue.LastName + "</td>";
                htmlResp15 += "<td> " + elementValue.Type + "</td>";
                htmlResp15 += "<td> " + elementValue.MoveInPercentage + "%</td>";
                htmlResp15 += "<td> $" + formatMoney(elementValue.MoveInCharge) + "</td>";
                htmlResp15 += "<td> " + elementValue.MonthlyPercentage + "%</td>";
                htmlResp15 += "<td> $" + formatMoney(elementValue.MonthlyPayment) + "</td>";
                htmlResp15 += "<td> " + elementValue.AdminFeePercentage + "%</td>";
                htmlResp15 += "<td> $" + formatMoney(elementValue.AdminFee) + "</td>";
                htmlResp15 += "</tr>";
            }

            $("#tblRespo15>tbody").append(htmlResp15);
            $("#tblRespo15p>tbody").append(htmlResp15);

            $("#tblResponsibilityPay").append(prhtml);
            $("#tblPayment>tbody").append(pprhtml);
            $("#tblEmailCoapplicant>tbody").append(emailhtml);

            if (elementValue.Type == "Primary Applicant") {
                if ($("#txtpayper" + elementValue.ApplicantID).val() == 0) {
                    $("#txtpayper" + elementValue.ApplicantID).val(100);
                    checkPercentage();
                }
                if ($("#txtpayperMo" + elementValue.ApplicantID).val() == 0) {
                    $("#txtpayperMo" + elementValue.ApplicantID).val(100);
                    checkPercentage();
                }
            }

            function checkPercentage() {
                var chargesPecentage = $("#txtpayper" + elementValue.ApplicantID).val();
                var perCharges = ((chargesPecentage * parseFloat(unformatText($("#lbtotdueatmov6").text()))) / 100);
                $("#txtpayamt" + elementValue.ApplicantID).val(perCharges.toFixed(2));


                var sum = parseFloat(0);
                $(".payper").each(function () {
                    sum += parseFloat(this.value);

                });
                localStorage.setItem("percentage", sum);

                var chargesAmount = $("#txtpayamt" + elementValue.ApplicantID).val();
                var chargesPer = ((chargesAmount * 100) / parseFloat(unformatText($("#lbtotdueatmov6").text())));
                $("#txtpayper" + elementValue.ApplicantID).val(parseFloat(chargesPer));

                var monthlyPercentage = $("#txtpayperMo" + elementValue.ApplicantID).val();
                var monthlyPayment = unformatText($("#lblRFPTotalMonthlyPayment").text());
                var perMonth = ((monthlyPercentage * parseFloat(monthlyPayment, 10)) / 100);
                $("#txtpayamtMo" + elementValue.ApplicantID).val(parseFloat(perMonth));

                var sumMo = parseFloat(0);
                $(".payperMo").each(function () {
                    sumMo += parseFloat(this.value);

                });
                localStorage.setItem("percentageMo", sumMo);

                var adminFeePecentage = $("#txtpayper" + elementValue.ApplicantID).val();
                var adminPerCharges = ((adminFeePecentage * parseFloat(unformatText($("#lblAdminFees").text()))) / 100);
                $("#txtpayamtAF" + elementValue.ApplicantID).val(adminPerCharges.toFixed(2));


                var sumAF = parseFloat(0);
                $(".payperAF").each(function () {
                    sumAF += parseFloat(this.value);

                });
                localStorage.setItem("percentageAF", sumAF);

                var AdminFeeAmount = $("#txtpayamtAF" + elementValue.ApplicantID).val();
                var AdminChargesPer = ((AdminFeeAmount * 100) / parseFloat(unformatText($("#lblAdminFees").text())));
                $("#txtpayperAF" + elementValue.ApplicantID).val(parseFloat(AdminChargesPer));
            }

            $("#txtpayper" + elementValue.ApplicantID).keyup(function () {
                var chargesPecentage = parseFloat($("#txtpayper" + elementValue.ApplicantID).val());
                var perCharges = ((chargesPecentage * parseFloat(unformatText($("#lbtotdueatmov6").text()))) / 100);
                $("#txtpayamt" + elementValue.ApplicantID).val(formatMoney(perCharges.toFixed(2)));
                var sum = parseFloat(0);
                $(".payper").each(function () {
                    sum += parseFloat(this.value);
                });
                localStorage.setItem("percentage", sum);
            }).keypress(function (event) { return nonNegDecimal(event, $(this)); }).focusout(function () {
                $("#txtpayper" + elementValue.ApplicantID).val(parseFloat(($("#txtpayper" + elementValue.ApplicantID).val())));
            });
            $("#txtpayamt" + elementValue.ApplicantID).keyup(function () {
                var chargesAmount = unformatText($("#txtpayamt" + elementValue.ApplicantID).val());
                var chargesPer = ((chargesAmount * 100) / parseFloat(unformatText($("#lbtotdueatmov6").text())));
                $("#txtpayper" + elementValue.ApplicantID).val(chargesPer.toFixed(2));
                var sum = parseFloat(0);
                $(".payper").each(function () {
                    sum += parseFloat(this.value);
                });
                localStorage.setItem("percentage", sum);

            }).keypress(function (event) { return nonNegDecimal(event, $(this)); }).focusout(function () {
                $("#txtpayamt" + elementValue.ApplicantID).val(formatMoney(unformatText($("#txtpayamt" + elementValue.ApplicantID).val())));
            });

            $("#txtpayperMo" + elementValue.ApplicantID).keyup(function () {
                var monthlyPercentage = $("#txtpayperMo" + elementValue.ApplicantID).val();
                var monthlyPayment = unformatText($("#lblRFPTotalMonthlyPayment").text());
                var perMonth = ((monthlyPercentage * parseFloat(monthlyPayment, 10)) / 100);
                $("#txtpayamtMo" + elementValue.ApplicantID).val(formatMoney(parseFloat(perMonth).toFixed(2)));
                var sumMo = parseFloat(0);
                $(".payperMo").each(function () {
                    sumMo += parseFloat(this.value);

                });
                localStorage.setItem("percentageMo", sumMo);
            }).keypress(function (event) { return nonNegDecimal(event, $(this)); }).focusout(function () {
                $("#txtpayperMo" + elementValue.ApplicantID).val(parseFloat(($("#txtpayperMo" + elementValue.ApplicantID).val())));
            });

            $("#txtpayamtMo" + elementValue.ApplicantID).keyup(function () {
                var perMonth = unformatText($("#txtpayamtMo" + elementValue.ApplicantID).val());
                var monthlyPayment = unformatText($("#lblRFPTotalMonthlyPayment").text());
                var monthlyPercentage = ((perMonth * 100) / parseFloat(monthlyPayment, 10));
                $("#txtpayperMo" + elementValue.ApplicantID).val(monthlyPercentage.toFixed(2));

                var sumMo = parseFloat(0);
                $(".payperMo").each(function () {
                    sumMo += parseFloat(this.value);

                });
                localStorage.setItem("percentageMo", sumMo);
            }).keypress(function (event) { return nonNegDecimal(event, $(this)); }).focusout(function () {
                $("#txtpayamtMo" + elementValue.ApplicantID).val(formatMoney(unformatText($("#txtpayamtMo" + elementValue.ApplicantID).val())));
            });
            /*******************/
            $("#txtpayperAF" + elementValue.ApplicantID).keyup(function () {
                var monthlyPercentage = $("#txtpayperAF" + elementValue.ApplicantID).val();
                var monthlyPayment = unformatText($("#lblFNLAdministratorFee").text());
                var perMonth = ((monthlyPercentage * parseFloat(monthlyPayment, 10)) / 100);
                $("#txtpayamtAF" + elementValue.ApplicantID).val(formatMoney(parseFloat(perMonth).toFixed(2)));
                var sumAF = parseFloat(0);
                $(".payperAF").each(function () {
                    sumAF += parseFloat(this.value);

                });
                localStorage.setItem("percentageAF", sumAF);
            }).keypress(function (event) { return nonNegDecimal(event, $(this)); }).focusout(function () {
                $("#txtpayperAF" + elementValue.ApplicantID).val(parseFloat(($("#txtpayperAF" + elementValue.ApplicantID).val())));
            });

            $("#txtpayamtAF" + elementValue.ApplicantID).keyup(function () {
                var perMonth = unformatText($("#txtpayamtAF" + elementValue.ApplicantID).val());
                var monthlyPayment = unformatText($("#lblFNLAdministratorFee").text());
                var monthlyPercentage = ((perMonth * 100) / parseFloat(monthlyPayment, 10));
                $("#txtpayperAF" + elementValue.ApplicantID).val(monthlyPercentage.toFixed(2));

                var sumAF = parseFloat(0);
                $(".payperAF").each(function () {
                    sumAF += parseFloat(this.value);

                });
                localStorage.setItem("percentageAF", sumAF);
            }).keypress(function (event) { return nonNegDecimal(event, $(this)); }).focusout(function () {
                $("#txtpayamtAF" + elementValue.ApplicantID).val(formatMoney(unformatText($("#txtpayamtAF" + elementValue.ApplicantID).val())));
            });
            /******************/

            var sum = parseFloat(0);
            $(".payper").each(function () {
                sum += parseFloat(this.value);

            });
            localStorage.setItem("percentage", sum);
            var sumMo = parseFloat(0);
            $(".payperMo").each(function () {
                sumMo += parseFloat(this.value);

            });
            localStorage.setItem("percentageMo", sumMo);
            var sumAF = parseFloat(0);
            $(".payperAF").each(function () {
                sumAF += parseFloat(this.value);

            });
            localStorage.setItem("percentageAF", sumAF);
        });
        var totalAppl = noofapl;
        var newtotalAppl = (parseInt(noofapl) - 1);
        var totalCoAppl = noofCapl;
        var totalMinor = noofminor;
        var total = 0;
        if (nofbed == 1) {
            total = parseInt(noofapl) + parseInt(totalCoAppl) + parseInt(totalMinor);
            if (totalCoAppl <= parseInt(totalPeople) - 1) {
                if (total <= parseInt(totalPeople) - 1) {
                    $("#tblApplicant").append("<div class='col-sm-3 box-two proerty-item'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><label></br><a class='cust-link' href='javascript:void(0)' id='btnAddApplicant' onclick='addApplicant(1)'><i class='fa fa-plus-circle'></i> Add Co-Applicant</a></label></div></div></div></div>");
                }
            }
            if (totalMinor <= parseInt(totalPeople) - 1) {
                if (total <= parseInt(totalPeople) - 1) {
                    $("#tblApplicantMinor").append("<div class='col-sm-3 box-two proerty-item'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><label></br><a class='cust-link' href='javascript:void(0)' id='btnAddApplicant' onclick='addApplicant(2)'><i class='fa fa-plus-circle'></i> Add Minor</a></label></div></div></div></div>");
                }
            }
        }
        else if (nofbed == 2) {
            total = parseInt(noofapl) + parseInt(totalCoAppl) + parseInt(totalMinor);
            if (total <= parseInt(totalPeople) - 1) {
                if (totalCoAppl < 2) {
                    if (total < parseInt(totalPeople)) {
                        $("#tblApplicant").append("<div class='col-sm-3 box-two proerty-item'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><label></br><a class='cust-link' href='javascript:void(0)' id='btnAddApplicant' onclick='addApplicant(1)'><i class='fa fa-plus-circle'></i> Add Co-Applicant</a></label></div></div></div></div>");
                        if (totalMinor <= 1) {
                            $("#tblApplicantMinor").append("<div class='col-sm-3 box-two proerty-item'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><label></br><a class='cust-link' href='javascript:void(0)' id='btnAddApplicant' onclick='addApplicant(2)'><i class='fa fa-plus-circle'></i> Add Minor</a></label></div></div></div></div>");
                        }
                    }
                }
                else if (totalMinor < 2) {
                    if (total < parseInt(totalPeople)) {
                        $("#tblApplicantMinor").append("<div class='col-sm-3 box-two proerty-item'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><label></br><a class='cust-link' href='javascript:void(0)' id='btnAddApplicant' onclick='addApplicant(2)'><i class='fa fa-plus-circle'></i> Add Minor</a></label></div></div></div></div>");
                        if (totalCoAppl <= 1) {
                            $("#tblApplicant").append("<div class='col-sm-3 box-two proerty-item'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><label></br><a class='cust-link' href='javascript:void(0)' id='btnAddApplicant' onclick='addApplicant(1)'><i class='fa fa-plus-circle'></i> Add Co-Applicant</a></label></div></div></div></div>");
                        }
                    }
                }
            }
        }
        else if (nofbed == 3) {
            total = parseInt(noofapl) + parseInt(totalCoAppl) + parseInt(totalMinor);
            if (total <= parseInt(totalPeople) - 1) {
                if (totalCoAppl < 3) {
                    if (total < parseInt(totalPeople)) {
                        $("#tblApplicant").append("<div class='col-sm-3 box-two proerty-item'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><label></br><a class='cust-link' href='javascript:void(0)' id='btnAddApplicant' onclick='addApplicant(1)'><i class='fa fa-plus-circle'></i> Add Co-Applicant</a></label></div></div></div></div>");
                        if (totalMinor <= 2) {
                            $("#tblApplicantMinor").append("<div class='col-sm-3 box-two proerty-item'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><label></br><a class='cust-link' href='javascript:void(0)' id='btnAddApplicant' onclick='addApplicant(2)'><i class='fa fa-plus-circle'></i> Add Minor</a></label></div></div></div></div>");
                        }
                    }
                }
                else if (totalMinor < 3) {
                    if (total < parseInt(totalPeople)) {
                        $("#tblApplicantMinor").append("<div class='col-sm-3 box-two proerty-item'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><label></br><a class='cust-link' href='javascript:void(0)' id='btnAddApplicant' onclick='addApplicant(2)'><i class='fa fa-plus-circle'></i> Add Minor</a></label></div></div></div></div>");
                        if (totalCoAppl <= 2) {
                            $("#tblApplicant").append("<div class='col-sm-3 box-two proerty-item'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><label></br><a class='cust-link' href='javascript:void(0)' id='btnAddApplicant' onclick='addApplicant(1)'><i class='fa fa-plus-circle'></i> Add Co-Applicant</a></label></div></div></div></div>");
                        }
                    }
                }
            }
        }
        if (noofgur == 0) {
            $("#tblApplicantGuarantor").append("<div class='col-sm-3 box-two proerty-item'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><div class='form-group col-sm-12'><label></br><a class='cust-link' href='javascript:void(0)' id='btnAddApplicant' onclick='addApplicant(3)'><i class='fa fa-plus-circle'></i> Add Guarantor</a></label></div></div></div></div>");
        }
        $("#totalFinalFees").text("$" + parseFloat(totalFinalFees).toFixed(2));
    });
};
var appCCBackFee = [];
var addAppFess = function (appFees, appid, type) {
    var totfees = unformatText($("#totalFinalFees").text());
    if ($(".chkPayAppFees" + appid + type).is(':checked')) {
        $("#btnSendPayLink" + appid + type).addClass("hidden");
        totfees = parseFloat(totfees) + parseFloat(appFees);
        $("#totalFinalFees").text("$" + parseFloat(totfees).toFixed(2));
        addApplicntArray.push({ ApplicantID: appid, Type: type });
    } else {
        totfees = parseFloat(totfees) - parseFloat(appFees);
        $("#totalFinalFees").text("$" + parseFloat(totfees).toFixed(2));
        $("#btnSendPayLink" + appid + type).removeClass("hidden");
        addApplicntArray.pop({ ApplicantID: appid, Type: type });
    }
}
var goToEditApplicant = function (aid) {
    clearApplicant();
    if (aid != null) {
        //sacxhis
        $("#hndApplicantID").val(aid);
        var model = { id: aid, FromAcc: 0 };
        $.ajax({
            url: "/Tenant/Applicant/GetApplicantDetails",
            type: "post",
            contentType: "application/json utf-8",
            data: JSON.stringify(model),
            dataType: "JSON",
            async: false,
            success: function (response) { $("#divLoader").show(); }
        }).done(function (response) {
            $("#divLoader").hide();
            var modal = $("#popApplicant");
            $("#txtApplicantFirstName").val(response.model.FirstName);
            $("#txtApplicantMiddleName").val(response.model.MiddleName);
            $("#txtApplicantLastName").val(response.model.LastName);
            console.log(response.model.IsInternational);

            if (response.model.IsInternational == 1) {
                $("#chkNoSSN").iCheck('uncheck');
                $("#txtApplicantSSNNumber").prop("disabled", false);

            } else {
                $("#chkNoSSN").iCheck('check');
                $("#txtApplicantSSNNumber").prop("disabled", true);
            }
            if (response.model.Type == "Primary Applicant") {
                $("#divPopSSN,#divPopIDType,#divPopIDState,#divPopIDNumber,#divPopCountry,#divPopAddressLine1,#divPopAddressLine2,#divPopState,#divPopCity,#divPopZip").removeClass("hidden");

                modal.find('.modal-title').text('Edit Primary Applicant');
                //Sachin M 09 July
                if ($("#hndCreditPaid").val() == 1) {
                    $('#divCreditCheckPayment').addClass('hidden');
                    $('#divchkCCPay').addClass('hidden');

                } else {
                    $("#divchkCCPay").removeClass("hidden");
                }
                $("#popApplicant").modal("show");
                $("#ddlApplicantType").text("Primary Applicant");
                $("#ddlARelationship").empty();
                var opt = "<option value='0'>Select Relationship</option>";
                opt += "<option value='1' selected='selected'>Self</option>";
                $("#ddlARelationship").append(opt);
                $("#ddlARelationship").val(response.model.Relationship).change();

                $("#ddlApplicantGender").val(response.model.Gender);
                $("#ddlApplicantGender").trigger('change');
                if (response.model.Gender == '3') {
                    $("#txtApplicantOtherGender").val(response.model.OtherGender);
                }
                else {
                    $("#txtApplicantOtherGender").val('');
                }
                $("#txtHDateOfBirth").removeClass("hidden").val(response.model.DateOfBirthTxt);
                $('#txtADateOfBirth').addClass("hidden");
                $('#txtMDateOfBirth').addClass("hidden");
                $('#txtGDateOfBirth').addClass('hidden');

                $("#appphone").removeClass("hidden");
                $("#appemail").removeClass("hidden");
                $("#txtApplicantPhone").val(formatPhoneFax(response.model.Phone));
                $("#txtApplicantEmail").val(response.model.Email);

                $("#txtApplicantSSNNumber").val(response.model.SSN);
                $("#txtApplicantSSNNumber").attr("data-value", response.model.SSNEnc);

                $("#ddlApplicantDocumentTypePersonal").val(response.model.IDType).change();
                $("#ddlApplicantStateDoc").val(response.model.State).change();
                $("#txtApplicantIDNumber").val(response.model.IDNumber);
                $("#txtApplicantIDNumber").attr("data-value", response.model.IDNumberEnc);
                $("#txtApplicantCountry").val(response.model.Country);
                $("#txtApplicantCountry").trigger('change');
                $("#txtAddressLine1").val(response.model.HomeAddress1);
                $("#txtAddressLine2").val(response.model.HomeAddress2);
                $("#ddlApplicantState").val(response.model.StateHome).change();
                $("#txtApplicantCity").val(response.model.CityHome);
                $("#txtApplicantZip2").val(response.model.ZipHome);
                var ssnnumber = $.trim($("#txtApplicantSSNNumber").val());
                if (parseInt($("#hndCreditPaid").val()) == 0) {
                    $("#sppayFees").text("$" + $("#hndAppCreditFees").val());
                }

                var ssnLength = $("#txtApplicantSSNNumber").val().length;
                if (ssnLength <= 8) {
                    $("#chkCCPay").prop("disabled", true);
                }
                else if (ssnLength > 8) {
                    $("#chkCCPay").prop("disabled", false);
                }
            }
            else if (response.model.Type == "Co-Applicant") {
                $("#divPopSSN,#divPopIDType,#divPopIDState,#divPopIDNumber,#divPopCountry,#divPopAddressLine1,#divPopAddressLine2,#divPopState,#divPopCity,#divPopZip").addClass("hidden");
                //modal.find('.modal-content').css("height", "375px");
                modal.find('.modal-title').text('Edit Co-Applicant');
                $("#divchkCCPay").addClass("hidden");
                $("#popApplicant").modal("show");
                $("#ddlApplicantType").text("Co-Applicant");
                $("#ddlARelationship").empty();
                opt = "<option value='0'>Select Relationship</option>";
                opt += "<option value='1'>Spouse</option>";
                opt += "<option value='2'>Partner</option>";
                opt += "<option value='3'>Adult Child</option>";
                opt += "<option value='4'>Friend/Roommate</option>";
                $("#ddlARelationship").append(opt);
                $("#ddlARelationship").val(response.model.Relationship).change();

                $("#ddlApplicantGender").val(response.model.Gender);
                $("#ddlApplicantGender").trigger('change');
                if (response.model.Gender == '3') {
                    $("#txtApplicantOtherGender").val(response.model.OtherGender);
                }
                else {
                    $("#txtApplicantOtherGender").val('');
                }
                $("#txtADateOfBirth").removeClass("hidden").val(response.model.DateOfBirthTxt);
                $('#txtHDateOfBirth').addClass("hidden");
                $('#txtMDateOfBirth').addClass("hidden");
                $('#txtGDateOfBirth').addClass('hidden');
                $("#appphone").removeClass("hidden");
                $("#appemail").removeClass("hidden");
                $("#txtApplicantPhone").val(formatPhoneFax(response.model.Phone));
                $("#txtApplicantEmail").val(response.model.Email);

                $("#txtApplicantSSNNumber").val(response.model.SSN);
                $("#txtApplicantSSNNumber").attr("data-value", response.model.SSNEnc);

                $("#ddlApplicantDocumentTypePersonal").val(response.model.IDType).change();
                $("#ddlApplicantStateDoc").val(response.model.State).change();
                $("#txtApplicantIDNumber").val(response.model.IDNumber);
                $("#txtApplicantIDNumber").attr("data-value", response.model.IDNumberEnc);

                $("#txtApplicantCountry").val(response.model.Country);
                $("#txtApplicantCountry").trigger('change');
                $("#txtAddressLine1").val(response.model.HomeAddress1);
                $("#txtAddressLine2").val(response.model.HomeAddress2);
                $("#ddlApplicantState").val(response.model.StateHome).change();
                $("#txtApplicantCity").val(response.model.CityHome);
                $("#txtApplicantZip2").val(response.model.ZipHome);

            }
            else if (response.model.Type == "Guarantor") {
                $("#divPopSSN,#divPopIDType,#divPopIDState,#divPopIDNumber,#divPopCountry,#divPopAddressLine1,#divPopAddressLine2,#divPopState,#divPopCity,#divPopZip").addClass("hidden");
                //modal.find('.modal-content').css("height", "375px");
                modal.find('.modal-title').text('Edit Guarantor');
                $("#divchkCCPay").addClass("hidden");
                $("#popApplicant").modal("show");
                $("#ddlApplicantType").text("Guarantor");
                $("#ddlARelationship").empty();
                opt = "<option value='0'>Select Relationship</option>";
                opt += "<option value='1'>Family</option>";
                opt += "<option value='2'>Friend</option>";
                $("#ddlARelationship").append(opt);
                $("#ddlARelationship").val(response.model.Relationship).change();

                $("#ddlApplicantGender").val(response.model.Gender);
                $("#ddlApplicantGender").trigger('change');
                if (response.model.Gender == '3') {
                    $("#txtApplicantOtherGender").val(response.model.OtherGender);
                }
                else {
                    $("#txtApplicantOtherGender").val('');
                }
                $("#txtGDateOfBirth").removeClass("hidden").val(response.model.DateOfBirthTxt);
                $('#txtHDateOfBirth').addClass("hidden");
                $('#txtADateOfBirth').addClass("hidden");
                $('#txtMDateOfBirth').addClass('hidden');

                $("#appphone").addClass("hidden");
                $("#appemail").removeClass("hidden");
                $("#txtApplicantPhone").val(formatPhoneFax(response.model.Phone));
                $("#txtApplicantEmail").val(response.model.Email);

                $("#txtApplicantSSNNumber").val(response.model.SSN);
                $("#txtApplicantSSNNumber").attr("data-value", response.model.SSNEnc);

                $("#ddlApplicantDocumentTypePersonal").val(response.model.IDType).change();
                $("#ddlApplicantStateDoc").val(response.model.State).change();
                $("#txtApplicantIDNumber").val(response.model.IDNumber);
                $("#txtApplicantIDNumber").attr("data-value", response.model.IDNumberEnc);

                $("#txtApplicantCountry").val(response.model.Country);
                $("#txtApplicantCountry").trigger('change');
                $("#txtAddressLine1").val(response.model.HomeAddress1);
                $("#txtAddressLine2").val(response.model.HomeAddress2);
                $("#ddlApplicantState").val(response.model.StateHome).change();
                $("#txtApplicantCity").val(response.model.CityHome);
                $("#txtApplicantZip2").val(response.model.ZipHome);

            }
            else if (response.model.Type == "Minor") {
                $("#divPopSSN,#divPopIDType,#divPopIDState,#divPopIDNumber,#divPopCountry,#divPopAddressLine1,#divPopAddressLine2,#divPopState,#divPopCity,#divPopZip").addClass("hidden");
                ///modal.find('.modal-content').css("height", "300px");
                modal.find('.modal-title').text('Edit Minor');
                $("#divchkCCPay").addClass("hidden");
                $("#popApplicant").modal("show");
                $("#ddlApplicantType").text("Minor");
                $("#ddlARelationship").empty();
                opt = "<option value='0'>Select Relationship</option>";
                opt += "<option value='1'>Family Member</option>";
                opt += "<option value='2'>Child</option>";
                $("#ddlARelationship").append(opt);
                $("#ddlARelationship").val(response.model.Relationship).change();

                $("#ddlApplicantGender").val(response.model.Gender);
                $("#ddlApplicantGender").trigger('change');
                if (response.model.Gender == '3') {
                    $("#txtApplicantOtherGender").val(response.model.OtherGender);
                }
                else {
                    $("#txtApplicantOtherGender").val('');
                }
                $("#txtMDateOfBirth").removeClass("hidden").val(response.model.DateOfBirthTxt);
                $('#txtHDateOfBirth').addClass("hidden");
                $('#txtADateOfBirth').addClass("hidden");
                $('#txtGDateOfBirth').addClass('hidden');

                $("#appphone").addClass("hidden");
                $("#appemail").addClass("hidden");
            }
        });
    }
};

var payFeePop = function (aid, ct) {
    clearPayFeePop();
    $("#hndApplicantID").val(aid);
    $("#hndFromAcc").val(ct);
    if (ct == 5) {
        $("#lblpopcctitle").text("Pay Background Check Fees");

        $("#sppayFees2").text($("#hndAppBackgroundFees").val());
    } else if (ct == 4) {
        
        $("#lblpopcctitle").text("Pay Credit Check Fees");
        $("#sppayFees2").text($("#hndAppCreditFees").val());        
    } else {
        $("#lblpopcctitle").text("Pay Remaining Fees");
        $("#sppayFees2").text(unformatText($("#totalFinalFees").text()));
        $("#hndFinalPaybutton").val(1);
    }
    getBankCCLists();
    
    $("#popCCPay").modal("show");
}
var clearPayFeePop = function () {
    $('#txtNameonCard2').val("");
    $('#txtCardNumber2').val("");
    $('#ddlcardmonth2').val("01");
    $('#ddlcardyear2').val("20");
    $('#txtCCVNumber2').val("");
  
    $('#chkTermsAndCondition2').removeAttr("checked");
    $('#chkTermsAndCondition2').parent().remove("checked");
    $('#chkTermsAndCondition2').parent().removeClass("checked");
}
var clearApplicant = function () {
    $("#hndApplicantID").val(0);
    $("#txtApplicantFirstName").val("");
    $("#txtApplicantMiddleName").val("");
    $("#txtApplicantLastName").val("");
    $("#txtApplicantPhone").val("");
    $("#txtApplicantEmail").val("");
    $("#ddlApplicantGender").val(0);
    $('#txtMDateOfBirth').val("");
    $('#txtADateOfBirth').val("");
    $('#txtHDateOfBirth').val("");
    $('#txtGDateOfBirth').val("");
    $("#txtApplicantSSNNumber").val("");
    $("#txtApplicantIDNumber").val("");
    $("#ddlApplicantDocumentTypePersonal").val(0);
    $("#ddlApplicantStateDoc").val(0);
    $("#txtAddressLine1").val("");
    $("#txtAddressLine2").val("");
    $("#ddlApplicantState").val(0);
    $("#txtApplicantCountry").val(1);
    $("#txtApplicantCity").val("");
    $("#txtApplicantZip2").val("");
    clearBank1();
    clearCard1();
    $("#chkCCPay").iCheck('uncheck');
    //$("#divchkCCPay").addClass("hidden");
    $("#divCreditCheckPayment").addClass("hidden");
}
var saveupdatePet = function () {
    $("#divLoader").show();
    var msg = "";
    var prospectID = $("#hdnProspectId").val();
    var petId = $("#hndPetID").val();
    //var petType = $("#ddlpetType").val();
    var breed = $("#txtpetBreed").val();
    var weight = $("#txtpetWeight").val();
    //var age = $("#txtpetAge").val();
    
    var photo = document.getElementById('pet-picture');
    var petVaccinationCertificate = document.getElementById('filePetVaccinationCertificate');
    var petName = $("#txtpetName").val();
    var vetsName = $("#txtpetVetsName").val();
    var hiddenPetPicture = $("#hndPetPicture").val();
    var hiddenPetVaccinationCertificate = $("#hndPetVaccinationCertificate").val();
    var hiddenOriginalPetPicture = $("#hndOriginalPetPicture").val();
    var hiddenOriginalPetVaccinationCertificate = $("#hndOriginalPetVaccinationCertificate").val();
    var hiddenCurrentUserId = $("#hndCurrentUserId").val();
    if (!petName) {
        msg += "Enter Pet Name</br>";
    }
    if (!breed) {
        msg += "Enter Pet Breed</br>";
    }
    if (hiddenPetPicture == '0') {
        if (document.getElementById('pet-picture').files.length == '0') {
            msg += "Please Upload Pet Picture</br>";
        }
    }
    if (hiddenPetVaccinationCertificate == '0') {
        if (document.getElementById('filePetVaccinationCertificate').files.length == '0') {
            msg += "Please Upload Pet Vaccination Certificate</br>";
        }
    }
    if (!weight) {
        msg += "Enter Pet Weight</br>";
    }
    
    if (msg != "") {
        $("#divLoader").hide();
        $.alert({
            title: "",
            content: msg,
            type: 'red'
        });
        return;
    }

    $formData = new FormData();

    $formData.append('PetID', petId);
    $formData.append('Breed', breed);
    $formData.append('Weight', weight);
    $formData.append('TenantID', prospectID);
    $formData.append('PetName', petName);
    $formData.append('VetsName', vetsName);

    $formData.append('Photo', hiddenPetPicture);
    $formData.append('PetVaccinationCertificate', hiddenPetVaccinationCertificate);
    $formData.append('OriginalPetNameFile', hiddenOriginalPetPicture);
    $formData.append('OriginalPetVaccinationCertificateFile', hiddenOriginalPetVaccinationCertificate);
    $formData.append('CurrentUserId', hiddenCurrentUserId);

    $.ajax({
        url: "/Tenant/Pet/SaveUpdatePet/",
        type: "post",
        data: $formData,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
            
            getPetListsApplyNow();
            localStorage.setItem('tenantIds', response.Msg);

            var str = localStorage.getItem('tenantIds');
            var tId = str.split(',');
            document.getElementById('hdnOPId').value = tId[0];
            
            $.alert({
                title: "",
                content: tId[1],
                type: 'blue'
            });
            $("#popPet").modal("hide");
        }
    });
};
var checkPetWeight = function () {
    $("#divLoader").show();
    var prospectID = $("#hdnProspectId").val();
    var petName = $("#txtpetName").val();
    var breed = $("#txtpetBreed").val();
    var weight = $("#txtpetWeight").val();
    var hiddenPetPicture = $("#hndPetPicture").val();
    var hiddenPetVaccinationCertificate = $("#hndPetVaccinationCertificate").val();
    var msg = '';
    if (!petName) {
        msg += "Enter Pet Name</br>";
    }
    if (!breed) {
        msg += "Enter Pet Breed</br>";
    }
    if (!weight) {
        msg += "Enter Pet Weight</br>";
    }
    if (hiddenPetPicture == '0') {
        if (document.getElementById('pet-picture').files.length == '0') {
            msg += "Please Upload Pet Picture</br>";
        }
    }
    if (hiddenPetVaccinationCertificate == '0') {
        if (document.getElementById('filePetVaccinationCertificate').files.length == '0') {
            msg += "Please Upload Pet Vaccination Certificate</br>";
        }
    }
    
    if (msg != "") {
        $("#divLoader").hide();
        $.alert({
            title: "",
            content: msg,
            type: 'red'
        });
        return;
    }
    var model = { TenantId: prospectID, PetWeight: weight};
    $.ajax({
        url: "/Tenant/Pet/CheckPetWeight/",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            if (response == "Pet Weight must be upto 25 lbs") {
                alert(response);
            }
            else if (response == "Two Pet's Weight must be upto 40 lbs") {
                alert(response);
            }
            else {
                saveupdatePet();
            }
        }
    });
};
var petIdd = 0;
var getPetListsApplyNow = function () {
    $("#divLoader").show();
    var model = {
        TenantID: $("#hdnProspectId").val()
    };
    $.ajax({
        url: "/Pet/GetPetList",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            $("#tblPetApplyNow>tbody").empty();
            $("#tblPet15>tbody").empty();
            $("#tblPet15p>tbody").empty();
            $.each(response.model, function (elementType, elementValue) {
                var html = "<tr id='tr_" + elementValue.PetID + "' data-value='" + elementValue.PetID + "'>";
                html += "<td align='center'><img src='/content/assets/img/pet/" + elementValue.Photo + "' class='picture-src' title='' style='height:70px;width:70px;'/></td>";

                html += "<td>" + elementValue.PetName + "</td>";
                html += "<td>" + elementValue.Breed + "</td>";
                html += "<td>" + elementValue.Weight + "</td>";
                html += "<td>" + elementValue.VetsName + "</td>";
                html += "<td>";
                html += "<a style='background: transparent; margin-right:10px' href='javascript:void(0);' id='updatePetInfo' onclick='getPetInfo(" + elementValue.PetID + ")'><span class='fa fa-edit' ></span></a>";
                html += "<a style='background: transparent; margin-right:10px' href='javascript:void(0);' onclick='delPet(" + elementValue.PetID + ")'><span class='fa fa-trash' ></span></a>";
                html += "<a href='../../Content/assets/img/pet/" + elementValue.PetVaccinationCertificate + "' download=" + elementValue.PetVaccinationCertificate + " target='_blank'><span class='fa fa-download'></span></a>";
                html += "</td >";
                html += "</tr>";
                $("#tblPetApplyNow>tbody").append(html);

                var html15 = "<tr id='tr_" + elementValue.PetID + "' data-value='" + elementValue.PetID + "'>";

                html15 += "<td>" + elementValue.PetName + "</td>";
                html15 += "<td>" + elementValue.Breed + "</td>";
                html15 += "<td>" + elementValue.Weight + "</td>";
                html15 += "<td>" + elementValue.VetsName + "</td>";

                html15 += "</tr>";

                $("#tblPet15>tbody").append(html15);
                $("#tblPet15p>tbody").append(html15);

                if (response.model.length == 2) {
                    petIdd = elementValue.PetID;
                } else {
                    petIdd = 0;
                }

            });

            getTenantPetPlaceData();

        }
    });
};

var getPetInfo = function (id) {
    $("#divLoader").show();
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
            $("#divLoader").hide();
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
    $("#hndPetID").val(0);
    $("#txtpetName").val('');
    $("#txtpetBreed").val('');
    $("#txtpetWeight").val('');
    $("#txtpetVetsName").val('');
    document.getElementById('filePetPictireShow').value = '';
    document.getElementById('pet-picture').value = '';
    document.getElementById('filePetVaccinationCertificate').value = '';
    $("#filePetPictireShow").html('Choose a file...');
    $("#filePetVaccinationCertificateShow").html('Choose a file...');
    $("#hndPetPicture").val('0');
    $("#hndOriginalPetPicture").val('');
    $("#hndPetVaccinationCertificate").val('0');
    $("#hndOriginalPetVaccinationCertificate").val('');
};
var saveupdateVehicle = function () {
    $("#divLoader").show();
    var msg = "";
    var vid = $("#hndVehicleID").val();
    var vtag = $("#txtVehicleTag").val();
    var parkspace = $("#ddlParking").val();
    var vtype = $("#ddlVehicleType").val();
    var vmake = $("#txtVehicleMake").val();
    var vmodel = $("#txtVehicleModel").val();
    var vyear = $("#ddlVehicleyear").val();
    var vcolor = $("#txtVehicleColor").val();
    var vlicence = $("#txtVehicleLicence").val();
    var vstate = $("#ddlVState").val();
    var vfileUploadVehicleRegistation = $("#fileUploadVehicleRegistation").val();
    var prospectID = $("#hdnOPId").val();

    var vehicleRegistration = document.getElementById("fileUploadVehicleRegistation");
    var vOwnerName = $("#txtVehicleOwnerName").val();
    var vNotes = $("#txtVehicleNote").val();
    var vRegistationCert = $("#hndVehicleRegistation").val();
    var vOriginalRegistationCert = $("#hndOriginalVehicleRegistation").val();
    if ($("#hndVehicleRegistation").val() == '0') {
        if (document.getElementById("fileUploadVehicleRegistation").files.length == '0') {
            msg += "Upload The Vehicle Registration Certificate</br>";
        }
    }
    if (vtype == "0") {
        msg += "Enter Vehicle Type</br>";
    }
    if (vyear == '0') {
        msg += "Enter Vehicle Year</br>";
    }
    if (!vmake) {
        msg += "Enter Vehicle Make</br>";
    }
    if (!vlicence) {
        msg += "Enter Vehicle Licence</br>";
    }
    if (vstate == "0") {
        msg += "Select Vehicle State</br>";
    }
    if (msg != "") {
        $("#divLoader").hide();
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
    $formData.append('TenantID', prospectID);
    $formData.append('OwnerName', vOwnerName);
    $formData.append('Notes', vNotes);
    $formData.append('Tag', vtag);
    $formData.append('ParkingID', parkspace);
    $formData.append('VehicleType', vtype);
    $formData.append('VehicleRegistration', vRegistationCert);
    $formData.append('OriginalVehicleRegistation', vOriginalRegistationCert);
    $.ajax({
        url: "/Tenant/Vehicle/SaveUpdateVehicle/",
        type: "post",
        contentType: "application/json utf-8",
        data: $formData,
        contentType: false,
        processData: false,
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            $.alert({
                title: "",
                content: response.Msg,
                type: 'blue',
            });

            getVehicleLists();
            $("#popVehicle").modal("hide");
            fillUnitParkingList();
        }
    });

};

var getVehicleLists = function () {
    $("#divLoader").show();
    var model = {

        TenantID: $("#hdnOPId").val(),
    }
    $.ajax({
        url: "/Tenant/Vehicle/GetVehicleList",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            $("#tblVehicle>tbody").empty();
            $("#tblVehicle15>tbody").empty();
            $("#tblVehicle15p>tbody").empty();
            var noofveh = 0;
            $.each(response.model, function (elementType, elementValue) {
                var html = "<tr id='tr_" + elementValue.Vehicle_ID + "' data-value='" + elementValue.Vehicle_ID + "'>";
                html += "<td>" + elementValue.OwnerName + "</td>";
                html += "<td>" + elementValue.Make + "</td>";
                html += "<td>" + elementValue.VModel + "</td>";
                html += "<td>" + elementValue.Year + "</td>";
                html += "<td>" + elementValue.Color + "</td>";
                html += "<td>" + elementValue.License + "</td>";
                html += "<td><a style='background: transparent; margin-right:10px' href='javascript:void(0);' onclick='editVehicle(" + elementValue.Vehicle_ID + ")'><span class='fa fa-edit' ></span></a>";
                html += "<a style='background: transparent; margin-right:10px' href='javascript:void(0);' onclick='delVehicle(" + elementValue.Vehicle_ID + ")'><span class='fa fa-trash' ></span></a>";
                html += "<a style='background: transparent;' href='../../Content/assets/img/VehicleRegistration/" + elementValue.VehicleRegistration + "' download=" + elementValue.VehicleRegistration + " target='_blank'><span class='fa fa-download' style='background: transparent;'></span></a></td>";

                html += "</tr>";
                $("#tblVehicle>tbody").append(html);

                var html15 = "<tr id='tr_" + elementValue.Vehicle_ID + "' data-value='" + elementValue.Vehicle_ID + "'>";
                html15 += "<td>" + elementValue.OwnerName + "</td>";
                html15 += "<td>" + elementValue.Make + "</td>";
                html15 += "<td>" + elementValue.VModel + "</td>";
                html15 += "<td>" + elementValue.Year + "</td>";
                html15 += "<td>" + elementValue.Color + "</td>";
                html15 += "<td>" + elementValue.License + "</td>";

                html15 += "</tr>";
                $("#tblVehicle15>tbody").append(html15);
                $("#tblVehicle15p>tbody").append(html15);
                noofveh += 1;
            });
        }
    });
}

var clearVehicle = function () {
    $("#hndVehicleID").val(0);
    $("#txtVehicleOwnerName").val("");
    document.getElementById('fileUploadVehicleRegistation').value = '';
    $("#VehicleRegistationShow").html("Choose a file...");
    $("#ddlVehicleType").val("0");
    $("#ddlVehicleyear").val("0");
    $("#txtVehicleMake").val("");
    $("#txtVehicleModel").val("");
    $("#txtVehicleColor").val("");
    $("#txtVehicleLicence").val("");
    $("#ddlVState").val(0);
    $("#txtVehicleNote").val("");
    $("#hndVehicleRegistation").val("0");
    $("#hndOriginalVehicleRegistation").val("0");
}
var saveupdateTenantOnline = function (stepcompleted) {
    var msg = "";
    var ProspectID = $("#hdnOPId").val();
    //console.log($("#hdnOPId").val() + "   " + $("#hndCurrentUserId").val() )
    var isInternational = $("#ddlIsInter").val();
    var FirstName = $("#txtFirstNamePersonal").val();
    var MiddleInitial = $("#txtMiddleInitial").val();
    var LastName = $("#txtLastNamePersonal").val();
    var DateOfBirth = $("#txtDateOfBirth").val();
    var Gender = $("#ddlGender").val();
    var Email = $("#txtEmailNew").val();
    var Mobile = unformatText($("#txtMobileNumber").val());
    var CountryIssuance = $("#txtCOI").val();
    var DateIssuance = $("#txtDateOfIssuance").val();
    var DateExpire = $("#txtDateOfExpiration").val();
    var IDType = $("#ddlDocumentTypePersonal").val();
    var State = $("#ddlStatePersonal").val();
    var Country = $("#txtCountry").val();
    var HomeAddress1 = $("#txtAddress1").val();
    var HomeAddress2 = $("#txtAddress2").val();
    var StateHome = $("#ddlStateHome").val();
    var CityHome = $("#ddlCityHome").val();
    var ZipHome = $("#txtZip").val();
    var RentOwn = $("#ddlRentOwn").val();
    var MoveInDateFrom = $("#txtMoveInDateFrom").val();
    var MonthlyPayment = unformatText($("#txtMonthlyPayment").val());
    var Reason = "";

    var Country2 = $("#txtCountry2").val();
    var HomeAddress12 = $("#txtAddress12").val();
    var HomeAddress22 = $("#txtAddress22").val();
    var StateHome2 = $("#ddlStateHome2").val();
    var CityHome2 = $("#ddlCityHome2").val();
    var ZipHome2 = $("#txtZip2").val();
    var RentOwn2 = $("#ddlRentOwn2").val();
    var MoveInDateFrom2 = $("#txtMoveInDateFrom2").val();
    var MoveInDateTo2 = $("#txtMoveInDateTo2").val();
    var MonthlyPayment2 = unformatText($("#txtMonthlyPayment2").val());
    var Reason2 = $("#txtReasonforleaving2").val();

    var isAdditionalRHistory = $("#ddladdHistory").val();

    var EmployerName = $("#txtEmployerName").val();
    var JobTitle = $("#txtJobTitle").val();
    var JobType = $("#ddlJobType").val();
    var StartDate = $("#txtStartDate").val();
    var Income = unformatText($("#txtAnnualIncome").val());
    var AdditionalIncome = unformatText($("#txtAddAnnualIncome").val());
    var SupervisorName = $("#txtSupervisiorName").val();
    var SupervisorPhone = unformatText($("#txtSupervisiorPhone").val());
    var SupervisorEmail = $("#txtSupervisiorEmail").val();
    var OfficeCountry = $("#txtCountryOffice").val();
    var OfficeAddress1 = $("#txtofficeAddress1").val();
    var OfficeAddress2 = $("#txtofficeAddress2").val();
    var OfficeState = $("#ddlStateEmployee").val();
    var OfficeCity = $("#ddlCityEmployee").val();
    var OfficeZip = $("#txtZipOffice").val();
    var Relationship = $("#txtRelationship").val();
    var EmergencyFirstName = $("#txtEmergencyFirstName").val();
    var EmergencyLastName = $("#txtEmergencyLastName").val();
    var EmergencyMobile = unformatText($("#txtEmergencyMobile").val());
    var EmergencyHomePhone = unformatText($("#txtEmergencyHomePhone").val());
    var EmergencyWorkPhone = unformatText($("#txtEmergencyWorkPhone").val());
    var EmergencyEmail = $("#txtEmergencyEmail").val();
    var EmergencyCountry = $("#txtEmergencyCountry").val();
    var EmergencyAddress1 = $("#txtEmergencyAddress1").val();
    var EmergencyAddress2 = $("#txtEmergencyAddress2").val();
    var EmergencyStateHome = $("#ddlStateContact").val();
    var EmergencyCityHome = $("#ddlCityContact").val();
    var EmergencyZipHome = $("#txtEmergencyZip").val();
    var OtherGender = $("#txtOtherGender").val();

    var fileUpload1 = $("#hndFileUploadName1").val();
    var originalFileUpload1 = $("#hndOriginalFileUploadName1").val();
    var fileUpload2 = $("#hndFileUploadName2").val();
    var originalFileUpload2 = $("#hndOriginalFileUploadName2").val();
    var fileUpload3 = $("#hndFileUploadName3").val();
    var originalFileUpload3 = $("#hndOriginalFileUploadName3").val();

    //sachin m 11 may
    var fileUpload4 = $("#hndFileUploadName4").val();
    var originalFileUpload4 = $("#hndOriginalFileUploadName4").val();
    var fileUpload5 = $("#hndFileUploadName5").val();
    var originalFileUpload5 = $("#hndOriginalFileUploadName5").val();
    var fileUpload6 = $("#hndFileUploadNameBankState1").val();
    var originalFileUpload6 = $("#hndOriginalFileUploadNameBankState1").val();
    var fileUpload7 = $("#hndFileUploadNameBankState2").val();
    var originalFileUpload7 = $("#hndOriginalFileUploadNameBankState2").val();
    var fileUpload8 = $("#hndFileUploadNameBankState3").val();
    var originalFileUpload8 = $("#hndOriginalFileUploadNameBankState3").val();



    var filePassport = $("#hndPassportUploadName").val();
    var originalFilePassport = $("#hndOriginalPassportUploadName").val();
    var fileIdentity = $("#hndIdentityUploadName").val();
    var originalFileIdentity = $("#hndOriginalIdentityUploadName").val();

    var countryOfOrigin = $("#ddlCountryOfOrigin").val();
    var everBeenEvicted = $("#ddlEverBeenEvicted").val();
    var everBeenConvicted = $("#ddlEverBeenConvicted").val();
    var anyCriminalCharges = $("#ddlAnyCriminalCharges").val();
    var everBeenEvictedDetails = $("#txtEverBeenEvictedDetails").val();
    var everBeenConvictedDetails = $("#txtEverBeenConvictedDetails").val();
    var anyCriminalChargesDetails = $("#txtAnyCriminalChargesDetails").val();
    var doYouSmoke = $("#ddlDoYouSmoke").val();
    var referredByAnotherResident = $("#ddlReferredByAnotherResident").val();
    var brokerOrMerchantReff = $("#ddlBrokerOrMerchantReff").val();
    var referredByAnotherResidentName = $("#txtReferredByAnotherResidentName").val();
    var apartmentCommunity = $("#txtApartmentCommunity").val();
    var managementCompany = $("#txtManagementCompany").val();
    var managementCompanyPhone = unformatText($("#txtManagementCompanyPhone").val());
    var properNoticeLeaseAgreement = $("#ddlProperNoticeLeaseAgreement").val();

    if (!OtherGender) {
        OtherGender = $("#txtOtherGender").val(" ");
    }

    if (EmergencyMobile) {
        if (EmergencyMobile.length < 10) {
            msg += "Please enter 10 digit emergency mobile number </br>";
        }
    }
    if (EmergencyHomePhone) {
        if (EmergencyHomePhone.length < 10) {
            msg += "Please enter 10 digit emergency home phone number </br>";
        }
    }
    if (EmergencyWorkPhone) {
        if (EmergencyWorkPhone.length < 10) {
            msg += "Please enter 10 digit emergency work phone number </br>";
        }
    }
    if (managementCompanyPhone) {
        if (managementCompanyPhone.length < 10) {
            msg += "Please enter 10 digit management company phone number </br>";
        }
    }

    if (stepcompleted == 12) {
        if (nofup < 2) {
            msg += "Please Select any  two of the three options (tax return, paystubs, and bank statements)";
        }
    }
    if (msg != "") {
        $.alert({
            title: "",
            content: msg,
            type: 'red'
        })
        $("#divLoader").hide();
        showCurrentStep(stepcompleted - 1);
        return;
    }
    $formData = new FormData();
    $formData.append('ProspectID', ProspectID);
    $formData.append('FirstName', FirstName);
    $formData.append('MiddleInitial', MiddleInitial);
    $formData.append('LastName', LastName);
    $formData.append('DateOfBirth', DateOfBirth);
    $formData.append('Gender', Gender);
    $formData.append('Email', Email);
    $formData.append('Mobile', Mobile);
    $formData.append('CountryIssuance', CountryIssuance);
    $formData.append('DateIssuance', DateIssuance);
    $formData.append('DateExpire', DateExpire);
    $formData.append('IDType', IDType);
    $formData.append('State', State);
    $formData.append('Country', Country);
    $formData.append('HomeAddress1', HomeAddress1);
    $formData.append('HomeAddress2', HomeAddress2);
    $formData.append('StateHome', StateHome);
    $formData.append('CityHome', CityHome);
    $formData.append('ZipHome', ZipHome);
    $formData.append('RentOwn', RentOwn);
    $formData.append('MoveInDateFrom', MoveInDateFrom);
    $formData.append('MonthlyPayment', MonthlyPayment);
    $formData.append('Reason', Reason);
    $formData.append('Country2', Country2);
    $formData.append('HomeAddress12', HomeAddress12);
    $formData.append('HomeAddress22', HomeAddress22);
    $formData.append('StateHome2', StateHome2);
    $formData.append('CityHome2', CityHome2);
    $formData.append('ZipHome2', ZipHome2);

    $formData.append('RentOwn2', RentOwn2);
    $formData.append('MoveInDateFrom2', MoveInDateFrom2);
    $formData.append('MoveInDateTo2', MoveInDateTo2);
    $formData.append('MonthlyPayment2', MonthlyPayment2);
    $formData.append('Reason2', Reason2);
    $formData.append('EmployerName', EmployerName);
    $formData.append('JobTitle', JobTitle);
    $formData.append('JobType', JobType);
    $formData.append('StartDate', StartDate);
    $formData.append('Income', Income);
    $formData.append('AdditionalIncome', AdditionalIncome);
    $formData.append('SupervisorName', SupervisorName);
    $formData.append('SupervisorPhone', SupervisorPhone);
    $formData.append('SupervisorEmail', SupervisorEmail);
    $formData.append('OfficeCountry', OfficeCountry);
    $formData.append('OfficeAddress1', OfficeAddress1);
    $formData.append('OfficeAddress2', OfficeAddress2);
    $formData.append('OfficeState', OfficeState);
    $formData.append('OfficeCity', OfficeCity);
    $formData.append('OfficeZip', OfficeZip);
    $formData.append('Relationship', Relationship);
    $formData.append('EmergencyFirstName', EmergencyFirstName);
    $formData.append('EmergencyLastName', EmergencyLastName);
    $formData.append('EmergencyMobile', EmergencyMobile);
    $formData.append('EmergencyHomePhone', EmergencyHomePhone);
    $formData.append('EmergencyWorkPhone', EmergencyWorkPhone);
    $formData.append('EmergencyEmail', EmergencyEmail);
    $formData.append('EmergencyCountry', EmergencyCountry);
    $formData.append('EmergencyAddress1', EmergencyAddress1);
    $formData.append('EmergencyAddress2', EmergencyAddress2);
    $formData.append('EmergencyStateHome', EmergencyStateHome);
    $formData.append('EmergencyCityHome', EmergencyCityHome);

    $formData.append('EmergencyZipHome', EmergencyZipHome);
    $formData.append('IsInternational', isInternational);
    $formData.append('IsAdditionalRHistory', isAdditionalRHistory);
    $formData.append('OtherGender', OtherGender);

    $formData.append('TaxReturn', fileUpload1);
    $formData.append('UploadOriginalFileName1', originalFileUpload1);
    $formData.append('TaxReturn2', fileUpload2);
    $formData.append('UploadOriginalFileName2', originalFileUpload2);
    $formData.append('TaxReturn3', fileUpload3);
    $formData.append('UploadOriginalFileName3', originalFileUpload3);

    //sachin m 11 may
    $formData.append('TaxReturn4', fileUpload4);
    $formData.append('UploadOriginalFileName4', originalFileUpload4);
    $formData.append('TaxReturn5', fileUpload5);
    $formData.append('UploadOriginalFileName5', originalFileUpload5);
    $formData.append('TaxReturn6', fileUpload6);
    $formData.append('UploadOriginalFileName6', originalFileUpload6);
    $formData.append('TaxReturn7', fileUpload7);
    $formData.append('UploadOriginalFileName7', originalFileUpload7);
    $formData.append('TaxReturn8', fileUpload8);
    $formData.append('UploadOriginalFileName8', originalFileUpload8);

    $formData.append('PassportDocument', filePassport);
    $formData.append('UploadOriginalPassportName', originalFilePassport);
    $formData.append('IdentityDocument', fileIdentity);
    $formData.append('UploadOriginalIdentityName', originalFileIdentity);
    $formData.append('StepCompleted', stepcompleted);

    $formData.append('CountryOfOrigin', countryOfOrigin);
    $formData.append('Evicted', everBeenEvicted);
    $formData.append('ConvictedFelony', everBeenConvicted);
    $formData.append('CriminalChargPen', anyCriminalCharges);
    $formData.append('EvictedDetails', everBeenEvictedDetails);
    $formData.append('ConvictedFelonyDetails', everBeenConvictedDetails);
    $formData.append('CriminalChargPenDetails', anyCriminalChargesDetails);
    $formData.append('DoYouSmoke', doYouSmoke);
    $formData.append('ReferredResident', referredByAnotherResident);
    $formData.append('ReferredBrokerMerchant', brokerOrMerchantReff);
    $formData.append('ReferredResidentName', referredByAnotherResidentName);
    $formData.append('ApartmentCommunity', apartmentCommunity);
    $formData.append('ManagementCompany', managementCompany);
    $formData.append('ManagementCompanyPhone', managementCompanyPhone);
    $formData.append('IsProprNoticeLeaseAgreement', properNoticeLeaseAgreement);

    if ($("#rbtnPaystub").is(":checked")) {
        $formData.append('IsPaystub', 1);
    }
    if ($("#rbtnFedralTax").is(":checked")) {
        $formData.append('IsFedralTax', 1);
    }
    if ($("#rbtnBankStatement").is(":checked")) {
        $formData.append('IsBankState', 1);
    }

    $.ajax({
        url: '/ApplyNow/SaveTenantOnline',
        type: 'post',
        data: $formData,
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            //getApplyNowList(idmsg[0]);
            var stepcomp = parseInt($("#hdnStepCompleted").val());
            if (stepcomp < stepcompleted) {
                $("#hdnStepCompleted").val(stepcompleted);
            }
        }
    });
};
var getFillSummary = function (id) {
    $("#divLoaderFullData").show();
    var model = {
        id: id
    };
    $.ajax({
        url: '/ApplyNow/GetTenantOnlineList',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#summName").text(response.model.FirstName + " " + response.model.MiddleInitial + " " + response.model.LastName);
            $("#summNamep").text(response.model.FirstName + " " + response.model.MiddleInitial + " " + response.model.LastName);
            $("#summDob").text(response.model.DateOfBirthTxt);
            $("#summDobp").text(response.model.DateOfBirthTxt);
            $("#summEmail").text(response.model.Email);
            $("#summEmailp").text(response.model.Email);
            $("#summPhone").text(formatPhoneFax(response.model.Mobile));
            var isUSCitizen = response.model.IsInternational;
            var countryOrigin = $("#ddlCountryOfOrigin option:selected").text();
            $("#summCitizen").text(isUSCitizen == 0 ? "Yes" : "No");
            if (isUSCitizen == 1) {
                $("#sumCOrigin_tr").removeClass("hidden");
                $("#summCountryofOrigin").text(countryOrigin);
            }
            else {
                $("#sumCOrigin_tr").addClass("hidden");
                $("#summCountryofOrigin").text("");
            }
            $("#summPhonep").text(formatPhoneFax(response.model.Mobile));
            $("#summSSN").text(response.model.SSN);
            $("#summSSNp").text(response.model.SSN);
            if (response.model.Gender == 1) {
                $("#summGender").text("Male");
                $("#summGenderp").text("Male");
            } else {
                $("#summGender").text("Female");
                $("#summGenderp").text("Female");
            }

            $("#summDriverL").text(response.model.IDNumber);
            $("#summDriverLp").text(response.model.IDNumber);
            $("#summCuAddress1").text(response.model.HomeAddress1);
            $("#summCuAddress2").text(response.model.HomeAddress2);
            $("#summCuState").text(response.model.StateHomeString);
            $("#summCuCity").text(response.model.CityHome);
            $("#summCuZip").text(response.model.ZipHome);
            $("#summCuMoveInDate").text(response.model.MoveInDateFromTxt);
            $("#summCuAddp").text(response.model.HomeAddress1 + " " + response.model.HomeAddress2 + ", " + response.model.CityHome + ", " + response.model.StateHomeString + "- " + response.model.ZipHome);
            $("#summEmployerName").text(response.model.EmployerName);
            $("#summEmployerJobTitle").text(response.model.JobTitle);
            if (response.model.JobType == 0) {
                $("#summEmployerJobType").text("");
            }
            else if (response.model.JobType == 1) {
                $("#summEmployerJobType").text("Permenant");
            }
            else if (response.model.JobType == 2) {
                $("#summEmployerJobType").text("Contract Basis");
            }

            $("#summEmployerStartDate").text(response.model.StartDateTxt);
            $("#summEmployerAnnualIncome").text(formatMoney(response.model.AnnualIncome));
            $("#summEmployerSupervisorName").text(response.model.SupervisorName);
            $("#summEmployerSupervisorPhone").text(formatPhoneFax(response.model.SupervisorPhone));
            $("#summEmployerp").text(response.model.EmployerName + ", " + response.model.OfficeAddress1 + ", " + response.model.OfficeCity + " (" + response.model.JobTitle + ") ");
            $("#summEstartdate").text(response.model.StartDateTxt);
            $("#summEstartdatep").text(response.model.StartDateTxt);
            $("#summSalary").text(formatMoney(response.model.Income));
            $("#summSalaryp").text(formatMoney(response.model.Income));
            $("#summEmergname").text(response.model.EmergencyFirstName + " " + response.model.EmergencyLastName);
            $("#summEmegmobile").text(formatPhoneFax(response.model.EmergencyMobile));
            $("#summEmerrelation").text(response.model.Relationship);
            $("#summEmergnamep").text(response.model.EmergencyFirstName + " " + response.model.EmergencyLastName);
            $("#summEmegmobilep").text(formatPhoneFax(response.model.EmergencyMobile));
            $("#summEmerrelationp").text(response.model.Relationship);
            $("#divLoaderFullData").hide();
        }
    });
};
var getTenantOnlineList = function (id) {
    $("#divLoaderFullData").show();
    var model = {
        id: id
    };
    $.ajax({
        url: '/ApplyNow/GetTenantOnlineList',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            if (response.model.IsAgreeSummary == '1') {
                $("#chkAgreeSummarry").attr("checked", "checked");
                $("#chkAgreeSummarry").parent().addClass("checked");
            }
            else {
                $("#chkAgreeSummarry").removeAttr("checked");
                $("#chkAgreeSummarry").parent().remove("checked");
            }
            
            $("#ddlIsInter").val(response.model.IsInternational).change();
            $("#hndDocumentTypePersonal").val(response.model.IDType);
            $("#ddlCountryOfOrigin").val(response.model.CountryOfOrigin);
            $("#ddlEverBeenEvicted").val(response.model.Evicted).change();
            $("#ddlEverBeenConvicted").val(response.model.ConvictedFelony).change();
            $("#ddlAnyCriminalCharges").val(response.model.CriminalChargPen).change();
            $("#txtEverBeenEvictedDetails").val(response.model.EvictedDetails);
            $("#txtEverBeenConvictedDetails").val(response.model.ConvictedFelonyDetails);
            $("#txtAnyCriminalChargesDetails").val(response.model.CriminalChargPenDetails);

            $("#ddlDoYouSmoke").val(response.model.DoYouSmoke);
            $("#ddlReferredByAnotherResident").val(response.model.ReferredResident).change();
            $("#ddlBrokerOrMerchantReff").val(response.model.ReferredBrokerMerchant);
            $("#txtReferredByAnotherResidentName").val(response.model.ReferredResidentName);

            $("#txtApartmentCommunity").val(response.model.ApartmentCommunity);
            $("#txtManagementCompany").val(response.model.ManagementCompany);
            $("#txtManagementCompanyPhone").val(formatPhoneFax(response.model.ManagementCompanyPhone));
            $("#ddlProperNoticeLeaseAgreement").val(response.model.IsProprNoticeLeaseAgreement);
            if (response.model.IsInternational == 1) {
                $("#SCountryOfOriginStringtext").text(response.model.CountryOfOriginString);
                $("#SumPass").removeClass('hidden');
                $("#summPassportNumber").text(response.model.PassportNumber);
                $("#summCountryIssuance").text(response.model.CountryIssuance);
            } else {
                $("#SumPass").addClass('hidden');
                $("#summSSNp").text(response.model.SSN);
                $("#summDriverLp").text(response.model.IDNumber);
            }
            $("#UScitzen").text(response.model.IsInternational == 1 ? "No" : "Yes");
            $("#suACuminty").text(response.model.ApartmentCommunity);
            $("#sumAManagementCompany").text(response.model.ManagementCompany);
            $("#sumAManagementCompanyPhone").text(formatPhoneFax(response.model.ManagementCompanyPhone));

            $("#sumAIsProprNoticeLeaseAgreement").text(response.model.stringIsProprNoticeLeaseAgreement);
            $("#sumAQStringEvicted").text(response.model.StringEvicted);
            $("#AQStringEvicted").text(response.model.StringEvicted);
            $("#AQStringCriminalChargPen").text(response.model.StringCriminalChargPen);
            $("#AQStringDoYouSmoke").text(response.model.StringDoYouSmoke);
            $("#AQStringReferredResident").text(response.model.StringReferredResident);
            $("#AQStringReferredBrokerMerchant").text(response.model.StringReferredBrokerMerchant);
            $("#AQStringConvictedFelony").text(response.model.StringConvictedFelony);

            $("#AQEvictedDetails").text(response.model.EvictedDetails);
            $("#AQConvictedFelonyDetails").text(response.model.ConvictedFelonyDetails);
            $("#AQCriminalChargPenDetails").text(response.model.CriminalChargPenDetails);
            $("#AQReferredResidentName").text(response.model.ReferredResidentName);

            $("#summCredateF").text(response.model.MoveInDateFromTxt);
            $("#summCRE").text(response.model.HomeAddress1 + " , " + response.model.HomeAddress2);
            $("#summECountry").text(response.model.CityHome);
            $("#summECountry").text(response.model.StateHomeString);
            $("#summECountry").text(response.model.ZipHome);
            $("#summreCou").text(response.model.CountryString);
            $("#summMrent").text("$ " + formatMoney(response.model.MonthlyPayment));
            $("#summReson").text(response.model.Reason);

            $("#summECountry").text(response.model.CountryString);
            $("#summEmployerName").text(response.model.EmployerName);
            $("#summOfficeAdd").text(response.model.OfficeAddress1);
            $("#summOfficeC").text(response.model.OfficeCity);
            $("#summJobTitle").text(response.model.JobTitle);
            $("#summAdditionalI").text("$ " + formatMoney(response.model.AdditionalIncome));
            $("#summSalaryp").text("$ " + formatMoney(response.model.Income));
            $("#summSupNa").text(response.model.SupervisorName);
            $("#summSupMob").text(formatPhoneFax(response.model.SupervisorPhone));
            $("#summEAddre1").text(response.model.OfficeAddress1 + ", " + response.model.OfficeAddress2);
            $("#summEmerN").text(response.model.EmergencyFirstName + "  " + response.model.EmergencyLastName);
            $("#summEmerRela").text(response.model.Relationship);
            $("#summEmerMob").text(formatPhoneFax(response.model.EmergencyMobile));
            $("#summEmerCountry").text(response.model.EmergencyCountryString);
            $("#summEmerAddd").text(response.model.EmergencyAddress1 + "  " + response.model.EmergencyAddress2);
            
            $("#txtFirstNamePersonal").val(response.model.FirstName);
            $("#txtMiddleInitial").val(response.model.MiddleInitial);
            $("#txtMiddleInitialReg").val(response.model.MiddleInitial);
            $("#txtLastNamePersonal").val(response.model.LastName);

            $("#summName").text(response.model.FirstName + " " + response.model.MiddleInitial + " " + response.model.LastName);
            $("#summNamep").text(response.model.FirstName + " " + response.model.MiddleInitial + " " + response.model.LastName);
            if (response.model.FirstName != null) {
                $("#mainApplName").text(response.model.FirstName + " " + response.model.MiddleInitial + " " + response.model.LastName);
            }
            $("#txtDateOfBirth").val(response.model.DateOfBirthTxt);
            $("#summDob").text(response.model.DateOfBirthTxt);
            $("#summDobp").text(response.model.DateOfBirthTxt);
            $("#ddlGender").val(response.model.Gender).change();

            $("#ddlGenderReg").val(response.model.Gender).change();

            $("#txtEmailNew").val(response.model.Email);
            $("#summEmail").text(response.model.Email);
            $("#summEmailp").text(response.model.Email);
            $("#txtMobileNumber").val(formatPhoneFax(response.model.Mobile));
            $("#summPhone").text(formatPhoneFax(response.model.Mobile));
            $("#summPhonep").text(formatPhoneFax(response.model.Mobile));
            $("#txtPassportNum").val(response.model.PassportNumber);
            $("#txtCOI").val(response.model.CountryIssuance);
            $("#txtDateOfIssuance").val(response.model.DateIssuanceTxt);
            $("#txtDateOfExpiration").val(response.model.DateExpireTxt);
            $("#ddlDocumentTypePersonal").val(response.model.IDType).change();
            $("#ddlIDTypeReg").val(response.model.IDType).change();
            $("#ddlStatePersonal").val(response.model.StateHome).change();
            $("#ddlStateIDDocReg").val(response.model.State).change();
           
            $("#txtSSNNumber").val(response.model.SSN);
            $("#txtSSNNumberReg").val(response.model.SSN);
            if (id != 0) {
                $("#txtSSNNumberReg").attr("disabled", true);
                $("#txtIDNumberReg").attr("disabled", true);
                $("#ddlStateIDDocReg").attr("disabled", true);
                $("#ddlIDTypeReg").attr("disabled", true);
            }

            $("#summSSN").text(response.model.SSN);
            if (response.model.Gender == 1) {
                $("#summGender").text("Male");
                $("#summGenderp").text("Male");
            } else {
                $("#summGender").text("Female");
                $("#summGenderp").text("Female");
            }

            $("#summDriverL").text(response.model.IDNumber);

            $("#txtIDNumber").val(response.model.IDNumber);
            $("#txtIDNumberReg").val(response.model.IDNumber);

            $("#txtAddress1").val(response.model.HomeAddress1);
            $("#txtAddress1Reg").val(response.model.HomeAddress1);
            $("#txtAddress2").val(response.model.HomeAddress2);
            $("#txtAddress2Reg").val(response.model.HomeAddress2);
            $("#summCuAddress1").text(response.model.HomeAddress1);
            $("#summCuAddress2").text(response.model.HomeAddress2);
            $("#summCuState").text(response.model.StateHomeString);
            $("#summCuCity").text(response.model.CityHome);
            $("#summCuZip").text(response.model.ZipHome);
            $("#summCuMoveInDate").text(response.model.MoveInDateFromTxt);
            $("#summCuAddp").text(response.model.HomeAddress1 + " " + response.model.HomeAddress2 + ", " + response.model.CityHome + ", " + response.model.StateHomeString + "- " + response.model.ZipHome);

            $("#txtZip").val(response.model.ZipHome);
            $("#txtZipReg").val(response.model.ZipHome);
            $("#ddlRentOwn").val(response.model.RentOwn).change();
            $("#txtMonthlyPayment").val(formatMoney(response.model.MonthlyPayment));
            $("#txtReasonforleaving").val(response.model.Reason);
            $("#txtEmployerName").val(response.model.EmployerName);
            $("#summEmployerName").text(response.model.EmployerName);
            $("#summEmployerJobTitle").text(response.model.JobTitle == "" ? "N/A" : response.model.JobTitle);
            if (response.model.JobType == 0) {
                $("#summEmployerJobType").text("N/A");
            }
            else if (response.model.JobType == 1) {
                $("#summEmployerJobType").text("Permenant");
            }
            else if (response.model.JobType == 2) {
                $("#summEmployerJobType").text("Contract Basis");
            }

            $("#summEmployerStartDate").text(response.model.StartDateTxt);
            $("#summEmployerAnnualIncome").text(formatMoney(response.model.Income));
            $("#summEmployerSupervisorName").text(response.model.SupervisorName);
            $("#summEmployerSupervisorPhone").text(formatPhoneFax(response.model.SupervisorPhone));
            $("#summEmployerp").text(response.model.EmployerName + ", " + response.model.OfficeAddress1 + ", " + response.model.OfficeCity + " (" + response.model.JobTitle + ") ");

            $("#txtJobTitle").val(response.model.JobTitle);
            $("#ddlJobType").val(response.model.JobType);
            $("#txtStartDate").val(response.model.StartDateTxt);
            $("#summEstartdate").text(response.model.StartDateTxt);
            $("#summEstartdatep").text(response.model.StartDateTxt);
            $("#txtAnnualIncome").val(formatMoney(response.model.Income));
            $("#summSalary").text(formatMoney(response.model.Income));
            $("#summSalaryp").text(formatMoney(response.model.Income));
            $("#txtAddAnnualIncome").val(formatMoney(response.model.AdditionalIncome));
            $("#txtSupervisiorName").val(response.model.SupervisorName);
            $("#txtSupervisiorPhone").val(formatPhoneFax(response.model.SupervisorPhone));
            $("#txtSupervisiorEmail").val(response.model.SupervisorEmail);
            $("#txtofficeAddress1").val(response.model.OfficeAddress1);
            $("#txtofficeAddress2").val(response.model.OfficeAddress2);
            $("#txtZipOffice").val(response.model.OfficeZip);
            $("#txtRelationship").val(response.model.Relationship);
            $("#txtEmergencyFirstName").val(response.model.EmergencyFirstName);
            $("#txtEmergencyLastName").val(response.model.EmergencyLastName);
            $("#txtEmergencyMobile").val(formatPhoneFax(response.model.EmergencyMobile));
            $("#txtEmergencyHomePhone").val(formatPhoneFax(response.model.EmergencyHomePhone));
            $("#txtEmergencyWorkPhone").val(formatPhoneFax(response.model.EmergencyWorkPhone));
            $("#txtEmergencyEmail").val(response.model.EmergencyEmail);
            $("#txtEmergencyAddress1").val(response.model.EmergencyAddress1);
            $("#txtEmergencyAddress2").val(response.model.EmergencyAddress2);
            $("#summEmergname").text(response.model.EmergencyFirstName + " " + response.model.EmergencyLastName);
            $("#summEmegmobile").text(formatPhoneFax(response.model.EmergencyMobile));
            $("#summEmerrelation").text(response.model.Relationship);
            $("#summEmergnamep").text(response.model.EmergencyFirstName + " " + response.model.EmergencyLastName);
            $("#summEmegmobilep").text(formatPhoneFax(response.model.EmergencyMobile));
            $("#summEmerrelationp").text(response.model.Relationship);
            $("#txtEmergencyZip").val(response.model.EmergencyZipHome);
            $("#ddlCityHome").val(response.model.CityHome);
            $("#ddlCityReg").val(response.model.CityHome);

            $("#ddlCityContact").val(response.model.EmergencyCityHome);
            $("#ddlCityEmployee").val(response.model.OfficeCity);
            if (response.model.Gender == '3') {
                $("#txtOtherGender").val(response.model.OtherGender);
            }
            else {
                $("#txtOtherGender").val('');
            }

            if (response.model.Gender == '3') {
                $("#txtOtherGenderReg").val(response.model.OtherGender);
            }
            else {
                $("#txtOtherGenderReg").val('');
            }

            $("#txtMoveInDateFrom").val(response.model.MoveInDateFromTxt);
            $("#txtCountry").val(response.model.Country);
            fillStateDDL_Home(response.model.Country, response.model.StateHome);

            $("#txtCountryReg").val(response.model.Country);

            fillStateDDLReg_IDType(response.model.Country, response.model.StateHome);
            fillStateDDLReg_Home(response.model.Country, response.model.StateHome);
            
            $("#txtCountryOffice").val(response.model.OfficeCountry);
            fillStateDDL_Office(response.model.OfficeCountry, response.model.OfficeState);
            
            $("#txtEmergencyCountry").val(response.model.EmergencyCountry);
            fillStateDDL_EmeContact(response.model.EmergencyCountry, response.model.EmergencyStateHome);
            
            if (response.model.IdentityDocument != "") {
                $("#hndHasIdentityFile").val("1");
            } else {
                $("#hndHasIdentityFile").val("0");
            }
            if (response.model.PassportDocument != "") {
                $("#hndHasPassportFile").val("1");
            } else {
                $("#hndHasPassportFile").val("0");
            }
            if (response.model.TaxReturn != "") {
                if (response.model.TaxReturn == "0") {
                    $("#hndHasTaxReturnFile1").val("0");
                }
                else {
                    $("#hndHasTaxReturnFile1").val("1");
                }
            } else {
                $("#hndHasTaxReturnFile1").val("0");
            }
            if (response.model.TaxReturn2 != "") {
                if (response.model.TaxReturn2 == "0") {
                    $("#hndHasTaxReturnFile2").val("0");
                }
                else {
                    $("#hndHasTaxReturnFile2").val("1");
                }
            } else {
                $("#hndHasTaxReturnFile2").val("0");
            }
            if (response.model.TaxReturn3 != "") {
                if (response.model.TaxReturn3 == "0") {
                    $("#hndHasTaxReturnFile3").val("0");
                }
                else {
                    $("#hndHasTaxReturnFile3").val("1");
                }
            } else {
                $("#hndHasTaxReturnFile3").val("0");
            }
            if (response.model.TaxReturn4 != "") {
                if (response.model.TaxReturn4 == "0") {
                    $("#hndHasTaxReturnFile4").val("0");
                }
                else {
                    $("#hndHasTaxReturnFile4").val("1");
                }
            } else {
                $("#hndHasTaxReturnFile4").val("0");
            }
            if (response.model.TaxReturn5 != "") {
                if (response.model.TaxReturn5 == "0") {
                    $("#hndHasTaxReturnFile5").val("0");
                }
                else {
                    $("#hndHasTaxReturnFile5").val("1");
                }
            } else {
                $("#hndHasTaxReturnFile5").val("0");
            }
            if (response.model.TaxReturn6 != "") {
                if (response.model.TaxReturn6 == "0") {
                    $("#hndHasBankStateFile1").val("0");
                }
                else {
                    $("#hndHasBankStateFile1").val("1");
                }
            } else {
                $("#hndHasBankStateFile1").val("0");
            }
            if (response.model.TaxReturn7 != "") {
                if (response.model.TaxReturn7 == "0") {
                    $("#hndHasBankStateFile2").val("0");
                }
                else {
                    $("#hndHasBankStateFile2").val("1");
                }
            } else {
                $("#hndHasBankStateFile2").val("0");
            }
            if (response.model.TaxReturn8 != "") {
                if (response.model.TaxReturn8 == "0") {
                    $("#hndHasBankStateFile3").val("0");
                }
                else {
                    $("#hndHasBankStateFile3").val("1");
                }
            } else {
                $("#hndHasBankStateFile3").val("0");
            }

            //alert(response.model.HaveVehicle + "  " + response.model.HavePet);
            if (response.model.HaveVehicle == true) {
                $("#chkDontHaveVehicle").iCheck('check');
            }
            else {
                $("#chkDontHaveVehicle").iCheck('uncheck');
            }
            if (response.model.HavePet == true) {
                $("#chkDontHavePet").iCheck('check');
                $("#chkDontHavePet").prop('disabled', 'disabled');
            }
            else {
                $("#chkDontHavePet").iCheck('uncheck');
                $("#chkDontHavePet").prop('disabled', 'disabled');
            }

            $("#hndPassportUploadName").val(response.model.PassportDocument);
            $("#hndOriginalPassportUploadName").val(response.model.UploadOriginalPassportName);
            $("#hndIdentityUploadName").val(response.model.IdentityDocument);
            $("#hndOriginalIdentityUploadName").val(response.model.UploadOriginalIdentityName);
            $("#hndFileUploadName1").val(response.model.TaxReturn);
            $("#hndOriginalFileUploadName1").val(response.model.UploadOriginalFileName1);
            $("#hndFileUploadName2").val(response.model.TaxReturn2);
            $("#hndOriginalFileUploadName2").val(response.model.UploadOriginalFileName2);
            $("#hndFileUploadName3").val(response.model.TaxReturn3);
            $("#hndOriginalFileUploadName3").val(response.model.UploadOriginalFileName3);


            //sachin m 11 may
            $("#hndFileUploadName4").val(response.model.TaxReturn4);
            $("#hndOriginalFileUploadName4").val(response.model.UploadOriginalFileName4);
            $("#hndFileUploadName5").val(response.model.TaxReturn5);
            $("#hndOriginalFileUploadName5").val(response.model.UploadOriginalFileName5);

            $("#hndFileUploadNameBankState1").val(response.model.TaxReturn6);
            $("#hndOriginalFileUploadNameBankState1").val(response.model.UploadOriginalFileName6);
            $("#hndFileUploadNameBankState2").val(response.model.TaxReturn7);
            $("#hndOriginalFileUploadNameBankState2").val(response.model.UploadOriginalFileName7);
            $("#hndFileUploadNameBankState3").val(response.model.TaxReturn8);
            $("#hndOriginalFileUploadNameBankState3").val(response.model.UploadOriginalFileName8);



            //To Display File Name On Uploader
            
            if (response.model.UploadOriginalPassportName != '') {
                $("#fileUploadPassportShow").text(response.model.UploadOriginalPassportName);
            }
            if (response.model.UploadOriginalIdentityName != '') {
                $("#fileUploadIdentityShow").text(response.model.UploadOriginalIdentityName);
            }
            if (response.model.UploadOriginalFileName1 != '') {
                if (response.model.UploadOriginalFileName1 != '0') {
                    $("#fileUploadTaxReturn1Show").text(response.model.UploadOriginalFileName1);
                }
            }
            if (response.model.UploadOriginalFileName2 != '') {
                if (response.model.UploadOriginalFileName2 != '0') {
                    $("#fileUploadTaxReturn2Show").text(response.model.UploadOriginalFileName2);
                }
            }
            if (response.model.UploadOriginalFileName3 != '') {
                if (response.model.UploadOriginalFileName3 != '0') {
                    $("#fileUploadTaxReturn3Show").text(response.model.UploadOriginalFileName3);
                }
            }

            //sachin m 11 may
            if (response.model.UploadOriginalFileName4 != '') {
                if (response.model.UploadOriginalFileName4 != '0') {
                    $("#fileUploadTaxReturn4Show").text(response.model.UploadOriginalFileName4);
                }
            }
            if (response.model.UploadOriginalFileName5 != '') {
                if (response.model.UploadOriginalFileName5 != '0') {
                    $("#fileUploadTaxReturn5Show").text(response.model.UploadOriginalFileName5);
                }
            }

            if (response.model.UploadOriginalFileName6 != '') {
                if (response.model.UploadOriginalFileName6 != '0') {
                    $("#fileBankState1Show").text(response.model.UploadOriginalFileName6);
                }
            }
            if (response.model.UploadOriginalFileName7 != '') {
                if (response.model.UploadOriginalFileName7 != '0') {
                    $("#fileBankState2Show").text(response.model.UploadOriginalFileName7);
                }
            }
            if (response.model.UploadOriginalFileName8 != '') {
                if (response.model.UploadOriginalFileName8 != '0') {
                    $("#fileBankState3Show").text(response.model.UploadOriginalFileName8);
                }
            }

            //alert(response.model.IsPaystub);

            if (response.model.IsPaystub == 1) {
                $("#rbtnPaystub").iCheck('check');
                $('#divUpload3').removeClass('hidden');
                $("#fileUploadPaystubShow").text("3 files selected");
                $("#mpayFile1").removeClass("hidden");
                $("#mpayFile2").removeClass("hidden");
                $("#mpayFile3").removeClass("hidden");
                $("#apayFile1").addClass("hidden");
                $("#apayFile2").addClass("hidden");
                $("#apayFile3").addClass("hidden");
                $("#spayFile1").text(response.model.UploadOriginalFileName3);
                $("#spayFile2").text(response.model.UploadOriginalFileName4);
                $("#spayFile3").text(response.model.UploadOriginalFileName5);
            }
            if (response.model.IsFedralTax == 1) {
                $("#rbtnFedralTax").iCheck('check');
                $("#fileUploadFedralShow").text("2 files selected");
                $("#mfedFile1").removeClass("hidden");
                $("#mfedFile2").removeClass("hidden");
                $("#afedFile1").addClass("hidden");
                $("#afedFile2").addClass("hidden");
                $("#sfedFile1").text(response.model.UploadOriginalFileName1);
                $("#sfedFile2").text(response.model.UploadOriginalFileName2);
            }
            if (response.model.IsBankState == 1) {
                $("#rbtnBankStatement").iCheck('check');
                $('#divBankUpload').removeClass('hidden');
                $("#fileUploadBankStatementShow").text("3 files selected");
                $("#mbankstateFile1").removeClass("hidden");
                $("#mbankstateFile2").removeClass("hidden");
                $("#mbankstateFile3").removeClass("hidden");
                $("#abankstateFile1").addClass("hidden");
                $("#abankstateFile2").addClass("hidden");
                $("#abankstateFile3").addClass("hidden");
                $("#sbankstateFile1").text(response.model.UploadOriginalFileName6);
                $("#sbankstateFile2").text(response.model.UploadOriginalFileName7);
                $("#sbankstateFile3").text(response.model.UploadOriginalFileName8);
            }
            $("#divLoaderFullData").hide();
            var modelstep = $("#hdnStepCompleted").val();
            var stepcompleted = parseInt(response.model.StepCompleted);
            if (modelstep < stepcompleted) {
                $("#hdnStepCompleted").val(stepcompleted);
            } else {
                stepcompleted = modelstep;
            }
            showCurrentStep(stepcompleted, stepcompleted);
            //for floor plan
            if (parseInt(id) != 0) {
                $("#imgFloorPlanNew").attr("src", "/content/assets/img/plan/" + response.model.FloorPlanImageUnit + ".jpg");
                $("#lblfloorPlan").text(response.model.FloorPlanImageUnit);
                $("#lblBed33").text(response.model.FloorPlanBedUnit);
                $("#lblBath33").text(response.model.FloorPlanBathUnit);
                $("#lblArea33").text(response.model.FloorPlanAreaUnit);
                $("#lblRent33").text(response.model.FloorPlanStartPriceUnit);
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
                    $("#divLoader").show();
                    $.ajax({
                        url: "/Vehicle/DeleteTenantVehicle",
                        type: "post",
                        contentType: "application/json utf-8",
                        data: JSON.stringify(model),
                        dataType: "JSON",
                        success: function (response) {
                            $("#divLoader").hide();
                            $('#tr_' + vehId).remove();
                            fillUnitParkingList();
                            $("#btnAddVehicle").removeClass("hidden");
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
                    $("#divLoader").show();
                    $.ajax({
                        url: "/Tenant/Pet/DeleteTenantPet/",
                        type: "post",
                        contentType: "application/json utf-8",
                        data: JSON.stringify(model),
                        dataType: "JSON",
                        success: function (response) {
                            $("#divLoader").hide();
                            $('#tr_' + petId).remove();
                            getPetListsApplyNow();
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
                    $("#divLoader").show();
                    $.ajax({
                        url: "/Tenant/Applicant/DeleteApplicant/",
                        type: "post",
                        contentType: "application/json utf-8",
                        data: JSON.stringify(model),
                        dataType: "JSON",
                        success: function (response) {
                            $("#divLoader").hide();
                            $('#div_' + appliId).remove();

                            getApplicantListsPrimary();
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

function showFloorPlanApplicant(flid, numbedroom, modelname) {
    $("#divLoaderFloorData").show();
    setTimeout(function () { $("#returnButton").removeClass("hidden"); $("#returnButton").html("Return to List View"); }, 1000);
    $("#UnitListDesc").text("Choose any unit in green to see more information including a video and complete layout of your unit. ");
    var bedroom = 0;
    if (!$("#ddlRoom").val()) {
        bedroom = 0;
    }
    else {
        bedroom = $("#ddlRoom").val();
    }
    if (bedroom != numbedroom) {
        bedroom = numbedroom;
    }

    var maxrent = 0;
    if ($("#txtMaxRent").val() == "0") {
        maxrent = "10000";
    }
    else {
        maxrent = $("#txtMaxRent").val();
    }
    var availdate = $("#txtDate").val();
    var leaseterm = $("#hndLeaseTermID").val();
    var prospectid = $("#hdnOPId").val();
    var model = { FloorID: flid, AvailableDate: availdate, Bedroom: bedroom, MaxRent: maxrent, LeaseTermID: leaseterm, ModelName: modelname, ProspectId: prospectid };
    $.ajax({
        url: "/Property/GetPropertyFloorDetails/",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {

            $("#popUnitPlan").empty();
            $("#popFloorCoordinate").removeClass("hidden");
            $("#popUnitDet").addClass("hidden");
            $("#popPromotion").addClass("hidden");
            $("#divUdet").addClass("hidden");
            // var html = "<h3 style='color: #4d738a; text-align:center;'>Selected : Floor " + response.model.FloorNo + "</h3>";
            var html = "";
            //html += "<div class='col-sm-12' style='background:#fff;text-align:center!important;'><span style='background-color:#006400;width:10px;height:10px'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style='color:#4d738a;'>&nbsp;&nbsp;Available</span>&nbsp;&nbsp;<span style='background-color:#ffff00;width:10px;height:10px'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style='color:#4d738a;'>&nbsp;&nbsp;Other Options</span>&nbsp;&nbsp;<span style='background-color:#FF0000;width:10px;height:10px'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style='color:#4d738a;'>&nbsp;&nbsp;Unavailable</span></div><br/><br/>";

            html += "<img src ='/content/assets/img/plan/" + response.model.FloorPlan + "' id='imgFloorCoordinate' class='' usemap='#unitimg'>";
            html += "<map name='unitimg' id='imgFloorCoordinateDiv'>";
            //console.log(JSON.stringify(response.model.lstUnitFloor));
            $.each(response.model.lstUnitFloor, function (elementType, value) {
                if (value.IsAvail == 1) {
                   
                    if (value.IsDisable == 1)
                    {
                        html += "<area shape='poly' id='unId_" + value.UID + "' class='tooltips UAarea' coords='" + value.Coordinates + "'>";

                    } else {
                        html += "<area shape='poly' id='unId_" + value.UID + "' class='tooltips UAarea' coords='" + value.Coordinates + "' href='javascript:void(0);' onclick='showPopAvailableFloorPlan(" + value.UID + ")'>";
                    }
                        html += "<div id='floorunId_" + value.UID + "' class='hidden divtooltipUnit'>" +
                        "<span><img src='/content/assets/img/plan/" + value.ModelName + ".png' id='imgModel_" + value.UID + "' class='img-responsive' /></span><hr>" +
                        "<span class='labelDivTool'>" + value.UnitNo + "</span><br />" +
                        "<span> Model: #" + value.ModelName + "</span><br />" +
                        "<span>" + value.Bedroom + " Bed / " + value.Bathroom + " Bath </span><br />" +
                        "<span>" + value.LeasedTerms + " Months</span><br />" +
                        "<span> Price: $" + formatMoney(value.Current_Rent) + "</span><br />" +
                        "<span> Available: " + value.AvailableDateText + "</span><br /></div>";

                } else if (value.IsAvail == 2) {

                    html += "<area shape='poly' id='unId_" + value.UID + "' class='tooltips UYarea' coords='" + value.Coordinates + "' href='javascript:void(0);' onclick='getPropertyUnitDetails(" + value.UID + ")' >";
                    // html += "<span class='tooltip-text' style='display: none'>" + value.UnitNo + "</span>";
                    //html += "<div id='floorunId_" + value.UID + "' class='hidden divtooltipUnit'><span>Unit No: " + value.UnitNo + "<br/>" + value.Bedroom + " bd / " + value.Bathroom + " ba</span><span> Available: Other</span></div>";
                    // html += "<div id='floorunId_" + value.UID + "' class='hidden divtooltipUnit'><span>" + value.UnitNo + "<br/> Model: #" + value.ModelName + "<br/>" + value.Bedroom + " bd / " + value.Bathroom + " ba<br/> Price: $" + formatMoney(value.Current_Rent) + "</span><span> Available: Other</span></div>";
                    html += "<div id='floorunId_" + value.UID + "' class='hidden divtooltipUnit'>" +
                        "<span><img src='/content/assets/img/plan/" + value.ModelName + ".png' id='imgModel_" + value.UID + "' class='img-responsive' /></span><hr>" +
                        "<span class='labelDivTool'>" + value.UnitNo + "</span><br />" +
                        "<span> Model: #" + value.ModelName + "</span><br />" +
                        "<span>" + value.Bedroom + " Bed / " + value.Bathroom + " Bath </span><br />" +
                        "<span>" + value.LeasedTerms + " Months</span><br />" +
                        "<span> Price: $" + formatMoney(value.Current_Rent) + "</span><br />" +
                        "<span> Available: Other Option</span><br /></div>";
                } else {
                    html += "<area shape='poly' id='unId_" + value.UID + "' class='tooltips Uarea' coords='" + value.Coordinates + "' >";
                    //html += "<div id='floorunId_" + value.UID + "' class='hidden divtooltipUnit'><span>Unit No: " + value.UnitNo + "<br/>" + value.Bedroom + " bd / " + value.Bathroom + " ba</span><span> Available: No</span></div>";
                    //html += "<div id='floorunId_" + value.UID + "' class='hidden divtooltipUnit'><span>" + value.UnitNo + "<br/> Model: #" + value.ModelName + "<br/>" + value.Bedroom + " bd / " + value.Bathroom + " ba<br/> Price: $" + formatMoney(value.Current_Rent) + "</span><span> Available: No</span></div>";
                    html += "<div id='floorunId_" + value.UID + "' class='hidden divtooltipUnit'>" +
                        "<span><img src='/content/assets/img/plan/" + value.ModelName + ".png' id='imgModel_" + value.UID + "' class='img-responsive' /></span><hr>" +
                        "<span class='labelDivTool'>" + value.UnitNo + "</span><br />" +
                        "<span> Model: #" + value.ModelName + "</span><br />" +
                        "<span>" + value.Bedroom + " Bed / " + value.Bathroom + " Bath </span><br />" +
                        "<span>" + value.LeasedTerms + " Months</span><br />" +
                        "<span> Price: $" + formatMoney(value.Current_Rent) + "</span><br />" +
                        "<span> Available: Unavailable</span><br /></div>";

                }

                if (value.UID == $("#hndUID").val()) {
                    html += "<area shape='poly' id='unId_" + value.UID + "' class='tooltips UUUarea' coords='" + value.Coordinates + "' href='javascript:void(0);' onclick='getPropertyUnitDetails(" + value.UID + ")' >";
                    //html += "<div id='floorunId_" + value.UID + "' class='hidden divtooltipUnit'><span>" + value.UnitNo + "<br/> Model: #" + value.ModelName + "<br/>" + value.Bedroom + " bd / " + value.Bathroom + " ba<br/> Price: $" + formatMoney(value.Current_Rent) + "</span><span> Available: Yes</span></div>";
                    html += "<div id='floorunId_" + value.UID + "' class='hidden divtooltipUnit'>" +
                        "<span><img src='/content/assets/img/plan/" + value.ModelName + ".png' id='imgModel_" + value.UID + "' class='img-responsive' /></span><hr>" +
                        "<span class='labelDivTool'>" + value.UnitNo + "</span><br />" +
                        "<span> Model: #" + value.ModelName + "</span><br />" +
                        "<span>" + value.Bedroom + " Bed / " + value.Bathroom + " Bath </span><br />" +
                        "<span>" + value.LeasedTerms + " Months</span><br />" +
                        "<span> Price: $" + formatMoney(value.Current_Rent) + "</span><br />" +
                        "<span> Available: " + value.AvailableDateText + "</span><br /></div>";
                }
            });
            html += "</map><br/>";
            $("#popUnitPlan").append(html);
            $("#imgFloorCoordinate").maphilight();

            $('.Uarea').addClass('active_unavil').data('maphilight', { alwaysOn: true, fillColor: 'ff0000', strokeColor: 'ff0000', }).trigger('alwaysOn.maphilight');
            $('.UAarea').addClass('active_unavil').data('maphilight', { alwaysOn: true, fillColor: '006400', strokeColor: '006400', }).trigger('alwaysOn.maphilight');
            $('.UYarea').addClass('active_unavil').data('maphilight', { alwaysOn: true, fillColor: 'ffff00', strokeColor: 'ffff00', }).trigger('alwaysOn.maphilight');
            $('.UUUarea').addClass('active_unavil').data('maphilight', { alwaysOn: true, fillColor: '324a59', strokeColor: '324a59', fillOpacity: 0.9 }).trigger('alwaysOn.maphilight');

            $(".tooltips").mouseout(function () { $(".divtooltipUnit").addClass("hidden"); });
            $(".tooltips").mouseover(function (e) {
                var offset = $(this).offset();
                var X = (e.pageX - offset.left);
                var Y = (e.pageY - offset.top);
                if (X < 0) {
                    X = X + 55;
                }
                else if (X > 0) {
                    X = X - 55;
                }

                if (Y < 0) {
                    Y = Y + 200;
                }
                else if (Y > 0) {
                    Y = Y - 230;
                }
                var thisId = $(this).attr('id');
                var divID = thisId.split("_");
                $(".divtooltipUnit").addClass("hidden");
                $("#floorunId_" + divID[1]).removeClass("hidden");
                $("#floorunId_" + divID[1]).css({ top: Y, left: X, position: 'absolute' });
            });
            $("#divLoaderFloorData").hide();
        }
    });
}

function getPropertyUnitListByFloor(flid) {
    /*SOHAN 12062020 START */
    $("#imgFloorCoordinate").attr("src", "");
    $("#imgFloorCoordinateDiv").empty();
    $('#popUnitPlan').empty();
    /*SOHAN 12062020 END */

    $("#divLoader").show();
    var bedroom = 0;
    if (!$("#ddlRoom").val()) {
        bedroom = 0;
    }
    else {
        bedroom = $("#ddlRoom").val();
    }
    var maxrent = 0;
    if ($("#txtMaxRent").val() == "0") {
        maxrent = "10000";
    }
    else {
        maxrent = $("#txtMaxRent").val();
    }
    var availdate = $("#txtDate").val();
    var leaseterm = $("#hndLeaseTermID").val();

    var prospectid = $("#hdnOPId").val();
    var modelname = $("#hndBuilding").val();

    var model = { FloorID: flid, AvailableDate: availdate, Bedroom: bedroom, MaxRent: maxrent, LeaseTermID: leaseterm, ModelName: modelname, ProspectId: prospectid };

    $.ajax({
        url: "/Property/GetPropertyFloorDetails/",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            $("#popUnitPlan").empty();
            $("#popFloorCoordinate").removeClass("hidden");
            $("#popUnitDet").addClass("hidden");
            $("#popPromotion").addClass("hidden");
            $("#divUdet").addClass("hidden");

            //var html = "<h3 style='color: #4d738a; text-align:center;'>Selected : Floor " + response.model.FloorNo + "</h3>";

            var html = "";
            // html += "<div class='col-sm-12' style='background:#fff;text-align:center!important;'><span style='background-color:#006400;width:10px;height:10px'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style='color:#4d738a;'>&nbsp;&nbsp;Available</span>&nbsp;&nbsp;<span style='background-color:#ffff00;width:10px;height:10px'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style='color:#4d738a;'>&nbsp;&nbsp;Other Options</span>&nbsp;&nbsp;<span style='background-color:#FF0000;width:10px;height:10px'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span style='color:#4d738a;'>&nbsp;&nbsp;Unavailable</span></div><br/><br/>";
            //<div class='col-sm-4'><div style='background-color: #fa6500; width: 10px; height: 10px'></div><span>Not Available</span></div> <div class='col-sm-4'><div style='background-color:red;width:10px;height:10px'></div > <span>Available</span></div>
            html += "<img src ='/content/assets/img/plan/" + response.model.FloorPlan + "' id='imgFloorCoordinate' class='' usemap='#unitimg'>";
            html += "<map name='unitimg' id='imgFloorCoordinateDiv'>";
            $("#listUnit>tbody").empty();
            $.each(response.model.lstUnitFloor, function (elementType, value) {
                if (value.IsAvail == 1) {
                    html += "<area shape='poly' id='unId_" + value.UID + "' class='tooltips UAarea' coords='" + value.Coordinates + "' href='javascript:void(0);' onclick='getPropertyUnitDetails(" + value.UID + ")'>";
                       html += "<div id='floorunId_" + value.UID + "' class='hidden divtooltipUnit'>" +
                        "<span><img src='/content/assets/img/plan/" + value.ModelName + ".png' id='imgModel_" + value.UID + "' class='img-responsive' /></span><hr>" +
                        "<span class='labelDivTool'>" + value.UnitNo + "</span><br />" +
                        "<span> Model: #" + value.ModelName + "</span><br />" +
                        "<span>" + value.Bedroom + " Bed / " + value.Bathroom + " Bath </span><br />" +
                        "<span>" + value.LeasedTerms + " Months</span><br />" +
                        "<span> Price: $" + formatMoney(value.Current_Rent) + "</span><br />" +
                        "<span> Available: " + value.AvailableDateText + "</span><br /></div>";
                } else if (value.IsAvail == 2) {

                    html += "<area shape='poly' id='unId_" + value.UID + "' class='tooltips UYarea' coords='" + value.Coordinates + "' href='javascript:void(0);' onclick='getPropertyUnitDetails(" + value.UID + ")' >";
                    // html += "<span class='tooltip-text' style='display: none'>" + value.UnitNo + "</span>";
                    //html += "<div id='floorunId_" + value.UID + "' class='hidden divtooltipUnit'><span>Unit No: " + value.UnitNo + "<br/>" + value.Bedroom + " bd / " + value.Bathroom + " ba</span><span> Available: Other</span></div>";
                    // html += "<div id='floorunId_" + value.UID + "' class='hidden divtooltipUnit'><span>" + value.UnitNo + "<br/> Model: #" + value.ModelName + "<br/>" + value.Bedroom + " bd / " + value.Bathroom + " ba<br/> Price: $" + formatMoney(value.Current_Rent) + "</span><span> Available: Other</span></div>";
                    html += "<div id='floorunId_" + value.UID + "' class='hidden divtooltipUnit'>" +
                        "<span><img src='/content/assets/img/plan/" + value.ModelName + ".png' id='imgModel_" + value.UID + "' class='img-responsive' /></span><hr>" +
                        "<span class='labelDivTool'>" + value.UnitNo + "</span><br />" +
                        "<span> Model: #" + value.ModelName + "</span><br />" +
                        "<span>" + value.Bedroom + " Bed / " + value.Bathroom + " Bath </span><br />" +
                        "<span>" + value.LeasedTerms + " Months</span><br />" +
                        "<span> Price: $" + formatMoney(value.Current_Rent) + "</span><br />" +
                        "<span> Available: Other Option</span><br /></div>";
                } else {
                    html += "<area shape='poly' id='unId_" + value.UID + "' class='tooltips Uarea' coords='" + value.Coordinates + "' >";
                    //html += "<div id='floorunId_" + value.UID + "' class='hidden divtooltipUnit'><span>Unit No: " + value.UnitNo + "<br/>" + value.Bedroom + " bd / " + value.Bathroom + " ba</span><span> Available: No</span></div>";
                    //html += "<div id='floorunId_" + value.UID + "' class='hidden divtooltipUnit'><span>" + value.UnitNo + "<br/> Model: #" + value.ModelName + "<br/>" + value.Bedroom + " bd / " + value.Bathroom + " ba<br/> Price: $" + formatMoney(value.Current_Rent) + "</span><span> Available: No</span></div>";
                    html += "<div id='floorunId_" + value.UID + "' class='hidden divtooltipUnit'>" +
                        "<span><img src='/content/assets/img/plan/" + value.ModelName + ".png' id='imgModel_" + value.UID + "' class='img-responsive' /></span><hr>" +
                        "<span class='labelDivTool'>" + value.UnitNo + "</span><br />" +
                        "<span> Model: #" + value.ModelName + "</span><br />" +
                        "<span>" + value.Bedroom + " Bed / " + value.Bathroom + " Bath </span><br />" +
                        "<span>" + value.LeasedTerms + " Months</span><br />" +
                        "<span> Price: $" + formatMoney(value.Current_Rent) + "</span><br />" +
                        "<span> Available: Unavailable</span><br /></div>";

                }

                if (value.UID == $("#hndUID").val()) {
                    html += "<area shape='poly' id='unId_" + value.UID + "' class='tooltips UUUarea' coords='" + value.Coordinates + "' href='javascript:void(0);' onclick='getPropertyUnitDetails(" + value.UID + ")' >";
                    html += "<div id='floorunId_" + value.UID + "' class='hidden divtooltipUnit'><span>" + value.UnitNo + "<br/> Model: #" + value.ModelName + "<br/>" + value.Bedroom + " bd / " + value.Bathroom + " ba<br/> Price: $" + formatMoney(value.Current_Rent) + "</span><span> Available: Yes</span></div>";
                    //html += "<span class='tooltip-text' style='display: none'>" + value.UnitNo + "</span>";
                    //html += "<div id='floorunId_" + value.UID + "' class='hidden divtooltipUnit'><span>Unit No: " + value.UnitNo + "<br/>" + value.Bedroom + " bd / " + value.Bathroom + " ba</span><span> Available: Yes</span></div>";
                    //html += "<div id='floorunId_" + value.UID + "' class='hidden divtooltipUnit'><span>" + value.UnitNo + "<br/> Model: #" + value.ModelName + "<br/>" + value.Bedroom + " bd / " + value.Bathroom + " ba<br/> Price: $" + formatMoney(value.Current_Rent) + "</span><span> Available: Yes</span></div>";
                    html += "<div id='floorunId_" + value.UID + "' class='hidden divtooltipUnit'>" +
                        "<span><img src='/content/assets/img/plan/" + value.ModelName + ".png' id='imgModel_" + value.UID + "' class='img-responsive' /></span><hr>" +
                        "<span class='labelDivTool'>" + value.UnitNo + "</span><br />" +
                        "<span> Model: #" + value.ModelName + "</span><br />" +
                        "<span>" + value.Bedroom + " Bed / " + value.Bathroom + " Bath </span><br />" +
                        "<span>" + value.LeasedTerms + " Months</span><br />" +
                        "<span> Price: $" + formatMoney(value.Current_Rent) + "</span><br />" +
                        "<span> Available: " + value.AvailableDateText + "</span><br /></div>";
                }
                if (value.IsAvail != 0) {
                    var ulhtml = " <tr id='unitdiv_" + value.UID + "' data-floorid = '" + value.FloorNoText + "'><td><a href='javascript:void(0);' onclick='getPropertyUnitDetails(" + value.UID + ")'><h5 style='width: 80px;'>#" + value.UnitNo + " </h5></a> </td><td style='text-align: center;width=100px'>$" + formatMoney(value.Current_Rent) + "</td><td style='text-align: center;width=80px'>" + value.Premium + "</td><td style='text-align: center;width=100px'>" + value.AvailableDateText + "</td></tr>";
                    $("#listUnit>tbody").append(ulhtml);
                }
            });
            html += "</map><br/>";
            $("#popUnitPlan").append(html);
            $("#imgFloorCoordinate").maphilight();

            $('.Uarea').addClass('active_unavil').data('maphilight', { alwaysOn: true, fillColor: 'FF0000', strokeColor: 'FF0000', }).trigger('alwaysOn.maphilight');
            $('.UAarea').addClass('active_unavil').data('maphilight', { alwaysOn: true, fillColor: '006400', strokeColor: '006400', }).trigger('alwaysOn.maphilight');
            $('.UYarea').addClass('active_unavil').data('maphilight', { alwaysOn: true, fillColor: 'ffff00', strokeColor: 'ffff00', }).trigger('alwaysOn.maphilight');
            $('.UUUarea').addClass('active_unavil').data('maphilight', { alwaysOn: true, fillColor: '324a59', strokeColor: '324a59', fillOpacity: 0.9 }).trigger('alwaysOn.maphilight');
            $(".tooltips").mouseout(function () { $(".divtooltipUnit").addClass("hidden"); });
            $(".tooltips").mouseover(function (e) {
                var offset = $(this).offset();
                var X = (e.pageX - offset.left);
                var Y = (e.pageY - offset.top);
                if (X < 0) {
                    X = X + 55;
                }
                else if (X > 0) {
                    X = X - 55;
                }

                if (Y < 0) {
                    Y = Y + 200;
                }
                else if (Y > 0) {
                    Y = Y - 230;
                }
                var thisId = $(this).attr('id');
                var divID = thisId.split("_");
                $(".divtooltipUnit").addClass("hidden");
                $("#floorunId_" + divID[1]).removeClass("hidden");
                $("#floorunId_" + divID[1]).css({ top: Y, left: X, position: 'absolute' });
            });


        }
    });

}
function saveupdatePaymentResponsibility(stepcompleted) {
    $("#divLoader").show();
    var model = new Array();
    $(".respo").each(function () {
        var row = $(this);
        var customer = {};

        customer.applicantID = row.attr("data-id");

        customer.moveInPercentage = $("#txtpayper" + customer.applicantID).val();
        customer.moveInCharge = $("#txtpayamt" + customer.applicantID).val();
        customer.monthlyPercentage = $("#txtpayperMo" + customer.applicantID).val();
        customer.monthlyPayment = $("#txtpayamtMo" + customer.applicantID).val();
        customer.adminFeePercentage = $("#txtpayperAF" + customer.applicantID).val();
        customer.adminFeePayment = $("#txtpayamtAF" + customer.applicantID).val();

        var applicantID = customer.applicantID;
        var moveInPercentage = unformatText(customer.moveInPercentage);
        var moveInCharge = unformatText(customer.moveInCharge);
        var monthlyPercentage = unformatText(customer.monthlyPercentage);
        var monthlyPayment = unformatText(customer.monthlyPayment);
        var adminFeePercentage = unformatText(customer.adminFeePercentage);
        var adminFeePayment = unformatText(customer.adminFeePayment);
        var prospectId = $("#hdnOPId").val();
        model.push({
            ApplicantID: applicantID,
            MoveInPercentage: moveInPercentage,
            MoveInCharge: moveInCharge,
            MonthlyPercentage: monthlyPercentage,
            MonthlyPayment: monthlyPayment,
            AdminFeePercentage: adminFeePercentage,
            AdminFee: adminFeePayment,
            ProspectID: prospectId,
            StepCompleted: stepcompleted
        });
    });
    // console.log(JSON.stringify(model));
    $.ajax({
        url: "/Tenant/Applicant/SaveUpdatePaymentResponsibility/",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            getApplicantListsPrimary();
            $("#popApplicant").modal("hide");
            var stepcomp = parseInt($("#hdnStepCompleted").val());
            if (stepcomp < stepcompleted) {
                $("#hdnStepCompleted").val(stepcompleted);
            }
        }
    });
};
var saveupdateApplicantHistory = function () {
    $("#divLoader").show();
    var msg = '';
    var ahID = $("#hdnAHRId").val();
    var country2 = $("#txtCountry2").val();
    var homeAddress12 = $("#txtAddress12").val();
    var homeAddress22 = $("#txtAddress22").val();
    var stateHome2 = $("#ddlStateHome2").val();
    var cityHome2 = $("#ddlCityHome2").val();
    var zipHome2 = $("#txtZip2").val();
    var rentOwn2 = $("#ddlRentOwn2").val();
    var moveInDateFrom2 = $("#txtMoveInDateFrom2").val();
    var moveInDateTo2 = $("#txtMoveInDateTo2").val();
    var monthlyPayment2 = $("#txtMonthlyPayment2").val();
    var reason2 = $("#txtReasonforleaving2").val();
    var tenantId = $("#hdnOPId").val();
    var managementCompanyPhone = unformatText($("#txtManagementCompanyPhone2").val());
    if ($("#txtAddress12").val() == '') {
        msg += 'Please Fill Address 1</br>';
    }
    if ($("#ddlStateHome2").val() == '0') {
        msg += 'Please Select State</br>';
    }
    if ($("#ddlCityHome2").val() == '') {
        msg += 'Please Fill City</br>';
    }
    if ($("#txtZip2").val() == '') {
        msg += 'Please Fill Zip Code</br>';
    }
    if ($("#ddlRentOwn2").val() == '0') {
        msg += 'Please Select Rent or Own</br>';
    }
    if ($("#txtMoveInDateFrom2").val() == '') {
        msg += 'Please Fill Move In Date</br>';
    }
    if ($("#txtMoveInDateTo2").val() == '') {
        msg += 'Please Fill Move Out Date</br>';
    }
    if ($("#ddlRentOwn2").val() == '1') {
        if (!$("#txtApartmentCommunity2").val()) {
            msg += "Please Fill Apartment Community </br>";
        }
        if (!$("#txtManagementCompany2").val()) {
            msg += "Please Fill Management Company </br>";
        }
        if (!unformatText($("#txtManagementCompanyPhone2").val())) {
            msg += "Please Fill Management Company Phone</br>";
        }
        else {
            if (unformatText($("#txtManagementCompanyPhone2").val()).length < 10) {
                msg += "Please Fill Valid Management Company Phone </br>";
            }
        }
    }
    if (msg != '') {
        $("#divLoader").hide();
        $.alert({
            title: "",
            content: msg,
            type: 'blue'
        });
        return
    }
    var model = {
        Country: country2,
        HomeAddress1: homeAddress12,
        HomeAddress2: homeAddress22,
        StateHome: stateHome2,
        CityHome: cityHome2,
        ZipHome: zipHome2,
        RentOwn: rentOwn2,
        MoveInDateFrom: moveInDateFrom2,
        MoveInDateTo: moveInDateTo2,
        MonthlyPayment: monthlyPayment2,
        Reason: reason2,
        TenantID: tenantId,
        AHID: ahID,
        ApartmentCommunity: $("#txtApartmentCommunity2").val(),
        ManagementCompany: $("#txtManagementCompany2").val(),
        ManagementCompanyPhone: managementCompanyPhone,
        IsProprNoticeLeaseAgreement: $("#ddlProperNoticeLeaseAgreement2").val(),
    };

    $.ajax({
        url: "/ApplyNow/SaveUpdateApplicantHistory",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            $("#popApplicantHistory").modal("hide");
            $.alert({
                title: "",
                content: "Progress Saved.",
                type: 'blue'
            });

            getApplicantHistoryList();
            clearApplicantHistory();
        }
    });
};
var getApplicantHistoryList = function () {
    $("#divLoader").show();
    var model = {
        TenantID: $("#hdnOPId").val()
    };
    $.ajax({
        url: "/ApplyNow/GetApplicantHistoryList",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            //console.log(JSON.stringify(response))
            $("#tblAHR>tbody").empty();
            $("#tblPreviousAdd>tbody").empty();
            $("#prevadd>tbody").empty();
            $("#prevaddp>tbody").empty();
            $.each(response.model, function (elementType, elementValue) {
                var html = "<tr id='tr_" + elementValue.AHID + "' data-value='" + elementValue.AHID + "'>";
                html += "<td>" + elementValue.Country + "</td>";
                html += "<td>" + elementValue.HomeAddress1 + "</td>";
                html += "<td>" + elementValue.HomeAddress2 + "</td>";
                html += "<td>" + elementValue.StateHomeTxt + "</td>";
                html += "<td>" + elementValue.CityHome + "</td>";
                html += "<td>" + elementValue.ZipHome + "</td>";

                html += "<td>" + elementValue.MoveInDateFromTxt + "</td>";
                html += "<td>" + elementValue.MoveInDateToTxt + "</td>";
                html += "<td>" + elementValue.MonthlyPayment + "</td>";

                html += "<td class='text-center'>";
                html += "<a style='background: transparent; margin-right:10px' id='updateAHRInfo' href='JavaScript:Void(0)' onclick='getApplicantHistoryInfo(" + elementValue.AHID + ")'><span class='fa fa-edit' ></span></a>";
                html += "<a style='background: transparent;' href='JavaScript:Void(0)' onclick='delApplicantHistory(" + elementValue.AHID + ")'><span class='fa fa-trash' ></span></a></td>";
                html += "</tr>";

                var summAdd = "<tr><td style='width: 195px;'>Previous Address </td><td>" + elementValue.HomeAddress1 + ", " + elementValue.HomeAddress2 + ", " + elementValue.CityHome + ", " + elementValue.StateHomeTxt + " -" + elementValue.ZipHome + "</td></tr>";
                var htmlsumAdd = "<tr>";
                htmlsumAdd += "<td style='width: 195px;'>Previous Address </td>";
                htmlsumAdd += "<td>" + elementValue.HomeAddress1 + "</td>";
                htmlsumAdd += "<td>" + elementValue.HomeAddress2 + "</td>";
                htmlsumAdd += "<td>" + elementValue.StateHomeTxt + "</td>";
                htmlsumAdd += "<td>" + elementValue.CityHome + "</td>";
                htmlsumAdd += "<td>" + elementValue.ZipHome + "</td>";
                htmlsumAdd += "<td>" + elementValue.MoveInDateFromTxt + " - " + elementValue.MoveInDateToTxt + "</td>";
                htmlsumAdd += "</tr>";

                $("#tblAHR>tbody").append(html);
                $("#tblPreviousAdd>tbody").append(htmlsumAdd);
                $("#prevadd>tbody").append(summAdd);
                $("#prevaddp>tbody").append(summAdd);
            });

        }
    });
};
var getApplicantHistoryInfo = function (id) {
    $("#divLoader").show();
    var model = {
        AHID: id
    };
    $.ajax({
        url: '/ApplyNow/GetApplicantHistoryDetails/',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            $("#popApplicantHistory").modal("show");
            $("#hdnAHRId").val(response.model.AHID);
            $("#txtCountry2").val(response.model.Country);
            $("#txtAddress12").val(response.model.HomeAddress1);
            $("#txtAddress22").val(response.model.HomeAddress2);
            //$("#ddlStateHome2").val(response.model.StateHome).change();
            fillStateDDL_Home2(response.model.Country, response.model.StateHome);
            $("#ddlCityHome2").val(response.model.CityHome);
            $("#txtZip2").val(response.model.ZipHome);
            $("#ddlRentOwn2").val(response.model.RentOwn).change();
            $("#txtMoveInDateFrom2").val(response.model.MoveInDateFromTxt);
            $("#txtMoveInDateTo2").val(response.model.MoveInDateToTxt);
            $("#txtMonthlyPayment2").val(response.model.MonthlyPayment);
            $("#txtReasonforleaving2").val(response.model.Reason);
            $("#txtApartmentCommunity2").val(response.model.ApartmentCommunity);
            $("#txtManagementCompany2").val(response.model.ManagementCompany);
            $("#txtManagementCompanyPhone2").val(formatPhoneFax(response.model.ManagementCompanyPhone));
        }
    });
};
var clearApplicantHistory = function () {
    $("#hdnAHRId").val(0);
    $("#txtCountry2").val("1");
    fillStateDDL_Home2(1, 0);
    $("#txtAddress12").val("");
    $("#txtAddress22").val("");
    $("#ddlStateHome2").val(0);
    $("#ddlCityHome2").val("");
    $("#txtZip2").val("");
    $("#ddlRentOwn2").val(0);
    $("#txtMoveInDateFrom2").val("");
    $("#txtMoveInDateTo2").val("");
    $("#txtMonthlyPayment2").val("");
    $("#txtReasonforleaving2").val("");
    $("#txtApartmentCommunity2").val("");
    $("#txtManagementCompany2").val("");
    $("#txtManagementCompanyPhone2").val("");
    $("#ddlProperNoticeLeaseAgreement2").val("1");
};
var delApplicantHistory = function (aHRID) {

    var model = {
        AHID: aHRID
    };

    $.alert({
        title: "",
        content: "Are you sure to Applicant History?",
        type: 'blue',
        buttons: {
            yes: {
                text: 'Yes',
                action: function (yes) {
                    $("#divLoader").show();
                    $.ajax({
                        url: '/ApplyNow/DeleteApplicantHistory/',
                        type: "post",
                        contentType: "application/json utf-8",
                        data: JSON.stringify(model),
                        dataType: "JSON",
                        success: function (response) {
                            $("#divLoader").hide();
                            $('#tr_' + aHRID).remove();
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
var addEmailArray = [];
var addEmail = function (email) {

    addEmailArray.push({ AppEmail: email });
}
var sendCoappEmail = function () {

    //console.log(addEmailArray)
    var model = {
        lstemailsend: addEmailArray, ProspectId: $("#hdnOPId").val()
    };

    $.alert({
        title: "",
        content: "Are you sure to send Email?",
        type: 'blue',
        buttons: {
            yes: {
                text: 'Yes',
                action: function (yes) {
                    $("#divLoader").show();
                    $.ajax({
                        url: "/ApplyNow/SendCoappEmail",
                        type: "post",
                        contentType: "application/json utf-8",
                        data: JSON.stringify(model),
                        dataType: "JSON",
                        success: function (response) {
                            $("#divLoader").hide();
                            $.alert({
                                title: "",
                                content: "Email Sent Successfully",
                                type: 'blue',
                            });
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
var sendPayLinkEmail = function (chargeamount, appid, chargetype, email) {

    var model = {
        ProspectId: $("#hdnOPId").val(),
        ApplicationID: appid,
        ChargeAmount: chargeamount,
        ChargeType: chargetype,
        Email: email
    };

    $.alert({
        title: "",
        content: "Are you sure to send Payment Link Email?",
        type: 'blue',
        buttons: {
            yes: {
                text: 'Yes',
                action: function (yes) {
                    $("#divLoader").show();
                    $.ajax({
                        url: "/ApplyNow/SendPayLinkEmailApplyNow",
                        type: "post",
                        contentType: "application/json utf-8",
                        data: JSON.stringify(model),
                        dataType: "JSON",
                        success: function (response) {
                            $("#divLoader").hide();
                            $.alert({
                                title: "",
                                content: "Email Sent Successfully",
                                type: 'blue',
                            });
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
var haveVehicle = function () {
    $("#divLoader").show();
    var ProspectID = $("#hdnOPId").val();
    var vehicleValue = '';

    if ($("#chkDontHaveVehicle").is(":checked")) {
        vehicleValue = true;
    }

    else if ($("#chkDontHaveVehicle").is(":not(:checked)")) {
        vehicleValue = false;
    }

    var model = {
        id: ProspectID,
        vehicleValue: vehicleValue
    };
    $.ajax({
        url: '/ApplyNow/HaveVehicle',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            getVehicleLists();
            $("#divLoader").hide();
        }
    });
};
var havePet = function () {
    $("#divLoader").show();
    var ProspectID = $("#hdnOPId").val();
    var petValue = '';

    if ($("#chkDontHavePet").is(":checked")) {
        petValue = true;
    }

    else if ($("#chkDontHavePet").is(":not(:checked)")) {
        petValue = false;
    }

    var model = {
        id: ProspectID,
        PetValue: petValue
    };
    $.ajax({
        url: '/ApplyNow/HavePet',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
        }
    });
};

// New Upload Code Start //

// New Paystub file Upload Method
var paystubFileUpload = function (pArray) {
    $("#divLoader").show();
    $formData = new FormData();

    var paystubUpload = document.getElementById('fileUploadPaystub');

    for (var i = 0; i < paystubFileArray.length; i++) {
        $formData.append('file-' + i, paystubFileArray[i]);
    }

    $.ajax({
        url: '/ApplyNow/PaystubUpload',
        type: 'post',
        data: $formData,
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
            var fileName = [];
            var originalFileName = [];
            $.each(response.model.PaystubFiles, function (index, elementValue) {
                fileName.push(elementValue);
            });
            $.each(response.model.PaystubOriginalFiles, function (index, elementValue) {
                originalFileName.push(elementValue);
            });

            //1
            $('#hndFileUploadName4').val(fileName[0]);
            $('#hndOriginalFileUploadName4').val(originalFileName[0]);
            //2
            $('#hndFileUploadName5').val(fileName[1]);
            $('#hndOriginalFileUploadName5').val(originalFileName[1]);
            //3
            $('#hndFileUploadName3').val(fileName[2]);
            $('#hndOriginalFileUploadName3').val(originalFileName[2]);

            $("#fileUploadPaystubShow").text("3 files selected");


            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'blue'
            });
        }
    });
};

// New Fedral file Upload Method
var fedralFileUpload = function (fArray) {
    //console.log(fedralFileArray);
    $("#divLoader").show();
    $formData = new FormData();
    var fedralUpload = document.getElementById('fileUploadFedral');

    for (var i = 0; i < fedralFileArray.length; i++) {
        $formData.append('file-' + i, fedralFileArray[i]);
    }

    $.ajax({
        url: '/ApplyNow/FedralUpload',
        type: 'post',
        data: $formData,
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
            var fileName = [];
            var originalFileName = [];
            $.each(response.model.FedralFiles, function (index, elementValue) {
                fileName.push(elementValue);
            });
            $.each(response.model.FedralOriginalFiles, function (index, elementValue) {
                originalFileName.push(elementValue);
            });


            //1
            $('#hndFileUploadName1').val(fileName[0]);
            $('#hndOriginalFileUploadName1').val(originalFileName[0]);
            //2
            $('#hndFileUploadName2').val(fileName[1]);
            $('#hndOriginalFileUploadName2').val(originalFileName[1]);
            $("#fileUploadFedralShow").text("2 files selected");


            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'blue'
            });
        }
    });
};

// New Paystub file Upload Method
var bankstatementFileUpload = function (bsArray) {
    $("#divLoader").show();
    $formData = new FormData();

    var bankstatementUpload = document.getElementById('fileUploadBankStatement');

    for (var i = 0; i < bankstatementFileArray.length; i++) {
        $formData.append('file-' + i, bankstatementFileArray[i]);
    }

    $.ajax({
        url: '/ApplyNow/BankStatementUpload',
        type: 'post',
        data: $formData,
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
            var fileName = [];
            var originalFileName = [];
            $.each(response.model.BankStatementFiles, function (index, elementValue) {
                fileName.push(elementValue);
            });
            $.each(response.model.BankStatementOriginalFiles, function (index, elementValue) {
                originalFileName.push(elementValue);
            });

            //1
            $('#hndFileUploadNameBankState1').val(fileName[0]);
            $('#hndOriginalFileUploadNameBankState1').val(originalFileName[0]);
            //2
            $('#hndFileUploadNameBankState2').val(fileName[1]);
            $('#hndOriginalFileUploadNameBankState2').val(originalFileName[1]);
            //3
            $('#hndFileUploadNameBankState3').val(fileName[2]);
            $('#hndOriginalFileUploadNameBankState3').val(originalFileName[2]);
            $("#fileUploadBankStatementShow").text("3 files selected");


            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'blue'
            });
        }
    });
};

// New Upload Code End //

//Upload 1,2,3
var taxReturnFileUpload1 = function () {
    $("#divLoader").show();
    $formData = new FormData();

    var upload1 = document.getElementById('fileUploadTaxReturn1');

    for (var i = 0; i < upload1.files.length; i++) {
        $formData.append('file-' + i, upload1.files[i]);
    }

    $.ajax({
        url: '/ApplyNow/TaxFileUpload1',
        type: 'post',
        data: $formData,
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
            $('#hndFileUploadName1').val(response.model.tempUpload1);
            $('#hndOriginalFileUploadName1').val(response.model.UploadOriginalFileName1);

            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'blue'
            });
        }
    });
};
var taxReturnFileUpload2 = function () {
    $("#divLoader").show();
    $formData = new FormData();

    var upload2 = document.getElementById('fileUploadTaxReturn2');

    var fileNameUp2 = $('#hndFileUploadName2').val();
    var orginalFileNameUp2 = $('#hndOriginalFileUploadName2').val();

    for (var i = 0; i < upload2.files.length; i++) {
        $formData.append('file-' + i, upload2.files[i]);
    }

    $.ajax({
        url: '/ApplyNow/TaxFileUpload2',
        type: 'post',
        data: $formData,
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
            $('#hndFileUploadName2').val(response.model.tempUpload2);
            $('#hndOriginalFileUploadName2').val(response.model.UploadOriginalFileName2);

            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'blue'
            });
        }
    });
};
var taxReturnFileUpload3 = function () {
    $("#divLoader").show();
    $formData = new FormData();

    var upload3 = document.getElementById('fileUploadTaxReturn3');

    for (var i = 0; i < upload3.files.length; i++) {
        $formData.append('file-' + i, upload3.files[i]);
    }

    $.ajax({
        url: '/ApplyNow/TaxFileUpload3',
        type: 'post',
        data: $formData,
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
            $('#hndFileUploadName3').val(response.model.tempUpload3);
            $('#hndOriginalFileUploadName3').val(response.model.UploadOriginalFileName3);

            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'blue'
            });
        }
    });
};
//sachin m 11 may
var taxReturnFileUpload4 = function () {
    $("#divLoader").show();
    $formData = new FormData();

    var upload2 = document.getElementById('fileUploadTaxReturn4');

    var fileNameUp2 = $('#hndFileUploadName4').val();
    var orginalFileNameUp2 = $('#hndOriginalFileUploadName4').val();

    for (var i = 0; i < upload2.files.length; i++) {
        $formData.append('file-' + i, upload2.files[i]);
    }

    $.ajax({
        url: '/ApplyNow/TaxFileUpload4',
        type: 'post',
        data: $formData,
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
            $('#hndFileUploadName4').val(response.model.tempUpload4);
            $('#hndOriginalFileUploadName4').val(response.model.UploadOriginalFileName4);

            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'blue'
            });
        }
    });
};
var taxReturnFileUpload5 = function () {
    $("#divLoader").show();
    $formData = new FormData();

    var upload3 = document.getElementById('fileUploadTaxReturn5');

    for (var i = 0; i < upload3.files.length; i++) {
        $formData.append('file-' + i, upload3.files[i]);
    }

    $.ajax({
        url: '/ApplyNow/TaxFileUpload5',
        type: 'post',
        data: $formData,
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
            $('#hndFileUploadName5').val(response.model.tempUpload5);
            $('#hndOriginalFileUploadName5').val(response.model.UploadOriginalFileName5);

            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'blue'
            });
        }
    });
};
var bankstateFileUpload1 = function () {
    $("#divLoader").show();
    $formData = new FormData();

    var upload1 = document.getElementById('fileBankState1');

    for (var i = 0; i < upload1.files.length; i++) {
        $formData.append('file-' + i, upload1.files[i]);
    }

    $.ajax({
        url: '/ApplyNow/TaxFileUpload6',
        type: 'post',
        data: $formData,
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
            $('#hndFileUploadNameBankState1').val(response.model.tempUpload6);
            $('#hndOriginalFileUploadNameBankState1').val(response.model.UploadOriginalFileName6);

            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'blue'
            });
        }
    });
};
var bankstateFileUpload2 = function () {
    $("#divLoader").show();
    $formData = new FormData();

    var upload2 = document.getElementById('fileBankState2');


    for (var i = 0; i < upload2.files.length; i++) {
        $formData.append('file-' + i, upload2.files[i]);
    }

    $.ajax({
        url: '/ApplyNow/TaxFileUpload7',
        type: 'post',
        data: $formData,
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
            $('#hndFileUploadNameBankState2').val(response.model.tempUpload7);
            $('#hndOriginalFileUploadNameBankState2').val(response.model.UploadOriginalFileName7);

            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'blue'
            });
        }
    });
};
var bankstateFileUpload3 = function () {
    $("#divLoader").show();
    $formData = new FormData();

    var upload3 = document.getElementById('fileBankState3');

    for (var i = 0; i < upload3.files.length; i++) {
        $formData.append('file-' + i, upload3.files[i]);
    }

    $.ajax({
        url: '/ApplyNow/TaxFileUpload8',
        type: 'post',
        data: $formData,
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
            $('#hndFileUploadNameBankState3').val(response.model.tempUpload8);
            $('#hndOriginalFileUploadNameBankState3').val(response.model.UploadOriginalFileName8);

            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'blue'
            });
        }
    });
};
var taxReturnFileUpload1HEI = function () {
    $("#divLoader").show();
    $formData = new FormData();

    var upload1HEI = document.getElementById('fileUploadTaxReturn1HEI');

    for (var i = 0; i < upload1HEI.files.length; i++) {
        $formData.append('file-' + i, upload1HEI.files[i]);
    }

    $.ajax({
        url: '/ApplyNow/TaxFileUpload1HEI',
        type: 'post',
        data: $formData,
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
            $('#hndFileUploadName1HEI').val(response.model.TaxReturn1);
            $('#hndOriginalFileUploadName1HEI').val(response.model.TaxReturn1OrigName);

            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'blue'
            });
        }
    });
};
var taxReturnFileUpload2HEI = function () {
    $("#divLoader").show();
    $formData = new FormData();

    var upload2HEI = document.getElementById('fileUploadTaxReturn2HEI');

    var fileNameUp2HEI = $('#hndFileUploadName2HEI').val();
    var orginalFileNameUp2HEI = $('#hndOriginalFileUploadName2HEI').val();

    for (var i = 0; i < upload2HEI.files.length; i++) {
        $formData.append('file-' + i, upload2HEI.files[i]);
    }

    $.ajax({
        url: '/ApplyNow/TaxFileUpload2HEI',
        type: 'post',
        data: $formData,
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
            $('#hndFileUploadName2HEI').val(response.model.TaxReturn2);
            $('#hndOriginalFileUploadName2HEI').val(response.model.TaxReturn2OrigName);

            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'blue'
            });
        }
    });
};
var taxReturnFileUpload3HEI = function () {
    $("#divLoader").show();
    $formData = new FormData();

    var upload3HEI = document.getElementById('fileUploadTaxReturn3HEI');

    for (var i = 0; i < upload3HEI.files.length; i++) {
        $formData.append('file-' + i, upload3HEI.files[i]);
    }

    $.ajax({
        url: '/ApplyNow/TaxFileUpload3HEI',
        type: 'post',
        data: $formData,
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
            $('#hndFileUploadName3HEI').val(response.model.TaxReturn3);
            $('#hndOriginalFileUploadName3HEI').val(response.model.TaxReturn3OrigName);

            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'blue'
            });
        }
    });
};
//Upload Passport
var uploadPassport = function () {
    $("#divLoader").show();
    $formData = new FormData();

    var passportFile = document.getElementById('fileUploadPassport');

    for (var i = 0; i < passportFile.files.length; i++) {
        $formData.append('file-' + i, passportFile.files[i]);
    }

    $.ajax({
        url: '/ApplyNow/UploadPassport',
        type: 'post',
        data: $formData,
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
            $('#hndPassportUploadName').val(response.model.tempPassportUpload);
            $('#hndOriginalPassportUploadName').val(response.model.UploadOriginalPassportName);
            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'blue'
            });
        }
    });
};
//Upload Identity Documents
var uploadIdentityDocument = function () {
    $("#divLoader").show();
    $formData = new FormData();

    var identityFile = document.getElementById('fileUploadIdentity');

    for (var i = 0; i < identityFile.files.length; i++) {
        $formData.append('file-' + i, identityFile.files[i]);
    }

    $.ajax({
        url: '/ApplyNow/UploadIdentity',
        type: 'post',
        data: $formData,
        contentType: 'application/json; charset=utf-8',
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
            $('#hndIdentityUploadName').val(response.model.tempIdentityUpload);
            $('#hndOriginalIdentityUploadName').val(response.model.UploadOriginalIdentityName);
            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'blue'
            });
        }
    });
};
//Upload Pet Documents
var uploadPetPhoto = function () {
    $("#divLoader").show();
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
            $("#divLoader").hide();
            $('#hndPetPicture').val(response.model.TempPetNameFile);
            $('#hndOriginalPetPicture').val(response.model.OriginalPetNameFile);
            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'blue'
            });
        }
    });
};
var uploadPetVaccination = function () {
    $("#divLoader").show();
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
            $("#divLoader").hide();
            $('#hndPetVaccinationCertificate').val(response.model.TempPetVaccinationCertificateFile);
            $('#hndOriginalPetVaccinationCertificate').val(response.model.OriginalPetVaccinationCertificateFile);
            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'blue'
            });
        }
    });
};

//Upload Vehicle Documents
var uploadVehicleCertificate = function () {
    $("#divLoader").show();
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
            $("#divLoader").hide();
            $('#hndVehicleRegistation').val(response.model.TempVehicleRegistation);
            $('#hndOriginalVehicleRegistation').val(response.model.OriginalVehicleRegistation);
            $.alert({
                title: "",
                content: "File uploaded Successfully.",
                type: 'blue'
            });
        }
    });
};
var getTenantPetPlaceData = function () {
    $("#divLoader").show();
    var ProspectID = $("#hdnOPId").val();

    var model = {
        id: ProspectID
    };
    $.ajax({
        url: '/ApplyNow/GetTenantPetPlaceData',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            var tenantCount = response.model.TenantPetCount;
            var valueCount = response.model.NumberOfPets;
            var rowCount = $("#tblPetApplyNow >tbody").children().length;
            $("#hndPetPlaceCount").val(valueCount);

            if (parseInt(response.model.NumberOfPets) == 1) {
                $("#spanPetDNAFee1").text("Pet DNA Fee (1 Pet):");
                $("#spanPetDNAFee2").text("Pet DNA Fee (1 Pet):");
                $("#spanPetDNAFee3").text("Pet DNA Fee (1 Pet):");
                $("#spanPetDNAFee4").text("Pet DNA Fee (1 Pet):");

                //$("#spPetNRDeposit").text("Pet Non-refundable Deposit (1 Pet):");
                //$("#spfpetd").text("Pet Non-refundable Deposit (1 Pet):");
                //$("#spPetNRDep6").text("Pet Non-refundable Deposit (1 Pet):");
                $("#spPetNRDeposit").text("Pet Deposit:");
                $("#spfpetd").text("Pet Deposit:");
                $("#spPetNRDep6").text("Pet Deposit:");


            } else if (parseInt(response.model.NumberOfPets) == 2) {
                $("#spanPetDNAFee1").text("Pet DNA Fee (2 Pets):");
                $("#spanPetDNAFee2").text("Pet DNA Fee (2 Pets):");
                $("#spanPetDNAFee3").text("Pet DNA Fee (2 Pets):");
                $("#spanPetDNAFee4").text("Pet DNA Fee (2 Pets):");

                $("#spPetNRDeposit").text("Pet Deposit:");
                $("#spfpetd").text("Pet Deposit:");
                $("#spPetNRDep6").text("Pet Deposit:");

            }
            else {
                $("#spanPetDNAFee1").text("Pet DNA Fee:");
                $("#spanPetDNAFee2").text("Pet DNA Fee:");
                $("#spanPetDNAFee3").text("Pet DNA Fee:");
                $("#spanPetDNAFee4").text("Pet DNA Fee:");

                $("#spPetNRDeposit").text("Pet  Deposit:");
                $("#spfpetd").text("Pet Deposit:");
                $("#spPetNRDep6").text("Pet Deposit:");
            }

            if ($("#chkDontHavePet").is(':checked')) {
                $("#btnAddPet").attr("disabled", true);
                $("#btnAddPet").css("background-color", "#b4ada5");
            }
            if (!valueCount) { valueCount = 0; }

            if (valueCount == 0 && tenantCount == 0) {
                $("#tblPetApplyNow>tbody").empty();
                //$("#chkDontHavePetDiv").removeClass("hidden");
                $("#chkDontHavePet").iCheck('check');
                $("#btnAddPet").attr("disabled", true);
                $("#btnAddPet").css("background-color", "#b4ada5");
            }
            else if (valueCount == 1 && tenantCount == 1) {
                $("#btnAddPet").attr("disabled", true);
                $("#btnAddPet").css("background-color", "#b4ada5");
                $("#chkDontHavePetDiv").addClass("hidden");
            }
            else if (valueCount == 2 && tenantCount == 2) {
                $("#btnAddPet").attr("disabled", true);
                $("#btnAddPet").css("background-color", "#b4ada5");
                $("#chkDontHavePetDiv").addClass("hidden");
            }
            else {
                $("#chkDontHavePetDiv").addClass("hidden");
                $("#chkDontHavePet").iCheck('uncheck');
                $("#btnAddPet").attr("disabled", false);
            }
        }
    });
};
var onFocusApplyNow = function () {

    $("#txtApplicantPhone").focusout(function () {
        var phoneNum = $("#txtApplicantPhone").val();
        $("#txtApplicantPhone").val(formatPhoneFax($("#txtApplicantPhone").val()));
    })
        .focus(function () {
            $("#txtApplicantPhone").val(unformatText($("#txtApplicantPhone").val()));
        });

    $("#txtMobileNumber").focusout(function () {
        var phoneNum = $("#txtMobileNumber").val();
        $("#txtMobileNumber").val(formatPhoneFax($("#txtMobileNumber").val()));
    })
        .focus(function () {
            $("#txtMobileNumber").val(unformatText($("#txtMobileNumber").val()));
        });

    $("#txtSupervisiorPhone").focusout(function () {
        var phoneNum = $("#txtSupervisiorPhone").val();
        $("#txtSupervisiorPhone").val(formatPhoneFax($("#txtSupervisiorPhone").val()));
    })
        .focus(function () {
            $("#txtSupervisiorPhone").val(unformatText($("#txtSupervisiorPhone").val()));
        });

    $("#txtEmergencyMobile").focusout(function () {
        var phoneNum = $("#txtEmergencyMobile").val();
        $("#txtEmergencyMobile").val(formatPhoneFax($("#txtEmergencyMobile").val()));
    })
        .focus(function () {
            $("#txtEmergencyMobile").val(unformatText($("#txtEmergencyMobile").val()));
        });

    $("#txtEmergencyHomePhone").focusout(function () {
        var phoneNum = $("#txtEmergencyHomePhone").val();
        $("#txtEmergencyHomePhone").val(formatPhoneFax($("#txtEmergencyHomePhone").val()));
    })
        .focus(function () {
            $("#txtEmergencyHomePhone").val(unformatText($("#txtEmergencyHomePhone").val()));
        });

    $("#txtEmergencyWorkPhone").focusout(function () {
        var phoneNum = $("#txtEmergencyWorkPhone").val();
        $("#txtEmergencyWorkPhone").val(formatPhoneFax($("#txtEmergencyWorkPhone").val()));
    })
        .focus(function () {
            $("#txtEmergencyWorkPhone").val(unformatText($("#txtEmergencyWorkPhone").val()));
        });

    $("#txtMonthlyPayment").focusout(function () { $("#txtMonthlyPayment").val(formatMoney($("#txtMonthlyPayment").val())); })
        .focus(function () {
            $("#txtMonthlyPayment").val(unformatText($("#txtMonthlyPayment").val()));
        });

    $("#txtMonthlyPayment2").focusout(function () { $("#txtMonthlyPayment2").val(formatMoney($("#txtMonthlyPayment2").val())); })
        .focus(function () {
            $("#txtMonthlyPayment2").val(unformatText($("#txtMonthlyPayment2").val()));
        });

    $("#txtAnnualIncome").focusout(function () { $("#txtAnnualIncome").val(formatMoney($("#txtAnnualIncome").val())); })
        .focus(function () {
            $("#txtAnnualIncome").val(unformatText($("#txtAnnualIncome").val()));
        });

    $("#txtAddAnnualIncome").focusout(function () { $("#txtAddAnnualIncome").val(formatMoney($("#txtAddAnnualIncome").val())); })
        .focus(function () {
            $("#txtAddAnnualIncome").val(unformatText($("#txtAddAnnualIncome").val()));
        });

    $("#txtAnnualIncomeHEI").focusout(function () { $("#txtAnnualIncomeHEI").val(formatMoney($("#txtAnnualIncomeHEI").val())); })
        .focus(function () {
            $("#txtAnnualIncomeHEI").val(unformatText($("#txtAnnualIncomeHEI").val()));
        });

    $("#txtAddAnnualIncomeHEI").focusout(function () { $("#txtAddAnnualIncomeHEI").val(formatMoney($("#txtAddAnnualIncomeHEI").val())); })
        .focus(function () {
            $("#txtAddAnnualIncomeHEI").val(unformatText($("#txtAddAnnualIncomeHEI").val()));
        });
    $("#txtSupervisiorPhoneHEI").focusout(function () { $("#txtSupervisiorPhoneHEI").val(formatPhoneFax($("#txtSupervisiorPhoneHEI").val())); })
        .focus(function () {
            $("#txtSupervisiorPhoneHEI").val(unformatText($("#txtSupervisiorPhoneHEI").val()));
        });

    $("#txtSSNNumber").focusin(function () {
        var id = $("#hdnOPId").val();
        var model = {
            id: id,
            vid: 1
        };
        $.ajax({
            url: '/ApplyNow/GetSSNIdNumberPassportNumber',
            type: "post",
            contentType: "application/json utf-8",
            data: JSON.stringify(model),
            dataType: "JSON",
            success: function (response) {
                $("#txtSSNNumber").val(response.ssn);
            }
        });
    }).focusout(function () {
        var ssn = $(this).val();
        if (ssn.length < 9) {
            alert("SSN must be 9 digit");
            return;
        }
        if (ssn.length > 4) {
            saveupdateSSN(ssn);
            $(this).val("***-**-" + ssn.substr(ssn.length - 4, 4));
        }
    });

    $("#txtIDNumber").focusin(function () {
        var id = $("#hdnOPId").val();
        var model = {
            id: id,
            vid: 3
        };
        $.ajax({
            url: '/ApplyNow/GetSSNIdNumberPassportNumber',
            type: "post",
            contentType: "application/json utf-8",
            data: JSON.stringify(model),
            dataType: "JSON",
            success: function (response) {
                $("#txtIDNumber").val(response.ssn);
            }
        });
    }).focusout(function () {
        var idnumber = $(this).val();
        if (idnumber.length < 5) {
            alert("ID Number should be greater then 4 digit");
            return;
        }
        if (idnumber.length > 4) {
            saveupdateIDNumber(idnumber);
            $(this).val(("*".repeat(idnumber.length - 4) + idnumber.substr(idnumber.length - 4, 4)));
        }

    });

    $("#txtSSNNumberReg").focusin(function () {
        getEncDecValue(this, 1);
    }).focusout(function () {
        var ssn = $(this).val();
        if (ssn.length < 9) {
            alert("SSN must be 9 digit");
            return;
        }
        if (ssn.length > 4) {
            getEncDecValue(this, 2);
            $(this).val("***-**-" + ssn.substr(ssn.length - 4, 4));
        }
    });

    $("#txtIDNumberReg").focusin(function () {
        getEncDecValue(this, 1);
    }).focusout(function () {
        var idnumber = $(this).val();
        if (idnumber.length < 5) {
            alert("ID Number should be greater then 4 digit");
            return;
        }
        if (idnumber.length > 4) {
            getEncDecValue(this, 2);
            $(this).val(("*".repeat(idnumber.length - 4) + idnumber.substr(idnumber.length - 4, 4)));
        }
    });

    //$("#txtApplicantSSNNumber").focusin(function () {
    //    getEncDecValue(this, 1);
    //}).focusout(function () {
    //    var ssn = $(this).val();
    //    if (ssn.length < 9) {
    //        alert("SSN must be 9 digit");
    //        // $("#divchkCCPay").addClass("hidden");
    //        $("#chkCCPay").iCheck("uncheck").prop("disabled", true);
    //        $('#divCreditCheckPayment').addClass('hidden');
    //        return;
    //    } else {
    //        if ($("#hndCreditPaid").val() != "1") {
    //            $("#divchkCCPay").removeClass("hidden");  
    //        }
    //        var modal = $("#popApplicant");
    //        //modal.find('.modal-content').css("height", "560px");
    //    }
    //    if (ssn.length > 4) {
    //        getEncDecValue(this, 2);
    //        $(this).val("***-**-" + ssn.substr(ssn.length - 4, 4));
    //    }

    //    if (ssn.length < 9) {
    //        $("#chkCCPay").prop("disabled", true);
    //    } else if (ssn.length > 8) {
    //        $("#chkCCPay").prop("disabled", false);
    //    }
    //});

    $("#txtApplicantIDNumber").focusin(function () {
        getEncDecValue(this, 1);
    }).focusout(function () {
        var idnumber = $(this).val();
        if (idnumber.length < 5) {
            alert("ID Number should be greater then 4 digit");
            return;
        }
        if (idnumber.length > 4) {
            getEncDecValue(this, 2);
            $(this).val(("*".repeat(idnumber.length - 4) + idnumber.substr(idnumber.length - 4, 4)));
        }
    });

    $("#txtPassportNum").focusin(function () {
        var id = $("#hdnOPId").val();
        var model = {
            id: id,
            vid: 2
        };
        $.ajax({
            url: '/ApplyNow/GetSSNIdNumberPassportNumber',
            type: "post",
            contentType: "application/json utf-8",
            data: JSON.stringify(model),
            dataType: "JSON",
            success: function (response) {
                $("#txtPassportNum").val(response.ssn);
            }
        });
    }).focusout(function () {
        var passportnumber = $(this).val();
        if (passportnumber.length > 4) {
            saveupdatePassportNumber(passportnumber);
            $(this).val(("*".repeat(passportnumber.length - 4) + passportnumber.substr(passportnumber.length - 4, 4)));
        }
    });

    $("#txtPhoneNumber").focusout(function () {
        var phoneNum = $("#txtPhoneNumber").val();
        $("#txtPhoneNumber").val(formatPhoneFax($("#txtPhoneNumber").val()));
    })
        .focus(function () {
            $("#txtPhoneNumber").val(unformatText($("#txtPhoneNumber").val()));
        });
    $("#txtManagementCompanyPhone").focusout(function () {
        var phoneNum = $("#txtManagementCompanyPhone").val();
        $("#txtManagementCompanyPhone").val(formatPhoneFax($("#txtManagementCompanyPhone").val()));
    })
        .focus(function () {
            $("#txtManagementCompanyPhone").val(unformatText($("#txtManagementCompanyPhone").val()));
        });
    $("#txtManagementCompanyPhone2").focusout(function () {
        var phoneNum = $("#txtManagementCompanyPhone2").val();
        $("#txtManagementCompanyPhone2").val(formatPhoneFax($("#txtManagementCompanyPhone2").val()));
    })
        .focus(function () {
            $("#txtManagementCompanyPhone2").val(unformatText($("#txtManagementCompanyPhone2").val()));
        });
};
function formatPhoneFax(phonefax) {
    if (phonefax == null)
        phonefax = "";
    phonefax = phonefax.replace(/[^0-9]/g, '');
    if (phonefax.length == 0)
        return phonefax;

    return '(' + phonefax.substring(0, 3) + ') ' + phonefax.substring(3, 6) + (phonefax.length > 6 ? '-' : '') + phonefax.substring(6);
}
function unformatText(text) {
    if (text == null)
        text = "";

    return text.replace(/[^\d\.]/g, '');
}
function formatSSN(ssn) {
    if (ssn == null)
        ssn = "";
    ssn = ssn.replace(/[^0-9]/g, '');
    if (ssn.length == 0)
        return ssn;

    return ssn.substring(0, 3) + (ssn.length > 3 ? '-' : '') + ssn.substring(3, 5) + (ssn.length > 5 ? '-' : '') + ssn.substring(5);
}
function formatMoney(number) {
    number = number || 0;
    var places = 2;
    var symbol = "";
    var thousand = ",";
    var decimal = ".";
    var negative = number < 0 ? "-" : "",
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
}
var getDocuDoc = function (envelopeID) {

    $("#divLoader").show();
    var param = { EnvelopeID: envelopeID };
    $.ajax({
        url: "/EmbeddedSigning/GetDocuDocLease",
        method: "post",
        data: JSON.stringify(param),
        contentType: "application/json; charset=utf-8", // content type sent to server
        dataType: "json", //Expected data format from server
        success: function (response) {
            $("#divLoader").hide();
            window.open("/Content/assets/img/Document/" + response.result, "popupWindow", "width=900,height=600,scrollbars=yes");

        }
    });
}
function gotoLogin() {
    window.location.href = "../../../Home/Index";
}
function checkExpiry() {
    QuoteExpires = $("#lblFNLQuoteExpires").text();
    var countDownDate = new Date(QuoteExpires).getTime();
    var x = setInterval(function () {

        var now = new Date().getTime();
        var expiredDate = countDownDate - now;
        var quotationTenantId = $("#hdnOPId").val();
        if (expiredDate < 0) {
            $("#popRentalQualification").modal("hide");
            clearInterval(x);
            document.getElementById("getting-startedTimeRemainingClock").innerHTML = "QUOTE EXPIRED";
            var model = {
                TenantID: quotationTenantId
            };
            $.alert({
                title: "",
                content: "Your Quotation is Expired. Please register again..",
                type: 'red',
                buttons: {
                    yes: {
                        text: 'OK',
                        action: function (yes) {

                            $("#divLoader").show();

                            $.ajax({
                                url: "/ApplyNow/DeleteApplicantTenantID/",
                                type: "post",
                                contentType: "application/json utf-8",
                                data: JSON.stringify(model),
                                dataType: "JSON",
                                success: function (response) {
                                    window.location.href = '/Home';
                                    localStorage.setItem("CheckReload", "Done");
                                    $("#divLoader").hide();
                                    return;
                                }
                            });
                        }

                    }
                }
            });
        }

    }, 1000);

}
var checkEmailAreadyExist = function () {
    var model = { EmailId: $('#txtEmail').val() };
    $("#divLoader").show();
    $.ajax({
        url: "/ApplyNow/CheckEmailAreadyExist",
        method: "post",
        data: JSON.stringify(model),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if (response.model == "Yes Tenant") {
                $.alert({
                    title: "",
                    content: "This email Id is already exist please press Yes to Sign In.",
                    type: 'blue',
                    buttons: {
                        yes: {
                            text: 'Yes',
                            action: function (yes) {
                                localStorage.setItem("userName", $('#txtEmail').val());
                                $('#txtEmail').val('');
                                window.location.replace("/Account/Login");
                                $('#UserEmail').val(localStorage.getItem("userName"));
                                $('#UserPassword').focus();
                            }
                        },
                        no: {
                            text: 'No',
                            action: function (no) {
                                $('#txtEmail').val('');
                                $('#txtEmail').focus();
                            }
                        }
                    }
                });
            }
            else if (response.model == "Yes But Not Tenant") {
                $.alert({
                    title: "",
                    content: "This email Id is already exist please press Yes to Login.",
                    type: 'blue',
                    buttons: {
                        yes: {
                            text: 'Yes',
                            action: function (yes) {
                                var modals = document.getElementById("popSignIn");
                                modals.style.display = "block";
                                $('#UserEmail').val($('#txtEmail').val());
                                $('#txtEmail').val('');
                                $('#UserPassword').focus();
                            }
                        },
                        no: {
                            text: 'No',
                            action: function (no) {
                                $('#txtEmail').val('');
                                $('#txtEmail').focus();
                            }
                        }
                    }
                });
            }
        }
    });
    $("#divLoader").hide();
}
var dateIconFunctions = function () {
    $('#DOBdate').click(function () {
        $("#txtDateOfBirth").focus();
    });
    $('#SPMoveInDateF').click(function () {
        $("#txtMoveInDateFrom").focus();
    });
    //$('#SPMoveInDateT').click(function () {
    //    $("#txtMoveInDateTo").focus();
    //});
    $('#IconMoveInDateFrom2').click(function () {
        $("#txtMoveInDateFrom2").focus();
    });
    $('#IconMoveInDateTo2').click(function () {
        $("#txtMoveInDateTo2").focus();
    });
    $('#IconStartDateHEI').click(function () {
        $("#txtStartDateHEI").focus();
    });
    $('#IconTerminationDateHEI').click(function () {
        $("#txtTerminationDateHEI").focus();
    });
    $('#IconDateOfBirth').click(function () {
        $("#txtDateOfBirth").focus();
    });
};
var createLeaseDocument = function () {
    if ($("#btnDownloadLeaseDocument").attr("disabled")) {
        return;
    }
    $("#divLoader").show();
    var param = { UserID: $("#hndUID").val() };
    $.ajax({
        url: "/CheckList/LeaseDocument",
        method: "post",
        data: JSON.stringify(param),
        contentType: "application/json; charset=utf-8", // content type sent to server
        dataType: "json", //Expected data format from server
        success: function (response) {
            $("#divLoader").hide();
            $("#btnDownloadLeaseDocument").attr("disabled", "disabled");
            $("#btnleaseDownl").removeAttr("disabled");
        }
    });
}
var downloadLeaseDocument = function () {
    $("#divLoader").show();
    var param = { UserID: $("#hndUID").val() };
    $.ajax({
        url: "/CheckList/GetLeaseDocBlumoon",
        method: "post",
        data: JSON.stringify(param),
        contentType: "application/json; charset=utf-8", // content type sent to server
        dataType: "json", //Expected data format from server
        success: function (response) {
            $("#divLoader").hide();
            var hyperlink = document.createElement('a');
            hyperlink.href = "/Content/assets/img/Document/LeaseDocument_" + response.LeaseId + ".pdf";
            hyperlink.target = '_blank';
            hyperlink.download = "LeaseDocument_" + response.LeaseId + ".pdf";

            (document.body || document.documentElement).appendChild(hyperlink);
            hyperlink.onclick = function () {
                (document.body || document.documentElement).removeChild(hyperlink);
            };
            var mouseEvent = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true
            });
            hyperlink.dispatchEvent(mouseEvent);
            if (!navigator.mozGetUserMedia) {
                window.URL.revokeObjectURL(hyperlink.href);
            }

        }
    });
};
var getMonthsCountFromApplicantHistory = function () {
    $("#divLoader").show();
    var todaysDate = new Date();
    var twoDigitMonth = ((todaysDate.getMonth().length + 1) === 1) ? (todaysDate.getMonth() + 1) : '0' + (todaysDate.getMonth() + 1);
    var twoDigitDay = ((todaysDate.getDate().length) === 1) ? (todaysDate.getDate()) : '0' + (todaysDate.getDate());
    todaysDate = twoDigitMonth + "/" + todaysDate.getDate() + "/" + todaysDate.getFullYear();
    var tenantId = $("#hdnOPId").val();
    var fromDateAppHis = $('#txtMoveInDateFrom').val();
    var toDateAppHis = todaysDate;

    var model = {
        TenantId: tenantId,
        FromDateAppHis: fromDateAppHis,
        ToDateAppHis: toDateAppHis
    };
    $.ajax({
        url: '/ApplyNow/GetMonthsFromApplicantHistory',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            $("#hndHistory").val(response.model.TotalMonthsApplicantHistory);
        }
    });
};
var deleteVehiclesListOnCheck = function () {
    $("#divLoader").show();
    var ProspectID = $("#hdnOPId").val();

    var model = {
        TenantId: ProspectID
    };
    $.ajax({
        url: '/ApplyNow/DeleteVehicleListOnCheck',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
        }
    });
};
var saveupdateSSN = function (ssn) {

    var prospectID = $("#hdnOPId").val();
    var sSNNumber = ssn;
    if (sSNNumber != "") {
        $("#divLoader").show();
        var model = {
            ProspectID: prospectID,
            SSN: sSNNumber
        };
        $.ajax({
            url: '/ApplyNow/SaveUpdateSSN',
            type: "post",
            contentType: "application/json utf-8",
            data: JSON.stringify(model),
            dataType: "JSON",
            success: function (response) {
                $("#divLoader").hide();
            }
        });
    }

};
var saveupdateIDNumber = function (idnum) {

    var prospectID = $("#hdnOPId").val();
    var idNumber = idnum;

    if (idNumber != "") {
        $("#divLoader").show();
        var model = {
            ProspectID: prospectID,
            IDNumber: idNumber
        };

        $.ajax({
            url: '/ApplyNow/SaveUpdateIDNumber',
            type: "post",
            contentType: "application/json utf-8",
            data: JSON.stringify(model),
            dataType: "JSON",
            success: function (response) {
                $("#divLoader").hide();
            }
        });
    }

};
var saveupdatePassportNumber = function (passportnumber) {

    var prospectID = $("#hdnOPId").val();
    var passportNumber = passportnumber;

    if (passportNumber != "") {
        $("#divLoader").show();
        var model = {
            ProspectID: prospectID,
            PassportNumber: passportNumber
        };

        $.ajax({
            url: '/ApplyNow/SaveUpdatePassportNumber',
            type: "post",
            contentType: "application/json utf-8",
            data: JSON.stringify(model),
            dataType: "JSON",
            success: function (response) {
                $("#divLoader").hide();
            }
        });
    }

};
var clearHistoryOfResidence = function () {

    $('#hdnHEI').val('0');
    $('#txtEmployerNameHEI').val('');
    $('#txtJobTitleHEI').val('');
    $('#ddlJobTypeHEI').val('0');
    $('#txtStartDateHEI').val('');
    $('#txtTerminationDateHEI').val('');
    $('#txtAnnualIncomeHEI').val('');
    $('#txtAddAnnualIncomeHEI').val('');
    $('#txtSupervisiorNameHEI').val('');
    $('#txtSupervisiorPhoneHEI').val('');
    $('#txtSupervisiorEmailHEI').val('');
    $('#txtCountryOfficeHEI').val('1');
    fillStateDDL_OfficeHEI(1, 0);

    $('#txtofficeAddress1HEI').val('');
    $('#txtofficeAddress2HEI').val('');
    $('#ddlCityEmployeeHEI').val('');
    $('#txtZipOfficeHEI').val('');
    $('#txtReasonOfTerminationHEI').val('');

}
var saveEmployerHistory = function () {
    $("#divLoader").show();
    var TenantId = $("#hdnOPId").val();
    var HEIid = $('#hdnHEI').val();
    var empNameHei = $('#txtEmployerNameHEI').val();
    var jobTitleHei = $('#txtJobTitleHEI').val();
    var jobTypeHei = $('#ddlJobTypeHEI').val();
    var startDateHei = $('#txtStartDateHEI').val();
    var terminationDateHei = $('#txtTerminationDateHEI').val();
    var annualIncomeHei = unformatText($('#txtAnnualIncomeHEI').val());
    var addAnnualIncomeHei = unformatText($('#txtAddAnnualIncomeHEI').val());
    var supervisorNameHei = $('#txtSupervisiorNameHEI').val();
    var supervisorPhoneHei = unformatText($('#txtSupervisiorPhoneHEI').val());
    var supervisorEmailHei = $('#txtSupervisiorEmailHEI').val();
    var countryOfficeHei = $('#txtCountryOfficeHEI').val();
    var offAddress1Hei = $('#txtofficeAddress1HEI').val();
    var officeAddress2Hei = $('#txtofficeAddress2HEI').val();
    var stateEmployeeHei = $('#ddlStateEmployeeHEI').val();
    var cityEmployeeHei = $('#ddlCityEmployeeHEI').val();
    var zipOfficeHei = $('#txtZipOfficeHEI').val();
    var terminationReasonHei = $('#txtReasonOfTerminationHEI').val();
    var msg = '';
    if (!empNameHei) {
        msg += 'Please Fill Employer Name</br>';
    }
    if (!startDateHei) {
        msg += 'Please Fill Start Date</br>';
    }
    if (!terminationDateHei) {
        msg += 'Please Fill Termination Date</br>';
    }
    if (!annualIncomeHei) {
        msg += 'Please Fill Annual Income</br>';
    }

    if (!supervisorNameHei) {
        msg += "Please Fill Supervisor Name</br>";
    }

    if (!supervisorPhoneHei) {
        msg += "Please Fill Supervisor Phone</br>";
    } else if (supervisorPhoneHei) {
        if (supervisorPhoneHei.length < 10) {
            msg += "Please enter 10 digit supervisor phone number </br>";
        }
    }

    if (supervisorEmailHei) {
        if (!validateEmail(supervisorEmailHei)) {
            msg += "Please Fill Valid Email </br>";
        }
    }

    if (countryOfficeHei == '0') {
        msg += 'Please Select Country</br>';
    }
    if (!offAddress1Hei) {
        msg += 'Please Fill Address 1</br>';
    }
    if (stateEmployeeHei == '0') {
        msg += 'Please Select state</br>';
    }
    if (!cityEmployeeHei) {
        msg += 'Please Fill City</br>';
    }
    if (!zipOfficeHei) {
        msg += 'Please Fill Zip</br>';
    }
    if (msg != '') {
        $("#divLoader").hide();
        $.alert({
            title: "",
            content: msg,
            type: 'blue'
        });
        return;
    }

    var model = {
        HEIID: HEIid,
        EmployerName: empNameHei,
        JobTitle: jobTitleHei,
        JobType: jobTypeHei,
        StartDate: startDateHei,
        TerminationDate: terminationDateHei,
        AnnualIncome: annualIncomeHei,
        AddAnnualIncome: addAnnualIncomeHei,
        SupervisorName: supervisorNameHei,
        SupervisorPhone: supervisorPhoneHei,
        SupervisorEmail: supervisorEmailHei,
        Country: countryOfficeHei,
        Address1: offAddress1Hei,
        Address2: officeAddress2Hei,
        State: stateEmployeeHei,
        City: cityEmployeeHei,
        Zip: zipOfficeHei,
        TenantId: TenantId,
        TerminationReason: terminationReasonHei
    };

    $.ajax({
        url: "/ApplyNow/SaveUpdateEmployerHistory",
        method: "post",
        data: JSON.stringify(model),
        contentType: "application/json; charset=utf-8", // content type sent to server
        dataType: "json", //Expected data format from server
        success: function (response) {
            $("#divLoader").hide();
            getEmployerHistory();
            $('#popHistoryEmpAndIncome').modal('hide');
            $.alert({
                title: "",
                content: response.model,
                type: 'blue'
            });
        }
    });
}
var getEmployerHistory = function () {
    $("#divLoader").show();
    var TenantId = $("#hdnOPId").val();
    var model = { TenantId: TenantId };
    $.ajax({
        url: '/ApplyNow/GetEmployerHistory',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            $("#tblHEI>tbody").empty();
            $("#tblPreviousEmployement>tbody").empty();
            $("#prevEmphistr>tbody").empty();
            $("#prevEmphistrp>tbody").empty();
            $.each(response.model, function (elementType, elementValue) {
                var html = "<tr data-value=" + elementValue.HEIID + ">";
                html += "<td>" + elementValue.EmployerName + "</td>";
                html += "<td>" + elementValue.JobTitle + "</td>";
                html += "<td>" + elementValue.JobTypeName + "</td>";
                html += "<td>" + elementValue.StartDateString + "</td>";
                html += "<td>" + elementValue.TerminationDateString + "</td>";
                html += "<td>" + elementValue.CountryName + "</td>";
                html += "<td>" + elementValue.StateName + "</td>";
                html += "<td>" + elementValue.City + "</td>";
                html += "<td class='text-center'><a class='fa fa-edit' style='background:transparent; margin-right:10px;' href='javascript:void(0)' onclick='editEmployerHistory(" + elementValue.HEIID + ")'></a><a class='fa fa-trash'  href='javascript:void(0)' onclick='delEmployerHistory(" + elementValue.HEIID + ")'></a></td>";
                html += "</tr>";
                $("#tblHEI>tbody").append(html);
                var summAdd = "<tr><td style='width: 195px;'>Previous Employer </td><td>" + elementValue.EmployerName + ", " + elementValue.JobTitle + ", " + elementValue.City + ", " + elementValue.StateName + " -" + + "</td></tr>";

                var htmlEmployer = "<tr>";
                htmlEmployer += "<td>Previous Employer</td>";
                htmlEmployer += "<td>" + elementValue.EmployerName + "</td>";
                htmlEmployer += "<td>" + elementValue.JobTitle + "</td>";
                htmlEmployer += "<td>" + elementValue.JobTypeName + "</td>";
                htmlEmployer += "<td>" + elementValue.StartDateString + " - " + elementValue.TerminationDateString + "</td>";
                htmlEmployer += "<td>" + formatMoney(elementValue.AnnualIncome) + "</td>";
                htmlEmployer += "<td>" + elementValue.SupervisorName + "</td>";
                htmlEmployer += "<td>" + formatPhoneFax(elementValue.SupervisorPhone) + "</td>";
                htmlEmployer += "</tr>";


                $("#tblPreviousEmployement>tbody").append(htmlEmployer);
                $("#prevEmphistr>tbody").append(summAdd);
                $("#prevEmphistrp>tbody").append(summAdd);
            });
        }
    });
}
var delEmployerHistory = function (id) {

    var model = { HEIID: id };
    $.alert({
        title: "",
        content: "Are you sure to remove?",
        type: 'blue',
        buttons: {
            yes: {
                text: 'Yes',
                action: function (yes) {
                    $("#divLoader").show();
                    $.ajax({
                        url: '/ApplyNow/DeleteEmployerHistory',
                        type: "post",
                        contentType: "application/json utf-8",
                        data: JSON.stringify(model),
                        dataType: "JSON",
                        success: function (response) {
                            $("#divLoader").hide();
                            getEmployerHistory();
                            $.alert({
                                title: "",
                                content: response.model,
                                type: 'blue'
                            });
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
var getMonthsCountFromEmployerHistory = function () {
    $("#divLoader").show();
    var todaysDate = new Date();
    var tenantId = $("#hdnOPId").val();
    var startDate = $('#txtStartDate').val();
    var currentDates = todaysDate;

    var model = {
        TenantId: tenantId,
        EmpStartDate: startDate,
        EmpTerminationDate: currentDates
    };
    $.ajax({
        url: '/ApplyNow/GetMonthsFromEmployerHistory',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            $("#hdnEmployerHistory").val(response.model.TotalMonthsEmployerHistory);
        }
    });
};
var editEmployerHistory = function (id) {
    $("#divLoader").show();
    var model = { HEIID: id };
    $.ajax({
        url: '/ApplyNow/EditEmployerHistory',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            $('#hdnHEI').val(response.model.HEIID);
            $('#txtEmployerNameHEI').val(response.model.EmployerName);
            $('#txtJobTitleHEI').val(response.model.JobTitle);
            $('#ddlJobTypeHEI').val(response.model.JobType);
            $('#txtStartDateHEI').val(response.model.StartDateString);
            $('#txtTerminationDateHEI').val(response.model.TerminationDateString);
            var anInc = formatMoney(response.model.AnnualIncome);
            $('#txtAnnualIncomeHEI').val(anInc);
            var addAnInc = formatMoney(response.model.AddAnnualIncome);
            $('#txtAddAnnualIncomeHEI').val(addAnInc);
            $('#txtSupervisiorNameHEI').val(response.model.SupervisorName);
            var ph = formatPhoneFax(response.model.SupervisorPhone);
            $('#txtSupervisiorPhoneHEI').val(ph);
            $('#txtSupervisiorEmailHEI').val(response.model.SupervisorEmail);
            $('#txtCountryOfficeHEI').val(response.model.Country);
            $('#txtofficeAddress1HEI').val(response.model.Address1);
            $('#txtofficeAddress2HEI').val(response.model.Address2);
            $('#ddlStateEmployeeHEI').val(response.model.State);
            $('#ddlCityEmployeeHEI').val(response.model.City);
            $('#txtZipOfficeHEI').val(response.model.Zip);
            $('#txtReasonOfTerminationHEI').val(response.model.TerminationReason);
            $('#popHistoryEmpAndIncome').modal('show');
        }
    });
}
var SaveUpdateStep = function (stepcompleted) {
    $("#divLoader").show();
    var ProspectId = $("#hdnOPId").val();
    var model = {
        ID: ProspectId,
        StepCompleted: stepcompleted
    };

    $.ajax({
        url: '/ApplyNow/SaveUpdateStep',
        type: 'post',
        data: JSON.stringify(model),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
            var stepcomp = parseInt($("#hdnStepCompleted").val());
            if (stepcomp < stepcompleted) {
                $("#hdnStepCompleted").val(stepcompleted);
            }
        }
    });
}
var checkHasUnitID = function () {
    if ($("#hndShowPropertyDetails").val() != "0") {
        $("#PopSummary").modal("show");
    }
    else {
        $("#PopSummary").modal("hide");
        $.alert({
            title: "",
            content: "Please Select Unit",
            type: 'blue'
        });
    }
}
var savepudateOnlineProspect = function () {
    $("#divLoader").show();
    var userID = $("#hdnUserId").val();
    var firstName = $("#txtFirstName").val();
    var middleInitial = $("#txtMiddleInitialReg").val();
    var lastName = $("#txtLastName").val();
    var phoneNumber = unformatText($("#txtPhoneNumber").val());
    var emailId = $("#txtEmail").val();
    var password = $("#txtPassword").val();
    var gender = $("#ddlGenderReg").val();
    var confirmPassword = $("#txtConfPassword").val();
    var otherGender = $("#txtOtherGenderReg").val();
    var marketsource = $("#ddlMarketSource").val();


    if (phoneNumber.length < 10) {
        alert("Please enter 10 digit mobile number.");
        return;
    }
    var model = {
        UserID: userID,
        FirstName: firstName,
        MiddleInitial: middleInitial,
        LastName: lastName,
        Email: emailId,
        Phone: phoneNumber,
        Password: password,
        Marketsource: marketsource,
        Gender: gender,
        OtherGender: otherGender
    };

    $.ajax({
        url: '/ApplyNow/SaveUpdateOnlineProspect',
        type: 'post',
        data: JSON.stringify(model),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (response) {
            $("#divLoader").hide();
        }
    });
}
var checkAndDeletePet = function (noofpetdelete) {
    var prospectID = $("#hdnOPId").val();
    var model = {
        ProspectID: prospectID,
        NoOfPet: noofpetdelete
    };
    $("#divLoader").show();
    $.ajax({
        url: "/Tenant/Pet/CheckAndDeletePet/",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            getPetListsApplyNow();
        }
    });
};
var getProcessingFees = function () {
    return $("#hndProcessingFees").val();
};
var makeid = function (length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
var ddlEverBeenEvictedFunction = function () {
    if ($('#ddlEverBeenEvicted').val() == '2') {
        $('#txtEverBeenEvictedDetails').val("");
        $('#txtEverBeenEvictedDetails').removeProp("disabled");
    }
    else if ($('#ddlEverBeenEvicted').val() == '1') {
        $('#txtEverBeenEvictedDetails').val("");
        $('#txtEverBeenEvictedDetails').prop("disabled", "disabled");
    }
};
var ddlEverBeenConvictedFunction = function () {
    if ($('#ddlEverBeenConvicted').val() == '2') {
        $('#txtEverBeenConvictedDetails').val("");
        $('#txtEverBeenConvictedDetails').removeProp("disabled");
    }
    else if ($('#ddlEverBeenConvicted').val() == '1') {
        $('#txtEverBeenConvictedDetails').val("");
        $('#txtEverBeenConvictedDetails').prop("disabled", "disabled");
    }
};
var ddlAnyCriminalChargesFunction = function () {
    if ($('#ddlAnyCriminalCharges').val() == '2') {
        $('#txtAnyCriminalChargesDetails').val("");
        $('#txtAnyCriminalChargesDetails').removeProp("disabled");
    }
    else if ($('#ddlAnyCriminalCharges').val() == '1') {
        $('#txtAnyCriminalChargesDetails').val("");
        $('#txtAnyCriminalChargesDetails').prop("disabled", "disabled");
    }
};
var ddlReferredByAnotherResidentFunction = function () {
    if ($('#ddlReferredByAnotherResident').val() == '2') {
        $('#txtReferredByAnotherResidentName').val("");
        $('#txtReferredByAnotherResidentName').removeProp("disabled");
    }
    else if ($('#ddlReferredByAnotherResident').val() == '1') {
        $('#txtReferredByAnotherResidentName').val("");
        $('#txtReferredByAnotherResidentName').prop("disabled", "disabled");
    }
};
var getPreviousAddressInfo = function (id) {
    $("#divLoaderFullData").show();
    var model = {
        id: id
    };
    $.ajax({
        url: '/ApplyNow/getPreviousAddressInfo',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#SumpriAddCOuntry").text(response.model.CountryString);
            $("#SumPriAddReason").text(response.model.Reason);
            $("#SumPriAddMoveInDateFromTxt").text(response.model.MoveInDateFromTxt);
            $("#SumPriAddMonthlyPayment").text(" $ " + (formatMoney(response.model.MonthlyPayment)));
            $("#SumPriAddAddress").text(response.model.HomeAddress1 + " ," + response.model.HomeAddress1);
            $("#SuApartmentCommunity").text(response.model.ApartmentCommunity);
            $("#SuManagementCompany").text(response.model.ManagementCompany);
            $("#SuManagementCompanyPhone").text(formatPhoneFax((response.model.ManagementCompanyPhone)));
            $("#SuIsProprNoticeLeaseAgreement").text(response.model.stringIsProprNoticeLeaseAgreement);

            $("#divLoaderFullData").hide();
        }
    });
};
var getPreviousEmployementInfo = function (id) {
    $("#divLoaderFullData").show();
    var model = {
        id: id
    };
    $.ajax({
        url: '/ApplyNow/getPreviousEmployementInfo',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#SumPriEmp").text(response.model.EmployerName);
            $("#SumPriJobTi").text(response.model.JobTitle);
            $("#SumPriStatD").text(response.model.StartDateString);
            $("#SumPriTerDate").text(response.model.TerminationDateString);
            $("#SumPriSupervisorName").text(response.model.SupervisorName);
            $("#SumPriAddress").text(response.model.Address1 + " ," + response.model.Address2);
            $("#SumPriAnnualIncome").text("$ " + (formatMoney(response.model.AnnualIncome)));
            $("#SumPriAddAnnualIncome").text("$ " + (formatMoney(response.model.AddAnnualIncome)));
            $("#SumPriSupervisorPhone").text(formatPhoneFax(response.model.SupervisorPhone));
            $("#divLoaderFullData").hide();
        }
    });
};
var printSummary = function () {
    $("#divLoader").show();
    var model = {
        TenantID: $("#hdnOPId").val()
    };
    $.ajax({
        url: '/ApplyNow/PrintApplicationForm',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            $("#ifrmAppSummary").attr("src", response.filename);
            $("#modalApplicationSummary").show();
        }
    });
}
var printQuotationPrint = function () {
    $("#divLoader").show();
    var numofveh = 0;
    var noofbed = $("#lblBed").text();
    var additionalParking = $("#hndAdditionalParking").val();
    if (parseInt(additionalParking) > 0) {
        if (parseInt(noofbed) < 3) {
            numofveh = (parseInt(additionalParking) + 1);
        }
        else {
            numofveh = (parseInt(additionalParking) + 2);
        }
    }
    var model = {
        TenantID: $("#hdnOPId").val(),
        QuoteDate: $("#lblFNLQuoteDate").text(),
        ApplicantName: $("#lblFNLResidentName1").text(),
        QuoteExpires: $("#lblFNLQuoteExpires").text(),
        PhoneNumber: $("#lblFNLPhone").text(),
        Email: $("#lblFNLEmail").text(),
        DesiredMoveIn: $("#lblFNLDesiredMoveIn").text(),
        UnitNo: $("#lblFNLUnit").text(),
        ModelName: $("#lblFNLModel").text(),
        LeaseTerm: $("#lblFNLTerm").text(),
        AssignParkingSpace: $("#lblAssginPakingSpace").text(),
        ApplicationFees: $("#lblFNLApplicationFee").text(),
        SecurityDeposit: $("#fdepo").text(),
        GuarantorFees: $("#lblFNLGautantorFee").text(),
        PetNonRefundableFee: $("#fpetd").text(),
        AdministratorFee: $("#lblFNLAdministratorFee").text(),
        PetDNAFee: $("#fpetdna").text(),
        VehicleRegistration: $("#lblVehicleFees").text(),
        MonthlyRent: $("#lblMonthly_MonthlyCharge").text(),
        ProratedMonthlyRent: $("#lblProrated_MonthlyCharge").text(),
        TrashFee: $("#spanTrashRecycle").text(),
        ProratedTrashFee: $("#lblProrated_TrashAmt").text(),
        PestControlFee: $("#spanPestControl").text(),
        ProratedPestControlFee: $("#lblProrated_PestAmt").text(),
        ConvergentBillingFee: $("#spanConvergentAmt").text(),
        ProratedConvergentBillingFee: $("#lblProrated_ConvergentAmt").text(),
        AdditionalParking: $("#lblMonthly_AditionalParking").text(),
        ProratedAdditionalParking: $("#lblProrated_AditionalParking").text(),
        StorageAmount: $("#lblMonthly_Storage").text(),
        ProratedStorageAmount: $("#lblProrated_Storage").text(),
        PetFee: $("#lblMonthly_PetRent").text(),
        ProratedPetFee: $("#lblProrated_PetRent").text(),
        MonthlyCharges: $("#lblMonthly_TotalRent").text(),
        ProratedMonthlyCharges: $("#lblProrated_TotalRent").text(),
        AppCreditFees: $("#hndAppCreditFees").val(),
        AppBackgroundFees: $("#hndAppBackgroundFees").val(),
        NumberOfPet: $("#hndPetPlaceCount").val(),
        NumberOfParking: numofveh,
        DueAtMoveIn: $("#lbtotdueatmov6").text()
    };
    $.ajax({
        url: '/ApplyNow/PrintQuotation',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        async: false,
        success: function (response) { $("#divLoader").show(); }
    }).done(function (response) {
        $("#divLoader").hide();
        $("#ifrmQuotationPrint").attr("src", response.filename);
        $("#modalQuotationPrint").show();
    });
};
var getEncDecValue = function (txtBox, encdec) {
    var encdecval = "";
    if (encdec == 1) {
        encdecval = $(txtBox).attr("data-value");
    } else {
        encdecval = $(txtBox).val();
    }
    if (encdecval) {
        $("#divLoader").show();
        var model = {
            EncDecVal: encdecval,
            EncDec: encdec
        };

        $.ajax({
            type: "POST",
            url: '/ApplyNow/GetEncDecSSNPassportIDNum',
            data: JSON.stringify(model),
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            headers: {
                '__Token': $("input[name='__Token']").val()
            },
            success: function (response) {
                if (encdec == 1) {
                    $(txtBox).val(response.result);
                    $(txtBox).attr("data-value", "");
                } else {
                    $(txtBox).attr("data-value", response.result);
                }
                $("#divLoader").hide();
            },
            error: function (response) {
                $("#divLoader").hide();
                alert("Error");
                //if (data.status == 401 || data.status == 403)
                //    window.location.href = "../Common/accessdenied";
                //else if (data.status == 419) {
                //    displayUserMessage(commonMessage.RE_SESSIONINFO_NOT_FOUND, true);
                //    window.location.href = "../Common/logout";
                //}
                //else
                //    displayUserMessage(commonMessage.SERVICE_NOT_RESPONDING, true);
            }
        });

        //$.ajax({
        //    url: '/ApplyNow/GetEncDecSSNPassportIDNum',
        //    type: "post",
        //    contentType: "application/json utf-8",
        //    data: JSON.stringify(model),
        //    dataType: "JSON",
        //    success: function (response) {
        //        if (encdec == 1) {
        //            $(txtBox).val(response.result);
        //            $(txtBox).attr("data-value", "");
        //        } else {
        //            $(txtBox).attr("data-value", response.result);
        //        }
        //        $("#divLoader").hide();
        //    }
        //});
    }
};
var ddlDocumentTypePersonal = function (id) {
    $('#ddlDocumentTypePersonal').empty();
    var option = '<option value="0">Select</option>';
    option += '<option value="1">Drivers License</option>';
    option += '<option value="2">Military ID</option>';
    option += '<option value="4">State Issued ID</option>';
    $('#divIDState').removeClass("hidden");
    $('#divIDDocumentType').removeClass("hidden");
    if (id == '0') {
        option += '<option value="3">Passport</option>';
    }
    else {
        $('#divIDState').addClass("hidden");
        $('#divIDDocumentType').addClass("hidden");
    }
    $('#ddlDocumentTypePersonal').append(option);
    $('#ddlDocumentTypePersonal').val($("#hndDocumentTypePersonal").val());

    $('#ddlApplicantDocumentTypePersonal').empty();
    var optionNew = '<option value="0">Select</option>';
    optionNew += '<option value="1">Drivers License</option>';
    optionNew += '<option value="2">Military ID</option>';
    optionNew += '<option value="4">State Issued ID</option>';

    $('#ddlApplicantDocumentTypePersonal').append(optionNew);
    $('#ddlApplicantDocumentTypePersonal').val($("#hndDocumentTypePersonal").val());
}
function sortTableStorage(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tblStorage1");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
var sortTableStorage1 = function (sortby) {
    var orderby = $('#hndStorageOrderBy').val();

    if (orderby == "ASC") {
        $("#SortIconStorage1Storage").removeClass('fa fa-sort-down');
        $("#SortIconStorage1Storage").removeClass('fa fa-sort-up fa-lg');
        $("#SortIconStorage1Description").removeClass('fa fa-sort-down');
        $("#SortIconStorage1Description").removeClass('fa fa-sort-up fa-lg');
        if (sortby == 'Storage1Storage') {
            $("#SortIconStorage1Storage").addClass('fa fa-sort-up fa-lg');
        }
        if (sortby == 'Storage1Description') {
            $("#SortIconStorage1Description").addClass('fa fa-sort-up fa-lg');
        }
        $('#hndStorageOrderBy').val('DESC');
        fillStorageListApplyNow("ASC", sortby);
    }
    else if (orderby == "DESC") {
        $("#SortIconStorage1Storage").removeClass('fa fa-sort-down');
        $("#SortIconStorage1Storage").removeClass('fa fa-sort-up fa-lg');
        $("#SortIconStorage1Description").removeClass('fa fa-sort-down');
        $("#SortIconStorage1Description").removeClass('fa fa-sort-up fa-lg');
        if (sortby == 'Storage1Storage') {
            $("#SortIconStorage1Storage").addClass('fa fa-sort-down fa-lg');
        }
        if (sortby == 'Storage1Description') {
            $("#SortIconStorage1Description").addClass('fa fa-sort-down fa-lg');
        }
        $('#hndStorageOrderBy').val('ASC');
        fillStorageListApplyNow("DESC", sortby);
    }
};
var editVehicle = function (id) {
    var vehId = id;
    var model = {
        VehicleId: vehId
    };
    $("#divLoader").show();
    $.ajax({
        url: "/Vehicle/GetVehicleInfo",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#popVehicle").modal("show");
            $("#txtVehicleOwnerName").val(response.model.OwnerName);
            $("#ddlVehicleType").val(response.model.VehicleType);
            $("#ddlVehicleyear").val(response.model.Year);
            $("#txtVehicleMake").val(response.model.Make);
            $("#txtVehicleModel").val(response.model.VModel);
            $("#txtVehicleColor").val(response.model.Color);
            $("#txtVehicleLicence").val(response.model.License);
            $("#ddlVState").val(response.model.State);
            $("#txtVehicleTag").val(response.model.Tag);
            //$("#ddlParking").val(response.model.ParkingName);
            $("#txtVehicleNote").val(response.model.Notes);
            $("#VehicleRegistationShow").html(response.model.OriginalVehicleRegistation);
            $("#hndVehicleID").val(response.model.Vehicle_ID);
            $('#ddlParking').empty();
            var dhtml = "<option value='" + response.model.ParkingID + "' selected='selected' data-value='" + response.model.ParkingID + "'>" + response.model.ParkingName + "</option>";
            $('#ddlParking').append(dhtml);

            $("#hndVehicleRegistation").val(response.model.VehicleRegistration);
            $("#hndOriginalVehicleRegistation").val(response.model.OriginalVehicleRegistation);
        }
    });
};
var clearBank1 = function () {
    var year = new Date().getFullYear().toString().substr(-2);
    $("#txtBankName1").val("");
    $("#txtAccountName1").val("");
    $("#txtAccountNumber1").val("");
    $("#txtRoutingNumber1").val("");
    $("#txtNameonCard1").val("");
    $("#txtCardNumber1").val("");
    $("#ddlcardmonth1").val("01");
    $("#ddlcardyear1").val(year);
    $("#txtCcvNumber1").val("");
    $("#chkTermsAndCondition1").iCheck('uncheck');
    $("#hndTransMethod1").val("1");
    $("#chkBank1").addClass("active");
    $("#chkACH1").removeClass("active");
    $("#divCard1").addClass("hidden");
    $("#divBank1").removeClass("hidden");
    $("#lblPaymentDet1").text("Enter Bank Account Details.");
    $("#lblSaveAccountInformation1").text("Save Bank Information");
}
var clearCard1 = function () {
    var year = new Date().getFullYear().toString().substr(-2);
    $("#txtBankName1").val("");
    $("#txtAccountName1").val("");
    $("#txtAccountNumber1").val("");
    $("#txtRoutingNumber1").val("");
    $("#txtNameonCard1").val("");
    $("#txtCardNumber1").val("");
    $("#ddlcardmonth1").val("01");
    $("#ddlcardyear1").val(year);
    $("#txtCcvNumber1").val("");
    $("#chkTermsAndCondition1").iCheck('uncheck');
    $("#hndTransMethod1").val("2");
    $("#chkACH1").addClass("active");
    $("#chkBank1").removeClass("active");
    $("#divCard1").removeClass("hidden");
    $("#divBank1").addClass("hidden");
    $("#lblPaymentDet1").text("Enter Credit Card Details.");
    $("#lblSaveAccountInformation1").text("Save Credit Card Information");
}
var clearBank2 = function () {
    var year = new Date().getFullYear().toString().substr(-2);
    $("#txtBankName2").val("");
    $("#txtAccountName2").val("");
    $("#txtAccountNumber2").val("");
    $("#txtRoutingNumber2").val("");
    $("#txtNameonCard2").val("");
    $("#txtCardNumber2").val("");
    $("#ddlcardmonth2").val("01");
    $("#ddlcardyear2").val(year);
    $("#txtCcvNumber2").val("");
    $("#chkTermsAndCondition2").iCheck('uncheck');
    $("#hndTransMethod2").val("1");
    $("#chkBank2").addClass("active");
    $("#chkACH2").removeClass("active");
    $("#divCard2").addClass("hidden");
    $("#divBank2").removeClass("hidden");
    $("#lblPaymentDet2").text("Enter Bank Account Details.");
    $("#lblSaveAccountInformation2").text("Save Bank Information");
}
var clearCard2 = function () {
    var year = new Date().getFullYear().toString().substr(-2);
    $("#txtBankName2").val("");
    $("#txtAccountName2").val("");
    $("#txtAccountNumber2").val("");
    $("#txtRoutingNumber2").val("");
    $("#txtNameonCard2").val("");
    $("#txtCardNumber2").val("");
    $("#ddlcardmonth2").val("01");
    $("#ddlcardyear2").val(year);
    $("#txtCcvNumber2").val("");
    $("#chkTermsAndCondition2").iCheck('uncheck');
    $("#hndTransMethod2").val("2");
    $("#chkACH2").addClass("active");
    $("#chkBank2").removeClass("active");
    $("#divCard2").removeClass("hidden");
    $("#divBank2").addClass("hidden");
    $("#lblPaymentDet2").text("Enter Credit Card Details.");
    $("#lblSaveAccountInformation2").text("Save Credit Card Information");
}
function savePrimaryApplicantPayment() {
    $("#divLoader").show();
    var checkEmail = 0;
    var msg = "";
    var fname = $("#txtApplicantFirstName").val();
    var mname = $("#txtApplicantMiddleName").val();
    var lname = $("#txtApplicantLastName").val();
    var aphone = unformatText($("#txtApplicantPhone").val());
    var aemail = $("#txtApplicantEmail").val();
    var agender = $("#ddlApplicantGender").val();
    var type = $("#ddlApplicantType").text();
    var aotherGender = $("#txtApplicantOtherGender").val();
    var applicantSSNNumber = $("#txtApplicantSSNNumber").attr("data-value");
    var applicantIDNumber = "";
    var applicantIDType = 0;
    var applicantStateDoc = 0;

    var addressLine1 = $("#txtAddressLine1").val();
    var addressLine2 = $("#txtAddressLine2").val();
    var applicantState = $("#ddlApplicantState").val();
    var applicantCountry = $("#txtApplicantCountry").val();
    var applicantCity = $("#txtApplicantCity").val();
    var applicantApplicantZip2 = $("#txtApplicantZip2").val();
    var ssnCheck = $("#txtApplicantSSNNumber").val().replace(/-|\s/g, "");

    if (ssnCheck) {
        if (ssnCheck.length < 9) {
            msg += "SSN# must be 9 digit</br>";
        }
    } else if (!applicantSSNNumber) {
        msg += "Please Fill Valid SSN</br>";
    }

    if (type == "Co-Applicant") {
        checkEmail = 1;
        var dob = $("#txtADateOfBirth").val();
    } else if (type == "Minor") {
        dob = $("#txtMDateOfBirth").val();
    }
    else if (type == "Guarantor") {
        dob = $("#txtGDateOfBirth").val();
    }
    else {
        checkEmail = 1;
        dob = $("#txtHDateOfBirth").val();
    }
    var relationship = $("#ddlARelationship").val();

    if (!fname) {
        msg += "Enter Applicant First Name</br>";
    }
    if (!lname) {
        msg += "Enter Applicant Last Name</br>";
    }
    if (relationship == '0') {
        msg += "Select Relationship</br>";
    }
    if (aphone) {
        if (aphone.length < 10) {
            msg += "Please enter 10 digit phone number </br>";
        }
    }
    if (checkEmail == 1) {
        if (!aemail) {
            msg += "Enter Email</br>";
        }
        else {
            if (!validateEmail(aemail)) {
                msg += "Please Fill Valid Email </br>";
            }
        }
    }

    if (!dob) {
        msg += "Enter Applicant DateOfBirth</br>";
    }

    if (!agender || agender == "0") {
        msg += "Please Select The Gender </br>";
    }
    else if (agender == "3") {
        if (!aotherGender) {
            msg += "Please Fill The Other Gender </br>";
        }
    } else if (agender == "2") {
        if (!mname) {
            msg += "Please Fill The Middle Name </br>";
        }
    }
    if (type == 'Primary Applicant') {
        $('#txtDateOfBirth').val(dob);
        $('#ddlGender').val(agender);
        if (agender == '3') {
            $('#txtOtherGender').val(aotherGender);
        }
        else {
            $('#txtOtherGender').val('');
        }
        if (!addressLine1) {
            msg += "Enter Address Line 1</br>";
        } if (applicantState <= 0) {
            msg += "Enter State </br>";
        } if (applicantCountry <= 0) {
            msg += "Select Country</br>";
        } if (applicantCity <= 0) {
            msg += "Enter the City</br>";
        } if (applicantApplicantZip2 <= 0) {
            msg += "Select Zip</br>";
        }
    }

    if ($("#hndTransMethod1").val() == "0") {
        msg += "Please Select Payment Method</br>";
    }

    if ($("#chkTermsAndCondition1").is(':unchecked')) {
        msg += "Please accept Terms & Condition </br>";
    }

    if ($("#hndTransMethod1").val() == "2") {
        $("#divLoader").show();
        var paymentMethod = 2;
        var propertyId = $("#hndUID").val();
        var nameonCard = $("#txtNameonCard1").val();
        var cardNumber = $("#txtCardNumber1").val();
        var cardMonth = $("#ddlcardmonth1").val();
        var cardYear = $("#ddlcardyear1").val();
        var ccvNumber = $("#txtCCVNumber1").val();
        var prospectID = $("#hdnOPId").val();
        var amounttoPay = unformatText($("#sppayFees").text());
        var description = $("#lblpopcctitle").text();

        var routingNumber = $("#txtRoutingNumber1").val();
        var bankName = $("#txtBankName1").val();

        if (!nameonCard) {
            msg += "Please Enter Name on Card</br>";
        }
        if (cardNumber == "" || cardNumber.length != 16) {
            msg += "Please enter your 16 digit Card Number</br>";
        }
        if (cardMonth == "0") {
            msg += "Please enter Card Month</br>";
        }
        if (cardYear == "0") {
            msg += "Please enter Card Year</br>";
        }

        var GivenDate = '20' + cardYear + '-' + cardMonth + '-' + new Date().getDate();
        var CurrentDate = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

        GivenDate = new Date(GivenDate);
        CurrentDate = new Date(CurrentDate);

        if (GivenDate <= CurrentDate) {
            msg += "Your Credit Card Expired..</br>";
        }
    } else {
        var paymentMethod = 1;
        var nameonCard = $("#txtAccountName1").val();
        var cardNumber = $("#txtAccountNumber1").val();
        var cardMonth = 0;
        var cardYear = 0;
        var ccvNumber = 0;
        var routingNumber = $("#txtRoutingNumber1").val();
        var bankName = $("#txtBankName1").val();
        var amounttoPay = unformatText($("#sppayFees").text());
        var description = $("#lblpopcctitle").text();
        var prospectID = $("#hdnOPId").val();
        var propertyId = $("#hndUID").val();
        if (nameonCard == "") {
            msg += "Please Enter Account Name</br>";
        }
        if (cardNumber == "") {
            msg += "Please Enter Account Number</br>";
        }
    }
    if (msg != "") {
        $("#divLoader").hide();
        $.alert({
            title: "",
            content: msg,
            type: 'red'
        });
        return;
    }

    //var model = {
    //    PID: propertyId,
    //    Name_On_Card: nameonCard,
    //    CardNumber: cardNumber,
    //    CardMonth: cardMonth,
    //    CardYear: cardYear,
    //    CCVNumber: ccvNumber,
    //    Charge_Amount: amounttoPay,
    //    Charge_Type: "4",
    //    ProspectID: prospectID,
    //    Description: description,
    //    GL_Trans_Description: description,
    //    RoutingNumber: routingNumber,
    //    BankName: bankName,
    //    PaymentMethod: paymentMethod,
    //    AID: $("#hndApplicantID").val(),
    //    FromAcc: $("#hndFromAcc").val(),
    //    IsSaveAcc: $("#chkSaveAcc0").is(":checked") ? "1" : "0",
    //};

    $.alert({
        title: "",
        content: "You have chosen to pay $" + amounttoPay + " plus a $" + parseFloat(getProcessingFees()).toFixed(2) + " processing fee, your total will be $" + parseFloat(parseFloat(amounttoPay) + parseFloat(getProcessingFees())).toFixed(2) + ". Do you want to Pay Now?",
        type: 'blue',
        buttons: {
            yes: {
                text: 'Yes',
                action: function (yes) {
                    saveupdatePrimaryApplicant(2);

                    //$.ajax({
                    //    url: "/ApplyNow/saveCoAppPayment/",
                    //    type: "post",
                    //    contentType: "application/json utf-8",
                    //    data: JSON.stringify(model),
                    //    dataType: "JSON",
                    //    success: function (response) {
                    //        if (response.Msg != "") {
                    //            if (response.Msg == "1") {
                    //                $("#ResponseMsg1").html("Payment successfull");

                    //                //window.location = "/ApplyNow/Index/" + $("#hdnUserId").val();
                    //            } else {
                    //                $.alert({
                    //                    title: "",
                    //                    content: "Payment failed",
                    //                    type: 'red'
                    //                });
                    //            }
                    //        }
                    //    }
                    //});
                }
            },
            no: {
                text: 'No',
                action: function (no) {
                    $("#divLoader").hide();
                }
            }
        }
    });
}

function saveCoAppPaymentPopup() {
    if ($("#chkTermsAndCondition2").is(':unchecked')) {
        $("#divLoader").hide();
        $.alert({
            title: "",
            content: "Please accept Terms & Condition </br>",
            type: 'red'
        });
        return;
    }
    $("#divLoader").show();
    var msg = "";
    if ($("#hndTransMethod2").val() == "0") {
        $("#divLoader").hide();
        $.alert({
            title: "",
            content: "Please Select Payment Method</br>",
            type: 'red'
        });
        return;
    }

    var paymentMethod = 2;
    var propertyId =0;
    var nameonCard = "";
    var cardNumber = "";
    var cardMonth = 0;
    var cardYear = 0;
    var ccvNumber = "";
    var prospectID = 0;
    var amounttoPay = 0;
    var description ="";

        if ($("#hndTransMethod2").val() == "2") {
            paymentMethod = 2;
            propertyId = $("#hndUID").val();
            nameonCard = $("#txtNameonCard2").val();
            cardNumber = $("#txtCardNumber2").val();
            cardMonth = $("#ddlcardmonth2").val();
            cardYear = $("#ddlcardyear2").val();
            ccvNumber = $("#txtCCVNumber2").val();
            prospectID = $("#hdnOPId").val();
            amounttoPay = unformatText( $("#sppayFees2").text());
            description = $("#lblpopcctitle").text();

            routingNumber = $("#txtRoutingNumber2").val();
            bankName = $("#txtBankName1").val();

            if (!nameonCard) {
                msg += "Please Enter Name on Card</br>";
            }
            if (cardNumber == "" || cardNumber.length != 16) {
                msg += "Please enter your 16 digit Card Number</br>";
            }
            if (cardMonth == "0") {
                msg += "Please enter Card Month</br>";
            }
            if (cardYear == "0") {
                msg += "Please enter Card Year</br>";
            }

            var GivenDate = '20' + cardYear + '-' + cardMonth + '-' + new Date().getDate();
            var CurrentDate = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

            GivenDate = new Date(GivenDate);
            CurrentDate = new Date(CurrentDate);

            if (GivenDate <= CurrentDate) {
                msg += "Your Credit Card Expired..</br>";
            }

            if (msg != "") {
                $("#divLoader").hide();
                $.alert({
                    title: "",
                    content: msg,
                    type: 'red'
                });
                return;
            }
        } else {
            paymentMethod = 1;
            nameonCard = $("#txtAccountName2").val();
            cardNumber = $("#txtAccountNumber2").val();
            cardMonth = 0;
             cardYear = 0;
            ccvNumber = 0;
            routingNumber = $("#txtRoutingNumber2").val();
            bankName = $("#txtBankName2").val();
            amounttoPay = unformatText( $("#sppayFees2").text());
        description = $("#lblpopcctitle").text();
         prospectID = $("#hdnOPId").val();
        propertyId = $("#hndUID").val();
        if (nameonCard == "") {
            msg += "Please Enter Account Name</br>";
        }
        if (cardNumber == "") {
            msg += "Please Enter Account Number</br>";
        }

        if (msg != "") {
            $("#divLoader").hide();
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
    }
    var model = {
        PID: propertyId,
        Name_On_Card: nameonCard,
        CardNumber: cardNumber,
        CardMonth: cardMonth,
        CardYear: cardYear,
        CCVNumber: ccvNumber,
        Charge_Amount: amounttoPay,
        Charge_Type: "4",
        ProspectID: prospectID,
        Description: description,
        GL_Trans_Description: description,
        RoutingNumber: routingNumber,
        BankName: bankName,
        PaymentMethod: paymentMethod,
        AID: $("#hndApplicantID").val(),
        FromAcc: $("#hndFromAcc").val(),
        IsSaveAcc: $("#chkSaveAcc").is(":checked") ? "1" : "0",
    };

    $.alert({
        title: "",
        content: "You have chosen to pay $" + amounttoPay + " plus a $" + parseFloat(getProcessingFees()).toFixed(2) + " processing fee, your total will be $" + parseFloat(parseFloat(amounttoPay) + parseFloat(getProcessingFees())).toFixed(2) + ". Do you want to Pay Now?",
        type: 'blue',
        buttons: {
            yes: {
                text: 'Yes',
                action: function (yes) {
                    $.ajax({
                        url: "/ApplyNow/SaveNewPayment/",
                        type: "post",
                        contentType: "application/json utf-8",
                        data: JSON.stringify(model),
                        dataType: "JSON",
                        success: function (response) {
                            if (response.Msg != "") {
                                if (response.Msg == "1") {
                                    $("#ResponseMsg2").html("Payment successfull");
                                    if (parseInt($("#hndFromAcc").val()) == 4) {
                                        $("#divAppWarning").addClass("hidden");
                                        $("#btnnextAppinfo").removeClass("hidden");
                                        $("#hndCreditPaid").val(1);
                                    }
                                    getApplicantListsPrimary();
                                    $("#popCCPay").modal("hide");
                                } else {
                                    $("#ResponseMsg2").html("Payment failed");
                                }
                            }
                        }
                    });
                }
            },
            no: {
                text: 'No',
                action: function (no) {
                    $("#divLoader").hide();
                }
            }
        }
    });
}

var goToSummaryPageApp = function () {
    goToStep(15, 15, 0);
};

//new code
var btnApplyNowLeaseCurrent = function () {
    //alert('hi');
    $("#divLoader").show();
    //alert($("#hndpriceTableUID").val());
    //alert($("#hndpriceTableLeaseTermId1").val());
    $("#hndLeaseTermID").val($("#hndpriceTableLeaseTermId1").val());
    var model = { UID: $("#hndpriceTableUID").val(), LeaseTermID: $("#hndLeaseTermID").val() };
    $.ajax({
        url: "/Property/GetPropertyUnitDetailsByPriceTable",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {

            $("#hndShowPropertyDetails").val(1);
            $("#popModelCompare").modal("hide");
            $("#popUnitDet").addClass("hidden");
            $("#popFloorCoordinate").addClass("hidden");
            $("#lblUnitNo").text("#" + response.model.UnitNo);
            $("#lblUnitTitle").text("#" + response.model.UnitNo);
            $("#lblUnitTitle2").text("#" + response.model.UnitNo);
            $("#lblFNLPreparedFor").text("#" + response.model.UnitNo);
            $("#parkUnit").text("#" + response.model.UnitNo);
            $("#storUnit").text("#" + response.model.UnitNo);
            $("#txtAvailableDate").val(response.model.AvailableDateText);

            $("#unitdiv_" + $("#hndUID").val()).removeClass("select-unit");
            $("#unitdiv_" + $("#hndpriceTableUID").val()).addClass("select-unit");
            $("#hndUID").val($("#hndpriceTableUID").val());

            fillUnitParkingList();
            if ($("#unitdiv_" + $("#hndpriceTableUID").val()).length) {
                $("#unitdiv_" + $("#hndpriceTableUID").val())[0].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }

            $("#lblRent").text(formatMoney(response.model.Current_Rent));
            $("#lblArea").text(response.model.Area);
            $("#lblBed").text(response.model.Bedroom);
            $("#lblBath").text(response.model.Bathroom);
            $("#lblHall").text(response.model.Hall);
            $("#lblDeposit").text(formatMoney(response.model.Deposit));
            $("#lblLease").text(response.model.Leased);
            $("#lblLease2").text(response.model.Leased);
            $("#lblRent22").text("$" + response.model.Current_Rent);
            $("#lblArea22").text(response.model.Area);
            $("#lblBed22").text(response.model.Bedroom);
            $("#lblUnitModel").text("Model: #" + response.model.Building);
            $("#lblBath22").text(response.model.Bathroom);

            $("#lblOccupancy22").text((parseInt(response.model.Bedroom) * 2).toString());
            $("#lblOccupancy").text((parseInt(response.model.Bedroom) * 2).toString());

            $("#lblDeposit22").text("$" + response.model.Deposit);
            $("#imgFloorPlan").attr("src", "/content/assets/img/plan/" + response.model.Building + ".jpg");
            $("#imgFloorPlan1").attr("src", "/content/assets/img/plan/" + response.model.Building + ".jpg");
            $("#imgFloorPlan2").attr("src", "/content/assets/img/plan/" + response.model.Building + "Det.jpg");
            $("#lblUnitNo1").text("Selected : Floor" + response.model.FloorNo + "- Unit " + response.model.UnitNo + "  ($" + response.model.Current_Rent + ")");
            $("#hndUID").val($("#hndpriceTableUID").val());

            $("#txtRooms").val(response.model.Rooms);
            $("#txtBedroom").val(response.model.Bedroom);
            $("#txtBathroom").val(response.model.Bathroom);
            $("#txtHall").val(response.model.Hall);

            $("#txtPetDetails").val(response.model.PetDetails);
            $("#ddlFloorNo").val(response.model.FloorNo);
            $("#txtArea").val(response.model.Area);

            $("#txtCarpet_Color").val(response.model.Carpet_Color);
            $("#txtWall_Paint_Color").val(response.model.Wall_Paint_Color);

            $("#txtOccupancyDate").val(response.model.OccupancyDateText);
            //$("#chkPendingMoveIn").is(":checked") ? "1" : "0";
            $("#txtVacancyLoss_Date").val(response.model.VacancyLoss_DateText);
            $("#txtIntendedMoveIn_Date").val(response.model.IntendedMoveIn_Date);
            $("#txtIntendMoveOutDate").val(response.model.IntendMoveOutDate);
            $("#txtActualMoveInDate").val(response.model.ActualMoveInDateText);

            $("#lbldeposit1").text(formatMoney(parseFloat(response.model.Deposit).toFixed(2)));
            $("#lbdepo6").text(parseFloat(response.model.Deposit).toFixed(2));

            $("#lblFMRent").text(formatMoney(parseFloat(response.model.Current_Rent).toFixed(2)));
            totalAmt = (parseFloat(response.model.Current_Rent) + parseFloat(unformatText($("#lblAdditionalParking").text())) + parseFloat(unformatText($("#lblStorageUnit").text())) + parseFloat(unformatText($("#lblTrashAmt").text())) + parseFloat($("#lblPestAmt").text()) + parseFloat($("#lblConvergentAmt").text()) + parseFloat(unformatText($("#lblPetFee").text()))).toFixed(2);
            $("#lbltotalAmount").text(formatMoney(totalAmt));

            //Amit's Work for final Quotation form 15-10
            $("#lblFNLUnit").text("#" + response.model.UnitNo);
            $("#lblFNLModel").text(response.model.Building);
            $("#lblFNLModel1").text(response.model.Building);
            $("#lblFNLTerm").text(response.model.Leased);
            $("#lblMonthly_MonthlyCharge").text("$" + formatMoney(response.model.Current_Rent.toFixed(2)));
            $("#lblProrated_MonthlyCharge").text("$" + formatMoney(parseFloat(parseFloat(response.model.Current_Rent) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
            $("#lblMonthly_MonthlyCharge1").text(formatMoney(response.model.Current_Rent.toFixed(2)));
            $("#lblProrated_MonthlyCharge1").text(formatMoney(parseFloat(parseFloat(response.model.Current_Rent) / parseFloat(numberOfDays) * remainingday).toFixed(2)));

            $("#lblRFPMonthlyCharges").text(formatMoney(response.model.Current_Rent.toFixed(2)));

            $("#fdepo").text("$" + (response.model.Deposit).toFixed(2));
            $("#lbdepo6").text((response.model.Deposit).toFixed(2));

            $("#lblMonthly_TotalRent").text("$" + formatMoney(totalAmt));
            $("#lblProrated_TotalRent").text("$" + formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
            $("#lblProratedRent").text(formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
            $("#lblProratedRent6").text(formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));

            var rfpMonthlyCharge = unformatText($("#lblRFPMonthlyCharges").text());
            var rfpParkingCharge = $("#lblRFPAdditionalParking").text();
            var rfpStorageCharge = $("#lblRFPStorageUnit").text();
            var rfpPetcharge = $("#lblRFPPetRent").text();

            var rfpTotalRentCharge = parseFloat(rfpMonthlyCharge, 10) + parseFloat(rfpParkingCharge, 10) + parseFloat(rfpStorageCharge, 10) + parseFloat(rfpPetcharge, 10);
            //alert(calTotalRentChargefpetd
            //$("#lblRFPTotalMonthlyPayment").text((parseFloat($("#lblRFPMonthlyCharges").text())) + (parseFloat($("#lblRFPAdditionalParking").text())) + (parseFloat($("#lblRFPStorageUnit").text())) + (parseFloat($("#lblRFPPetRent").text())));

            $("#ftotal").text(formatMoney((parseFloat(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday), 10) + parseFloat(response.model.Deposit, 10) + parseFloat(unformatText($("#fpetd").text()), 10) + parseFloat(unformatText($("#lblVehicleFees").text()), 10) + + parseFloat($("#lblPetDNAAmt").text(), 10)).toFixed(2)));

            $("#lbtotdueatmov6").text(formatMoney((parseFloat(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday), 10) + parseFloat(response.model.Deposit, 10) + parseFloat(unformatText($("#fpetd").text()), 10) + parseFloat(unformatText($("#lblVehicleFees").text()), 10) + parseFloat($("#lblPetDNAAmt").text(), 10)).toFixed(2)));

            //$("#lblRFPTotalMonthlyPayment").text(formatMoney((parseFloat(unformatText($("#lblRFPMonthlyCharges").text()))) + (parseFloat($("#lblRFPAdditionalParking").text())) + (parseFloat($("#lblRFPStorageUnit").text())) + (parseFloat($("#lblRFPPetRent").text())) + (parseFloat($("#lblRFPTrashRecycling").text())) + (parseFloat($("#lblRFPPestControl").text())) + (parseFloat($("#lblRFPConvergentbillingfee").text()))));
            $("#lblRFPTotalMonthlyPayment").text(formatMoney(parseFloat(unformatText($("#lblRFPMonthlyCharges").text(), 10)) + (parseFloat($("#lblRFPAdditionalParking").text().replace('$', ''))) + (parseFloat($("#lblRFPStorageUnit").text().replace('$', ''))) + (parseFloat($("#lblRFPPetRent").text().replace('$', ''))) + (parseFloat($("#lblRFPTrashRecycling").text().replace('$', ''))) + (parseFloat($("#lblRFPPestControl").text().replace('$', ''))) + (parseFloat($("#lblRFPConvergentbillingfee").text().replace('$', '')))));

            $("#lblProrated_TrashAmt").text("$" + parseFloat(parseFloat($("#lblTrash").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_TrashAmt1").text(parseFloat(parseFloat($("#lblTrash").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_PestAmt").text("$" + parseFloat(parseFloat($("#lblPestControl").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_PestAmt1").text(parseFloat(parseFloat($("#lblPestControl").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_ConvergentAmt").text("$" + parseFloat(parseFloat($("#lblConvergentAmt").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_ConvergentAmt1").text(parseFloat(parseFloat($("#lblConvergentAmt").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));

            $("#lblRent2").text((parseFloat(response.model.Current_Rent)).toFixed(2));
            $("#txtModal").text(response.model.Building);
            $("#lblArea1").text(response.model.Area);
            $("#lblBed1").text(response.model.Bedroom);
            $("#lblBath1").text(response.model.Bathroom);
            $("#lblHall1").text(response.model.Hall);
            $("#lblDeposit1").text(formatMoney(response.model.Deposit));
            $("#lblLease3").text(response.model.Leased);
            $("#lblLease4").text(response.model.Leased);
            $("#imgFloorPlanSumm").attr("src", "/content/assets/img/plan/" + response.model.Building + ".jpg");
            $("#lbldeposit2").text(parseFloat(response.model.Deposit).toFixed(2));
            $("#lblFMRent1").text(parseFloat(response.model.Current_Rent).toFixed(2));
            $("#lblUnitTitle3").text("#" + response.model.UnitNo);
            //$("#lblLeaseStartDate").text(response.model.AvailableDateText);
            //$("#lblLeaseStartDate").text($("#hndsummaryDesireMoveIn").val());
            $("#lblSubtotalsumm").text((parseFloat(response.model.Current_Rent) + parseFloat(unformatText($("#lblTrashAmt").text())) + parseFloat(unformatText($("#lblPestAmt").text())) + parseFloat(unformatText($("#lblConvergentAmt").text()))).toFixed(2));
            $("#lbltotalAmountSumm").text((parseFloat(response.model.Current_Rent) + parseFloat(unformatText($("#lblTrashAmt").text())) + parseFloat(unformatText($("#lblPestAmt").text())) + parseFloat(unformatText($("#lblConvergentAmt").text()))).toFixed(2));
            localStorage.setItem("floorfromplan", response.model.FloorNo);
            $("#hndFloorNo").val(response.model.FloorNo);
            $("#hndBedRoom").val(response.model.Bedroom);
            $("#hndBuilding").val(response.model.Building);

            $("#lblMonthly_TotalRentSp").text("$" + (formatMoney(totalAmt)));
            $("#lblAp32").text("#" + response.model.UnitNo);
            $("#lblArea32").text("Sq.Ft. " + response.model.Area);
            $("#lblBed32").text(response.model.Bedroom);
            $("#lblUnitModel3").text(response.model.Building);
            $("#lblBath32").text(response.model.Bathroom);
            $("#lblDeposit3").text("$" + (formatMoney(response.model.Deposit)));

            showFloorPlanApplicant(response.model.FloorNo, response.model.Bedroom, response.model.Building);

            //new code for price table
            $('#priceTableUnit').text(response.model.UnitNo);
            $('#priceTableBedroom').text(response.model.Bedroom);
            $('#priceTableBathroom').text(response.model.Bathroom);
            $('#priceTableArea').text(response.model.Area);

            $("#divLoader").hide();
            goToStep(3, 3, 0);
        }
    });
};
var btnApplyNowLeaseBest = function () {
    $("#divLoader").show();
    $("#hndLeaseTermID").val($("#hndpriceTableLeaseTermId2").val());
    var model = { UID: $("#hndpriceTableUID").val(), LeaseTermID: $("#hndLeaseTermID").val() };
    $.ajax({
        url: "/Property/GetPropertyUnitDetailsByPriceTable",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {

            $("#hndShowPropertyDetails").val(1);
            $("#popModelCompare").modal("hide");
            $("#popUnitDet").addClass("hidden");
            $("#popFloorCoordinate").addClass("hidden");
            $("#lblUnitNo").text("#" + response.model.UnitNo);
            $("#lblUnitTitle").text("#" + response.model.UnitNo);
            $("#lblUnitTitle2").text("#" + response.model.UnitNo);
            $("#lblFNLPreparedFor").text("#" + response.model.UnitNo);
            $("#parkUnit").text("#" + response.model.UnitNo);
            $("#storUnit").text("#" + response.model.UnitNo);
            $("#txtAvailableDate").val(response.model.AvailableDateText);

            $("#unitdiv_" + $("#hndUID").val()).removeClass("select-unit");
            $("#unitdiv_" + $("#hndpriceTableUID").val()).addClass("select-unit");
            $("#hndUID").val($("#hndpriceTableUID").val());

            fillUnitParkingList();
            if ($("#unitdiv_" + $("#hndpriceTableUID").val()).length) {
                $("#unitdiv_" + $("#hndpriceTableUID").val())[0].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });

            }
            $("#lblRent").text(formatMoney(response.model.Current_Rent));
            $("#lblArea").text(response.model.Area);
            $("#lblBed").text(response.model.Bedroom);
            $("#lblBath").text(response.model.Bathroom);
            $("#lblHall").text(response.model.Hall);
            $("#lblDeposit").text(formatMoney(response.model.Deposit));
            $("#lblLease").text(response.model.Leased);
            $("#lblLease2").text(response.model.Leased);
            $("#lblRent22").text("$" + response.model.Current_Rent);
            $("#lblArea22").text(response.model.Area);
            $("#lblBed22").text(response.model.Bedroom);
            $("#lblUnitModel").text("Model: #" + response.model.Building);
            $("#lblBath22").text(response.model.Bathroom);

            $("#lblOccupancy22").text((parseInt(response.model.Bedroom) * 2).toString());
            $("#lblOccupancy").text((parseInt(response.model.Bedroom) * 2).toString());

            $("#lblDeposit22").text("$" + response.model.Deposit);
            $("#imgFloorPlan").attr("src", "/content/assets/img/plan/" + response.model.Building + ".jpg");
            $("#imgFloorPlan1").attr("src", "/content/assets/img/plan/" + response.model.Building + ".jpg");
            $("#imgFloorPlan2").attr("src", "/content/assets/img/plan/" + response.model.Building + "Det.jpg");
            $("#lblUnitNo1").text("Selected : Floor" + response.model.FloorNo + "- Unit " + response.model.UnitNo + "  ($" + response.model.Current_Rent + ")");
            $("#hndUID").val($("#hndpriceTableUID").val());

            $("#txtRooms").val(response.model.Rooms);
            $("#txtBedroom").val(response.model.Bedroom);
            $("#txtBathroom").val(response.model.Bathroom);
            $("#txtHall").val(response.model.Hall);

            $("#txtPetDetails").val(response.model.PetDetails);
            $("#ddlFloorNo").val(response.model.FloorNo);
            $("#txtArea").val(response.model.Area);

            $("#txtCarpet_Color").val(response.model.Carpet_Color);
            $("#txtWall_Paint_Color").val(response.model.Wall_Paint_Color);

            $("#txtOccupancyDate").val(response.model.OccupancyDateText);
            //$("#chkPendingMoveIn").is(":checked") ? "1" : "0";
            $("#txtVacancyLoss_Date").val(response.model.VacancyLoss_DateText);
            $("#txtIntendedMoveIn_Date").val(response.model.IntendedMoveIn_Date);
            $("#txtIntendMoveOutDate").val(response.model.IntendMoveOutDate);
            $("#txtActualMoveInDate").val(response.model.ActualMoveInDateText);

            $("#lbldeposit1").text(formatMoney(parseFloat(response.model.Deposit).toFixed(2)));
            $("#lbdepo6").text(parseFloat(response.model.Deposit).toFixed(2));

            $("#lblFMRent").text(formatMoney(parseFloat(response.model.Current_Rent).toFixed(2)));
            totalAmt = (parseFloat(response.model.Current_Rent) + parseFloat(unformatText($("#lblAdditionalParking").text())) + parseFloat(unformatText($("#lblStorageUnit").text())) + parseFloat(unformatText($("#lblTrashAmt").text())) + parseFloat($("#lblPestAmt").text()) + parseFloat($("#lblConvergentAmt").text()) + parseFloat(unformatText($("#lblPetFee").text()))).toFixed(2);
            $("#lbltotalAmount").text(formatMoney(totalAmt));

            //Amit's Work for final Quotation form 15-10
            $("#lblFNLUnit").text("#" + response.model.UnitNo);
            $("#lblFNLModel").text(response.model.Building);
            $("#lblFNLModel1").text(response.model.Building);
            $("#lblFNLTerm").text(response.model.Leased);
            $("#lblMonthly_MonthlyCharge").text("$" + formatMoney(response.model.Current_Rent.toFixed(2)));
            $("#lblProrated_MonthlyCharge").text("$" + formatMoney(parseFloat(parseFloat(response.model.Current_Rent) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
            $("#lblMonthly_MonthlyCharge1").text(formatMoney(response.model.Current_Rent.toFixed(2)));
            $("#lblProrated_MonthlyCharge1").text(formatMoney(parseFloat(parseFloat(response.model.Current_Rent) / parseFloat(numberOfDays) * remainingday).toFixed(2)));

            $("#lblRFPMonthlyCharges").text(formatMoney(response.model.Current_Rent.toFixed(2)));

            $("#fdepo").text("$" + (response.model.Deposit).toFixed(2));
            $("#lbdepo6").text((response.model.Deposit).toFixed(2));

            $("#lblMonthly_TotalRent").text("$" + formatMoney(totalAmt));
            $("#lblProrated_TotalRent").text("$" + formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
            $("#lblProratedRent").text(formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
            $("#lblProratedRent6").text(formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));

            var rfpMonthlyCharge = unformatText($("#lblRFPMonthlyCharges").text());
            var rfpParkingCharge = $("#lblRFPAdditionalParking").text();
            var rfpStorageCharge = $("#lblRFPStorageUnit").text();
            var rfpPetcharge = $("#lblRFPPetRent").text();

            var rfpTotalRentCharge = parseFloat(rfpMonthlyCharge, 10) + parseFloat(rfpParkingCharge, 10) + parseFloat(rfpStorageCharge, 10) + parseFloat(rfpPetcharge, 10);
            //alert(calTotalRentChargefpetd
            //$("#lblRFPTotalMonthlyPayment").text((parseFloat($("#lblRFPMonthlyCharges").text())) + (parseFloat($("#lblRFPAdditionalParking").text())) + (parseFloat($("#lblRFPStorageUnit").text())) + (parseFloat($("#lblRFPPetRent").text())));

            $("#ftotal").text(formatMoney((parseFloat(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday), 10) + parseFloat(response.model.Deposit, 10) + parseFloat(unformatText($("#fpetd").text()), 10) + parseFloat(unformatText($("#lblVehicleFees").text()), 10) + + parseFloat($("#lblPetDNAAmt").text(), 10)).toFixed(2)));

            $("#lbtotdueatmov6").text(formatMoney((parseFloat(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday), 10) + parseFloat(response.model.Deposit, 10) + parseFloat(unformatText($("#fpetd").text()), 10) + parseFloat(unformatText($("#lblVehicleFees").text()), 10) + parseFloat($("#lblPetDNAAmt").text(), 10)).toFixed(2)));

            // $("#lblRFPTotalMonthlyPayment").text(formatMoney((parseFloat(unformatText($("#lblRFPMonthlyCharges").text()))) + (parseFloat($("#lblRFPAdditionalParking").text())) + (parseFloat($("#lblRFPStorageUnit").text())) + (parseFloat($("#lblRFPPetRent").text())) + (parseFloat($("#lblRFPTrashRecycling").text())) + (parseFloat($("#lblRFPPestControl").text())) + (parseFloat($("#lblRFPConvergentbillingfee").text()))));
            $("#lblRFPTotalMonthlyPayment").text(formatMoney(parseFloat(unformatText($("#lblRFPMonthlyCharges").text(), 10)) + (parseFloat($("#lblRFPAdditionalParking").text().replace('$', ''))) + (parseFloat($("#lblRFPStorageUnit").text().replace('$', ''))) + (parseFloat($("#lblRFPPetRent").text().replace('$', ''))) + (parseFloat($("#lblRFPTrashRecycling").text().replace('$', ''))) + (parseFloat($("#lblRFPPestControl").text().replace('$', ''))) + (parseFloat($("#lblRFPConvergentbillingfee").text().replace('$', '')))));

            $("#lblProrated_TrashAmt").text("$" + parseFloat(parseFloat($("#lblTrash").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_TrashAmt1").text(parseFloat(parseFloat($("#lblTrash").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_PestAmt").text("$" + parseFloat(parseFloat($("#lblPestControl").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_PestAmt1").text(parseFloat(parseFloat($("#lblPestControl").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_ConvergentAmt").text("$" + parseFloat(parseFloat($("#lblConvergentAmt").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_ConvergentAmt1").text(parseFloat(parseFloat($("#lblConvergentAmt").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));

            $("#lblRent2").text((parseFloat(response.model.Current_Rent)).toFixed(2));
            $("#txtModal").text(response.model.Building);
            $("#lblArea1").text(response.model.Area);
            $("#lblBed1").text(response.model.Bedroom);
            $("#lblBath1").text(response.model.Bathroom);
            $("#lblHall1").text(response.model.Hall);
            $("#lblDeposit1").text(formatMoney(response.model.Deposit));
            $("#lblLease3").text(response.model.Leased);
            $("#lblLease4").text(response.model.Leased);
            $("#imgFloorPlanSumm").attr("src", "/content/assets/img/plan/" + response.model.Building + ".jpg");
            $("#lbldeposit2").text(parseFloat(response.model.Deposit).toFixed(2));
            $("#lblFMRent1").text(parseFloat(response.model.Current_Rent).toFixed(2));
            $("#lblUnitTitle3").text("#" + response.model.UnitNo);
            //$("#lblLeaseStartDate").text(response.model.AvailableDateText);
            //$("#lblLeaseStartDate").text($("#hndsummaryDesireMoveIn").val());
            $("#lblSubtotalsumm").text((parseFloat(response.model.Current_Rent) + parseFloat(unformatText($("#lblTrashAmt").text())) + parseFloat(unformatText($("#lblPestAmt").text())) + parseFloat(unformatText($("#lblConvergentAmt").text()))).toFixed(2));
            $("#lbltotalAmountSumm").text((parseFloat(response.model.Current_Rent) + parseFloat(unformatText($("#lblTrashAmt").text())) + parseFloat(unformatText($("#lblPestAmt").text())) + parseFloat(unformatText($("#lblConvergentAmt").text()))).toFixed(2));
            localStorage.setItem("floorfromplan", response.model.FloorNo);
            $("#hndFloorNo").val(response.model.FloorNo);
            $("#hndBedRoom").val(response.model.Bedroom);
            $("#hndBuilding").val(response.model.Building);

            $("#lblMonthly_TotalRentSp").text("$" + (formatMoney(totalAmt)));
            $("#lblAp32").text("#" + response.model.UnitNo);
            $("#lblArea32").text("Sq.Ft. " + response.model.Area);
            $("#lblBed32").text(response.model.Bedroom);
            $("#lblUnitModel3").text(response.model.Building);
            $("#lblBath32").text(response.model.Bathroom);
            $("#lblDeposit3").text("$" + (formatMoney(response.model.Deposit)));

            showFloorPlanApplicant(response.model.FloorNo, response.model.Bedroom, response.model.Building);

            //new code for price table
            $('#priceTableUnit').text(response.model.UnitNo);
            $('#priceTableBedroom').text(response.model.Bedroom);
            $('#priceTableBathroom').text(response.model.Bathroom);
            $('#priceTableArea').text(response.model.Area);


            $("#divLoader").hide();
            goToStep(3, 3, 0);
        }
    });
};
var btnApplyNowLeaseGreat = function () {
    $('#hndUID').val($("#hndpriceTableUID").val());
    $("#divLoader").show();
    $("#hndLeaseTermID").val($("#hndpriceTableLeaseTermId3").val());
    var model = { UID: $("#hndpriceTableUID").val(), LeaseTermID: $("#hndLeaseTermID").val() };
    $.ajax({
        url: "/Property/GetPropertyUnitDetailsByPriceTable",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {

            $("#hndShowPropertyDetails").val(1);
            $("#popModelCompare").modal("hide");
            $("#popUnitDet").addClass("hidden");
            $("#popFloorCoordinate").addClass("hidden");
            $("#lblUnitNo").text("#" + response.model.UnitNo);
            $("#lblUnitTitle").text("#" + response.model.UnitNo);
            $("#lblUnitTitle2").text("#" + response.model.UnitNo);
            $("#lblFNLPreparedFor").text("#" + response.model.UnitNo);
            $("#parkUnit").text("#" + response.model.UnitNo);
            $("#storUnit").text("#" + response.model.UnitNo);
            $("#txtAvailableDate").val(response.model.AvailableDateText);

            $("#unitdiv_" + $("#hndUID").val()).removeClass("select-unit");
            $("#unitdiv_" + $("#hndpriceTableUID").val()).addClass("select-unit");
            $("#hndUID").val($("#hndpriceTableUID").val());

            fillUnitParkingList();
            if ($("#unitdiv_" + $("#hndpriceTableUID").val()).length) {
                $("#unitdiv_" + $("#hndpriceTableUID").val())[0].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });

            }

            $("#lblRent").text(formatMoney(response.model.Current_Rent));
            $("#lblArea").text(response.model.Area);
            $("#lblBed").text(response.model.Bedroom);
            $("#lblBath").text(response.model.Bathroom);
            $("#lblHall").text(response.model.Hall);
            $("#lblDeposit").text(formatMoney(response.model.Deposit));
            $("#lblLease").text(response.model.Leased);
            $("#lblLease2").text(response.model.Leased);
            $("#lblRent22").text("$" + response.model.Current_Rent);
            $("#lblArea22").text(response.model.Area);
            $("#lblBed22").text(response.model.Bedroom);
            $("#lblUnitModel").text("Model: #" + response.model.Building);
            $("#lblBath22").text(response.model.Bathroom);

            $("#lblOccupancy22").text((parseInt(response.model.Bedroom) * 2).toString());
            $("#lblOccupancy").text((parseInt(response.model.Bedroom) * 2).toString());

            $("#lblDeposit22").text("$" + response.model.Deposit);
            $("#imgFloorPlan").attr("src", "/content/assets/img/plan/" + response.model.Building + ".jpg");
            $("#imgFloorPlan1").attr("src", "/content/assets/img/plan/" + response.model.Building + ".jpg");
            $("#imgFloorPlan2").attr("src", "/content/assets/img/plan/" + response.model.Building + "Det.jpg");
            $("#lblUnitNo1").text("Selected : Floor" + response.model.FloorNo + "- Unit " + response.model.UnitNo + "  ($" + response.model.Current_Rent + ")");
            $("#hndUID").val($("#hndpriceTableUID").val());

            $("#txtRooms").val(response.model.Rooms);
            $("#txtBedroom").val(response.model.Bedroom);
            $("#txtBathroom").val(response.model.Bathroom);
            $("#txtHall").val(response.model.Hall);

            $("#txtPetDetails").val(response.model.PetDetails);
            $("#ddlFloorNo").val(response.model.FloorNo);
            $("#txtArea").val(response.model.Area);

            $("#txtCarpet_Color").val(response.model.Carpet_Color);
            $("#txtWall_Paint_Color").val(response.model.Wall_Paint_Color);

            $("#txtOccupancyDate").val(response.model.OccupancyDateText);
            //$("#chkPendingMoveIn").is(":checked") ? "1" : "0";
            $("#txtVacancyLoss_Date").val(response.model.VacancyLoss_DateText);
            $("#txtIntendedMoveIn_Date").val(response.model.IntendedMoveIn_Date);
            $("#txtIntendMoveOutDate").val(response.model.IntendMoveOutDate);
            $("#txtActualMoveInDate").val(response.model.ActualMoveInDateText);

            $("#lbldeposit1").text(formatMoney(parseFloat(response.model.Deposit).toFixed(2)));
            $("#lbdepo6").text(parseFloat(response.model.Deposit).toFixed(2));

            $("#lblFMRent").text(formatMoney(parseFloat(response.model.Current_Rent).toFixed(2)));
            totalAmt = (parseFloat(response.model.Current_Rent) + parseFloat(unformatText($("#lblAdditionalParking").text())) + parseFloat(unformatText($("#lblStorageUnit").text())) + parseFloat(unformatText($("#lblTrashAmt").text())) + parseFloat($("#lblPestAmt").text()) + parseFloat($("#lblConvergentAmt").text()) + parseFloat(unformatText($("#lblPetFee").text()))).toFixed(2);
            $("#lbltotalAmount").text(formatMoney(totalAmt));

            //Amit's Work for final Quotation form 15-10
            $("#lblFNLUnit").text("#" + response.model.UnitNo);
            $("#lblFNLModel").text(response.model.Building);
            $("#lblFNLModel1").text(response.model.Building);
            $("#lblFNLTerm").text(response.model.Leased);
            $("#lblMonthly_MonthlyCharge").text("$" + formatMoney(response.model.Current_Rent.toFixed(2)));
            $("#lblProrated_MonthlyCharge").text("$" + formatMoney(parseFloat(parseFloat(response.model.Current_Rent) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
            $("#lblMonthly_MonthlyCharge1").text(formatMoney(response.model.Current_Rent.toFixed(2)));
            $("#lblProrated_MonthlyCharge1").text(formatMoney(parseFloat(parseFloat(response.model.Current_Rent) / parseFloat(numberOfDays) * remainingday).toFixed(2)));

            $("#lblRFPMonthlyCharges").text(formatMoney(response.model.Current_Rent.toFixed(2)));

            $("#fdepo").text("$" + (response.model.Deposit).toFixed(2));
            $("#lbdepo6").text((response.model.Deposit).toFixed(2));

            $("#lblMonthly_TotalRent").text("$" + formatMoney(totalAmt));
            $("#lblProrated_TotalRent").text("$" + formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
            $("#lblProratedRent").text(formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
            $("#lblProratedRent6").text(formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));

            var rfpMonthlyCharge = unformatText($("#lblRFPMonthlyCharges").text());
            var rfpParkingCharge = $("#lblRFPAdditionalParking").text();
            var rfpStorageCharge = $("#lblRFPStorageUnit").text();
            var rfpPetcharge = $("#lblRFPPetRent").text();

            var rfpTotalRentCharge = parseFloat(rfpMonthlyCharge, 10) + parseFloat(rfpParkingCharge, 10) + parseFloat(rfpStorageCharge, 10) + parseFloat(rfpPetcharge, 10);
            //alert(calTotalRentChargefpetd
            //$("#lblRFPTotalMonthlyPayment").text((parseFloat($("#lblRFPMonthlyCharges").text())) + (parseFloat($("#lblRFPAdditionalParking").text())) + (parseFloat($("#lblRFPStorageUnit").text())) + (parseFloat($("#lblRFPPetRent").text())));

            $("#ftotal").text(formatMoney((parseFloat(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday), 10) + parseFloat(response.model.Deposit, 10) + parseFloat(unformatText($("#fpetd").text()), 10) + parseFloat(unformatText($("#lblVehicleFees").text()), 10) + + parseFloat($("#lblPetDNAAmt").text(), 10)).toFixed(2)));

            $("#lbtotdueatmov6").text(formatMoney((parseFloat(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday), 10) + parseFloat(response.model.Deposit, 10) + parseFloat(unformatText($("#fpetd").text()), 10) + parseFloat(unformatText($("#lblVehicleFees").text()), 10) + parseFloat($("#lblPetDNAAmt").text(), 10)).toFixed(2)));

            // $("#lblRFPTotalMonthlyPayment").text(formatMoney((parseFloat(unformatText($("#lblRFPMonthlyCharges").text()))) + (parseFloat($("#lblRFPAdditionalParking").text())) + (parseFloat($("#lblRFPStorageUnit").text())) + (parseFloat($("#lblRFPPetRent").text())) + (parseFloat($("#lblRFPTrashRecycling").text())) + (parseFloat($("#lblRFPPestControl").text())) + (parseFloat($("#lblRFPConvergentbillingfee").text()))));
            $("#lblRFPTotalMonthlyPayment").text(formatMoney(parseFloat(unformatText($("#lblRFPMonthlyCharges").text(), 10)) + (parseFloat($("#lblRFPAdditionalParking").text().replace('$', ''))) + (parseFloat($("#lblRFPStorageUnit").text().replace('$', ''))) + (parseFloat($("#lblRFPPetRent").text().replace('$', ''))) + (parseFloat($("#lblRFPTrashRecycling").text().replace('$', ''))) + (parseFloat($("#lblRFPPestControl").text().replace('$', ''))) + (parseFloat($("#lblRFPConvergentbillingfee").text().replace('$', '')))));

            $("#lblProrated_TrashAmt").text("$" + parseFloat(parseFloat($("#lblTrash").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_TrashAmt1").text(parseFloat(parseFloat($("#lblTrash").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_PestAmt").text("$" + parseFloat(parseFloat($("#lblPestControl").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_PestAmt1").text(parseFloat(parseFloat($("#lblPestControl").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_ConvergentAmt").text("$" + parseFloat(parseFloat($("#lblConvergentAmt").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_ConvergentAmt1").text(parseFloat(parseFloat($("#lblConvergentAmt").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));

            $("#lblRent2").text((parseFloat(response.model.Current_Rent)).toFixed(2));
            $("#txtModal").text(response.model.Building);
            $("#lblArea1").text(response.model.Area);
            $("#lblBed1").text(response.model.Bedroom);
            $("#lblBath1").text(response.model.Bathroom);
            $("#lblHall1").text(response.model.Hall);
            $("#lblDeposit1").text(formatMoney(response.model.Deposit));
            $("#lblLease3").text(response.model.Leased);
            $("#lblLease4").text(response.model.Leased);
            $("#imgFloorPlanSumm").attr("src", "/content/assets/img/plan/" + response.model.Building + ".jpg");
            $("#lbldeposit2").text(parseFloat(response.model.Deposit).toFixed(2));
            $("#lblFMRent1").text(parseFloat(response.model.Current_Rent).toFixed(2));
            $("#lblUnitTitle3").text("#" + response.model.UnitNo);
            //$("#lblLeaseStartDate").text(response.model.AvailableDateText);
            //$("#lblLeaseStartDate").text($("#hndsummaryDesireMoveIn").val());
            $("#lblSubtotalsumm").text((parseFloat(response.model.Current_Rent) + parseFloat(unformatText($("#lblTrashAmt").text())) + parseFloat(unformatText($("#lblPestAmt").text())) + parseFloat(unformatText($("#lblConvergentAmt").text()))).toFixed(2));
            $("#lbltotalAmountSumm").text((parseFloat(response.model.Current_Rent) + parseFloat(unformatText($("#lblTrashAmt").text())) + parseFloat(unformatText($("#lblPestAmt").text())) + parseFloat(unformatText($("#lblConvergentAmt").text()))).toFixed(2));
            localStorage.setItem("floorfromplan", response.model.FloorNo);
            $("#hndFloorNo").val(response.model.FloorNo);
            $("#hndBedRoom").val(response.model.Bedroom);
            $("#hndBuilding").val(response.model.Building);

            $("#lblMonthly_TotalRentSp").text("$" + (formatMoney(totalAmt)));
            $("#lblAp32").text("#" + response.model.UnitNo);
            $("#lblArea32").text("Sq.Ft. " + response.model.Area);
            $("#lblBed32").text(response.model.Bedroom);
            $("#lblUnitModel3").text(response.model.Building);
            $("#lblBath32").text(response.model.Bathroom);
            $("#lblDeposit3").text("$" + (formatMoney(response.model.Deposit)));

            showFloorPlanApplicant(response.model.FloorNo, response.model.Bedroom, response.model.Building);

            //new code for price table
            $('#priceTableUnit').text(response.model.UnitNo);
            $('#priceTableBedroom').text(response.model.Bedroom);
            $('#priceTableBathroom').text(response.model.Bathroom);
            $('#priceTableArea').text(response.model.Area);


            $("#divLoader").hide();
            goToStep(3, 3, 0);
        }
    });
};


var showPriceTable = function (uid) {

    $("#hndUID").val(uid);
    getPropertyUnitDetails(uid);
    $('#divPriceTable').removeClass('hidden');
    $('#divSelectUnit').addClass('hidden');
};

var showMonthlyCharges = function (uid) {
    getPropertyUnitDetails(uid);
    $('#popMonthlyCharges').modal('show');
};
var goToSelectUnit = function () {
    $('#divPriceTable').addClass('hidden');
    $('#divSelectUnit').removeClass('hidden');
    $("#hndOldUID").val($("#hndUID").val());
    getPropertyUnitDetails($("#hndUID").val());
};
var goToPriceTable = function () {
    $('#divPriceTable').removeClass('hidden');
    $('#divSelectUnit').addClass('hidden');
};

var getPropertyModelUnitList = function (stype, pid) {
    addModelArray = [];
    noofcomapre = 0;
    $("#divCompare").addClass("hidden");
    $("#divMainSearch").removeClass("hidden");
    $("#divLoader").show();

    var maxrent = 0;
    var sortorder = $("#ddlSortOrder").val();
    if ($("#txtMaxRent").val() == "0") {
        //maxrent = "10000";
    }
    else {
        maxrent = $("#txtMaxRent").val();
    }

    var bedroom = 0;
    if (!$("#ddlRoom").val()) {
        bedroom = 0;
    }
    else {
        bedroom = $("#ddlRoom").val();
    }
    var availdate = $("#txtDate").val();

    var furnished = $("#ddlFurnishedUnit").val();

    var model = { PID: 8, AvailableDate: availdate, Current_Rent: maxrent, Bedroom: bedroom, SortOrder: sortorder, Furnished: furnished };
    $.ajax({
        url: "/Property/GetPropertyModelList/",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            if (response != null) {
                $("#listModelUnit").empty();
                $.each(response.model, function (elementType, value) {
                    var html = "<div class='col-xl-5 col-md-6 col-lg-5 ' id='modeldiv" + value.Building + "'><div class='single_property'><div class='row'><div class='col-md-6 col-sm-6'><div class='property_thumb backModel'>";
                    html += "<img src='/content/assets/img/plan/" + value.FloorPlan + "' class='modelimg' alt=''></div></div>";
                    html += "<div class='col-md-6 col-sm-6'><div class='property_content'><div class='main_pro'><h5>Floor Plan " + value.Building + "</h5></br>";
                    html += "<div class='mark_pro'><p>" + value.Bedroom + " Bed | " + value.Bathroom + "Bath</p><p> " + value.Area + " Sq Ft</p><p>Starting at </p><p>" + value.RentRange + "  / month</p></div>";
                    html += "<div class='button'><div style='margin-top: -10px;margin-bottom: -48px;'  onclick='getPropertyUnitList(\"" + value.Building + "\")'><a href='javascript:void(0);' class='genric-btn available'>" + value.NoAvailable + " Available</a></div><br><p><div class='input-group' style='width:100%;margin-top: 25px;' id='chkComp" + value.Building + "'><div style='width:15%;float:left' ><input  style='cursor: pointer;' type='checkbox' onclick='addToCompare(\"" + value.Building + "\")' id='btnCompare" + value.Building + "'/></div> <div style='width:85%;float:left;text-align: left;color:black;'>Compare</div> </div></p></div>";
                    html += "</div></div></div></div></div></div>";

                    //var html = "<div class='col-sm-4 col-md-4 p0' id='modeldiv" + value.Building + "'><div class='box-two proerty-item'>";
                    ////html += " <div class='item-entry overflow'><h5><a href='javascript:void(0);' onclick=getPropertyUnitList(\"" + value.Building + "\")'>" + value.Building + "</a><div class='checkbox pull-right' style='margin-top: -2px;'><label>/*<input type='checkbox' id='chkCompareid" + value.Building + "' class='hidden form-control' style='margin-left: -25px; margin-top: -15px;'>*/<i class='fa fa-check' aria-hidden='true'></i></label></div></h5>  <div class='dot-hr'></div>";
                    //html += " <div class='item-entry overflow'><h5><a style='color:black' href='javascript:void(0);' onclick=getPropertyUnitList(\"" + value.Building + "\",\"\")'>" + value.Building + "</a><div class='checkbox pull-right' style='margin-top: -2px;'><label id='chkCompareid" + value.Building + "' class='hidden' ><i class='fa fa-check' aria-hidden='true'style='color: #4d738a;'></i></label></div></h5>  <div class='dot-hr'></div>";
                    //html += "<div class='item-thumb'><a href = '#' onclick='getPropertyUnitList(\"" + value.Building + "\")'> <img src='/content/assets/img/plan/" + value.FloorPlan + "' style='height:250px';></a></div> ";
                    //html += "<div class='property-icon'><center>" + value.Bedroom + " Bed | " + value.Bathroom + "Bath ";
                    //html += "| " + value.Area + "Sq Ft <br/><center><span class='proerty-price'>" + value.RentRange + " </span></center></center> ";
                    //html += "</br><button class='btn-success' onclick='getPropertyUnitList(\"" + value.Building + "\")' style='width: 100%;'>Available (" + value.NoAvailable + ")</button> <center><u style=''><a onclick='addToCompare(\"" + value.Building + "\")'  href='javascript:void(0);'  id='btnCompare" + value.Building + "' class='custome-item-entry'>Compare</a><a onclick='removeToCompare(\"" + value.Building + "\")'  id='btncompRemove" + value.Building + "'  href='javascript:void(0);' class='hidden'>Remove</a></u></center>";
                    //html += "</div></div></div></div>";
                    $("#listModelUnit").append(html);

                });
            }
        }
    });
}

var getPropertyUnitDetails = function (uid) {
    console.log(uid);
    $("#listUnitNew tr").removeClass("select-unit");
    //$("#unitdiv_" + $("#hndOldUID").val()).removeClass("select-unit");
    $("#divLoader").show();
    var model = { UID: uid, LeaseTermID: $("#hndLeaseTermID").val() };
    $.ajax({
        url: "/Property/GetPropertyUnitDetails/",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            //console.log(JSON.stringify(response));
            $("#ddlAvailableFloorPlanLeaseTerm").empty();
            $.each(response.model.LeaseTerms, function (elementType, value) {
                $("#ddlAvailableFloorPlanLeaseTerm").append("<option value=" + value.LeaseId + " data-value=" + value.LeasePrice + ">" + value.LeaseName + ' ($' + formatMoney(value.LeasePrice) + ') ' + "</option>");

                if ($("#hndLeaseTermID").val() == value.LeaseId) {
                    $('#lblAvailableFloorPlanStartingPrice').text(formatMoney(value.LeasePrice));
                }
            });
            //new code for price table
            $('#priceTableUnit').text(response.model.UnitNo);
            $('#priceTableBedroom').text(response.model.Bedroom);
            $('#priceTableBathroom').text(response.model.Bathroom);
            $('#priceTableArea').text(response.model.Area);

            //for current
            $('#priceTableRent1').text(parseFloat(response.model.PriceTableRentCurrent).toFixed(2));
            $('#priceTableLeaseTerm1').text(response.model.PriceTableLeaseTermCurrent);
            $('#hndpriceTableLeaseTermId1').val(response.model.PriceTableLeaseTermIDCurrent);

            //for best
            $('#priceTableRent2').text(parseFloat(response.model.PriceTableRentBest).toFixed(2));
            $('#priceTableLeaseTerm2').text(response.model.PriceTableLeaseTermBest);
            $('#hndpriceTableLeaseTermId2').val(response.model.PriceTableLeaseTermIDBest);

            //for great
            $('#priceTableRent3').text(parseFloat(response.model.PriceTableRentGreat).toFixed(2));
            $('#priceTableLeaseTerm3').text(response.model.PriceTableLeaseTermGreat);
            $('#hndpriceTableLeaseTermId3').val(response.model.PriceTableLeaseTermIDGreat);

            //alert(response.model.PriceTableUID)
            $('#hndpriceTableUID').val(response.model.PriceTableUID);

            $("#priceTableDate").val($('#txtDate').val());
            $("#priceTableMoveInDate1").text($('#txtDate').val());
            $("#priceTableMoveInDate2").text($('#txtDate').val());
            $("#priceTableMoveInDate3").text($('#txtDate').val());

            //for new pop up
            $("#popMonthlyChargesFloorPlan").attr("src", "/content/assets/img/plan/" + response.model.Building + ".jpg");
            $('#popMonthlyChargesModel').text(response.model.Building);
            $('#popMonthlyChargesUnit').text(response.model.UnitNo);
            $('#popMonthlyChargesLeaseTerm').text(response.model.PriceTableLeaseTermCurrent);
            $('#popMonthlyChargesDesMoveIn').text($('#txtDate').val());
            $('#popMonthlyChargesBedrooms').text(response.model.Bedroom);
            $('#popMonthlyChargesBathrooms').text(response.model.Bathroom);
            $('#popMonthlyChargesArea').text(response.model.Area);
            $('#popMonthlyChargesOccupancy').text((parseInt(response.model.Bedroom) * 2).toString());
            $('#popMonthlyChargesDeposit').text("$" + formatMoney(parseFloat(response.model.Deposit).toFixed(2)) + "**");

            //for new available floor plan details
            $("#imgAvailableFloorPlanImage").attr("src", "/content/assets/img/plan/" + response.model.Building + ".jpg");
            $('#lblAvailableFloorPlanUnit').text(response.model.UnitNo);
            $('#lblAvailableFloorPlanBedroom').text(response.model.Bedroom);
            $('#lblAvailableFloorPlanBathroom').text(response.model.Bathroom);
            $('#lblAvailableFloorPlanArea').text(response.model.Area);
            //$('#lblAvailableFloorPlanStartingPrice').text(formatMoney(response.model.StartingPriceString));
            $('#lblAvailableFloorPlanAvailableDate').text(response.model.AvailableDateText);
            var dtend100 = new Date();
            dtend100.setFullYear(new Date().getFullYear() + 100);
            $("#txtAvailableFloorPlanMoveInDate").datepicker({ format: "mm/dd/yyyy", weekStart: 0, startDate: "+1d", endDate: dtend100, maxViewMode: 2, autoclose: true });
            $("#txtAvailableFloorPlanMoveInDate").val($('#txtDate').val());
            $("#txtAvailableFloorPlanMoveInDate").attr("disabled", "disabled");

            $('#ddlAvailableFloorPlanLeaseTerm').val($("#hndLeaseTermID").val());

            var popMCBRent = parseFloat(response.model.Current_Rent).toFixed(2);
            $('#popMonthlyChargesBaseRent').text("$" + formatMoney((parseFloat(response.model.Current_Rent)).toFixed(2)));
            var popMCPremium = response.model.Premium;
            $('#popMonthlyChargesPremium').text("$" + formatMoney(response.model.Premium));
            var popMCPromotion = 0;
            $('#popMonthlyChargesPropmotion').text("$" + formatMoney(0));
            var popMonthlyChargessubtotals1 = parseFloat((parseFloat(popMCBRent) + parseFloat(popMCPremium) + parseFloat(popMCPromotion))).toFixed(2);
            $('#popMonthlyChargesSubtotal1').text("$" + formatMoney(popMonthlyChargessubtotals1));

            var popMCPControl = response.model.PestAmt;
            $('#popMonthlyChargesPestControl').text("$" + formatMoney(response.model.PestAmt));
            var popMCTRecycle = response.model.TrashAmt;
            $('#popMonthlyChargesTrashRecycle').text("$" + formatMoney(response.model.TrashAmt));
            var popMCCBilling = response.model.ConvergentAmt;
            $('#popMonthlyChargesConvergentBilling').text("$" + formatMoney(response.model.ConvergentAmt));
            var popMonthlyChargessubtotals2 = parseFloat((parseFloat(popMCPControl) + parseFloat(popMCTRecycle) + parseFloat(popMCCBilling))).toFixed(2);
            $('#popMonthlyChargesSubtotal2').text("$" + formatMoney(popMonthlyChargessubtotals2));
            var popMonthlyChargesTotal = parseFloat(parseFloat(popMonthlyChargessubtotals1) + parseFloat(popMonthlyChargessubtotals2)).toFixed(2);
            $('#popMonthlyChargesTotalMonthlyCharges').text("$" + formatMoney(popMonthlyChargesTotal));

            $("#hndShowPropertyDetails").val(1);
            $("#popModelCompare").modal("hide");
            $("#popUnitDet").addClass("hidden");
            $("#popFloorCoordinate").addClass("hidden");
            $("#lblUnitNo").text("#" + response.model.UnitNo);
            $("#lblUnitTitle").text("#" + response.model.UnitNo);
            $("#lblUnitTitle2").text("#" + response.model.UnitNo);
            $("#lblFNLPreparedFor").text("#" + response.model.UnitNo);
            $("#parkUnit").text("#" + response.model.UnitNo);
            $("#storUnit").text("#" + response.model.UnitNo);
            $("#txtAvailableDate").val(response.model.AvailableDateText);

            $("#unitdiv_" + uid).addClass("select-unit");
            $("#hndUID").val(uid);

            fillUnitParkingList();
            if ($("#unitdiv_" + uid).length) {
                $("#unitdiv_" + uid)[0].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });

            }

            $("#lblRent").text(formatMoney(response.model.Current_Rent));
            $("#lblArea").text(response.model.Area);
            $("#lblBed").text(response.model.Bedroom);
            $("#lblBath").text(response.model.Bathroom);
            $("#lblHall").text(response.model.Hall);
            $("#lblDeposit").text(formatMoney(response.model.Deposit));
            $("#lblLease").text(response.model.Leased);
            $("#lblLease2").text(response.model.Leased);
            $("#lblRent22").text("$" + response.model.Current_Rent);
            $("#lblArea22").text(response.model.Area);
            $("#lblBed22").text(response.model.Bedroom);
            $("#lblUnitModel").text("Model: #" + response.model.Building);
            $("#lblBath22").text(response.model.Bathroom);

            //sachin 02 june
            $("#lblArea33").text(response.model.Area);
            $("#lblBed33").text(response.model.Bedroom);
            $("#lblBath33").text(response.model.Bathroom);
            $("#lblRent33").text((response.model.Current_Rent).toFixed(2));

            $("#lblOccupancy22").text((parseInt(response.model.Bedroom) * 2).toString());
            $("#lblOccupancy").text((parseInt(response.model.Bedroom) * 2).toString());

            $("#lblDeposit22").text("$" + response.model.Deposit);
            $("#lblLease22").text(response.model.Leased);
            $("#lblLease2").text(response.model.Leased);
            $("#lblDeposit").text(response.model.Rent);
            $("#imgFloorPlan").attr("src", "/content/assets/img/plan/" + response.model.Building + ".jpg");
            $("#imgFloorPlan1").attr("src", "/content/assets/img/plan/" + response.model.Building + ".jpg");
            $("#imgFloorPlan2").attr("src", "/content/assets/img/plan/" + response.model.Building + "Det.jpg");
            $("#lblUnitNo1").text("Selected : Floor" + response.model.FloorNo + "- Unit " + response.model.UnitNo + "  ($" + response.model.Current_Rent + ")");
            $("#hndUID").val(uid);

            $("#txtRooms").val(response.model.Rooms);
            $("#txtBedroom").val(response.model.Bedroom);
            $("#txtBathroom").val(response.model.Bathroom);
            $("#txtHall").val(response.model.Hall);

            $("#txtPetDetails").val(response.model.PetDetails);
            $("#ddlFloorNo").val(response.model.FloorNo);
            $("#txtArea").val(response.model.Area);

            $("#txtCarpet_Color").val(response.model.Carpet_Color);
            $("#txtWall_Paint_Color").val(response.model.Wall_Paint_Color);

            $("#txtOccupancyDate").val(response.model.OccupancyDateText);
            //$("#chkPendingMoveIn").is(":checked") ? "1" : "0";
            $("#txtVacancyLoss_Date").val(response.model.VacancyLoss_DateText);
            $("#txtIntendedMoveIn_Date").val(response.model.IntendedMoveIn_Date);
            $("#txtIntendMoveOutDate").val(response.model.IntendMoveOutDate);
            $("#txtActualMoveInDate").val(response.model.ActualMoveInDateText);

            $("#lbldeposit1").text(formatMoney(parseFloat(response.model.Deposit).toFixed(2)));
            $("#lbdepo6").text(parseFloat(response.model.Deposit).toFixed(2));

            $("#lblFMRent").text(formatMoney(parseFloat(response.model.Current_Rent).toFixed(2)));

            //if (response.model.Furnished == 0) {
            //    $("#chkFurnished").css("text-decoration", "line-through");
            //    $("#chkFurnished").css("text-decoration-color", "red");
            //}
            //if (response.model.Washer == 0) {
            //    $("#chkWasher").css("text-decoration", "line-through");
            //    $("#chkWasher").css("text-decoration-color", "red");
            //}
            //if (response.model.Refrigerator == 0) {
            //    $("#chkRefrigerator").css("text-decoration", "line-through");
            //    $("#chkRefrigerator").css("text-decoration-color", "red");
            //}
            //if (response.model.Drapes == 0) {
            //    $("#chkDrapes").css("text-decoration", "line-through");
            //    $("#chkDrapes").css("text-decoration-color", "red");
            //}
            //if (response.model.Dryer == 0) {
            //    $("#chkDryer").css("text-decoration", "line-through");
            //    $("#chkDryer").css("text-decoration-color", "red");
            //}
            //if (response.model.Dishwasher == 0) {
            //    $("#chkDishwasher").css("text-decoration", "line-through");
            //    $("#chkDishwasher").css("text-decoration-color", "red");
            //}
            //if (response.model.Disposal == 0) {
            //    $("#chkDisposal").css("text-decoration", "line-through");
            //    $("#chkDisposal").css("text-decoration-color", "red");
            //}
            //if (response.model.Elec_Range == 0) {
            //    $("#chkElec_Range").css("text-decoration", "line-through");
            //    $("#chkElec_Range").css("text-decoration-color", "red");
            //}
            //if (response.model.Gas_Range == 0) {
            //    $("#chkGas_Range").css("text-decoration", "line-through");
            //    $("#chkGas_Range").css("text-decoration-color", "red");
            //}
            //if (response.model.Air_Conditioning == 0) {
            //    $("#chkAir_Conditioning").css("text-decoration", "line-through");
            //    $("#chkAir_Conditioning").css("text-decoration-color", "red");
            //}
            //if (response.model.Fireplace == 0) {
            //    $("#chkFireplace").css("text-decoration", "line-through");
            //    $("#chkFireplace").css("text-decoration-color", "red");
            //}
            //if (response.model.Den == 0) {
            //    $("#chkDen").css("text-decoration", "line-through");
            //    $("#chkDen").css("text-decoration-color", "red");
            //}
            //if (response.model.Carpet == 0) {
            //    $("#chkCarpet").css("text-decoration", "line-through");
            //    $("#chkCarpet").css("text-decoration-color", "red");
            //}

            totalAmt = (parseFloat(response.model.Current_Rent) + parseFloat(unformatText($("#lblAdditionalParking").text())) + parseFloat(unformatText($("#lblStorageUnit").text())) + parseFloat(unformatText($("#lblTrashAmt").text())) + parseFloat($("#lblPestAmt").text()) + parseFloat($("#lblConvergentAmt").text()) + parseFloat(unformatText($("#lblPetFee").text()))).toFixed(2);
            $("#lbltotalAmount").text(formatMoney(totalAmt));

            //Amit's Work for final Quotation form 15-10
            $("#lblFNLUnit").text("#" + response.model.UnitNo);
            $("#lblFNLModel").text(response.model.Building);
            $("#lblFNLModel1").text(response.model.Building);
            //$("#lblFNLTerm").text(response.model.Leased);
            $("#lblMonthly_MonthlyCharge").text("$" + formatMoney(response.model.Current_Rent.toFixed(2)));
            $("#lblProrated_MonthlyCharge").text("$" + formatMoney(parseFloat(parseFloat(response.model.Current_Rent) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
            $("#lblMonthly_MonthlyCharge1").text(formatMoney(response.model.Current_Rent.toFixed(2)));
            $("#lblProrated_MonthlyCharge1").text(formatMoney(parseFloat(parseFloat(response.model.Current_Rent) / parseFloat(numberOfDays) * remainingday).toFixed(2)));

            $("#lblRFPMonthlyCharges").text(formatMoney(response.model.Current_Rent.toFixed(2)));

            $("#fdepo").text("$" + (response.model.Deposit).toFixed(2));
            $("#lbdepo6").text((response.model.Deposit).toFixed(2));

            $("#lblMonthly_TotalRent").text("$" + formatMoney(totalAmt));
            $("#lblProrated_TotalRent").text("$" + formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
            $("#lblProratedRent").text(formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
            $("#lblProratedRent6").text(formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));

            var rfpMonthlyCharge = unformatText($("#lblRFPMonthlyCharges").text());
            var rfpParkingCharge = $("#lblRFPAdditionalParking").text();
            var rfpStorageCharge = $("#lblRFPStorageUnit").text();
            var rfpPetcharge = $("#lblRFPPetRent").text();

            var rfpTotalRentCharge = parseFloat(rfpMonthlyCharge, 10) + parseFloat(rfpParkingCharge, 10) + parseFloat(rfpStorageCharge, 10) + parseFloat(rfpPetcharge, 10);
            //alert(calTotalRentChargefpetd
            //$("#lblRFPTotalMonthlyPayment").text((parseFloat($("#lblRFPMonthlyCharges").text())) + (parseFloat($("#lblRFPAdditionalParking").text())) + (parseFloat($("#lblRFPStorageUnit").text())) + (parseFloat($("#lblRFPPetRent").text())));

            $("#ftotal").text(formatMoney((parseFloat(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday), 10) + parseFloat(response.model.Deposit, 10) + parseFloat(unformatText($("#fpetd").text()), 10) + parseFloat(unformatText($("#lblVehicleFees").text()), 10) + + parseFloat($("#lblPetDNAAmt").text(), 10)).toFixed(2)));

            $("#lbtotdueatmov6").text(formatMoney((parseFloat(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday), 10) + parseFloat(response.model.Deposit, 10) + parseFloat(unformatText($("#fpetd").text()), 10) + parseFloat(unformatText($("#lblVehicleFees").text()), 10) + parseFloat($("#lblPetDNAAmt").text(), 10)).toFixed(2)));



            $("#lblProrated_TrashAmt").text("$" + parseFloat(parseFloat($("#lblTrash").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_TrashAmt1").text(parseFloat(parseFloat($("#lblTrash").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_PestAmt").text("$" + parseFloat(parseFloat($("#lblPestControl").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_PestAmt1").text(parseFloat(parseFloat($("#lblPestControl").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_ConvergentAmt").text("$" + parseFloat(parseFloat($("#lblConvergentAmt").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_ConvergentAmt1").text(parseFloat(parseFloat($("#lblConvergentAmt").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));

            $("#lblRent2").text((parseFloat(response.model.Current_Rent)).toFixed(2));
            $("#txtModal").text(response.model.Building);
            $("#lblArea1").text(response.model.Area);
            $("#lblBed1").text(response.model.Bedroom);
            $("#lblBath1").text(response.model.Bathroom);
            $("#lblHall1").text(response.model.Hall);
            $("#lblDeposit1").text(formatMoney(response.model.Deposit));
            //$("#lblLease3").text(response.model.Leased);
            //$("#lblLease4").text(response.model.Leased);
            $("#imgFloorPlanSumm").attr("src", "/content/assets/img/plan/" + response.model.Building + ".jpg");
            $("#lbldeposit2").text(parseFloat(response.model.Deposit).toFixed(2));
            $("#lblFMRent1").text(parseFloat(response.model.Current_Rent).toFixed(2));
            $("#lblUnitTitle3").text("#" + response.model.UnitNo);
            //$("#lblLeaseStartDate").text(response.model.AvailableDateText);
            //$("#lblLeaseStartDate").text($("#hndsummaryDesireMoveIn").val());
            $("#lblSubtotalsumm").text((parseFloat(response.model.Current_Rent) + parseFloat(unformatText($("#lblTrashAmt").text())) + parseFloat(unformatText($("#lblPestAmt").text())) + parseFloat(unformatText($("#lblConvergentAmt").text()))).toFixed(2));
            $("#lbltotalAmountSumm").text((parseFloat(response.model.Current_Rent) + parseFloat(unformatText($("#lblTrashAmt").text())) + parseFloat(unformatText($("#lblPestAmt").text())) + parseFloat(unformatText($("#lblConvergentAmt").text()))).toFixed(2));
            localStorage.setItem("floorfromplan", response.model.FloorNo);
            $("#hndFloorNo").val(response.model.FloorNo);
            $("#hndBedRoom").val(response.model.Bedroom);
            $("#hndBuilding").val(response.model.Building);

            $("#lblMonthly_TotalRentSp").text("$" + (formatMoney(totalAmt)));
            $("#lblAp32").text("#" + response.model.UnitNo);
            $("#lblArea32").text("Sq.Ft. " + response.model.Area);
            $("#lblBed32").text(response.model.Bedroom);
            $("#lblUnitModel3").text(response.model.Building);
            $("#lblBath32").text(response.model.Bathroom);
            $("#lblDeposit3").text("$" + (formatMoney(response.model.Deposit)));


            $("#lblRFPTotalMonthlyPayment").text(formatMoney(parseFloat(unformatText($("#lblRFPMonthlyCharges").text(), 10)) + (parseFloat($("#lblRFPAdditionalParking").text().replace('$', ''))) + (parseFloat($("#lblRFPStorageUnit").text().replace('$', ''))) + (parseFloat($("#lblRFPPetRent").text().replace('$', ''))) + (parseFloat($("#lblRFPTrashRecycling").text().replace('$', ''))) + (parseFloat($("#lblRFPPestControl").text().replace('$', ''))) + (parseFloat($("#lblRFPConvergentbillingfee").text().replace('$', '')))));

            //console.log(parseFloat(unformatText($("#lblRFPMonthlyCharges").text(), 10)));
            //console.log($("#lblRFPAdditionalParking").text().replace('$', ''));
            //console.log($("#lblRFPStorageUnit").text().replace('$', ''));
            //console.log($("#lblRFPPetRent").text().replace('$', ''));
            //console.log(parseFloat($("#lblRFPTrashRecycling").text()));
            //console.log(parseFloat($("#lblRFPPestControl").text()));
            //console.log(parseFloat($("#lblRFPConvergentbillingfee").text()));

            showFloorPlanApplicant(response.model.FloorNo, response.model.Bedroom, response.model.Building);

            $("#divLoader").hide();
        }
    });
}


var applyFromFloorPlanDetails = function () {

    $("#listUnitNew tr").removeClass("select-unit");
    var uid = $("#hndAvailableFloorPlanUID").val();
    $("#hndLeaseTermID").val($("#ddlAvailableFloorPlanLeaseTerm").val());
    $("#divLoader").show();
    var model = { UID: uid, LeaseTermID: $("#hndLeaseTermID").val() };
    $.ajax({
        url: "/Property/GetPropertyUnitDetails/",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {

            //new code for price table
            $('#priceTableUnit').text(response.model.UnitNo);
            $('#priceTableBedroom').text(response.model.Bedroom);
            $('#priceTableBathroom').text(response.model.Bathroom);
            $('#priceTableArea').text(response.model.Area);

            //for current
            $('#priceTableRent1').text(parseFloat(response.model.PriceTableRentCurrent).toFixed(2));
            $('#priceTableLeaseTerm1').text(response.model.PriceTableLeaseTermCurrent);
            $('#hndpriceTableLeaseTermId1').val(response.model.PriceTableLeaseTermIDCurrent);

            //for best
            $('#priceTableRent2').text(parseFloat(response.model.PriceTableRentBest).toFixed(2));
            $('#priceTableLeaseTerm2').text(response.model.PriceTableLeaseTermBest);
            $('#hndpriceTableLeaseTermId2').val(response.model.PriceTableLeaseTermIDBest);

            //for great
            $('#priceTableRent3').text(parseFloat(response.model.PriceTableRentGreat).toFixed(2));
            $('#priceTableLeaseTerm3').text(response.model.PriceTableLeaseTermGreat);
            $('#hndpriceTableLeaseTermId3').val(response.model.PriceTableLeaseTermIDGreat);

            //alert(response.model.PriceTableUID)
            $('#hndpriceTableUID').val(response.model.PriceTableUID);

            $("#priceTableDate").val($('#txtDate').val());
            $("#priceTableMoveInDate1").text($('#txtDate').val());
            $("#priceTableMoveInDate2").text($('#txtDate').val());
            $("#priceTableMoveInDate3").text($('#txtDate').val());

            //for new pop up
            $("#popMonthlyChargesFloorPlan").attr("src", "/content/assets/img/plan/" + response.model.Building + ".jpg");
            $('#popMonthlyChargesModel').text(response.model.Building);
            $('#popMonthlyChargesUnit').text(response.model.UnitNo);
            $('#popMonthlyChargesLeaseTerm').text(response.model.PriceTableLeaseTermCurrent);
            $('#popMonthlyChargesDesMoveIn').text($('#txtDate').val());
            $('#popMonthlyChargesBedrooms').text(response.model.Bedroom);
            $('#popMonthlyChargesBathrooms').text(response.model.Bathroom);
            $('#popMonthlyChargesArea').text(response.model.Area);
            $('#popMonthlyChargesOccupancy').text((parseInt(response.model.Bedroom) * 2).toString());
            $('#popMonthlyChargesDeposit').text("$" + formatMoney(parseFloat(response.model.Deposit).toFixed(2)));

            var popMCBRent = parseFloat(response.model.Current_Rent).toFixed(2);
            $('#popMonthlyChargesBaseRent').text("$" + formatMoney((parseFloat(response.model.Current_Rent)).toFixed(2)));
            var popMCPremium = response.model.Premium;
            $('#popMonthlyChargesPremium').text("$" + formatMoney(response.model.Premium));
            var popMCPromotion = 0;
            $('#popMonthlyChargesPropmotion').text("$" + formatMoney(0));
            var popMonthlyChargessubtotals1 = parseFloat((parseFloat(popMCBRent) + parseFloat(popMCPremium) + parseFloat(popMCPromotion))).toFixed(2);
            $('#popMonthlyChargesSubtotal1').text("$" + formatMoney(popMonthlyChargessubtotals1));

            var popMCPControl = response.model.PestAmt;
            $('#popMonthlyChargesPestControl').text("$" + formatMoney(response.model.PestAmt));
            var popMCTRecycle = response.model.TrashAmt;
            $('#popMonthlyChargesTrashRecycle').text("$" + formatMoney(response.model.TrashAmt));
            var popMCCBilling = response.model.ConvergentAmt;
            $('#popMonthlyChargesConvergentBilling').text("$" + formatMoney(response.model.ConvergentAmt));
            var popMonthlyChargessubtotals2 = parseFloat((parseFloat(popMCPControl) + parseFloat(popMCTRecycle) + parseFloat(popMCCBilling))).toFixed(2);
            $('#popMonthlyChargesSubtotal2').text("$" + formatMoney(popMonthlyChargessubtotals2));
            var popMonthlyChargesTotal = parseFloat(parseFloat(popMonthlyChargessubtotals1) + parseFloat(popMonthlyChargessubtotals2)).toFixed(2);
            $('#popMonthlyChargesTotalMonthlyCharges').text("$" + formatMoney(popMonthlyChargesTotal));

            $("#hndShowPropertyDetails").val(1);
            $("#popModelCompare").modal("hide");
            $("#popUnitDet").addClass("hidden");
            $("#popFloorCoordinate").addClass("hidden");
            $("#lblUnitNo").text("#" + response.model.UnitNo);
            $("#lblUnitTitle").text("#" + response.model.UnitNo);
            $("#lblUnitTitle2").text("#" + response.model.UnitNo);
            $("#lblFNLPreparedFor").text("#" + response.model.UnitNo);
            // $("#parkUnit").text("#" + response.model.UnitNo);
            $("#storUnit").text("#" + response.model.UnitNo);
            $("#txtAvailableDate").val(response.model.AvailableDateText);
            $("#hndAvailableFloorPlanUID").val(uid);


            $("#unitdiv_" + uid).addClass("select-unit");
            $("#hndUID").val(uid);

            fillUnitParkingList();
            if ($("#unitdiv_" + uid).length) {
                $("#unitdiv_" + uid)[0].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });

            }

            $("#lblRent").text(formatMoney(response.model.Current_Rent));
            $("#lblArea").text(response.model.Area);
            $("#lblBed").text(response.model.Bedroom);
            $("#lblBath").text(response.model.Bathroom);
            $("#lblHall").text(response.model.Hall);
            $("#lblDeposit").text(formatMoney(response.model.Deposit));
            $("#lblLease").text(response.model.Leased);
            $("#lblLease2").text(response.model.Leased);
            $("#lblRent22").text("$" + response.model.Current_Rent);
            $("#lblArea22").text(response.model.Area);
            $("#lblBed22").text(response.model.Bedroom);
            $("#lblUnitModel").text("Model: #" + response.model.Building);
            $("#lblBath22").text(response.model.Bathroom);

            $("#lblOccupancy22").text((parseInt(response.model.Bedroom) * 2).toString());
            $("#lblOccupancy").text((parseInt(response.model.Bedroom) * 2).toString());

            $("#lblDeposit22").text("$" + response.model.Deposit);
            $("#lblLease22").text(response.model.Leased);

            $("#lblLease2").text(response.model.Leased);

            //$("#lblDeposit").text(response.model.Rent);
            $("#imgFloorPlan").attr("src", "/content/assets/img/plan/" + response.model.Building + ".jpg");
            $("#imgFloorPlan1").attr("src", "/content/assets/img/plan/" + response.model.Building + ".jpg");
            $("#imgFloorPlan2").attr("src", "/content/assets/img/plan/" + response.model.Building + "Det.jpg");
            $("#lblUnitNo1").text("Selected : Floor" + response.model.FloorNo + "- Unit " + response.model.UnitNo + "  ($" + response.model.Current_Rent + ")");
            $("#hndUID").val(uid);

            $("#txtRooms").val(response.model.Rooms);
            $("#txtBedroom").val(response.model.Bedroom);
            $("#txtBathroom").val(response.model.Bathroom);
            $("#txtHall").val(response.model.Hall);

            $("#txtPetDetails").val(response.model.PetDetails);
            $("#ddlFloorNo").val(response.model.FloorNo);
            $("#txtArea").val(response.model.Area);

            $("#txtCarpet_Color").val(response.model.Carpet_Color);
            $("#txtWall_Paint_Color").val(response.model.Wall_Paint_Color);

            $("#txtOccupancyDate").val(response.model.OccupancyDateText);
            //$("#chkPendingMoveIn").is(":checked") ? "1" : "0";
            $("#txtVacancyLoss_Date").val(response.model.VacancyLoss_DateText);
            $("#txtIntendedMoveIn_Date").val(response.model.IntendedMoveIn_Date);
            $("#txtIntendMoveOutDate").val(response.model.IntendMoveOutDate);
            $("#txtActualMoveInDate").val(response.model.ActualMoveInDateText);

            $("#lbldeposit1").text(formatMoney(parseFloat(response.model.Deposit).toFixed(2)));
            $("#lbdepo6").text(parseFloat(response.model.Deposit).toFixed(2));

            $("#lblFMRent").text(formatMoney(parseFloat(response.model.Current_Rent).toFixed(2)));

            totalAmt = (parseFloat(response.model.Current_Rent) + parseFloat(unformatText($("#lblAdditionalParking").text())) + parseFloat(unformatText($("#lblStorageUnit").text())) + parseFloat(unformatText($("#lblTrashAmt").text())) + parseFloat($("#lblPestAmt").text()) + parseFloat($("#lblConvergentAmt").text()) + parseFloat(unformatText($("#lblPetFee").text()))).toFixed(2);
            $("#lbltotalAmount").text(formatMoney(totalAmt));

            //Amit's Work for final Quotation form 15-10
            $("#lblFNLUnit").text("#" + response.model.UnitNo);
            $("#lblFNLModel").text(response.model.Building);
            $("#lblFNLModel1").text(response.model.Building);
            //$("#lblFNLTerm").text(response.model.Leased);
            $("#lblMonthly_MonthlyCharge").text("$" + formatMoney(response.model.Current_Rent.toFixed(2)));
            $("#lblProrated_MonthlyCharge").text("$" + formatMoney(parseFloat(parseFloat(response.model.Current_Rent) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
            $("#lblMonthly_MonthlyCharge1").text(formatMoney(response.model.Current_Rent.toFixed(2)));
            $("#lblProrated_MonthlyCharge1").text(formatMoney(parseFloat(parseFloat(response.model.Current_Rent) / parseFloat(numberOfDays) * remainingday).toFixed(2)));

            $("#lblRFPMonthlyCharges").text(formatMoney(response.model.Current_Rent.toFixed(2)));

            $("#fdepo").text("$" + (response.model.Deposit).toFixed(2));
            $("#lbdepo6").text((response.model.Deposit).toFixed(2));

            $("#lblMonthly_TotalRent").text("$" + formatMoney(totalAmt));
            $("#lblProrated_TotalRent").text("$" + formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
            $("#lblProratedRent").text(formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
            $("#lblProratedRent6").text(formatMoney(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday).toFixed(2)));

            var rfpMonthlyCharge = unformatText($("#lblRFPMonthlyCharges").text());
            var rfpParkingCharge = $("#lblRFPAdditionalParking").text();
            var rfpStorageCharge = $("#lblRFPStorageUnit").text();
            var rfpPetcharge = $("#lblRFPPetRent").text();

            var rfpTotalRentCharge = parseFloat(rfpMonthlyCharge, 10) + parseFloat(rfpParkingCharge, 10) + parseFloat(rfpStorageCharge, 10) + parseFloat(rfpPetcharge, 10);
            //alert(calTotalRentChargefpetd
            //$("#lblRFPTotalMonthlyPayment").text((parseFloat($("#lblRFPMonthlyCharges").text())) + (parseFloat($("#lblRFPAdditionalParking").text())) + (parseFloat($("#lblRFPStorageUnit").text())) + (parseFloat($("#lblRFPPetRent").text())));

            $("#ftotal").text(formatMoney((parseFloat(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday), 10) + parseFloat(response.model.Deposit, 10) + parseFloat(unformatText($("#fpetd").text()), 10) + parseFloat(unformatText($("#lblVehicleFees").text()), 10) + + parseFloat($("#lblPetDNAAmt").text(), 10)).toFixed(2)));

            $("#lbtotdueatmov6").text(formatMoney((parseFloat(parseFloat(parseFloat(totalAmt) / parseFloat(numberOfDays) * remainingday), 10) + parseFloat(response.model.Deposit, 10) + parseFloat(unformatText($("#fpetd").text()), 10) + parseFloat(unformatText($("#lblVehicleFees").text()), 10) + parseFloat($("#lblPetDNAAmt").text(), 10)).toFixed(2)));

            //$("#lblRFPTotalMonthlyPayment").text(formatMoney((parseFloat(unformatText($("#lblRFPMonthlyCharges").text()))) + (parseFloat($("#lblRFPAdditionalParking").text())) + (parseFloat($("#lblRFPStorageUnit").text())) + (parseFloat($("#lblRFPPetRent").text())) + (parseFloat($("#lblRFPTrashRecycling").text())) + (parseFloat($("#lblRFPPestControl").text())) + (parseFloat($("#lblRFPConvergentbillingfee").text()))));
            $("#lblRFPTotalMonthlyPayment").text(formatMoney(parseFloat(unformatText($("#lblRFPMonthlyCharges").text(), 10)) + (parseFloat($("#lblRFPAdditionalParking").text().replace('$', ''))) + (parseFloat($("#lblRFPStorageUnit").text().replace('$', ''))) + (parseFloat($("#lblRFPPetRent").text().replace('$', ''))) + (parseFloat($("#lblRFPTrashRecycling").text().replace('$', ''))) + (parseFloat($("#lblRFPPestControl").text().replace('$', ''))) + (parseFloat($("#lblRFPConvergentbillingfee").text().replace('$', '')))));

            $("#lblProrated_TrashAmt").text("$" + parseFloat(parseFloat($("#lblTrash").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_TrashAmt1").text(parseFloat(parseFloat($("#lblTrash").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_PestAmt").text("$" + parseFloat(parseFloat($("#lblPestControl").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_PestAmt1").text(parseFloat(parseFloat($("#lblPestControl").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_ConvergentAmt").text("$" + parseFloat(parseFloat($("#lblConvergentAmt").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));
            $("#lblProrated_ConvergentAmt1").text(parseFloat(parseFloat($("#lblConvergentAmt").text()) / parseFloat(numberOfDays) * remainingday).toFixed(2));

            $("#lblRent2").text((parseFloat(response.model.Current_Rent)).toFixed(2));
            $("#txtModal").text(response.model.Building);
            $("#lblArea1").text(response.model.Area);
            $("#lblBed1").text(response.model.Bedroom);
            $("#lblBath1").text(response.model.Bathroom);
            $("#lblHall1").text(response.model.Hall);
            $("#lblDeposit1").text(formatMoney(response.model.Deposit));
            //$("#lblLease3").text(response.model.Leased);
            //$("#lblLease4").text(response.model.Leased);
            $("#imgFloorPlanSumm").attr("src", "/content/assets/img/plan/" + response.model.Building + ".jpg");
            $("#lbldeposit2").text(parseFloat(response.model.Deposit).toFixed(2));
            $("#lblFMRent1").text(parseFloat(response.model.Current_Rent).toFixed(2));
            $("#lblUnitTitle3").text("#" + response.model.UnitNo);
            //$("#lblLeaseStartDate").text(response.model.AvailableDateText);
            //$("#lblLeaseStartDate").text($("#hndsummaryDesireMoveIn").val());
            $("#lblSubtotalsumm").text((parseFloat(response.model.Current_Rent) + parseFloat(unformatText($("#lblTrashAmt").text())) + parseFloat(unformatText($("#lblPestAmt").text())) + parseFloat(unformatText($("#lblConvergentAmt").text()))).toFixed(2));
            $("#lbltotalAmountSumm").text((parseFloat(response.model.Current_Rent) + parseFloat(unformatText($("#lblTrashAmt").text())) + parseFloat(unformatText($("#lblPestAmt").text())) + parseFloat(unformatText($("#lblConvergentAmt").text()))).toFixed(2));
            localStorage.setItem("floorfromplan", response.model.FloorNo);
            $("#hndFloorNo").val(response.model.FloorNo);
            $("#hndBedRoom").val(response.model.Bedroom);
            $("#hndBuilding").val(response.model.Building);

            $("#lblMonthly_TotalRentSp").text("$" + (formatMoney(totalAmt)));
            $("#lblAp32").text("#" + response.model.UnitNo);
            $("#lblArea32").text("Sq.Ft. " + response.model.Area);
            $("#lblBed32").text(response.model.Bedroom);
            $("#lblUnitModel3").text(response.model.Building);
            $("#lblBath32").text(response.model.Bathroom);
            $("#lblDeposit3").text("$" + (formatMoney(response.model.Deposit)));

            showFloorPlanApplicant(response.model.FloorNo, response.model.Bedroom, response.model.Building);
            $("#popAvailableFloorPlanDetailss").modal('hide');
            $("#divLoader").hide();
            $('#divPriceTable').removeClass('hidden');
            $('#divSelectUnit').addClass('hidden');
        }
    });
}

function showPopAvailableFloorPlan(id) {
   $("#hndAvailableFloorPlanUID").val(id);
    getPropertyUnitDetails(id);
    $('#popAvailableFloorPlanDetailss').modal('show');
}
var printMonthlySummary = function () {
    $("#divLoader").show();
    var modelImage = $("#popMonthlyChargesModel").text();
    var modelName = $("#popMonthlyChargesModel").text();
    var unitNo = $("#popMonthlyChargesUnit").text();
    var leaseTerm = $("#popMonthlyChargesLeaseTerm").text();
    var moveInDate = $("#popMonthlyChargesDesMoveIn").text();
    var bedrooms = $("#popMonthlyChargesBedrooms").text();
    var bathrooms = $("#popMonthlyChargesBathrooms").text();
    var sqFt = $("#popMonthlyChargesArea").text();
    var occupancy = $("#popMonthlyChargesOccupancy").text();
    var deposit = $("#popMonthlyChargesDeposit").text();
    var baseRent = $("#popMonthlyChargesBaseRent").text();
    var premium = $('#popMonthlyChargesPremium').text();
    var promotion = $('#popMonthlyChargesPropmotion').text();
    var subtotal = $('#popMonthlyChargesSubtotal1').text();
    var pestControl = $('#popMonthlyChargesPestControl').text();
    var trashRecycle = $('#popMonthlyChargesTrashRecycle').text();
    var convergentBillingFee = $('#popMonthlyChargesConvergentBilling').text();
    var additionalSubtotal = $('#popMonthlyChargesSubtotal2').text();
    var totalMonthlyCharges = $('#popMonthlyChargesTotalMonthlyCharges').text();
    var model = {
        ModelImage: modelImage,
        ModelName: modelName,
        UnitNo: unitNo,
        LeaseTerm: leaseTerm,
        MoveInDate: moveInDate,
        Bedrooms: bedrooms,
        Bathrooms: bathrooms,
        SqFt: sqFt,
        Occupancy: occupancy,
        Deposit: deposit,
        BaseRent: baseRent,
        Premium: premium,
        Promotion: promotion,
        Subtotal: subtotal,
        PestControl: pestControl,
        TrashRecycle: trashRecycle,
        ConvergentBillingFee: convergentBillingFee,
        AdditionalSubtotal: additionalSubtotal,
        TotalMonthlyCharges: totalMonthlyCharges
    };
    $.ajax({
        url: '/ApplyNow/PrintMonthlySummary',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        success: function (response) {
            $("#divLoader").hide();
            $("#ifrmMonthlySummary").attr("src", response.filename);
            setTimeout(function () {
                $("#ifrmMonthlySummary").get(0).contentWindow.print();
            }, 3000);
        }
    });
};
var saveToDiskPDF = function (filePath, fileName) {
    var saveUrl = filePath;
    saveUrl = webURL() + saveUrl;
    var downloadFileName = fileName;
    var hyperlink = document.createElement('a');
    hyperlink.href = saveUrl;
    hyperlink.target = '_blank';
    hyperlink.download = downloadFileName;
    (document.body || document.documentElement).appendChild(hyperlink);
    hyperlink.onclick = function () {
        (document.body || document.documentElement).removeChild(hyperlink);
    };
    var mouseEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });
    hyperlink.dispatchEvent(mouseEvent);
    if (!navigator.mozGetUserMedia) { 
        window.URL.revokeObjectURL(hyperlink.href);
    }
}


//Sachin Mahore 08 June 2020
var getBankCCLists = function () {
    $("#divLoader").show();
    var model = {
        ApplicantID: $("#hndApplicantID").val(),
    }
    $.ajax({
        url: "/ApplyNow/GetBankCCList",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        async:false,
        success: function (response) { $("#divLoader").show();}
    }).done(function (response) {
        $("#divLoader").hide();
        $("#tblBankCC>tbody").empty();
        $.each(response.model, function (elementType, elementValue) {
            var html = "<tr id='tr_" + elementValue.ID + "' data-value='" + elementValue.ID + "'>";
            html += "<td>" + elementValue.PaymentMethodString + "</td>";
            html += "<td>" + elementValue.Name_On_Card + "</td>";
            html += "<td><input style='background: transparent; margin-right:10px' type='radio' name='rdpay' onclick='selectPay(" + elementValue.ID + ")'></a>";
            html += "</tr>";
            $("#tblBankCC>tbody").append(html);
        });
    });
}
function savePayNewEx() {
    if ($("#hndNeEx").val() == 1) {
        if ($("#hndFinalPaybutton").val() == 1) {
            saveNewPaymentFinal();
        } else {
            saveNewPayment();
        }

    } else if ($("#hndNeEx").val() == 2) {

        if ($("#hndFinalPaybutton").val() == 1) {
            saveListPaymentFinal();
        } else {
            saveListPayment();
        }
    }
}
function selectPay(paid) {
    $("#hndPAID").val(paid);
}
function saveListPayment() {
    if ($("#chkTermsAndCondition2").is(':unchecked')) {
        $("#divLoader").hide();
        $.alert({
            title: "",
            content: "Please accept Terms & Condition </br>",
            type: 'red'
        });
        return;
    }
    $("#divLoader").show();
    var msg = "";
    if ($("#hndPAID").val() == 0)
    {
        $("#divLoader").hide();
        $.alert({
            title: "",
            content: "Please Select Payment Account</br>",
            type: 'red'
        });
        return;
    }
    if ($("#txtCVVList").val() == "") {
        $("#divLoader").hide();
        $.alert({
            title: "",
            content: "Please Enter CVV / Routing Number</br>",
            type: 'red'
        });
        return;
    }

        
    var propertyId = $("#hndUID").val();       
    var prospectID = $("#hdnOPId").val();
    var amounttoPay = $("#sppayFees2").text();
    var description = $("#lblpopcctitle").text();
    var cvvroutingNumber = $("#txtCVVList").val();
    
    var model = {
        PID: propertyId,       
        CCVNumber: cvvroutingNumber,
        Charge_Amount: amounttoPay,
        ProspectID: prospectID,
        Description: description, 
        AID: $("#hndApplicantID").val(),
        FromAcc: $("#hndFromAcc").val(),
        PAID: $("#hndPAID").val(),
    };

    $.alert({
        title: "",
        content: "You have chosen to pay $" + amounttoPay + " plus a $" + parseFloat(getProcessingFees()).toFixed(2) + " processing fee, your total will be $" + parseFloat(parseFloat(amounttoPay) + parseFloat(getProcessingFees())).toFixed(2) + ". Do you want to Pay Now?",
        type: 'blue',
        buttons: {
            yes: {
                text: 'Yes',
                action: function (yes) {
                    $.ajax({
                        url: "/ApplyNow/saveListPayment/",
                        type: "post",
                        contentType: "application/json utf-8",
                        data: JSON.stringify(model),
                        dataType: "JSON",
                        success: function (response) {
                            if (response.Msg != "") {
                                if (response.Msg == "1") {
                                    $("#ResponseMsg2").html("Payment successfull");
                                    if (parseInt($("#hndFromAcc").val()) == 4) {
                                        $("#divAppWarning").addClass("hidden");
                                        $("#btnnextAppinfo").removeClass("hidden");
                                        $("#hndCreditPaid").val(1);
                                    }
                                    getApplicantListsPrimary();
                                    getTransationLists($("#hdnUserId").val());
                                    $("#popCCPay").modal("hide");
                                } else {
                                    $("#ResponseMsg2").html("Payment failed");
                                }
                            }
                        }
                    });
                }
            },
            no: {
                text: 'No',
                action: function (no) {
                    $("#divLoader").hide();
                }
            }
        }
    });
}
function saveListPaymentFinal() {
    if ($("#chkTermsAndCondition2").is(':unchecked')) {
        $("#divLoader").hide();
        $.alert({
            title: "",
            content: "Please accept Terms & Condition </br>",
            type: 'red'
        });
        return;
    }
    $("#divLoader").show();
    var msg = "";
    if ($("#hndPAID").val() == 0) {
        $("#divLoader").hide();
        $.alert({
            title: "",
            content: "Please Select Payment Account</br>",
            type: 'red'
        });
        return;
    }
    if ($("#txtCVVList").val() == "") {
        $("#divLoader").hide();
        $.alert({
            title: "",
            content: "Please Enter CVV / Routing Number</br>",
            type: 'red'
        });
        return;
    }


    var propertyId = $("#hndUID").val();
    var prospectID = $("#hdnOPId").val();
    var amounttoPay = unformatText($("#sppayFees2").text());
    var description = $("#lblpopcctitle").text();
    var cvvroutingNumber = $("#txtCVVList").val();

    var model = {
        PID: propertyId,
        CCVNumber: cvvroutingNumber,
        Charge_Amount: amounttoPay,
        ProspectID: prospectID,
        Description: description,
        AID: $("#hndApplicantID").val(),
        FromAcc: $("#hndFromAcc").val(),
        PAID: $("#hndPAID").val(),

        lstApp: addApplicntArray,
    };

    $.alert({
        title: "",
        content: "You have chosen to pay $" + amounttoPay + " plus a $" + parseFloat(getProcessingFees()).toFixed(2) + " processing fee, your total will be $" + parseFloat(parseFloat(amounttoPay) + parseFloat(getProcessingFees())).toFixed(2) + ". Do you want to Pay Now?",
        type: 'blue',
        buttons: {
            yes: {
                text: 'Yes',
                action: function (yes) {
                    $.ajax({
                        url: "/ApplyNow/saveListPaymentFinalStep/",
                        type: "post",
                        contentType: "application/json utf-8",
                        data: JSON.stringify(model),
                        dataType: "JSON",
                        success: function (response) {
                            if (response.Msg != "") {
                                if (response.Msg == "1") {
                                    $("#ResponseMsg2").html("Payment successfull");
                                    if (parseInt($("#hndFromAcc").val()) == 4) {
                                        $("#divAppWarning").addClass("hidden");
                                        $("#btnnextAppinfo").removeClass("hidden");
                                        $("#hndCreditPaid").val(1);
                                    }
                                    getApplicantListsPrimary();
                                    getTransationLists($("#hdnUserId").val());
                                    $("#popCCPay").modal("hide");
                                } else {
                                    $("#ResponseMsg2").html("Payment failed");
                                }
                            }
                        }
                    });
                }
            },
            no: {
                text: 'No',
                action: function (no) {
                    $("#divLoader").hide();
                }
            }
        }
    });
}
function MaskCardNumber(number) {
    var cNumber = '';
    if (number.length > 4) {
        cNumber = "*".repeat(number.length - 4) + number.substr(number.length - 4, 4);
    }
    return cNumber;
};

var ddlAvailableFloorPlanLeaseTermOnChange = function () {
    $('#ddlAvailableFloorPlanLeaseTerm').on('change', function () {
        var value = $('#ddlAvailableFloorPlanLeaseTerm').find(':selected').attr('data-value');
        $('#lblAvailableFloorPlanStartingPrice').text(formatMoney(value));
    });
}

/*SOHAN 12062020 START */

var getPropertyFloarListRebind = function (modelname, filldata) {
    $("#divLoader").show();
    $("#imgFloorCoordinate").attr("src", "");
    $("#imgFloorCoordinateDiv").empty();
    $('#popUnitPlan').empty();
    var maxrent = 0;
    if ($("#txtMaxRent").val() == "0") {
        maxrent = 100000;
    }
    else {
        maxrent = $("#txtMaxRent").val();
    }

    var bedroom = 0;
    if (!$("#ddlRoom").val()) {
        bedroom = 0;
    }
    else {
        bedroom = $("#ddlRoom").val();
    }
    var availdate = $("#txtDate").val();
    var leasetermid = $("#hndLeaseTermID").val();

    var prospectid = $("#hdnOPId").val();

    var model = { PID: 8, AvailableDate: availdate, Bedroom: bedroom, MaxRent: maxrent, ModelName: modelname, ProspectId: prospectid, LeaseTermID: leasetermid };

    $.ajax({
        url: "/Property/GetFloorListRebind/",
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        async: false,
        success: function (response) { $("#divLoader").show(); }
    }).done(function (response) {
        $("#divLoader").hide();
        if (response != null) {
            $("#floorImgdiv").empty();

            var html = "";

            $.each(response, function (elementType, value) {
                html += "<area id='fa_" + value.FloorID + "' data-aval=" + value.IsAvail + " data-floorid=" + value.FloorID + " shape='poly' class='tooltip buildplan' href='javascript:void(0);' coords=" + value.Coordinates + " onclick= 'getPropertyUnitListByFloor(" + value.FloorID + ")'/>";
                html += "<div id='dfa_" + value.FloorID + "' class='hidden divtooltip'>";
                html += "</div>";
                $("#floorImgdiv").append(html);
            });

            $('#popUnitPlan').empty();
            $("#apartimg_2").maphilight();
            $('area').click(function () {
                $("#hndSelectedFloor").val($(this).attr("id"));
                $("#hndSelectedAval").val($(this).attr("data-aval"));
                var floorid = $(this).attr("data-floorid");
                $("#dfa_" + floorid).addClass("hidden");
                var isAval = $(this).attr("data-aval");
                var color = "ff6347";
                if (isAval == 1) {
                    color = "0af11c";
                }
                else if (isAval == 2) {
                    color = "ffff00";
                }
                $('.active_area').data('maphilight', { alwaysOn: false }).trigger('alwaysOn.maphilight');
                $(this).addClass('active_area').data('maphilight', { alwaysOn: true, fillColor: color, strokeColor: color }).trigger('alwaysOn.maphilight');
            });
            $("area").mouseout(function (e) {
                $(".divtooltip").addClass("hidden");
            });

            $("area").mouseover(function (e) {
                var offset = $(this).offset();
                var X = (e.pageX - offset.left);
                var Y = (e.pageY - offset.top);

                // console.log("X:" + X + ", Y:" + Y);

                if (Y < 0) {
                    Y = Y + 200;
                }
                else {
                    Y = Y - 75;
                }

                var floorid = $(this).attr("data-floorid");
                $(".divtooltip").addClass("hidden");
                $("#dfa_" + floorid).removeClass("hidden");

                $("#dfa_" + floorid).css({ top: Y, left: X, position: 'absolute' });

                var isAval = $(this).attr("data-aval");
                var color = "ff6347";
                if (isAval == 1) {
                    color = "0af11c";
                }
                else if (isAval == 2) {
                    color = "ffff00";
                }
                $(this).addClass('active_mouse').data('maphilight', { alwaysOn: true, fillColor: color, strokeColor: color }).trigger('alwaysOn.maphilight');
                if ($("#hndSelectedFloor").val()) {
                    var cont = $("#hndSelectedFloor").val();
                    var isAvalFill = $("#hndSelectedAval").val();
                    var colorfill = "ff6347";
                    if (isAvalFill == 1) {
                        colorfill = "0af11c";
                    }
                    else if (isAvalFill == 2) {
                        colorfill = "ffff00";
                    }
                    $("#" + cont).addClass('active_area').data('maphilight', { alwaysOn: true, fillColor: colorfill, strokeColor: colorfill }).trigger('alwaysOn.maphilight');
                }
            });
            $(".buildplan").mouseout(function () {
                $(".buildplan").removeClass('active_mouse').data('maphilight', { alwaysOn: false }).trigger('alwaysOn.maphilight');

                if ($("#hndSelectedFloor").val()) {
                    var cont = $("#hndSelectedFloor").val();
                    var isAval = $("#hndSelectedAval").val();
                    var color = "ff6347";
                    if (isAval == 1) {
                        color = "0af11c";
                    }
                    else if (isAval == 2) {
                        color = "ffff00";
                    }
                    $("#" + cont).addClass('active_area').data('maphilight', { alwaysOn: true, fillColor: color, strokeColor: color }).trigger('alwaysOn.maphilight');
                }
            });
        }
    });
}

/*SOHAN 12062020 END */

var getStaticApplicantValues = function () {
    var id = $("#hdnUserId").val();
    var uid = $("#hndUID").val();
    var model = { Id: id, UID: uid };

    $.ajax({
        url: '/ApplyNow/GetStaticApplicantValues',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        async: false,
        success: function (response) {
            $("#divLoader").show();
        }
    }).done(function (response) {
        /*Select Option Starts*/
        $("#lblArea").text(response.model.AreaSqft);
        $("#lblLease").text(response.model.LeaseMonths);
        $("#lblBed").text(response.model.Bedroom);
        $("#lblBath").text(response.model.Bathroom);
        $("#lblDeposit").text(formatMoney(response.model.Deposit));
        //console.log("label: " +$("#lblDeposit").text());
        $("#lblRent").text(formatMoney(response.model.Rent));
        $("#lblLease2").text(response.model.LeaseMonths);
        $("#lbldeposit1").text(formatMoney(response.model.Deposit));
        $("#lblPetDeposit").text(formatMoney(response.model.PetDeposit));
        $("#lblPetDNAAmt").text(formatMoney(response.model.PetDNAAmt));
        $("#lblFMRent").text(formatMoney(unformatText($("#lblRent").text())));
        $("#lblRent33").text(formatMoney(unformatText($("#lblRent").text())));
        $("#lblAdditionalParking").text(formatMoney(response.model.AdditionalParkingAmt));
        $("#lblStorageUnit").text(formatMoney(response.model.StorageAmt));
        $("#lblPetFee").text(formatMoney(response.model.PetPlaceAmt));
        $("#lblTrashAmt").text(formatMoney(response.model.TrashAmt));
        $("#lblPestAmt").text(formatMoney(response.model.PestAmt));
        $("#lblConvergentAmt").text(formatMoney(response.model.ConvergentAmt));
        var totalAmt = (parseFloat(response.model.Rent) + parseFloat(unformatText($("#lblAdditionalParking").text())) + parseFloat(unformatText($("#lblStorageUnit").text())) + parseFloat(unformatText($("#lblTrashAmt").text())) + parseFloat($("#lblPestAmt").text()) + parseFloat($("#lblConvergentAmt").text()) + parseFloat(unformatText($("#lblPetFee").text()))).toFixed(2);
        $("#lbltotalAmount").text(formatMoney(totalAmt));
        /*Select Option Ends*/
        /*Quotation Starts*/
        $("#lblFNLQuoteDate").text(response.model.QuoteStartDate);
        $("#lblFNLQuoteExpires").text(response.model.QuoteEndDate);
        $("#lblFNLPhone").text(formatPhoneFax(response.model.Phone));
        $("#lblFNLEmail").text(response.model.Email);
        $("#lblFNLTerm").text(response.model.LeaseMonths);
        $("#lblFNLResidentName1").text(response.model.ResidentName);
        $("#lblFNLDesiredMoveIn").text(response.model.MoveInDateString);
        $("#lblFNLUnit").text("#" + response.model.UnitName);
        $("#lblFNLModel").text(response.model.Building);
        $("#fdepo").text("$" + $("#lbldeposit1").text());
        $("#lblMonthly_MonthlyCharge").text("$" + $("#lblRent").text());
        // console.log(unformatText($("#lblRent").text()))
        $("#lblProrated_MonthlyCharge").text("$" + formatMoney(parseFloat(parseFloat(unformatText($("#lblRent").text())) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
        $("#spanTrashRecycle").text("$" + $("#lblTrashAmt").text());
        // $("#lblProrated_TrashAmt").text("$" + parseFloat($("#lblTrashAmt").text() / parseFloat(numberOfDays) * remainingday));
        $("#lblProrated_TrashAmt").text("$" + formatMoney(parseFloat(parseFloat(unformatText($("#lblTrashAmt").text())) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
        $("#spanPestControl").text("$" + $("#lblPestAmt").text());
        //$("#lblProrated_PestAmt").text("$" + parseFloat($("#lblPestAmt").text() / parseFloat(numberOfDays) * remainingday));
        $("#lblProrated_PestAmt").text("$" + formatMoney(parseFloat(parseFloat(unformatText($("#lblPestAmt").text())) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
        $("#spanConvergentAmt").text("$" + $("#lblConvergentAmt").text());
        //$("#lblProrated_ConvergentAmt").text("$" + parseFloat($("#lblConvergentAmt").text() / parseFloat(numberOfDays) * remainingday));
        $("#lblProrated_ConvergentAmt").text("$" + formatMoney(parseFloat(parseFloat(unformatText($("#lblConvergentAmt").text())) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
        $("#lblMonthly_AditionalParking").text("$" + $("#lblAdditionalParking").text());
        //$("#lblProrated_AditionalParking").text("$" + parseFloat($("#lblAdditionalParking").text() / parseFloat(numberOfDays) * remainingday));
        $("#lblProrated_AditionalParking").text("$" + formatMoney(parseFloat(parseFloat(unformatText($("#lblAdditionalParking").text())) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
        $("#lblMonthly_Storage").text("$" + $("#lblStorageUnit").text());
        //$("#lblProrated_Storage").text("$" + parseFloat($("#lblStorageUnit").text() / parseFloat(numberOfDays) * remainingday));
        $("#lblProrated_Storage").text("$" + formatMoney(parseFloat(parseFloat(unformatText($("#lblStorageUnit").text())) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
        $("#lblMonthly_PetRent").text("$" + $("#lblPetFee").text());
        //$("#lblProrated_PetRent").text("$" + parseFloat($("#lblPetFee").text() / parseFloat(numberOfDays) * remainingday));
        $("#lblProrated_PetRent").text("$" + formatMoney(parseFloat(parseFloat(unformatText($("#lblPetFee").text())) / parseFloat(numberOfDays) * remainingday).toFixed(2)));
        var totalRentAmt = formatMoney(parseFloat(unformatText($("#lblMonthly_MonthlyCharge").text().replace('$', ''))) + parseFloat($("#spanTrashRecycle").text().replace('$', '')) + parseFloat($("#spanPestControl").text().replace('$', '')) + parseFloat($("#spanConvergentAmt").text().replace('$', '')) + parseFloat($("#lblMonthly_AditionalParking").text().replace('$', '')) + parseFloat($("#lblMonthly_Storage").text().replace('$', '')) + parseFloat($("#lblMonthly_PetRent").text().replace('$', '')));
        var totalRentAmt_Prorated = formatMoney(parseFloat(unformatText($("#lblProrated_MonthlyCharge").text().replace('$', ''))) + parseFloat($("#lblProrated_TrashAmt").text().replace('$', '')) + parseFloat($("#lblProrated_PestAmt").text().replace('$', '')) + parseFloat($("#lblProrated_ConvergentAmt").text().replace('$', '')) + parseFloat($("#lblProrated_AditionalParking").text().replace('$', '')) + parseFloat($("#lblProrated_Storage").text().replace('$', '')) + parseFloat($("#lblProrated_PetRent").text().replace('$', '')));

        $("#lblMonthly_TotalRent").text(totalRentAmt);
        $("#lblProrated_TotalRent").text(totalRentAmt_Prorated);

        /*Quotation Ends*/
        /*Responsibility left block Start*/
        $("#lblVehicleFees").text(formatMoney(response.model.VehicleRegistration));
        $("#lblVehicleFees1").text(formatMoney(response.model.VehicleRegistration));

        $("#lbdepo6").text(formatMoney(response.model.Deposit));
        // $("#lbdepo6").text(formatMoney(response.model.Deposit));
        $("#lbpetd6").text(formatMoney(response.model.PetDeposit));
        $("#lbpetdna6").text(formatMoney(response.model.PetDNAAmt));
        $("#lblProratedRent6").text(formatMoney(response.model.Prorated_Rent));
        $("#lbtotdueatmov6").text(formatMoney(response.model.MoveInCharges));

        $("#lblRFPMonthlyCharges").text(formatMoney(response.model.Rent));
        $("#lblRFPAdditionalParking").text(formatMoney(response.model.AdditionalParkingAmt));
        $("#lblRFPStorageUnit").text(formatMoney(response.model.StorageAmt));
        $("#lblRFPPetRent").text(formatMoney(response.model.PetPlaceAmt));
        $("#lblRFPTrashRecycling").text(formatMoney(response.model.TrashAmt));
        $("#lblRFPPestControl").text(formatMoney(response.model.PestAmt));
        $("#lblRFPConvergentbillingfee").text(formatMoney(response.model.ConvergentAmt));
        $("#lblRFPTotalMonthlyPayment").text(formatMoney(response.model.MonthlyCharges));

        $("#divLoader").hide();
        });
};
var checkResponsibilityApplicant = function () {
    var grandPercentage = localStorage.getItem("percentage");
    var grandPercentageMo = localStorage.getItem("percentageMo");
    var grandPercentageAF = localStorage.getItem("percentageAF");

    if (grandPercentage != 100 || grandPercentageMo != 100 || grandPercentageAF != 100) {
        msg = "For Move In Charges and Monthly Payment and Administration Fee the total must equal 100% in order to continue.";
        $.alert({
            title: "",
            content: msg,
            type: 'red'
        });
        return;
    }
    else {
        $("#popResponsibilityContinue").modal("show");
    }
};
function saveNewPayment() {
    if ($("#chkTermsAndCondition2").is(':unchecked')) {
        $("#divLoader").hide();
        $.alert({
            title: "",
            content: "Please accept Terms & Condition </br>",
            type: 'red'
        });
        return;
    }
    $("#divLoader").show();
    var msg = "";
    if ($("#hndTransMethod2").val() == "0") {
        $("#divLoader").hide();
        $.alert({
            title: "",
            content: "Please Select Payment Method</br>",
            type: 'red'
        });
        return;
    }

    var paymentMethod = 2;
    var propertyId = 0;
    var nameonCard = "";
    var cardNumber = "";
    var cardMonth = 0;
    var cardYear = 0;
    var ccvNumber = "";
    var prospectID = 0;
    var amounttoPay = 0;
    var description = "";

    if ($("#hndTransMethod2").val() == "2") {
        paymentMethod = 2;
        propertyId = $("#hndUID").val();
        nameonCard = $("#txtNameonCard2").val();
        cardNumber = $("#txtCardNumber2").val();
        cardMonth = $("#ddlcardmonth2").val();
        cardYear = $("#ddlcardyear2").val();
        ccvNumber = $("#txtCCVNumber2").val();
        prospectID = $("#hdnOPId").val();
        amounttoPay = unformatText($("#sppayFees2").text());
        description = $("#lblpopcctitle").text();

        routingNumber = $("#txtRoutingNumber2").val();
        bankName = $("#txtBankName1").val();

        if (!nameonCard) {
            msg += "Please Enter Name on Card</br>";
        }
        if (cardNumber == "" || cardNumber.length != 16) {
            msg += "Please enter your 16 digit Card Number</br>";
        }
        if (cardMonth == "0") {
            msg += "Please enter Card Month</br>";
        }
        if (cardYear == "0") {
            msg += "Please enter Card Year</br>";
        }

        var GivenDate = '20' + cardYear + '-' + cardMonth + '-' + new Date().getDate();
        var CurrentDate = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

        GivenDate = new Date(GivenDate);
        CurrentDate = new Date(CurrentDate);

        if (GivenDate <= CurrentDate) {
            msg += "Your Credit Card Expired..</br>";
        }

        if (msg != "") {
            $("#divLoader").hide();
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
    } else {
        paymentMethod = 1;
        nameonCard = $("#txtAccountName2").val();
        cardNumber = $("#txtAccountNumber2").val();
        cardMonth = 0;
        cardYear = 0;
        ccvNumber = 0;
        routingNumber = $("#txtRoutingNumber2").val();
        bankName = $("#txtBankName2").val();
        amounttoPay = unformatText($("#sppayFees2").text());
        description = $("#lblpopcctitle").text();
        prospectID = $("#hdnOPId").val();
        propertyId = $("#hndUID").val();
        if (nameonCard == "") {
            msg += "Please Enter Account Name</br>";
        }
        if (cardNumber == "") {
            msg += "Please Enter Account Number</br>";
        }

        if (msg != "") {
            $("#divLoader").hide();
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
    }
    var model = {
        PID: propertyId,
        Name_On_Card: nameonCard,
        CardNumber: cardNumber,
        CardMonth: cardMonth,
        CardYear: cardYear,
        CCVNumber: ccvNumber,
        Charge_Amount: amounttoPay,
        Charge_Type: "4",
        ProspectID: prospectID,
        Description: description,
        GL_Trans_Description: description,
        RoutingNumber: routingNumber,
        BankName: bankName,
        PaymentMethod: paymentMethod,
        AID: $("#hndApplicantID").val(),
        FromAcc: $("#hndFromAcc").val(),
        IsSaveAcc: $("#chkSaveAcc").is(":checked") ? "1" : "0",
    };

    $.alert({
        title: "",
        content: "You have chosen to pay $" + amounttoPay + " plus a $" + parseFloat(getProcessingFees()).toFixed(2) + " processing fee, your total will be $" + parseFloat(parseFloat(amounttoPay) + parseFloat(getProcessingFees())).toFixed(2) + ". Do you want to Pay Now?",
        type: 'blue',
        buttons: {
            yes: {
                text: 'Yes',
                action: function (yes) {
                    $.ajax({
                        url: "/ApplyNow/SaveNewPayment/",
                        type: "post",
                        contentType: "application/json utf-8",
                        data: JSON.stringify(model),
                        dataType: "JSON",
                        async: false,
                        success: function (response) { $("#divLoader").show(); }
                    }).done(function (response) {
                            if (response.Msg != "") {
                                if (response.Msg == "1") {
                                    $("#ResponseMsg2").html("Payment successfull");
                                    if (parseInt($("#hndFromAcc").val()) == 4) {
                                        $("#divAppWarning").addClass("hidden");
                                        $("#btnnextAppinfo").removeClass("hidden");
                                        $("#hndCreditPaid").val(1);
                                    }
                                    getApplicantListsPrimary();
                                    $("#popCCPay").modal("hide");
                                } else {
                                    $("#ResponseMsg2").html("Payment failed");
                            }
                        } $("#divLoader").hide();
                        });
                }
            },
            no: {
                text: 'No',
                action: function (no) {
                    $("#divLoader").hide();
                }
            }
        }
    });
}
function saveNewPaymentFinal() {

    if ($("#chkTermsAndCondition2").is(':unchecked')) {
        $("#divLoader").hide();
        $.alert({
            title: "",
            content: "Please accept Terms & Condition </br>",
            type: 'red'
        });
        return;
    }
    $("#divLoader").show();
    var msg = "";
    if ($("#hndTransMethod2").val() == "0") {
        $("#divLoader").hide();
        $.alert({
            title: "",
            content: "Please Select Payment Method</br>",
            type: 'red'
        });
        return;
    }

    var paymentMethod = 2;
    var propertyId = 0;
    var nameonCard = "";
    var cardNumber = "";
    var cardMonth = 0;
    var cardYear = 0;
    var ccvNumber = "";
    var prospectID = 0;
    var amounttoPay = 0;
    var description = "";

    if ($("#hndTransMethod2").val() == "2") {
        paymentMethod = 2;
        propertyId = $("#hndUID").val();
        nameonCard = $("#txtNameonCard2").val();
        cardNumber = $("#txtCardNumber2").val();
        cardMonth = $("#ddlcardmonth2").val();
        cardYear = $("#ddlcardyear2").val();
        ccvNumber = $("#txtCCVNumber2").val();
        prospectID = $("#hdnOPId").val();
        amounttoPay = unformatText($("#sppayFees2").text());
        description = $("#lblpopcctitle").text();

        routingNumber = $("#txtRoutingNumber2").val();
        bankName = $("#txtBankName1").val();

        if (!nameonCard) {
            msg += "Please Enter Name on Card</br>";
        }
        if (cardNumber == "" || cardNumber.length != 16) {
            msg += "Please enter your 16 digit Card Number</br>";
        }
        if (cardMonth == "0") {
            msg += "Please enter Card Month</br>";
        }
        if (cardYear == "0") {
            msg += "Please enter Card Year</br>";
        }

        var GivenDate = '20' + cardYear + '-' + cardMonth + '-' + new Date().getDate();
        var CurrentDate = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

        GivenDate = new Date(GivenDate);
        CurrentDate = new Date(CurrentDate);

        if (GivenDate <= CurrentDate) {
            msg += "Your Credit Card Expired..</br>";
        }

        if (msg != "") {
            $("#divLoader").hide();
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
    } else {
        paymentMethod = 1;
        nameonCard = $("#txtAccountName2").val();
        cardNumber = $("#txtAccountNumber2").val();
        cardMonth = 0;
        cardYear = 0;
        ccvNumber = 0;
        routingNumber = $("#txtRoutingNumber2").val();
        bankName = $("#txtBankName2").val();
        amounttoPay = unformatText($("#sppayFees2").text());
        description = $("#lblpopcctitle").text();
        prospectID = $("#hdnOPId").val();
        propertyId = $("#hndUID").val();
        if (nameonCard == "") {
            msg += "Please Enter Account Name</br>";
        }
        if (cardNumber == "") {
            msg += "Please Enter Account Number</br>";
        }

        if (msg != "") {
            $("#divLoader").hide();
            $.alert({
                title: "",
                content: msg,
                type: 'red'
            });
            return;
        }
    }
    var model = {
        PID: propertyId,
        Name_On_Card: nameonCard,
        CardNumber: cardNumber,
        AccountNumber: cardNumber,
        CardMonth: cardMonth,
        CardYear: cardYear,
        CCVNumber: ccvNumber,
        Charge_Amount: amounttoPay,
        ProspectID: prospectID,
        Description: description,

        RoutingNumber: routingNumber,
        BankName: bankName,
        PaymentMethod: paymentMethod,
        AID: $("#hndApplicantID").val(),
        FromAcc: $("#hndFromAcc").val(),
        IsSaveAcc: $("#chkSaveAcc").is(":checked") ? "1" : "0",
        lstApp: addApplicntArray,
    };
    $.alert({
        title: "",
        content: "You have chosen to pay $" + amounttoPay + " plus a $" + parseFloat(getProcessingFees()).toFixed(2) + " processing fee, your total will be $" + parseFloat(parseFloat(amounttoPay) + parseFloat(getProcessingFees())).toFixed(2) + ". Do you want to Pay Now?",
        type: 'blue',
        buttons: {
            yes: {
                text: 'Yes',
                action: function (yes) {
                    $.ajax({
                        url: "/ApplyNow/SaveNewPaymentFinal/",
                        type: "post",
                        contentType: "application/json utf-8",
                        data: JSON.stringify(model),
                        dataType: "JSON",
                        async: false,
                        success: function (response) { $("#divLoader").show(); }
                    }).done(function (response) {
                            
                            if (response.Msg == "1") {
                                //$("#carddetails").addClass("hidden");
                                $(".payNext").removeAttr("disabled");
                                $("#ResponseMsg").html("Payment Successfull");
                                $.alert({
                                    title: "",
                                    content: "Payment Successfull",
                                    type: 'red'
                                });
                                getTransationLists($("#hdnUserId").val());
                                getApplicantListsPrimary();
                            } else {
                                $.alert({
                                    title: "",
                                    content: "Payment Failed",
                                    type: 'red'
                                });
                        } $("#divLoader").hide();
                        });
                }
            },
            no: {
                text: 'No',
                action: function (no) {
                    $("#divLoader").hide();
                }
            }
        }
    });

}

var createESignPolicyAndAgreement = function (appAgree) {
    $("#divLoader").show();
    var userid = $("#hndCurrentUserId").val();
    console.log(appAgree);
    if (appAgree) {
        $("#hdnAgreePoli").val(true);
    }
    else {
        $("#hdnAgreePoli").val(false);
    }
    var model = { uid: userid, AppAgree: appAgree };

    $.ajax({
        url: '/ApplyNow/CreateESignPolicyAgreement',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        async: false,
        success: function (response) { $("#divLoader").show(); }
    }).done(function (response) {
            //console.log(JSON.stringify(response));
            
            if (!response.DateSigned) {
                $("#modalAgreementPolicy").modal("show");
                $("#iframeAgreementPolicy").attr("src", "https://www-new.bluemoonforms.com/esignature/" + response.model);
                $("#divLoader").hide();
            }
            else {
                $("#divLoader").hide();
                $.alert({
                    title: "",
                    content: "You have already Signed. Please Download or Print",
                    type: 'blue'
                });
            }

            
        });
};
var checkEsignPolicyAgreementStatus = function () {
    $("#divLoader").show();
    var userid = $("#hndCurrentUserId").val();
    var appAgree = $("#hdnAgreePoli").val();
    var model = { uid: userid, AppAgree: appAgree };

    $.ajax({
        url: '/ApplyNow/CheckESignPolicyAgreementStatus',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        async: false,
        success: function (response) { $("#divLoader").show(); }
    }).done(function (response) {
        if (response.AllSigned == 1) {
            $("#policyStart").attr("disabled", false);
            $("#divLoader").hide();
        } else {
            $("#divLoader").hide();
            $("#policyStart").attr("disabled", true);
        }
            
    });
};
var getESignAgreePolicyDownloadData = function (appAgree) {
    $("#divLoader").show();
    var userid = $("#hndCurrentUserId").val();
    var model = { uid: userid, AppAgree: appAgree };
    var fileName = "";
    if (appAgree) {
        fileName = "Agreement";
    }
    else {
        fileName = "RulesAndPolicy"
    }
    $.ajax({
        url: '/ApplyNow/GetESignAgreePolicyDownloadData',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        async: false,
        success: function (response) { $("#divLoader").show(); }
    }).done(function (response) {
            //console.log(JSON.stringify(response));
            if (response.DateSigned != "") {
                saveToDiskPDF("/Content/assets/img/Document/AgreementRulePolicy_" + response.model + ".pdf", "Agreement.pdf");
                $("#divLoader").hide();
            }
            else {
                $("#divLoader").hide();
                $.alert({
                    title: "",
                    content: "Please Signed the document to Download",
                    type: 'blue'
                });
            } 
        });
};
var getESignAgreePolicyPrintData = function (appAgree) {
    $("#modalRentalQualificationPolicy").modal("hide");
    $("#modalRulesAndPolicy").modal("hide");
    $("#divLoader").show();
    var userid = $("#hndCurrentUserId").val();
    var model = { uid: userid, AppAgree: appAgree };
    var fileName = "";
    if (appAgree) {
        fileName = "Agreement";
    }
    else {
        fileName = "RulesAndPolicy"
    }
    $.ajax({
        url: '/ApplyNow/GetESignAgreePolicyDownloadData',
        type: "post",
        contentType: "application/json utf-8",
        data: JSON.stringify(model),
        dataType: "JSON",
        async: false,
        success: function (response) { $("#divLoader").show(); }
    }).done(function (response) {
            
            //console.log(JSON.stringify(response));
            if (response.DateSigned != "") {
                if (appAgree) {
                    $("#iframeRental").attr("src", webURL() + "/Content/assets/img/Document/AgreementRulePolicy_" + response.model + ".pdf");
                    $("#modalRentalQualificationPolicy").modal("show");
                    $("#divLoader").hide();
                } else {
                    $("#iframeRules").attr("src", webURL() + "/Content/assets/img/Document/AgreementRulePolicy_" + response.model + ".pdf");
                    $("#modalRulesAndPolicy").modal("show");
                    $("#divLoader").hide();
                }
            }
            else {

                $.alert({
                    title: "",
                    content: "Please Signed the document to Print",
                    type: 'blue'
                });
                $("#divLoader").hide();
            }
            
    });
};