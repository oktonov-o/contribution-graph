import './styles.css'
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Contribution({ contribution }) {
  let level = 1;
  if (contribution.contribution >= 1){
    level = 2;
  }
  if (contribution.contribution >= 10){
    level = 3;
  }
  if (contribution.contribution >= 20){
    level = 4;
  }
  if (contribution.contribution >= 30){
    level = 5;
  }

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
        <Button aria-describedby={id} variant="contained" onClick={handleClick} className={`cell cell-color-level-${level}`}/>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>
    </>
  )
}

export default Contribution