import React, { ReactNode } from 'react';
import Typography from '@mui/material/Typography/Typography';

interface Props {
  children: ReactNode;
}

const CustomLabel: React.FC<Props> = ({ children }) => {
  return (
    <Typography sx={{ fontSize: 20, textAlign: 'center' }} color="text.secondary" gutterBottom>
      {children}
    </Typography>
  );
}

export default CustomLabel;