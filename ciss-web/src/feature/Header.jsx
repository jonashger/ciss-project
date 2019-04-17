import React from 'react'
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    },
    button: {
        margin: '0 5px'
    }
};
function Header(props) {


    const { classes } = props;

    return (

        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Ciss
                    </Typography>
                    <Button className={classes.button}><Link className={classes.link} to="/">Inicio</Link></Button>
                    <Button className={classes.button}><Link className={classes.link} to="/cadastro">Cadastrar</Link></Button>
                    <Button className={classes.button}><Link className={classes.link} to="/funcionarios">Listagem</Link></Button>
                </Toolbar>
            </AppBar>
        </div>


    )

}

export default withStyles(styles)(Header)
