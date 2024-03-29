import React from 'React';
import { createStyles } from '@material-ui/styles';
import { carrosProps } from './carros';


export const carrosBody:React.FC<carrosProps> = ({carros}) =>{ 
    return(
        <table>
            <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                    </StyledTableRow>
                ))}
            </TableBody>
        </table>
    )
}