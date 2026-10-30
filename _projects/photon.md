---
layout: page
title: PHOTON
description: Optical key-lever tracking for historical keyboard instruments. Peer-reviewed at NIME 2026; hardware and firmware are open source.
img: assets/img/projects/photon_card.jpg
importance: 1
github: https://github.com/w4iei/photon
---

<!-- FACTS: KLAV-2, KLAV-3, KLAV-5, KLAV-6, KLAV-7, KLAV-9, KLAV-10, KLAV-12, KLAV-13, KLAV-14, KLAV-15, PUB-2.
     From the NIME 2026 paper (sections 4.3-4.6): modular boards with an RP2350 each, KiCad placement
     plugin, 5.0 mm height limit, RS-485, removable-putty mounting, per-sensor calibration, composite USB.
     Power corrected 2026-10-22: buck converter only, no LDO; the paper's 0.75 A figure is left out. -->

**→ [Read the paper](https://nime.org/proc/nime2026_85/index.html) · [Hardware and firmware on GitHub](https://github.com/w4iei/photon)**

PHOTON measures how each key of a harpsichord, clavichord, or early fortepiano moves, and turns that motion into MIDI in real time, without interfering with the action.
I designed and built all of it: schematic, PCB layout, firmware, and analysis.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/photon_manual.jpg" title="PHOTON sensor board under a harpsichord manual" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A PHOTON sensor board beneath the keys of a harpsichord manual.
</div>

## Built to fit the instrument

- **Any keyboard.** Identical boards sit side by side under the keys, so one design covers any compass; a removable end segment handles odd key counts.
- **Placed per instrument.** A custom KiCad plugin places the sensors from each instrument's measured guide-pin spacing.
- **Less than 5 mm total board height.** All surface-mount parts and low-profile connectors, to fit beneath the key levers.
- **Mounting options.** Various mounting options for harpsichords with a 13.33 mm jack and key pitch, including removable putty that needs no drilling.
- **Calibrated per key.** Each sensor records its rest and full-travel readings in place, so keys with different surfaces read alike.

## Electronics

- An RP2350 on each board; the boards are daisy-chained over RS-485.
- USB-C in, stepped down to 3.3 V by a buck converter for efficiency. A full system runs from a laptop or even an iPhone.
- Shows up on a computer as USB MIDI, or as a higher-resolution position stream.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/photon_controller.jpg" title="PHOTON main controller board" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The main controller board, about 7 × 5 cm.
</div>

<div class="embed-responsive embed-responsive-16by9 rounded z-depth-1">
    {% include video.liquid path="https://www.youtube.com/embed/s9ZEaU9RjfE" class="embed-responsive-item" %}
</div>

N. Jaffe and J. A. Burgoyne, "PHOTON: Non-Invasive Optical Tracking of Key-Lever Motion in Historical Keyboard Instruments," _NIME 2026_. [Paper](https://nime.org/proc/nime2026_85/index.html) · [PDF](/assets/pdf/PHOTON_NIME_2026.pdf)

<div class="caption">
    Photos are Figures 2 and 7 of the NIME 2026 paper (CC BY 4.0).
</div>
