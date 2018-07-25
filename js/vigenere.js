function MakeLength(key,length){
	var l=key.length;
	var m=0;
	for(var i=l;i<length;i++)
	{
		key+=key[m];
		m++;
		if(m==l)
		{
			m=0;
		}
	}
	return key;
}
function encode(input,key){
	var sub=[];
	var matrix=[];
	for(i=0;i<26;i++)
	{
		sub=[];
		for(j=0;j<26;j++)
		{
			m=65+i+j;
			if(m>90)
			{
				m=m-26;
			}
			sub.push(String.fromCharCode(m));
		}
		matrix.push(sub);
	}
	var s="";
	for(i=0;i<input.length;i++)
	{
		var t=input.charCodeAt(i);
		var k=key.charCodeAt(i);
		s+=matrix[t-65][k-65];
	}
	return s;
}
function decode(input,key){
	var sub=[];
	var matrix=[];
	for(i=0;i<26;i++)
	{
		sub=[];
		for(j=0;j<26;j++)
		{
			m=65+i+j;
			if(m>90)
			{
				m=m-26;
			}
			sub.push(String.fromCharCode(m));
		}
		matrix.push(sub);
	}
	var s="";
	for(i=0;i<input.length;i++)
	{
		var t=input.charCodeAt(i);
		var k=key.charCodeAt(i);
		s+=String.fromCharCode(matrix[k-65].indexOf(input[i])+65);
	}
	return s;
}
$(document).ready(function(){

	$("#encode").click(function() {
        var input = $("#input").val();
        var key = $("#key").val();
        input=input.toUpperCase();
        key=key.toUpperCase();
        key=MakeLength(key,input.length);
        
        var encodedtext=encode(input,key);
        if (input == "") {
            $("#error").html("No text Input");
            $("#resdiv").hide();
        } else {
        	$("#inputstring").html("Input String");
        	$("#resultstring").html("Cipher Text");
            $("#error").html("");
            $("#plaintext").html("<h4>" + input + "</h4>");
            $("#encodedtext").html("<h4>" + encodedtext + "</h4>");
            $("#resdiv").show();
        }

    });
    $("#decode").click(function() {
        var input = $("#input").val();
        var key = $("#key").val();
        input=input.toUpperCase();
        key=key.toUpperCase();
        key=MakeLength(key,input.length);
        
        var decodedtext=decode(input,key);
        if (input == "") {
            $("#error").html("No text Input");
            $("#resdiv").hide();
        } else {
        	$("#inputstring").html("Cipher Text");
        	$("#resultstring").html("Decoded Text");
            $("#error").html("");
            $("#plaintext").html("<h4>" + input + "</h4>");
            $("#encodedtext").html("<h4>" + decodedtext + "</h4>");
            $("#resdiv").show();
        }

    });

});