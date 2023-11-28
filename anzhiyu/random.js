var posts=["2023/11/23/title/","2023/11/23/hello-world/","2023/11/23/Untitled/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };