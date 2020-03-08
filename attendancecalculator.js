
window.onload=function() {



var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
document.getElementById("welc").innerHTML = "Hi! "+queries[0].slice(10)+" "+queries[1].slice(9);

var s2p=0;
var s2t=0;
var s3p=0;
var s3t=0;
var s4p=0;
var s4t=0;
var s5p=0;
var s5t=0;
var s6p=0;
var s6t=0;
var s7p=0;
var s7t=0;
var s8p=0;
var s8t=0;

	document.getElementById('s1').innerHTML=queries[2].slice(9);
	document.getElementById('s2').innerHTML=queries[3].slice(9);
	document.getElementById('s3').innerHTML=queries[4].slice(9);
	document.getElementById('s4').innerHTML=queries[5].slice(9);
	document.getElementById('s5').innerHTML=queries[6].slice(9);
	document.getElementById('s6').innerHTML=queries[7].slice(9);
	document.getElementById('s7').innerHTML=queries[8].slice(9);
	document.getElementById('s8').innerHTML=queries[9].slice(9);

s1p=localStorage.getItem("s1p");
s1t=localStorage.getItem("s1t");
var atp1=s1p/s1t*100;
s1p=Number(s1p);
s1t=Number(s1t);
document.getElementById("s1pr").style.width=atp1+"%";
document.getElementById("s1pr").innerHTML=atp1+"%";

s2p=localStorage.getItem("s2p");
s2t=localStorage.getItem("s2t");
var atp2=s2p/s2t*100;
s2p=Number(s2p);
s2t=Number(s2t);
document.getElementById("s2pr").style.width=atp2+"%";
document.getElementById("s2pr").innerHTML=atp2+"%";

s3p=localStorage.getItem("s3p");
s3t=localStorage.getItem("s3t");
var atp3=s3p/s3t*100;
s3p=Number(s3p);
s3t=Number(s3t);
document.getElementById("s3pr").style.width=atp3+"%";
document.getElementById("s3pr").innerHTML=atp3+"%";

s4p=localStorage.getItem("s4p");
s4t=localStorage.getItem("s4t");
var atp4=s4p/s4t*100;
s4p=Number(s4p);
s4t=Number(s4t);
document.getElementById("s4pr").style.width=atp4+"%";
document.getElementById("s4pr").innerHTML=atp4+"%";

s5p=localStorage.getItem("s5p");
s5t=localStorage.getItem("s5t");
var atp5=s5p/s5t*100;
s5p=Number(s5p);
s5t=Number(s5t);
document.getElementById("s5pr").style.width=atp5+"%";
document.getElementById("s5pr").innerHTML=atp5+"%";

s6p=localStorage.getItem("s6p");
s6t=localStorage.getItem("s6t");
var atp6=s6p/s6t*100;
s6p=Number(s6p);
s6t=Number(s6t);
document.getElementById("s6pr").style.width=atp6+"%";
document.getElementById("s6pr").innerHTML=atp6+"%";

s7p=localStorage.getItem("s7p");
s7t=localStorage.getItem("s7t");
var atp7=s7p/s7t*100;
s7p=Number(s7p);
s7t=Number(s7t);
document.getElementById("s7pr").style.width=atp7+"%";
document.getElementById("s7pr").innerHTML=atp7+"%";

s8p=localStorage.getItem("s8p");
s8t=localStorage.getItem("s8t");
var atp8=s8p/s8t*100;
s8p=Number(s8p);
s8t=Number(s8t);
document.getElementById("s8pr").style.width=atp8+"%";
document.getElementById("s8pr").innerHTML=atp8+"%";

document.getElementById("s1p").onclick=function() {
	if (localStorage.getItem("s1p") == null) {
		var s1p=0;
		var s1t=0;
		s1p=s1p+1;
	s1t=s1t+1;
	var atp1=s1p/s1t*100;
	document.getElementById("s1pr").style.width=atp1+"%";
	document.getElementById("s1pr").innerHTML=atp1+"%";
	localStorage.setItem("s1p",s1p);
	localStorage.setItem("s1t",s1t);
	}
	else{
		s1p=localStorage.getItem("s1p");
		s1t=localStorage.getItem("s1t");
		s1p=Number(s1p);
		s1t=Number(s1t);
		s1p=s1p+1;
	s1t=s1t+1;
	var atp1=s1p/s1t*100;
	document.getElementById("s1pr").style.width=atp1+"%";
	document.getElementById("s1pr").innerHTML=atp1+"%";
	localStorage.setItem("s1p",s1p);
	localStorage.setItem("s1t",s1t);
	}
	
}
document.getElementById("s1a").onclick=function() {
	if (localStorage.getItem("s1p") == null) {
		var s1t=0;
		var s1p=0;
	s1t=s1t+1;
	atp1=s1p/s1t*100;
	document.getElementById("s1pr").style.width=atp1+"%";
	document.getElementById("s1pr").innerHTML=atp1+"%";
	localStorage.setItem("s1p",s1p);
	localStorage.setItem("s1t",s1t);
	}
	else{
		s1p=localStorage.getItem("s1p");
		s1t=localStorage.getItem("s1t");
		s1p=Number(s1p);
		s1t=Number(s1t);
	s1t=s1t+1;
	var atp1=s1p/s1t*100;
	document.getElementById("s1pr").style.width=atp1+"%";
	document.getElementById("s1pr").innerHTML=atp1+"%";
	localStorage.setItem("s1p",s1p);
	localStorage.setItem("s1t",s1t);
	}
}
document.getElementById("s2p").onclick=function() {
	if (localStorage.getItem("s2p") == null) {
		var s2t=0;
		var s2p=0;
	s2p=s2p+1;
	s2t=s2t+1;
	atp2=s2p/s2t*100;
	document.getElementById("s2pr").style.width=atp2+"%";
	document.getElementById("s2pr").innerHTML=atp2+"%";
	localStorage.setItem("s2p",s2p);
	localStorage.setItem("s2t",s2t);
}

	else{
		s2p=localStorage.getItem("s2p");
		s2t=localStorage.getItem("s2t");
		s2p=Number(s2p);
		s2t=Number(s2t);
		s2p=s2p+1;
	s2t=s2t+1;
	var atp2=s2p/s2t*100;
	document.getElementById("s2pr").style.width=atp2+"%";
	document.getElementById("s2pr").innerHTML=atp2+"%";
	localStorage.setItem("s2p",s2p);
	localStorage.setItem("s2t",s2t);
	}
}
document.getElementById("s2a").onclick=function() {
		if (localStorage.getItem("s2p") == null) {
		var s2t=0;
		var s2p=0;
	s2t=s2t+1;
	atp2=s2p/s2t*100;
	document.getElementById("s2pr").style.width=atp2+"%";
	document.getElementById("s2pr").innerHTML=atp2+"%";
	localStorage.setItem("s2p",s2p);
	localStorage.setItem("s2t",s2t);
}

	else{
		s2p=localStorage.getItem("s2p");
		s2t=localStorage.getItem("s2t");
		s2p=Number(s2p);
		s2t=Number(s2t);
	s2t=s2t+1;
	var atp2=s2p/s2t*100;
	document.getElementById("s2pr").style.width=atp2+"%";
	document.getElementById("s2pr").innerHTML=atp2+"%";
	localStorage.setItem("s2p",s2p);
	localStorage.setItem("s2t",s2t);
	}
}
document.getElementById("s3p").onclick=function() {
	    if (localStorage.getItem("s3p") == null) {
    var s3t=0;
    var s3p=0;
    s3p=s3p+1;
  s3t=s3t+1;
  atp3=s3p/s3t*100;
  document.getElementById("s3pr").style.width=atp3+"%";
  document.getElementById("s3pr").innerHTML=atp3+"%";
  localStorage.setItem("s3p",s3p);
  localStorage.setItem("s3t",s3t);
}

  else{
    s3p=localStorage.getItem("s3p");
    s3t=localStorage.getItem("s3t");
    s3p=Number(s3p);
    s3t=Number(s3t);
   s3p=s3p+1;
  s3t=s3t+1;
  var atp3=s3p/s3t*100;
  document.getElementById("s3pr").style.width=atp3+"%";
  document.getElementById("s3pr").innerHTML=atp3+"%";
  localStorage.setItem("s3p",s3p);
  localStorage.setItem("s3t",s3t);
  }  
}
document.getElementById("s3a").onclick=function() {
		    if (localStorage.getItem("s3p") == null) {
    var s3t=0;
    var s3p=0;
  s3t=s3t+1;
  atp3=s3p/s3t*100;
  document.getElementById("s3pr").style.width=atp3+"%";
  document.getElementById("s3pr").innerHTML=atp3+"%";
  localStorage.setItem("s3p",s3p);
  localStorage.setItem("s3t",s3t);
}

  else{
    s3p=localStorage.getItem("s3p");
    s3t=localStorage.getItem("s3t");
    s3p=Number(s3p);
    s3t=Number(s3t);
  s3t=s3t+1;
  var atp3=s3p/s3t*100;
  document.getElementById("s3pr").style.width=atp3+"%";
  document.getElementById("s3pr").innerHTML=atp3+"%";
  localStorage.setItem("s3p",s3p);
  localStorage.setItem("s3t",s3t);
  } 
}
document.getElementById("s4p").onclick=function() {
	    if (localStorage.getItem("s4p") == null) {
    var s4t=0;
    var s4p=0;
  s4p=s4p+1; 
  s4t=s4t+1;
  atp4=s4p/s4t*100;
  document.getElementById("s4pr").style.width=atp4+"%";
  document.getElementById("s4pr").innerHTML=atp4+"%";
  localStorage.setItem("s4p",s4p);
  localStorage.setItem("s4t",s4t);
}

  else{
    s4p=localStorage.getItem("s4p");
    s4t=localStorage.getItem("s4t");
    s4p=Number(s4p);
    s4t=Number(s4t);
    s4p=s4p+1;
  s4t=s4t+1;
  var atp4=s4p/s4t*100;
  document.getElementById("s4pr").style.width=atp4+"%";
  document.getElementById("s4pr").innerHTML=atp4+"%";
  localStorage.setItem("s4p",s4p);
  localStorage.setItem("s4t",s4t);
  }  
}
document.getElementById("s4a").onclick=function() {
	    if (localStorage.getItem("s4p") == null) {
    var s4t=0;
    var s4p=0;
  s4t=s4t+1;
  atp4=s4p/s4t*100;
  document.getElementById("s4pr").style.width=atp4+"%";
  document.getElementById("s4pr").innerHTML=atp4+"%";
  localStorage.setItem("s4p",s4p);
  localStorage.setItem("s4t",s4t);
}

  else{
    s4p=localStorage.getItem("s4p");
    s4t=localStorage.getItem("s4t");
    s4p=Number(s4p);
    s4t=Number(s4t);
  s4t=s4t+1;
  var atp4=s4p/s4t*100;
  document.getElementById("s4pr").style.width=atp4+"%";
  document.getElementById("s4pr").innerHTML=atp4+"%";
  localStorage.setItem("s4p",s4p);
  localStorage.setItem("s4t",s4t);
  }  
}
document.getElementById("s5p").onclick=function() {
	    if (localStorage.getItem("s5p") == null) {
    var s5t=0;
    var s5p=0;
    s5p=s5p+1;
  s5t=s5t+1;
  atp5=s5p/s5t*100;
  document.getElementById("s5pr").style.width=atp5+"%";
  document.getElementById("s5pr").innerHTML=atp5+"%";
  localStorage.setItem("s5p",s5p);
  localStorage.setItem("s5t",s5t);
}

  else{
    s5p=localStorage.getItem("s5p");
    s5t=localStorage.getItem("s5t");
    s5p=Number(s5p);
    s5t=Number(s5t);
    s5p=s5p+1;
  s5t=s5t+1;
  var atp5=s5p/s5t*100;
  document.getElementById("s5pr").style.width=atp5+"%";
  document.getElementById("s5pr").innerHTML=atp5+"%";
  localStorage.setItem("s5p",s5p);
  localStorage.setItem("s5t",s5t);
  }  
}
document.getElementById("s5a").onclick=function() {
    if (localStorage.getItem("s5p") == null) {
    var s5t=0;
    var s5p=0;
  s5t=s5t+1;
  atp5=s5p/s5t*100;
  document.getElementById("s5pr").style.width=atp5+"%";
  document.getElementById("s5pr").innerHTML=atp5+"%";
  localStorage.setItem("s5p",s5p);
  localStorage.setItem("s5t",s5t);
}

  else{
    s5p=localStorage.getItem("s5p");
    s5t=localStorage.getItem("s5t");
    s5p=Number(s5p);
    s5t=Number(s5t);
  s5t=s5t+1;
  var atp5=s5p/s5t*100;
  document.getElementById("s5pr").style.width=atp5+"%";
  document.getElementById("s5pr").innerHTML=atp5+"%";
  localStorage.setItem("s5p",s5p);
  localStorage.setItem("s5t",s5t);
  }  
}
document.getElementById("s6p").onclick=function() {
	    if (localStorage.getItem("s6p") == null) {
    var s6t=0;
    var s6p=0;
    s6p=s6p+1;
  s6t=s6t+1;
  atp6=s6p/s6t*100;
  document.getElementById("s6pr").style.width=atp6+"%";
  document.getElementById("s6pr").innerHTML=atp6+"%";
  localStorage.setItem("s6p",s6p);
  localStorage.setItem("s6t",s6t);
}

  else{
    s6p=localStorage.getItem("s6p");
    s6t=localStorage.getItem("s6t");
    s6p=Number(s6p);
    s6t=Number(s6t);
    s6p=s6p+1;
  s6t=s6t+1;
  var atp6=s6p/s6t*100;
  document.getElementById("s6pr").style.width=atp6+"%";
  document.getElementById("s6pr").innerHTML=atp6+"%";
  localStorage.setItem("s6p",s6p);
  localStorage.setItem("s6t",s6t);
  }  
}
document.getElementById("s6a").onclick=function() {
	    if (localStorage.getItem("s6p") == null) {
    var s6t=0;
    var s6p=0;
  s6t=s6t+1;
  atp6=s6p/s6t*100;
  document.getElementById("s6pr").style.width=atp6+"%";
  document.getElementById("s6pr").innerHTML=atp6+"%";
  localStorage.setItem("s6p",s6p);
  localStorage.setItem("s6t",s6t);
}

  else{
    s6p=localStorage.getItem("s6p");
    s6t=localStorage.getItem("s6t");
    s6p=Number(s6p);
    s6t=Number(s6t);
  s6t=s6t+1;
  var atp6=s6p/s6t*100;
  document.getElementById("s6pr").style.width=atp6+"%";
  document.getElementById("s6pr").innerHTML=atp6+"%";
  localStorage.setItem("s6p",s6p);
  localStorage.setItem("s6t",s6t);
  }  
}
document.getElementById("s7p").onclick=function() {
    if (localStorage.getItem("s7p") == null) {
    var s7t=0;
    var s7p=0;
    s7p=s7p+1;
  s7t=s7t+1;
  atp7=s7p/s7t*100;
  document.getElementById("s7pr").style.width=atp7+"%";
  document.getElementById("s7pr").innerHTML=atp7+"%";
  localStorage.setItem("s7p",s7p);
  localStorage.setItem("s7t",s7t);
}

  else{
    s7p=localStorage.getItem("s7p");
    s7t=localStorage.getItem("s7t");
    s7p=Number(s7p);
    s7t=Number(s7t);
    s7p=s7p+1;
  s7t=s7t+1;
  var atp7=s7p/s7t*100;
  document.getElementById("s7pr").style.width=atp7+"%";
  document.getElementById("s7pr").innerHTML=atp7+"%";
  localStorage.setItem("s7p",s7p);
  localStorage.setItem("s7t",s7t);
  }  
}
document.getElementById("s7a").onclick=function() {
	    if (localStorage.getItem("s7p") == null) {
    var s7t=0;
    var s7p=0;
  s7t=s7t+1;
  atp7=s7p/s7t*100;
  document.getElementById("s7pr").style.width=atp7+"%";
  document.getElementById("s7pr").innerHTML=atp7+"%";
  localStorage.setItem("s7p",s7p);
  localStorage.setItem("s7t",s7t);
}

  else{
    s7p=localStorage.getItem("s7p");
    s7t=localStorage.getItem("s7t");
    s7p=Number(s7p);
    s7t=Number(s7t);
  s7t=s7t+1;
  var atp7=s7p/s7t*100;
  document.getElementById("s7pr").style.width=atp7+"%";
  document.getElementById("s7pr").innerHTML=atp7+"%";
  localStorage.setItem("s7p",s7p);
  localStorage.setItem("s7t",s7t);
  }  
}
document.getElementById("s8p").onclick=function() {
	    if (localStorage.getItem("s8p") == null) {
    var s8t=0;
    var s8p=0;
    s8p=s8p+1;
  s8t=s8t+1;
  atp8=s8p/s8t*100;
  document.getElementById("s8pr").style.width=atp8+"%";
  document.getElementById("s8pr").innerHTML=atp8+"%";
  localStorage.setItem("s8p",s8p);
  localStorage.setItem("s8t",s8t);
}

  else{
    s8p =localStorage.getItem("s8p");
    s8t=localStorage.getItem("s8t");
    s8p=Number(s8p);
    s8t=Number(s8t);
    s8p=s8p+1;
  s8t=s8t+1;
  var atp8=s8p/s8t*100;
  document.getElementById("s8pr").style.width=atp8+"%";
  document.getElementById("s8pr").innerHTML=atp8+"%";
  localStorage.setItem("s8p",s8p);
  localStorage.setItem("s8t",s8t);
  }  
}
document.getElementById("s8a").onclick=function() {
	    if (localStorage.getItem("s8p") == null) {
    var s8t=0;
    var s8p=0;
  s8t=s8t+1;
  atp8=s8p/s8t*100;
  document.getElementById("s8pr").style.width=atp8+"%";
  document.getElementById("s8pr").innerHTML=atp8+"%";
  localStorage.setItem("s8p",s8p);
  localStorage.setItem("s8t",s8t);
}

  else{
    s8p =localStorage.getItem("s8p");
    s8t=localStorage.getItem("s8t");
    s8p=Number(s8p);
    s8t=Number(s8t);
  s8t=s8t+1;
  var atp8=s8p/s8t*100;
  document.getElementById("s8pr").style.width=atp8+"%";
  document.getElementById("s8pr").innerHTML=atp8+"%";
  localStorage.setItem("s8p",s8p);
  localStorage.setItem("s8t",s8t);
  }  
}
}