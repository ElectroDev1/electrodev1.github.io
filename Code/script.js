
{//MODAL SYSTEM

    /*
    modal -->  modal-active

    body  -->  onmodal
    */
    function Modaldeactivateall() {

        const MODALS = document.getElementsByClassName('modal');

        for (var a = 0; a < MODALS.length; a++) {

            var _modal = MODALS[a];
            var _id = MODALS[a].id;
            var _father = _modal.getAttribute('father');


            var _mybody = _modal.children[0].children[0];


            if (_modal.classList.contains('modal-active') && _mybody.classList.contains('modal-body-active')) {

                var MOD = _modal;
                var ignoreClickOnMeElement = _mybody;
                var ignoreClickOnMeElement2 = document.getElementById(_father);
                var ignoreClickOnMeElement3 = document.getElementById(_id);

                document.addEventListener('click', function (event) {
                    var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
                    var isClickInsideElement2 = ignoreClickOnMeElement2.contains(event.target);
                    var isClickInsideElement3 = ignoreClickOnMeElement3.contains(event.target);

                    if (!isClickInsideElement && isClickInsideElement2 && isClickInsideElement3) {

                        console.log("closing")
                        console.log(MOD);
                        console.log(ignoreClickOnMeElement);

                        MOD.classList.remove('modal-active');
                        ignoreClickOnMeElement.classList.remove('modal-body-active')

                        var _videochildren = ignoreClickOnMeElement.children[1].getElementsByTagName("video");

                        for (var j = 0; j < _videochildren.length; j++){
                            _videochildren[j].pause();
                        }

                        document.body.classList.remove('onmodal');

                    }
                });



            }

        }

    }




    function openModal() {

        var myid = this.id;
        var mymodal = this.getAttribute('openmodal');


        console.log('Opening modal "' + mymodal + '"');

        //Iterate through the modals
        var Modals = document.getElementsByClassName('modal');

        for (var i = 0; i < Modals.length; i++) {

            var _modal = Modals[i];
            var _mybody = _modal.children[0].children[0];


            if (_modal.id == mymodal) {//The modal is matching the button id

                console.log('Found modal');

                //Check if the modal is already open
                if (!_modal.classList.contains('modal-active')) {

                    

                    console.log("Modal can be opened")

                    _modal.classList.add('modal-active');
                    _mybody.classList.add('modal-body-active');

                    _modal.classList.remove('modal-closed');
                    _modal.setAttribute('father', mymodal);
                    document.body.classList.add('onmodal');

                    var _videochildren = _mybody.children[1].getElementsByTagName("video");

                    for (var j = 0; j < _videochildren.length; j++){
                        //_videochildren[j].currentTime = 0.5;
                    }

                }

            } else {

                
                

                _modal.classList.remove('modal-active');
                _mybody.classList.remove('modal-body-active')

                _modal.removeAttribute('father');

                var _videochildren = _mybody.children[1].getElementsByTagName("video");

                for (var j = 0; j < _videochildren.length; j++){
                    _videochildren[j].pause();
                }

            }

        }

    }

    function closeModal() {

        document.body.classList.remove('onmodal');

        var _id = this.id;

        console.log('Closing modal "' + _id + '"');

        var Modals = document.getElementsByClassName('modal');

        for (var i = 0; i < Modals.length; i++) {

            var _modal = Modals[i];
            var _mybody = _modal.children[0].children[0];

            if (_modal.id == _id) {

                var _videochildren = _mybody.children[1].getElementsByTagName("video");

                for (var j = 0; j < _videochildren.length; j++){
                    _videochildren[j].pause();
                }

                _modal.classList.remove('modal-active');
                _mybody.classList.remove('modal-body-active')

                _modal.removeAttribute('father');

            }

        }

    }

    //Iterate through the modal open buttons
    const modalOpenButtons = document.getElementsByClassName('modal-open');

    for (var a = 0; a < modalOpenButtons.length; a++) {

        modalOpenButtons[a].onclick = openModal;

    }

    //Iterate through the modal close buttons
    const modalCloseButtons = document.getElementsByClassName('modal-close');

    for (var a = 0; a < modalCloseButtons.length; a++) {

        modalCloseButtons[a].onclick = closeModal;

    }

}

{//NAVBAR SYSTEM
    const buttons = document.getElementsByClassName('navbar-button');
    var thebutton = 0;

    let _do = 1;

    function switchactive() {

        for (var a = 0; a < buttons.length; a++) {

            if (this != buttons[a]) {
                buttons[a].classList.remove('active');
            }
        }

        this.classList.toggle('active');
        _do = 0;
    }



    function deactivateall() {

        console.log(_do);

        if (_do) {

            for (var a = 0; a < buttons.length; a++) {

                buttons[a].classList.remove('active');

            }

        }

        _do = 1;

    }

    for (var i = buttons.length - 1; i >= 0; i--) {


        var _btn = buttons[i];

        if(_btn.className!="navbar-button-inactive"){
            _btn.onclick = switchactive;
        }


    }


}

function ONBODYCLICK() {
    deactivateall();
    Modaldeactivateall();
}

document.body.onclick = ONBODYCLICK;

var links = document.getElementsByClassName('social-media-button');
for (var o = links.length - 1; o >= 0; o--) {

    links[o].setAttribute('tabindex', '1');
    links[o].setAttribute('target', '_blank');


}



{

    const date = new Date();

    var footer = document.getElementsByClassName('site-footer');
    for (var o = footer.length - 1; o >= 0; o--) { footer[0].innerHTML = 'Ele '+date.getFullYear(); }
    
    const day = date.getDate();
    const month = date.getMonth()+1;
    
    if(month == 10 && day>=27){
    
        //Set halloween style
        const HalloweenLink = document.getElementById('halloweenStyle');
    
        HalloweenLink.setAttribute("href",'\\Code\\halloween_style.css')
    
        const ElectroPFP = document.getElementById('electroImg');
    
        ElectroPFP.setAttribute("src","\\Assets\\electro_halloween.png");
    }
    else if(month == 12 && day>=20 && day<30){

        const ChristmasLink = document.getElementById('christmasStyle');

        ChristmasLink.setAttribute('href','\\Code\\christmas_style.css')

        //const 

    }
    

}