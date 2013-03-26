/**
 * tab menu
 * tab.jsと比較修正
 */
jQuery.tab = function(name) {

    var tab_selector = name || '.tab';
    var tab_anchors  = $('a', tab_selector + '-menu');
    var tab_contents = $('div' + tab_selector + '-content');

    // callback of click event handler
    function clickHandler(index) {
        return function(evt) {
            var  j;
            for (j = 0; j < tab_contents.length; j++) {
                if (index === j) {
                    $(tab_anchors[j]).parent().addClass('active');
                    // all tab_contents display none
                    tab_contents.css('display', 'none');
                    // j tab content display
                    $(tab_contents[j]).addClass('selected');
                    $(tab_contents[j]).css('display', 'block');
                } else {
                    $(tab_anchors[j]).parent().removeClass('active');
                    $(tab_contents[j]).removeClass('selected');
                }
            }
            return false;
        };
    }

    // handle tab menu anchor click
    tab_anchors.each(function(i) {
        var handler = clickHandler(i);
        $(tab_anchors[i]).bind('click', handler);
    });

};