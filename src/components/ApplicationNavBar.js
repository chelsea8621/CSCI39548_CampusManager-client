import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const ApplicationNavBar = ({ classes, ActionButtonComponent }) => {
    return (
        <AppBar position="static" elevation={0} className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit" >
                    CRUD App
                </Typography>

                <ActionButtonComponent className={classes.links}/>

                <Link className={classes.links} to={'/campuses'} >
                    <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
                        All Campuses
                    </Button>
                </Link>

                <Link className={classes.links} to={'/students'} >
                    <Button variant="contained" color="primary">
                        All Students
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default ApplicationNavBar;