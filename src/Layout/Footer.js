import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'

export default () => {
  return (
    <Paper square>
      <Tabs
        value={0}
        indicatorColor="primary"
        textColor="primary"
        aria-label="disabled tabs example"
      >
        <Tab label="Active" />
        <Tab label="Disabled" disabled />
        <Tab label="Active" />
      </Tabs>
    </Paper>
  )
}
