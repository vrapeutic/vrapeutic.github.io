---
id: installation-guide
title: Installation Guidelines
sidebar_label: Installation Guidelines
---

## Available WebXR Therapeutic Modules

We are continiously maintaining a library of gamified, therapeutic WebXR modules, that were designed by experts in therapy, education, and game developers.

The following are ongoing open-source projects based on the WebXR technology.

### [Ellie Tale](ellie-tale)

Ellie Tale is gamified Virtual Reality theapeutic application, addresses attention skills on various levels. 

The gameplay consists of a visual target tracking exercise that is designed to address and measure the various variables of attention assessed by the [Test of Variables of Attention (TOVA)](https://www.tovatest.com/).

### [GardenDo](garden-do)

GardenDo is gamified Virtual Reality theapeutic application, addresses attention skills on various levels. 

The gameplay consists of a plant watering exercise that is designed to address and measure the [various variables of attention](https://www.tovatest.com/).

## License

VRapeutic's open-source project are [GPL-3.0 Licensed](https://github.com/vrapeutic/GardenDoWebXR/blob/main/LICENSE).

## Tech. Stack

VRapeutic's WebXR development team builds the therapeutic apps on top of open-source projects as well.

The current WebXR team 's technology stack is:

- [A-Frame](https://aframe.io/)
    - [Animation Mixer](https://www.8thwall.com/8thwall/animation-mixer-aframe)
    - [AABB Colider](https://github.com/supermedium/superframe/tree/master/components/aabb-collider/)
    - [SPE Particles](https://github.com/harlyq/aframe-spe-particles-component)
    - [Super hands](https://github.com/wmurphyrd/aframe-super-hands-component) 
    - [Event set](https://www.npmjs.com/package/aframe-event-set-component)
- [TypeScript](https://www.typescriptlang.org/)
- JavaScript, HTML, CSS

## Installation Guide

We provide easy-to-follow instructions so that developers can easily have our project run on their preffered development platform within no-time

In these instructions, we assume that you're going to start working with our first published WebXR project, **Ellie Tale**.

### Local Development Env.

1. Clone the repository 
```bash
git clone https://github.com/vrapeutic/Ellie-Tale.git
```
2. Go to the repo's directory
```bash
cd Ellie-Tale
```
3. Run the following command to install the required dependecies
```bash
npm install
```
4. Run the following command to start the WebXR app in your local envirotnment
```bash
npm run dev
```
5. Go to the localhost URL specified in your terminal
6. Congrats! You've got your local development environment ready!

### Glitch

1. Go to [Glitch](https://glitch.com/) platform

2. Create an account, if you don't have one 

3. Open your dashboard, click __New project__, then choose the __Import from GitHub__ option.

4. Paste the repo's full [url](https://github.com/vrapeutic/Ellie-Tale.git), then click __Ok__.

5. You're ready to go!

### Docker

Coming soon.