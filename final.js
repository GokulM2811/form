function check1()
{
	var r = document.getElementById("field1").value;
	var re1 = /^[A-Za-z]{2,15}$/;
	if(re1.test(r))
	{
		document.getElementById("para").style.color = "green";
		document.getElementById("para").innerHTML = "VALID";
		
		
	}
	else
	{
		document.getElementById("para").innerHTML = "INVALID";
		document.getElementById("para").style.color = "red";
	}
}
function check2()
{
	var q = document.getElementById("field2").value;
	var re2 = /^[A-Za-z]{1,15}$/;
	if(re2.test(q))
	{
		document.getElementById("para2").style.color = "green";
		document.getElementById("para2").innerHTML = "VALID";
		
		
	}
	else
	{
		document.getElementById("para2").innerHTML = "INVALID";
		document.getElementById("para2").style.color = "red";
	}
}
function check3()
{
	var p = document.getElementById("field3").value;
	var re3 = /^\d{3}-\d{3}-\d{4}$/;
	if(re3.test(p))
	{
		document.getElementById("cols3").style.color = "green";
		document.getElementById("cols3").innerHTML = "VALID";
		
		
	}
	else
	{
		document.getElementById("cols3").innerHTML = "INVALID";
		document.getElementById("cols3").style.color = "red";
	}
}
function check4()
{
	var m = document.getElementById("field4").value;
	if(m!="")
	{
		document.getElementById("cols4").style.color = "green";
		document.getElementById("cols4").innerHTML = "VALID";
		
		
	}
	else
	{
		document.getElementById("cols4").innerHTML = "INVALID";
		document.getElementById("cols4").style.color = "red";
	}
}
function check5()
{
	var m = document.getElementById("field5").value;
	if(m!="")
	{
		document.getElementById("cols5").style.color = "green";
		document.getElementById("cols5").innerHTML = "VALID";
		
		
	}
	else
	{
		document.getElementById("cols5").innerHTML = "INVALID";
		document.getElementById("cols5").style.color = "red";
	}
}
function check6()
{
	var m = document.getElementById("field6").value;
	if(m!="")
	{
		document.getElementById("cols6").style.color = "green";
		document.getElementById("cols6").innerHTML = "VALID";
		
		
	}
	else
	{
		document.getElementById("cols6").innerHTML = "INVALID";
		document.getElementById("cols6").style.color = "red";
	}
}
function check7()
{
	var m = document.getElementById("field7").value;
	if(m!="")
	{
		document.getElementById("cols7").style.color = "green";
		document.getElementById("cols7").innerHTML = "VALID";
		
		
	}
	else
	{
		document.getElementById("cols7").innerHTML = "INVALID";
		document.getElementById("cols7").style.color = "red";
	}
}
function check8()
{
	var m = document.getElementById("field8").value;
	if(m!="")
	{
		document.getElementById("cols8").style.color = "green";
		document.getElementById("cols8").innerHTML = "VALID";
		
		
	}
	else
	{
		document.getElementById("cols8").innerHTML = "INVALID";
		document.getElementById("cols8").style.color = "red";
	}
}
function check9()
{
	var m = document.getElementById("field9").value;
	if(m!="")
	{
		document.getElementById("cols9").style.color = "green";
		document.getElementById("cols9").innerHTML = "VALID";
		
		
	}
	else
	{
		document.getElementById("cols9").innerHTML = "INVALID";
		document.getElementById("cols9").style.color = "red";
	}
}
function check10()
{
	var m = document.getElementById("field10").value;
	if(m!="")
	{
		document.getElementById("cols10").style.color = "green";
		document.getElementById("cols10").innerHTML = "VALID";
		
		
	}
	else
	{
		document.getElementById("cols10").innerHTML = "INVALID";
		document.getElementById("cols10").style.color = "red";
	}
}
function tryy()
{
	document.getElementById("ki").innerHTML = "";	
	document.getElementById("ordersummery").innerHTML = "";
	document.getElementById("tj").innerHTML = "";
	document.getElementById("tj").innerHTML = "THANKS FOR YOUR REQUEST :) WE WILL CONTACT YOU SOON....";
	document.getElementById("para1").innerHTML = "";
		
}
function asa()
{
	alert("All the informatino provided by me are true and any false information may lead to other problems");
}
function terms_changed(termsCheckBox)
{
    if(termsCheckBox.checked)
	{
        document.getElementById("rt").disabled = false;
    }
	else
	{
        document.getElementById("rt").disabled = true;
    }
}
function docalc()
{
	var a = document.getElementById("field1").value;
	var b = document.getElementById("field2").value;
	var name = a+" "+b;
	var ph = document.getElementById("field3").value;
	var d = document.getElementById("field4").value;
	var e = document.getElementById("field5").value;
	var g = document.getElementById("field6").value;
	var h = document.getElementById("field7").value;
	var o = document.getElementById("field8").value;
	var i = document.getElementById("field9").value;
	var m = document.getElementById("field10").value;
	
	var re1 = /^[A-Za-z]{2,15}$/;
	var re2 = /^[A-Za-z]{1,15}$/;
	var re3 = /^\d{3}-\d{3}-\d{4}$/;
	
	if(re1.test(a))
	{
		if(re2.test(b))
		{
			if(re3.test(ph))
			{
				if(d!="")
				{
					if(g!="")
					{
						if(e!="")
						{
							if(h!="")
							{
								if(o!="")
								{
									if(i!="")
									{
										if(m!="")
										{
											
											document.getElementById("ki").style.color = "black";
											document.getElementById("ordersummery").innerHTML = "";
											document.getElementById("ki").innerHTML = "<strong> <u>	PREVIEW:</u> </strong><br>";
											document.getElementById("ordersummery").innerHTML += "<strong> <u>USER DETAIL:</u> </strong><br>";
											document.getElementById("ordersummery").innerHTML += "<u>NAME</u>:"+"   " + name.toUpperCase() + "<br>" ;
											document.getElementById("ordersummery").innerHTML += "<u>PHONE NUMBER</u>:" + ph + "<br>";
											//document.getElementById("ordersummery").innerHTML += "<strong> <u>ORDER DETAIL:</u> </strong><br>";
											document.getElementById("ordersummery").innerHTML += "<u>EMAIL ID</u>:" + d +"<br>";
											document.getElementById("ordersummery").innerHTML += "<u>ADDRESS</u>:" + g +"<br><br>";
											document.getElementById("ordersummery").innerHTML += "<b><u>VEHICLE DETAIL:</b></u><br>";
											document.getElementById("ordersummery").innerHTML += "<u>MAKE</u>:" + e.toUpperCase() + "<br>";
											document.getElementById("ordersummery").innerHTML += "<u>MODEL</u>:" + h + "<br>";
											document.getElementById("ordersummery").innerHTML += "<u>KMs DRIVEN</u>:" + o + "KMs<br>";
											document.getElementById("ordersummery").innerHTML += "<u>NO.OF.OWNERS</u>:" + i + "<br>";
											document.getElementById("ordersummery").innerHTML += "<u>INSPECTION DATE</u>:" + m + "<br><br>";
											document.getElementById("ordersummery").innerHTML += "<input type=\"checkbox\" id=\"cb\" onclick=\"terms_changed(this)\"/>";
											document.getElementById("ordersummery").innerHTML += "<lable for=\"cb\">I have read and accepting the<a href=\"#\" onclick=\"asa();\"> terms and condition</a></lable><br><br>";
											document.getElementById("tj").innerHTML = "";
					
											document.getElementById("ordersummery").innerHTML += "<button id=\"rt\" onclick=\"tryy();\" disabled>SUBMIT</button>";
										}
										else
									{
										document.getElementById("ki").innerHTML = "INVALID ENTRY OF <strong>INSPECTION DATE</strong>";
										document.getElementById("ki").style.color = "red";
										document.getElementById("ordersummery").innerHTML = "" ;
										document.getElementById("tj").innerHTML = "";
										document.getElementById("cols10").innerHTML = "INVALID";
										document.getElementById("cols10").style.color = "red";
									}
									}
									else
									{
										document.getElementById("ki").innerHTML = "INVALID ENTRY OF <strong>NO. OF OWNERS</strong>";
										document.getElementById("ki").style.color = "red";
										document.getElementById("ordersummery").innerHTML = "" ;
										document.getElementById("tj").innerHTML = "";
										document.getElementById("cols9").innerHTML = "INVALID";
										document.getElementById("cols9").style.color = "red";
									}
								}
								else
								{
									document.getElementById("ki").innerHTML = "INVALID ENTRY OF <strong>KMs DRIVEN</strong>";
									document.getElementById("ki").style.color = "red";
									document.getElementById("ordersummery").innerHTML = "" ;
									document.getElementById("tj").innerHTML = "";
									document.getElementById("cols8").innerHTML = "INVALID";
									document.getElementById("cols8").style.color = "red";
								}
							}
							else
							{
								document.getElementById("ki").innerHTML = "INVALID ENTRY OF <strong>VEHICLE MODEL</strong>";
								document.getElementById("ki").style.color = "red";
								document.getElementById("ordersummery").innerHTML = "" ;
								document.getElementById("tj").innerHTML = "";
								document.getElementById("cols7").innerHTML = "INVALID";
								document.getElementById("cols7").style.color = "red";
							}		
						}
						else
						{
							document.getElementById("ki").innerHTML = "INVALID ENTRY OF <strong>VEHICLE MAKE</strong>";
							document.getElementById("ki").style.color = "red";
							document.getElementById("ordersummery").innerHTML = "" ;
							document.getElementById("tj").innerHTML = "";
							document.getElementById("cols6").innerHTML = "INVALID";
							document.getElementById("cols6").style.color = "red";
						}
					}
					else
					{
						document.getElementById("ki").innerHTML = "INVALID ENTRY OF <strong>ADDRESS</strong>";
						document.getElementById("ki").style.color = "red";
						document.getElementById("ordersummery").innerHTML = "" ;
						document.getElementById("tj").innerHTML = "";
						document.getElementById("cols5").innerHTML = "INVALID";
						document.getElementById("cols5").style.color = "red";
					}
				}
				else
				{
					document.getElementById("ki").innerHTML = "INVALID ENTRY OF <strong>EMAIL ID</strong>";
					document.getElementById("ki").style.color = "red";
					document.getElementById("ordersummery").innerHTML = "" ;
					document.getElementById("tj").innerHTML = "";
					document.getElementById("cols4").innerHTML = "INVALID";
					document.getElementById("cols4").style.color = "red";
				}
			}
			else
			{
				document.getElementById("ki").innerHTML = "INVALID ENTRY OF <strong>PHONE NUMBER</strong>";
				document.getElementById("ki").style.color = "red";
				document.getElementById("ordersummery").innerHTML = "" ;
				document.getElementById("tj").innerHTML = "";
				document.getElementById("cols3").innerHTML = "INVALID";
				document.getElementById("cols3").style.color = "red";
			}
		}
		else
		{
			document.getElementById("ki").innerHTML = "INVALID ENTRY OF <strong>SECONDNAME</strong>";
			document.getElementById("ki").style.color = "red";
			document.getElementById("ordersummery").innerHTML = "" ;
			document.getElementById("tj").innerHTML = "";
			document.getElementById("para2").innerHTML = "INVALID";
			document.getElementById("para2").style.color = "red";
		}
	}
	else
	{
		document.getElementById("ki").innerHTML = "INVALID ENTRY OF <strong>FIRSTNAME</strong>";
		document.getElementById("ki").style.color = "red";
		document.getElementById("ordersummery").innerHTML = "" ;
		document.getElementById("tj").innerHTML = "";
		document.getElementById("para").innerHTML = "INVALID";
		document.getElementById("para").style.color = "red";
	}
}