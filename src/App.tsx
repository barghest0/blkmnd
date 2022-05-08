import Router from './shared/router/Router';
import GlobalStyle from './shared/styles/global.styles';
import * as S from './App.style';
import './shared/styles/scss/index.scss';

const App = () => {
  return (
    <S.App>
      <Router />
      <GlobalStyle />
    </S.App>
  );
};

export default App;
