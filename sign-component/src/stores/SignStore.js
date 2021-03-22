import { action, makeAutoObservable, observable } from 'mobx'
import { createContext, useContext } from 'react'
import axios from 'axios'

class SignStore {
  user = null
  constructor () {
    makeAutoObservable(this, {
      user: observable,
      signIn: action.bound,
      signUp: action.bound
    })
  }
  // 登录
  async signIn (user) {
    let result = await axios.post("https://conduit.productionready.io/api/users/login", {
      user
    }).then(response => {
      this.user = response.data.user
      return response
    })
      .catch(err => err.response)
      return result
  }
  // 注册
  async signUp (user) {
    const result = await axios.post("https://conduit.productionready.io/api/users", {
      user
    }).then(response => response
    ).catch(err => err.response)
    return result
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