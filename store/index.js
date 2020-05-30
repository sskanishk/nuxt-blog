import Vuex from 'vuex'


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
            // here posts is payload
            // this actions commit the above mutations
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

