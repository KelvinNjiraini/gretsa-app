import { createRouter, createWebHistory } from 'vue-router';

import SignupPage from './../pages/SignupPage.vue';
import Home from './../pages/Home.vue';
import Feed from './../pages/Feed.vue';
import applicationPage from './../pages/applicationPage.vue';
import LoginPage from './../pages/LoginPage.vue';
import companyPage from './../pages/companyPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/signup', component: SignupPage },
        { path: '/feed', component: Feed },
        { path: '/application-page', component: applicationPage },
        { path: '/login', component: LoginPage },
        { path: '/company', component: companyPage },
    ],
});

export default router;
