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
            nuxtServerInit(vuexContext, context){
                if(!process.client){ //if this is not true i.e. nuxt run on server
                    console.log(context.req.session)
                }
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            {id: "1", thumbnail: 'https://i.ibb.co/2FnP4mP/nate-grant-QQ9-Lain-S6t-I-unsplash.jpg', title:'Hello there - the one time!', previewText:'This my one post!'},
                            {id: "2", thumbnail: 'https://i.ibb.co/2FnP4mP/nate-grant-QQ9-Lain-S6t-I-unsplash.jpg', title:'Hello there - the two time!', previewText:'This my two post!'},
                            {id: "3", thumbnail: 'https://i.ibb.co/2FnP4mP/nate-grant-QQ9-Lain-S6t-I-unsplash.jpg', title:'Hello there - the three time!', previewText:'This my three post!'},
                            {id: "4", thumbnail: 'https://i.ibb.co/2FnP4mP/nate-grant-QQ9-Lain-S6t-I-unsplash.jpg', title:'Hello there - the four time!', previewText:'This my four post!'},
                          ])
                      resolve()
                    }, 1500)
                });
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

