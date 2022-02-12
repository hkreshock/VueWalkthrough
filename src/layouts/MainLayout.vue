<template>
  <q-layout view="hHh lpR fFf">
    <Header></Header>
    <Drawer :essentialLinks="essentialLinks"></Drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Drawer from 'components/navigation/SiteNavDrawer.vue';
import Header from 'components/navigation/SiteHeader.vue';

import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'MainLayout',

    components: {
        Drawer,
        Header,
    },

    setup() {
        const linkList = [
            {
                title: 'Dashboard',
                caption: '',
                icon: 'search',
                link: '/',
            },
            {
                title: 'Login',
                caption: '',
                icon: 'mdi-account-outline',
                link: '/login',
            },
            // {
            //     title: 'FooComponent',
            //     caption: '',
            //     icon: 'mdi-finance',
            //     link: '/fooComponent',
            // },
        ];

        // can rename vars when returning to template
        return {
            essentialLinks: linkList,
        };
    },
});
</script>
