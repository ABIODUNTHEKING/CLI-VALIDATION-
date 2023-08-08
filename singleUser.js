let userDataBase = []
let orderDataBase = []
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
const numberPattern = /^[0-9]+$/
let updated = 'Updated at ' + new Date().toLocaleString('en-US', {month: "long", day: "numeric", hour : 'numeric', minute : 'numeric', hour12: true})
let created = 'Created at ' + new Date().toLocaleString('en-US', {month: "long", day: "numeric", hour : 'numeric', minute : 'numeric', hour12: true})
let generated = 'Generated at ' + new Date().toLocaleString('en-US', {month: "long", day: "numeric", hour : 'numeric', minute : 'numeric', hour12: true})
let timeOfArrival = 'Will be delievered at ' + new Date().setDate()

 function RegisterUser(userInputs){
     console.log(`------------REGISTER USER-------------`)

     let userDetail = {
         id : userDataBase.length + 1,
         firstName : userInputs.firstName,
         lastName : userInputs.lastName,
         fullName : `${userInputs.firstName} ${userInputs.lastName}`,
         phoneNumber : userInputs.phoneNo == undefined ? userInputs.phoneNo = 'Phone number not provided' : userInputs.phoneNo,
         email : userInputs.email,
         password : userInputs.password,
         active : true,
         gender : userInputs.gender == undefined ? userInputs.gender = 'Gender not specified' : userInputs.gender,
         order : {
             productName: userInputs.productName,
             productPrice: '#' + userInputs.productPrice,
             userId: userDataBase.length + 1,
             status: 'pending'
         }
     }
         if(typeof userInputs.firstName === "Number" || typeof userInputs.lastName === "Number" || numberPattern.test(userInputs.lastName) || numberPattern.test(userInputs.firstName)){
             console.log("You did not provide a valid name")
             return
         }
         else if(userInputs.firstName.trim() == "" || userInputs.lastName.trim() == ""){
             console.log("You did not provide a valid name")
             return
         }
         else if(userInputs == undefined || userInputs.lastName == undefined){
             console.log("You did not provide a valid name")
             return 
         }
         else if(userInputs.email.trim() == "" || userInputs['email'].trim() == ""  || emailPattern.test(userInputs.email) == false){
             console.log('You did not provide a valid email address')
            return
         }
         else if(userInputs.password.trim() == "" || userInputs['password'].trim() == "" ||userInputs.password.length < 3){
             console.log('You did not provide a valid password')
             return
         }
         userDataBase.push(userDetail)
         console.log(userDataBase)
         console.log(created)
     };

 function updateOne(id, usermodel, newValue){
     console.log(`------------UPDATE USER-------------`)
     userDataBase.map(user =>{
         if(user[usermodel] === user.id){
            console.log(`Can't edit user ID of user ${userDataBase.indexOf(user) + 1}`)
         }
         else if(user.id == id){
             user[usermodel] = newValue 
             console.log(user)  
         }
        
        
     })
     console.log(updated)
 }

 function getOne(id){
     console.log(`------------RETRIEVE USER DATA-------------`)
     userDataBase.map(user =>{
         if(id == user.id){
             console.log(user)
         }
         else{
            console.log(`The entered user ID do not exist in user ${userDataBase.indexOf(user) + 1}`)
         }
     })
     console.log(generated)  
 }

 function deleteOne(id){
     console.log(`------------DELETE USER DATA-------------`)
     userDataBase.map(user =>{
         if(id == user.id){
             let dataNo = userDataBase.indexOf(user)
             userDataBase.splice(dataNo,1)
             console.log(userDataBase)
         }
         else{
            console.log(`The entered user ID do not exist in user ${userDataBase.indexOf(user) + 1}`)
         }
     })
     console.log(updated)
 }


 RegisterUser({
     firstName: 'ABIODUN', 
     lastName: 'Akinjogunla',
     email: 'emmanuel6ige@gmail.com',
     password: 'Emmanuel',
     productName : 'Amala',
     productPrice: 3000,
 })
 RegisterUser({
     firstName: 'Emmanuel', 
     lastName: 'Akinjogunla',
     email: 'emmanuel6ige@gmail.com',
     password: 'DET PPA',
     productName : 'Amala',
     productPrice: 3000,
 })
 RegisterUser({
     firstName: 'OLUWANISHOLA', 
     lastName: 'Akinjogunla',
     email: 'emmanuel6ige@gmail.com',
     password: 'DET PPA',
     productName : 'Amala',
     productPrice: 3000,
 })

 updateOne(1, 'id', 'John OKAY')
 getOne(1)
 deleteOne(3)


function createOrder(userOrders){
    console.log(`-------CREATE ORDER-------------`)
    let orderDetail = {
        productName : userOrders.productName == undefined ||  userOrders.productName == "" || typeof userOrders.productName == Number? console.log('Put in a valid user ID so we can accept your order') : userOrders.productName,
        productId : orderDataBase.length + 1,
        productPrice : typeof userOrders.productPrice == String ? console.log('Put in a valid price') : userOrders.productPrice,
        eta : timeOfArrival,
        userId: userOrders.userId == undefined || userOrders.userId == "" ? console.log('Put in a valid user ID so we can accept your order') : userOrders.userId,
        productStatus : 'Pending'
    }
    orderDataBase.push(orderDetail)
    console.log(orderDataBase)
}

function updateOrder(productId, status){
         console.log(`------------UPDATE ORDER-------------`)
        orderDataBase.map(order=>{
            if(order.productId !== productId){
                console.log(`Product ID could not be found in order ${orderDataBase.indexOf(order) + 1}`)
            }
            else{
                if('pending' == status.toLowerCase() || 'delievered' == status.toLowerCase()){
                    order.productStatus = status
                    console.log(order)
                }
                else if("cancelled" == status.toLowerCase()){
                    order.productStatus = status
                    let orderNo = orderDataBase.indexOf(order)
                    orderDataBase.splice(orderNo, 1)
                    console.log('Order cancelled')
                }
                else{
                    console.log('You can\'t edit your order detail except for its current status')
                }
            }
        })
        console.log(updated)
     }


function getOrder(id){
    console.log("------------GET ORDER-------------")
    orderDataBase.map(order=>{
        if(order.productId == id){
            console.log(order)
        }
        else{
            console.log(`Product ID could not be found in order ${orderDataBase.indexOf(order) + 1}`)
        }
    })
}

function deleteOrder(id){
    console.log("------------DELETE ORDER-------------")
    orderDataBase.map(order=>{
        if(order.productId == id){
            let orderNo = orderDataBase.indexOf(order)
                    orderDataBase.splice(orderNo, 1)
                    console.log('Order deleted')
        }
        else{
            console.log(`Product ID could not be found in order ${orderDataBase.indexOf(order) + 1}`)
        }
    })
}

createOrder({
    productName: 'AMALA',
    productPrice: 300,
    userId: 1
})

createOrder({
    productName: 'JOLLOF',
    productPrice: 300,
    userId: 1
})

createOrder({
    productName: 'RICE',
    productPrice: 300,
    userId: 1
})
createOrder({
    productName: 'EGUSI',
    productPrice: 300,
    userId: 1
})
createOrder({
    productName: 'BEANS',
    productPrice: 300,
    userId: 1
})



updateOrder(3, 'cancelled')
getOrder(1)
deleteOrder(1)

