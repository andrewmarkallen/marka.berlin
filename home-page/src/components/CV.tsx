import { CV } from '@/sanity/types'
import { FC } from 'react'

export const CVOverview: FC<CV> = (props: CV) => {
  return <div>{JSON.stringify(props)}</div>
}
