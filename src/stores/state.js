import jsonData from './users.json'

export let state = {
    count : 1,
    todos: [
        { id: 1, text: 'This is todo 1', done: true },
        { id: 2, text: 'This is todo 2', done: true },
        { id: 3, text: 'This is todo 3', done: true },
    ],
    users : jsonData.users
}
