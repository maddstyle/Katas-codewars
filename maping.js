// mapping over array of objects
// filtering over array of objects

// icon plane ~

const users = [
  {
    firstname: 'John', 
    lastName: 'Doe', 
    age: 12,
    country: 'Ireland',
    continent: 'EU'
  },
    {
    firstname: 'Jane', 
    lastName: 'Doe', 
    age: 21,
    country: 'Germany',
    continent: 'EU'
  },
    {
    firstname: 'Michael', 
    lastName: 'Doe', 
    age: 32,
    country: 'Japan',
    continent: 'Asia'
  },
     {
    firstname: 'Jesus', 
    lastName: 'Doe', 
    age: 32,
    country: 'Saudi Arabia',
    continent: 'Africa'
  },
    {
    firstname: 'David', 
    lastName: 'Doe', 
    age: 45,
    country: 'Norway',
    continent: 'EU'
  }
]

// return only users younger than 30.
// iterate over users, find users younger than 30, reutnr users younger than 30

// const under30 = users.filter(user => user.age < 30 )



for(let x = 0; x < users.length; x++){
// iterate over data, and console.log users from EU
// use for loop
  // code here
  if (users[x].continent === 'EU') {
    console.log(users[x]);
  }
}

// const _users = users.filter((cb) => cb.continent === 'EU')

