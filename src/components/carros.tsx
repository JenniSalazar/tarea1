import React from 'react';
import Table from '@material-ui/core/Table';
import {carrosHeader, carrosHeader} from './carrosHeader';
import {carrosBody, carrosBody} from './carrosBody';
import { makeStyles } from '@material-ui/core';


export type carros = {
    marca:string;
    modelo:string;
    pasajeros:number;

}

export interface carrosProps{
    carros : carros[];
    
}

const headerName:string[] = ['Marca','Modelo', 'Pasajeros']

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
});

export const carrosTable:React.FC<carrosProps> = ({carros}) =>{
    return(   
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                
            </Table>
        </TableContainer>        
    ) 

}