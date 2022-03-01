import React , {useEffect, useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import axios from 'axios';
import Loading from './loading';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#3f51b5",
      color: theme.palette.common.white,
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
  

  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });


const TableWrapper = styled(TableContainer)`

width:80%;


`; 

function TableUI(props) {

 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(true);

  const getData = async () =>{
     await axios.get('https://620fa753ec8b2ee283481997.mockapi.io/Iclinic/clinicas')
    .then( (data)=> {setData(data.data); setLoading(false)})
    .catch( (err) => console.log(err));
  }
  
  
  useEffect(() => {
    getData();
  }, []);
  
 
    const classes = useStyles();

  return (
    <>
  {  loading ?  <Loading/>: (<TableWrapper component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell align="right">CPF</StyledTableCell>
            <StyledTableCell align="right">Estado</StyledTableCell>
            <StyledTableCell align="right">Municipio</StyledTableCell>
            <StyledTableCell align="right">Rua</StyledTableCell>
            <StyledTableCell align="right">CapitalSocial</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {item.nome}
              </StyledTableCell>
              <StyledTableCell align="right">{item.cpf}</StyledTableCell>
              <StyledTableCell align="right">{item.Estado}</StyledTableCell>
              <StyledTableCell align="right">{item.municipio}</StyledTableCell>
              <StyledTableCell align="right">{item.rua}</StyledTableCell>
              <StyledTableCell align="right">{item.capital}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
  </TableWrapper>)}
  </>
  )
}

export default TableUI