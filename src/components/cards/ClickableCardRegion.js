import {CardActionArea} from "@mui/material";
import {Link} from "react-router-dom";
import {memo} from "react";

const ClickableCardRegion = memo(({ className, to, children }) => {
    if (!to)
        return children;
    return (
        <CardActionArea>
            <Link className={className} to={to}>
                {children}
            </Link>
        </CardActionArea>
    );
});

export default ClickableCardRegion;