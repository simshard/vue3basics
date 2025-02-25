import Assignment from "./Assignment.js";

export default {
    components: { Assignment },

    template: /*html*/`
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>
            <ul class="space-y-3 border border-gray-400 border-dotted p-4 rounded divide-y divide-gray-400 divide-dotted">
               <assignment 
                    v-for="assignment in assignments"
                    :key="assignment.id" 
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section> 
    `,

    props: {
        assignments: Array,
        title: String
    }
}