import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ClickableCardRegion from "./ClickableCardRegion";

export const GenericCard = ({
     classes,
     object,
     objectType,
     headerTitle,
     deleteFn,
     cardHeight,
     notClickable,
     ...props
}) => {
    const actions = deleteFn ? [
        <Button
            key={`${object.id}-delete`}
            aria-label={`Delete ${objectType.charAt(0).toUpperCase() + objectType.slice(1)}`}
            onClick={() => deleteFn(object.id)}
            startIcon={<DeleteForeverIcon/>}
        >
            Delete
        </Button>
    ]: [];
    const Actions = () => actions.length ?
        <CardActions disableSpacing>
            {actions}
        </CardActions> : null;

    return (
        <Card raised {...props}>
            <ClickableCardRegion className={classes.links} to={!notClickable && `/${objectType}/${object.id}`}>
                <CardMedia
                    component="img"
                    height={cardHeight}
                    image={object.imageUrl}
                    alt={headerTitle}
                    sx={{maxHeight: "65vh"}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {headerTitle}
                    </Typography>
                </CardContent>
            </ClickableCardRegion>
            <Actions/>
        </Card>
    );
};
