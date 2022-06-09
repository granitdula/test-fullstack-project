import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import './DisplayTable.css';

export default function DisplayTable() {
    return (
        <TableContainer component={Paper} sx={{ maxWidth: 'md', margin: '2em auto' }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Model</TableCell>
                        <TableCell align="right">Make</TableCell>
                        <TableCell align="right">Year</TableCell>
                        <TableCell align="right">Colour</TableCell>
                        <TableCell align="right">Mileage (Miles)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* {rows.map((row) => (
                        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))} */}
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            Golf V
                        </TableCell>
                        <TableCell align="right">Volkswagen</TableCell>
                        <TableCell align="right">2010</TableCell>
                        <TableCell align="right">Silver</TableCell>
                        <TableCell align="right">100000</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
