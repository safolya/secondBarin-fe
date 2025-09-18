
import './App.css'
import { Button } from './components/ui/button'
import { PLusIcon } from './icons/plus'

function App() {
  

  return (
    <>
      <Button startIcon={PLusIcon} size='sm' variant='primary' text='share'/>
      <Button size='md' variant='secondary' text='Add content'/>
      <Button size='lg' variant='secondary' text='Add content'/>
    </>
  )
}

export default App
