import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

export default function Header() {
  // const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Exercise Database
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
