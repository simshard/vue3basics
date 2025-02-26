import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: { Assignment, AssignmentTags },

    template: /*html*/`
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">{{ title }} <span> ({{ assignments.length }})</span></h2>

            <assignment-tags
             :initial-tags="assignments.map(assignment => assignment.tag)"
             :current-tag="currentTag"
             @change="currentTag = $event"
             />

            <ul class="space-y-3 border border-gray-400 border-dotted p-4 rounded divide-y divide-gray-400 divide-dotted mt-6">
               <assignment 
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id" 
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section> 
    `,
    data() {
        return {
            currentTag: 'all'
        }
    },
    props: {
        assignments: Array,
        title: String
    },
    computed:{
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
        }
        return this.assignments.filter(assignment => assignment.tag === this.currentTag);
        },
    }
}