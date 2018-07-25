function cesarEncode(input, key) {
    key = key % 26;
    var d = input.length;
    var s = "";
    for (var i = 0; i < d; i++) {
        var intVal = input.charCodeAt(i);
        if (intVal != 32) {
            if (intVal >= 65 && intVal <= 90) {
                if (intVal + key > 90) {
                    intVal = intVal - 26;
                }
            }
            if (intVal >= 97 && intVal <= 122) {
                if (intVal + key > 122) {
                    intVal = intVal - 26;
                }
            }
            var e = String.fromCharCode(intVal + key);
        } else {
            e = String.fromCharCode(intVal);
        }
        s += e;
    }
    return s;
}
$(document).ready(function() {

    $("#encodecesar").click(function() {
        var input = $("#cesarinput").val();
        var encoded = cesarEncode(input, 3);
        if (input == "") {
            $("#error").html("No text Input");
            $("#resdiv").hide();
        } else {
        	$("#error").html("");
            $("#plaintext").html("<h4>" + input + "</h4>");
            $("#encodedtext").html("<h4>" + encoded + "</h4>");
            $("#resdiv").show();
        }
        
    });

    $("#encodecesaradvanced").click(function() {
        var input = $("#cesarinput").val();
        var key = $("#cesarkey").val();
        var encoded = cesarEncode(input, key);
        if (input == "") {
            $("#error").html("No text Input");
            $("#resdiv").hide();
        } else {
        	$("#error").html("");
            $("#plaintext").html("<h4>" + input + "</h4>");
            $("#encodedtext").html("<h4>" + encoded + "</h4>");
            $("#resdiv").show();
        }
        
    });
});