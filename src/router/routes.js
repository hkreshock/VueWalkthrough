const makeRoutes = (store) => {
    // all the stuff we check before we hit the route
    async function beforeEnter(to, from, next) {
        // if user isn't logged in, do not pass go; do not collect $200;
        // straight to jail. right away.
        //
        // -- we will hook this up when we get to the api
        // if (!store.state.user.loggedIn) return next({ path: '/login' });

        // now we know user is cool to be here, they may proceed.
        return next();
    }

    // This is where you define your apps routes --- our setup is to define a parent which is the layout wrapper,
    // then its children inherit that wrapper
    const routes = [
        {
            path: '/',
            component: () => import('layouts/MainLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'dashboard',
                    component: () => import('pages/Dashboard.vue'),
                    beforeEnter,
                },
            ],
        },
        {
            path: '/vue',
            component: () => import('layouts/MainLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'vueLandingPage',
                    component: () => import('pages/VueLandingPage.vue'),
                    beforeEnter,
                },
            ],
        },
        {
            path: '/react',
            component: () => import('layouts/MainLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'reactLandingPage',
                    component: () => import('pages/ReactLandingPage.vue'),
                    beforeEnter,
                },
            ],
        },
        {
            path: '/mongo',
            component: () => import('layouts/MainLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'mongoLandingPage',
                    component: () => import('pages/MongoLandingPage.vue'),
                    beforeEnter,
                },
            ],
        },
        {
            path: '/express',
            component: () => import('layouts/MainLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'expressLandingPage',
                    component: () => import('pages/ExpressLandingPage.vue'),
                    beforeEnter,
                },
            ],
        },
    ];

    // Always leave this as last one
    if (process.env.MODE !== 'ssr') {
        routes.push({
            path: '/:catchAll(.*)*',
            component: () => import('pages/Error404.vue'),
        });
    }

    return routes;
};

export default makeRoutes;
