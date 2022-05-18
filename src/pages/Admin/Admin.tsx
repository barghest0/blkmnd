import { GridColDef } from '@mui/x-data-grid';

import { useEffect } from 'react';
import { GridRowParams } from '@mui/x-data-grid';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import { Tag } from '../../redux/beats/types';
import { Beat } from '../../redux/beats/types';
import * as S from './Admin.style';
import Image from '../../components/Image/Image';
import { useNavigate } from 'react-router-dom';
import { RouterPaths } from '../../shared/router/types';

const beatsDataColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Id',
    width: 30,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 320,
  },
  {
    field: 'tags',
    headerName: 'Tags',
    width: 150,
    valueGetter: params => {
      const tags: string[] = [];
      params.value.forEach((tag: Tag) => tags.push(tag.name));
      return tags.join(', ');
    },
  },
  {
    field: 'musician',
    headerName: 'Musician',
    width: 150,
    valueGetter: params => {
      return params.value.name;
    },
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 100,
  },
  {
    field: 'bpm',
    headerName: 'BPM',
    width: 100,
  },
  {
    field: 'time',
    headerName: 'Time',
    width: 100,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 100,
  },
  {
    field: 'image',
    headerName: 'Image',
    width: 80,
    renderCell: params => <Image image={params.value} />,
  },
];

const Admin = () => {
  const { beats } = useTypedSelector(state => state.beats);
  const { getAllBeats } = useActions();
  const navigate = useNavigate();

  useEffect(() => {
    getAllBeats();
  }, []);

  const onBeatRowDoubleClick = (params: GridRowParams<Beat>) => {
    const beat = params.row;
    navigate(`${RouterPaths.crudBeat}/${beat.id}`);
  };

  return (
    <S.Admin>
      <S.Container>
        <S.Title>Admin panel</S.Title>
        <S.BeatsData>
          <S.ProductTitle>
            Beats
            <S.AddProduct to={RouterPaths.crudBeat}>
              + Add new beat
            </S.AddProduct>
          </S.ProductTitle>
          <S.GridData
            autoHeight
            rows={beats}
            columns={beatsDataColumns}
            pageSize={10}
            onRowDoubleClick={onBeatRowDoubleClick}
            rowHeight={60}
          />
        </S.BeatsData>
      </S.Container>
    </S.Admin>
  );
};

export default Admin;
