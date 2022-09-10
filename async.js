
// Promise
// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const wifeBringTicket = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("ticket");
//     },3000);
// });

// const getPopcorn = wifeBringTicket.then((t)=>{
//     console.log(`husband: we should go`);
//     console.log(`wife: no i am hungry`);
//     return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
// })

// const butter = getPopcorn.then((t)=>{
//     console.log(`husband: we should go i got popcorn`);
//     console.log(`wife: I want butter`);
//     return new Promise((resolve,reject)=>resolve(`${t} butter`));
// });

// const coldDrinks = butter.then((t)=>{
//     console.log(`husband:Should we go now i got popcorn and butter`);
//     console.log(`wife:I want cold drink also`);
//     return new Promise((resolve,reject)=>resolve(`${t} coldDrink`));
// });

// coldDrinks.then((t)=>console.log(t));

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

//async

console.log('person1: shows ticket');
console.log('person2: shows ticket');

const person3 = async ()=>{
    const wifeBringTicket = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),2000);
    });


    const getPopcorn = new Promise((resolve,reject)=>{
        setTimeout(resolve(`popcorn`),1000);
        });
    const getButter = new Promise((resolve,reject)=>{
        setTimeout(resolve(`butter`),1000);
        });
    const getcoldDrink = new Promise((resolve,reject)=>{
        setTimeout(resolve(`cold drinks`),1000);
        });
    let ticket = await wifeBringTicket;

    console.log(`wife: i got the ${ticket}`);
    console.log(`husband: we should go`);
    console.log(`wife: no i am hungry`);

    let popcorn = await getPopcorn;

    console.log(`husband: we should go i got ${popcorn}`);
    console.log(`wife: I want butter`);

    let butter = await getButter;

    console.log(`husband:Should we go now i got ${butter}`);
    console.log(`wife:I want cold drink also`);

    let coldDrink = await getcoldDrink;

    console.log(`husband: i got popcorn, butter and ${coldDrink}`);
    console.log("wife:we should go we are getting late");
}
person3();
console.log('person4: shows ticket');
console.log('person5: shows ticket');


