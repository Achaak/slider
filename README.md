# slider

This is a module to simply add a slider to your site.

## Requirement :
* JQuery

## Install :
Load the required files.
Inside the page's head tag include the slider's CSS file.
``` html
<link rel="stylesheet" href="slider.css">
```

And in the page's footer, include the required javascript files.
``` html
<script src="slider.js"></script>
```

## Initialize :
For initialize the slider, insert this example snippet and update this with your parameters.
Exemple: 
``` js
$(document).ready(function() {
    slider().init(
        "#slider", 
        [
            {
                "url": "pictures/github-logo-1.png", 
                "link":"https://github.com/"
            }, 
            {
                "url": "pictures/github-logo-2.jpg", 
                "onClick": function() {alert("Hello world !")}
            }
        ],
        5000
    );
});
```

## Fonctions :
__slider.init__
``` js
/**
 * Used to initialize the slider
 *
 * @param {string} _elem Class or id of the slider
 * @param {Array} _pictures List of the pictures path and link
 * @param {number} _interval Interval between the picture (millisecond)
 */
slider.init(_elem, _pictures, _interval);
```

__slider.changePicture__
``` js
/**
 * Used to change a picture on the slider
 *
 * @param {number} id It's the id of the picture you want to display
 */
slider.changePicture(id);
```

__slider.startSlider__
``` js
/**
 * Used to start the slider interval
 */
slider.startSlider();
```

__slider.stopSlider__
``` js
/**
 * Used to stop the slider interval
 */
slider.stopSlider();
```