export default {
    increment (context) {
        context.commit('increment')
    },
    addUser (context, user) {
        context.commit('addUser', user)
    }
}