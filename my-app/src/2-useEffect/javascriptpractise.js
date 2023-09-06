let maxValue = [2,3,4,5,9,0,10,25];

console.log(Math.max(...maxValue));

let arrayvalue1 = [1,2,3,4,5];
let arrayvalue2 = [8,9,7,9,8,3];
let finalarrayvalue = [...arrayvalue1, ...arrayvalue2];

console.log(finalarrayvalue);

let object4 = {
    personalvalue: 'John',
    age: 26,
    mail: 'mail@mail.com'
}

let {personalvalue:x, age, mail} = object4;
console.log(x);

const company = {
    name: "ABC corp",
    address: {
        street: '3631 Archgate Ct',
        city: 'Alpharetta'
    },
};

const {name, address:{city}} = company;

console.log(city)

const numb = [8,29,44,43,11,33,55,64,34,67];

const odds = numb.filter((item)=> {
    return item % 2 !== 0;
})

console.log(odds);

const even = numb.filter((item)=> {
    return item % 2 === 0;
})
console.log(even)

const datadup = [3,4,3,4,5,6,9,9,6,5,4,2,1,3,2];

const uniqueval = [...new Set(datadup)];

console.log(uniqueval);

const asec = uniqueval.sort((a,b) => a - b);

console.log(asec);

const desc = uniqueval.sort((a, b) => b - a);

console.log(desc);


// fetch(url [,option])
// .then(response => response.json())
//.then(data => {
    // process the fetched data
// })

// .catch(error => {
//    console.log(error)
//})

const person = {
    name: 'Ram',
    age: 30
}
 console.log(Object.entries(person));
const getObjectEntries = (obj) => {
    const objKeys = Object.keys(obj);
    console.log(objKeys);
    const result = objKeys.map((item)=> {
        const value = obj[item];
        return [ item, value]
    });
    return result;
}

const res = getObjectEntries(person);
console.log(res);


const myarry = [1,2,3,4,5,4,3,2,1,6,4,6,5];

const univalue = myarry.filter((item,index,array)=> array.indexOf(item)===index);

console.log(univalue);

