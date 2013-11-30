$('#home').on('pageinit', function(){
     console.log("the home page has fired");

$( document ).on( "click", ".show-page-loading-msg", function() {
     console.log("The on click loading message has fired");
    var $this = $( this ),
        theme = $this.jqmData( "theme" ) || $.mobile.loader.prototype.options.theme,
        msgText = $this.jqmData( "msgtext" ) || $.mobile.loader.prototype.options.text,
        textVisible = $this.jqmData( "textvisible" ) || $.mobile.loader.prototype.options.textVisible,
        textonly = !!$this.jqmData( "textonly" );
        html = $this.jqmData( "html" ) || "";
    $.mobile.loading( "show", {
            text: msgText,
            textVisible: textVisible,
            theme: theme,
            textonly: textonly,
            html: html
    });
	
	// Get a handle on the first button element in the document.
	console.log("above the button querySelector line 21");
    var button = document.querySelector( "button" );
	console.log("below the button selector line 23");
	 // If a user clicks on it, say hello!
	 console.log("above say hello function");
    button.addEventListener( "click", function( ev ) {
        alert( "Hello" );
    }, false);
})
.on( "click", ".hide-page-loading-msg", function() {
    $.mobile.loading( "hide" );
});

$('#sign').on('pageinit', function(){
 console.log(" The page signup has fired on line 35!!");
 
 $('#recordsignuphere').submit(function() {
 console.log("inside submit funtion like 38");
  alert("The form has been submitted");
 });
 
 
  
 var storeData = function(key) {
 
 if (!key) {
 console.log("makeing a key");
 var id = Math.floor(Math.random()*100000000001);
 console.log("Here is the new key" + id );
 }else {
 	// Use the same key if one is already assigned 
 	id = key;
 	console.log("key is already assigned"+ key );
  }
 	// function not made getItems();
 	var item         = {};
 	    item.firstname         = ["First Name:", $('#firstName').val()];
 	    console.log( firstName );
 	
 	//Save to Local Storage
 	localStorage.setItem(id, JSON.stringify(item));
 	alert("Your faviorate Paint by number is saved!");
 
 
 }
 
 

 
 
 
 
 
 
 





});






});