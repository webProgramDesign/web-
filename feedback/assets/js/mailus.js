$(document).ready(function() {
    $('#submit_btn').click(function() {
        var user_input = $("#data_email").val();
        var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
        if (filter.test(user_input)) {

            if ($('#data_name').val() != "" && $('#data_message').val() != "") {
                if ($('#agree')[0].checked != false) {

                    $.ajax({
                        type: 'POST',
                        url: '/assets/php/mailus.php',
                        dataType: 'text',
                        data: {
                            'name': $('#data_name').val(),
                            'email': $('#data_email').val(),
                            'message': $('#data_message').val()
                        },
                        success: function(data) {
                            console.log(data)
                            alert("發送成功");
                            document.getElementById("data_name").value="";
                            document.getElementById("data_email").value="";
                            document.getElementById("data_message").value="";
                        },

                        error: function(data) {
                            console.log(data)
                            alert("連線超時");
                        }
                    });

                } else {

                    alert("請同意會員條款");
                }
                
            } else {
                alert("some of data is NULL");
            }
        } else {
            alert("e-mail error");
        }

    });
});

