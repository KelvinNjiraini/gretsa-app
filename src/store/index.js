import { createStore } from 'vuex';

export default createStore({
    state: {
        persona: null,
        isLoggedIn: false,
        dashBoardDetails: null,
    },
    mutations: {
        signCompanyIn(state, payload) {
            state.dashBoardDetails = payload;
            state.persona = 'organization';
            state.isLoggedIn = true;
        },
        signSeekerIn(state, payload) {
            state.dashBoardDetails = payload;
            state.persona = 'job-seeker';
            state.isLoggedIn = true;
        },
    },
    actions: {
        signup1(context, payload) {
            context.commit('signCompanyIn', payload);

            // localStorage.setItem('');
        },
    },
    getters: {
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
    },
});
