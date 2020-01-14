const posts = [{title:'Post One',body:'This is post one'},{title:'Post Two',body:'This is post two'}];

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach(function (post){output += `<li>${post.title}</li>`});
        document.body.innerHTML = output;
    },1000);
}

// function createPosts (post){
//     setTimeout(()=>{
//         posts.push(post);
//         console.log("hello");
//     },500)
// }

function createPosts (post,aakarshit){
    setTimeout(()=>{
        posts.push(post);
       aakarshit();
    },2000)
}

// getPosts();
// createPosts( {title:'Post Three',body:'This is post three'});
// console.log("chala gaa");
// To handle this situation callbacks created

createPosts( {title:'Post Three',body:'This is post three'},getPosts);
