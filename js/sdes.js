function formUi(input) {
    var Ui = "<table class='table table-bordered table-hover text-center' style='border-width:5px'><tr>";
    for (var i = 0; i < input.length; i++) {
        Ui += "<td>" + input[i] + "</td>";
    }
    Ui += "</tr></table>";
    return Ui;
}

function formUi2(input, x) {
    var Ui = "<table class='table table-bordered table-hover text-center' style='border-width:2px'><tr style='background-color:green;color:white'><th style='background-color:white;color:black;font-size:26px;'>" + x + "</th><th>0</th><th>1</th><th>2</th><th>3</th></tr>";

    for (var i = 0; i < input.length; i++) {
        Ui += "<tr>";
        for (var j = 0; j <= input[0].length; j++) {
            if (j != 0)
                Ui += "<td>" + input[i][j - 1] + "</td>";
            else
                Ui += "<td style='background-color:blue;color:white'>" + i + "</td>";
        }
        Ui += "</tr>";
    }
    Ui += "</table>";
    return Ui;
}

function applyP10(input) {
    var output = "";
    var p10 = [3, 5, 2, 7, 4, 10, 1, 9, 8, 6];
    for (i = 0; i < p10.length; i++) {
        output += input[p10[i] - 1];
    }
    return output;
}

function applyP8(input) {
    var output = "";
    var p8 = [6, 3, 7, 4, 8, 5, 10, 9];
    for (i = 0; i < p8.length; i++) {
        output += input[p8[i] - 1];
    }
    return output;
}

function applyIP(input) {
    var output = "";
    var ip = [2, 6, 3, 1, 4, 8, 5, 7];
    for (i = 0; i < ip.length; i++) {
        output += input[ip[i] - 1];
    }
    return output;
}

function applyIPinv(input) {
    var output = "";
    var ipinv = [4, 1, 3, 5, 7, 2, 8, 6];
    for (i = 0; i < ipinv.length; i++) {
        output += input[ipinv[i] - 1];
    }
    return output;
}

function applyep(input) {
    var output = "";
    var ep = [4, 1, 2, 3, 2, 3, 4, 1];
    for (i = 0; i < ep.length; i++) {
        output += input[ep[i] - 1];
    }
    return output;
}

function applyp4(input) {
    var output = "";
    var p4 = [2, 4, 3, 1];
    for (i = 0; i < p4.length; i++) {
        output += input[p4[i] - 1];
    }
    return output;
}

function checkboolean(input) {
    for (i = 0; i < input.length; i++) {
        if (input[i] != 0 && input[i] != 1) {
            return 1;
        }
    }
    return 0;
}

function cls(input, times) {
    var left = input.substr(0, 5);
    var right = input.substr(5);
    var output = "";
    for (var i = 0; i < times; i++) {
        left = shift(left);
    }
    for (var i = 0; i < times; i++) {
        right = shift(right);
    }
    output = left + right;
    return output;
}

function shift(input) {
    var output = input.substr(1);
    output += input[0];
    return output;
}

function right(input) {
    var output = input.substr(4, 4);
    return output;
}

function left(input) {
    var output = input.substr(0, 4);
    return output;
}

function Xor(a, b) {
    var s = "";
    for (var i = 0; i < a.length; i++) {
        var x = a[i];
        var y = b[i];
        if (x == y)
            s += "0";
        else
            s += "1";
    }
    return s;
}

function applys0(input) {
    var inner = input[1] + input[2];
    var outer = input[0] + input[3];
    inner = binaryDecimal(inner);
    outer = binaryDecimal(outer);
    s0 = [
        [1, 0, 3, 2],
        [3, 2, 1, 0],
        [0, 2, 1, 3],
        [3, 1, 3, 2]
    ];
    var binaryEq = decimalBinary(s0[outer][inner]);
    binaryEq += "";
    return binaryEq;
}

function applys1(input) {
    var inner = input[1] + input[2];
    var outer = input[0] + input[3];
    inner = binaryDecimal(inner);
    outer = binaryDecimal(outer);
    s1 = [
        [0, 1, 2, 3],
        [2, 0, 1, 3],
        [3, 0, 1, 0],
        [3, 1, 0, 3]
    ];
    var binaryEq = decimalBinary(s1[outer][inner]);
    binaryEq += "";
    return binaryEq;
}

function reverse(input) {
    var s = "";
    for (var i = input.length - 1; i >= 0; i--)
        s += input[i];
    return s;
}

function decimalBinary(input) {
    var s = "";
    if (input == 0)
        return 0;
    while (input > 0) {
        var b = input % 2;
        s += b;
        input = Math.floor(input / 2);
    }
    s = reverse(s);
    return s;
}

function binaryDecimal(input) {
    var s = 0;
    input = reverse(input);
    for (i = 0; i < input.length; i++) {
        s += input[i] * Math.pow(2, i);
    }
    s = s + "";
    return s;
}

function makelength4(input) {
    var output = input;
    for (var i = 4; i > input.length; i--)
        output = "0" + output;
    return output;
}

function encode(input, key) {
    var p10 = [3, 5, 2, 7, 4, 10, 1, 9, 8, 6];
    var p8 = [6, 3, 7, 4, 8, 5, 10, 9];
    var ip = [2, 6, 3, 1, 4, 8, 5, 7];
    var ipinv = [4, 1, 3, 5, 7, 2, 8, 6];
    var ep = [4, 1, 2, 3, 2, 3, 4, 1];
    var p4 = [2, 4, 3, 1];
    s0 = [
        [1, 0, 3, 2],
        [3, 2, 1, 0],
        [0, 2, 1, 3],
        [3, 1, 3, 2]
    ];
    s1 = [
        [0, 1, 2, 3],
        [2, 0, 1, 3],
        [3, 0, 1, 0],
        [3, 1, 0, 3]
    ];
    var output = [];
    var Ui = "";

    Ui += "<h4>P10</h4>";
    Ui += formUi(p10);

    Ui += "<h4>Given Key</h4>";
    Ui += formUi(key);

    var key = applyP10(key);

    Ui += "<h4>Apply P10 on Key</h4>";
    Ui += formUi(key);

    key = cls(key, 1);

    Ui += "<h4>Circular Left Shift key once</h4>";
    Ui += formUi(key);
    var key1 = applyP8(key);
    Ui += "<h4>P8</h4>";
    Ui += formUi(p8);

    Ui += "<h4>Apply P8 on key : Sub Key 1</h4>";
    Ui += formUi(key1);

    key = cls(key, 2);
    Ui += "<h4>Circular Left Shift key twice again using previous shifted key</h4>";
    Ui += formUi(key);

    var key2 = applyP8(key);
    Ui += "<h4>P8</h4>";
    Ui += formUi(p8);

    Ui += "<h4>Apply P8 on key: Sub Key 2</h4>";
    Ui += formUi(key2);

    Ui += "<h3 style='color:red'>1st Cycle</h3>";
    Ui += "<h4>Given Input Text</h4>";
    Ui += formUi(input);

    input = applyIP(input);

    Ui += "<h4>IP</h4>";
    Ui += formUi(ip);

    Ui += "<h4>Apply Ip on Input Text</h4>";
    Ui += formUi(input);

    Ui += "<h4>Divide this into two halfs :</h4>";

    leftbits = left(input);
    rightbits = right(input);
    Ui += "<h4>Left Half</h4>";
    Ui += formUi(leftbits);
    Ui += "<h4>Right Half</h4>";
    Ui += formUi(rightbits);
    Ui += "<h4>Choose right half and apply E/p :</h4>";
    Ui += "<h4>E/P</h4>";
    Ui += formUi(ep);


    rightbits_changed = applyep(rightbits);
    Ui += "<h4>Apply E/P on Right Half</h4>";
    Ui += formUi(rightbits_changed);
    rightbits_changed = Xor(rightbits_changed, key1);
    Ui += "<h4>Xor With Key 1</h4>";

    Ui += "<h4>Key 1</h4>";
    Ui += formUi(key1);
    Ui += "<h4>After Xor</h4>";
    Ui += formUi(rightbits_changed);

    Ui += "<h4>Divide this into two halfs :</h4>";

    left_half = left(rightbits_changed);
    Ui += "<h4>Left Half</h4>";
    Ui += formUi(left_half);
    right_half = right(rightbits_changed);
    Ui += "<h4>Right Half</h4>";
    Ui += formUi(right_half);

    Ui += "<h4>Apply S boxes: </h4>";


    Ui += formUi2(s0, "S0");



    Ui += formUi2(s1, "S1");
    Ui += "<h4>1'st and 4th bit together in Decimal Form act as Row</h4>";
    Ui += "<h4>2'nd and 3'rd bit together in Decimal Form act as Column</h4>";
    Ui += "<table class='table table-hover table-bordered text-center'><tr><td style='background-color:green;color:white;font-size:26px'>Outer</td><td style='background-color:blue;color:white;font-size:26px'>Inner</td><td style='background-color:blue;color:white;font-size:26px'>Inner</td><td style='background-color:green;color:white;font-size:26px'>Outer</td></tr></table>";

    s0 = applys0(left_half);
    s1 = applys1(right_half);
    Ui += "<h4>For S0 use Left Half</h4>";
    Ui += formUi(left_half);
    Ui += "<h4>Row (outer bits) <span class='fa fa-arrow-circle-right' style='padding-right:10px;'></span>" + left_half[0] + "" + left_half[3] + " = " + binaryDecimal(left_half[0] + "" + left_half[3]) + " </h4>";
    Ui += "<h4>Column (inner bits) <span class='fa fa-arrow-circle-right' style='padding-right:10px;'></span>" + left_half[1] + "" + left_half[2] + " = " + binaryDecimal(left_half[1] + "" + left_half[2]) + " </h4>";
    Ui += "<h4>Substitution from S0</h4>";
    Ui += formUi(binaryDecimal(s0));

    Ui += "<h4>For S1 use Right Half</h4>";
    Ui += formUi(right_half);
    Ui += "<h4>Row (outer bits) <span class='fa fa-arrow-circle-right' style='padding-right:10px;'></span>" + right_half[0] + "" + right_half[3] + " = " + binaryDecimal(right_half[0] + "" + right_half[3]) + " </h4>";
    Ui += "<h4>Column (inner bits) <span class='fa fa-arrow-circle-right' style='padding-right:10px;'></span>" + right_half[1] + "" + right_half[2] + " = " + binaryDecimal(right_half[1] + "" + right_half[2]) + " </h4>";
    Ui += "<h4>Substitution from S1</h4>";
    Ui += formUi(binaryDecimal(s1));
    s0 = s0 + s1;


    s0 = makelength4(s0);
    Ui += "<h4>Combine Both in Binary</h4>";
    Ui += formUi(s0);

    s0 = applyp4(s0);
    Ui += "<h4>P4:</h4>";
    Ui += formUi(p4);

    Ui += "<h4>Apply P4</h4>";
    Ui += formUi(s0);
    leftbits = Xor(leftbits, s0);

    Ui += "<h4>XOR with Left Half</h4>";
    Ui += formUi(leftbits);

    Ui += "<h4>Interchange Left Half with Right Half</h4>";
    var t = leftbits;
    leftbits = rightbits;
    rightbits = t;
    Ui += "<h4>Now Left Half</h4>";
    Ui += formUi(leftbits);
    Ui += "<h4>Now Right Half</h4>";
    Ui += formUi(rightbits);

    Ui += "<h3 style='color:red'>2nd Cycle</h3>";

    Ui += "<h4>E/P</h4>";
    Ui += formUi(ep);
    rightbits_changed = applyep(rightbits);
    Ui += "<h4>Apply E/P on rightbits</h4>";
    Ui += formUi(rightbits_changed);
    rightbits_changed = Xor(rightbits_changed, key2);
    Ui += "<h4>Xor With Key 1</h4>";

    Ui += "<h4>Key 2</h4>";
    Ui += formUi(key2);

    Ui += "<h4>After Xor</h4>";
    Ui += formUi(rightbits_changed);

    Ui += "<h4>Divide this into two halfs :</h4>";
    left_half = left(rightbits_changed);
    Ui += "<h4>Left Half</h4>";
    Ui += formUi(left_half);
    right_half = right(rightbits_changed);
    Ui += "<h4>Right Half</h4>";
    Ui += formUi(right_half);

    Ui += "<h4>Apply S boxes: </h4>";
    Ui += formUi2(s0, "S0");



    Ui += formUi2(s1, "S1");
    Ui += "<h4>1'st and 4th bit together in Decimal Form act as Row</h4>";
    Ui += "<h4>2'nd and 3'rd bit together in Decimal Form act as Column</h4>";
    Ui += "<table class='table table-hover table-bordered text-center'><tr><td style='background-color:green;color:white;font-size:26px'>Outer</td><td style='background-color:blue;color:white;font-size:26px'>Inner</td><td style='background-color:blue;color:white;font-size:26px'>Inner</td><td style='background-color:green;color:white;font-size:26px'>Outer</td></tr></table>";
    s0 = applys0(left_half);
    s1 = applys1(right_half);
    Ui += "<h4>For S0 use Left Half</h4>";
    Ui += formUi(left_half);
    Ui += "<h4>Row (outer bits) <span class='fa fa-arrow-circle-right' style='padding-right:10px;'></span>" + left_half[0] + "" + left_half[3] + " = " + binaryDecimal(left_half[0] + "" + left_half[3]) + " </h4>";
    Ui += "<h4>Column (inner bits) <span class='fa fa-arrow-circle-right' style='padding-right:10px;'></span>" + left_half[1] + "" + left_half[2] + " = " + binaryDecimal(left_half[1] + "" + left_half[2]) + " </h4>";
    Ui += "<h4>Substitution from S0</h4>";
    Ui += formUi(binaryDecimal(s0));

    Ui += "<h4>For S1 use Right Half</h4>";
    Ui += formUi(right_half);
    Ui += "<h4>Row (outer bits) <span class='fa fa-arrow-circle-right' style='padding-right:10px;'></span>" + right_half[0] + "" + right_half[3] + " = " + binaryDecimal(right_half[0] + "" + right_half[3]) + " </h4>";
    Ui += "<h4>Column (inner bits) <span class='fa fa-arrow-circle-right' style='padding-right:10px;'></span>" + right_half[1] + "" + right_half[2] + " = " + binaryDecimal(right_half[1] + "" + right_half[2]) + " </h4>";
    Ui += "<h4>Substitution from S1</h4>";
    Ui += formUi(binaryDecimal(s1));
    s0 = s0 + s1;
    s0 = makelength4(s0);
    Ui += "<h4>Combine Both in Binary</h4>";
    Ui += formUi(s0);
    s0 = applyp4(s0);
    Ui += "<h4>P4:</h4>";
    Ui += formUi(p4);

    Ui += "<h4>Apply P4</h4>";
    Ui += formUi(s0);
    leftbits = Xor(leftbits, s0);
    Ui += "<h4>XOR with Left Half</h4>";
    Ui += formUi(leftbits);

    leftbits = leftbits + rightbits;
    Ui += "<h4>Combine the result</h4>";
    Ui += formUi(leftbits);
    leftbits = applyIPinv(leftbits);
    Ui += "<h4>IP inverse</h4>";
    Ui += formUi(ipinv);
    Ui += "<h4>Appl IP inverse on result</h4>";
    Ui += formUi(leftbits);

    Ui += "<h4>Final Cipher Text</h4>";
    Ui += formUi(leftbits);
    output.push(leftbits);
    output.push(Ui);
    return output;

}

function decode(input, key) {
    var p10 = [3, 5, 2, 7, 4, 10, 1, 9, 8, 6];
    var p8 = [6, 3, 7, 4, 8, 5, 10, 9];
    var ip = [2, 6, 3, 1, 4, 8, 5, 7];
    var ipinv = [4, 1, 3, 5, 7, 2, 8, 6];
    var ep = [4, 1, 2, 3, 2, 3, 4, 1];
    var p4 = [2, 4, 3, 1];
    s0 = [
        [1, 0, 3, 2],
        [3, 2, 1, 0],
        [0, 2, 1, 3],
        [3, 1, 3, 2]
    ];
    s1 = [
        [0, 1, 2, 3],
        [2, 0, 1, 3],
        [3, 0, 1, 0],
        [3, 1, 0, 3]
    ];
    var output = [];
    var Ui = "";

    Ui += "<h4>P10</h4>";
    Ui += formUi(p10);

    Ui += "<h4>Given Key</h4>";
    Ui += formUi(key);

    var key = applyP10(key);

    Ui += "<h4>Apply P10 on Key</h4>";
    Ui += formUi(key);

    key = cls(key, 1);

    Ui += "<h4>Circular Left Shift key once</h4>";
    Ui += formUi(key);
    var key1 = applyP8(key);
    Ui += "<h4>P8</h4>";
    Ui += formUi(p8);

    Ui += "<h4>Apply P8 on key : Sub Key 1</h4>";
    Ui += formUi(key1);

    key = cls(key, 2);
    Ui += "<h4>Circular Left Shift key twice again using previous shifted key</h4>";
    Ui += formUi(key);

    var key2 = applyP8(key);
    Ui += "<h4>P8</h4>";
    Ui += formUi(p8);

    Ui += "<h4>Apply P8 on key: Sub Key 2</h4>";
    Ui += formUi(key2);

    Ui += "<h3 style='color:red'>1st Cycle</h3>";
    Ui += "<h4>Given Input Text</h4>";
    Ui += formUi(input);

    input = applyIP(input);

    Ui += "<h4>IP</h4>";
    Ui += formUi(ip);

    Ui += "<h4>Apply Ip on Input Text</h4>";
    Ui += formUi(input);

    Ui += "<h4>Divide this into two halfs :</h4>";

    leftbits = left(input);
    rightbits = right(input);
    Ui += "<h4>Left Half</h4>";
    Ui += formUi(leftbits);
    Ui += "<h4>Right Half</h4>";
    Ui += formUi(rightbits);
    Ui += "<h4>Choose right half and apply E/p :</h4>";
    Ui += "<h4>E/P</h4>";
    Ui += formUi(ep);


    rightbits_changed = applyep(rightbits);
    Ui += "<h4>Apply E/P on Right Half</h4>";
    Ui += formUi(rightbits_changed);
    rightbits_changed = Xor(rightbits_changed, key2);
    Ui += "<h4>Xor With Key 2</h4>";

    Ui += "<h4>Key 2</h4>";
    Ui += formUi(key2);
    Ui += "<h4>After Xor</h4>";
    Ui += formUi(rightbits_changed);

    Ui += "<h4>Divide this into two halfs :</h4>";

    left_half = left(rightbits_changed);
    Ui += "<h4>Left Half</h4>";
    Ui += formUi(left_half);
    right_half = right(rightbits_changed);
    Ui += "<h4>Right Half</h4>";
    Ui += formUi(right_half);

    Ui += "<h4>Apply S boxes: </h4>";


    Ui += formUi2(s0, "S0");



    Ui += formUi2(s1, "S1");
    Ui += "<h4>1'st and 4th bit together in Decimal Form act as Row</h4>";
    Ui += "<h4>2'nd and 3'rd bit together in Decimal Form act as Column</h4>";
    Ui += "<table class='table table-hover table-bordered text-center'><tr><td style='background-color:green;color:white;font-size:26px'>Outer</td><td style='background-color:blue;color:white;font-size:26px'>Inner</td><td style='background-color:blue;color:white;font-size:26px'>Inner</td><td style='background-color:green;color:white;font-size:26px'>Outer</td></tr></table>";

    s0 = applys0(left_half);
    s1 = applys1(right_half);
    Ui += "<h4>For S0 use Left Half</h4>";
    Ui += formUi(left_half);
    Ui += "<h4>Row (outer bits) <span class='fa fa-arrow-circle-right' style='padding-right:10px;'></span>" + left_half[0] + "" + left_half[3] + " = " + binaryDecimal(left_half[0] + "" + left_half[3]) + " </h4>";
    Ui += "<h4>Column (inner bits) <span class='fa fa-arrow-circle-right' style='padding-right:10px;'></span>" + left_half[1] + "" + left_half[2] + " = " + binaryDecimal(left_half[1] + "" + left_half[2]) + " </h4>";
    Ui += "<h4>Substitution from S0</h4>";
    Ui += formUi(binaryDecimal(s0));

    Ui += "<h4>For S1 use Right Half</h4>";
    Ui += formUi(right_half);
    Ui += "<h4>Row (outer bits) <span class='fa fa-arrow-circle-right' style='padding-right:10px;'></span>" + right_half[0] + "" + right_half[3] + " = " + binaryDecimal(right_half[0] + "" + right_half[3]) + " </h4>";
    Ui += "<h4>Column (inner bits) <span class='fa fa-arrow-circle-right' style='padding-right:10px;'></span>" + right_half[1] + "" + right_half[2] + " = " + binaryDecimal(right_half[1] + "" + right_half[2]) + " </h4>";
    Ui += "<h4>Substitution from S1</h4>";
    Ui += formUi(binaryDecimal(s1));
    s0 = s0 + s1;


    s0 = makelength4(s0);
    Ui += "<h4>Combine Both in Binary</h4>";
    Ui += formUi(s0);

    s0 = applyp4(s0);
    Ui += "<h4>P4:</h4>";
    Ui += formUi(p4);

    Ui += "<h4>Apply P4</h4>";
    Ui += formUi(s0);
    leftbits = Xor(leftbits, s0);

    Ui += "<h4>XOR with Left Half</h4>";
    Ui += formUi(leftbits);

    Ui += "<h4>Interchange Left Half with Right Half</h4>";
    var t = leftbits;
    leftbits = rightbits;
    rightbits = t;
    Ui += "<h4>Now Left Half</h4>";
    Ui += formUi(leftbits);
    Ui += "<h4>Now Right Half</h4>";
    Ui += formUi(rightbits);

    Ui += "<h3 style='color:red'>2nd Cycle</h3>";

    Ui += "<h4>E/P</h4>";
    Ui += formUi(ep);
    rightbits_changed = applyep(rightbits);
    Ui += "<h4>Apply E/P on rightbits</h4>";
    Ui += formUi(rightbits_changed);
    rightbits_changed = Xor(rightbits_changed, key1);
    Ui += "<h4>Xor With Key 1</h4>";

    Ui += "<h4>Key 1</h4>";
    Ui += formUi(key1);

    Ui += "<h4>After Xor</h4>";
    Ui += formUi(rightbits_changed);

    Ui += "<h4>Divide this into two halfs :</h4>";
    left_half = left(rightbits_changed);
    Ui += "<h4>Left Half</h4>";
    Ui += formUi(left_half);
    right_half = right(rightbits_changed);
    Ui += "<h4>Right Half</h4>";
    Ui += formUi(right_half);

    Ui += "<h4>Apply S boxes: </h4>";
    Ui += formUi2(s0, "S0");



    Ui += formUi2(s1, "S1");
    Ui += "<h4>1'st and 4th bit together in Decimal Form act as Row</h4>";
    Ui += "<h4>2'nd and 3'rd bit together in Decimal Form act as Column</h4>";
    Ui += "<table class='table table-hover table-bordered text-center'><tr><td style='background-color:green;color:white;font-size:26px'>Outer</td><td style='background-color:blue;color:white;font-size:26px'>Inner</td><td style='background-color:blue;color:white;font-size:26px'>Inner</td><td style='background-color:green;color:white;font-size:26px'>Outer</td></tr></table>";
    s0 = applys0(left_half);
    s1 = applys1(right_half);
    Ui += "<h4>For S0 use Left Half</h4>";
    Ui += formUi(left_half);
    Ui += "<h4>Row (outer bits) <span class='fa fa-arrow-circle-right' style='padding-right:10px;'></span>" + left_half[0] + "" + left_half[3] + " = " + binaryDecimal(left_half[0] + "" + left_half[3]) + " </h4>";
    Ui += "<h4>Column (inner bits) <span class='fa fa-arrow-circle-right' style='padding-right:10px;'></span>" + left_half[1] + "" + left_half[2] + " = " + binaryDecimal(left_half[1] + "" + left_half[2]) + " </h4>";
    Ui += "<h4>Substitution from S0</h4>";
    Ui += formUi(binaryDecimal(s0));

    Ui += "<h4>For S1 use Right Half</h4>";
    Ui += formUi(right_half);
    Ui += "<h4>Row (outer bits) <span class='fa fa-arrow-circle-right' style='padding-right:10px;'></span>" + right_half[0] + "" + right_half[3] + " = " + binaryDecimal(right_half[0] + "" + right_half[3]) + " </h4>";
    Ui += "<h4>Column (inner bits) <span class='fa fa-arrow-circle-right' style='padding-right:10px;'></span>" + right_half[1] + "" + right_half[2] + " = " + binaryDecimal(right_half[1] + "" + right_half[2]) + " </h4>";
    Ui += "<h4>Substitution from S1</h4>";
    Ui += formUi(binaryDecimal(s1));
    s0 = s0 + s1;
    s0 = makelength4(s0);
    Ui += "<h4>Combine Both in Binary</h4>";
    Ui += formUi(s0);
    s0 = applyp4(s0);
    Ui += "<h4>P4:</h4>";
    Ui += formUi(p4);

    Ui += "<h4>Apply P4</h4>";
    Ui += formUi(s0);
    leftbits = Xor(leftbits, s0);
    Ui += "<h4>XOR with Left Half</h4>";
    Ui += formUi(leftbits);

    leftbits = leftbits + rightbits;
    Ui += "<h4>Combine the result</h4>";
    Ui += formUi(leftbits);
    leftbits = applyIPinv(leftbits);
    Ui += "<h4>IP inverse</h4>";
    Ui += formUi(ipinv);
    Ui += "<h4>Appl IP inverse on result</h4>";
    Ui += formUi(leftbits);

    Ui += "<h4>Final Cipher Text</h4>";
    Ui += formUi(leftbits);
    output.push(leftbits);
    output.push(Ui);
    return output;

}
$(document).ready(function() {

    $("#encode").click(function() {
        var input = $("#input").val();
        var key = $("#key").val();
        if (input == "") {
            $("#error").html("No text Input");
            $("#resdiv").hide();
            $("#matrix").html("");
        } else {
            var error = 0;
            var error = checkboolean(input);
            if (error == 0) {
                error = checkboolean(key);
            }
            if (key.length != 10 && error == 0) {
                error = 2;
            }
            if (input.length != 8 && error == 0) {
                error = 3;
            }
            if (error == 0) {
                input += "";
                key += "";
                var output = encode(input, key);
                var decodedtext = output[0];
                var matrixUi = output[1];
                $("#inputstring").html("Input String");
                $("#resultstring").html("Cipher Text");
                $("#error").html("");
                $("#matrix").html(matrixUi);
                $("#plaintext").html("<h4>" + input + "</h4>");
                $("#encodedtext").html("<h4>" + decodedtext + "</h4>");
                $("#resdiv").show();
            } else {
                if (error == 1) {
                    $("#error").html("Please enter boolean numbers");
                } else if (error == 2) {
                    $("#error").html("Please enter 10 bit key");
                } else if (error == 3)
                    $("#error").html("Please enter 8 bit plain text");
                $("#resdiv").hide();
            }
        }

    });
    $("#decode").click(function() {
        var input = $("#input").val();
        var key = $("#key").val();
        if (input == "") {
            $("#error").html("No text Input");
            $("#resdiv").hide();
        } else {
            var error = 0;
            var error = checkboolean(input);
            if (error == 0) {
                error = checkboolean(key);
            }
            if (key.length != 10 && error == 0) {
                error = 2;
            }
            if (input.length != 8 && error == 0) {
                error = 3;
            }
            if (error == 0) {
                input += "";
                key += "";
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
            } else {
                if (error == 1) {
                    $("#error").html("Please enter boolean numbers");
                } else if (error == 2) {
                    $("#error").html("Please enter 10 bit key");
                } else if (error == 3)
                    $("#error").html("Please enter 8 bit plain text");
                $("#resdiv").hide();
            }
        }

    });

});