export default {
    increment (state) {
        state.count += 1
    },
    addUser (state, user) {
        state.users.push(user)
        localStorage.setItem('users', JSON.stringify(state.users));
    }
}