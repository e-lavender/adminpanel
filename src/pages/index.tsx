import React, { useEffect, useState } from 'react'

import { ROUTES } from '@/app/constants/routes'
import { Loader } from '@flyingtornado06/ui-kit'
import { useRouter } from 'next/router'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const { push } = useRouter()

  useEffect(() => {
    const token = sessionStorage.getItem('isLoggedIn')

    if (!token) {
      void push('/auth/sign-in')
    } else {
      setLoading(false)
    }
  }, [push])

  if (loading) {
    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '25%',
        }}
      >
        <Loader isLoading={loading} />
      </div>
    )
  } else {
    void push(ROUTES.USERS)
  }
}

export default Home
