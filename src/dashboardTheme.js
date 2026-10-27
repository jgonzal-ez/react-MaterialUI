import { createTheme } from '@mui/material/styles';
import { dashboardThemeStyles } from './styles'

// To overwrite mui styles
export const dashboardTheme = createTheme({
    components: {

        // Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontSize: '1rem!important'
                }
            }
        }
    },
    palette: dashboardThemeStyles.palette,
    typography: dashboardThemeStyles.typography,
    spacing: dashboardThemeStyles.spacing,
});