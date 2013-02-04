/**
 * tab menu
 */
jQuery.fn.tab = function() {

    var tab_ul_selector = (this.selector !== '') ? this.selector : '';
    var tab_lists = $('li', tab_ul_selector);

    // callback of click event handler
    function clickHandler(index) {
        return function() {
            var  tab_contents = $(tab_ul_selector + '-content-' + index),
                 length = tab_contents.length,
                 j;
            for (j = 0; j < length; j++) {
                if (index === j) {
                    tab_lists[j].addClass('active');
                    // all tab_contents display none
                    tab_contents.css('display', 'none');
                    // k tab content display
                    tab_contents[j].css('display', 'block');
                } else {
                    tab_lists[j].removeClass('active');
                }
            }
        };
    }

    // handle tab menu list click
    tab_lists.each(function(i) {
        tab_lists[i].click(clickHandler(i));
    });
};
