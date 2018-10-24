


function generate() {
	var k = $("#Url").val();
    var one = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 3);
    var tow = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 9);
    var three = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 18);
    var four = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 24);
    var five = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 30);

    setTimeout(function(){
    var inpu = '<div class="col-lg-3"><input onclick ="copyMe()" class="form-control copyMe" type="text"  value="';
	document.getElementById('DOSSIERForm').innerHTML += inpu + one.responseJSON.TotalRembourser +'" id="one"></div>';
	document.getElementById('DOSSIERForm').innerHTML += inpu + tow.responseJSON.TotalRembourser +'"id="tow"></div>';
	document.getElementById('DOSSIERForm').innerHTML += inpu + three.responseJSON.TotalRembourser +'"id="three"></div>';
	document.getElementById('DOSSIERForm').innerHTML += inpu + four.responseJSON.TotalRembourser +'"id="four"></div>';
	document.getElementById('DOSSIERForm').innerHTML += inpu + five.responseJSON.TotalRembourser +'"id="five"></div>';    
    },2000)
}
function copyone(){
  var one =document.getElementById("one")[];
  copyText.select();
  document.execCommand("copy");
}
function copytow(){
  var one =document.getElementById("tow")[];
  copyText.select();
  document.execCommand("copy");
}
function copythree){
  var one =document.getElementById("three")[];
  copyText.select();
  document.execCommand("copy");
}
function copyfour(){
  var one =document.getElementById("four")[];
  copyText.select();
  document.execCommand("copy");
}
function copyfive(){
  var one =document.getElementById("five")[];
  copyText.select();
  document.execCommand("copy");
}
