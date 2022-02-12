// mutations to handle updates to state
export const setToken = (state, payload) => {
    state.idToken = payload;
};
export const setProfile = (state, payload) => {
    state.profile = payload;
};
export const setLoggedIn = (state, payload) => {
    state.loggedIn = payload;
};
export const resetState = (state) => {
    state.idToken = null;
    state.loggedIn = false;
    state.profile = {};
};
