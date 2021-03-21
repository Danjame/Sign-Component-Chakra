import React from 'react'
import Form from './components/Form'
import './app.css'
import { SignStore, SignStoreProvider } from './stores/SignStore'

const signStore =  new SignStore()

function App() {
  return (
    <SignStoreProvider store= {signStore}>
      <Form />
    </SignStoreProvider>
  );
}

export default App;
