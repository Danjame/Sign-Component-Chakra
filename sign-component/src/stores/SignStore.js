import { action, makeAutoObservable, observable } from 'mobx'
import { createContext, useContext } from 'react'
import axios from 'axios'

class SignStore {
  user = 'user'
  token = 'token'
  constructor () {
    makeAutoObservable(this, {
      user: observable,
      token: observable,
      signIn: action.bound,
      signUp: action.bound
    })
  }
  async signIn (user) {
    console.log('signIn', this.user)
    let res = await axios.post("https://conduit.productionready.io/api/users/login", {
      user
    }).then(response => response.data)
    // {"user":{    
    //   "email": "jake@jake.jake",   
    //   "password": "jakejake"
    //     }
    // }
  }
  async signUp (user) {
    console.log('signUp', this.token)
    let res = await axios.post("https://conduit.productionready.io/api/users", {
      user
    }).then(response => response.data)
  //   {"user":{   
  //     "username": "Jacob",
  //     "email": "jake@jake.jake",
  //     "password": "jakejake"users
  //      }
  // }
  }
}

const SignStoreContext = createContext()

const SignStoreProvider = ({ store, children}) => {
  return (
    <SignStoreContext.Provider value={store}>
      {children}
    </SignStoreContext.Provider>
  )
}

const useSignStore = () => {
  return useContext(SignStoreContext)
}

export {SignStore, SignStoreProvider, useSignStore}