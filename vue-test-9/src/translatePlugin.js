export default {
    install(app, options) {
        let current = 'ru'

        const changeLanguage = name => {
            current = current === 'ru' ? 'en' : 'ru';

            console.log(current)
        }




        app.config.globalProperties.$i18n = key => {

            return key.split('.').reduce((words, k) => {
                return words[k] || '=== UnKnown ==='
            }, options[current])
        }

        app.provide('changeI18n', changeLanguage)
    }
}