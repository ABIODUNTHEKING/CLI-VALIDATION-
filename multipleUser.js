let userDataBase = []
let orderDataBase = []
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
const numberPattern = /^[0-9]+$/
let updated = 'Updated at ' + new Date().toLocaleString('en-US', {month: "long", day: "numeric", hour : 'numeric', minute : 'numeric', hour12: true})
let created = 'Created at ' + new Date().toLocaleString('en-US', {month: "long", day: "numeric", hour : 'numeric', minute : 'numeric', hour12: true})
let generated = 'Generated at ' + new Date().toLocaleString('en-US', {month: "long", day: "numeric", hour : 'numeric', minute : 'numeric', hour12: true})
let timeOfArrival = 'Will be delievered at ' + new Date().setDate()

function registerUsers(usersInputs){
    usersInputs.map(userInputs =>{
        console.log(`------------REGISTER USERS-------------`)

     let userDetail = {
         id : userDataBase.length + 1,
         fullName : `${userInputs.firstName} ${userInputs.lastName}`,
         phoneNumber : userInputs.phoneNo == undefined ? userInputs.phoneNo = 'Phone number not provided' : userInputs.phoneNo,
         email : userInputs.email,
         password : userInputs.password,
         active : true,
         gender : userInputs.gender == undefined ? userInputs.gender = 'Gender not specified' : userInputs.gender,
         order : {
             productName: userInputs.productName == undefined ? userInputs.productName = 'Product name is not specified' : userInputs.productName,
             productPrice: userInputs.productPrice == undefined ? userInputs.productPrice = 'Product Price is not specified' : '#' + userInputs.productPrice,
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
    })
}

let input = [{id : 1, userModel: 'fullName', newValue: 'Issac'}, {id : 2, userModel: 'fullName', newValue: 'Afahakan'}]

let getUsers = (inputs) =>{
    console.log('-----------GET USERS---------------')
    
    if(typeof inputs !== 'object'){
        console.log('Invalid input')
        return
    }
    userDataBase.forEach(user=>{
        inputs.map(id =>{
            if(user.id == id){
                console.log(user)
            }
        })
    })
}

// const updateUsers = (userInputs) => {
//     console.log('---------UPDATE USERS----------------')
// 	userDataBase.map((userInfo) => {
// 		for(const user in userInfo){
//             userInputs.map((inputs)=>{
//                 for(const input in inputs){
//                     console.log(input.value)
//                 }
//             })
//         }
// 	});
// };


const createOrders = (orders) => {
    if(typeof orders !== 'object'){
        console.log('Invalid input')
        return
    }
	orders.map((order) => {
		let potentialError = validateOrder(order);
		if (potentialError) {
			console.log(potentialError);
		} else {
			const { name, item, price } = order;
			let clientOrders = {
				itemId: orderBlock.length + 1,
				name,
				item,
				price,
			};
			orderBlock.push(clientOrders);
		}
	});
};


registerUsers([{firstName: 'Emmanuel', lastName : 'Akinjogunla', email: 'emmanuel6ige@gmail.com', password: 'OKAY'},{firstName: 'Emmanuel', lastName : 'Akinjogunla', email: 'emmanuel6ige@gmail.com', password: 'who dey breathe'}])
getUsers('hellop')
updateUsers(input)