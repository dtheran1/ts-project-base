import lodash from 'lodash'

const data = [
  {
    username: 'Daniel',
    role: 'admin'
  },
  {
    username: 'John',
    role: 'seller'
  },
  {
    username: 'Jane',
    role: 'seller'
  },
  {
    username: 'Bob',
    role: 'seller'
  },
  {
    username: 'Sally',
    role: 'admin'
  }
]


const rta = lodash.groupBy(data, (item) => item.role)

console.log(rta)
