import "./scss/abstracts/_mixxins.scss";
import "./scss/abstracts/_variables.scss";
import "./scss/layout/_footer.scss";
import "./scss/layout/_gallery.scss";
import "./scss/layout/_header.scss";
import "./scss/layout/_navigation.scss";
import "./scss/layout/_about.scss";
import "./scss/layout/_contact.scss";
import "./scss/layout/_gallery.scss";
import "./scss/base/_base.scss";
import "./scss/base/_typo.scss";
import "./scss/components/_buttons.scss";
import "./scss/components/_form.scss";
import "./scss/components/_icons.scss";
import "jquery";

// CTA button scroll animation

$(function () {
    $(document).ready(function () {
        $(".header__button").click(function () {
            $('html,body').animate({
                    scrollTop: $(".portfolio").offset().top
                },
                'slow');
        });

// images on icons
//         $(function () {
//
//             $('.info__icon--facebook').after('<img src="images/icon-fb.png"  class="info__icon--facebookStyle"/>');
//
//         });
//
//         $(function () {
//
//             $('.info__icon--instagram').after('<img src="images/icon-insta.png"  class="info__icon--instagramStyle"/>');
//
//         });

// hamburger menu button

        $('#toggle').click(function () {
            $(this).toggleClass('active');
            $('#menu').toggleClass('open');
        });

// menu overlay on section change
        $('.menu__overlay a').click(function () {
            $(this).toggleClass('active');
            $('#menu').toggleClass('open');
        });
        //nav bar scroll

        $(window).scroll(function () {
            if ($(this).scrollTop() > 650) {
                $('.nav').fadeIn(600);
            } else {
                $('.nav').fadeOut(600);
            }
        });

    });
});

//form submission
$(function() {
    var form = $('#ajax-contact');

    var formMessages = $('#form-messages');

    $(form).submit(function(event) {
        event.preventDefault();

    });
    var formData = $(form).serialize();
    $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
    })
        .done(function(response) {
            $(formMessages).removeClass('messageForm__validation--fail');
            $(formMessages).addClass('messageForm__validation--success');

            $(formMessages).text(response);

            // Clear the form.
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        })
        .fail(function(data) {
            $(formMessages).removeClass('messageForm__validation--success');
            $(formMessages).addClass('messageForm__validation--fail');

            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Podczas przesyłania wiadomości wystąpił błąd');
            }
        });
});