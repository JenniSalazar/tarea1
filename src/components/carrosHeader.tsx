import React from 'React';
import { createStyles } from '@material-ui/styles';
import { carrosProps } from './carros';

export interface headProps{
    header : string[];
}

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.commo.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);
          
const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow); 

export const carrosHeader:React.FC<carrosProps> = ({carros}) =>{ 
    return(
		<table>
            <TableHead>
                <TableRow>
                    <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                    <StyledTableCell align="right">Calories</StyledTableCell>
                    <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                    <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                    <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                </TableRow>
            </TableHead>
        </table>
    )
}