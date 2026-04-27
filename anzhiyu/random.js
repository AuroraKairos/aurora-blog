var posts=["2026/04/26/hello-world/","2026/04/27/Java工程师AI大模型学习计划/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };