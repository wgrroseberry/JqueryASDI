//

$(function(){

	$.ajax({
      url: 'xhr/list.php',
      type: 'GET',
      dataType: 'json',
      success: function(response);{
      		console.log( response);
          }
        });
        
  });