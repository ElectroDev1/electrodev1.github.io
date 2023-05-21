let ArtPath = ""

class Art {
    constructor(modalName,fileName,name="default",hasVideo=false) {
        this.modalName = modalName;
        this.fileName = fileName;
        this.name = name;
        this.hasVideo = hasVideo;
    }
}

let ArtImgs = [];

const createArtColumns = function(entries=[]){

    const containers = document.getElementsByClassName("art-container");
    const number = entries.length;

    if(containers.length>0 && entries.length>0){

        const container = containers[0];

        for(let i=0; i<number; i++){

            const idName = "art-column-" + i;

            if(!document.getElementById(idName)){

                const column = document.createElement("div");
                column.className = "art-column";

                
                column.setAttribute("id", idName)

                container.appendChild(column);



            }

            const entry = entries[i];

            addArtToColumn(entry, "art-column-"+i)

        }
    
    }

}


const generateArtModals = function(modalArray){

    const modalsContainer = document.getElementsByClassName("art-modals")[0];

    if(!modalsContainer){ return; }

    for(let i=0; i<modalArray.length; i++){


        const art = modalArray[i];


        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.classList.add("modal-closed");
        modal.setAttribute("id", art.modalName);

            const container = document.createElement("div");
            container.className = "modal-container";
            modal.appendChild(container);

                const body = document.createElement("div");
                body.className = "modal-body";
                body.style.minWidth = "0.8vw";
                body.style.minHeight = "0.8vw";
                container.appendChild(body);

                    const header = document.createElement("div");
                    header.className = "modal-header";
                    body.appendChild(header);

                        const p = document.createElement("p");
                        p.style.textAlign = "center";
                        p.style.fontFamily = "Inconsolata_site";
                        p.style.fontSize = "1.1em"
                        p.style.marginTop = "0"
                        p.style.marginBottom = "0"

                            //const node = document.createTextNode(art.name);
                            //p.appendChild(node);
                        p.innerHTML = art.name;

                        header.appendChild(p);

                        const x = document.createElement("div");
                        x.classList.add("modal-close-x");
                        x.classList.add("modal-close");
                        x.setAttribute("id", art.modalName);

                            const xnode = document.createTextNode("✖");
                            x.appendChild(xnode);

                        header.appendChild(x);

                    const content = document.createElement("div");
                    content.className = "modal-content";
                    body.appendChild(content);

                    if(Array.isArray(art.fileName)===false){


                            if(art.hasVideo){
                                const videoContainer = document.createElement("div");
                                videoContainer.style.display = "flex";
                                videoContainer.style.justifyContent = "center";
                                content.appendChild(videoContainer);

                                const video =  document.createElement("video");
                                video.setAttribute("width","320")
                                video.setAttribute("height","240");

                                videoContainer.appendChild(video);

                                const source = document.createElement("source");
                                source.setAttribute("src",ArtPath+art.fileName);
                                source.setAttribute("alt", art.name);
                                source.setAttribute("type","video/mp4");

                                video.appendChild(source);
                                continue;
                            }

                                const imgContainer = document.createElement("div");
                                imgContainer.style.display = "flex";
                                imgContainer.style.justifyContent = "center";
                                content.appendChild(imgContainer);

                                const img = document.createElement("img");
                                img.className = "modal-art-img";
                                img.setAttribute("loading","lazy")
                                img.setAttribute("alt", art.name);
                                img.setAttribute("src", ArtPath+art.fileName);
                                ArtImgs.push(img);
                                
                                imgContainer.appendChild(img);

                            

                    }else{

                        for(let i=0; i<art.fileName.length; i++){

                            if(art.hasVideo && i==0){
                                const videoContainer = document.createElement("div");
                                videoContainer.style.display = "flex";
                                videoContainer.style.justifyContent = "center";
                                content.appendChild(videoContainer);

                                const video =  document.createElement("video");
                                video.setAttribute("width","69%")
                                video.setAttribute("loading","lazy");
                                video.setAttribute("controls","true");
                                video.setAttribute("loop","true");
                                

                                videoContainer.appendChild(video);

                                const source = document.createElement("source");
                                source.setAttribute("src",ArtPath+art.fileName[i]);
                                source.setAttribute("alt", art.name);
                                source.setAttribute("type","video/mp4");
                                

                                video.appendChild(source);
                                continue;
                            }

                            const imgContainer = document.createElement("div");
                            imgContainer.style.display = "flex";
                            imgContainer.style.justifyContent = "center";
                            content.appendChild(imgContainer);
    
                                const img = document.createElement("img");
                                img.className = "modal-art-img";
                                img.setAttribute("loading","lazy")
                                img.setAttribute("alt", art.name);
                                img.setAttribute("src", ArtPath+art.fileName[i]);
                                imgContainer.appendChild(img);   
                                ArtImgs.push(img);

                        }

                    }


        modalsContainer.appendChild(modal);
        
    }

  

}

const appendArtToModalList = function(modalArray,artArray){

    for(let i=0; i<artArray.length; i++){

        const artNames = artArray[i];

        for(let j=0; j<artNames.length; j++){

            const art = artNames[j];

            modalArray.push(art);

        }

    }

}

const createAndFireArtModalList = function(modalArray,artArray){

    appendArtToModalList(modalArray,artArray);
    generateArtModals(modalArray);


}

const addArtToColumn = function(artArray,elementId){
    
    for(const artName of artArray){
        const img = document.createElement("img");


        let path = (Array.isArray(artName.fileName) === true ? artName.fileName[0] : artName.fileName);

        if(artName.hasVideo && Array.isArray(artName.fileName)){
            path = artName.fileName[1];
        }

        img.setAttribute("src",ArtPath+"Icons/"+ path);
        img.setAttribute("alt",artName.name);
        img.setAttribute("openmodal",artName.modalName)
        img.setAttribute("loading","lazy")
        img.className = "modal-open"

        const column = document.getElementById(elementId);
        
        column.appendChild(img)
    }
}

const checkArtClick = function(){

    for(const img of ArtImgs){

        img.addEventListener("click", function(){ window.open(img.src, '_blank').focus(); })

    }

}

const distributeInThreeArrays = function(list){

    const threePartIndex = Math.floor(list.length / 4);

    const thirdPart = list.splice(-threePartIndex);
    const secondPart = list.splice(-threePartIndex);
    const secondPart2 = list.splice(-threePartIndex);
    const firstPart = list;     

    return [firstPart, secondPart, secondPart2, thirdPart];

}