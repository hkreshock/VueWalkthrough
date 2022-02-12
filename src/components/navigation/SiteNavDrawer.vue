<template>
    <q-drawer
      v-model="open"
      :width="200"
      class="lvl-7"
      show-if-above
      behavior="desktop"
      style="position: sticky; top: 50px"
      :style="`max-height: ${intViewportHeight - 50}px`"
    >
        <div class="row justify-center full-height align-center">
            <div class="col-12">
                <q-list>
                    <q-item-label header>
                        <!--  -->
                    </q-item-label>
                    <EssentialLink
                        v-for="(link, index) in essentialLinks"
                        :key="`link${index}`"
                        v-bind="link"
                    />
                </q-list>
            </div>
            <div class="col-11 self-end q-pb-sm">
                <q-btn
                    no-caps
                    class="full-width"
                    color="primary"
                    outline
                >
                    Logout
                </q-btn>
            </div>
        </div>
    </q-drawer>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';

import EssentialLink from './EssentialLink.vue';

export default defineComponent({
    name: 'SiteNavDrawer',
    props: {
        essentialLinks: {
            type: Array,
            default: () => [],
            required: true,
        },
    },
    components: {
        EssentialLink,
    },
    setup(props, { emit }) {
        const open = ref(true);
        const intViewportHeight = window.innerHeight;
        return {
            open,
            intViewportHeight,
        };
    },
});
</script>
