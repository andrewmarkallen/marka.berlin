import { Cv as CV } from '@/sanity/types'
import { PortableText } from '@portabletext/react'
import { FC } from 'react'

export const CVOverview: FC<CV> = (props: CV) => {
  return <div>{JSON.stringify(props)}</div>
}
