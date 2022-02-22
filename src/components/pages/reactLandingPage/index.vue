<template>
    <div class="row justify-center items-start content-start">
        <div class="col-12 q-mb-md">
            <div class="row full-height content-between justify-between">
                <div id="tableCardDiv" class="q-px-xs col-12">
                    <p class="text-h5">React landing page</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    computed,
    ref,
    defineComponent,
    onMounted,
} from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'ReactLandingPage',
    components: {
    },
    setup() {
        // declare store -- will be used in grabbing data from store, commits, dispatches, etc
        const $store = useStore();

        onMounted(() => {
            //
        });

        return {};
    },
});

</script>
