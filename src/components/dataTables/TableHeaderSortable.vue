<template>
    <div class="row full-width">
        <div class="col-12">
            <q-card class="q-pa-sm q-mb-sm" :class="elevation" :flat="flat">
                <div class="row full-width justify-space-between">
                    <div class="col-grow">
                        <div class="row text-caption full-height content-center">
                            <q-btn
                                v-for="(header, index) in headers"
                                :key="`header${index}`"
                                no-caps
                                size="md"
                                flat
                                class="q-mx-md"
                                :icon-right="iconName(header.direction)"
                                :disable="disable"
                                @click="$emit('changeSort', { header, index })"
                            >
                                <div class="row items-center">
                                    {{header.title}}
                                </div>
                            </q-btn>
                        </div>
                    </div>
                    <div v-if="slotted" class="col-shrink text-right">
                        <slot name="extraActions"></slot>
                    </div>
                </div>
            </q-card>
        </div>
    </div>
</template>

<script>

import { ref, computed } from 'vue';

export default {
    name: 'TableCardHeaderSortable',
    props: {
        elevation: {
            type: String,
            default: 'lvl-1',
            required: true,
        },
        flat: {
            type: Boolean,
            default: false,
            required: false,
        },
        disable: {
            type: Boolean,
            default: false,
            required: false,
        },
        slotted: {
            type: Boolean,
            default: false,
            required: false,
        },
        headers: {
            type: Array,
            default: () => [],
            required: true,
        },
    },
    setup(props, { emit }) {
        const iconName = (direction) => {
            let icon;
            if (direction === 'none') icon = 'mdi-unfold-more-horizontal';
            if (direction === 'ascending') icon = 'mdi-chevron-up';
            if (direction === 'descending') icon = 'mdi-chevron-down';
            return icon;
        };
        return {
            iconName,
        };
    },
};
</script>
