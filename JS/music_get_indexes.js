
function get_music_index(id){///Unused
              
    var index ="0"

    //Check the id (song's name for example)
    switch(id) {
        case 'WhoModal': 
        $("#audio0").attr("src", "ASSETS/AUDIO/empty_town.wav")  
        index = "0";
    }
    
    return index;

}

//Music time function
function get_music_time(id,name){

    //Get the song's current time
    var _musictime = name.currentTime;

    const minutes = Math.floor(_musictime / 60);
    const seconds = Math.floor(_musictime % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    //Get the song's duration
    const DU_minutes = Math.floor(name.duration / 60);
    const DU_seconds = Math.floor(name.duration % 60);
    const DU_returnedSeconds = DU_seconds < 10 ? `0${DU_seconds}` : `${DU_seconds}`;
              
    //Set the text
    document.getElementById('musictime'+id).innerHTML =
    Math.floor(minutes)+':'+returnedSeconds + ' / ' + Math.floor(DU_minutes)+':'+DU_returnedSeconds;

}

/*

/-------------/
/ MUSIC NAMES /
/-------------/

0   : jungle mood
1   : clean dialtone
2   : empty town
2.2 : BONK - credits
2.5 : BONK - mission select
3   : BONK - first wave start
4   : BONK - first wave end
5   : BONK - mid wave start
6   : BONK - mid wave end
7   : BONK - final wave start  
8   : BONK - final wave end
9   : BONK - wave lost 
10  : memories of a better time
11  : a town full of life
12  : christmas 2021

*/