import axios from 'axios';

// this file won't be used until we hook up an api for you to have a login endpoint

export async function updateLoggedIn({ state, commit, dispatch }) {
    try {
        const { data } = await axios({
            method: 'post',
            url: '[insert url]',
            headers: {
                authorization: `Bearer ${state.idToken}`,
            },
        });
        // call mutations to store data && set loggedIn status
        await commit('setProfile', data);
        await commit('setLoggedIn', true);
        //
        // call a dispatch (action) from another state module
        // await dispatch('anotherModule/anotherAction', null, { root: true });
    } catch (error) {
        console.log('APIERR : Cannot POST, [/* insert route /*]: ', error);
    }
}
