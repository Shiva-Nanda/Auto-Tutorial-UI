import { Grid } from '@mui/material';
import React from 'react';
import ProfileCard from './profileCard';
import ProfileMenu from './profileMenu';

const UserProfile = (props) => {
    return ( 
        <React.Fragment>
            <Grid container spacing={2} style={{minWidth: '80vw'}}>
                <Grid item xs={3}>
                    <ProfileMenu />
                </Grid>
                <Grid item xs={8}>
                    <ProfileCard />
                </Grid>
            </Grid>
        </React.Fragment>
     );
}
 
export default UserProfile;