<template>
    <!--
        This file uses slots! They are pretty neat. Here is a link for helpful documentation on them:
        https://vuejs.org/guide/components/slots.html#slot-content-and-outlet
    -->
    <q-card class="q-pa-sm q-my-sm" :class="elevation" :flat="flat">
        <div class="row">
            <div v-if="avatar" class="col-shrink flex items-center q-px-md">
                <q-avatar
                    :size="avatarProperties.size"
                    :color="avatarProperties.color"
                    :class="avatarProperties.customClass"
                    :text-color="avatarProperties.textColor"
                    :font-size="avatarProperties.textSize"
                    :icon="avatarProperties.icon"
                    @click="$emit('avatarEvent')"
                >
                    <slot name="avatarText"></slot>
                </q-avatar>
            </div>
            <div class="col-grow q-pa-none">
                <slot name="content"></slot>
            </div>
            <div class="col-shrink q-pa-none">
                <slot name="actions"></slot>
            </div>
        </div>
    </q-card>
    <q-separator :class="indentSeparator ? 'q-ml-md' : null" v-if="flat" />
</template>

<script>

export default {
    name: 'TableCardBravo',
    emits: ['avatarEvent'],
    props: {
        elevation: {
            type: String,
            required: true,
        },
        flat: {
            type: Boolean,
            default: false,
            required: false,
        },
        avatar: {
            type: Boolean,
            default: false,
            required: false,
        },
        avatarProperties: {
            type: Object,
            default: () => {},
            required: false,
        },
        indentSeparator: {
            type: Boolean,
            default: false,
            required: false,
        },
    },
    setup(props, { emit }) {
        return {
        };
    },
};
</script>
