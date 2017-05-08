var currentURL = window.location.origin;
var modalKeys = [];
var modalVals = [];
var updateVals = [];

function getTableInfo(data) {

    var counter = 0;
    var counterB = 0;
    modalKeys = [];
    modalVals = [];

    $('#sqlTable > thead > tr').append("<th>Edit</th>");

    Object.keys(data[0]).forEach(function(key) {
        var value = data[key];
        console.log(key);

        $('#sqlTable > thead > tr').append("<th>" + key + "</th>");

        modalKeys.push(key);
        console.log('modalKeys: ' + modalKeys);

        counter++;
        console.log('Counter: ' + counter);

    });

    for (var i = 0; i < 50; i++) {

        Object.keys(data[i]).forEach(function(key) {
            var value = data[i][key];

            console.log(key + ':' + value);

            if (counterB % counter == 0) {
                $('#sqlTable > tbody > tr').last().append("<td><button class='btn btn-customC btn-xs editBtn' data-toggle='modal' data-target='#myModal'>Edit</button></td>");
            }

            $('#sqlTable > tbody > tr').last().append("<td class=" + "'" + key + "'" + ">" + value + "</td>");

            counterB++;
            if (counterB % counter == 0) {
                console.log('TR created!');

                $('#sqlTable > tbody').append("<tr></tr>");

            }

        });
    }

}

function rowsUpdate(data) {

    rowA = $('#rowsInput').val().trim();
    rowB = $('#rowsInputB').val().trim();

    tableName = $('#tablesDrop').val().trim();
    var counter = 0;
    var counterB = 0;
    var rowsDisp = parseFloat(rowB) - parseFloat(rowA) + 1;

    $('#panel').css("opacity", "1");

    $('#sqlQuery').val("SELECT * FROM " + tableName + " WHERE");

    $('#sqlTable > thead > tr').append("<th>Edit</th>");

    Object.keys(data[0]).forEach(function(key) {
        var value = data[key];
        console.log(key);

        $('#sqlTable > thead > tr').append("<th>" + key + "</th>");

        modalKeys.push(key);
        console.log('modalKeys: ' + modalKeys);

        counter++;
        console.log('Counter: ' + counter);

    });

    for (var i = 0; i < rowsDisp; i++) {

        Object.keys(data[i]).forEach(function(key) {
            var value = data[i][key];
            console.log(key + ':' + value);

            if (counterB % counter == 0) {
                $('#sqlTable > tbody > tr').last().append("<td><button class='btn btn-customC btn-xs editBtn' data-toggle='modal' data-target='#myModal'>Edit</button></td>");
            }

            $('#sqlTable > tbody > tr').last().append("<td class=" + "'" + key + "'" + ">" + value + "</td>");

            counterB++;
            if (counterB % counter == 0) {
                console.log('TR created!');

                $('#sqlTable > tbody').append("<tr></tr>");

            }

        });
    }

}


$.get(currentURL + "/tables", function(data) {

    console.log(data);
    //to connect to your database, edit the following line: data[i].Tables_in_" The name of your database "
    for (var i = 0; i < data.length; i++) {
        $('#tablesDrop').append("<option value='" + data[i].Tables_in_ofdqo7qxpjr0a7vl + "'>" + data[i].Tables_in_ofdqo7qxpjr0a7vl + "</option>");
    }
});

function showTables(tableName) {

    if (tableName != '') {

        $('#panelHeading').empty();

        $('#sqlQuery').val('');
        console.log(tableName);

        $('#sqlTable').empty();

        $('#sqlTable').append("<thead><tr></tr></thead>");
        $('#sqlTable').append("<tbody></tbody>");
        $('#sqlTable > tbody').append("<tr></tr>");

        $('#tableInfo').html("<b><p>Current Table: " + tableName + "</p></b>");

        $.post(currentURL + '/search/' + tableName, function(data) {

            $('#panel').css("opacity", "1");

            $('#sqlQuery').val("SELECT * FROM " + tableName + " WHERE");

            getTableInfo(data);

        });

    }
};

$('#submitBtn').on("click", function() {

    modalKeys = [];
    modalVals = [];

    $('#panelHeading').empty();

    $('#sqlTable').empty();

    var sql = $('#sqlQuery').val().trim();
    var chkSql = $('#sqlQuery').val();
    var tableName = $('#tablesDrop').val().trim();
    console.log(sql);

    if (chkSql == '') {
        $('#panelHeading').html("<h4>Enter sql query or select table before selecting rows</h4>");
    } else {

        $('#tableInfo').html("<b><p>Current Table: " + tableName + "</p></b>");

        $.get(currentURL + '/sql/' + sql, function(data) {

            console.log(data);
            console.log('data length: ' + data.length);
            var counter = 0;
            var counterB = 0;

            if (data.length > 0 && data.length != undefined && data.code != "ER_PARSE_ERROR" && data.code != "ER_BAD_FIELD_ERROR") {

                $('#panel').css("opacity", "1");

                $('#sqlTable').append("<thead><tr></tr></thead>");
                $('#sqlTable').append("<tbody></tbody>");
                $('#sqlTable > tbody').append("<tr></tr>");

                getTableInfo(data);

            }

            if ('changedRows' in data) {
                $('#panel').css("opacity", "0.7");

                if (data.message == "") {
                    $('#panelHeading').html("<h4 class='queryMsg'>Update Successful</h4>");
                }
                else {
                    $('#panelHeading').html("<h4 class='queryMsg'>Update Successful " + data.message +")</h4>");
                }
            }

            if (data.length == 0) {
                $('#panel').css("opacity", "0.7");
                $('#panelHeading').html("<h4 class='errorMsg'>No Results Found</h4>");
            }

            if (data.code == "ER_PARSE_ERROR") {
                $('#panel').css("opacity", "0.7");
                $('#panelHeading').html("<h4 class='errorMsg'>You have an error in your SQL syntax</h4>");
            }

            if (data.code == "ER_BAD_FIELD_ERROR") {
                $('#panel').css("opacity", "0.7");
                $('#panelHeading').html("<h4 class='errorMsg'>You have entered an invalid field</h4>");
            }

            if (data.code == "ER_NO_SUCH_TABLE") {
                $('#panel').css("opacity", "0.7");
                $('#panelHeading').html("<h4 class='errorMsg'>You have entered an invalid table</h4>");
            }

        });

    }

});


$('#submitRowsBtn').on('click', function() {

    modalKeys = [];
    modalVals = [];

    //var chkSql = $('#sqlQuery').val();
    var chkRowInputA = $('#rowsInput').val();
    var chkRowInputB = $('#rowsInputB').val();
    tableName = $('#tablesDrop').val().trim();

    if (tableName == '' || chkRowInputA == '' || chkRowInputB == '') {

        $('#sqlTable').empty();
        $('#panel').css("opacity", "0.7");

        $('#panelHeading').html("<h4>Please complete necessary inputs before search</h4>");
    } else if (parseFloat(chkRowInputA) > parseFloat(chkRowInputB)) {
        $('#sqlTable').empty();
        $('#panel').css("opacity", "0.7");

        $('#panelHeading').html("<h4>Starting row cannot be a higher value than ending row</h4>");
    } else {

        var tableName = $('#tablesDrop').val().trim();
        $('#tableInfo').html("<b><p>Current Table: " + tableName + "</p></b>");


        $('#sqlQuery').val('');
        console.log(tableName);

        $('#panelHeading').empty();

        $('#sqlTable').empty();

        $('#sqlTable').append("<thead><tr></tr></thead>");
        $('#sqlTable').append("<tbody></tbody>");
        $('#sqlTable > tbody').append("<tr></tr>");

        var sql = $('#sqlQuery').val().trim();
        rowA = $('#rowsInput').val().trim();
        rowB = $('#rowsInputB').val().trim();
        var tableName = $('#tablesDrop').val().trim();

        $.post(currentURL + '/rows/' + tableName + '/' + rowA + '/' + rowB, function(data) {

            rowsUpdate(data);

        });
    }

});

$(document).on('click', '.editBtn', function() {

    console.log('click!');
    modalVals = [];
    trTotal = $("tr").length;
    trPrev = $(this).closest("tr").prevAll("tr").length;
    trAfter = $(this).closest("tr").nextAll("tr").length;

    console.log('Row total: ' + trTotal);
    console.log('Previous rows ' + trPrev);
    console.log('Following rows ' + trAfter);


    $('#modalForm').empty();

    var values = $(this).closest('td').siblings();


    for (var i = 0; i < values.length; i++) {
        console.log(modalKeys[i]);

        $('#modalForm').append("<div class='col-md-6 col-xs-12'><div class='form-group'><label for='info'>" + modalKeys[i] + "</label><input type='text' class='form-control inputText' id=" + "'" + modalKeys[i] + "'" + " name=" + "'" + modalKeys[i] + "'" + " value=" + "'" + $(values[i]).text() + "'" + "</div></div>");

        modalVals.push($(values[i]).text());
    }


    console.log('modalValsArray: ' + modalVals);

    $('.modal-footer').html("<div class='col-md-12 col-xs-12'><hr><button type='submit' class='btn btn-customC' id='formSubmit' data-dismiss='modal'>UPDATE</button><button class='btn btn-custom' id='modalCancel' data-dismiss='modal'>CANCEL</button></div>");

});

$(document).on('click', '#formSubmit', function() {

    var tableName = $('#tablesDrop').val().trim();
    console.log(tableName);
    var queryString = "UPDATE " + tableName + " SET ";
    var queryEnd = " WHERE ";
    var sqlQuery;
    console.log('click');
    updateVals = [];
    //var trNum = $("tr").length;

    $("input.inputText").each(function() {
        updateVals.push($(this).val());
    });

    for (var i = 0; i < modalKeys.length; i++) {
        console.log(modalKeys[i]);
        console.log('New values: ' + updateVals[i]);
    }

    for (var i = 0; i < modalVals.length; i++) {
        console.log('Values: ' + modalVals[i]);

        if (i == modalVals.length - 1) {
            queryString = queryString + modalKeys[i] + "=" + "'" + updateVals[i] + "'";
            queryEnd = queryEnd + modalKeys[i] + "=" + "'" + modalVals[i] + "' ";
        } else {
            queryString = queryString + modalKeys[i] + "=" + "'" + updateVals[i] + "', ";
            queryEnd = queryEnd + modalKeys[i] + "=" + "'" + modalVals[i] + "' AND ";
        }

    }

    console.log(queryString + queryEnd);
    sqlQuery = queryString + queryEnd;

    $.post(currentURL + '/sql/' + sqlQuery, function(data) {

        console.log('changes posted to table');
        var tableName = $('#tablesDrop').val().trim();
        $('#tableInfo').html("<b><p>Current Table: " + tableName + "</p></b>");


        $('#sqlQuery').val('');
        console.log(tableName);

        $('#panelHeading').empty();

        $('#sqlTable').empty();

        $('#sqlTable').append("<thead><tr></tr></thead>");
        $('#sqlTable').append("<tbody></tbody>");
        $('#sqlTable > tbody').append("<tr></tr>");

        var itemID = $('#ItemID').val().trim();

        $.get(currentURL + '/request/' + tableName + '/' + itemID, function(data) {

            getTableInfo(data);
        
        });

    });

});
