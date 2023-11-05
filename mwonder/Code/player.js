const mainPath = './Data/Player/'
class Player {
    constructor(name){
        this.name = name
        this.path = mainPath+name
    }
}


const players = [

    new Player("Mario")

]


const dataNames = ["carry","collision","eat","elephant","item","jump","slope","speed","swim"]
/*
for(let i = 0; i < players.length; i++){



    var player = players[i]

    console.log("Loading player "+player.name)

    for(let j = 0; j < dataNames.length; j++){

        loadJSONtoObj(player, dataNames[j], player.path+"/"+dataNames[j]+".json" )

      

    }
}*/

loadJSONtoObj(players[0],"speed", players[0].path+"/speed.json")