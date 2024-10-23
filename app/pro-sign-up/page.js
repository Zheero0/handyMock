
import React from 'react'
import Main from '../components/Main'
import MustBePro from '../components/MustBePro'
import { useAuth } from '../authContext'
import ProSignUpAuth from '../components/ProSignUpAuth'

export default function BecomeProPage() {

  return (
    <Main>
      <ProSignUpAuth/>
    </Main>
  )
}
