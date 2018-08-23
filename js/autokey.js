function MakeLength(key, input) {
    var l = key.length;
    var l2 = input.length;
    var m = 0;
    for (var i = l; i < l2; i++) {
        key += input[m];
        m++;
    }
    return key;
}

function createMatrixUi(matrix, x, y, z) {
    var ui = "<table class='mt-3 table table-bordered table-hover table-stripped' style='font-size:15px;'>";
    for (var i = 0; i < matrix.length; i++) {
        ui += "<tr>";
        for (var j = 0; j < matrix[0].length; j++) {
            if (i == x && j == y && z == 1)
                ui += "<td class='btn-success'>" + matrix[i][j] + "</td>";
            else if (z == 0 && i == 0 && j == y)
                ui += "<td class='btn-success'>" + matrix[i][j] + "</td>";
            else if (i == x || j == y)
                ui += "<td style='background-color:#c8e6c9;'>" + matrix[i][j] + "</td>";

            else

                ui += "<td>" + matrix[i][j] + "</td>";
        }
        ui += "</tr>";
    }
    ui += "</table>";
    return ui;
}

function encode(input, key) {
    var sub = [];
    var matrix = [];
    for (i = 0; i < 26; i++) {
        sub = [];
        for (j = 0; j < 26; j++) {
            m = 65 + i + j;
            if (m > 90) {
                m = m - 26;
            }
            sub.push(String.fromCharCode(m));
        }
        matrix.push(sub);
    }
    var out = [];
    var s = "";
    var matrixUi = "<table class='mt-3 table table-bordered'><tr><td><h4>Input: </h4></td><td><h4>" + input + "</h4></td></tr><tr><td><h4>Key: </h4></td><td><h4>" + key + "</h4></td></tr></table>";
    for (i = 0; i < input.length; i++) {
        var t = input.charCodeAt(i);
        var k = key.charCodeAt(i);
        matrixUi += "<h4 class='mt-3'>Check intersection of " + input[i] + " and " + key[i] + "</h4>";
        matrixUi += createMatrixUi(matrix, t - 65, k - 65, 1);
        s += matrix[t - 65][k - 65];
    }
    out.push(s);
    out.push(matrixUi);
    return out;
}

function decode(input, key) {
    var sub = [];
    var matrix = [];
    for (i = 0; i < 26; i++) {
        sub = [];
        for (j = 0; j < 26; j++) {
            m = 65 + i + j;
            if (m > 90) {
                m = m - 26;
            }
            sub.push(String.fromCharCode(m));
        }
        matrix.push(sub);
    }
    var out = [];
    var s = "";
    var matrixUi = "<table class='mt-3 table table-bordered'><tr><td><h4>Input: </h4></td><td><h4>" + input + "</h4></td></tr><tr><td><h4>Key: </h4></td><td><h4>" + key + "</h4></td></tr></table>";
    for (i = 0; i < input.length; i++) {
        var t = input.charCodeAt(i);
        var k = key.charCodeAt(i);
        matrixUi += "<h4 class='mt-3'>Choose column containing " + input[i] + " in row " + key[i] + "</h4>";
        matrixUi += createMatrixUi(matrix, k - 65, matrix[k - 65].indexOf(input[i]), 0);
        s += String.fromCharCode(matrix[k - 65].indexOf(input[i]) + 65);
    }
    out.push(s);
    out.push(matrixUi);
    return out;
}
$(document).ready(function() {

    $("#encode").click(function() {
        var input = $("#input").val();
        var key = $("#key").val();
        input = input.toUpperCase();
        key = key.toUpperCase();
        key = MakeLength(key, input);


        if (input == "") {
            $("#error").html("No text Input");
            $("#resdiv").hide();
            $("#matrix").html("");
        } else {
            var output = encode(input, key);
            var encodedtext = output[0];
            var matrixUi = output[1];
            $("#inputstring").html("Input String");
            $("#resultstring").html("Cipher Text");
            $("#error").html("");
            $("#plaintext").html("<h4>" + input + "</h4>");
            $("#matrix").html(matrixUi);
            $("#encodedtext").html("<h4>" + encodedtext + "</h4>");
            $("#resdiv").show();
        }

    });
    $("#decode").click(function() {
        var input = $("#input").val();
        var key = $("#key").val();
        input = input.toUpperCase();
        key = key.toUpperCase();
        key = MakeLength(key, input);


        if (input == "") {
            $("#error").html("No text Input");
            $("#resdiv").hide();
        } else {
            var output = decode(input, key);
            var decodedtext = output[0];
            var matrixUi = output[1];
            $("#inputstring").html("Cipher Text");
            $("#resultstring").html("Decoded Text");
            $("#error").html("");
            $("#matrix").html(matrixUi);
            $("#plaintext").html("<h4>" + input + "</h4>");
            $("#encodedtext").html("<h4>" + decodedtext + "</h4>");
            $("#resdiv").show();
        }

    });

});