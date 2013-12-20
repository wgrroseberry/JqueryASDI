// http://pittypanda.github.com/eclipse

// http://127.0.0.1:5984/mypaintbynumberproject/_all_docs?include_docs=true&start_key=%22hores%22

$(document).on('pageshow', '#home', function(){
	// Displays data to the screen 
	$('#testdisplaydata').click(function(){
		$("#displaydata").val("function(doc) {\n  \n  return doc;\n}");
		console.log("display data function on line 3 is working");
		
		 
		
		//var item = (value.value || value.doc);
		 //getMyData();
			   $('#home').append(
			      $('<li>').append(
				  		$('<a>')
							.attr("href", "program.html")
						//	.text(item.title)
		   )
		  );
		
		
		});
		
		
		// Get data from the app and put it on the screen.
	$('#displaydata').on("click", function(e) {
	 e.preventDefault();
	 $('#myaddpage').css("display", "none");
	 $.couch.db("mypaintbynumberproject").view("art",{
		 
		 success: function(data){}
		
	 })
	 console.log(data);
	 console.log("line 238 right after the cosole.log(data); function");
	});
		
		
		
		
		
		
		
		
		
		//Clears out local storage
		$('#clear').click(function(){
		console.log("delete data function on line 10 is working");
		
		// Calling DataBase
		
		$.couch.db({
			
      success : function(dbs) {
		  console.log("working line 26 couch.allDbs");
        dbs.forEach(function(db) {
          $("#databases").append('<li><a href="/_utils/database.html?'+db+'">'+db+'</a></li>');
        });
      }
    });
		
		
		});
		
		
	$.couch.db("paintbynumber").view("senery", {
		success: function(data) {
		   	console.log(data);
		   $('#home').empty();
		   $.each(data.rows, function(index, value) {
			   var item = (value.value || value.doc);
			   $('#home').append(
			      $('<li>').append(
				  		$('<a>')
							.attr("href", "program.html")
							.text(item.title)
		   )
		  );
		  
		   });
		   $('#home').listview('refresh');
			}
		});
//$(document).on('pageinit', '#home', function(){
//	$('#home').on('pageinit', function(){
	console.log("home paged fired on line 4");
	
});

function workingtest(){
		console.log("working test has fired on line 2");
		
		};






//example   $(document).on('pageinit', '#home', function(){
	
 //example	});
$(document).on('pageinit', '#myaddpage', function(){
//$('#myaddpage').on('pageinit', function(){
	
	console.log("myaddpage fired");
	
	
	
	 $('div').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('.myClassRed').click(function() {
       $(this).fadeOut(1000);
	   $(this).fadeIn(5);
   
	});
	
	$('.myClassBlue').click(function() {
       $(this).fadeOut(1000);
	   $(this).fadeIn(5);
   
	});
	$('.myClassYellow').click(function() {
       $(this).fadeOut(1000);
	   $(this).fadeIn(5);
   
	});
	$('.myClassGreen').click(function() {
       $(this).fadeOut(1000);
	   $(this).fadeIn(5);
	 
   
	});
	
	$('.clear').click(function() {
      workingtest();
	 
   
	});
	
	console.log("myaddpage fired at the end on line 18");
	//$("li").hide().parent().before("<a href='#'>Show my Paint by number list</a>");
	//$("a").click(function(){
		
	//});
	
	});

		
/*		// Using the core $.ajax() method
$.ajax({
    // the URL for the request
    url: "post.php",
 
    // the data to send (will be converted to a query string)
    data: {
        id: 123
    },
 
    // whether this is a POST or GET request
    type: "GET",
 
    // the type of data we expect back
    dataType : "json",
 
    // code to run if the request succeeds;
    // the response is passed to the function
    success: function( json ) {
        $( "<h1/>" ).text( json.title ).appendTo( "body" );
        $( "<div class=\"content\"/>").html( json.html ).appendTo( "body" );
    },
 
    // code to run if the request fails; the raw request and
    // status codes are passed to the function
    error: function( xhr, status ) {
        alert( "Sorry, there was a problem!" );
    },
 
    // code to run regardless of success or failure
    complete: function( xhr, status ) {
        alert( "The request is complete!" );
    }
});
		
		$("li").show();
		console.log("Runing getMyData on line 8");
		getMyData();
		
	//$("li").append(	
		
		
		});	
	});
	$(document).on('pageinit', '#home', function(){
//	$('#home').on('pageinit', function(){
	console.log("home paged fired");
	
	$("delete").on('click', clear);
		console.log("my jQuery funtion on line 60 the delete link was clicked clicked");
	
	$("h2").hide();
	$("h2").show("slow");
	
	//jQuery
/*	$(function(){
		$('h2').on('click', myFn);
		console.log("my jQuery funtion on line 26 was clicked");
		
		
		
	*/	
	
$(document).on('pageinit', '#signup', function(){
//$('#signup').on('pageinit', function(){
	
	      console.log("signup page is has fired");
        
		var rcform = $('#recordpaintbynumber');
		    myCreatureErrorLink = $('#mycreatureErrorslink')
		    rcform.validate({
			invalidHandler: function(form, validator) {
				myCreatureErrorLink.click();
			},
			submitHandler: function() {
				var data = rcform.serializeArray();
				//storeData(data);
				storeData(this.key);
		// This var works for passing a form with ajax //var data = rcform.serialize();
		// serializeArray()
		//	storeData(key);
			console.log(" Line 15 store data right after this storeData line is run");
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//getElementById Function
	function au(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	


// Toggle my controls
function toggleMyControls(n) {
	switch(n) {
		case "on":
		
		//au('pizzaForm').style.display = "none";
		// au('clear').style.display = "inline";
		//au('toggle').style.display = "inline";
		//au('displayData').style.display = "none";
		
		break;
	        case "off":
	//	au('pizzaForm').style.display = "block";
	//u('clear').style.display = "inline";
	//	au('toggle').style.display = "block";
	//ssss	au('displayData').style.display = "block";
		 
		break;
	     default:
		return false;
	}
}





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
	 
        item.email                 =["Email:", $('#Email').val()];
		item.FirstName             =["FirstName", $('#firstName').val()];
		item.LastName              =["LastName", $('#LastName').val()];
		item.Dates                 =["Date:", $('#Dates').val()];
		item.notes                 =["Notes:", $('#notes').val()];
	
	/*	item.gender                =["Gender:", genderValue];   future reference*/

		console.log("right after the getCheckboxes Store Data funtion");
		console.log("the key = " + key);
	
		// Save information into local storage
		// Use stringify to convert our object to a string.
		
		
		
		// save to local storage
		localStorage.setItem(id, JSON.stringify(item));
		// stringify and parse
		alert("Your faviate Creature is saved!");
	
	
}; 

$('.delete').on('click', function(e){
	e.preventDefault();
	console.log("the delete function has fired");
	
	var myKey = $(this).data('key');
	
	localStorage.removeItem(key);
});

function getMyData() {
		toggleMyControls("on");
		if (localStorage.length === 0) {
			alert("There is no data in Local Storeage. I have loaded default data.");
			getMyDefaultData();
			
			
		} 
		//Write information for the Local Storeage to the brower.
	//	var makeDiv = document.createElement('div');
		//var makeDiv = $.create("div");
		
		//Write information for the Local Storeage to the brower.
		
	    var makeDiv = $("#databases").append("<div> Here I am</div")
		//var makeDiv = document.createElement('div');
		//makeDiv.setAttribute("id", "items");
		var makeList = $("#paintdata").append('ul');
		//var makeList = document.createElement('ul');
	//  Jquery takes care of this
	//	makeDiv.appendChild(makeList);
		
		// document.body is writeing the user contents to the screen
		// for the user to see.
		//document.body.appendChild(makeDiv);
		//au('items').style.display = "block";
		for (var i = 0, len =localStorage.length; i<len;i++) {
			console.log("localStorge.length ="+ i +"")
		var myDiv = $.create("div");
			  var makeli=$.create("li");
			var makeli = document.createElement('li');
			var createLinks = document.createElement('li');
			  var makeli=$.create("li");
			//makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// make from string to an object using json
			var obj = JSON.parse(value);
		        var makeSubLink = document.createElement('ul');
			makeli.appendChild(makeSubLink);
			// Makeing a sublist image dynamicly for each catagory of the list
	//		getMyCustomImage(obj.groups[1],makeSubLink);
			//console.log("groups")+ groups[1] + makeSubLink + " makesublink here";
		//	for (var n in obj) {
			//	var makeSubli = document.createElement('li');
		 	//	makeSubLink.appendChild(makeSubli);
			//	var optSubText = obj[n][0]+" "+obj[n][1];
			//	makeSubli.innerHTML = optSubText;
			//	makeSubLink.appendChild(createLinks);
		
		//	}
			(localStorage.key(i), createLinks); // create our edit and delete links
		}
	}
	//Get the image for the right category that is being displayed
	function getMyCustomImage(pictureName, makeSubLink) {
		var createLinks = document.createElement('li');
		makeSubLink.appendChild(createLinks);
		var newImg = document.createElement('img');
		var setSrc = newImg.setAttribute("src", "images/"+ pictureName + ".png");
		createLinks.appendChild(newImg);
		
		
		
	
	
		
		
		
		
		
		
		
		
		
		
		//makeDiv.setAttribute("id", "items");
		console.log("working");
		$(clear).addClass(email)
		//.html(clear)
		//.appendTo($("#myDiv")) // main div
		//.click(function(){
		//	$(this).remove();
			
			
			.hide()
			.slideToggle(300)
			.queue(function() {
				$(this).remove();
			
				
				});
			
}


 
 