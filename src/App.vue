<template>
  <router-view />
</template>
<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'App',
    setup() {
        const $store = useStore();
        // adding state as a computed prop and returning allows us to see "state" as computed in VueDev Tools
        const state = computed(() => $store.state);
        return {
            state,
        };
    },
});
</script>
