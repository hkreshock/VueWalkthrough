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
                      <li>Please start by downloading this blank Express Template from GitHub.</li>
                      <li>Once downloaded, open up the project in VSCode, and then create a new branch for yourself.</li>
                      <li>After you made and checkout your branch, open the terminal and run <strong style="color: white">npm install</strong>.</li>
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
                <q-card-section class="q-pt-xs">
                  <div class="text-overline">Set up envs</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Getting our backend ready to run</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>
                        Before we can spin up the backend, we first need to add some environment variables. At the root level of your project,
                        create a new file called <strong style="color: white">.env</strong> (yes, include the prefixed period).
                      </li>
                      <li>
                        The environment variables are usually sensitive pieces of information, like port number, database url, and even auth tokens.
                        For this project in particular, we will only need the basics: project name, current development process, port number, and database url.
                      </li>
                      <li>
                        In your new file, copy and paste the following lines
                        <br />
                        <code style="color: #4090ed; font-weight: bold">
                          {{`NAME='ExpressAPI'
NODE_ENV='development'
PORT=5375
DATABASE_URL='mongodb://localhost:27017/FreightVanaTest'`}}
                        </code>
                        <span class="text-caption">*** This DB url points to the local mongo database that you set up in the last walkthough</span>
                      </li>
                      <li>Save your env file.</li>
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
                <q-card-section class="q-pt-xs">
                  <div class="text-overline">Models</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Building a schema</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>
                        The main goal of a backend is to access the data in our databases. In order to do that, we need to tell our backend what
                        each object looks like, in as much detail as possible. To do so we use models (schemas).
                      </li>
                      <li>In your project, navigate to the <strong style="color: white">fooSchema.js</strong> file (located in models > v0).</li>
                      <li>
                        First, you'll need to rename your file to be <strong style="color: white">employeeSchema.js</strong>. After that, we need to fix
                        its file import since we just changed the file name. In the same <strong style="color: white">v0</strong> folder, go to <strong style="color: white">index.js</strong>.
                      </li>
                      <li>
                        In <strong style="color: white">index.js</strong>, update your code by replacing all instances of
                        <strong style="color: #4090ed">fooSchema</strong>
                        with
                        <strong style="color: #4090ed">employeeSchema</strong>.
                      </li>
                      <li>
                        After you've updated your import, go back to <strong style="color: white">employeeSchema.js</strong>. Once again, update your file by
                        replacing both instances of
                        <strong style="color: #4090ed">fooSchema</strong>
                        with
                        <strong style="color: #4090ed">employeeSchema</strong>.
                      </li>
                      <li>Great! Now that our files have been updated with proper naming conventions, so our next step is to update the model itself.</li>
                      <li>If you remember from the MongoDB walkthough, we used employee objects to seed the DB. We're going to use those objects to help define our schema.</li>
                      <li>
                        Our <strong style="color: #4090ed">employeeSchema</strong> already has a <strong style="color: #4090ed">name</strong>
                        key, so we just need to add <strong style="color: #4090ed">role</strong>, <strong style="color: #4090ed">age</strong>, and
                        <strong style="color: #4090ed">company</strong>.
                      </li>
                      <li>
                        On line 9 insert a new line, then copy and paste in the following objects
                        <q-card flat bordered class="q-my-md q-pa-md">
                          <q-btn flat color="primary" style="float: right" @click="navigator.clipboard.writeText(employeeSchemaCodeSample);">
                            Copy
                          </q-btn>
                          <code>{{ employeeSchemaCodeSample }}</code>
                        </q-card>
                        <span class="text-caption">
                          *** The reason we include default: null is for SQL reporting purposes. If all the objects (and their keys) in the database aren't uniform,
                          we run into discrepancies when trying to grab data for analytics or any kind of reporting.
                        </span>
                      </li>
                      <li>Fix any inconsisent indentation, then save your file.</li>
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
                <q-card-section class="q-pt-xs">
                  <div class="text-overline">Set up connection object</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Time to tie our schema to our collection</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>With our schema defined, and our imports fixed, now we get to update our connection object.</li>
                      <li>In your project, navigate to <strong style="color: white">db.js</strong> (located in scripts > v0).</li>
                      <li>
                        On line 7, update <strong style="color: #4090ed">fooSchema</strong> with
                        <strong style="color: #4090ed">employeeSchema</strong>.
                      </li>
                      <li>
                        Next, on line 19, update your db name from <strong style="color: #4090ed">exampleDB</strong> to
                        <strong style="color: #4090ed">FreightVanaTest</strong>.
                      </li>
                      <li>
                        On line 21, update your collection name from <strong style="color: #4090ed">Foo</strong> to
                        <strong style="color: #4090ed">employees</strong>.
                      </li>
                      <li>
                        Lastly, on line 48, update your connection object association from
                        <strong style="color: #4090ed">connObj.exampleDB.Foo = db.model('foos', fooSchema);</strong> to
                        <strong style="color: #4090ed">connObj.FreightVanaTest.employees = db.model('employees', employeeSchema);</strong>
                      </li>
                      <li>
                        Alright! You've finished fixing your <strong style="color: white">db.js</strong> file. Go ahead and save that.
                        Next we'll be creating a route to grab data from your db.
                      </li>
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
        return {
            window,
            navigator,
            employeeSchemaCodeSample: `role: {
	type: String,
	default: null,
},
age: {
	type: Number,
	default: null,
},
company: {
	type: String,
	default: null,
},`,
        };
    },
});

</script>

<style scoped>
  code {
    display: block;
    white-space: pre-wrap;
  }
</style>
