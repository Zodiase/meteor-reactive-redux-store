import {
  checkNpmVersions,
} from "meteor/tmeasday:check-npm-versions";

checkNpmVersions({
  "redux": "3.x.x",
}, "zodiase:reactive-redux-store");

import patch from "./patch";

let patchedRedux = {};

try {
  patchedRedux = patch(require("redux"));
} catch (e) {}

export const createStore = patchedRedux.createStore;
export const combineReducers = patchedRedux.combineReducers;
export const applyMiddleware = patchedRedux.applyMiddleware;
export const bindActionCreators = patchedRedux.bindActionCreators;
export const compose = patchedRedux.compose;
