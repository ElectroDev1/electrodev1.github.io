function adjustAuthor(authID,imgID){

    //Get the elements
    var author = document.getElementById(authID);
    var image = document.getElementById(imgID);

    //Check if the image exists
    if(typeof(image)!="undefined" && image!=null){
       return -4;
    }else{
       console.log("image not found, setting author to noimg");
       author.className = "author-noimg"; 
    }

}

function get_userdata(name,text,imgID,nameID) {

      //Get classes
      var username = document.getElementsByClassName("username");
      var pfp = document.getElementsByClassName("pfp");


     if(!name || !imgID || !nameID){
        console.log("One or more arguments have not been set!"); return; 
     }

     console.log("Getting user "+name+"'s information")

     //Loop through all class elements
     for(var a=0; a<username.length; a++){
         
         //Get current elements
         var _img  = pfp[a];
         var _name  = username[a];

         if(_img.getAttribute( 'id' )==imgID){//If the image meets the desired id
      
            _img.src = "/ASSETS/USERS/"+name+".png";
   
         }

         if(_name.getAttribute( 'id' )==nameID){//If the image meets the desired id
      
            _name.innerHTML += text+name.charAt(0).toUpperCase() + name.slice(1);
            ;
   
         }
         
     }
      
     console.log("Applied information!")

     

     

}

