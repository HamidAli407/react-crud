import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({

    appName:{
        fontSize: '2rem',
        fontFamily: "Roboto",
        fontWeight: 600,
    },

    formLabel:{
        color: '#353535'
    },

    formBox:{
      width: '100%',
      backgroundColor: '#ffffff',
      border: '1px solid #efefef',
      borderRadius: '4px',
      boxShadow: '0px 0px 32px 0px rgba(214, 215, 226, 0.3)',
    },

    tablehead:{
        '& th':{
            fontWeight: '600 !important',
        }
    },

    radiodir:{
        flexDirection: 'row'
    },

    root: {
        width: 258,
        height: 140,
        padding: 12,
    },

    bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    },

    title: {
    fontSize: 14,
    },

    pos: {
    marginBottom: 12,
    },

    cardDisplay:{
        display: 'flex',
        alignItems: 'center',
        width: 'calc(100% + 24px)',
        margin: '-12px',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
    }
    

    }),
);

export default useStyles;