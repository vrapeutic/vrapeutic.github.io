---
id: get-started
title: Start Creating
sidebar_label: Start Creating
---

## WebXR-ready Boilerplate

We value the time of our development team, as well as our open-source contributors, so, we've decided to build a starter project that is easy to setup, and within few minutes, you can start creating your own therapeutic application based on our design guidelines and best practices.

In this starter project, we use TypeScript with A-Frame, to be able to create static-types, readible, maintainable A-Frame component classes.

We're also using [Google TypeScript Style (GTS)](https://github.com/google/gts) rules and automatic styling, formatting and fixing, to keep our code base consistent and well-formated.

[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

## Installation Guide

### Clone

- Run the following command to clone the project to your local development environment

```bash
git clone https://github.com/vrapeutic/webxr-boilerplate.git
```

- Go to the cloned directory

```bash
cd webxr-boilerplate
``` 

### Instal Dependencies

- Run the following command to install all required depedencies

```bash
npm install
```

### Create a new A-Frame Component

- Add new TS components to the **src/components** directory

```bash
cd src/components
touch test_component.ts
```

- Add the base A-Frame component class. Implement the A-Frame functions based on your usage

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

- Make sure you register your component in the same file. Add this line at the end of the TS file

```typescript title="src/components/test_component.ts"
new TestComponent().register();
```

- Make sure you *import* any new component to **src/index.ts**, then add it into the export section, so that it can be compiled with the other components

```typescript title="src/index.ts"
import {TestComponent} from './components/test-component';
export {TestComponent};
```
## Automatic Fixing

- Say the following magic command to have your TS files automatically formatted and styled according to GTS, and to make sure that your code is error-free

```bash
npm run fix
```

## Build

- Run the following command to build the TS scripts using webpack. This step will generate the **dist** directory which will include the HTML files that are going to have the implemented functionalities

```bash
npm run build
```

## Start Local Development Server

- Run the following command which will start a local development server on **localhost**, and the port number will be shown in CLI. The server has live-reloading features which will enable seeing your changes in real time (just make sure you run the build command)

```bash
npm run start-dev
```

## Check your new component

- Open the browser to **localhost:PORT** and start building amazing WebXR experiences!
