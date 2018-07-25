function encodePlayFair(two, matrix) {
    var one = two[0];
    var second = two[1];
    if (one == 'i' || one == 'j') {
        one = 'i/j';
    }
    if (second == 'i' || second == 'j') {
        second = 'i/j';
    }
    var x1;
    var x2;
    var y1;
    var y2;
    var i, j;
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
            if (matrix[i][j] == one) {
                x1 = i;
                y1 = j;
            }
            if (matrix[i][j] == second) {
                x2 = i;
                y2 = j;
            }
        }
    }
    if (x1 == x2) {
        y1 = y1 + 1;
        y2 = y2 + 1;
        if (y1 == 5) {
            y1 = 0;
        }
        if (y2 == 5) {
            y2 = 0;
        }
        return matrix[x1][y1] + matrix[x2][y2];
    } else if (y1 == y2) {
        x1 = x1 + 1;
        x2 = x2 + 1;
        if (x1 == 5) {
            x1 = 0;
        }
        if (x2 == 5) {
            x2 = 0;
        }
        return matrix[x1][y1] + matrix[x2][y2];
    } else {
        return matrix[x1][y2] + matrix[x2][y1];
    }
}

function decodePlayFair(two, matrix) {
    var one = two[0];
    var second = two[1];
    if (one == 'i' || one == 'j') {
        one = 'i/j';
    }
    if (second == 'i' || second == 'j') {
        second = 'i/j';
    }
    var x1;
    var x2;
    var y1;
    var y2;
    var i, j;
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
            if (matrix[i][j] == one) {
                x1 = i;
                y1 = j;
            }
            if (matrix[i][j] == second) {
                x2 = i;
                y2 = j;
            }
        }
    }
    if (x1 == x2) {
        y1 = y1 - 1;
        y2 = y2 - 1;
        if (y1 == -1) {
            y1 = 4;
        }
        if (y2 == -1) {
            y2 = 4;
        }
        return matrix[x1][y1] + matrix[x2][y2];
    } else if (y1 == y2) {
        x1 = x1 - 1;
        x2 = x2 - 1;
        if (x1 == -1) {
            x1 = 4;
        }
        if (x2 == -1) {
            x2 = 4;
        }
        return matrix[x1][y1] + matrix[x2][y2];
    } else {
        return matrix[x1][y2] + matrix[x2][y1];
    }
}

function createDoublePairs(input) {
    var i = 0;
    var array = [];
    for (i = 0; i < input.length;) {
        var d = array.length;
        if (d != 0) {
            if (array[d - 1] == '@') {
                array.push(input[i]);
                i++;
            } else {
                if (array[d - 1] == input[i]) {
                    array.push("x");
                    array.push("@");
                } else if (array[d - 1] == 'i' && input[i] == 'j') {
                    array.push("x");
                    array.push("@");
                } else if (array[d - 1] == 'j' && input[i] == 'i') {
                    array.push("x");
                    array.push("@");
                } else {
                    array.push(input[i]);
                    if (i != input.length - 1)
                        array.push("@");
                    i++;
                }
            }
        } else {
            array.push(input[i]);
            i++;
        }
    }
    var k = array.lastIndexOf("@");
    if (k == (array.length - 2)) {
        array.push("x");
    }

    var sub = [];
    var grid = [];

    for (i = 0; i < array.length; i = i + 3) {
        sub = [];
        sub.push(array[i]);
        sub.push(array[i + 1]);
        grid.push(sub);
    }
    return grid;
}

function creatematrixUI(matrix) {
    var UI = "<h4 class='mt-3'>Create Table From Key</h4><table class='table table-bordered mt-3'>";
    for (i = 0; i < 5; i++) {
        UI += "<tr>";
        for (j = 0; j < 5; j++) {
            UI += "<td>" + matrix[i][j] + "</td>";
        }
        UI += "</tr>";
    }
    UI += "</table>";
    return UI;
}

function find_unique_characters(key) {
    var s = "";
    for (i = 0; i < key.length; i++) {
        if (s.indexOf(key[i]) == -1) {
            s = s + key[i];
        }
    }
    return s;
}

function notinkey(key) {
    var array = [];
    var flag = 1;
    for (i = 97; i <= 122; i++) {
        for (j = 0; j < key.length; j++) {
            if (i == key.charCodeAt(j))
                break;
        }
        if (j == key.length) {
            if (String.fromCharCode(i) == 'i' || String.fromCharCode(i) == 'j') {
                if (flag == 0) {
                    continue;
                } else {
                    if (key.indexOf('i') == -1 && key.indexOf('j') == -1) {
                        flag = 0;
                    } else {
                        continue;
                    }
                }
            }
            array.push(String.fromCharCode(i));
        }
    }
    return array;
}

function creatematrix(key) {
    key = key.toLowerCase();
    key = find_unique_characters(key);
    var matrix = [];
    var sub = [];
    var e = 0;
    var d = notinkey(key);
    var m = 0;
    var flag = 1;
    for (i = 0; i < 5; i++) {
        sub = [];
        for (j = 0; j < 5;) {
            if (e < key.length) {
                if (key[e] != 'i' && key[e] != 'j') {
                    sub.push(key[e]);
                    j++;
                    e++;
                } else {
                    if (flag == 1) {
                        flag = 0;
                        sub.push('i/j');
                        j++;
                    }
                    e++;
                }

            } else if (m < d.length) {
                if (d[m] != 'i' && d[m] != 'j') {
                    sub.push(d[m]);
                    j++;
                    m++;
                } else {
                    if (flag == 1) {
                        flag = 0;
                        sub.push('i/j');
                        j++;
                        m++;
                    }
                }
            }
        }
        //console.log(sub);
        matrix.push(sub);
    }
    return matrix;
}

function createTwoPairsUI(twopairs, k) {
    if (k == 1)
        var UI = "<h4 class='mt-3'>Create Pairs From Plain Text</h4><table class='table text-center table-bordered mt-3'><tr>";
    else
        var UI = "<h4 class='mt-3'>Given String</h4><table class='table text-center table-bordered mt-3'><tr>";
    for (var i = 0; i < twopairs.length; i++) {
        UI += "<td>" + twopairs[i][0] + twopairs[i][1] + "</td>";
    }
    UI += "</tr></table>";
    return UI;
}

function sanatize(t) {
    if (t.indexOf('i/j') != -1) {
        console.log(t);
        if (t.indexOf('i/j') == 0) {
            t = "i" + t[3];
        } else {
            t = t[0] + "i";
        }
        console.log(t);
    }
    return t;
}

function createColor(twopairs, t, matrix) {
    if (twopairs[0] == 'i' || twopairs[0] == 'j') {
        twopairs[0] = 'i/j';
    }
    if (twopairs[1] == 'i' || twopairs[1] == 'j') {
        twopairs[1] = 'i/j';
    }
    if (twopairs[0] == '*') {
        twopairs[0] = 'x';
    }
    if (twopairs[1] == '*') {
        twopairs[1] = 'x';
    }
    t = sanatize(t);
    var UI = "<table class='table table-bordered mt-3'>";
    for (i = 0; i < 5; i++) {
        UI += "<tr>";
        for (j = 0; j < 5; j++) {
            if (matrix[i][j] == twopairs[0] || matrix[i][j] == twopairs[1]) {
                UI += "<td style='border:2px solid blue;'>" + matrix[i][j] + "</td>";
            } else if ((matrix[i][j] == t[0] || matrix[i][j] == t[1]) || (t[0] == 'i' && matrix[i][j] == 'i/j') || (t[1] == 'i' && matrix[i][j] == 'i/j')) {
                UI += "<td style='border:2px solid red;'>" + matrix[i][j] + "</td>";
            } else {
                UI += "<td>" + matrix[i][j] + "</td>";
            }
        }
        UI += "</tr>";
    }
    UI += "</table>";
    return UI;
}
$(document).ready(function() {

    $("#encode").click(function() {
        var input = $("#input").val();
        var key = $("#key").val();

        var matrix = creatematrix(key);
        var matrixUI = creatematrixUI(matrix);

        var twopairs = createDoublePairs(input);

        var twopairsUi = createTwoPairsUI(twopairs, 1);
        var seconduipairs = createTwoPairsUI(twopairs, 0);
        var d = "<h4 class='mt-3' style='padding-top:15px;'>Encoded String</h4><table class='table text-center table-bordered mt-3'><tr>";
        var coloredui = "<h4 class='mt-3' style='padding-top:15px;'>Encode each Pair</h4>";
        for (var i = 0; i < twopairs.length; i++) {
            var t = encodePlayFair(twopairs[i], matrix);
            t = sanatize(t);
            d += "<td>" + t + "</td>";
            coloredui += "<h5 style='padding-top:25px;'>Step " + (i + 1) + "  (" + twopairs[i][0] + twopairs[i][1] + ")</h5>"
            coloredui += createColor(twopairs[i], t, matrix);
            coloredui += "<h5>" + twopairs[i][0] + "<span class='fa fa-arrow-circle-right  ' style='padding-left:5px;padding-right:5px;'></span>" + t[0] + "<span style='padding-left:15px;padding-right:15px;'></span>" + twopairs[i][1] + "<span class=' fa fa-arrow-circle-right ' style='padding-left:5px;padding-right:5px;'></span>" + t[1] + "</h5>";
        }
        d += "</tr></table>";
        matrixUI += twopairsUi + coloredui + seconduipairs + d;
        if (input == "") {
            $("#error").html("No text Input");
            $("#resdiv").hide();
        } else {
            $("#plaintext").html(matrixUI);
            /* $("#error").html("");
            $("#plaintext").html("<h4>" + input + "</h4>");
            $("#encodedtext").html("<h4>" + encoded + "</h4>");
            $("#resdiv").show(); */
        }

    });

    $("#decode").click(function() {
        var input = $("#input").val();
        var key = $("#key").val();

        var matrix = creatematrix(key);
        var matrixUI = creatematrixUI(matrix);

        var twopairs = createDoublePairs(input);
        var twopairsUi = createTwoPairsUI(twopairs, 1);
        var seconduipairs = createTwoPairsUI(twopairs, 0);
        var d = "<h4 class='mt-3' style='padding-top:15px;'>Decoded String</h4><table class='table text-center table-bordered mt-3'><tr>";
        var coloredui = "<h4 class='mt-3' style='padding-top:15px;'>Encode each Pair</h4>";
        for (var i = 0; i < twopairs.length; i++) {

            var t = decodePlayFair(twopairs[i], matrix);
            t = sanatize(t);
            d += "<td>" + t + "</td>";

            coloredui += "<h5 style='padding-top:25px;'>Step " + (i + 1) + "  (" + twopairs[i][0] + twopairs[i][1] + ")</h5>"
            coloredui += createColor(twopairs[i], t, matrix);
            coloredui += "<h5>" + twopairs[i][0] + "<span class='fa fa-arrow-circle-right  ' style='padding-left:5px;padding-right:5px;'></span>" + t[0] + "<span style='padding-left:15px;padding-right:15px;'></span>" + twopairs[i][1] + "<span class=' fa fa-arrow-circle-right ' style='padding-left:5px;padding-right:5px;'></span>" + t[1] + "</h5>";
        }
        d += "</tr></table>";
        matrixUI += twopairsUi + coloredui + seconduipairs + d;;
        if (input == "") {
            $("#error").html("No text Input");
            $("#resdiv").hide();
        } else {
            $("#plaintext").html(matrixUI);
            /* $("#error").html("");
            $("#plaintext").html("<h4>" + input + "</h4>");
            $("#encodedtext").html("<h4>" + encoded + "</h4>");
            $("#resdiv").show(); */
        }
    });
});