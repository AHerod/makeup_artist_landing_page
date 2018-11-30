import "./scss/abstracts/_mixins.scss";
import "./scss/abstracts/_module.scss";
import "./scss/abstracts/_variables.scss";
import "./scss/layout/_footer.scss";
import "./scss/layout/_gallery.scss";
import "./scss/layout/_header.scss";
import "./scss/layout/_navigation.scss";
import  "./scss/layout/_about.scss";
import  "./scss/layout/_contact.scss";
import "./scss/layout/_gallery.scss";
import "./scss/base/_animations.scss";
import "./scss/base/_base.scss";
import "./scss/base/_typo.scss";
import "./scss/components/_aboutCard.scss";
import "./scss/components/_buttons.scss";
import "./scss/components/_form.scss";


$(".header__button").click(function() {
    $('html,body').animate({
            scrollTop: $(".portfolio").offset().top},
        'slow');
});
