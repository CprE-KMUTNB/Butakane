//Storing token to session storage
export const authenticate=(response,next)=>{
    if(window !=="undefined"){ //access to website
        //store a token to session storage
        sessionStorage.setItem("token",JSON.stringify(response.data.token))
        sessionStorage.setItem("username",JSON.stringify(response.data.userName))
    }
    next()
}

export const getToken=()=>{
    if(window !== "undefined"){
        if(sessionStorage.getItem("token")){
            return JSON.parse(sessionStorage.getItem("token"))
        }else{
            return false
        }
    }
}