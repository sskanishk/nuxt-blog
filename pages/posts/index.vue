<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>


<script>
import PostList from '@/components/Posts/PostList'

export default {


  components: {
    PostList
  },


  fetch(context){
    // console.log(context, "post non id")
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {id: "1", thumbnail: 'https://i.ibb.co/2FnP4mP/nate-grant-QQ9-Lain-S6t-I-unsplash.jpg', title:'Hello there - the one time!', previewText:'This my one post!'},
            {id: "2", thumbnail: 'https://i.ibb.co/2FnP4mP/nate-grant-QQ9-Lain-S6t-I-unsplash.jpg', title:'Hello there - the two time!', previewText:'This my two post!'},
            {id: "3", thumbnail: 'https://i.ibb.co/2FnP4mP/nate-grant-QQ9-Lain-S6t-I-unsplash.jpg', title:'Hello there - the three time!', previewText:'This my three post!'},
            {id: "4", thumbnail: 'https://i.ibb.co/2FnP4mP/nate-grant-QQ9-Lain-S6t-I-unsplash.jpg', title:'Hello there - the four time!', previewText:'This my four post!'},
          ]
        });
      }, 1500)
    }).then(data => {
      // console.log("data")
      // console.log(data)
      // return data
      context.store.commit('setPosts', data.loadedPosts)
    }).catch(e => {
      context.error(e);
    });
  },


  // life cycle hook
  // created(){
  //   this.$store.dispatch('setPosts', this.loadedPosts)
  //   console.log("post page")
  //   console.log(this.$store.getters.loadedPosts)
  // },
  
  computed: {
    loadedPosts(){
      return this.$store.getters.loadedPosts
    }
  }


};
</script>


<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.post-lists {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

