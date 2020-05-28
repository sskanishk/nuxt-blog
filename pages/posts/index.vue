<template>
  <div class="posts-page">
    <PostList />
  </div>
</template>


<script>
import PostPreview from '@/components/Posts/PostPreview'
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostPreview,
    PostList
  }
}
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

