function iMacros() {
	try{
		var iimacr = "VERSION BUILD=10021450 \nWATING SECONDS = "+issue.wating+"\nTAG POS=1 TYPE=INPUT:SUBMIT ATTR=ID:nextAdBtn";
		var macro = {};
		macro.source = iimacr;
		macro.name = "Geeko";
		var evt = document.createEvent("CustomEvent");
		evt.initCustomEvent("iMacrosRunMacro", true, true, macro);
		window.dispatchEvent(evt);
	}catch(e){
		console.log("iMacros Bookmarklet error: "+e.toString());
	}
}
