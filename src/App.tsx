import { Box } from '@mui/material';

import { ConverteCurrencyForm } from './comopnents/converteCurrencyForm/converteCurrencyForm';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <ConverteCurrencyForm />
    </Box>
  );
}

export default App;
