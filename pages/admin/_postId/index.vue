<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost"/>
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    components:{
        AdminPostForm
    },
    data(){
        return{
            loadedPost:{
                author:'Apple',
                title: 'My Awesome Aplle',
                content: 'Hello Apple Macbook Ipad Ipro APple tv',
                thumbnailLink: 'https://images.unsplash.com/photo-1503852460961-aa7ffdd3d64d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
            }
        }
    }  
}
</script>


<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>