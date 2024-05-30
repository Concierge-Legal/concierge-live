'use server'
 
import { redirect } from 'next/navigation'
 
export async function denyAccess() {
	console.log(`Denying access!`)
  redirect(`/`)
}