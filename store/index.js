import Vuex from 'vuex'
import axios from 'axios'


// this store is function instead of object 
// bcoz being function i could be callable
const createStore = () => {
    return new Vuex.Store({
        state:{
            loadedPosts: []
        },

        mutations: {  // synchronus
            // posts is payload
            setPosts(state, posts){
                state.loadedPosts = posts
            },
            addPost(state, post) {
                state.loadedPosts.push(post)
            },
            editPost(state, editedPost) {
                // findingIndex
                const postIndex = state.loadedPosts.findIndex(
                    post => post.id === editedPost.id
                );
                state.loadedPosts[postIndex] = editedPost
            }
        },

        actions: {
            // return promise if you run async code
            nuxtServerInit(vuexContext, context){
                return axios.get( process.env.baseUrl + '/posts.json')
                .then(res => {
                    const postsArray = []
                    for(const key in res.data){
                        postsArray.push({ ...res.data[key], id: key  })
                    }
                    vuexContext.commit('setPosts', postsArray)
                })
                .catch(e => context.error(e));
            },
            setPosts(vuexContext, posts){
                vuexContext.commit('setPosts', posts)
            },
            addPost(vuexContext, post) {
                const createdPost = {
                    ...post,
                    updatedData: new Date()
                }
                return axios.post( process.env.baseUrl + '/posts.json', createdPost)
                    .then(result => {
                        vuexContext.commit('addPost', { ...createdPost, id: result.data.name })
                    })
                    .catch()
            },
            editPost(vuexContext, editedPost) {
                return axios.put( process.env.baseUrl + '/posts/' 
                    + editedPost.id 
                    + ".json", editedPost)
                .then(result => {
                    vuexContext.commit('editPost', editedPost)
                })
                .catch(e => console.log(e))
            } 
        },

        getters: {
            loadedPosts(state){
                return state.loadedPosts
            }
        },

    })
}


export default createStore

