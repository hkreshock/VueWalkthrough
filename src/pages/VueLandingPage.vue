<template>
    <q-page class='flex flex-center'>
        <LandingPage></LandingPage>
    </q-page>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

// animations
import 'animate.css';

import LandingPage from '../components/pages/vueLandingPage';

export default defineComponent({
    name: 'VueLandingPage',
    components: {
        LandingPage,
    },
    setup() {
        const $store = useStore();

        return { };
    },
});
</script>
