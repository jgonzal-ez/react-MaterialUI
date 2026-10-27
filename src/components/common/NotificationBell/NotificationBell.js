import { Badge, IconButton, Tooltip } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";


export default function NotificationBell({iconColor, badgeContent}) {

    const newNotifications = `You have ${badgeContent} new notifications`;
    const noNotifications = "You have no new notifications";

    return (
        <Tooltip title={badgeContent ? newNotifications : noNotifications} arrow>
            <IconButton
                color={iconColor}
                onClick={onClick}
                anchorEl={anchorEl}
            >
                <Badge badgeContent={badgeContent} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
        </Tooltip>
    )
}

