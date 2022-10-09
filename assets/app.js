/*
  - Hey there!
  - Remember its okay to look but:
  - Don't copy. It's not nice, nor is it legal.
  - Do not attempt to recreate or copy anything you see here 
  - whether the code or the design without permission from dj keiran him self.
  - This website was coded by djkeiran.co.uk
  - Discord tag: DJKeiran#0001
*/
var playing = false;
var img = document.getElementById("cover");


function updatePlayerText() {
    $.getJSON("", function(data) {
        $("#name").text(data.now_playing.song.title);
        $("#name2").text(data.now_playing.song.artist);
        //$("#cover").css("background-image", `url(${data.now_playing.song.art})`)
        img.src = (`${data.now_playing.song.art}`);
        $("#body").css("background-image", `url(${data.now_playing.song.art})`)
    }).fail(function() {
        $("#name").text("Welcome to ShakingRadioUK!");
        $("#name2").text("https://discord.gg/P7zjtmCWwN");
        $("#body").css("background-image", "url(https://media.discordapp.net/attachments/1023729067188551681/1028693880037703690/shaky.png?width=416&height=393)")
       // $("#cover").css("background-image", "url(https://media.discordapp.net/attachments/1023729067188551681/1028693880037703690/shaky.png?width=416&height=393)")
       img.src = (`https://media.discordapp.net/attachments/1023729067188551681/1028693880037703690/shaky.png?width=416&height=393`);
    });
}


updatePlayerText();
setInterval(updatePlayerText, 2500);
function play() {
    if (playing == true) {
        $(".audio-play")[0].className = "audio-play fas fa-play";
        playing = false;
        audio.volume = 0;
    } else {
        $(".audio-play")[0].className = "audio-play fas fa-pause";
        playing = true;
        audio.src = "http://stream.zeno.fm/8qumo8130edtv";
        audio.volume = 0.5;
        audio.play();
    }
}
var audio = $(".stream")[0];