import { createMuiTheme } from '@material-ui/core/styles'

const defaultTheme = createMuiTheme()

export const appTheme = createMuiTheme(
  Object.assign(defaultTheme, {
    palette: {
      type: 'light',
      background: {
        ...defaultTheme.palette.background,
        paperOp: (opacity = 'ff') => `#ffffff${opacity}`
      },
      purple: {
        ...defaultTheme.palette.purple,
        450: '#b8239b',
        550: '#673ab0',
        650: '#a62291',
        750: '#d8d4ed',
        850: '#4d1a6c',
        950: '#561273'
      },
      text: { ...defaultTheme.palette.text },
      action: { ...defaultTheme.palette.action },
      divider: defaultTheme.palette.divider
    },
    overrides: {
      MuiTextField: {
        root: {
          background: '#fcecff'
        }
      },
      MuiButton: {
        root: {
          color: 'white',
          fontSize: '1rem',
          fontWeight: 700,
          background: defaultTheme.palette.background.default,
          textTransform: 'capitalize',
          // borderRadius: '1.5rem',
          width: '100%',
          letterSpacing: '0.03em',
          height: '3rem',
          margin: '1.2rem auto'
        }
      },
      MuiPaper: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
          boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
          borderRadius: 8,
          marginLeft: defaultTheme.spacing(1),
          marginRight: defaultTheme.spacing(1),
          paddingLeft: defaultTheme.spacing(2),
          paddingRight: defaultTheme.spacing(2),
          paddingTop: defaultTheme.spacing(2),
          paddingBottom: defaultTheme.spacing(2)
        }
      },
      MuiTableHead: {
        root: {
          backgroundColor: '#ec417a',
          color: '#fff'
        }
      }
    }
  })
)
