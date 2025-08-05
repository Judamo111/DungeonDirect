export const headerToolbarStyles = (theme) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#754518ff' : 'default',
  color: theme.palette.mode === 'light' ? '#fff' : 'inherit',
});

export const subToolbarStyles = (theme) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#a86f3aff' : 'default',
  color: theme.palette.mode === 'light' ? '#fff' : 'inherit',
});

export const logoStyles = {
  height: 50,
  width: 'auto',
  mr: 2,
  border: 2,
  borderColor: 'brown',
  borderRadius: '10%',
};

export const navLinkStyles = {
  cursor: 'pointer',
  fontSize: '14px',
  mr: 1,
};


export const cartTextStyles = {
  mr: 0.8,
  fontSize: '14px',
  color: 'white',
};

export const cartIconStyles = {
  color: 'white',
};


export const sectionBoxStyles = {
  display: 'flex',
  alignItems: 'center',
};

export const menuBoxStyles = {
  display: 'flex',
  gap: 2,
  mr: 2,
};

export const cartIconButtonStyles = {
  mr: 1,
  '&:hover .cart-hoverable': {
    color: '#f7e545ff', 
  },
};

export const cartContainerStyles = {
  display: 'flex',
  alignItems: 'center',
};

export const accountIconButtonStyles = {
  mr: 1,
  '&:hover .account-hoverable': {
    color: '#f7e545ff', 
  },
};

export const accountTextStyles = {
  mr: 1,
  fontSize: '13px',
  color: 'white', 
};

export const accountIconStyles = {
  color: 'white',
  transform: 'scale(1.3)',
}