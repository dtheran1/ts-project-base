(() => {
  type UserId = string | number | boolean // Alias type

  let userId: UserId; // Unions types





  //  El Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  let shirtSize: Sizes;

  shirtSize = 'S'

  shirtSize = 'Daniel' // El tipo no corresponde a un tipo valido


  function greeting(userId: UserId, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  greeting('dddd', 'S')
  greeting('12.444444232234', 'grande')

})()
