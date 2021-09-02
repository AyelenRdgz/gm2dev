import { Typography, makeStyles, Grid } from "@material-ui/core";


export default function Text() {
    const useStyles = makeStyles((theme) => ({
        grid: {
            marginTop: theme.spacing(40),
            marginLeft: '22%',
            //marginRight: '5%',
            alignItems: 'center',
    
        },
        texto: {
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
        },
        h1: {
            fontSize: 45, 
            lineHeight: '50px', 
            fontWeight: '900',
        },
        h5: {
            fontSize: 16, 
            lineHeight: '27px',
            letterSpacing:0.3,
            fontWeight: 'normal',
        }
    }));

    const classes = useStyles();
    return (
        <Grid conteiner className={classes.grid}>
            <Typography className={classes.texto}>
                <h1 className={classes.h1}>Learn to code by watching others</h1>
                <h5 className={classes.h5}>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</h5>
            </Typography>
        </Grid>
    )

}