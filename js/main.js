$(function() {

    var underline  = $('.underline'),
        listitems  = $('.navigation li'),
        links      = $('.navigation a'),
        sections   = $('#whenwhere, #rsvp, #bestman, #maidhonour, #gifts, #photo'),
        doc        = document.documentElement,
        body       = document.body,
        positions  = [],
        moveTo     = function(element, activate) {

            // Grab various information about the element.
            var el  = $(element),
                pos = el.position(),
                w   = el.outerWidth();

            if(activate) {
                listitems.removeClass('active');
                el.addClass('active');
            }

            // Stop the current underline animation.
            underline.stop();

            // Animate the underline to the element.
            underline.animate({
                width: w,
                left: pos.left + 'px'
            }, 1000, 'easeOutBack');
        };

    listitems.hover(function(evt) {
        moveTo(this, false);
    }, function(evt) {
        moveTo(listitems.filter('.active'), false);
    });

    links.on('click', function(evt) {
        evt.preventDefault();

        // Retrieve the position of the target element.
        var target = this.href.split('#')[1],
            elem   = $('#' + target),
            pos    = elem.position();

        listitems.removeClass('active');
        links.filter('#' + target).parent().addClass('active');

        // Animate the window down to that position.
        $('body, html').animate({
            scrollTop: pos.top - 52
        }, 800, 'easeOutSine');
    });

    sections.on('inview', function(evt, isInView, visiblePartX, visiblePartY) {
        
        if(isInView && visiblePartY == 'top') {
            var href = '#' + evt.target.id;
            var link = links.filter('a[href=' + href + ']');
            var item = link.parent();
            moveTo(item, true);
        }
    });

    $('.tooltipster').tooltipster({
        animation: 'grow',
        arrow: true,
        arrowColor: '',
        content: '',
        delay: 50,
        fixedWidth: 0,
        maxWidth: 0,
        functionBefore: function(origin, continueTooltip) {
          continueTooltip();
        },
        functionReady: function(origin, tooltip) {},
        functionAfter: function(origin) {},
        icon: '(?)',
        iconDesktop: false,
        iconTouch: false,
        iconTheme: '.tooltipster-icon',
        interactive: false,
        interactiveTolerance: 350,
        offsetX: 0,
        offsetY: 0,
        onlyOne: true,
        position: 'top',
        speed: 350,
        timer: 0,
        theme: '.tooltipster-shadow',
        touchDevices: true,
        trigger: 'hover',
        updateAnimation: true 
    });
});