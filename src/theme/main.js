/**
 * @author Evheniy Bondarev <bondsua@gmail.com>
 */
import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: '#4DA6FF'
    }
  },
  overrides: {
    MuiTextField: {
      root: {
        '&>label': {
          transform: 'translate(14px, 12px) scale(1)'
        },
        '& input': {
          paddingTop: 10,
          paddingBottom: 10
        }
      }
    }
  }
});
