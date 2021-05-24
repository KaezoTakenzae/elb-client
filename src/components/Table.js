import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  root: {
    width: '100%',
    borderRadius: 8,
    borderCollapse: 'collapse',
    border: 'solid 1px grey',
    textAlign: 'center'
  },
  row: {
    backgroundColor: 'lightgrey',
  },
  cell: {
    padding: 8,
    borderBottom: '1px solid grey',
  }
});

const Table = ({columns, data}) => {
  const classes = useStyles();
  if (data.length === 0) return null;

   return (
     <table className={classes.root}>
       <thead>
         <tr className={classes.row}>
           {columns.map((column, i) => (
             <th key={i} className={classes.cell}>
               {column.name}
             </th>
           ))}
         </tr>
       </thead>
       <tbody>
         {data.map((row, i) => {
           return (
             <tr key={i}>
               {columns.map((cell, i) => {
                 return (
                   <td key={i} className={classes.cell}>
                     {row[cell.accessor]}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
   )
};

export default Table;
