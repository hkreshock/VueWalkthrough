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
                    component: () => import('pages/Dashboard.vue'),
                    beforeEnter,
                },
                // {
                //     path: 'fooComponent',
                //     name: 'fooComponent',
                //     component: () => import('pages/FooComponent.vue'),
                //     beforeEnter,
                // },
            ],
        },
        // this is an additional page outside of the MainLayout - it is wrapped by the "UnauthenicatedLayout"
        // {
        //     path: '/login',
        //     component: () => import('layouts/UnauthenticatedLayout.vue'),
        //     children: [
        //         { path: '', component: () => import('pages/Login.vue') },
        //     ],
        // },
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
