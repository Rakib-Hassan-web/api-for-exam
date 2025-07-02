





let input =document.querySelector('.input')
let main =document.querySelector('.main')
let MAIN =document.querySelector('.MAIN')



fetch('https://jsonplaceholder.typicode.com/users')
.then( res => res .json())
.then ( data =>{


    data.map( user =>{

// ---------create element----------
        let main =document.createElement('div')
        let main_id =document.createElement('div')
        let idname =document.createElement('h2')
        let name =document.createElement('h2')
        let username =document.createElement('h2')
        let email =document.createElement('h2')
        let contact =document.createElement('h2')
        let city =document.createElement('h2')


// -------------append child-----------

MAIN.appendChild(main)
main.appendChild(main_id)
main.appendChild(idname)
main.appendChild(name)
main.appendChild(username)
main.appendChild(email)
main.appendChild(contact)
main.appendChild(city)


// ------------- class list added-----------

main.classList.add('main')
main_id.classList.add('main_id')
idname.classList.add('idname')
name.classList.add('name')
username.classList.add('username')
email.classList.add('email')
contact.classList.add('contact')
city.classList.add('city')



// --------------add element-----




    })

       





})















// -------------buton part---------

let handlebuton =()=>{
 
}