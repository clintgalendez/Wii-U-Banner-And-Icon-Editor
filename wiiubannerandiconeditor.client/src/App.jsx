import * as React from 'react';
import { StaticCanvas, FabricText } from 'fabric'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


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
                <Stack spacing={2} sx={{
                    p: 2,
                    width: '97%',
                    alignItems: 'center'
                }}>
                    <Box component="section" sx={{
                        p: 2,
                        border: 1,
                        borderColor: 'grey.500',
                        borderRadius: '16px',
                        boxShadow: 3,
                        width: '97%',
                        height: '100%'
                    }}>
                    </Box>
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                        <Button>Upload Image</Button>
                        <Button>Download Wii U Icon</Button>
                    </ButtonGroup>
                </Stack>
                <Stack spacing={2} sx={{
                    p: 2,
                    width: '97%',
                    alignItems: 'center'
                }}>
                    <Box component="section" sx={{
                        p: 2,
                        border: 1,
                        borderColor: 'grey.500',
                        borderRadius: '16px',
                        boxShadow: 3,
                        width: '97%',
                        height: '100%'
                    }}>
                    </Box>
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                        <Button>Upload Image</Button>
                        <Button>Download Wii U Banner</Button>
                    </ButtonGroup>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default App;