import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core'

export const Header: React.FC = () => {
  return (
    <div>
      <AppBar><Toolbar>DevDesk Queue</Toolbar></AppBar>
    </div>
  );
}
