import { CV } from '@/sanity/types'
import { FC } from 'react'

export const CVOverview: FC<CV> = (props: CV) => {
  return (
    <div>
      <p>{JSON.stringify(props, null, 2)}</p>
    </div>
  )
}
