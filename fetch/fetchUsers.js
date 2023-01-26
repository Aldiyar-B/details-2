const users = ['HoBager','alembique','volkov_here','hollowiccup','saske'];
const url = 'https://api.github.com/users';

const getUsers = async (usersArray) => {
    let requests = usersArray.map((user) => fetch(`${url}/${user}`))
    const usersResponse = await Promise.allSettled(requests);
    const results = usersResponse.map(({value})=>{
        if(!value.ok){
            return null
        }
        else{
            return value.json()
        }
    })
    for(let user of results){
        console.log(await user)
    }
    return results
}
console.log(getUsers(users))
