const numbers = [60,45,4,9,16,25,40];

let first = numbers.find((item) => {
    return item > 18;
});

console.log(first)

function showMessage() {
    console.log("Hello after the delay!");
}

setTimeout(showMessage, 2000);

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];

  const findEle = inventory.find((item)=> {
      return item.name === 'cherries'
  })

  console.log(findEle);

  let num = [1,2,4,5,6,8,9,11,13,22];

  const numEle = num.filter((item) => {
      return item % 2 === 0;
  })

  console.log(numEle);

  let numOdd = num.filter((item)=> {
      return item % 2 !== 0;
  })
  console.log(numOdd);

  console.log(Math.max(...num));

  const doubleNum = num.map((item)=> {
      return item * 2
  })
  console.log(doubleNum);

  const cars =["BMW","Audi", "Ferarri", "Volvo","Bogatti"];

  cars.forEach((item,index)=> {
      console.log(`${index}: ${item}`)
  })

  cars.forEach((item,index)=> {
      const startNum = index + 1;
      console.log(`${startNum}: ${item}`)
  })

  const arr = ["Item1", "Item2", "Item3",  "Item4", "Item5"];

  for(let count=arr.length-1; count>=0; count--) {
      console.log(`${arr}[${count}]`)
  }

  const person = {
      firstname: 'Sai',
      lastname: 'Mutoopuri',
      age: 50,
      education: true,
      married: true,
      friends: ['Hanuman', 'community', 'teaarea'],
      greeting: () => console.log("Hi everyone")
  }

  console.log(person.firstname);
  person.greeting();

  const numValues = [1,2,3,4,5,6];

  const totalvalue = numValues.reduce((acc,currentValue)=>{
      return acc + currentValue
  },0);
  console.log(totalvalue)

  const items =[
    {name: "Bike", price: 100},
    {name: "TV", price: 200},
    {name: "Album", price: 20},
    {name: "Book", price: 5},
    {name: "phone", price: 200},
    {name: "Computer", price: 1000},
    {name: "keyboard", price: 25},
];

const nameValue = items.map((item)=> {
    return item.price <= 100;
    
})

console.log(nameValue);

const hasInexpensiveItems = items.every((item) => {
    return item.price  <= 200
})

console.log(hasInexpensiveItems);

const totalprod = items.reduce((acc, currentTotal) => {
    return currentTotal.price  + acc
}, 0)
console.log(totalprod);

// const fetchPokemon = () => {
//     const url = 'google.com';
//     fetch(url)
//     .then((res)=> {
//         return res.json
//     })
//     .then((data)=> {
//         console.log(data)
//     })
// }


// async function getData() {
//     try {

//         const response = await fetch("googlle.com");
//         const data  = await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log("error:", error)
//     }
// }

// getData();


const sortNum = [...numbers].sort((a,b)=> a - b);
console.log(sortNum);

const bigNum = [...numbers].sort((a,b)=> b - a);

console.log(bigNum)

const data = [2,3,2,4,4,5,5,6,9,1,1];

const removeduplicate = [...new Set(data)];

console.log(removeduplicate)

const descor = removeduplicate.sort((a,b) =>{ 
    console.log(`valuea: ${a} : valueb: ${b}`)
    a - b 
});
console.log(descor);