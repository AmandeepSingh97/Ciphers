function createAlphaUi() {
    var ui="<table class='mt-3 table table-bordered'><tr>"
    for(i=0;i<26;i++)
    {
        ui+="<td>"+String.fromCharCode(i+65)+"</td>";
    }
    ui+="</tr><tr>";
    for(i=0;i<26;i++)
    {
        ui+="<td>"+i+"</td>";
    }
    ui+="</tr></table>";
    return ui;
}

function encode(input, key) {
    var s = "";
    var ui="";
    var output = [];
    ui+=createAlphaUi();
    ui+="<div class='row'>";
    for (var i = 0; i < input.length; i++) {
        ui+="<div class='card mt-3 mb-3 col-lg-3 ml-3'><div class='card-body'>"
        ui+="<h4>"+input[i]+" + "+key[i]+"</h4>";
        ui+="<h5>"+(input.charCodeAt(i) - 65)+" + "+(key.charCodeAt(i) - 65)+" = "+(input.charCodeAt(i) - 65 + key.charCodeAt(i) - 65)+"</h5>";
        var c = input.charCodeAt(i) - 65 + key.charCodeAt(i) - 65;
        if (c > 25) {
            ui+="<h5>"+c+" => "+c+" - 26 => "+(c-26)+" = "+String.fromCharCode(c-26 + 65)+"</h5>";
            c = c - 26;
        }
        else
        {
            ui+="<h5>"+c+" = "+String.fromCharCode(c + 65)+"</h5>";
        }
        s += String.fromCharCode(c + 65);
        ui+="</div></div>";
    }
    ui+"</div>"
    output.push(s);
    output.push(ui);
    return output;
}
function decode(input, key) {
    var s = "";
    var ui="";
    var output = [];
    ui+=createAlphaUi();
    ui+="<div class='row'>";
    for (var i = 0; i < input.length; i++) {
        ui+="<div class='card mt-3 mb-3 col-lg-3 ml-3'><div class='card-body'>"
        ui+="<h4>"+input[i]+" - "+key[i]+"</h4>";
        ui+="<h5>"+(input.charCodeAt(i) - 65)+" - "+(key.charCodeAt(i) - 65)+" = "+((input.charCodeAt(i) - 65 )- (key.charCodeAt(i) - 65))+"</h5>";
        var c = (input.charCodeAt(i) - 65) - (key.charCodeAt(i) - 65);
        if (c < 0) {
            ui+="<h5>"+c+" => "+c+" + 26 => "+(c+26)+" = "+String.fromCharCode(c+26 + 65)+"</h5>";
            c = c + 26;
        }
        else
        {
            ui+="<h5>"+c+" = "+String.fromCharCode(c + 65)+"</h5>";
        }
        s += String.fromCharCode(c + 65);
        ui+="</div></div>";
    }
    ui+"</div>"
    output.push(s);
    output.push(ui);
    return output;
}
$(document).ready(function() {

    $("#encode").click(function() {
        var input = $("#input").val();
        var key = $("#key").val();
        input = input.toUpperCase();
        key = key.toUpperCase();

        if (input == "") {
            $("#error").html("No text Input");
            $("#resdiv").hide();
            $("#matrix").html("");
        } else if (input.length != key.length) {
            $("#error").html("Input Text and Key differ in length");
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

        if (input == "") {
            $("#error").html("No text Input");
            $("#resdiv").hide();
        } else if (input.length != key.length) {
            $("#error").html("Input Text and Key differ in length");
            $("#resdiv").hide();
            $("#matrix").html("");
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