import { FC, SyntheticEvent, useState } from 'react';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import * as S from './ShareModal.style';

import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import { ModalsTypes } from '../../redux/modals/types';

import Modal from '../Modal/Modal';
import Preloader from '../Preloader/Preloader';
import ModalContainer from '../ModalContainer/ModalContainer';
import { Tab, Tabs } from '@mui/material';

const ShareModal: FC = () => {
  const { isShareOpen, beat } = useTypedSelector(state => state.modals);
  const [tab,setTab] = useState('share');
  const [copiedState, setCopiedState] = useState({
    value: '',
    isCopied: false,
  });

  const url = `http://localhost:8080/beats/${beat?.id}`;

  const onCopyToClipboard = () => {
    setCopiedState({ value: url, isCopied: true });
  };

  const onTabChange = (_: SyntheticEvent,tab : string) => {
    setTab(tab);
  };

  const onCopyClick = () => {
    if (copiedState.isCopied) {
      setCopiedState({ value: '', isCopied: false });
    }
  };

  return (
    <S.ShareModal>
      <ModalContainer isOpen={isShareOpen} modalType={ModalsTypes.share}>
        <S.Modal>
          {!beat ? (
            <Preloader />
          ) : (
            <Modal
              isOpen={isShareOpen}
              title={`Share: ${beat.title}`}
              modalType={ModalsTypes.share}
            >
              <S.Content>
                <S.Tabs>
                  <Tabs
                    value={tab}
                    onChange={onTabChange}
                    indicatorColor="secondary"
                  >
                    <Tab value="share" label="SHARE URL" />
                    <Tab value="embed" label="EMBED" />
                  </Tabs>
                </S.Tabs>
                <S.TabsContent>
                  <S.TabPanel hidden={tab!== 'share'}>
                    <S.UrlField>
                      <S.Field
                        name="url"
                        type="string"
                        variant="outlined"
                        label="URL"
                        value={url}
                      />
                      <CopyToClipboard
                        text={copiedState.value}
                        onCopy={onCopyToClipboard}
                      >
                        <S.CopyUrl onClick={onCopyClick}>
                          {copiedState.isCopied ? (
                            <DoneOutlinedIcon fontSize="small" />
                          ) : (
                            <FileCopyOutlinedIcon fontSize="small" />
                          )}
                        </S.CopyUrl>
                      </CopyToClipboard>
                    </S.UrlField>
                  </S.TabPanel>
                  <S.TabPanel hidden={tab!== 'embed'}>iframe</S.TabPanel>
                </S.TabsContent>
              </S.Content>
            </Modal>
          )}
        </S.Modal>
      </ModalContainer>
    </S.ShareModal>
  );
};

export default ShareModal;
