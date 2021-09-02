import { Grid, Typography, useMediaQuery, makeStyles, Button, SvgIcon, InputAdornment } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useState } from 'react';
import { AYUDAS, ERRORES } from '../Texts/Texts';
import { ButtonForm } from './Button';
//import IconError from '../../images/icon-error.svg'
import ErrorIcon from '@material-ui/icons/Error';




const useStyles = makeStyles((theme) => ({
    buttonUp: {
        marginTop: theme.spacing(12),
        borderRadius: 12,
        minHeight: '6vh',
        minWidth: '90%',
        backgroundColor: 'hsl(248, 32%, 49%)',
        boxShadow: '0px 8px rgba(0, 0, 0, .1)',
        textTransform: "none" ,
        fontFamily: 'Poppins, sans-serif',
        '&:hover': {
            backgroundColor: 'hsl(248, 40%, 49%)',
            boxShadow: 'none',
        },
    },
    margin: {
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 2px rgba(0, 0, 0, .1)',
    },
    marginIni: {
        marginTop: 35,
    },
    validatorForm: {
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
        marginLeft: '5%',
       // marginRight: '20%',
    },
    buttonForm: {
        //marginTop: theme.spacing(1),
        marginTop: theme.spacing(3),
        minHeight: '6vh',
        backgroundColor: 'hsl(154, 59%, 51%)',
        //boxShadow: '0px 8px rgba(0, 0, 0, .4)',
        borderBottom: '3px solid hsl(154, 57%, 43%)',
        fontWeight: 'bold',
        letterSpacing: 0.5, 
        lineHeight: '30px',
        '&:hover': {
            backgroundColor: 'hsl(154, 59%, 51%)',
            boxShadow: 'none',
        },
    },
    textBold: {
        fontWeight: 'bold',
    },
    link: {
        color: 'hsl(0, 100%, 74%)',
        textDecoration: 'none',
        fontWeight: 'bold',
        
    },
    textGrey: {
        color: 'hsl(0, 3%, 76%)',
        fontSize: 12,
        marginTop: 20,
        fontFamily: 'Poppins, sans-serif',
    },
    input: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 'bold',
        marginLeft: 15,
    },

}));


export default function Form() {

    const [showErrorIcon, setshowErrorIcon] = useState([])

    const [informacionDelUsuario, setInformacionDelUsuario] = useState({
    })

    const handleOnSubmit = (e) => {
        setshowErrorIcon([]);
    }


    const hadleOnError = (e) => {
        console.log(e);
        const labels = e.map(validator => validator.props.placeholder)
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
        <Grid conteiner xs={10} sm={10} className={classes.grid}>
           
                <Grid item >
                    <ButtonForm className={classes.buttonUp}
                        texto={<Typography> <span className={classes.textBold}>Try it free 7 days</span> theen $20/mo. thereafter</Typography>}
                    />
                </Grid>
            <Grid item >
            <ValidatorForm instantValidate={false}
                className={classes.validatorForm}
                onError={hadleOnError}
                onSubmit={handleOnSubmit}>
                <Grid container spacing={2} align="center">
                    <Grid item xs={12}>
                        <Grid item xs={10} sm={10} style={{ marginTop: 30}}>
                            <TextValidator
                                variant="outlined"
                                id="firstName"
                                placeholder="First Name"
                                value={informacionDelUsuario.firstName}
                                fullWidth
                                onChange={handleChange}
                                validators={['required']}
                                errorMessages={[ERRORES.firstName]}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end" >
                                            {showErrorIcon.find(e => e === "First Name") && <ErrorIcon className={classes.icon} />}
                                        </InputAdornment>
                                    ),
                                    classes: {
                                        input: classes.input
                                    }
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={10} sm={10} style={{ marginTop: 10 }}>
                            <TextValidator
                                variant="outlined"
                                id="lastName"
                                placeholder="Last Name"
                                onChange={handleChange}
                                fullWidth
                                value={informacionDelUsuario.lastName}
                                validators={['required']}
                                errorMessages={[ERRORES.lastName]}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {showErrorIcon.find(e => e === "Last Name") && <ErrorIcon className={classes.icon} />}
                                        </InputAdornment>
                                    ),
                                    classes: {
                                        input: classes.input
                                    }
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={10} sm={10} style={{ marginTop: 10 }}>
                            <TextValidator
                                variant="outlined"
                                id="emailUsuario"
                                placeholder="Email Address"
                                onChange={handleChange}
                                fullWidth
                                value={informacionDelUsuario.email}
                                validators={['required', 'isEmail']}
                                errorMessages={[ERRORES.email, AYUDAS.email]}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {showErrorIcon.find(e => e === "Email Address") && <ErrorIcon className={classes.icon} />}
                                        </InputAdornment>
                                    ),
                                    classes: {
                                        input: classes.input
                                    }
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={10} sm={10} style={{ marginTop: 10 }}>
                            <TextValidator
                                variant="outlined"
                                id="passwordUsuario"
                                placeholder="Password"
                                type="password"
                                fullWidth
                                onChange={handleChange}
                                value={informacionDelUsuario.password}
                                validators={['required']}
                                errorMessages={[ERRORES.password]}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {showErrorIcon.find(e => e === "Password") && <ErrorIcon className={classes.icon} />}
                                        </InputAdornment>
                                    ),
                                    classes: {
                                        input: classes.input
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={10} sm={10} className={classes.margin}>
                            <ButtonForm className={classes.buttonForm} style={{

                            }}
                                texto="CLAIM FOR YOUR FREE TRIAL" />
                        </Grid>
                        <Grid >
                            <Typography className={classes.textGrey}>
                                By clicking button, you are agreeing to our {<a href={'http://link.com'} className={classes.link}>Terms and Services</a>}
                            </Typography>

                        </Grid>
                    </Grid>
                </Grid>
                <br></br>
                <br></br>
            </ValidatorForm>
            </Grid>

        </Grid>

    );
}