import {
  Tracker,
} from "meteor/tracker";
import redux from "meteor/zodiase:reactive-redux-store";

[
  "createStore",
  "combineReducers",
  "applyMiddleware",
  "bindActionCreators",
  "compose",
].forEach((funcName) => {
  console.info(`\`${funcName}\` is function`, typeof redux[funcName] === "function");
});

const store = redux.createStore((state, action) => ({
  ...state,
  secret: action.secret,
}), {
  secret: -1,
});

console.log("Tracking redux store...");

Tracker.autorun(() => {
  const state = store.getState();

  console.log("state updated.", state);
});

setInterval(() => {
  const action = {
    type: "whatever",
    secret: Math.random(),
  };

  console.log("Random action.", action);
  store.dispatch(action);
}, 1000);
