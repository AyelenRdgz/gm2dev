import { Button } from '@material-ui/core';
import { PropTypes } from 'prop-types';

export function ButtonForm({ texto, ...props}) {
  
  return (
    <Button
      variant="contained"
      color="primary"
      type="submit"
      {...props}
    >
      {texto}
    </Button>
  );
}

ButtonForm.propTypes = {
  texto: PropTypes.string,
};
