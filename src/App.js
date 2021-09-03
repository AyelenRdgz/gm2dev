import BackgroundDesktop from './images/bg-intro-desktop.png';
import BackgroundMobile from './images/bg-intro-mobile.png';
import { Grid, useMediaQuery, makeStyles} from '@material-ui/core'
import Text from './components/Texts/Text_left'
import Form from './components/Form/Form'

const useStyles = makeStyles((theme) => ({
    rootDesktop: {
        backgroundImage: `url(${BackgroundDesktop})`,
        height: '100vh',
        backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
        backgroundColor: 'hsl(0, 100%, 74%)',
    },
    rootMobile: {
        backgroundImage: `url(${BackgroundMobile})`,
        height: '137vh',
        backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
        backgroundColor: 'hsl(0, 100%, 74%)',
    }

  }))

export default function App() {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <Grid container className={isMobile ? classes.rootMobile : classes.rootDesktop}>
             <Grid item xs={12} sm={6}>
                    <Text />
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Form />
                </Grid>
            
        </Grid> 
    );
}

