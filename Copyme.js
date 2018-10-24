


function generate() {
  	var i ;
           	var arra = [3,6,9,12,13,18,24,30];
           	var inpu = '<input onclick ="copyMe()" class="form-control copyMe" type="text"  value="'
           	for (i = 0; i < 8; i++) {
           		var k = $("#Url").val();
	            $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + arra[i],
	                function (data) {
	                    if (data.Error == "Success") {
	                        document.getElementById('DOSSIERForm').innerHTML += inpu + data.TotalRembourser.toFixed(2) +'">';
	                    }
	                    else { }

	                }
	            );
			} 
}
function copyMe(){
  var copyText =document.getElementsByClassName("copyMe")[0];
  copyText.select();
  document.execCommand("copy");
}
