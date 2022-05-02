const posts = [
    {
        id:1,
        title:'Covid-19',
        description:'2019 yılında ortaya çıkan virüs.'
    },
    {
        id:2,
        title:'TOGG',
        description:'Türkiyenin geliştirmiş olduğu elektrikli araç.'
    },
    {
        id:3,
        title:'Ödevler',
        description:'Boş iş.'
    }
];



const printPosts = () =>{
    console.log("Title \t\tDescription\n\n");
    posts.map(post=>{
        console.log(`${post.title}\t\t${post.description}`);
    });
}

const addPost = (newPost) =>{
    return new Promise((resolve,reject)=>{
        if(!newPost.title || !newPost.description)
            reject('Parametreler eksik');
        else{
            posts.push(newPost);
            resolve('POST EKLENDİ');
        }

    })
}

printPosts();

const newPost = {id:posts.length+1,title:'Yeni Post',description:'Yeni post desc'};

addPost(newPost)
    .then((res)=>{
        console.log(res);
        printPosts();
    }).catch(err=>console.log(err));