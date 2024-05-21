
import './App.css'
import Display from './components/Display'
import Control from './components/Control'
import { useSelector } from 'react-redux'
import PrivacyMessage from './components/PrivacyMessage'

function App() {
  // counterByReduxToolkit

  const privacy= useSelector((store) => store.privacy)

  return (
    <>
    {privacy ? <PrivacyMessage/> : <Display/>}
    <Control/> 
    </>
  )
}

export default App
