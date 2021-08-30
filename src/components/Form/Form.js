import { Grid, Typography, useMediaQuery, makeStyles, Button, SvgIcon, InputAdornment } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useState } from 'react';
import { AYUDAS, ERRORES } from '../Texts/Texts'
import { ButtonForm } from './Button';
//import IconError from '../../images/icon-error.svg'
import ErrorIcon from '@material-ui/icons/Error';



const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(10),
        borderRadius: 13,
        minHeight: '6vh',
        minWidth: '108%',
        backgroundColor: 'hsl(248, 32%, 49%)',
        boxShadow: '0px 8px rgba(0, 0, 0, .1)',
    },
    margin: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 2px rgba(0, 0, 0, .1)',
    },
    marginIni: {
        marginTop: 35,
    },
    root: {
        marginTop: theme.spacing(4),
        boxShadow: '0px 8px rgba(0, 0, 0, .1)',
        borderRadius: 13,
        background: 'white',
        marginRight: '10%',
        //[theme.breakpoints.down(400+ theme.spacing(2)+2)]: 
    },
    icon: {
        color: 'hsl(0, 100%, 74%)'
    },
    grid: {
        marginTop: theme.spacing(5),
        marginLeft: '10%',
        marginRight: '20%',
    },
    text: {
        fontFamily: 'Poppins'
    }
}));


export default function Form() {

    const [showErrorIcon, setshowErrorIcon] = useState([])

    const [informacionDelUsuario, setInformacionDelUsuario] = useState({
    })

    const handleOnSubmit = (e) => {
        setshowErrorIcon([]);
    }


    const hadleOnError = (e) => {
        const labels = e.map(validator => validator.props.label)
        setshowErrorIcon(labels)
    }


    const handleChange = (e) => {
        setInformacionDelUsuario({
            ...informacionDelUsuario,
            [e.target.name]: e.target.value,
        });
    };


    const classes = useStyles();

    return (
        <Grid conteiner className={classes.grid}>
            <Grid item xs={12}>
                <Grid item xs={10} sm={10} >
                    <ButtonForm className={classes.button} 
                        texto={<Typography><span>Try it free 7 days</span> theen $20/mo. thereafter</Typography>}
                        style={{ textTransform: "none" }}
                    />
                </Grid>
            </Grid>
            <ValidatorForm instantValidate={false} className={classes.root} onError={hadleOnError} onSubmit={handleOnSubmit}>
                <Grid container spacing={2} align="center">
                    <Grid item xs={12}>
                        <Grid item xs={10} sm={10} style={{ marginTop: 30 }}>
                            <TextValidator
                                variant="outlined"
                                id="firstName"
                                label="First Name"
                                name="firstName"
                                value={informacionDelUsuario.firstName}
                                fullWidth
                                onChange={handleChange}
                                validators={['required']}
                                errorMessages={[ERRORES.firstName]}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {showErrorIcon.find(e => e === "First Name") && <ErrorIcon className={classes.icon}/>}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={10} sm={10} style={{ marginTop: 10 }}>
                            <TextValidator
                                variant="outlined"
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                onChange={handleChange}
                                fullWidth
                                value={informacionDelUsuario.lastName}
                                validators={['required']}
                                errorMessages={[ERRORES.lastName]}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {showErrorIcon.find(e => e === "Last Name") && <ErrorIcon className={classes.icon}/>}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={10} sm={10} style={{ marginTop: 10 }}>
                            <TextValidator
                                variant="outlined"
                                id="emailUsuario"
                                label="Email Address"
                                name="email"
                                onChange={handleChange}
                                fullWidth
                                value={informacionDelUsuario.email}
                                validators={['required', 'isEmail']}
                                errorMessages={[ERRORES.email, AYUDAS.email]}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {showErrorIcon.find(e => e === "Email Address") && <ErrorIcon className={classes.icon}/>}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={10} sm={10} style={{ marginTop: 10 }}>
                            <TextValidator
                                variant="outlined"
                                id="passwordUsuario"
                                label="Password"
                                name="password"
                                type="password"
                                fullWidth
                                onChange={handleChange}
                                value={informacionDelUsuario.password}
                                validators={['required']}
                                errorMessages={[ERRORES.password]}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {showErrorIcon.find(e => e === "Password") && <ErrorIcon className={classes.icon}/>}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={10} sm={10} className={classes.margin}>
                            <ButtonForm
                                texto="probando" />
                        </Grid>
                        <Grid >
                            <Typography style={{ marginTop: 30 }} >
                                By clicking button, you are agreeing to our Terms and services
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <br></br>
                <br></br>
            </ValidatorForm>

            </Grid>

    );


}