/**
 * tab menu
 * tab.jsをbootstrap用に書き直し
 */
jQuery.tab = function( name ) {

    var tab_anchors  = $('.nav-tabs a', name);
    var tab_contents = $('.tab-pane', name);

    // callback of click event handler
    function clickHandler(index) {
        return function() {
            var  j;
            for (j = 0; j < tab_contents.length; j++) {
                if (index === j) {
                    $($(tab_anchors[j]).parent()).addClass('active');
                    // all tab_contents display none
                    // k tab content display
                    $(tab_contents[j]).addClass('active');
                } else {
                    $($(tab_anchors[j]).parent()).removeClass('active');
                    $(tab_contents[j]).removeClass('active');
                }
            }
            return false;
        };
    }

    // handle tab menu anchor click
    tab_anchors.each(function(i) {
        var handler = clickHandler(i);
        $(tab_anchors[i]).click(handler);
    });

};