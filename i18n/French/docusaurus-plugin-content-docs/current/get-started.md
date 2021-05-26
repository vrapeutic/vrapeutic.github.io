---
id: get-started
title: Commencer à Créer
sidebar_label: Commencer à Créer
---

## Modèle prêt pour WebXR

Nous apprécions le temps de notre équipe de développement, ainsi que de nos contributeurs open-source, nous avons donc décidé de construire un projet de démarrage facile à configurer, et en quelques minutes, vous pouvez commencer à créer votre propre application thérapeutique basée sur nos directives de conception et nos meilleures pratiques.

Dans ce projet de démarrage, nous utilisons TypeScript avec A-Frame, pour pouvoir créer des classes de composants A-Frame de types statiques, lisibles et maintenables.

Nous utilisons également des règles [Google TypeScript Style (GTS)](https://github.com/google/gts) et un style, un formatage et une correction automatiques, pour que notre base de code reste cohérente et bien formatée.

[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

## Guide d'installation

### Cloner

- Exécutez la commande suivante pour cloner le projet dans votre environnement de développement local

```bash
git clone https://github.com/vrapeutic/webxr-boilerplate.git
```

- Accédez au répertoire cloné

```bash
cd webxr-boilerplate
``` 

### Dépendances instal

- Exécutez la commande suivante pour installer toutes les dépendances requises

```bash
npm install
```

### Créer un nouveau composant A-Frame

- Ajouter de nouveaux composants TS au répertoire ** src/components **

```bash
cd src/components
touch test_component.ts
```

- Ajoutez la classe de composant A-Frame de base. Implémentez les fonctions A-Frame en fonction de votre utilisation

```typescript title="src/components/test_component.ts"
import {ComponentWrapper} from '../essential/aframe-wrapper';
import {EntityBuilder} from '../essential/entity-builder';

interface TestComponentSchema {
  readonly name: string;
}

export class TestComponent extends ComponentWrapper<TestComponentSchema> {
  constructor() {
    super('test-component', {
      color: {
        type: 'string',
        default: 'no-name',
      },
    });
  }

  init() {}

  update() {}

  play() {}

  pause() {}

  tick() {}

  remove() {}

  destroy() {}
}
```

- Assurez-vous d'enregistrer votre composant dans le même fichier. Ajoutez cette ligne à la fin du fichier TS

```typescript title="src/components/test_component.ts"
new TestComponent().register();
```

- Assurez-vous que vous *importez* tout nouveau composant dans ** src/index.ts **, puis ajoutez-le dans la section d'exportation, afin qu'il puisse être compilé avec les autres composants

```typescript title="src/index.ts"
import {TestComponent} from './components/test-component';
export {TestComponent};
```
## Fixation automatique

- Dites la commande magique suivante pour que vos fichiers TS soient automatiquement formatés et stylisés selon GTS, et pour vous assurer que votre code est sans erreur

```bash
npm run fix
```

## Construire

- Exécutez la commande suivante pour créer les scripts TS à l'aide de webpack. Cette étape générera le répertoire ** dist ** qui inclura les fichiers HTML qui auront les fonctionnalités implémentées

```bash
npm run build
```

## Démarrer le serveur de développement local

- Exécutez la commande suivante qui démarrera un serveur de développement local sur ** localhost **, et le numéro de port sera affiché dans la CLI. Le serveur dispose de fonctionnalités de rechargement en direct qui permettront de voir vos modifications en temps réel (assurez-vous simplement d'exécuter la commande build)

```bash
npm run start-dev
```

## Vérifiez votre nouveau composant

- Ouvrez le navigateur pour ** localhost:PORT ** et commencez à créer des expériences WebXR incroyables!