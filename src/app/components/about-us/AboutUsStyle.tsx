import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    appName:{
        fontSize: '2rem',
        fontFamily: "Roboto",
        fontWeight: 600,
    },

    about:{
      width: '100%',
      backgroundColor: '#ffffff',
      border: '1px solid #efefef',
      borderRadius: '4px',
      boxShadow: '0px 0px 32px 0px rgba(214, 215, 226, 0.3)',
    },

    aboutText:{
      fontSize: '1rem',
      fontFamily: "Roboto",
      fontWeight: 300,
    }

}),
);

export default useStyles;