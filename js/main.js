let input = document.querySelector('.input_id')
let MAIN = document.querySelector('.MAIN')


let user = []

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then((data) => {



        user = data
  

        user.map((item) => {

            let main = document.createElement('div')
            let main_id = document.createElement('div')
            let idname = document.createElement('h2')
            let name = document.createElement('h2')
            let username = document.createElement('h2')
            let email = document.createElement('h2')
            let contact = document.createElement('h2')
            let city = document.createElement('h2')





            MAIN.appendChild(main)
            main.appendChild(main_id)
            main.appendChild(idname)
            main.appendChild(name)
            main.appendChild(username)
            main.appendChild(email)
            main.appendChild(contact)
            main.appendChild(city)



            main.classList.add('main')
            main_id.classList.add('main_id')
            idname.classList.add('idname')
            name.classList.add('name')
            username.classList.add('username')
            email.classList.add('email')
            contact.classList.add('contact')
            city.classList.add('city')


            idname.innerHTML = `USER ID : ${item.id}`
            name.innerHTML = `NAME : ${item.name}`
            username.innerHTML = `Username : ${item.username}`
            email.innerHTML = `Email : ${item.email}`
            contact.innerHTML = `Contact : ${item.phone}`
            city.innerHTML = `City Name : ${item.address.city}`






        })


    })





let handlebuton = () => {







let mainn =user.find((item)=>{
    return item.username == input.value
})


if(!input.value){
    alert('input not be faka')
}
else{

if(!mainn){
    alert('nam mile nai')
}
else{
MAIN.innerHTML=''

//  ---------create element----------
            let main = document.createElement('div')
            let main_id = document.createElement('div')
            let idname = document.createElement('h2')
            let name = document.createElement('h2')
            let username = document.createElement('h2')
            let email = document.createElement('h2')
            let contact = document.createElement('h2')
            let city = document.createElement('h2')


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

            idname.innerHTML = `USER ID : ${mainn.id}`
            name.innerHTML = `NAME : ${mainn.name}`
            username.innerHTML = `Username : ${mainn.username}`
            email.innerHTML = `Email : ${mainn.email}`
            contact.innerHTML = `Contact : ${mainn.phone}`
            city.innerHTML = `City Name : ${mainn.address.city}`



}



}

}
























// let input = document.querySelector('.input_id')



// let main = document.querySelector('.main')
// let MAIN = document.querySelector('.MAIN')

// let user = []




// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then((data) => {
//         console.log(data)

//     user = data

//    user.map((item) => {

//             // ---------create element----------
//             let main = document.createElement('div')
//             let main_id = document.createElement('div')
//             let idname = document.createElement('h2')
//             let name = document.createElement('h2')
//             let username = document.createElement('h2')
//             let email = document.createElement('h2')
//             let contact = document.createElement('h2')
//             let city = document.createElement('h2')


//             // -------------append child-----------

//             MAIN.appendChild(main)
//             main.appendChild(main_id)
//             main.appendChild(idname)
//             main.appendChild(name)
//             main.appendChild(username)
//             main.appendChild(email)
//             main.appendChild(contact)
//             main.appendChild(city)


//             // ------------- class list added-----------

//             main.classList.add('main')
//             main_id.classList.add('main_id')
//             idname.classList.add('idname')
//             name.classList.add('name')
//             username.classList.add('username')
//             email.classList.add('email')
//             contact.classList.add('contact')
//             city.classList.add('city')



//             // --------------add element-----

//             idname.innerHTML = `USER ID : ${item.id}`
//             name.innerHTML = `NAME : ${item.name}`
//             username.innerHTML = `Username : ${item.username}`
//             email.innerHTML = `Email : ${item.email}`
//             contact.innerHTML = `Contact : ${item.phone}`
//             city.innerHTML = `City Name : ${item.address.city}`


//         })



//     })

//     let handlebuton = () => {


//         let userData = input.value
//         MAIN.innerHTML = ''
//         let method =  user.find((item)=>{
//           return  item.name == userData || item.username == userData
//         })
// if(!input.value){}
// else{
//     if(!method){
//         alert('fsdfgdfhfdj')
//     }
//     else{


//             // ---------create element----------
//             let main = document.createElement('div')
//             let main_id = document.createElement('div')
//             let idname = document.createElement('h2')
//             let name = document.createElement('h2')
//             let username = document.createElement('h2')
//             let email = document.createElement('h2')
//             let contact = document.createElement('h2')
//             let city = document.createElement('h2')


//             // -------------append child-----------

//             MAIN.appendChild(main)
//             main.appendChild(main_id)
//             main.appendChild(idname)
//             main.appendChild(name)
//             main.appendChild(username)
//             main.appendChild(email)
//             main.appendChild(contact)
//             main.appendChild(city)


//             // ------------- class list added-----------

//             main.classList.add('main')
//             main_id.classList.add('main_id')
//             idname.classList.add('idname')
//             name.classList.add('name')
//             username.classList.add('username')
//             email.classList.add('email')
//             contact.classList.add('contact')
//             city.classList.add('city')



//             // --------------add element-----

//             idname.innerHTML = `USER ID : ${method.id}`
//             name.innerHTML = `NAME : ${method.name}`
//             username.innerHTML = `Username : ${method.username}`
//             email.innerHTML = `Email : ${method.email}`
//             contact.innerHTML = `Contact : ${method.phone}`
//             city.innerHTML = `City Name : ${method.address.city}`


//     }
// }






//     }

// // -------------buton part---------