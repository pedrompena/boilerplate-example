import { Layout } from '@/ui'
import { HomeTitle } from './ui'
import {
  CreateHomeButton,
  ModifyHomeButton,
  ResetHomeButton,
} from './components'

export default function Home() {
  return (
    <Layout>
      <HomeTitle>Home!</HomeTitle>
      <CreateHomeButton />
      <ModifyHomeButton />
      <ResetHomeButton />
    </Layout>
  )
}
