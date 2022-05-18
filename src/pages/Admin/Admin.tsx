import { GridColDef } from '@mui/x-data-grid';
import { Tab, Tabs } from '@mui/material';
import { GridRowParams } from '@mui/x-data-grid';

import { SyntheticEvent, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import { Tag } from '../../redux/beats/types';
import { Beat } from '../../redux/beats/types';
import Image from '../../components/Image/Image';

import * as S from './Admin.style';
import {
  CrudActions,
  CrudNames,
  CrudPaths,
  RouterPaths,
} from '../../shared/router/types';

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

const soundKitsDataColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Id',
    width: 30,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 300,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 100,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 500,
  },
  {
    field: 'image',
    headerName: 'Image',
    width: 80,
    renderCell: params => <Image image={params.value} />,
  },
];

const collabsDataColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Id',
    width: 30,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 300,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 100,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 500,
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
  const { getAllBeats, getAllCollabs, getAllSoundKits } = useActions();

  const { collabs } = useTypedSelector(state => state.collabs);
  const { soundKits } = useTypedSelector(state => state.soundKits);

  const [tab, setTab] = useState('beats');

  const navigate = useNavigate();

  useEffect(() => {
    getAllBeats();
    getAllCollabs();
    getAllSoundKits();
  }, []);

  const onRowDoubleClick = (params: GridRowParams<Beat>) => {
    const product = params.row;
    navigate(`${RouterPaths.admin}/${tab}/${CrudPaths.update}/${product.id}`);
  };

  const onTabChange = (_: SyntheticEvent, tab: RouterPaths) => {
    setTab(tab);
  };

  return (
    <S.Admin>
      <S.Container>
        <S.Title>Admin panel</S.Title>
        <S.ProductHeader>
          <S.Tabs>
            <Tabs value={tab} onChange={onTabChange} indicatorColor="secondary">
              <Tab value={'beats'} label="BEATS" />
              <Tab value={'sound-kits'} label="SOUND KITS" />
              <Tab value={'collabs'} label="COLLABS" />
            </Tabs>
          </S.Tabs>
          <S.AddProduct
            to={`${RouterPaths.admin}/${tab}/${CrudActions.create}`}
          >
            + Add new product
          </S.AddProduct>
        </S.ProductHeader>
        <S.GridContainer hidden={tab !== 'beats'}>
          <S.GridData
            autoHeight
            rows={beats}
            columns={beatsDataColumns}
            pageSize={10}
            onRowDoubleClick={onRowDoubleClick}
            rowHeight={60}
            rowsPerPageOptions={[10]}
          />
        </S.GridContainer>
        <S.GridContainer hidden={tab !== 'sound-kits'}>
          <S.GridData
            autoHeight
            rows={soundKits}
            columns={soundKitsDataColumns}
            pageSize={10}
            onRowDoubleClick={onRowDoubleClick}
            rowHeight={60}
            rowsPerPageOptions={[10]}
          />
        </S.GridContainer>
        <S.GridContainer hidden={tab !== 'collabs'}>
          <S.GridData
            autoHeight
            rows={collabs}
            columns={collabsDataColumns}
            pageSize={10}
            onRowDoubleClick={onRowDoubleClick}
            rowHeight={60}
            rowsPerPageOptions={[10]}
          />
        </S.GridContainer>
      </S.Container>
    </S.Admin>
  );
};

export default Admin;
