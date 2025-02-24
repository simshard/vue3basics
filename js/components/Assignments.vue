import AssignmentList from "./AssignmentList.js";

export default {
    //components: { AssignmentList },

    template: /*html*/`
         <section v-show ="inProgressTasks.length">
        <h2 class="text-2xl font-black mb-2">In Progress</h2>
        <ul>
            <li v-for="task in inProgressTasks"
                :key="task.id">
                <label> {{task.name}}
                <input type="checkbox" class="ml-2" v-model="task.complete"> 
                </label>
            </li>
        </ul>             
       </section>
       <section class="mt-6" v-show ="completedTasks.length">
        <h2 class="text-2xl font-black mb-2">Completed</h2>
        <ul>
            <li v-for="task in completedTasks"
                :key="task.id">
                <label>
                  <span  class="line-through">  {{task.name}} </span>
                <input type="checkbox" class="ml-2" v-model="task.complete"> 
                </label>
            </li>
        </ul>             
       </section>   
    `,

    data() {
        return {
            assignments: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read Chapter 4', complete: false, id: 2 },
                { name: 'Turn in Homework', complete: false, id: 3 },
            ]
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            };
        }
    }
}
