/**
 *---- Model -----
 User
 - id: number
 - fullname: string
 - phone_number: string
 - email: string
 - password: string
 - active: boolean
 - gender: 'male' | 'female'
 - orders: Order[]
 - createdAt: Datetime
 - updatedAt: Datetime
 
 Order
 - id: string
 - name: string
 - price: number
 - eta: string
 - userId: number
 - status: 'delivered' | 'pending' | 'cancelled'
 */

/**
  * User
  - register() => Required Input [firstname, lastname, email, password] => DONE
  - registerMany() => Same as register but in an array => DONE
  - updateOne() => id, User Model => DONE
  - updateMany() => Array of id and usermodel
  - getOne() => id => DONE
  - getMany() => id[]
  - deleteOne() => id => DONE
  - deleteMany() => id[]

  * Order
  - createOrder() => {name: string, price: number, userId: number} => DONE
  - createOrders() => [{name: string, price: number, userId: number}]
  - updateOrder() id, status => DONE
  - updateOrders() => [[1, delivered], [2, pending]]
  - getOrder() => id => DONE
  - getOrders() => id[]
  - deleteOrder() => id => DONE  .b n b 
  - deleteOrders() => id[]
  */

// Non functional Requirement
// - Enforce Adequate Validations
// -
