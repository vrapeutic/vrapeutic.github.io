---
id: installation-guide
title: Directives d'installation
sidebar_label: Directives d'installation
---

## Modules thérapeutiques disponibles dans WebXR

Nous maintenons en permanence une bibliothèque de modules WebXR thérapeutiques gamifiés, conçus par des experts en thérapie, en éducation et en développeurs de jeux.

Voici des projets open source en cours basés sur la technologie WebXR.

### [Ellie Tale](ellie-tale)

Ellie Tale est une application thérapeutique de réalité virtuelle gamifiée, aborde les compétences d'attention à différents niveaux.

Le gameplay consiste en un exercice de suivi visuel de la cible conçu pour aborder et mesurer les différentes variables d'attention évaluées par le [Test des variables d'attention (TOVA)](https://www.tovatest.com/).

### [GardenDo](garden-do)

GardenDo est une application thérapeutique de réalité virtuelle gamifiée, aborde les compétences d'attention à différents niveaux.

Le gameplay consiste en un exercice d'arrosage des plantes conçu pour aborder et mesurer les [diverses variables d'attention](https://www.tovatest.com/).

## License

Les projets open source de VRapeutic sont [sous licence GPL-3.0](https://github.com/vrapeutic/GardenDoWebXR/blob/main/LICENSE).

## Pile Technologique

L'équipe de développement WebXR de VRapeutic construit également les applications thérapeutiques en plus de projets open source.

La pile technologique actuelle de l'équipe WebXR est:

- [A-Frame](https://aframe.io/)
    - [Animation Mixer](https://www.8thwall.com/8thwall/animation-mixer-aframe)
    - [AABB Colider](https://github.com/supermedium/superframe/tree/master/components/aabb-collider/)
    - [SPE Particles](https://github.com/harlyq/aframe-spe-particles-component)
    - [Super hands](https://github.com/wmurphyrd/aframe-super-hands-component) 
    - [Event set](https://www.npmjs.com/package/aframe-event-set-component)
- [TypeScript](https://www.typescriptlang.org/)
- JavaScript, HTML, CSS

## Directives d'installation

Nous fournissons des instructions faciles à suivre afin que les développeurs puissent facilement exécuter notre projet sur leur plate-forme de développement préférée en un rien de temps

Dans ces instructions, nous supposons que vous allez commencer à travailler avec notre premier projet WebXR publié, ** Ellie Tale **.

### Environnement pour le développement local

1. Cloner le référentiel
```bash
git clone https://github.com/vrapeutic/Ellie-Tale.git
```
2. Accédez au répertoire du référentiel
```bash
cd Ellie-Tale
```
3. Exécutez la commande suivante pour installer les dépendances requises
```bash
npm install
```
4. Exécutez la commande suivante pour démarrer l'application WebXR dans votre environnement local
```bash
npm run dev
```
5. Accédez à l'URL localhost spécifiée dans votre terminal
6. Félicitations! Votre environnement de développement local est prêt!

### Glitch

1. Accédez à la plate-forme [Glitch] (https://glitch.com/)

2. Créez un compte, si vous n'en avez pas

3. Ouvrez votre tableau de bord, cliquez sur __Nouveau projet__, puis choisissez l'option __Importer depuis GitHub__.

4. Collez l'[url](https://github.com/vrapeutic/Ellie-Tale.git) complète du dépôt, puis cliquez sur __Ok__.

5. Vous êtes prêt à partir!

### Docker

Bientôt disponible.