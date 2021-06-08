import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({

    formLabel:{
        // fontWeight: '600',
        color: '#353535'
    },

    formBox:{
      width: '50%',
      backgroundColor: '#f5f5f5',
      border: '1px solid #efefef',
      borderRadius: '4px',
      boxShadow: '0px 0px 32px 0px rgba(214, 215, 226, 0.3)',
    },

    tablehead:{
        '& th':{
            fontWeight: '600 !important',
        }
    },

    }),
);

export default useStyles;