import React from 'react';
// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, CssBaseline, AppBar, Toolbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, TablePagination } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import View2 from '../View2/View2';

const useStyles = makeStyles(() => ({
  logo: {
    marginRight: '10px',
  },
  header: {
    margin: '40px',
  },
  quickActions: {
    marginTop: '20px',
    marginBottom: '15px',
    // alignContent: 'left',
  },
  actionButtons: {
    margin: '10px',
  },
  tableHeader: {
    margin: '15px',
  },
  table: {
    marginTop: '5%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  backButton: {
    marginLeft: 'auto',
    color: 'white',
  },
  footer: {
    backgroundColor: '#eee',
    padding: '10px',
    width: '100%',
    position: 'absolute',
    bottom: '0',
  }
}));

const columns = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'status',
    label: 'Status',
  },
  {
    id: 'followup',
    label: 'Followed Up',
  },
  {
    id: 'view',
    label: 'View',
  },
];

function createData(name, status, followup, view) {
  return { name, status, followup, view };
}

const rows = [
  createData('Megan Pete', 'Good'),
  createData('Christina Milian', 'Poor'),
  createData('Sean Combs', 'Fair'),
  createData('Aubrey Graham', 'Good'),
  createData('Shawn Carter', 'Good'),
  createData('Amala Diamini', 'Fair'),
  createData('Belcalis Almanzar', 'Poor'),
];


function View1(props) {
  const logo = "https://www.nicepng.com/png/full/1009-10098390_memora-health-heart.png";
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  console.log(props);
  console.log(props.name);

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <img src={logo} alt="" height="30px" className={classes.logo} />
          <Typography>Memora Provider Portal</Typography>
          <Button
            className={classes.backButton}
            component={Link} to="/"
            variant="outlined"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        {/* <Typography className={classes.header} variant="h4">Hello {props.name}.</Typography> */}
        <Typography className={classes.quickActions} variant="h5">Quick Actions</Typography>
        <Button
          className={classes.actionButtons}
          variant="contained"
          color="primary"
          component={Link} to="/view2"
        >
          Add Patient
        </Button>
        <Button
          className={classes.actionButtons}
          color="primary"
          variant="contained"
        >
          Update Patient
        </Button>
        <Button className={classes.actionButtons} variant="contained">Delete Patient</Button>

        <div className={classes.table}>
          <Typography className={classes.tableHeader} variant="h5">Patient Dashboard</Typography>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table" size="small">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell><Checkbox /></TableCell>
                      <TableCell><View2 /></TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>

      </main>
      <footer className={classes.footer}>
        <Typography variant="h6">Memora Health</Typography>
        <Typography variant="subtitle2">info@memorahealth.com</Typography>
        <Typography variant="subtitle2">111 Main St San Francisco</Typography>
      </footer>
    </>
  )
}

export default View1;