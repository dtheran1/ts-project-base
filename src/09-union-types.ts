(()=> {
  let userId: string | number; // Unions types

  userId = 'Daniel'
  userId = 123


  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);

    }
  }

  greeting('dddd')
  greeting(12.444444232234)
})();
