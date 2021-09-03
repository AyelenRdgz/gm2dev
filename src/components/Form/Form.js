import { Grid, Typography, useMediaQuery, makeStyles, InputAdornment } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useState } from 'react';
import { AYUDAS, ERRORES } from '../Texts/Texts';
import { ButtonForm } from './Button';
import ErrorIcon from '@material-ui/icons/Error';


const useStyles = makeStyles((theme) => ({
    buttonUp: {
        marginTop: theme.spacing(12),
        borderRadius: 12,
        minHeight: '7vh',
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
    buttonUpMobile: {
        borderRadius: 12,
        minHeight: '10vh',
        minWidth: '98%',
        justifyContent: 'center',
        backgroundColor: 'hsl(248, 32%, 49%)',
        boxShadow: '0px 8px rgba(0, 0, 0, .1)',
        textTransform: "none" ,
        fontFamily: 'Poppins, sans-serif',
        '&:hover': {
            backgroundColor: 'hsl(248, 40%, 49%)',
            boxShadow: 'none',
        },
    },
    marginButton: {
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
        marginButton: '5%'
    },
    validatorFormMobile: {
        marginTop: theme.spacing(4),
        boxShadow: '0px 8px rgba(0, 0, 0, .1)',
        borderRadius: 13,
        background: 'white',
    },
    icon: {
        color: 'hsl(0, 100%, 74%)'
    },
    grid: {
        marginTop: theme.spacing(5),
        marginLeft: '5%',
    },
    buttonForm: {
        marginTop: theme.spacing(3),
        minHeight: '6vh',
        backgroundColor: 'hsl(154, 59%, 51%)',
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
        color: 'hsl(0, 5%, 76%)',
        fontSize: 12,
        marginTop: 20,
        fontFamily: 'Poppins, sans-serif',
    },
    textGreyMobile: {
        color: 'hsl(0, 5%, 76%)',
        fontSize: 10,
        marginTop: 20,
        fontFamily: 'Poppins, sans-serif',
        lineHeight: '20px',
        fontWeight: 'bold',
    },
    input: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        marginLeft: 15,
        fontSize: 15,
    },
    typography: {
        marginLeft: '3%',
        marginRight: '3%'
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
        const placeholder = e.map(validator => validator.props.placeholder)
        setshowErrorIcon(placeholder)
    }
    

    const handleChange = (e) => {
        setInformacionDelUsuario({
            ...informacionDelUsuario,
            [e.target.name]: e.target.value,
        });
    };

    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');
    
    return (
        <Grid conteiner xs={isMobile? 11:10} sm={10} md={10} lg={9} className={classes.grid}>
           
                <Grid>
                    <ButtonForm className={isMobile ? classes.buttonUpMobile : classes.buttonUp}
                        texto={<Typography className={isMobile? classes.typography : {}}> <span className={classes.textBold}>Try it free 7 days</span> then $20/mo. thereafter</Typography>}
                    />
                </Grid>

            <ValidatorForm instantValidate={false} className={isMobile ? classes.validatorFormMobile : classes.validatorForm} onError={hadleOnError} onSubmit={handleOnSubmit}>
                <Grid container spacing={2} align="center">
                    <Grid item xs={12} >
                        <Grid item xs={10} sm={10} style={{ marginTop: 30}}>
                            <TextValidator
                                variant="outlined"
                                id="firstName"
                                placeholder="First Name"
                                value={informacionDelUsuario.firstName}
                                fullWidth
                                onChange={handleChange}
                                name="firstName"
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
                                name="lastName"
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
                                name="email"
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
                                name="password"
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
                        <Grid item xs={10} sm={10} className={classes.marginButton}>
                            <ButtonForm className={classes.buttonForm} style={{

                            }}
                                texto="CLAIM FOR YOUR FREE TRIAL" />
                        </Grid>
                        <Grid item xs={isMobile ? 8:12}>
                            <Typography className={isMobile ? classes.textGreyMobile : classes.textGrey}>
                                By clicking button, you are agreeing to our {<a href={'http://link.com'} className={classes.link}>Terms and Services</a>}
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