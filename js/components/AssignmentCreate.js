export default {
    template:/*html*/ `
        <form class="mt-6" @submit.prevent="add">
            <div class="border border-gray-400 border-dotted rounded p-4">    
            <input v-model="newAssignment" type="text" placeholder="NewAssignment" class="bg-gray-300 text-gray-700 rounded py-2 px-4">
                <button type="submit" class="bg-blue-500 text-white rounded py-2 px-4 ml-2">+</button>
            </div>
        </form>
    `,

    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add(){ 
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        }
    }
}