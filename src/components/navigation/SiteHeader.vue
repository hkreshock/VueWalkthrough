<template>
    <q-header elevated class='lvl-7'>
        <q-toolbar>
            <q-toolbar-title class='row'>
                FreightVana Dev Playground
                <q-space />
                <q-btn-dropdown dense flat no-caps color='primary' label='Documentation and Tutorials'>
                    <q-list v-for='(item, index) in documentation' :key='index'>
                        <q-item clickable v-close-popup @click='onItemClick(item.link)'>
                            <q-item-section>
                                <q-item-label>{{item.title}}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-btn-dropdown>
            </q-toolbar-title>
        </q-toolbar>
    </q-header>
</template>

<script>
import {
    defineComponent,
    inject,
    onUnmounted,
    onMounted,
} from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'SiteHeader',
    props: {
    },
    setup() {
        const $store = useStore();
        const socket = inject('socket');

        const documentation = [
            {
                title: 'Quasar UI Library Official Docs',
                link: 'https://quasar.dev/',
            },
            {
                title: 'Vue 3 Official Docs',
                link: 'https://v3.vuejs.org/guide/introduction.html',
            },
            {
                title: 'Vue 3 Tutorial Playlist',
                link: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1',
            },
            {
                title: 'Vuex Official Docs',
                link: 'https://vuex.vuejs.org/',
            },
            {
                title: 'Vuex Tutorial Playlist',
                link: 'https://www.youtube.com/watch?v=BGAu__J4xoc&list=PL4cUxeGkcC9i371QO_Rtkl26MwtiJ30P2&index=1',
            },
            {
                title: 'React Getting Started',
                link: 'https://reactjs.org/docs/getting-started.html',
            },
            {
                title: 'ReactJS Crash Course',
                link: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8&ab_channel=TraversyMedia',
            },
            {
                title: 'Node/Express Official Docs',
                link: 'https://expressjs.com/en/guide/routing.html',
            },
            {
                title: 'Node/Express Tutorial Playlist',
                link: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU',
            },
            {
                title: 'Mongo Official Docs',
                link: 'https://docs.mongodb.com/',
            },
            {
                title: 'Mongo Tutorial Playlist',
                link: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u',
            },
            {
                title: 'Mongoose Official Docs',
                link: 'https://mongoosejs.com/docs/api.html',
            },
            {
                title: 'Mongoose Tutorial Playlist',
                link: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9jBcybHMTIia56aV21o2cZ8',
            },
            {
                title: '* Mongo Aggregations *',
                link: 'https://www.youtube.com/watch?v=A3jvoE0jGdE&list=PLWkguCWKqN9OwcbdYm4nUIXnA2IoXX0LI',
            },
            {
                title: 'Express Hello World Example',
                link: 'https://expressjs.com/en/starter/hello-world.html',
            },
            {
                title: 'Express Examples and Links',
                link: 'https://expressjs.com/en/starter/examples.html',
            },
        ];

        const onItemClick = (link) => {
            window.open(link, '_blank');
        };

        const turnOnSockets = () => {
            socket.on('', (obj) => {
                //
            });
        };

        onMounted(() => {
            turnOnSockets();
        });

        onUnmounted(() => {
            socket.off('');
        });
        return {
            documentation,
            onItemClick,
        };
    },
});
</script>

<style scoped>

</style>
