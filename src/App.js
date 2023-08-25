import './App.css';
import { useTranslation } from 'react-i18next';
// import moment from 'moment/moment';

function App() {
  const { t, i18n } = useTranslation();
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    // moment.locale('ru');
  }
  return (
    <div className="App">
        <h1>{t('Phrase App Demo')}</h1>
        <h1>{t('Second EN Key')}</h1>
        <h1>{t('This Is first Key from lacal')}</h1>
        <button onClick={() => changeLang('en')}>Change Lang EN</button>
        <br />
        <br />
        <button onClick={() => changeLang('ru')}>Change Lang RU</button>
        <br />
        <br />
        <button onClick={() => changeLang('fr')}>Change Lang FR</button>
    </div>
  );
}

export default App;
