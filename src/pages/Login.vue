<template>
    <!-- we will have you edit this template once we get to setting up an api -->
    <q-page class="row justify-center items-center">
        <div class="col-3">
            <q-card id="loginCard" class="lvl-1 q-pa-md">
                <q-card-section id="logoWrapper">
                    <img src="../assets/icon.svg" alt="" />
                </q-card-section>
                <q-card-section class="q-pa-lg">
                    <div class="row justify-center">
                        <div class="col-12 text-center q-pt-lg">
                            <!-- we will add an "@click" function to this button to trigger a method for login -->
                            <q-btn
                                no-caps
                                color="primary"
                                style="width: 100%"
                            >
                                Login
                                <q-icon name="mdi-key" class="q-ml-lg"></q-icon>
                            </q-btn>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </div>
    </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'Login',
    components: {
        //
    },
    setup() {
        return {
            //
        };
    },
});
</script>

<style scoped>
#logoWrapper {
    height: 50px;
    position: relative;
}
img {
    height: 120px;
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
}
</style>
