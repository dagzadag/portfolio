


function generate() {
	var k = $("#Url").val();
    var one = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 3);
    var tow = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 9);
    var three = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 18);
    var four = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 24);
    var five = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 30);

    setTimeout(function(){
    var inpu = '<div class="col-lg-3"><input  class="form-control copyMe" type="text"  value="';
	document.getElementById('DOSSIERForm').innerHTML += inpu + one.responseJSON.TotalRembourser +'" id="one" onclick ="copyone()"></div>';
	document.getElementById('DOSSIERForm').innerHTML += inpu + tow.responseJSON.TotalRembourser +'"id="tow" onclick ="copytow()"></div>';
	document.getElementById('DOSSIERForm').innerHTML += inpu + three.responseJSON.TotalRembourser +'"id="three" onclick ="copythree()"></div>';
	document.getElementById('DOSSIERForm').innerHTML += inpu + four.responseJSON.TotalRembourser +'"id="four" onclick ="copyfour()"></div>';
	document.getElementById('DOSSIERForm').innerHTML += inpu + five.responseJSON.TotalRembourser +'"id="five" onclick ="copyfive()"></div>';    
    },4000)
}
function copyone(){
  var copone =document.getElementById("one");
  copyone.select();
  document.execCommand("copy");
}
function copytow(){
  var coptow =document.getElementById("tow");
  copytow.select();
  document.execCommand("copy");
}
function copythree(){
  var copthree =document.getElementById("three");
  copythree.select();
  document.execCommand("copy");
}
function copyfour(){
  var copfour =document.getElementById("four");
  copyfour.select();
  document.execCommand("copy");
}
function copyfive(){
  var copfive =document.getElementById("five");
  copyfive.select();
  document.execCommand("copy");
}
