import { modifyUser } from '@/redux/slices/user.slice'
import { useDispatch } from 'react-redux'

export default function ModifyHomeButton() {
  const dispatch = useDispatch()

  const dispatchAction = () => {
    dispatch(modifyUser({ name: 'Pedro Peña', id: 'kjn11' }))
  }

  return <button onClick={dispatchAction}>Dispatch modify action</button>
}
