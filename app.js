// object destruistring

// var obj = {
//     name : "saimoon",
//     email: "@gmail.com"
// }
// var {name , email} = obj
// console.log(name)


// function expression

// let foo = function(){
//     console.log("world")
// }
// foo()


// Arrow function

// let foo = () => {
//     console.log("hy")
// }
// foo()

// let foo = (name) => {
//     console.log(`hello ${name}`)
// }
// foo("saimoon")

// let foo = (name1,name2) => {
//     console.log(`hello ${name1} and ${name2}`)
// }
// foo("saimoon","nabeel")

// let foo = () => {
//     return "saimoon"
// }
// console.log(foo())

// let foo = () => "saimoon"
    

// foo()

// setInterval(()=> console.log("hello"),1000)


// let getData = (rederData) => {
//     firebase.datbase().ref().on("child_added",(data)=> {
//      console.log(data.val())
//      renderData()
//     })
// }
// getData(renderData)
// let renderData = (data) => {
//     console.log(data)
// }


// let getData = (rederData) => {
//     setTimeout(()=> {
// renderData("saimoon")
//     },3000)
// }
// let renderData = (data) => {
//     console.log(data)
// }
// getData(renderData)


// Arry function

// let arr = [{ name : "saimoon" , age : 13},{name : "nabeel", age :13}]
// arr.filter((a)=> console.log(a))

// let arr = [{ name : "saimoon" , age : 20},{name : "nabeel", age :13}]
// let filter = arr.filter((a)=> {return a.age === 20})
// console.log(filter)

// let arr = [{ name : "saimoon" , age : 20},{name : "nabeel", age :13}]
// let filter = arr.filter((a)=> a.age === 20)
// console.log(filter)


// Search

// let name = "saimoon"
// let search = "nabeel"
// if (name.startsWith(search)){
//     console.log(name)
// }


// let name = "saimoon"
// let search = "nabeel"
// if (name.endsWith(search)){
//     console.log(name)
// }


// Arry Map

// let arr = [ 2, 3,4,5]
// let mul = arr.map(a => a*2)
// console.log(mul)

// let arr = [{name : "saimoon"},{name : "nabeel"}]
// let mul = arr.map(a => a.name = "saif")
// console.log(mul)

// let arr = [{name : "saimoon"},{name : "nabeel"}]
// let mul = arr.map(a => {
//     document.getElementById("table").innerHTML=a.name
// })
// console.log(mul)



// Classes

// class Student {
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
// }
// let student1 = new Student ("saimoon","shaheweer031123@gmail.com")
// console.log(student1)


// class Student {
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
// }
// class School extends Student {
//     constructor(name,email,school){
//         super(name,email)
//         this.school = school
//     }
// } 
// let student1 = new School ("saimoon","shaheweer031123@gmail.com","saylani")
// console.log(student1)





//  Firebase Authantication



let signup = ()=> {
    let email = document.getElementById("email")
    let password = document.getElementById("password")


    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((result)=>{
        console.log(result)
    })
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log (errorMessage)
      });
}


let login = ()=> {
    let email = document.getElementById("login-email")
    let password = document.getElementById("login-password")

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((result)=>{
        console.log("User login")
        console.log(result)
    })
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      });email-password.html
}