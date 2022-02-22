<template>
  <q-layout view='hHh lpR fFf'>
    <Header></Header>
    <Drawer :essentialLinks='essentialLinks'></Drawer>

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
                title: 'Hello',
                caption: '',
                icon: 'mdi-human-greeting',
                link: '/',
            },
            {
                title: 'Vue',
                caption: '',
                icon: 'mdi-vuejs',
                link: '/vue',
            },
            // {
            //     title: 'React',
            //     caption: '',
            //     icon: 'mdi-react',
            //     link: '/react',
            // },
            {
                title: 'MongoDB',
                caption: '',
                icon: 'mdi-database',
                link: '/mongo',
            },
            {
                title: 'Express',
                caption: '',
                icon: 'mdi-api',
                link: '/express',
            },
        ];

        // can rename vars when returning to template
        return {
            essentialLinks: linkList,
        };
    },
});
</script>
