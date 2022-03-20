//Set themes based on month
$(function() {

    var _date = new Date();
    var _month = _date.getMonth();
    var _day = _date.getDate();
    var _year = _date.getFullYear();

    switch (_month) {

           default:
           $("#title-logo").attr("src", "ASSETS/LOGOS/logo.png");
           $("#logoimg").attr("src", "ASSETS/LOGOS/afe.png"); 
           $("#site-icon").attr("href", "ASSETS/LOGOS/afe.png");  
           document.documentElement.style.setProperty('--nav_bg_color_active', '#f0d909');    
           document.documentElement.style.setProperty('--nav_bg_color_selected', '#f0d909');
           document.body.style.backgroundImage = 
           "linear-gradient(to bottom, rgba(0, 4, 41, 0.5) 0%,rgba(0, 4, 41, 0.5) 100%),  url('ASSETS/site_background.png')"; 
           break;

           case 9://Halloween
           $("#title-logo").attr("src", "ASSETS/LOGOS/logo_halloween.png");
           $("#logoimg").attr("src", "ASSETS/LOGOS/afe_october.png");
           $("#site-icon").attr("href", "ASSETS/LOGOS/afe_october.png");  

           if(_day==31){document.getElementById("introcution").innerHTML +="<br><br>Happy Halloween! 🎃";}
           document.documentElement.style.setProperty('--nav_bg_color_active', '#09f056');    
           document.documentElement.style.setProperty('--nav_bg_color_selected', '#09f056'); 
           document.body.style.backgroundImage =
           "linear-gradient(to bottom, rgba(0, 4, 41, 0.5) 0%,rgba(0, 4, 41, 0.5) 100%),  url('ASSETS/site_background_halloween.png') "; 
           break;

           case 11://Christmas
           $("#title-logo").attr("src", "ASSETS/LOGOS/logo_christmas.png");
           $("#logoimg").attr("src", "ASSETS/LOGOS/afe_december.png"); 
           $("#site-icon").attr("href", "ASSETS/LOGOS/afe_december.png");  

           
           document.documentElement.style.setProperty('--nav_bg_color_active', '#EF0909');    
           document.documentElement.style.setProperty('--nav_bg_color_selected', '#EF0909'); 
           document.body.style.backgroundImage =
           "linear-gradient(to bottom, rgba(0, 4, 41, 0.5) 0%,rgba(0, 4, 41, 0.5) 100%),  url('ASSETS/site_background_christmas.png') ";
           if(_day==25){document.getElementById("introcution").innerHTML +="<br><br>Merry Christmas! 🎄";}
           break;

           case 0:
           if(_day==1){document.getElementById("introcution").innerHTML+="<br><br>Happy new year " +_year+"!";}
           break;

    }

    $("#title-logo").attr("src", "ASSETS/LOGOS/pfp.png");

    document.body.style.backgroundImage = 
           "linear-gradient(rgba(51, 6, 71, 0.6) 10%,rgba(85, 10, 117, 1) 120%), url('ASSETS/bkg.png')";

}
);