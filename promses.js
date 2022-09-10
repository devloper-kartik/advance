let element = document.getElementById("total");
let timerElement  = document.getElementById("timer");
const posts=[
    {title:"Post One", body:"This is post one",createdAt:Date.now()},
    {title:"Post two", body:"This is post two",createdAt:Date.now()}
];

function getPost(){
    setTimeout(()=>{
        let out = "";
        posts.forEach((post)=>{
            out += `<li>${post.title} created ${(Date.now()-post.createdAt)/1000}sec ago</li>`;
        });
        element.innerHTML=out;
    },1000);
}
getPost();

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const err=false;
            if(!err) resolve();
            else reject("Error:Something went wrong");
        },2000);
    });
}

const deletePost = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(!posts.length==0){
                posts.pop();
                resolve();
            }else{
                reject("Errror:Array is empty now.");
            }
        },1000);
    });
}

deletePost().then(getPost).catch(e=>console.log(e));
deletePost().then(getPost).catch(e=>console.log(e));
deletePost().then(getPost).catch(e=>console.log(e));


//promise all
const promise1 = Promise.resolve("hello");
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"goodbye");
});

Promise.all([promise1,promise2,promise3]).then(value=>console.log(value));

const User = {
    username:"kartik",
    lastActiveTime : '10 sept',
}

updateLastActiveTime = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            User.lastActiveTime = new Date.getTime();
        },2000);
    });
}