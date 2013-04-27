// CAN BE GREATLY IMPROVED
// 
// Just make one function (slideTo) which will slide the bar to an element
// Give it the hovered element on hover, and the active element on leaving
// hover. If there is no active element, just have it set to display: none.
// 
// Default css styling for it should include position:absolute and a top 
// value.

$(function() {
    // Find the #nav_slider
    $ns = $('#nav_slider');

    // Find the navigation items
    $nav_items = $('#nav a');

    var backToActive = function(elem) {

        $this = elem;

        // Find the active element.
        $active = $nav_items.filter('.active');

        var pos = $active.position();
        var w   = $active.outerWidth();

        $ns.animate({
            width: w,
            left: pos.left + 'px'
        }, 1000, 'easeOutBack');

    };

    $nav_items.hover(function() {

        // On hover
        $ns.stop();

        // Find position of item.
        $this = $(this);
        var pos = $this.position();
        var w = $this.outerWidth();

        $ns.animate({
            width: w,
            left: pos.left + 'px'
        }, 1000, 'easeOutBack');

    }, function() {
        // Off hover.
        $ns.stop();

        backToActive($(this));
    });

    backToActive($ns);
});