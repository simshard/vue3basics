import Assignment from "./Assignment.js";

export default {
    components: { Assignment },

    template: /*html*/`
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">{{ title }} <span> ({{ assignments.length }})</span></h2>

            <div class="flex   gap-2 mb-2 ">
               <button v-for="tag in tags" :key="tag" 
               @click="currentTag = tag"
                class="bg-gray-300/10 text-white rounded py-2 px-4
                border rounded border-dotted border-gray-400 italic
                text-xs hover:bg-gray-400/10 hover:border-gray-200 "
               
               :class="{
                'border-blue-500 text-blue-500': tag === currentTag 
                }"
               >{{tag}}</button> 
            </div>

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
        tags() {
            return ['all',...new Set(this.assignments.map(assignment => assignment.tag))];
        }
    }
}