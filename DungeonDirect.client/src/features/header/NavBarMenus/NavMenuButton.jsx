import React, { useState, useRef } from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';
import {
  menuButtonStyles,
  dropdownPaperStyles,
  dropdownItemStyles,
  menuItemWrapperStyles,
} from '/src/theme/menuStyles';

export default function NavMenuButton({ title, items }) {
  const [hovering, setHovering] = useState(false);
  const timeoutRef = useRef(null);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setHovering(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHovering(false);
    }, 100);
  };

  return (
    <Box
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      sx={{ ...menuItemWrapperStyles }} // fill space evenly
    >
      <Button sx={menuButtonStyles(hovering)} fullWidth>
        {title}
      </Button>

      {hovering && (
        <Paper elevation={3} sx={dropdownPaperStyles}>
          {items.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Box sx={dropdownItemStyles}>
                <Typography variant="body2">{item.label}</Typography>
              </Box>
            </NavLink>
          ))}
        </Paper>
      )}
    </Box>
  );
}
