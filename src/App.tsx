import { useSelector } from 'react-redux'
import { Home } from './pages'
import AppStore from './redux/store'

function App() {
  const user = useSelector((state: AppStore) => state.user)

  return (
    <>
      <span>{JSON.stringify(user)}</span>
      <Home />
    </>
  )
}
export default App
