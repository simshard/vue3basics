export default {
    template: `
        <button 
        :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
                'text-white': true,
                'bg-blue-500 hover:bg-blue-700': type === 'primary',
                'bg-indigo-400 hover:bg-indigo-600': type === 'secondary',
                'bg-gray-300/10 hover:bg-gray-400': type === 'muted',
                'is-loading': processing
            }" 
        :disabled="processing">
            <slot />
        </button>
    `,
    props: {
        type: {
            type: String,
            default: 'secondary'
        },

        processing: {
            type: Boolean,
            default: false
        }
    }
}