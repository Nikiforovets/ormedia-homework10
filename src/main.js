import * as utils from "./utils/utils"

DZ.init({
    appId  : '394864',
    channelUrl : 'http://nikimusics/channel.html',
    player: {
        container: 'player',
        width : 800,
        height : 100,
        onload : function(){
        }
    }
});

document.getElementById("searchBtn").addEventListener("click", utils.searchTrack);

