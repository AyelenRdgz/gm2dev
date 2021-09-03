import { Typography, makeStyles, Grid, useMediaQuery } from "@material-ui/core";


export default function Text() {
    const useStyles = makeStyles((theme) => ({
        gridDesktop: {
            marginTop: theme.spacing(40),
            marginLeft: '22%',
        },
        gridMobile: {
            marginTop: 90,
            textAlign: 'center',
            marginLeft: '20%',
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
        h1Mobile: {
            fontSize: 26,
            lineHeight: '40px',
            fontWeight: '900',
        },
        h5: {
            fontSize: 16,
            lineHeight: '27px',
            letterSpacing: 0.3,
            fontWeight: 'normal',
            display: 'flex'
        },
        h5Mobile: {
            fontSize: 16,
            lineHeight: '27px',
            letterSpacing: 0.3,
            fontWeight: 'normal',
        },
    }));

    const isMobile = useMediaQuery('(max-width:600px)');
    const classes = useStyles();
    return (
        <Grid conteiner className={isMobile ? classes.gridMobile : classes.gridDesktop}>
            <Grid item xs={10} sm={10}>
                <Typography className={classes.texto}>
                    <h1 className={isMobile ? classes.h1Mobile : classes.h1}>Learn to code by watching others</h1>
                    <h5 className={isMobile ? classes.h5Mobile : classes.h5}>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</h5>
                </Typography>
            </Grid>
        </Grid>
    )

}