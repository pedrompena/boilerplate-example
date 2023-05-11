import { createUser } from '@/redux/slices/user.slice'
import { useDispatch } from 'react-redux'
import { fetchMorty, rickAndMortyUrl } from '../services'
import { useEffect, useState } from 'react'
import { UserEmptyState } from '@/models'

export default function CreateHomeButton() {
  const dispatch = useDispatch()
  const [morty, setMorty] = useState(UserEmptyState)

  const getMorty = async () => {
    const resp = await fetchMorty(rickAndMortyUrl)
    setMorty(resp)
  }

  useEffect(() => {
    getMorty()
  }, [])

  const dispatchAction = () => {
    dispatch(createUser(morty))
  }

  return <button onClick={dispatchAction}>Dispatch create action</button>
}
