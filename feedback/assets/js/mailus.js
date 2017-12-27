$(document).ready(function() {
    $('#submit').click(function() {

        if ($('#agree')[0].checked != false) {
            console.log("hi")
            $.ajax({
                type: 'POST',
                url: '/assets/php/mailus.php',
                dataType: 'text',
                data: {
                    'name': $('#name').val(),
                    'email': $('email').val(),
                    'message': $('message').val()
                },
                success: function(data) {

                    console.log(data)
                    alert("發送成功");
                    console.log("123")

                },
                error: function(data) {
                    alert("連線超時");
                }
            });
            // $.ajax({
            //     type: 'get',
            //     url: '/assets/php/prop.php',
            //     dataType: 'json',
            //     success: function(data) {
            //         ide = data[0].ide;
            //         switch (data[0].ide) {
            //             case '1':
            //                 break;
            //             case '2':
            //                 break;
            //             default:
            //                 $.get("dashboard.html", function(data) {
            //                     $("#content").html(data);
            //                 });
            //                 break;
            //         }

            //     },
            //     error: function(data) {
            //         $.get("dashboard.html", function(data) {
            //             $("#content").html(data);
            //         });
            //     }
            // });
        } else {

            alert("請同意會員條款");
        }

    });
});