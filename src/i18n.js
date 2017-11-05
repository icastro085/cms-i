import i18next from 'i18next';
import ptBr from 'assets/i18n/ptBr';

i18next.init({
  lng: 'ptBr',
  debug: false,
  resources: {
    ptBr: {
      translation: ptBr
    }
  }
}, function(err, t) {
  // initialized and ready to go!
  //document.getElementById('output').innerHTML = i18next.t('key');
});

export default i18next;