import React, { Fragment } from 'react'
import { Header, Footer } from '../Layout'
import Exercises from '../Exercises'

export default function App() {
  return (
    <Fragment>
      <Header />
      <Exercises />
      <Footer />
    </Fragment>
  )
}
