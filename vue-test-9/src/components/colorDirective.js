let interval
let defaultColor

const mouseover = e => {
    e.target.style.color = 'red'
}
const mouseout = e => {
    e.target.style.color = defaultColor
}
export default {
    mounted(el, binding) {
        console.log(el)
        console.log(binding)
        defaultColor = binding.value
        el.style[binding.arg] = binding.value

        if (binding.modifiers.blink) {
            let flag = true
            interval = setInterval(() => {
                el.style.color = flag ? '#fff' : binding.value
                flag = !flag
            }, 1000)
        }

        if (binding.modifiers.hover) {
            el.addEventListener('mouseover', mouseout)
            el.addEventListener('mouseout', mouseover)
        }

    },

    updated(el, binding) {

        el.style[binding.arg] = binding.value
    },

    unmounted(el) {
        if (interval) {
            clearTimeout(interval)
        }
        el.removeEventListener('mouseover', mouseout)
        el.removeEventListener('mouseout', mouseover)

    }
}