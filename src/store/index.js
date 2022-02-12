/* eslint-disable no-tabs */
import { store } from 'quasar/wrappers';
import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
import user from './user';

// const vuexCookie = new VuexPersist({
// 	key: 'cookieStore', // The key to store the state on in the storage provider.
// 	restoreState: (key, storage) => Cookies.getJSON(key),
// 	saveState: (key, state, storage) => Cookies.set(key, state, {
// 		expires: 3, // expire in 3 days
// 	}),
// 	modules: ['authentication'], // only save user auth. module
// });

const vuexLocal = new VuexPersistence({
    key: 'myLocalStore', // The key to store the state on in the storage provider.
    storage: window.localStorage, // or window.sessionStorage or localForage
    modules: [
        'user',
    ], // store all variables in module in store
});

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

let exposeStore = null;

export default store((/* { ssrContext } */) => {
    const Store = createStore({
        modules: {
            user,
        },
        plugins: [vuexLocal.plugin],

        // enable strict mode (adds overhead!)
        // for dev mode and --debug builds only
        // strict: process.env.DEBUGGING,
        strict: true,
    });
    exposeStore = Store;

    return Store;
});

export { exposeStore };
