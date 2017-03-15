        $(document).ready(function() {
            $(".navbar a, footer a[href='#portfolio']").on('click', function(event) {
                if (this.hash !== "") {
                    event.preventDefault();

                    // Store hash
                    var hash = this.hash;

                    $('html, body').animate({
                        scrollTop: $(hash).offset().top -100
                    }, 900, function() {

                        window.location.hash = hash;
                    });
                }
            });


        });