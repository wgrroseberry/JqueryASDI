$('#home').on('pageinit', function () {
      console.log("The home page has fired");
});

$('#display').on('pageinit', function () {
      console.log("The display page has fired");
	  $('#mySubmit').on ('click', function() {
  console.log('Display add event listner is working!!!!!!!!!!!!');
});
	  
	  
	  
});





$('#sign').on('pageinit', function () {
      console.log("The sign page has fired");
	  var rcform = $('#recordsignup');
		    myCreatureErrorLink = $('#mycreatureErrorslink')
		    rcform.validate({
			invalidHandler: function(form, validator) {
				myCreatureErrorLink.click();
			},
			submitHandler: function() {
		var data = rcform.serializeArray();
			storeData();
			console.log(" Line 20 store data right after this storeData line is run");
		}
	});
	console.log("inside the pageinit function");
	//any other code needed for addItem page goes here
	$('#submit').on('click',function () {
	console.log("displaying a list");
	 $("ul").empty();
	 $("h2").empty();
	 $("h1").empty();
	 $("p").empty();
	 $('#main').append('<p>' + firstName + ' ' + lastName + '</p>');
	 console.log("Here is the fist name last name");
	 console.log(firstName  + " " +  lastName);
	 
	 ///////// testing sample
/*	 $.getJSON('json/example.json', function(data){
	         var items = [];
	 
	         $.each(data.latest, function() {
	             items.push("<h2>" + this['thumbTitle'] + "</h2>");
	             items.push("<ul><li>" + this['thumbSmall'] + "</li></ul>");
	             items.push("<p>" + this['description'] + "</p>");
	         });
	 
	         $('<div />', {
	            html: items.join('')
	             }).appendTo('.leftContainer');
	 
	         $('#button').on('click', function(data, name) {                                       
	 
	 
	             name = $('#inputText').val().toUpperCase();
	             alert(name);  
	             var results;
	             results = data.latest.filter(function() {
	                 return data.latest.name.toUpperCase().indexOf(name) !== -1;
	             });
	             return $('#results').innerHTML() = results;
	             console.log(results);
	         });
	    });
	*/ 
	 });
	
//////////////
});
//////////////////
/////////////////

$('#newlist').on('pageinit', function () {
      console.log("The newlist page has fired");
});


var storeData = function(key){
	    
		if (!key) {
		// if there is no key, this mean this is a brand new item and requires a new key
		
		var id = Math.floor(Math.random()*1000000001);
		
		}else{
		// Set the id to the existing key we're editing so that it will save over the data
		// the key is the same key that's been passed along from the editSubmit event handler
		//to the validate function, and then passed here, into the storedata function
		id = key;
		console.log("this is the key value on line 93 where is key is established key" + key);
		}  
		// Geting all the form field values
		// Object will contain a array and input values.
		
//		getCheckboxes();
		var item           = {};
	 	
        item.firstName             =["FirstName", $('#firstName').val()];
        item.lastName              =["LastName", $('#lastName').val()];
        item.email                 =["Email:", $('#email').val()];
		item.password                 =["Password:", $('#password').val()];
		item.notes                 =["Notes:", $('#notes').val()];
		
		
	
	/*	item.gender                =["Gender:", genderValue];   future reference*/
	//	item.iq                    =["IQ", $('#iq').val()];
		console.log("right after the getCheckboxes Store Data funtion");
		console.log("the key = " + key);
	
		// Save information into local storage
		// Use stringify to convert our object to a string.
		
		
		
		// save to local storage
		localStorage.setItem(id, JSON.stringify(item));
		console.log(item);
		//parseCreatureForm(item);
		console.log(item);
		
		alert("Your faviate Paint by number is saved!");
		console.log(item);
	
	
}; 

/* add event liseners to convert to jquery

 //Set link & Clink Events
   
	 var triggerMyControls =au('toggle');
	 triggerMyControls.addEventListener("click", toggleMyControls);	
	
	 var displayLink =au('displayData');
	 displayLink.addEventListener("click", getMyData);
	
	
	 var clearData =au('clear');
	 //var changeData = au()
	 clear.addEventListener("click", clearLocalStorage);
	
	 var saveData =au('submit');
	 saveData.addEventListener("click", InformationIsCorrect);
	 
	 //Console.log output
		say("hello is this working with a funtion");
		console.log("is this working the real console.log");
	//Set checkbox & Radio Click Events: Attach event listener to each radio & checkobx.
	
	*/
