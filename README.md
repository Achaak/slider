# slider
This is a module to simply add a slider to your site.

<img src="pictures/slider-preview.png" alt="slider preview"/>

## Requirement :
* JQuery

## Install :
Load the required files.
Inside the page's head tag include the slider's CSS file.
``` html
<link rel="stylesheet" href="/your-path/slider.css">
```

And in the page's footer, include the required javascript files.
``` html
<script src="/your-path/slider.js"></script>
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
- [slider().init](#init)
- [slider().changePicture](#changePicture)
- [slider().startSlider](#startSlider)
- [slider().stopSlider](#stopSlider)

__slider().init__ <a name="init"></a>
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

__slider().changePicture__ <a name="changePicture"></a>
``` js
/**
 * Used to change a picture on the slider
 *
 * @param {number} id It's the id of the picture you want to display
 */
slider.changePicture(id);
```

__slider().startSlider__ <a name="startSlider"></a>
``` js
/**
 * Used to start the slider interval
 */
slider.startSlider();
```

__slider.stopSlider__ <a name="stopSlider"></a>
``` js
/**
 * Used to stop the slider interval
 */
slider.stopSlider();
```