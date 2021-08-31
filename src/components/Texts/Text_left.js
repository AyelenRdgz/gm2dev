import { TextField, InputAdornment, Typography, makeStyles, Grid } from "@material-ui/core";


export default function Text() {
    const useStyles = makeStyles((theme) => ({
        grid: {
            
            marginTop: theme.spacing(40),
            marginLeft: '30%',
            //marginRight: '5%',
            alignItems: 'center',
    
        },
        texto: {
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
        },
  
    }));

    const classes = useStyles();
    return (
        <Grid conteiner className={classes.grid}>
            <Typography className={classes.texto}>
                <h1 style={{fontSize: 40, lineHeight: '45px'}}>Learn to code by watching others</h1>
                <h5 className={classes.texto1}>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable</h5>
            </Typography>
        </Grid>
    )

}