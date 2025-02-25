import {
  warningColor,
  primaryColor,
  secondaryColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  defaultFont
} from './styles';

const tableStyle = theme => ({
  warning: {
    color: warningColor
  },
  primary: {
    color: primaryColor
  },
  secondary: {
    color: secondaryColor
  },
  danger: {
    color: dangerColor
  },
  success: {
    color: successColor
  },
  info: {
    color: infoColor
  },
  rose: {
    color: roseColor
  },
  gray: {
    color: grayColor
  },
  right: {
    textAlign: 'right'
  },
  table: {
    marginBottom: '0',
    width: '100%',
    maxWidth: '100%',
    backgroundColor: 'transparent',
    borderSpacing: '0',
    borderCollapse: 'collapse',
    overflow: 'auto'
  },
  tableShoppingHead: {
    fontSize: '0.9em !important',
    textTransform: 'uppercase !important'
  },
  tableHeadFontSize: {
    fontSize: '1.25em !important'
  },
  tableHeadCell: {
    color: 'rgba(0, 0, 0, 0.87)',
    border: 'none !important'
  },
  tableCell: {
    ...defaultFont,
    lineHeight: '1.42857143',
    padding: '12px 8px!important',
    verticalAlign: 'middle',
    fontSize: '1em',
    borderBottom: 'none',
    borderTop: '1px solid #ddd',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      minHeight: '24px',
      minWidth: '32px'
    }
  },
  tableId: {
    width: '80px',
  },
  tableCellTotal: {
    fontWeight: '500',
    fontSize: '1.25em',
    paddingTop: '14px',
    textAlign: 'right'
  },
  tableCellAmount: {
    fontSize: '26px',
    fontWeight: '300',
    marginTop: '5px',
    textAlign: 'right'
  },
  tableResponsive: {
    width: '100%',
    minHeight: '0.1%',
    overflowX: 'auto'
  },
  tableStripedRow: {
    backgroundColor: '#f9f9f9'
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: '#f5f5f5'
    }
  },
  warningRow: {
    backgroundColor: '#fcf8e3',
    '&:hover': {
      backgroundColor: '#faf2cc'
    }
  },
  dangerRow: {
    backgroundColor: '#f2dede',
    '&:hover': {
      backgroundColor: '#ebcccc'
    }
  },
  successRow: {
    backgroundColor: '#dff0d8',
    '&:hover': {
      backgroundColor: '#d0e9c6'
    }
  },
  infoRow: {
    backgroundColor: '#d9edf7',
    '&:hover': {
      backgroundColor: '#c4e3f3'
    }
  },
  naoHaDados: {
    width: '100%',
    textAlign: 'center'
  }
});

export default tableStyle;