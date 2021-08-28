
import { Grid, Typography, useMediaQuery, makeStyles } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useState } from 'react';
import { ERRORES } from '../Texts/Texts'
import { BotonGuardar } from './Button_save';
import TextField from '@material-ui/core/TextField';


/*const [informacionDelUsuario, setInformacionDelUsuario] = useState({
    contrasenia: '',
    confirmarContraseña: '',
  });*/

const useStyles = makeStyles(() => ({
    button: {
        marginTop: '20%',
    },
    margin: {
        marginTop: 20,
    },
    marginIni: {
        marginTop: 35,
    },
    root: {
        marginTop: '2%',
        marginLeft: '15%',
        marginRight: '15%',
        boxShadow: '8px 8px 8px 0 #BDC9D7',
        borderRadius: 16,
        background: 'white',
    },
}));

/*const handleChange = (e) => {
    setInformacionDelUsuario({
      ...informacionDelUsuario,
      [e.target.name]: e.target.value,
    });
  }; */

export default function Form() {
   
    const classes = useStyles();

    return (
        <>
            <Grid item align="center" xs={12}>
          <Typography variant="h4" color="primary" className={classes.button}>
            Inserte aqui el boton cuando exista
          </Typography>
        </Grid>
        <ValidatorForm instantValidate={false} className={classes.root}>
        
            <Grid container justifyContent="center" >
            
            </Grid>
            <Grid container spacing={4} align="center">
          <Grid item xs={12}>
            <Grid item xs={12} sm={7} md={4} style={{ marginTop: 20 }}>
              <TextField  
                required
                error
                variant="outlined"
                id="firstName"
                label="First Name"
                name="nombre"
                //value={informacionDelUsuario.nombre}
                fullWidth
                //onChange={handleChange}
                validator={['required']}
                errorMessages={[ERRORES.requerido]}
                InputProps={{
                  //endAdornment: (
                   // <InputAdornment position="end">
                     // <AccountCircleIcon />
                    //</InputAdornment>
                 // ),
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12} sm={7} md={4}>
              <TextField  
                variant="outlined"
                id="lastName"
                label="Last Name"
                name="apellido"
                //onChange={handleChange}
                fullWidth
                //value={informacionDelUsuario.apellido}
                validators={['required']}
                errorMessages={[ERRORES.requerido]}
                InputProps={{
                  //endAdornment: (
                    //<InputAdornment position="end">
                    //  <AccountCircleIcon />
                   // </InputAdornment>
                  //),
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12} sm={7} md={4}>
              <TextField  
                variant="outlined"
                id="emailUsuario"
                label="Email Address"
                name="email"
                //onChange={handleChange}
                fullWidth
                //value={informacionDelUsuario.email}
                validators={['required', 'isEmail']}
                errorMessages={[ERRORES.requerido, ERRORES.email]}
                InputProps={{
                  //endAdornment: (
                  //  <InputAdornment position="end">
                    //  <EmailIcon />
                   // </InputAdornment>
                 // ),
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12} sm={7} md={4}>
              <TextField  
                variant="outlined"
                id="contraseniaUsuario"
                label="Password"
                name="contrasenia"
                type="password"
                fullWidth
                //onChange={handleChange}
                //value={informacionDelUsuario.contrasenia}
                validators={['required']}
                errorMessages={[ERRORES.requerido, ERRORES.contrasenia]}
                InputProps={{
                  //endAdornment: (
                    //<InputAdornment position="end">
                     // <LockIcon />
                    //</InputAdornment>
                  //),
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <BotonGuardar />
          </Grid>
          </Grid>
        </ValidatorForm>

</>

    );


}