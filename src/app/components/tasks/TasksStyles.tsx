import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    taskBox:{
        width: '100%',
        backgroundColor: '#ffffff',
        border: '1px solid #efefef',
        borderRadius: '4px',
        boxShadow: '0px 0px 32px 0px rgba(214, 215, 226, 0.3)',
    },

}),
);

export default useStyles;