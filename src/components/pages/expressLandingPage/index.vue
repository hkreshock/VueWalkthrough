<template>
    <div class="row justify-center items-start content-start">
        <div class="col-12 q-mb-md" style="width: 55vw">
            <q-card class="my-card" style="margin-top: 25px; flex-shrink: 1" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                  <div class="text-overline">Intro</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Getting started with Express</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>This is a Express walkthrough to get you comfortable messing around in their backend framework.</li>
                      <li>This walkthough will teach you the basics on setting up a backend, connecting to a DB, and creating routes / services.</li>
                      <li>Please start by downloading this blank Express Template from GitHub</li>
                      <li>Once downloaded, open up the project in VSCode, and then create a new branch for yourself.</li>
                    </ul>
                  </div>
                </q-card-section>
                <q-card-section class="col-5 flex flex-center" style="height: 250px; width: 250px;">
                  <q-img
                    class="rounded-borders"
                    src="https://miro.medium.com/max/1400/1*8ETcaw-gA1dYW4EFxqGK3w.png"
                  />
                </q-card-section>
              </q-card-section>
              <q-separator />
              <q-card-actions>
                <q-btn flat color="primary" @click="window.open('https://github.com/hkreshock/ExpressTemplate.git', '_blank');">
                  GitHub Link
                </q-btn>
              </q-card-actions>
            </q-card>
            <br />
            <br />
            <br />
            <br />
            <q-card class="my-card" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="q-pt-xs full-width">
                  <div class="text-overline">Set up</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Getting our backend ready</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                    </ul>
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card>
            <br />
            <br />
            <br />
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Express',
    components: {
    },
    setup() {
        return {};
    },
});

</script>
