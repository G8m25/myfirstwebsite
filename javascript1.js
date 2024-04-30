document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("pf-audio-1");
    var video = document.getElementById("pf-video-1");


    audio.volume = 0.20;


    video.addEventListener("play", function () {
        audio.volume = 0;
    });


    video.addEventListener("pause", function () {
        audio.volume = 0.2;
    });

    video.addEventListener("ended", function () {
        audio.volume = 0.2;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("incep-audio-1");
    var video = document.getElementById("incep-video-1");


    audio.volume = 0.25;


    video.addEventListener("play", function () {
        audio.volume = 0;
    });


    video.addEventListener("pause", function () {
        audio.volume = 0.25;
    });

    video.addEventListener("ended", function () {
        audio.volume = 0.25;
    });
});

function toggleDetails1() {
    var detailsElement = document.getElementById("incep-MoreDetails");
    if (detailsElement.style.display === "none") {
        detailsElement.style.display = "block";
    } else {
        detailsElement.style.display = "none";
    }
}

function toggleDetails2() {
    var detailsElement = document.getElementById("pf-MoreDetails");
    if (detailsElement.style.display === "none") {
        detailsElement.style.display = "block";
    } else {
        detailsElement.style.display = "none";
    }
}