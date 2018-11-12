function timeStamp(){
 var result = issue[Object.keys(issue)[1]] ;
 console.log(issue.value);
 var count = '<p  id="timeW">'+result+'</p>';
 var docCount = document.getElementById("tips").innerHTML;
 document.getElementById("tips").innerHTML = docCount + count;
}
