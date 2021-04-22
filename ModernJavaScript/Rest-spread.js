
//Thhis will get the first item as "first" and the rest of the items
//will go into "restOfItems" 
const [first, ...restOfItems] = [10, 20, 30, 40];

// console.log(first);
// console.log(restOfItems);

const data = {
	temp1: '001',
  temp2: '002',
  firstName: 'John',
  lastName: 'Doe',
};

const {temp1, temp2, ...person} = data;

//We can make copys of the array that we got before
const newArray = [...restOfItems];

const newObject = {
  ...person
}