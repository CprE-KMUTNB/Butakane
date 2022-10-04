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

export const getUser=()=>{
    if(window !== "undefined"){
        if(sessionStorage.getItem("user")){
            return JSON.parse(sessionStorage.getItem("user"))
        }else{
            return false
        }
    }
}

export const localAuthenticate=(response,next)=>{
    if(window !=="undefined"){ //access to website
        //store a token to session storage
        localStorage.setItem("token",JSON.stringify(response.data.token))
        localStorage.setItem("username",JSON.stringify(response.data.userName))
    }
    next()
}

export const getTokenLocal=()=>{
    if(window !== "undefined"){
        if(localStorage.getItem("token")){
            return JSON.parse(localStorage.getItem("token"))
        }else{
            return false
        }
    }
}

export const getUserLocal=()=>{
    if(window !== "undefined"){
        if(localStorage.getItem("user")){
            return JSON.parse(localStorage.getItem("user"))
        }else{
            return false
        }
    }
}

export const clearSession=()=>{
    if(window !== "undefined"){
        if(sessionStorage.getItem("token")){
            sessionStorage.clear()
        }else{
            return false
        }
    }
}

export const clearLocal=()=>{
    if(window !== "undefined"){
        if(localStorage.getItem("token")){
            localStorage.clear()
        }else{
            return false
        }
    }
}

export const isLoggedIn = () =>{
    if((localStorage.getItem("token")) || (sessionStorage.getItem("token"))){
      return true
    }else{
      return false
    }
}