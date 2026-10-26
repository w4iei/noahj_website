---
layout: page
title: PHOTON Micro
description: A real-time historical keyboard classifier. Piano, organ, harpsichord, and clavichord from microphone audio, on a microcontroller.
importance: 6
github: https://github.com/w4iei/PHOTON-Micro
---

<!-- FACTS: KLAV-16, and Noah's paragraph of 2026-10-26 (parameter count, model size, ESP32-S3, update rate,
     training data). The earlier page said RP2350 with PDM microphones; replaced by the ESP32-S3 line on
     Noah's text. Not on record, so not stated: accuracy. The GitHub repository showed as empty on 2026-10-26. -->

**→ [Code on GitHub](https://github.com/w4iei/PHOTON-Micro)**

[PHOTON Micro](https://github.com/w4iei/PHOTON-Micro) is a real-time neural network that hears an instrument being played in the room and says which it is: piano, organ, harpsichord, or clavichord.
The model is a neural ensemble with approximately 67,000 parameters and 74 KiB of quantised model data.
It processes microphone audio locally on a microcontroller such as the ESP32-S3, combining spectral and temporal features to update instrument scores roughly once per second.
Training combined Pianoteq and Organteq renders, real keyboard and organ recordings, speech rejection examples, and noise and recording-condition augmentation.
