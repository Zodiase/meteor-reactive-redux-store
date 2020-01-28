# Reactive Redux for Meteor

[![Greenkeeper badge](https://badges.greenkeeper.io/Zodiase/meteor-reactive-redux-store.svg)](https://greenkeeper.io/)

Create redux stores that are reactive sources in Meteor Tracker.

## Install

```bash
meteor add zodiase:reactive-redux-store
meteor npm install --save redux@3.x.x
```

## Usage

```JavaScript
import { Tracker } from "meteor/tracker";
import { createStore } from "meteor/zodiase:reactive-redux-store";

const store = createStore((state) => state));

Tracker.autorun(() => {
  // `.getState` is a reactive source.
  const state = store.getState();

  // ...
});

// Dispatching any actions would invalidate the dependency and cause a re-run.
store.dispatch({
  type: "whatever",
  // ...
});
```
