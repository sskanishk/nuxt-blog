export default function(context) {
    console.log("auth-check")
    // if(process.client){
    context.store.dispatch("initAuth", context.req);
    // }
}