import Background from './images/bg-intro-desktop.png';
import { Grid, useMediaQuery, makeStyles} from '@material-ui/core'
import Text from './components/Texts/Text_left'
import Form from './components/Form/Form'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${Background})`,
        height: '100vh',
        backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
        backgroundColor: 'hsl(0, 100%, 74%)',
    }

  }))

export default function App() {
    const classes = useStyles();
    //const isMobile = useMediaQuery('(max-width:375px)');
    return (
        <Grid container className={classes.root}>
             <Grid item xs={12} sm={6}>
                    <Text />
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Form />
                </Grid>
            
        </Grid> 
    );
}

