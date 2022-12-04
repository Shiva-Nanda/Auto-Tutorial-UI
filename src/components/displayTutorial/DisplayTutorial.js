
import { Grid, Typography } from '@mui/material';
import { Card } from 'material-ui';
import React, {useEffect, useState} from 'react'

const DisplayTutorial = () => {

  const [Tutorial, setTutorial] = useState([]);
  useEffect(() => {


  }, [Tutorial])

  return (
    <React.Fragment>
      <Card
      sx={{
          width: {
            sx: 5.0, // 100%
            sm: 1000,
            md: 1000,
          },
        }}>
        <Grid container>
          <Typography>
            sample
          </Typography>
        </Grid>
      </Card>
    </React.Fragment>
  )
}

export default DisplayTutorial;
