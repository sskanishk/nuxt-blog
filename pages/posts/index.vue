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

