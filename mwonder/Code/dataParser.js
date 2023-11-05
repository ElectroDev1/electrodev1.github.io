
function renderJSON(obj) {
    'use strict';
    var keys = [],
        retValue = "";
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            retValue += "<div class='tree'>" + key;
            retValue += renderJSON(obj[key]);
            retValue += "</div>";
        } else {
            retValue += "<div class='tree'>" + key + " = " + obj[key] + "</div>";
        }

        keys.push(key);
    }

    var div = document.getElementById("parameter-container")

    div.replaceChildren();
    div.insertAdjacentHTML('beforeend',retValue);
    

    return retValue;
}




function loadJSONtoObj(obj,name,path){
    
    console.log("Loading "+path)

    fetch(path)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)

        obj[name] = data


        console.log(renderJSON(data))

    })

    
}