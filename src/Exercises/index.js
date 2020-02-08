import React from 'react'
import { Grid } from '@material-ui/core'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 20 }
}
export default () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <LeftPane style={style} />
      </Grid>
      <Grid item xs={6}>
        <RightPane style={style} />
      </Grid>
    </Grid>
  )
}
