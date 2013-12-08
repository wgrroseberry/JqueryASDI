$('#display').on('pageinit', function (){
	 console.log("line 2 pageinit funtion has fired this is awesome!!!");
	
	var rcform = $('#form');
	
	rcform.validate( {
		invalidHandler: function(form, validator) {},
		submitHandler: function() {
			var data = rcform.serializeArray();
			
			console.log("parse data right after this storeData line is run line 49");
			//parseCreatureForm(data);
			console.log("store data this inside the document.ready function line 51");
			storeData(data);
			}
		});
	
});






$('#home').on('pageinit', function () {
      console.log("The home page has fired");
	 // alert($("#list1").html());
	// $("#list1").html("<l1> New Created Content </li>");
	var newItem = $("<p>This is a new paragraph</p>");
	$("#para2").html()
      $('#hideButton').click(function() {
       $('#disclaimer').hide();
      });
      console.log("hide button has been read");
      
});

$('#display').on('pageinit', function () {
      console.log("The display page has fired");
      $('#create').on ('click', function() {
       var fname    = $('#fname').val();
	   console.log(fname);
       var lname    = $('#lname').val();
	   console.log(lname);
       var email    = $('#email').val();
	   console.log(email);
       var password = $('#password').val();
	   console.log(password);
       var notes    = $('#notes').val();
	   console.log(notes);
	   
       
      
      
      
      
      $('#printhere').prepend('<p>' + fname + ' ' + lname + ' ' + email + ' ' + password + ' ' + notes + '</p>');
   console.log("printing here line 25");
   
   $('#main').prepend('<p>' + firstName + ' ' + lastName + ' ' + myemail + ' ' +mypassword + ' ' + mynotes + '</p>');
   console.log("printing here line 25");
   
   getData();
      
   
 //  $('#printhere').append('<p>' + email + '</p>');
     
	  $('#mySubmit').on ('click', function() {
  console.log('Display add event listner is working!!!!!!!!!!!!');
	  });
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
	var firstName = $('#firstName').val();
	var lastName  = $('#lastName').val();
	var email     = $('#myemail').val();
	var password  = $('#mypassword').val();
	var notes     = $('#mynotes').val();
	
	$('#main').append('<p>' + firstName + ' ' + lastName + ' ' + email + ' ' + password + ' ' + notes + '</p>');
	 //$("ul").empty();
	// $("h2").empty();
	// $("h1").empty();
	// $("p").empty();
	// $("#sign").append("<div>Hello world</div>");
	// $('#sign').append('<p>' + fname + ' ' + lname + ' ' + email + ' ' + password + ' ' + notes + '</p>');
	 console.log("Here is the fist name last name");
	 console.log('<p>' + fname + ' ' + lname + ' ' + email + ' ' + password + ' ' + notes + '</p>');
	 
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
        item.email                 =["Email:", $('#myemail').val()];
		item.password              =["Password:", $('#mypassword').val()];
		item.notes                 =["Notes:", $('#mynotes').val()];
		
		
		var editDelete = <a href="#" class = "edit">Edit</a>;
		
		
	
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
function getData(){
  // Write Data from Local Storage to the browser.
  var makeDiv = document.createElement('div');
  makeDiv.setAttribute("id", "items");
  var makeList = document.createElement('ul');
  makeDiv.appendChild(makeList);
  document.body.appendChild(makeList);
  // look at local storage and see how many entrys that are there.
  // time for a for loop
  for(var i=0, len=localStorage.length; i<len;i++){
	 var makeli =  document.createElement('li');
	 makeList.appendChild(makeli);
	 var key = localStorage.key(i);
	 var value = localStorage.getItem(key);
	 // Convert the string from local storage value back to an object using JSON.parse()
	 var obj = JSON.parse(value); 
	 var makeSubList = document.createElement('ul');
	 makeli.appendChild(makeSubList);
	 for(var n in obj) {
		 var makeSubli = document.createElement('li');
		 makeSubList.appendChild(makeSubli);
		 var optSubText = obj[n][0]+" "+obj[n][1];
		 makeSubli.innerHTML = obtSubText;
	 }
  }
}
/* add event liseners to convert to jquery

 //Set link & Clink Events
   
	 var triggerMyControls =au('toggle');
	 triggerMyControls.addEventListener("click", toggleMyControls);	
	
	 var displayLink =au('displayData');
	 displayLink.addEventListener("click", getMyData);
	
	
	 var clearData =au('clear');
	 //var changeData = au()
	 clear.addEventListener("click",  clearLocalStorage);
	
	 var saveData =au('submit');
	 saveData.addEventListener("click", InformationIsCorrect);
	 
	 //Console.log output
		say("hello is this working with a funtion");
		console.log("is this working the real console.log");
	//Set checkbox & Radio Click Events: Attach event listener to each radio & checkobx.
	
	*/
