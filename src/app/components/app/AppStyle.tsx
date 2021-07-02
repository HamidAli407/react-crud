import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
      root: {
        display: 'flex',
      },
      appBar: {
        //@ts-ignore
        zIndex: "99999 !important",
        backgroundColor: '#ffffff !important',
      },
      drawer: {
        width: 240,
        flexShrink: 0,
      },
      drawerPaper: {
        width: 240,
      },
      drawerContainer: {
        overflow: 'auto',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(5),
      },

      appLogo:{
        width: '120px',
        height: '28px',
      }

}),
);

export default useStyles;