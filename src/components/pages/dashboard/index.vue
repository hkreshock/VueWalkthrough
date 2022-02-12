<template>
    <div class="row justify-center items-start content-start">
        <div class="col-12 q-mb-md">
            <div class="row full-height content-between justify-between">
                <div class="q-px-xs col-12">
                    <TableHeaderSortable
                        elevation="lvl-2"
                        :headers="sortableHeaders"
                        :slotted="true"
                        @changeSort="changeSort"
                    ></TableHeaderSortable>
                </div>
                <div id="tableCardDiv" class="q-px-xs col-12">
                    <!-- Hint -- only edit this file, do not change the TableHeaderSortable,
                         TableCard, or the InfiniteScrollWrapper
                    -->
                    <p>First - just take a look over the whole project to see what's going on in general.. then:</p>
                    <ul>
                        <li>Try importing the data "statesData.js" and make avail to template for use in this file</li>
                        <li>Try to place the "TableCard" component in div w/ id "tableCardDiv"</li>
                        <li>add a v-for on the "TableCard" to loop over the array and append a TableCard to the dom for each elem</li>
                        <li>use elem data in the "TableCard"'s v-slot "content" in order to style that data</li>
                        <li>**hint TableCard has 3 slots that you can pass template to</li>
                    </ul>
                    <q-separator />
                    <ul>
                        <li>once you figure all that out see if you can hook up the changeSort method to sort your array</li>
                        <li>hint* change sort is being emitted from the TableHeaderSortable component - no logic needs to be changed
                        in that file, what you want to work with is the "changeSort" method in this index file down on line 72</li>
                    </ul>
                    <q-separator />
                    <ul>
                        <li>then even more fun! see if you can add some more data points to each state in the statesData.js file</li>
                        <li>then try passing those new data points to your TableCard component; add some more flair like enabling
                            the avatar giving each state a unique avatar, use some other prebuilt quasar components etc.
                        </li>
                        <li>now see if you can sort by some of these new data points that you've added **hint remember you'll want
                            to update the "sortableHeaders" array declare in the setup func of this file
                        </li>
                    </ul>
                </div>
            </div>
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

// You will need to import state data here -- I gave you an example of an import however
// the path is incorrect and the variable name is as well - see if you can get those
// corrected
// import {
//     data,
// } from 'utils/statesData.js';

// Below is an example of how to import a component from another file, as you can see you also need to list that component in the
// "components" object --- try importing the TableHeaderSortable and TableCard components instead of "Foo"
// import Foo from './foo';

export default defineComponent({
    name: 'Dashboard',
    components: {
        // Foo,
    },
    setup() {
        // declare store -- will be used in grabbing data from store, commits, dispatches, etc
        const $store = useStore();

        const sortableHeaders = ref([
            {
                title: 'State Abbr.',
                value: 'abbreviation',
                direction: 'none', // other directions 'ascending' 'descending'
            },
        ]);

        const changeSort = ($event) => {
            // right now its just doing a console log -- see if you can hook it up so that your change
            // sort method reorders your array of state data
            console.log('changeSort method: ', $event);
            // with this console log you'll notice that "header" is a proxy obj -- vue 3 refs create proxy objs
            // to access / update the value of "header" you'll need to do something like the following:
            // $event.header.value.title
            // or if you didn't want to deal with $event -- destructure header and index straight away like so:
            // EXAMPLE: const changeSort = ({ header, index }) => {
            // then in your func you would access the title of "header" by doing the following: header.value.title
        };

        onMounted(() => {
            //
        });

        return {
            // data, <<< data here refers up to the incorrect statesData.js import,
            //           you'll need to correct the var name here as well; adding this
            //           line in the return will make your states data avail to the template for looping
            sortableHeaders,
            changeSort,
        };
    },
});

</script>
