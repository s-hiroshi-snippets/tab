/**
 * tab menu
 *
 * load style/script in head
 * ```html
 * <link rel="stylesheet" href="style.css" media="all">
 * <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
 * <script src="tab.js"></script>
 * <script>
 * jQuery(function($) {
 *       $( '#tab' ).tab();
 *   })
 * </script>
 * ```
 *
 *
 * markup tab menu
 *
 *```html
 *<div id="tab">
 *<ul class="tab-menu">
 *<li><a href="#" class="active">tab1</ul>
 *<li><a href="#">tab2</ul>
 *</ul>
 *<div class="tab-content">
 *statements
 *</div>
 *<div class="tab-content">
 *statements
 *</div>
 *</div><!-- tab -->
 *```
 */
jQuery.fn.tab = function( name ) {

    var tab_selector = name || '.tab';
    var tab_anchors  = $( 'a', tab_selector + '-menu' );
    var tab_contents = $( 'div' + tab_selector + '-content' );

    // callback of click event handler
    function clickHandler( i ) {
        return function() {
            var  j;
            for ( j = 0; j < tab_contents.length; j++ ) {
                if ( i === j ) {
                    $( tab_anchors[ j ] ).addClass( 'active' );
                    // all tab_contents display none
                    tab_contents.css( 'display', 'none' );
                    // k tab content display
                    $( tab_contents[ j ] ).addClass( 'selected' );
                    $( tab_contents[ j ] ).css( 'display', 'block' );
                } else {
                    $( tab_anchors[ j ] ).removeClass( 'active' );
                    $( tab_contents[ j ] ).removeClass( 'selected' );
                }
            }
            return false;
        };
    }

    // handle tab menu anchor click
    tab_anchors.each(function( i ) {
        var handler = clickHandler( i );
        $( tab_anchors[ i ] ).click( handler );
    });

};
