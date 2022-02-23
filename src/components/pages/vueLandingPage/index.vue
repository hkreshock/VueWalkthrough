<template>
    <div class="row justify-center items-start content-start">
        <div class="col-12 q-mb-md" style="width: 55vw">
            <q-card class="my-card" style="margin-top: 25px; flex-shrink: 1" flat bordered>
              <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                  <div class="text-overline">Intro</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Getting started with Vue</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>This is a Vue walkthrough to get you comfortable messing around in their frontend framework.</li>
                      <li>This walkthough will teach you the basics on setting up routes, building pages, and adding content.</li>
                      <li>Please start by downloading this blank Vue Template from GitHub</li>
                      <li>Once downloaded, open up the project in VSCode, and then create a new branch for yourself.</li>
                      <li>After you made and checkout your branch, open the terminal and run <strong style="color: white">yarn</strong></li>
                      <li>After running yarn, run <strong style="color: white">npm run serve</strong> to spin up the project</li>
                    </ul>
                  </div>
                </q-card-section>
                <q-card-section class="col-5 flex flex-center" style="height: 250px; width: 250px;">
                  <q-img
                    class="rounded-borders"
                    src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                  />
                </q-card-section>
              </q-card-section>
              <q-separator />
              <q-card-actions>
                <q-btn flat color="primary" @click="window.open('https://github.com/hkreshock/VueTemplate', '_blank');">
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
                  <div class="text-overline">Making a header</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Let's add our first component</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>Now that you have the environment set up, it's time to add some basic site features, starting with a navigation menu.</li>
                      <li>
                        In your project, navigate to the <strong style="color: white">MainLayout.vue</strong> file (in the layouts folder). The page is currently very "barebones".
                        What we need to do is add some basic page components.
                      </li>
                      <li>
                        First, we need to create a site header. In your project navigate, to the <strong style="color: white">src</strong> folder, and add a new folder titled <strong style="color: white">components</strong>.
                      </li>
                      <li>
                        In your new <strong style="color: white">components</strong> folder, and add another new folder titled <strong style="color: white">navigation</strong>.
                      </li>
                      <li>In that new folder, create a file titled <strong style="color: white">SiteHeader.vue</strong></li>
                      <li>
                        Now, in your new file, copy and paste in this code. Then save your new file.
                        <q-card flat bordered class="q-my-md q-pa-md">
                          <q-btn flat color="primary" style="float: right" @click="navigator.clipboard.writeText(siteHeaderCodeSample);">
                            Copy
                          </q-btn>
                          <code>{{ siteHeaderCodeSample }}</code>
                        </q-card>
                      </li>
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
                  <div class="text-overline">Tying in header</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Time to show the header</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>Congrats! You've just created the first component for your site. Now we need to link it, so we can actually see it on the page.</li>
                      <li>In your project navigate back to the <strong style="color: white">MainLayout.vue</strong> file.</li>
                      <li>Insert a new line after line 11, and paste in this code
                        <code style="color: #4090ed; font-weight: bold">import Header from 'components/navigation/SiteHeader.vue';</code>
                      </li>
                      <li>
                        Next, we need to define that import as a usable component. So insert a new line after line 17,
                        in the <strong style="color: white">components</strong> object,
                        and add your <strong style="color: #4090ed">Header</strong> import followed by a trailing comma.
                      </li>
                      <li>
                        Since <strong style="color: #4090ed">Header</strong>, is now a defined component on the MainLayout page, we can use it in the template!
                      </li>
                      <li>
                        Insert a new line after line 2, and add your component like this
                        <code style="color: #4090ed; font-weight: bold">{{`<Header></Header>`}}</code>
                      </li>
                      <li>
                        Save your file, and now your webpage should have a header component!
                      </li>
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
                  <div class="text-overline">Making a menu</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Let's make another component</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>Now we have a site with a header, the next basic component will be the site navigation (menu).</li>
                      <li>
                        In your project, go back to the <strong style="color: white">navigation</strong> folder again, and add a new file titled <strong style="color: white">SiteNavDrawer.vue</strong>.
                      </li>
                      <li>
                        Now, in your new file, copy and paste in this code. Then save your new file.
                        <q-card flat bordered class="q-my-md q-pa-md">
                          <q-btn flat color="primary" style="float: right" @click="navigator.clipboard.writeText(siteNavCodeSample);">
                            Copy
                          </q-btn>
                          <code>{{ siteNavCodeSample }}</code>
                        </q-card>
                      </li>
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
                  <div class="text-overline">Making a link</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Time to add a landing page</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>We've created a site nav component, but there's no menu items; so our next step is to add a landing page.</li>
                      <li>
                        The next component we'll be building is a modular link. One of the biggest goals while developing is writing organized code, and a great
                        practice to follow is making your components as modular as possible (Basically as reusable as possible). So in this next step, instead of adding link logic directly in your
                        <strong style="color: white">SiteNavDrawer.vue</strong> file, we're going to create a new component and import it.
                      </li>
                      <li>
                        In your project, go back to the <strong style="color: white">navigation</strong> folder again, and add a new file titled <strong style="color: white">EssentialLink.vue</strong>.
                      </li>
                      <li>
                        Once again, copy and paste in this code. Then save your new file.
                        <q-card flat bordered class="q-my-md q-pa-md">
                          <q-btn flat color="primary" style="float: right" @click="navigator.clipboard.writeText(essentialLinkCodeSample);">
                            Copy
                          </q-btn>
                          <code>{{ essentialLinkCodeSample }}</code>
                        </q-card>
                      </li>
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
                  <div class="text-overline">Import links</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Let's import our link component</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>Navigate back to the <strong style="color: white">SiteNavDrawer.vue</strong> file.</li>
                      <li>Insert a new line after line 18, and paste in this code
                        <code style="color: #4090ed; font-weight: bold">import EssentialLink from './EssentialLink.vue';</code>
                      </li>
                      <li>
                        Next, we need to define that import as a usable component. So insert a new line after line 25,
                        in the <strong style="color: white">components</strong> object,
                        and add your <strong style="color: #4090ed">EssentialLink</strong> import followed by a trailing comma.
                      </li>
                      <li>
                        Since <strong style="color: #4090ed">EssentialLink</strong>, is now a defined component on the SiteNavDrawer page, we can use it in the template!
                      </li>
                      <li>
                        Insert a new line after line 11, after the {{`<div>`}} tag, and add your component like this
                        <code style="color: #4090ed; font-weight: bold">
                          {{`<q-list>
  <EssentialLink></EssentialLink>
</q-list>`
                          }}
                        </code>
                      </li>
                      <li>At this point, save your file, and fix any indentation errors that may be showing.</li>
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
                  <div class="text-overline">Tying in the menu</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Time to show the menu</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>Now we need to link your menu, so we can actually see it on the page.</li>
                      <li>In your project navigate back to the <strong style="color: white">MainLayout.vue</strong> file.</li>
                      <li>Insert a new line after line 13, and paste in this code
                        <code style="color: #4090ed; font-weight: bold">import Drawer from 'components/navigation/SiteNavDrawer.vue';</code>
                      </li>
                      <li>
                        Next, we need to define that import as a usable component. So insert a new line after line 20,
                        in the <strong style="color: white">components</strong> object,
                        and add your <strong style="color: #4090ed">Drawer</strong> import followed by a trailing comma.
                      </li>
                      <li>
                        Since <strong style="color: #4090ed">Drawer</strong>, is now a defined component on the MainLayout page, we can use it in the template!
                      </li>
                      <li>
                        Insert a new line after line 3, and add your component like this
                        <code style="color: #4090ed; font-weight: bold">{{`<Drawer></Drawer>`}}</code>
                      </li>
                      <li>
                        Save your file, and now your webpage should have a menu component!
                      </li>
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
                  <div class="text-overline">Adding links</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Let's make some links</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>We have a menu, but it sure doesn't look right; let's work on that.</li>
                      <li>In your project navigate back to the <strong style="color: white">MainLayout.vue</strong> file.</li>
                      <li>Insert a new line after line 25 (right under the setup function declaration), and paste in this code
                        <code style="color: #4090ed; font-weight: bold">{{`const linkList = [
    {
        title: 'Welcome',
        caption: '',
        icon: 'mdi-human-greeting',
        link: '/',
    },
];`}}
                        </code>
                      </li>
                      <li>
                        Next, we need to make the list accessible from the template, so in the
                        <strong style="color: white">return</strong> object,
                        and add your <strong style="color: #4090ed">linkList</strong> variable.
                      </li>
                      <li>
                        Let's now pass your list as a prop to the Nav Drawer by updating your {{`<Drawer>`}} tags to look like this
                        <code style="color: #4090ed; font-weight: bold">{{`<Drawer :essentialLinks='linkList'></Drawer>`}}</code>
                      </li>
                      <li>At this point, save your file, and fix any indentation errors that may be showing.</li>
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
                  <div class="text-overline">Correct UI</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Fixing the links</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>We're very close to having a working menu, just a few more steps.</li>
                      <li>In your project navigate back to the <strong style="color: white">SiteNavDrawer.vue</strong> file.</li>
                      <li>
                        On our last step, we passed our linkList as a prop to our <strong style="color: #4090ed">SiteNavDrawer</strong> component, so our next step
                        would be to make that prop accessible.
                      </li>
                      <li>
                        So, on line 26, in the <strong style="color: white">props</strong> object, add a line and paste in this code
                        <code style="color: #4090ed; font-weight: bold">{{`essentialLinks: {
    type: Array,
    default: () => [],
    required: true,
},`}}
                        </code>
                      </li>
                      <li>
                        Let's now pass your <strong style="color: white">essentialLinks</strong> as a prop by updating your {{`<EssentialLink>`}} tags to look like this
                        <code style="color: #4090ed; font-weight: bold">{{'<EssentialLink v-for="(link, index) in essentialLinks" :key="`link${index}`" v-bind="link"></EssentialLink>'}}</code>
                      </li>
                      <li>
                        We are basically there! The last step we need in order to complete our menu base menu, is to add a Dashboard to our router. I went ahead an created a Dashboard page, so all we need
                        to do now is import it.
                      </li>
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
                  <div class="text-overline">Update router</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Adding to the router</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>In your project navigate to the <strong style="color: white">routes.js</strong> file (in the router folder).</li>
                      <li>
                        On line 8, add this object to the children array
                        <code style="color: #4090ed; font-weight: bold">{{`{
    path: '',
    name: 'dashboard',
    component: () => import('pages/Dashboard.vue'),
},`}}
                        </code>
                      </li>
                      <li>Save your file, clean up any errors, and now you have solid base site!</li>
                      <li>Next, we'll work on creating our first vue interface.</li>
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
                  <div class="text-overline">Add welcome</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Styling welcome page</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>Our next step is to create some content for our welcome page.</li>
                      <li>To do that, first we need to create a content page for our Dashboard.</li>
                      <li>
                        In your project, go to the <strong style="color: white">components</strong> folder again, and add a new folder titled <strong style="color: white">pages</strong>.
                      </li>
                      <li>
                        In your new folder, create another folder called <strong style="color: white">dashboard</strong>, and put an <strong style="color: white">index.vue</strong> file in there.
                      </li>
                      <li>
                        Now, in your new file, copy and paste in this code. Then save your new file.
                        <q-card flat bordered class="q-my-md q-pa-md">
                          <q-btn flat color="primary" style="float: right" @click="navigator.clipboard.writeText(dashboardPageCodeSample);">
                            Copy
                          </q-btn>
                          <code>{{ dashboardPageCodeSample }}</code>
                        </q-card>
                      </li>
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
                  <div class="text-overline">Import content</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Time to import our welcome</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>Our next step is to create some content for our welcome page.</li>
                      <li>To do that, first we need to create a content page for our Dashboard.</li>
                      <li>
                        In your project, navigate to the <strong style="color: white">Dashboard.vue</strong> file (located in src > pages).
                      </li>
                      <li>Insert a new line after line 7, and paste in this code
                        <code style="color: #4090ed; font-weight: bold">import WelcomeContent from '../components/pages/dashboard';</code>
                      </li>
                      <li>
                        Next, we need to define that import as a usable component. So insert a new line after line 12,
                        in the <strong style="color: white">components</strong> object,
                        and add your <strong style="color: #4090ed">WelcomeContent</strong> import followed by a trailing comma.
                      </li>
                      <li>
                        Since <strong style="color: #4090ed">WelcomeContent</strong>, is now a defined component on the Dashboard page, we can use it in the template!
                      </li>
                      <li>
                        Insert a new line after line 2, after the {{`<q-page>`}} tag, and add your component like this
                        <code style="color: #4090ed; font-weight: bold">
                          {{`<WelcomeContent></WelcomeContent>`}}
                        </code>
                      </li>
                      <li>Save your file, fix any errors, and now you have a landing page.</li>
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
                  <div class="text-overline">New menu item</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Let's make a new menu item</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>Congrats! You've built a Vue site with a landing page, so what's next?</li>
                      <li>
                        Next, we're going to build a "real life" example of a common vue interface. We'll be making a new tab for our menu,
                        and a data table for some content.
                      </li>
                      <li>In your project, let's go back to the <strong style="color: white">MainLayout.vue</strong> file.</li>
                      <li>
                        Insert this menu object into your <strong style="color: white">linkList</strong> array
                        <code style="color: #4090ed; font-weight: bold">
                          {{`{
    title: 'Data Table',
    caption: '',
    icon: 'mdi-table',
    link: '/dataTable',
},`}}
                        </code>
                      </li>
                      <li>Save your updates and fix any errors.</li>
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
                  <div class="text-overline">New route</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Let's add a new route</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>Now we have a new menu item, but if you click it it goes to a 404 page, so let's fix that.</li>
                      <li>In your project, let's go back to the <strong style="color: white">routes.js</strong> file.</li>
                      <li>
                        Insert a new line after line 15, and add a this route object to your routes array
                        <code style="color: #4090ed; font-weight: bold">
                          {{ newRouteCodeSample }}
                        </code>
                      </li>
                      <li>Save your updates.</li>
                      <li>There should be errors showing on your DOM now, this is because we tried importing a page that doesn't exist. So let's make it!</li>
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
                  <div class="text-overline">New page</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Let's make a DataTable component</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>In your project, head to the <strong style="color: white">pages</strong> folder (located in src).</li>
                      <li>
                        Add a new file titled <strong style="color: white">DataTable.vue</strong>, then copy and paste this code to your new file
                        <q-card flat bordered class="q-my-md q-pa-md">
                          <q-btn flat color="primary" style="float: right" @click="navigator.clipboard.writeText(dataTableCodeSample);">
                            Copy
                          </q-btn>
                          <code>{{ dataTableCodeSample }}</code>
                        </q-card>
                      </li>
                      <li>Save your file; now there should be no more errors, AND you have a new working menu item that routes!</li>
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
                  <div class="text-overline">Creating content page</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Time to make a content page</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>We're so close to finishing the Vue walkthough, just a few more steps.</li>
                      <li>Next thing we're going to do is create a content page for our <strong style="color: white">DataTable.vue</strong>.</li>
                      <li>
                        In your project, go to the <strong style="color: white">pages</strong> folder again (located in your components folder), and add a new folder titled <strong style="color: white">dataTable</strong>.
                      </li>
                      <li>
                        In your new folder, and make an <strong style="color: white">index.vue</strong> file.
                      </li>
                      <li>
                        Now, in your new <strong style="color: white">index.vue</strong> file, copy and paste in this code. Then save your new file.
                        <q-card flat bordered class="q-my-md q-pa-md">
                          <q-btn flat color="primary" style="float: right" @click="navigator.clipboard.writeText(dataTablePageCodeSample);">
                            Copy
                          </q-btn>
                          <code>{{ dataTablePageCodeSample }}</code>
                        </q-card>
                      </li>
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
                  <div class="text-overline">Linking content page</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Let's import your DataTable page</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>
                        In your project, navigate to the <strong style="color: white">DataTable.vue</strong> file (located in src > pages).
                      </li>
                      <li>Insert a new line after line 7, and paste in this code
                        <code style="color: #4090ed; font-weight: bold">import Table from '../components/pages/dataTable';</code>
                      </li>
                      <li>
                        Next, we need to define that import as a usable component. So insert a new line after line 12,
                        in the <strong style="color: white">components</strong> object,
                        and add your <strong style="color: #4090ed">Table</strong> import followed by a trailing comma.
                      </li>
                      <li>
                        Since <strong style="color: #4090ed">Table</strong>, is now a defined component on the Dashboard page, we can use it in the template!
                      </li>
                      <li>
                        Insert a new line after line 2, after the {{`<q-page>`}} tag, and add your component like this
                        <code style="color: #4090ed; font-weight: bold">
                          {{`<Table></Table>`}}
                        </code>
                      </li>
                      <li>Save your file, fix any errors, and now you've connected your content page to your tab.</li>
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
                  <div class="text-overline">Mocking Data</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Mocking table data</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>In order to make a data table, we're going to need some data. So let's mock some objects that we're going to display.</li>
                      <li>
                        Head over to the <strong style="color: white">index.vue</strong> file you just made (located in the dataTable folder).
                      </li>
                      <li>
                        Now, in your return object (on line 16), copy and paste this array of mock data
                        <q-card flat bordered class="q-my-md q-pa-md">
                          <q-btn flat color="primary" style="float: right" @click="navigator.clipboard.writeText(mockData);">
                            Copy
                          </q-btn>
                          <code>{{ mockData }}</code>
                        </q-card>
                      </li>
                      <li>Save your file, and fix any errors.</li>
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
                  <div class="text-overline">Making a table</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">Last step!</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>Time to display our data and finish this walk through!</li>
                      <li>Staying on the dataTable <strong style="color: white">index.vue</strong> file, go to line 3 and insert a new line.</li>
                      <li>
                        Copy and paste this quasar table on line 4
                        <code style="color: #4090ed; font-weight: bold">
                          {{`<q-table
    title="Employees"
    :rows="mockRows"
    :columns="mockColumns"
    row-key="name"
/>`}}
                        </code>
                      </li>
                      <li>Now save your page and voila! Your first Vue site is completed!</li>
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
                  <div class="text-overline">Final</div>
                  <div class="text-h5 q-mt-sm q-mb-xs">The end... for now</div>
                  <div class="text-subtitle2 text-grey">
                    <ul>
                      <li>
                        Congrats! You've made it to the end of the FreightVana Vue walk through. I know there were a few repetitive steps, and
                        some instructions that definitely might've confused you, but that's okay! The goal of this was to get you familiar with
                        Vue, and hopefully to give you a better understanding for how we at FreightVana go about creating pages and components
                        for our sites.
                      </li>
                      <li>
                        Feel free to go back into the project and mess around with the components you built. Checkout quasars docs on how to
                        manipulate and style your table even further!
                      </li>
                      <li>
                        Once you're ready for the next walkthrough; go ahead and save your project, then push the changes to your branch in GitHub.
                        Then head to the MongoDB tab when you're ready :)
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
import {
    computed,
    ref,
    defineComponent,
    onMounted,
} from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'VueLandingPage',
    components: {
    },
    setup() {
        // declare store -- will be used in grabbing data from store, commits, dispatches, etc
        const $store = useStore();

        onMounted(() => {
            //
        });

        return {
            window,
            navigator,
            siteHeaderCodeSample:
`<template>
  <q-header elevated class='lvl-7'>
      <q-toolbar>
          <q-toolbar-title class='row'>
              My Vue Project
          </q-toolbar-title>
      </q-toolbar>
  </q-header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SiteHeader',
    props: {
    },
    setup() {
        return {};
    },
});
<\/script>

<style scoped>
</style>
`,
            siteNavCodeSample:
`<template>
    <q-drawer
      v-model="open"
      :width="200"
      class="lvl-7"
      show-if-above
      behavior="desktop"
      style="position: sticky; top: 50px"
    >
        <div class="row justify-center full-height align-center">
            <div class="col-12">
            </div>
        </div>
    </q-drawer>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'SiteNavDrawer',
    props: {
    },
    components: {
    },
    setup() {
        const open = ref(true);
        return {
            open,
        };
    },
});
<\/script>

<style scoped>
</style>
`,
            essentialLinkCodeSample:
`<template>
    <router-link
        :to="navigationObject"
        v-slot="{ isActive }"
    >
        <q-item clickable :class="isActive ? 'navItemActive' : 'navItemInactive'">
            <q-item-section class="col-shrink" v-if="icon" avatar>
                <q-icon
                    :name="icon"
                    :color="isActive ? 'primary' : 'white'"
                    size="sm"
                />
            </q-item-section>
            <q-item-section>
                <q-item-label class="text-body2">{{ title }}</q-item-label>
            </q-item-section>
        </q-item>
    </router-link>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'EssentialLink',
    props: {
        title: {
            type: String,
            required: true,
        },
        caption: {
            type: String,
            default: '',
        },
        link: {
            type: String,
            default: '/',
        },
        icon: {
            type: String,
            default: '',
        },
    },
    setup(props) {
        const base = { path: props.link };

        const navigationObject = base;

        return {
            navigationObject,
        };
    },
});
<\/script>

<style scoped>
</style>
`,
            dashboardPageCodeSample: `<template>
    <div class='row justify-center items-start content-start'>
        <div class='col-12 q-mb-md'>
            <div class='row full-height content-between justify-between'>
                <div id='tableCardDiv' class='q-px-xs col-12'>
                    <p class='text-h3'>Hello! Welcome to My Vue Project!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DashboardPage',
    components: {
    },
    setup() {
        return {};
    },
});

<\/script>

<style scoped>
</style>
`,
            newRouteCodeSample: `{
    path: '/dataTable',
    component: () => import('layouts/MainLayout.vue'),
    children: [
        {
            path: '',
            name: 'dataTablePage',
            component: () => import('pages/DataTable.vue'),
        },
    ],
},`,
            dataTableCodeSample: `<template>
    <q-page class="flex flex-center">
    </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DataTable',
    components: {
    },
    setup() {
        return { };
    },
});
<\/script>

<style scoped>
</style>
`,
            dataTablePageCodeSample: `<template>
    <div class='row justify-center items-start content-start' style='width: 80%'>
        <div class='col-12 q-mb-md'>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DataTablePage',
    components: {
    },
    setup() {
        return {};
    },
});

<\/script>

<style scoped>
</style>
`,
            mockData: `mockRows: [
    {
        name: 'Hunter Kreshock',
        role: 'developer',
        age: 23,
        company: 'FreightVana',
    },
    {
        name: 'Justin Ceccarelli',
        role: 'accountant',
        age: 32,
        company: 'freightVana',
    },
    {
        name: 'kyle henderson',
        role: 'Sandwich Artist',
        age: 29,
        company: 'Subway',
    },
    {
        name: 'Don everhart',
        role: 'facilities manager',
        age: 31,
        company: 'payless',
    },
    {
        name: 'nelson Mandela',
        role: 'influencer',
        age: 65,
        company: 'Instagram',
    },
],
mockColumns: [
    {
        name: 'name',
        align: 'left',
        label: 'Name',
        field: 'name',
        sortable: true,
    },
    {
        name: 'company',
        align: 'right',
        label: 'Company',
        field: 'company',
        sortable: true,
    },
    {
        name: 'role',
        align: 'center',
        label: 'Role',
        field: 'role',
        sortable: true,
    },
    {
        name: 'age',
        align: 'center',
        label: 'Age',
        field: 'age',
        sortable: true,
    },
],`,
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
