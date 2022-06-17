import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { CarResponseData } from '../../types/ApiResponse';
import './DisplayTable.css';

export default function DisplayTable(props: { carData: CarResponseData }) {
    return (
        <TableContainer component={Paper} sx={{ maxWidth: 'md', margin: '2em auto' }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' }}>Make</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} align="right">
                            Model
                        </TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} align="right">
                            Year
                        </TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} align="right">
                            Colour
                        </TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }} align="right">
                            Mileage (Miles)
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.carData.map((entry, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {entry.make}
                            </TableCell>
                            <TableCell align="right">{entry.model}</TableCell>
                            <TableCell align="right">{`${entry.year}`}</TableCell>
                            <TableCell align="right">{entry.colour}</TableCell>
                            <TableCell align="right">{entry.mileage}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
