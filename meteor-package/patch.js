import {
  Tracker,
} from "meteor/tracker";

export default (redux) => {
  return {
    ...redux,
    /**
     * This patched version creates a redux store that is bound to a tracker dependency.
     * So that when `.getState()` is used in a tracker computation, `.dispatch()` would invalidate it and cause the computation to be re-run.
     * The interface should be the same as `createStore` from redux.
     */
    createStore: (...args) => {
      const trackerDep = new Tracker.Dependency();
      const newStore = redux.createStore(...args);

      const _getState = newStore.getState.bind(newStore);
      const _dispatch = newStore.dispatch.bind(newStore);

      // Getting state registers the Tracker dependency.
      newStore.getState = (..._args) => {
        trackerDep.depend();

        const result = _getState(..._args);

        return result;
      };

      // Dispatching any action invalidates the Tracker dependency.
      newStore.dispatch = (..._args) => {
        const result = _dispatch(..._args);

        trackerDep.changed();

        return result;
      };

      return newStore;
    },
  };
};
