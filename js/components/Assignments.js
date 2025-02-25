import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },

    template:/*html*/ `
        <section>
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
            
            <assignment-create @add="add"></assignment-create>
        </section>
    `,

    data() {
        return {
            assignments: [
                { name: 'Finish squid training', complete: false, id: 1 },
                { name: 'Read Chapter 234', complete: false, id: 2 },
                { name: 'work with assiduity and do not relent', complete: false, id: 3 },
                { name: 'Cleanse yer kitchen', complete: false, id: 4 },
                { name: 'do not despise the snake for having no horns', complete: false, id: 5 },
            ],
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            };
        }
    },
    methods:{
        add(name){ 
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1
            });
        }
    }
}