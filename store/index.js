import Vuex from 'vuex'
import axios from 'axios'


// this store is function instead of object 
// bcoz being function i could be callable
const createStore = () => {
    return new Vuex.Store({
        state:{
            loadedPosts: [],
            token: null
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
            },
            setToken(state, token) {
                state.token = token
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
                return axios.post( process.env.baseUrl + '/posts.json?auth=' + vuexContext.state.token, createdPost)
                    .then(result => {
                        vuexContext.commit('addPost', { ...createdPost, id: result.data.name })
                    })
                    .catch()
            },
            editPost(vuexContext, editedPost) {
                return axios.put( process.env.baseUrl + '/posts/' 
                    + editedPost.id 
                    + ".json?auth="
                    + vuexContext.state.token, editedPost)
                .then(result => {
                    vuexContext.commit('editPost', editedPost)
                })
                .catch(e => console.log(e))
            },
            authenticateUser(vuexContext, authData) {
                let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.fbAPIkey
                if(!authData.isLogin) {
                    authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.fbAPIkey
                }
                return axios.post(authUrl, {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                }).then(result => {
                    // debugger;
                    vuexContext.commit('setToken', result.data.idToken)
                }).catch(e => {
                    console.log(e)
                })
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

