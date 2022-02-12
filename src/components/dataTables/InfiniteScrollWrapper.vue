<template>
    <div :style="`height: ${height}`" class="row overflow-auto full-width scrollContainer q-pr-sm">
        <q-infinite-scroll
            @load="onLoad"
            :offset="parseInt(height)/2"
            style="width: 100%;"
            :scroll-target="`.scrollContainer ${refKey}`"
            ref="infiniteScroll"
            :key="refKey"
        >
            <slot name="card"></slot>

            <template v-slot:loading>
                <div class="row justify-center q-my-md">
                    <q-spinner-dots color="primary" size="40px" />
                </div>
            </template>
        </q-infinite-scroll>
    </div>
</template>

<script>

import { ref, watchEffect } from 'vue';

export default {
    name: 'InfiniteScrollWrapper',
    emits: [
        'retrieveItems',
    ],
    props: {
        height: {
            type: String,
            required: true,
        },
        refKey: {
            type: String,
            required: true,
        },
    },
    setup(props, { emit }) {
        const infiniteScroll = ref(props.referenceComponent);
        const resume = () => {
            infiniteScroll.value.resume();
        };
        const onLoad = async (index, done) => {
            emit('retrieveItems', {
                done,
                resume,
            });
        };
        return {
            onLoad,
            infiniteScroll,
        };
    },
};
</script>

<style>
.scrollContainer {
    overflow-y: scroll;
}
.scrollContainer::-webkit-scrollbar {
    width: 10px;
    border-radius:  20px;
}
.scrollContainer::-webkit-scrollbar-track {
    border-radius:  20px;
    background-color: transparent;
}
.scrollContainer::-webkit-scrollbar-thumb {
    background-color: #212121;
    border-radius:  20px;
}
</style>
