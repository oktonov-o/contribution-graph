import './styles.css'
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function Contribution({ contribution }) {
  let level = 1;
  if (contribution.value >= 1){
    level = 2;
  }
  if (contribution.value >= 10){
    level = 3;
  }
  if (contribution.value >= 20){
    level = 4;
  }
  if (contribution.value >= 30){
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
        <div aria-describedby={id} onClick={handleClick} className={`cell cell-color-level-${level}`}></div>
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
          <div className='info'>
            <Typography sx={{ px: 1, pt: 1 }}>{contribution.value} contributions</Typography>
            <Typography sx={{ px: 1, pb: 1 }}>{contribution.date}</Typography>
          </div>
        </Popover>
    </>
  )
}

export default Contribution