import i18next from 'i18next';
import ptBr from './assets/i18n/ptBr.json';

i18next.init({
  lng: 'ptBr',
  debug: false,
  resources: {
    ptBr: {
      translation: ptBr,
    },
  },
});

export default i18next;
