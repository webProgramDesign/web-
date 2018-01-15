$(document).ready(function() {
    $('#data_message').click(function() {

        if ($('#agree')[0].checked != false) {
            
            $.ajax({
                type: 'POST',
                url: '/assets/php/mailus.php',
                dataType: 'text',
                data:{
                	'name': $('#data_name').val(),
                	'email' : $('#data_email').val(),
                	'message' : $('#data_message').val(),
                },
                success: function(data) {
                    console.log(data)
                    alert("發送成功");

                },

                error: function(data) {
                    console.log(data)
                   alert("連線超時");
                }
            });
            
        } 
        else {
 
            alert("請同意會員條款");
        }

    });
});