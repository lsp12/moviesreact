import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import { IMovie } from '../interface';

interface IMoviesTable {
    data: IMovie[];
}

const MoviesTable: React.FC<IMoviesTable> = (props) => {
  const {data} = props;
  const [rows, setRows] = useState<IMovie[]>([]);
  useEffect(() => {
      setRows(data)
  }, [props])
  return (
    <TableContainer component={Paper}>
      <TableCell sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Duración (minutos)</TableCell>
            <TableCell align="right">Género</TableCell>
            <TableCell align="right">Acciones)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id || ''}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.duration}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableCell>
    </TableContainer>
  );
};

export default MoviesTable;
