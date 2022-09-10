let element = document.getElementById("total");
let timerElement  = document.getElementById("timer");
const posts=[
    {title:"Post One", body:"This is post one",createdAt:Date.now()},
    {title:"Post two", body:"This is post two",createdAt:Date.now()}
];

const getPost = async ()=>{
    setTimeout(()=>{
        let out = "";
        posts.forEach((post)=>{
            out += `<li>${post.title} created ${(Date.now()-post.createdAt)/1000}sec ago</li>`;
        });
        element.innerHTML=out;
    },1000);
}

const createPost = async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const err=false;
            if(!err) resolve();
            else reject("Error:Something went wrong");
        },2000);
    });
}

const deletePost = async ()=>{
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

