<template>
    <section class="featured-posts">
      <PostPreview
        id="1"
        :is-admin="isAdmin "
        thumbnail="https://i.ibb.co/2FnP4mP/nate-grant-QQ9-Lain-S6t-I-unsplash.jpg"
        title="Hello there!"
        previewText="This my first post!" />
      <PostPreview
        id="2"
        :is-admin="isAdmin "
        thumbnail="https://i.ibb.co/2FnP4mP/nate-grant-QQ9-Lain-S6t-I-unsplash.jpg"
        title="Hello there - the second time!"
        previewText="This my second post!" />
      <PostPreview
        id="3"
        :is-admin="isAdmin "
        thumbnail="https://i.ibb.co/2FnP4mP/nate-grant-QQ9-Lain-S6t-I-unsplash.jpg"
        title="Hi!"
        previewText="This my third post!" />
    </section>
</template>


<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },
  props:{
      isAdmin:{
          type: Boolean,
          default: false
      }
  }
}
</script>


<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>