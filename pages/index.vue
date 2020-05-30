<template>
  <div class="home-page">
    <section class="intro">
      <!-- <h1>Get the latest tech news!</h1> -->
    </section>
    <PostList :posts="loadedPosts" />      
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  // data(){
  //   return{
  //     loadedPosts: []
  //   }
  // },

  asyncData(context, callback){
    // console.log(context)
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {id: "1", thumbnail: 'https://i.ibb.co/2FnP4mP/nate-grant-QQ9-Lain-S6t-I-unsplash.jpg', title:'Hello there - the one time!', previewText:'This my one post!'},
          {id: "2", thumbnail: 'https://i.ibb.co/2FnP4mP/nate-grant-QQ9-Lain-S6t-I-unsplash.jpg', title:'Hello there - the two time!', previewText:'This my two post!'},
          {id: "3", thumbnail: 'https://i.ibb.co/2FnP4mP/nate-grant-QQ9-Lain-S6t-I-unsplash.jpg', title:'Hello there - the three time!', previewText:'This my three post!'},
          {id: "4", thumbnail: 'https://i.ibb.co/2FnP4mP/nate-grant-QQ9-Lain-S6t-I-unsplash.jpg', title:'Hello there - the four time!', previewText:'This my four post!'},
        ]
      });
    }, 1500)
  },
  // created(){
  //   setTimeout(() => {
  //     this.loadedPosts = [
  //       {id: "1", thumbnail: 'https://i.ibb.co/2FnP4mP/nate-grant-QQ9-Lain-S6t-I-unsplash.jpg', title:'Hello there - the one time!', previewText:'This my one post!'},
  //       {id: "2", thumbnail: 'https://i.ibb.co/2FnP4mP/nate-grant-QQ9-Lain-S6t-I-unsplash.jpg', title:'Hello there - the two time!', previewText:'This my two post!'},
  //       {id: "3", thumbnail: 'https://i.ibb.co/2FnP4mP/nate-grant-QQ9-Lain-S6t-I-unsplash.jpg', title:'Hello there - the three time!', previewText:'This my three post!'},
  //       {id: "4", thumbnail: 'https://i.ibb.co/2FnP4mP/nate-grant-QQ9-Lain-S6t-I-unsplash.jpg', title:'Hello there - the four time!', previewText:'This my four post!'},
  //     ]
  //   }, 1500)
  // }

  created(){}
}
</script>


<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-image: url('~assets/images/jazmin-quaynor-8ioenvmof-I-unsplash.jpg');
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
