// Avoid initSate remove 
// run this coed to add a new initState 
export const initState1 = {
    filter : {
        search : '',
        status : 'All',
        priority : '',
    },
    todoList : [
        { id : 1 , name : "Learn React", completed : false , priority : 'High'},
        { id : 2 , name : "Learn Redux", completed : false , priority : 'High'},
        { id : 3 , name : "Learn nodeJS", completed : false , priority : 'Low'}, 
    ]
}
localStorage.setItem('initState',JSON.stringify(initState1))



console.log("initState Load")
export const initState = (JSON.parse(localStorage.getItem('initState')))


