import React from 'react'
import Form from './components/Form'
import './app.css'
import { SignStore, SignStoreProvider } from './stores/SignStore'

const signStore =  new SignStore()

function App() {
  return (
    <div className="App">
      <SignStoreProvider store= {signStore}>
        <Form />
      </SignStoreProvider>
    </div>
  );
}

export default App;
