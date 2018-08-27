function create(input, key, d) {
    var length = key.length;
    var inner = [];
    var matrix = [];
    var m = 0;
    for (i = 0; i < input.length; i++) {
        if (m == length) {
            matrix.push(inner);
            inner = [];
            m = 0;
        }
        var c = input[i];
        if (c != ' ') {
            inner.push(c);
            m++;
        } else if (d == 1) {
            inner.push('X');
            m++;
        }
    }
    if (d == 1) {
        while (inner.length != length) {
            inner.push("X");
        }
    }
    matrix.push(inner);
    return matrix;
}

function lexoorder(input) {
    var d = [];
    var positions = [];
    for (var i = 0; i < input.length; i++) {
        d.push(input.charCodeAt(i));
        positions.push(0);
    }
    var min = 91;
    var pos;
    var result = [];
    for (var i = 0; i < input.length; i++) {
        min = 91;
        for (var j = 0; j < input.length; j++) {
            if (positions[j] != 1) {
                if (d[j] < min) {

                    min = d[j];
                    pos = j;
                }
            }
        }
        positions[pos] = 1;
        result.push(pos);
    }
    return result;
}

function lexoorder_changed(input) {
    var d = [];
    var positions = [];
    for (var i = 0; i < input.length; i++) {
        d.push(input.charCodeAt(i));
        positions.push(0);
    }
    var min = 91;
    var pos = "";
    pos1 = 0;
    var result = [];
    for (var i = 0; i < input.length; i++) {
        min = 91;
        pos = "";
        for (var j = 0; j < input.length; j++) {
            if (positions[j] != 1) {
                if (d[j] < min) {

                    min = d[j];
                    pos = j + "*";
                } else if (d[j] == min) {
                    pos += j + "*";
                }
            }
        }
        pos1 = pos;
        for (var j = 0; j < pos1.length; j = j + 2) {
            positions[pos[j]] = 1;
        }
        result.push(pos);
    }
    return result;
}

function readoutcolumn(matrix, pos) {
    var s = "";
    for (i = 0; i < matrix.length; i++) {
        if (matrix[i][pos] != undefined)
            s += matrix[i][pos];
    }
    return s;
}

function reverse(input) {
    var output = [];
    for (var i = input.length - 1; i >= 0; i--) {
        output.push(input[i]);
    }
    return output;
}

function readoutcolumn_changed(matrix, pos) {
    var d = [];
    for (var i = 0; i < pos.length; i = i + 2) {
        d.push(pos[i]);
    }
    var s = "";
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < d.length; j++)
            s += matrix[i][d[j]];
    }
    return s;
}

function readoutrows(matrix, key, d) {
    if (d == 1)
        var positions = lexoorder(key);
    else
        var positions = lexoorder_changed(key);
    var result = "";
    if (d == 1) {
        for (var i = 0; i < positions.length; i++) {
            result += readoutcolumn(matrix, positions[i]);
        }
    } else {
        for (var i = 0; i < positions.length; i++) {
            result += readoutcolumn_changed(matrix, positions[i]);
        }
    }
    return result;
}

function encode(input, key) {
    var output = [];
    var matrix = create(input, key, 1);
    var readout = readoutrows(matrix, key, 1);
    output.push(readout);
    output.push("");
    return output;
}

function imencode(input, key) {
    var output = [];
    var matrix = create(input, key, 0);
    var readout = readoutrows(matrix, key, 1);
    output.push(readout);
    output.push("");
    return output;
}

function decode(input, key) {
    var output = [];
    var matrix = create_decode(input, key, 0);
    var readout = readout_decode(matrix, key, 0, 1);
    output.push(readout);
    output.push("");
    return output;
}

function key1encode(input, key) {
    var output = [];
    var matrix = create(input, key, 1);
    var readout = readoutrows(matrix, key, 0);
    output.push(readout);
    output.push("");
    return output;
}

function create_decode(input, key, d) {
    var length = Math.floor(input.length / key.length);
    var matrix = [];
    var inner = [];
    if (d == 0) {
        var m = 0;
        for (var i = 0; i < input.length; i++) {
            if (m == length) {
                matrix.push(inner);
                inner = [];
                m = 0;
            }
            inner.push(input[i]);
            m++;
        }
        if (inner.length > 0)
            matrix.push(inner);
    }
    return matrix;
}

function removenull(input) {
    var output = [];
    for (var i = 0; i < input.length; i++) {
        input[i] += "";
        if (input[i].length == 1) {
            input[i] += "*";
        }
        if (input[i] != "")
            output.push(input[i]);

    }
    return output;
}

function readout_decode(matrix, key, d, e) {
    if (d == 0) {
        var output = [];
        inner = [];
        for (var j = 0; j < key.length; j++) {
            inner = [];
            for (var i = 0; i < matrix[0].length; i++) {
                inner.push("");
            }
            output.push(inner);
        }
        output1 = output;
        if (e == 0)
            var order = lexoorder_changed(key);
        else
            var order = lexoorder(key);
        order = removenull(order);
        var m = 0;
        for (var i = 0; i < order.length; i++) {
            var d = [];
            pos = order[i];
            for (var j = 0; j < pos.length; j = j + 2) {
                d.push(pos[j]);
            }
            var s = "";
            for (var j = m; j < (m + d.length); j++) {
                s += matrix[j].join('');
            }
            var linecount = 0;
            for (var x = 0; x < s.length;) {
                for (var t = 0; t < d.length; t++) {
                    output[d[t]][linecount] = s[x];
                    x++;
                }
                linecount++;
            }
            m = m + d.length;
        }
        var plaintext = "";
        for (var j = 0; j < output[0].length; j++) {
            for (var i = 0; i < output.length; i++) {
                plaintext += output[i][j];
            }
        }
    }
    return plaintext;
}

function key1decode(input, key) {
    var output = [];
    var matrix = create_decode(input, key, 0);
    var readout = readout_decode(matrix, key, 0, 0);
    output.push(readout);
    output.push("");
    return output;
}
$(document).ready(function() {
    $("input[name=options]").change(function() {
        $(".group1").hide();
        var d = $(this).val();
        $("." + d).show();
        $("#resdiv").hide();
        $("#matrix").html("");
    });
    $("#encode").click(function() {
        var input = $("#input").val();
        var key = $("#key").val();
        input = input.toUpperCase();
        key = key.toUpperCase();


        if (input == "" || key == '') {
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

        if (input == "" || key == '') {
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

    $("#imencode").click(function() {
        var input = $("#input").val();
        var key = $("#key").val();
        input = input.toUpperCase();
        key = key.toUpperCase();


        if (input == "" || key == '') {
            $("#error").html("No text Input");
            $("#resdiv").hide();
            $("#matrix").html("");
        } else {
            var output = imencode(input, key);
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
    $("#imdecode").click(function() {
        var input = $("#input").val();
        var key = $("#key").val();
        input = input.toUpperCase();
        key = key.toUpperCase();

        if (input == "" || key == '') {
            $("#error").html("No text Input");
            $("#resdiv").hide();
        } else {
            var output = imdecode(input, key);
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

    $("#key1encode").click(function() {
        var input = $("#input").val();
        var key = $("#key").val();
        input = input.toUpperCase();
        key = key.toUpperCase();


        if (input == "" || key == '') {
            $("#error").html("No text Input");
            $("#resdiv").hide();
            $("#matrix").html("");
        } else {
            var output = key1encode(input, key);
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
    $("#key1decode").click(function() {
        var input = $("#input").val();
        var key = $("#key").val();
        input = input.toUpperCase();
        key = key.toUpperCase();

        if (input == "" || key == '') {
            $("#error").html("No text Input");
            $("#resdiv").hide();
        } else {
            var output = key1decode(input, key);
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