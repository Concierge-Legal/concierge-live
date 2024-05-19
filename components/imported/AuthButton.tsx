import Link from "next/link"
 
import { Button } from "@/components/ui/button"
 
export function DashboardButton() {
  return (
    <Button asChild>
      <Link href="/login">Dashboard</Link>
    </Button>
  )
}

export function LogoutButton() {
  return (
    <Button asChild>
      <Link href="/">Logout</Link>
    </Button>
  )
}