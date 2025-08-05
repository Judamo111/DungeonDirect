
export const menuButtonStyles = (hovering) => ({
  color: hovering ? 'black' : 'white',
  backgroundColor: hovering ? '#f5f5f5' : 'transparent',
  fontWeight: 'bold',
  fontSize: '14px',
  px: 4,
  borderRadius: 0,
  transition: 'all 0.2s ease',
  width: '100%',
  height: '100%',
  minHeight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  '&:hover': {
    backgroundColor: '#f5f5f5',
    color: 'black',
    lineHeight: '1',
  },
});

export const dropdownPaperStyles = (theme) => ({
  position: 'absolute',   
  top: '100%',            
  left: '17%',               
  zIndex: 10,
  minWidth: '60%',      
  borderRadius: 0,
  boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#2e2e2e' : '#fff', // adapts to theme
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
});

export const dropdownItemStyles = (theme) => ({
  px: 2,
  py: 1,
  cursor: 'pointer',
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
});


export const navMenuButtonContainerStyles = {
  position: 'relative',
  flex: 1,
  height: '100%',
};

export const menuItemWrapperStyles = {
  height: '100%',      
  display: 'flex',       
  alignItems: 'stretch',
  position: 'relative',
};