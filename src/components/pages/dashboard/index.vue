<template>
    <div class='row justify-center items-start content-start'>
        <div class='col-12 q-mb-md'>
            <div class='row full-height content-between justify-between'>
                <div id='tableCardDiv' class='q-px-xs col-12'>
                    <p class='text-h3'>Hello! Welcome to the FreightVana Dev Playground</p>
                    <ul class='flex column text-center text-grey' style='list-style-type: none; font-size: 16pt;'>
                        <li>Check out the tabs to the left for some walkthroughs and challenges</li>
                        <li>Check out "Documentation and Tutorials" in the top right for some extra info</li>
                    </ul>
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
    name: 'Dashboard',
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
