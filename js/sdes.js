function applyP10(input)
{
    var output="";
    var p10=[3,5,2,7,4,10,1,9,8,6];
    for(i=0;i<p10.length;i++)
    {
        output+=input[p10[i]-1];
    }
    return output;
}
function applyP8(input)
{
    var output="";
    var p8=[6,3,7,4,8,5,10,9];
    for(i=0;i<p8.length;i++)
    {
        output+=input[p8[i]-1];
    }
    return output;
}
function applyIP(input)
{
    var output="";
    var ip=[2,6,3,1,4,8,5,7];
    for(i=0;i<ip.length;i++)
    {
        output+=input[ip[i]-1];
    }
    return output;
}
function applyIPinv(input)
{
    var output="";
    var ipinv=[4,1,3,5,7,2,8,6];
    for(i=0;i<ipinv.length;i++)
    {
        output+=input[ipinv[i]-1];
    }
    return output;
}
function applyep(input)
{
    var output="";
    var ep=[4,1,2,3,2,3,4,1];
    for(i=0;i<ep.length;i++)
    {
        output+=input[ep[i]-1];
    }
    return output;
}
function applyp4(input)
{
    var output="";
    var p4=[2,4,3,1];
    for(i=0;i<p4.length;i++)
    {
        output+=input[p4[i]-1];
    }
    return output;
}
function checkboolean(input)
{
    for(i=0;i<input.length;i++)
    {
        if(input[i]!=0 && input[i]!=1)
        {
            return 1;
        }
    }
    return 0;
}
function cls(input,times)
{
    var left=input.substr(0,5);
    var right=input.substr(5);
    var output="";
    for(var i=0;i<times;i++)
    {
        left=shift(left);
    }
    for(var i=0;i<times;i++)
    {
        right=shift(right);
    }
    output=left+right;
    return output;
}
function shift(input)
{
    var output=input.substr(1);
    output+=input[0];
    return output;
}
function right(input)
{
    var output=input.substr(4,4);
    return output;
}
function left(input)
{
    var output=input.substr(0,4);
    return output;
}
function Xor(a,b)
{
    var s="";
    for(var i=0;i<a.length;i++)
    {
        var x=a[i];
        var y=b[i];
        if(x==y)
            s+="0";
        else
            s+="1";
    }
    return s;
}
function applys0(input)
{
    var inner=input[1]+input[2];
    var outer=input[0]+input[3];
    inner=binaryDecimal(inner);
    outer=binaryDecimal(outer);
    s0=[[1,0,3,2],[3,2,1,0],[0,2,1,3],[3,1,3,2]];
    var binaryEq=decimalBinary(s0[outer][inner]);
    binaryEq+="";
    return binaryEq;
}
function applys1(input)
{   
    var inner=input[1]+input[2];
    var outer=input[0]+input[3];
    inner=binaryDecimal(inner);
    outer=binaryDecimal(outer);
    s1=[[0,1,2,3],[2,0,1,3],[3,0,1,0],[3,1,0,3]];
    var binaryEq=decimalBinary(s1[outer][inner]);
    binaryEq+="";
    return binaryEq;
}
function reverse(input)
{
    var s="";
    for(var i=input.length-1;i>=0;i--)
        s+=input[i];
    return s;
}
function decimalBinary(input)
{
    var s="";
    if(input==0)
        return 0;
    while(input>0)
    {
        var b=input%2;
        s+=b;
        input=Math.floor(input/2);
    }
    s=reverse(s);
    return s;
}
function binaryDecimal(input)
{
    var s=0;
    input=reverse(input);
    for(i=0;i<input.length;i++)
    {
        s+=input[i]*Math.pow(2,i);
    }
    s=s+"";
    return s;
}
function makelength4(input)
{
    var output=input;
    for(var i=4;i>input.length;i--)
        output="0"+output;
    return output;
}
function encode(input,key)
{
    var output=[];
    var key=applyP10(key);
    key=cls(key,1);
    
    var key1=applyP8(key);
    key=cls(key,2);
    var key2=applyP8(key);
    input=applyIP(input);
    leftbits=left(input);
    rightbits=right(input);

    rightbits_changed=applyep(rightbits);
    rightbits_changed=Xor(rightbits_changed,key1);
    left_half=left(rightbits_changed);
    right_half=right(rightbits_changed);
    s0=applys0(left_half);
    s1=applys1(right_half);
    
    s0=s0+s1;
    s0=makelength4(s0);

    s0=applyp4(s0);

    leftbits=Xor(leftbits,s0);

    var t=leftbits;
    leftbits=rightbits;
    rightbits=t;

    rightbits_changed=applyep(rightbits);

    rightbits_changed=Xor(rightbits_changed,key2);

    left_half=left(rightbits_changed);
    right_half=right(rightbits_changed);

    s0=applys0(left_half);
    s1=applys1(right_half);
    s0=s0+s1;
    s0=makelength4(s0);

    s0=applyp4(s0);
    leftbits=Xor(leftbits,s0);

    leftbits=leftbits+rightbits;
    leftbits=applyIPinv(leftbits);

    output.push(leftbits);
    output.push("");
    return output;

}
function decode(input,key)
{
    var output=[];
    var key=applyP10(key);
    key=cls(key,1);
    
    var key1=applyP8(key);
    //var key2="01000011";
    key=cls(key,2);
    var key2=applyP8(key);
    //var key1="10100100";
    input=applyIP(input);

    leftbits=left(input);
    rightbits=right(input);
    rightbits_changed=applyep(rightbits);

    rightbits_changed=Xor(rightbits_changed,key2);
    left_half=left(rightbits_changed);
    right_half=right(rightbits_changed);
    s0=applys0(left_half);
    s1=applys1(right_half);

    s0=s0+s1;
    s0=makelength4(s0);
    s0=applyp4(s0);
    leftbits=Xor(leftbits,s0);

    var t=leftbits;
    leftbits=rightbits;
    rightbits=t;

    rightbits_changed=applyep(rightbits);
    rightbits_changed=Xor(rightbits_changed,key1);
    left_half=left(rightbits_changed);
    right_half=right(rightbits_changed);
    s0=applys0(left_half);
    s1=applys1(right_half);
    s0=s0+s1;
    s0=makelength4(s0);
    s0=applyp4(s0);
    leftbits=Xor(leftbits,s0);

    leftbits=leftbits+rightbits;
    leftbits=applyIPinv(leftbits);

    output.push(leftbits);
    output.push("");
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
            var error=0;
            var error=checkboolean(input);
            if(error==0)
            {
                error=checkboolean(key);
            }
            if(key.length!=10 && error==0)
            {
                error=2;
            }
            if(input.length!=8 && error==0)
            {
                error=3;
            }
            if(error==0)
            {
                input+="";
                key+="";
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
            }
            else
            {
                if(error==1)
                {
                 $("#error").html("Please enter boolean numbers");
                }
                else if(error==2)
                {
                    $("#error").html("Please enter 10 bit key");
                }
                else if(error==3)
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
            var error=0;
            var error=checkboolean(input);
            if(error==0)
            {
                error=checkboolean(key);
            }
            if(key.length!=10 && error==0)
            {
                error=2;
            }
            if(input.length!=8 && error==0)
            {
                error=3;
            }
            if(error==0)
            {
                input+="";
                key+="";
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
            else
            {
                if(error==1)
                {
                 $("#error").html("Please enter boolean numbers");
                }
                else if(error==2)
                {
                    $("#error").html("Please enter 10 bit key");
                }
                else if(error==3)
                $("#error").html("Please enter 8 bit plain text");
                $("#resdiv").hide();
            }
        }

    });

});