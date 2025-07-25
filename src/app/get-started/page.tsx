'use client'

import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function GetStartedRedirect() {
    const { status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === 'authenticated') {
            router.replace('/dashboard')
        } else if (status === 'unauthenticated') {
            router.replace('/auth/signin')
        }
    }, [status, router])

    return null
} 