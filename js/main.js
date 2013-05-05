$(function() {

    var underline  = $('.underline'),
        links      = $('.navigation li'),
        activeLink = $('.navigation .active'),
        moveTo     = function(element) {

            // Grab various information about the element.
            var el  = $(element),
                pos = el.position(),
                w   = el.outerWidth();

            // Stop the current underline animation.
            underline.stop();

            // Animate the underline to the element.
            underline.animate({
                width: w,
                left: pos.left + 'px'
            }, 1000, 'easeOutBack');
        };

        links.hover(function(evt) {
            moveTo(this);
        }, function(evt) {
            moveTo(activeLink);
        });
});