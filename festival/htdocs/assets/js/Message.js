$(document).ready(function() {
    $('#Message').click(function() {

        if ($('#agree')[0].checked != false) {
            
            $.ajax({
                type: 'POST',
                url: '/assets/php/mailus.php',
                dataType: 'text',
                data:{
                	'name': $('#name').val(),
                	'email' : $('#email').val(),
                	'message' : $('#message').val(),
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