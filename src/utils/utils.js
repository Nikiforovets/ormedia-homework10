export function searchTrack(){
    let artistField = document.getElementById("artistField");
    let trackField = document.getElementById("trackField");
    let url = "https://cors-anywhere.herokuapp.com/http://api.deezer.com/search?q=artist:'";
    if(artistField.value != ""){
        url += artistField.value + "'";
    }
    if(trackField.value != ""){
        url += "track:'" + trackField.value + "'";
    }
    getTrackRequest(url);
}

function getTrackRequest(url){
    fetch(url, {method: "GET"})
    .then((response)=>{
        response.json().then((musicData)=> {
            if(typeof musicData.data[0] != "undefined"){
                DZ.player.playTracks([musicData.data[0].id]);
            }
            else{
                alert("По вашему запросу ничего не найдено");
            }
        })
    })
    .catch((error)=>{
        console.error(error);
    })
}