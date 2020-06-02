export default function(context) {
    if(context.store.getters.isAuthenticated) {
        console.log("All Good with token")
    }
    else{
        console.log("auth")
        context.redirect('/admin/auth')
    }
}