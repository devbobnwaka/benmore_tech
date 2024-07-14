$(document).ready(function() {
    $('#loginForm').on('submit', function (e) {
        e.preventDefault();
        $('#spinner-overlay').show(); 
        var formData = $(this).serialize();
        $.ajax({
            url: "",
            type: "POST",
            data: formData,
            dataType: "json",
            success: function (response) {
                if (response.success) {
                    window.location.href = "/dashboard/";
                } else {
                    $('#error-message').removeClass('hidden').text('Invalid credentials. Please try again.');
                    // Display specific errors
                    $.each(response.errors, function (field, errors) {
                        $('#id_' + field).addClass('border-red-500');
                    });
                }
            },
            error: function () {
                $('#error-message').removeClass('hidden').text('An error occurred. Please reload the page and try again.');
            }
        }).always(function() {
            $('#spinner-overlay').hide(); 
        });
    });


    $('#registerForm').on('submit', function (e) {
        e.preventDefault();
        $('#spinner-overlay').show(); 
        var formData = $(this).serialize();

        $.ajax({
            url: "",
            type: "POST",
            data: formData,
            dataType: "json",
            success: function (response) {
                if (response.success) {
                    window.location.href = "/login/";
                } else {
                    $('#error-message').removeClass('hidden').text('Please fill in all fields correctly.');
                    // Display specific errors
                    $.each(response.errors, function (field, errors) {
                        $('#id_' + field).addClass('border-red-500');
                    });
                }
            },
            error: function () {
                $('#error-message').removeClass('hidden').text('An error occurred. Please reload the page and try again.');
            }
        }).always(function() {
            $('#spinner-overlay').hide();
        });
    });
});