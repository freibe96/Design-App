



function changeImage(image){
    var mapImg = document.getElementById("mapImage");

    var storesCheckbox = document.getElementById("stores");
    var gasstationsCheckbox = document.querySelector("input[name=gasstations]");
    var restaurantsCheckbox = document.querySelector("input[name=restaurants]");
    var eaaCheckbox = document.querySelector("input[name=eaa]");
    
    var defaultPath = "images/Default.PNG";
    var storesPath = "images/Stores.PNG";
    var gasstationsPath = "images/GasStations.PNG";
    var restaurantsPath = "images/Restaurants.PNG";
    var eaaPath = "images/EAA.PNG";


    if(image == 'stores' && storesCheckbox.checked){
        mapImg.src = storesPath;
        resetCheckBoxes(storesCheckbox);
    } else if (image == 'gasstations' && gasstationsCheckbox.checked){
        mapImg.src = gasstationsPath;
        resetCheckBoxes(gasstationsCheckbox);
    } else if (image == 'restaurants' && restaurantsCheckbox.checked){
        mapImg.src = restaurantsPath;
        resetCheckBoxes(restaurantsCheckbox);
    } else if (image == 'eaa' && eaaCheckbox.checked){
        mapImg.src = eaaPath;
        resetCheckBoxes(eaaCheckbox);
    } else {
        mapImg.src = defaultPath;
        resetCheckBoxes();
    }
};

function resetCheckBoxes(checkBoxNotToReset){
    var storesCheckbox = document.getElementById("stores");
    var gasstationsCheckbox = document.querySelector("input[name=gasstations]");
    var restaurantsCheckbox = document.querySelector("input[name=restaurants]");
    var eaaCheckbox = document.querySelector("input[name=eaa]");

    if(checkBoxNotToReset.id == 'stores'){
        gasstationsCheckbox.checked = false;
        restaurantsCheckbox.checked = false;
        eaaCheckbox.checked = false;
    } else if (checkBoxNotToReset.id == 'gasstations'){
        storesCheckbox.checked = false;
        restaurantsCheckbox.checked = false;
        eaaCheckbox.checked = false;
    } else if (checkBoxNotToReset.id == 'restaurants'){
        storesCheckbox.checked = false;
        gasstationsCheckbox.checked = false;
        eaaCheckbox.checked = false;
    } else if (checkBoxNotToReset.id == 'eaa'){
        storesCheckbox.checked = false;
        gasstationsCheckbox.checked = false;
        restaurantsCheckbox.checked = false;
    } else{
        storesCheckbox.checked = false;
        gasstationsCheckbox.checked = false;
        restaurantsCheckbox.checked = false;
        eaaCheckbox.checked = false;
    }
}