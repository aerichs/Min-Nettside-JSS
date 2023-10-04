const videoSpiller = document.getElementById("video-spiller");
const forrigeKnapp = document.getElementById("forrige-video");
const nesteKnapp = document.getElementById("neste-video");

// Legg til flere video URL-er her
const videoResurs = [
  "/video/oven.mp4",
  "/video/homborgsund.mp4",
  "/video/ørsjøen.mp4",
  "/video/tørbergsjøen2.mp4",
  // Legg til flere URL-er etter behov
];

let currentVideoIndex = 0;
forrigeKnapp.addEventListener("click", () => {
  currentVideoIndex--;
  if (currentVideoIndex < 0) {
    currentVideoIndex = videoResurs.length - 1;
  }
  videoSpiller.pause();
  videoSpiller.src = videoResurs[currentVideoIndex];
  videoSpiller.load();
  videoSpiller.play();
});

nesteKnapp.addEventListener("click", () => {
  currentVideoIndex++;
  if (currentVideoIndex >= videoResurs.length) {
    currentVideoIndex = 0;
  }
  videoSpiller.pause(); // Pause videoen før du bytter kilde
  videoSpiller.src = videoResurs[currentVideoIndex];
  videoSpiller.load();
  videoSpiller.play();
});
