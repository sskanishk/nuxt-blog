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
            }
        },
        actions: {
            // return promise if you run async code
            nuxtServerInit(vuexContext, context){
                return axios.get('https://nuxt-blog-ce52c.firebaseio.com/posts.json')
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

