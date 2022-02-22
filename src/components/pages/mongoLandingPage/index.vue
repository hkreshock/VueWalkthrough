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
            <br />
            <q-card class="my-card" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="q-pt-xs full-width">
                  <div class="text-overline">Naviagte</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Navigating to your collection</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>See, setting up a DB and a collection isn't too bad. Now, go into our collection.</li>
                      <li>You should now see your new database on your databases list, go ahead and click into it.</li>
                      <li>Now you should only see your <strong style="color: #4090ed">employees</strong> collection, click into that as well.</li>
                    </ul>
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card>
            <br />
            <br />
            <br />
            <br />
            <q-card class="my-card" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="q-pt-xs full-width">
                  <div class="text-overline">Adding data</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Seeding your collection</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>
                        We've made it to your collection, we need data now. Click the <strong style="color: white">Download</strong> button
                        below to download a JSON file with some data.
                      </li>
                      <li>In Compass, click <strong style="color: white">Import Data</strong> button.</li>
                      <li>I'm sure you know what's next; go ahead and select the file you just downloaded, then select JSON as the file type.</li>
                      <li>Once that's done click <strong style="color: white">Import</strong>, then click <strong style="color: white">Done</strong>.</li>
                    </ul>
                  </div>
                </q-card-section>
              </q-card-section>
              <q-separator />
              <q-card-actions>
                <q-btn flat color="primary" @click="exportToJson">
                  Download
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
                  <div class="text-overline">Done</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">That's it!</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>You're all done! You no have a local DB ready to go on your computer!</li>
                      <li>
                        Go ahead and click around in Compass now. I always find it helpful to mess around in new interfaces to get a better understanding of its functionality.
                        And as always, there are links for official documentation in the top right if you were looking for more tips and tricks.
                      </li>
                      <li>Once you're ready for the next walkthrough, head to the Express tab :)</li>
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
import seedData from './dataForDatabaseSeed.json';

export default defineComponent({
    name: 'Mongo',
    components: {
    },
    setup() {
        const downloadFile = ({ data, fileName, fileType }) => {
            // Create a blob with the data we want to download as a file
            const blob = new Blob([data], { type: fileType });
            // Create an anchor element and dispatch a click event on it
            // to trigger a download
            const a = document.createElement('a');
            a.download = fileName;
            a.href = window.URL.createObjectURL(blob);
            const clickEvt = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
            });
            a.dispatchEvent(clickEvt);
            a.remove();
        };

        const exportToJson = (e) => {
            e.preventDefault();
            downloadFile({
                data: JSON.stringify(seedData),
                fileName: 'data.json',
                fileType: 'text/json',
            });
        };

        return { exportToJson };
    },
});

</script>
