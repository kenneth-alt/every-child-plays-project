import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import React from 'react';

export const MuiTable = () => {
    return(
    <TableContainer component={Paper}>
        <Table aria-label='simple-table'>
            <TableHead>
            <TableRow>
            <TableCell><b>Playground</b></TableCell>
            <TableCell><b>Quadrant</b></TableCell>
            <TableCell><b>Address</b></TableCell>
            <TableCell><b>Accessibility Features</b></TableCell>
            <TableCell><b>Misc. Info</b></TableCell>
            <TableCell><b>Hours</b></TableCell>
            </TableRow>
            </TableHead>

            {
                tableData.map(row => (
                    <TableRow 
                    key = {row.playground}
                    >
                        <TableCell>{row.playground}</TableCell>
                        <TableCell>{row.quadrant}</TableCell>
                        <TableCell>{row.address}</TableCell>
                        <TableCell>{row.features}</TableCell>
                        <TableCell>{row.info}</TableCell>
                        <TableCell>{row.hours}</TableCell>
                    </TableRow>
                ))
            }
            <TableBody></TableBody>
        </Table>
    </TableContainer>
    )   
}

const tableData = 
[
    {
        "playground":"Edworthy",
        "quadrant":"Southwest",
        "address":"5050 Spruce Dr. SW",
        "features":"",
        "info":"",
        "hours":""
    },
    {
        "playground":"Elliston",
        "quadrant":"Southeast",
        "address":"1827 68 St. SE",
        "features":"",
        "info":"",
        "hours":""
    },
    {
        "playground":"Hidden Hut",
        "quadrant":"Northwest",
        "address":"10504 Hidden Valley Dr NW",
        "features":"",
        "info":"",
        "hours":""
    },
    {
        "playground":"South Glenmore Park",
        "quadrant":"Southwest",
        "address":"8415 24 St SW",
        "features":"",
        "info":"",
        "hours":""
    },
    {
        "playground":"North Glenmore Park",
        "quadrant":"Southwest",
        "address":"7305 Crowchild Trail SW T3E 5N5",
        "features":"",
        "info":"",
        "hours":""
    },
    {
        "playground":"Ramsay Inclusive Park",
        "quadrant":"Southeast",
        "address":"Macdonald Ave SE & Bellevue Ave SE",
        "features":"",
        "info":"",
        "hours":""
    },
    {
        "playground":"Sandy Beach Park",
        "quadrant":"Southwest",
        "address":"4500 14A St. SW",
        "features":"",
        "info":"",
        "hours":""
    },
    {
        "playground":"Somerset Park",
        "quadrant":"Southwest",
        "address":"999 Somerset Square SW",
        "features":"",
        "info":"",
        "hours":""
    },
    {
        "playground":"Ted Harrison Park",
        "quadrant":"Northeast",
        "address":"Taralake Way NE & Taradale Dr NE",
        "features":"",
        "info":"",
        "hours":""
    },
    {
        "playground":"Vivo Inclusive Park",
        "quadrant":"Northeast",
        "address":"Country Village Rd NE & Country Village Way NE",
        "features":"",
        "info":"",
        "hours":""
    },
    {
        "playground":"Thorncliffe-Greenview",
        "quadrant":"Northeast",
        "address":"NB Centre ST N @, 54 Ave NE T2K 0T3",
        "features":"",
        "info":"",
        "hours":""
    },
    {
        "playground":"Shouldice Inclusive Park",
        "quadrant":"Northwest",
        "address":"4900 Monserrat Dr. NW",
        "features":"",
        "info":"",
        "hours":""
    },
    {
        "playground":"Bridgeland Community Center Playground",
        "quadrant":"Northeast",
        "address":"917 Center Ave NE T2E 0C6",
        "features":"",
        "info":"",
        "hours":""
    },
    {
        "playground":"Alberta Children's Hospital Playground",
        "quadrant":"Northwest",
        "address":"2888 Shaganappi Trail NW T3B 6A8",
        "features":"",
        "info":"",
        "hours":""
    },
    {
        "playground":"Variety Spray Park and Playground",
        "quadrant":"Southwest",
        "address":"8415 24 St SW T2V 0K7",
        "features":"",
        "info":"",
        "hours":""
    },
    {
        "playground":"Renfew Park Playground",
        "quadrant":"Northeast",
        "address":"811 Radford Road NE T2E 0R7",
        "features":"",
        "info":"",
        "hours":""
    },
    {
        "playground":"Nellie Bean Playground",
        "quadrant":"Southeast",
        "address":"14th St, and St. Monica Ave SE T2G",
        "features":"",
        "info":"",
        "hours":""
    },
    {
        "playground":"Mayfair Playground",
        "quadrant":"Southwest",
        "address":"Malibou Rd, & Medford Pl. SW T2V",
        "features":"",
        "info":"",
        "hours":""
    },
    {
        "playground":"Haultain Park Playground (13th Avenue Park)",
        "quadrant":"Southwest",
        "address":"225 13th Ave SW T2R 1N8",
        "features":"",
        "info":"",
        "hours":""
    },
    {
        "playground":"Cambrian Heights Park Playground - Cambrian Heights",
        "quadrant":"Northwest",
        "address":"22 Celtic Rd NW T2K 1S7",
        "features":"",
        "info":"",
        "hours":""
    },
    {
        "playground":"St. Andrews Heights Community Playground",
        "quadrant":"Northwest",
        "address":"2634 12 Ave NW T2N 1K6",
        "features":"",
        "info":"",
        "hours":""
    },
]
