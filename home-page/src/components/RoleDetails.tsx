import { Role } from '@/sanity/types'
import { FC } from 'react'

export const RoleDetails: FC<Role> = (props: Role) => {
  return <div>{JSON.stringify(props)}</div>
}
