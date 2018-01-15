$(document).ready(function()
	{
		 window.setInterval(function () {
		 	$.ajax({
		 		type: 'GET',
                url: '/assets/php/recieve_ultra.php',
                dataType: 'json',
                data:{

                },
                success: function(data) {

                    $('#data').empty();
                    $('#data').append("<td>"+data[0].station_1+"</td><td>"+data[0].station_2+"</td><td>"+data[0].station_3+"</td><td>"+data[0].station_4+"</td>");

                    
                },

                error: function(data) {
                    console.log(data)
                }
		 	});
                }, 500);
	});