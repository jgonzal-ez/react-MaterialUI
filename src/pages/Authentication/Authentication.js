import Grid from '@mui/material/Grid';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import NotificationBell from '../../components/common/NotificationBell/NotificationBell';
import BasicMenu from '../../components/common/BasicMenu/BasicMenu';

const Authentication = () => {

    const buttonStyles = {
        fontSize: 20,
        fontWeight: 700,
        backgroundColor: "red",
        '&:hover': {
            backgroundColor: 'darkred',
        },
    };

    return (
        <Grid item xs={8}>
            This is authentication page.

            <BasicMenu
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
            />

            <NotificationBell
                iconColor="primary"
                badgeContent={5}
            />

            <CommonButton
                size="large"
                variant="contained"
                sx={buttonStyles}
            >
                Add user
            </CommonButton>

        </Grid>
    )
}

export default Authentication
