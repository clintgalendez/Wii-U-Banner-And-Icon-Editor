import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

function App() {
    return (
        <Stack spacing={5} sx={{ alignItems: 'center', width: '100%'}}>
            <Box component="section" sx={{
                p: 2,
                border: 1,
                borderColor: 'grey.500',
                borderRadius: '16px',
                boxShadow: 3,
                width: '97%',
            }}>
                <Typography variant="h6">
                    <Box component="span" sx={{ color: 'primary.main' }}><b>Wii U</b></Box> Banner and Icon Editor
                </Typography>
            </Box>
            <Stack direction="row" spacing={2} sx={{
                p: 2,
                border: 1,
                borderColor: 'grey.500',
                borderRadius: '16px',
                boxShadow: 3,
                width: '97%',
                height: '500px'
            }}>
                <Box component="section" sx={{
                    p: 2,
                    border: 1,
                    borderColor: 'grey.500',
                    borderRadius: '16px',
                    boxShadow: 3,
                    width: '97%',
                }}>
                </Box>
                <Box component="section" sx={{
                    p: 2,
                    border: 1,
                    borderColor: 'grey.500',
                    borderRadius: '16px',
                    boxShadow: 3,
                    width: '97%',
                }}>
                </Box>
            </Stack>
        </Stack>
    );
}

export default App;