// import { checkUserRole } from '@/lib/auth'
 
export default function Layout({
  user,
  admin,
}: {
  user: React.ReactNode
  admin: React.ReactNode
}) {
    return <>{user}</>
//   const role = checkUserRole()
//   return <>{role === 'admin' ? admin : user}</>
}