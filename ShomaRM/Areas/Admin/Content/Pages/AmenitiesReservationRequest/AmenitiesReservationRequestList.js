﻿var goToEditReservationRequest = function () {
    var row = $('#tblReservationRequest tbody tr.pds-selected-row').closest('tr');
    var ID = $(row).attr("data-value");
    if (ID !== null) {
        window.location.href = "/Admin/Amenities/ARREdit/" + ID;
    }
};
var addNewReservationRequest = function () {
    window.location.href = "/Admin/Amenities/ARREdit/0";
};
var fillRPP_ReservationRequestList = function () {
    $("#ddlRPP_ReservationRequestList").empty();
    $("#ddlRPP_ReservationRequestList").append("<option value='25'>25</option>");
    $("#ddlRPP_ReservationRequestList").append("<option value='50'>50</option>");
    $("#ddlRPP_ReservationRequestList").append("<option value='75'>75</option>");
    $("#ddlRPP_ReservationRequestList").append("<option value='100'>100</option>");
    $("#ddlRPP_ReservationRequestList").on('change', function (evt, params) {
        var selected = $(this).val();
        buildPaganationReservationRequestList($("#hdnCurrentPage_FL").val());
    });
};
var buildPaganationReservationRequestList = function (pagenumber) {
    var model = {
        ToDate: $("#txtToDate").val(),
        FromDate: $("#txtFromDate").val(),
        PageNumber: 1,
        NumberOfRows: $("#ddlRPP_ReservationRequestList").val()
    };
    $.ajax({
        url: "/Tenant/AmenitiesRR/BuildPaganationReservationRequestList",
        method: "post",
        data: JSON.stringify(model),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if ($.trim(response.error) !== "") {
                alert(response.error);
            } else {
                if (response.NOP == 0) {
                    $('#divPagination_ReservationRequestList').addClass("hidden");
                }
                else {
                    $('#divPagination_ReservationRequestList').removeClass("hidden");
                    $('#ulPagination_ReservationRequestList').pagination('updateItems', response.NOP);
                    $('#ulPagination_ReservationRequestList').pagination('selectPage', 1);
                }
            }
        }
    });
};
var fillReservationRequestList = function (pagenumber) {
    var model = {
        ToDate: $("#txtToDate").val(),
        FromDate: $("#txtFromDate").val(),
        PageNumber: pagenumber,
        NumberOfRows: $("#ddlRPP_ReservationRequestList").val()
    };
    $.ajax({
        url: '/Tenant/AmenitiesRR/FillReservationRequestSearchGrid',
        method: "post",
        data: JSON.stringify(model),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if ($.trim(response.error) !== "") {
                //this.cancelChanges();
            } else {
                $("#tblReservationRequest>tbody").empty();
                $.each(response, function (elementType, elementValue) {
                    console.log(JSON.stringify(response));
                    var html = "<tr data-value=" + elementValue.ARID + " data-amenity=" + elementValue.AmenityID + ">";
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
$(document).ready(function () {
    fillRPP_ReservationRequestList();
    $('#ulPagination_ReservationRequestList').pagination({
        items: 0,
        currentPage: 1,
        displayedPages: 10,
        cssStyle: '',
        useAnchors: false,
        prevText: '&laquo;',
        nextText: '&raquo;',
        onInit: function () {
            $("#hdnCurrentPage_FL").val(1);
            buildPaganationReservationRequestList(1);
        },
        onPageClick: function (page, evt) {
            $("#hdnCurrentPage_FL").val(page);
            fillReservationRequestList(page);
        }
    });
    $('#tblReservationRequest tbody').on('click', 'tr', function () {
        $('#tblReservationRequest tr').removeClass("pds-selected-row");
        $(this).addClass("pds-selected-row");
    });
    $('#tblReservationRequest tbody').on('dblclick', 'tr', function () {
        goToEditReservationRequest();
    });
});
$(document).keypress(function (e) {
    if (e.which === 13) {
        buildPaganationReservationRequestList(1);
    }
});
