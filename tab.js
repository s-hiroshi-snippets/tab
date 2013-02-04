/**
 * tab menu
 */
jQuery.tab = function(name) {

    var tab_selector = name || '.tab';
    var tab_lists = $('li', tab_selector);
    var tab_contents = $('div' + tab_selector);

    // callback of click event handler
    function clickHandler(index) {
        return function() {
            var  j;
            for (j = 0; j < tab_contents.length; j++) {
                if (index === j) {
                    console.log(j);
                    $(tab_lists[j]).addClass('active');
                    // all tab_contents display none
                    tab_contents.css('display', 'none');
                    // k tab content display
                    $(tab_contents[j]).css('display', 'block');
                } else {
                    $(tab_lists[j]).removeClass('active');
                }
            }
        };
    }

    // handle tab menu list click
    tab_lists.each(function(i) {
        var handler = clickHandler(i);
        $(tab_lists[i]).bind('click', handler);
    });
};
