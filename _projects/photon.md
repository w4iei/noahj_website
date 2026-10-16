---
layout: page
title: PHOTON
description: Optical key-lever tracking for historical keyboard instruments. Peer-reviewed at NIME 2026; hardware and firmware are open source.
img: assets/img/projects/photon_manual.jpg
importance: 1
github: https://github.com/w4iei/photon
---

<!-- FACTS: KLAV-2, KLAV-3, KLAV-5, KLAV-6, KLAV-7, KLAV-9, KLAV-10, KLAV-12, KLAV-13, KLAV-14, KLAV-15, SKILL-11, PUB-2.
     From the NIME 2026 paper itself (sections 4.3-4.6), not yet in the fact bank: modular sensor boards with
     an RP2350 each, KiCad placement plugin, 5.0 mm height limit, RS-485 rationale, ESD, 0.75 A at 5 V for
     124 sensors, removable-putty mounting, per-sensor calibration, composite USB device. -->

PHOTON measures how each key of a harpsichord, clavichord, or early fortepiano moves, without interfering with the action, and turns that motion into MIDI in real time.
I designed and built the whole system: schematic, PCB layout, component selection, firmware, and the analysis of what it measures.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/photon_manual.jpg" title="PHOTON sensor board under a harpsichord manual" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A PHOTON sensor board beneath the keys of a harpsichord manual.
</div>

## What it measures

Reflective optical sensors sit beneath the far end of each key lever and read its vertical position continuously.
The lever's motion is shaped by the player and by the instrument's own action, so the data carries timing, articulation, and how the mechanism pushes back.
The system is modular and low-profile, so it fits the varied geometries, tight clearances, multiple manuals, and different key counts of historical instruments.

## Hardware

- **Modular boards.** Identical sensor boards sit side by side beneath the manual, so one economical PCB design covers any keyboard compass; a removable end segment handles odd key counts. Each board has its own RP2350 for local scanning and event detection, and a main controller board aggregates their events.
- **Fits the instrument.** A custom KiCad plugin places the sensors from the measured spacing of each instrument's guide pins. The assembled board stays under 5.0 mm tall, which is why every component is surface-mount and every connector low-profile.
- **Buses.** SPI and I2C on the boards, chosen per sensor, with drive strength tuned. Between boards, a daisy-chained differential RS-485 link, chosen over I2C, SPI, or UART for long cable runs. ESD protection on every exposed pin.
- **Power.** USB-C in, regulated to 3.3 V through both an LDO and a buck converter, laid out from the reference designs with attention to the inductor loop and capacitor placement. A 124-sensor, five-board system draws about 0.75 A at 5 V, so it runs from a USB power bank.
- **Designed for manufacture.** Schematic and layout in KiCad, Gerber and BoM output, externally fabricated and SMT-assembled boards. Parts were chosen to keep the assembler's loader fees down and components available for future revisions; footprints were chosen to reduce assembly risk and improve yield.
- **Reversible mounting.** The boards sit beneath the key levers on removable putty, with no drilling or alteration of the instrument. Mounting holes in the board itself allow screw fastening for long-term installations; no bracket or housing is needed.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/photon_controller.jpg" title="PHOTON main controller board" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The main controller board, about 7 × 5 cm.
</div>

## Firmware

Embedded firmware in CircuitPython and C (Pico SDK).
PHOTON appears to a computer as a composite USB device: standard MIDI, or a higher-resolution position stream over serial.

## Validation and analysis

I built and tested several hardware prototypes, iterating through physical validation until the system met its performance targets.
Every sensor is calibrated in place: it records reference values at rest and at full key travel, and later readings are normalised against them, so measurements stay consistent across keys and instruments with different surface reflectivity and mechanics.
The key-motion data is analysed in Python as time series.
For bring-up I built dashboards that line up the board's current draw with its serial log and flag weak sensors across the keyboard.

## Paper, code, and video

- N. Jaffe and J. A. Burgoyne, "PHOTON: Non-Invasive Optical Tracking of Key-Lever Motion in Historical Keyboard Instruments," _NIME 2026_. [Paper](https://nime.org/proc/nime2026_85/index.html) · [PDF](/assets/pdf/PHOTON_NIME_2026.pdf)
- Hardware design and firmware: [github.com/w4iei/photon](https://github.com/w4iei/photon)

<div class="embed-responsive embed-responsive-16by9 rounded z-depth-1">
    {% include video.liquid path="https://www.youtube.com/embed/s9ZEaU9RjfE" class="embed-responsive-item" %}
</div>

<div class="caption">
    Photos are Figures 2 and 7 of the NIME 2026 paper (CC BY 4.0).
</div>
