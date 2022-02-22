<template>
    <div class="row justify-center items-start content-start">
        <div class="col-12 q-mb-md" style="width: 55vw">
            <q-card class="my-card" style="margin-top: 25px; flex-shrink: 1" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                  <div class="text-overline">Intro</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Getting started with MongoDB</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>This is a fairly quick MongoDB walkthrough to teach you the basics on creating a DB, collections, and seeding some objects.</li>
                      <li>Please start by opening MongoDBCompass on your computer.</li>
                      <li>Once the application is opened, paste this mongo string into the text field</li>
                    </ul>
                  </div>
                </q-card-section>
                <q-card-section class="col-5 flex flex-center" style="height: 250px; width: 250px;">
                  <q-img
                    class="rounded-borders"
                    src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png"
                  />
                </q-card-section>
              </q-card-section>
              <q-separator />
              <q-card-actions>
                <strong style="color: #4090ed; margin-left: auto; margin-right: auto;">
                  mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false
                </strong>
              </q-card-actions>
            </q-card>
            <br />
            <br />
            <br />
            <br />
            <q-card class="my-card" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="q-pt-xs full-width">
                  <div class="text-overline">Making a DB</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Let's create our first database</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>Now that you have the environment set up, go ahead and click the <strong style="color: white">Create database</strong> button.</li>
                      <li>Name your database <strong style="color: #4090ed">FreightVanaTest</strong></li>
                      <li>And name your collection <strong style="color: #4090ed">employees</strong></li>
                      <li>Once both text fields are filled in, click the <strong style="color: white">Create database</strong> button.</li>
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
