import jsonData from './users.json'

let dataUsers = JSON.parse(localStorage.getItem('users')) ?? jsonData.users

export let state = {
    count : 1,
    users : dataUsers
}
