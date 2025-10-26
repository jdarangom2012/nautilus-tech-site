(function() {
  try {
    var host = window.location.hostname;
    var isWWW = /^www\./i.test(host);
    var isHTTP = window.location.protocol !== 'https:';
    if (isWWW || isHTTP) {
      var newHost = host.replace(/^www\./i, '');
      var newUrl = 'https://' + newHost + window.location.pathname + window.location.search + window.location.hash;
      window.location.replace(newUrl);
    }
  } catch (_) {
    // noop
  }
})();
