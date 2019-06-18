function Slider() {
    // DOM variable
    var sliderDOM   = undefined;
    var btnsDOM     = $('<div class="btns-slider"></div>');
    var picturesDOM = $('<div class="pictures-slider"></div>');

    var pictures = [];

    var interval = undefined;
    var timeout  = 5000;
    var cptPicture = 0;


    /**
     * Used to create the slider
     *
     * @public
     * @param {string} _elem Class or id of the slider
     * @param {Array} _pictures List of the pictures path and link
     * @param {number} _interval Interval between the picture (millisecond)
     */
    function init(_elem, _pictures, _interval) {
        // Create the DOM
        sliderDOM = $(_elem);
        sliderDOM.empty();
        picturesDOM.empty();
        btnsDOM.empty();
        clearInterval(interval);
        sliderDOM.addClass("slider-wrapper");
        sliderDOM.append(picturesDOM);
        sliderDOM.append(btnsDOM);

        // Set parameter
        pictures = _pictures;
        if(_interval) timeout = _interval;

        // Create the slider btn
        if(_pictures) createBtn(pictures.length);
        
        // Create the pictures of the slider
        if(_pictures) createPictures(pictures);

        // Start the loop
        startSlider();
        
    };



    /**
     * Used to create the buttons of the slider
     *
     * @private
     * @param {string} _nbBtn Number of button
     */
    function createBtn(_nbBtn) {
        // Add all btn
        for (var i = 0; i < _nbBtn; i++) {
            var _btnSlider = $('<div class="btn"></div>');

            _btnSlider.click(function(e){
                // Get target
                var _target = $(e.currentTarget);

                changePicture(_target.index());

                // Reset interval
                stopSlider();
                startSlider();
            });

            btnsDOM.append(_btnSlider);
        }

        // Activate the first btn
        btnsDOM.find(".btn").first().addClass("selected");
    }
    
    
    
    /**
     * Used to create the pictures of the slider
     *
     * @private
     * @param {Array} _pictures Array of the pictures
     */
    function createPictures(_pictures) {
        // Add all picture
        for (var i = 0; i < _pictures.length; i++) {
            var _picture = _pictures[i];

            var _pictureSlider = $('<div class="picture" ></div>');
            _pictureSlider.css("background-image", "url("+_picture.url+")")

            // If has a link
            if (_picture.link) {
                _pictureSlider.data("link", _picture.link);

                _pictureSlider.click(function(e){
                    // Get target
                    var _target = $(e.currentTarget);

                    // Get datas
                    var _data = _target.data()

                    window.location.href = _data.link;
                });
            }

            // If has an onClick
            if (_picture.onClick) {
                _pictureSlider.click(function(e){
                    _picture.onClick();
                });
            }

            picturesDOM.append(_pictureSlider);
        }

        // Activate the first picture
        picturesDOM.find(".picture").first().addClass("selected");
    }



    /**
     * Used to change a picture on the slider
     *
     * @public
     * @param {number} id Id of the picture
     */
    function changePicture(id) {
        if(Number.isInteger(id)) cptPicture = id

        // Return to the start of the pictures
        if(cptPicture >= pictures.length) cptPicture = 0

        // Remove a selected class
        btnsDOM.find(".btn").removeClass("selected");
        picturesDOM.find(".picture").removeClass("selected");

        // Add a selected class
        btnsDOM.find(".btn:nth-child("+(cptPicture+1)+")").addClass("selected");
        picturesDOM.find(".picture:nth-child("+(cptPicture+1)+")").addClass("selected");
    }



    /**
     * Used to start the loop
     *
     * @public
     */
    function startSlider() {
        clearInterval(interval);
        interval = setInterval(function(){ cptPicture++; changePicture() }, timeout);
    }



    /**
     * Used to clear the loop
     *
     * @public
     */
    function stopSlider() {
        clearInterval(interval);
    }



    return {
        "init": function(_elem, _pictures, _interval) {
            init(_elem, _pictures, _interval);
        },
        "changePicture": function(_id) {
            changePicture(_id);
        },
        "startSlider": function() {
            startSlider();
        },
        "stopSlider": function() {
            stopSlider();
        }
    };
}