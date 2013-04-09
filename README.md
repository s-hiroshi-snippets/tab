About
==========

jQuery simple tab menu

* this sample is minimal.
* minimum style/script.
* add tab style yourself.

Usage
==========

load style/script in head

```html
<link rel="stylesheet" href="style.css" media="all">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="tab.js"></script>
<script>
    jQuery(function($) {
        $.tab('.tab');
    })
</script>
```

markup tab menu

```html
<div class="tab">
    <ul class="tab-menu">
        <li><a href="#" class="active">tab1</ul>
        <li><a href="#">tab2</ul>
    </ul>
    <div class="tab-content">
        statements
    </div>
    <div class="tab-content">
        statements
    </div>
</div><!-- tab -->
```

example
-----

wrap content class name is mytab

* mytab-menu    ul part suffix is -menu
* mytab-content div part suffix is -content

