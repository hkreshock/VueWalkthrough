import { computed } from 'vue';

export function modelWrapper(props, emit, name = 'modelValue') {
    return computed({
        get: () => props[name],
        set: (value) => {
            emit(`update:${name}`, value);
        },
    });
}
