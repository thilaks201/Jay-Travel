




    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        // Get input values
        let firstName = $('#firstName').val().trim();
        let lastName = $('#lastName').val().trim();
        let phone = $('#phone').val().trim();



        // Validate lengths
        if (firstName.length !== 10) {
            window.alert('First Name must be exactly 10 characters long.');
            return;
        }
        if (lastName.length !== 10) {
            window.alert('Last Name must be exactly 10 characters long.');
            return;
        }
        if (phone.length !== 10) {
            window.alert('Phone Number must be exactly 10 characters long.');
            return;
        }



        // If all validations pass
        window.alert('Form submitted successfully!');
        this.reset();


    });
