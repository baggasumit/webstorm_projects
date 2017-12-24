var playlist = new Playlist();

var hotelCalifornia = new Song("Hotel California", "Eagles", "4:40");
var umbrella = new Song("Umbrella", "Rihanna", "3:59");
var hallowed = new Song("Hallowed Be Thy Name", "Iron Maiden", "5:55");

playlist.add(hotelCalifornia);
playlist.add(umbrella);
playlist.add(hallowed);
var playlistElement = document.getElementById("playlist");


playlist.renderInElement(playlistElement);

var list_items = playlistElement.querySelectorAll("li");

var highlightSong = function(songIndex) {
    list_items[songIndex].classList.add("current");
};

var dehighlightSong = function (songIndex) {
    list_items[songIndex].classList.remove("current");
};

var playButton = document.getElementById("play");
var nextButton = document.getElementById("next");
var stopButton = document.getElementById("stop");


playButton.onclick = function () {
    playlist.play();
    highlightSong(playlist.nowPlayingIndex);

};

nextButton.onclick = function () {
    dehighlightSong(playlist.nowPlayingIndex);
    playlist.next();
    highlightSong(playlist.nowPlayingIndex);

};

stopButton.onclick = function () {
    playlist.stop();
    dehighlightSong(playlist.nowPlayingIndex);
};