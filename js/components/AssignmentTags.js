export default {
    template: /*html*/`
        <div class="flex gap-2 mb-2">
               <button 
               @click="$emit('change', tag)"
                v-for="tag in tags"
                class="bg-gray-300/10 text-white rounded py-2 px-4
                border rounded border-dotted border-gray-400 italic
                text-xs hover:bg-gray-400/10 hover:border-gray-200 "
               
               :class="{
                'border-blue-500 text-blue-500': tag === currentTag 
                }"
               >{{tag}}</button> 
            </div>
    `,
    props: {
        initialTags: Array,
        currentTag: String
    },

    computed: {
        tags() {
        return ['all',...new Set(this.initialTags)];
    }
    },
}
