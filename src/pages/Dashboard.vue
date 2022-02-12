<template>
    <q-page class="flex flex-center">
        <StateTable></StateTable>
    </q-page>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

// animations
import 'animate.css';

import StateTable from '../components/pages/dashboard';

export default defineComponent({
    name: 'Dashboard',
    components: {
        StateTable,
    },
    setup() {
        const $store = useStore();

        return { };
    },
});
</script>
