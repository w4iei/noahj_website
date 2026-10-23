---
layout: page
title: Brick Breaker × Stable Audio
description: A DJ's track, reshaped into a new mood with every hit, on the beat. Built at the ADE 2026 hackathon.
img: assets/img/projects/brickbreak.jpg
importance: 2
github: https://github.com/w4iei/brickbreak-stability
---

<!-- FACTS: Noah's project write-up, 2026-10-22. "Live" is used only for the DJ goal: the public
     site plays pre-rendered audio. The hackathon line credits the model, not a sponsor. -->

**▶ [Play it: klavecimbel.com/brickbreak](https://klavecimbel.com/brickbreak) · [Code on GitHub](https://github.com/w4iei/brickbreak-stability)**

Most AI music generates new songs.
This keeps the artist's track and changes only the feeling: a first step toward a tool for DJs to steer a crowd's mood live.

Each brick is an emotion.
When the ball hits one, Yana Kunakbaeva's techno track "ATARI 3.0" switches to a version reshaped toward that emotion, landing on the next beat.

<div class="row justify-content-sm-center">
    <div class="col-sm-6 col-md-5 mt-3 mt-md-0">
        {% include video.liquid path="assets/video/brickbreak.mp4" poster="/assets/img/projects/brickbreak_poster.jpg" class="img-fluid rounded z-depth-1 click-to-play" controls=true %}
    </div>
</div>
<div class="caption">
    ADE 2026 hackathon · Music by Yana Kunakbaeva · Stability AI’s Stable Audio 3
</div>

<script>
  // The poster shows a play button, but Chrome does not start a video on a click outside its
  // control bar. Start it here, unless the browser already did.
  document.querySelectorAll("video.click-to-play").forEach((video) => {
    video.addEventListener("click", (event) => {
      const wasPaused = video.paused;
      const onControlBar = event.offsetY > video.clientHeight - 60;
      setTimeout(() => {
        if (wasPaused && video.paused && !onControlBar) video.play();
      }, 0);
    });
  });
</script>
