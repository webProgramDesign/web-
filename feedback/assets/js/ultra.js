$(document).ready(function() {
    window.setInterval(function() {
        $.ajax({
            type: 'GET',
            url: '/assets/php/recieve_ultra.php',
            dataType: 'json',
            success: function(data) {
                console.log(data[0])
                $('#data').empty();
                $('#data').append("<td>" + data[0].station_1 + "</td><td>" + data[0].station_2 + "</td><td>" + data[0].station_3 + "</td><td>" + data[0].station_4 + "</td>");
                if (data[0].station_1 < 7) {
                    $('.test1').empty();
                    $('.test1').append("<h2>1/1</h2>");
                } else {
                    // console.log("沒偵測到物品")
                    $('.test1').empty();
                    $('.test1').append("<h2>0/1</h2>");
                }
                if (data[0].station_2 < 7) {
                    $('.test2').empty();
                    $('.test2').append("<h2>1/1</h2>");
                } else {
                    // console.log("沒偵測到物品")
                    $('.test2').empty();
                    $('.test2').append("<h2>0/1</h2>");
                }
                if (data[0].station_3 < 7) {
                    $('.test3').empty();
                    $('.test3').append("<h2>1/1</h2>");
                } else {
                    // console.log("沒偵測到物品")
                    $('.test3').empty();
                    $('.test3').append("<h2>0/1</h2>");
                }
                if (data[0].station_4 < 7) {
                    $('.test4').empty();
                    $('.test4').append("<h2>1/1</h2>");
                } else {
                    // console.log("沒偵測到物品")
                    $('.test4').empty();
                    $('.test4').append("<h2>0/1</h2>");
                }
            },

            error: function(data) {
                console.log("data")
            }
        });


    }, 500);
});