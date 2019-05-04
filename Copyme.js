


function generate() {
	var k = $("#Url").val();
	var ref = document.getElementsByClassName('dxgv')[1].innerHTML;
	console.log(ref);
	// Get a reference to the database service
	var database = firebase.database();
    	var one = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 3);
	console.log(one);
    	var tow = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 9);
   	var three = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 18);
    	var four = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 24);
    	var five = $.getJSON('/' + k + '/DOSSIER/CalculTotalRembourser?NbEcheance=' + 30);
	setTimeout(function (){
	writeUserData(  ref,one,one,tow,tow,tow,three,four,five)
	},6000)
	
}

function writeUserData(  a,price3,price6,price9,price12,price13,price18,price24,price30) {
  firebase.database().ref(a).set({
    price3: price3,
    price6: price6,
    price9:price9,
    price12:price12,
    price13:price13,
    price18:price18,
    price24:price24,
    price30:price30,
  });
}
