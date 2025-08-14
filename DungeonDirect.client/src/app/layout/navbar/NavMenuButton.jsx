import React, { useState, useRef } from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  menuButtonStyles,
  dropdownPaperStyles,
  dropdownItemStyles,
  menuItemWrapperStyles
} from 'src/app/theme/menuStyles';

export default function NavMenuButton({ title, path, items = [] }) {
  const [hovering, setHovering] = useState(false);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setHovering(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHovering(false);
    }, 100);
  };

  const handleClick = () => {
    navigate(path);
  };

  const handleDropdownClick = (subPath) => {
    navigate(subPath);
    setHovering(false);
  };

  return (
    <Box
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      sx={menuItemWrapperStyles}
    >
      <Button
        sx={menuButtonStyles(hovering)}
        fullWidth
        onClick={handleClick} 
      >
        {title}
      </Button>

      {hovering && (
        <Paper elevation={3} sx={dropdownPaperStyles}>
          {items.map((item, index) => (
            <Box
              key={index}
              sx={dropdownItemStyles}
              onClick={() => handleDropdownClick(item.path)} 
            >
              <Typography variant="body2">{item.label}</Typography>
            </Box>
          ))}
        </Paper>
      )}
    </Box>
  );
}
