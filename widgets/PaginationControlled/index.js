import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: theme.spacing(5),
    justifyContent: 'center',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const PaginationControlled = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
  );
};

export default PaginationControlled;
