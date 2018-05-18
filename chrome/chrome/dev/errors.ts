/* © 2016-2018 FlowCrypt Limited. Limitations apply. Contact human@flowcrypt.com */

'use strict';

tool.catch.try(() => {

  Store.get_global(['errors']).then(storage => {
    if(storage.errors && storage.errors.length) {
      let errors = ('<p>' + storage.errors.join('</p><br/><p>') + '</p>').replace(/\n/g, '<br>');
      $('.pre').html(errors);
    }
  });

  $('.clear').click(() => Store.remove(null, ['errors']).then(() => window.location.reload()));

})();