function safariJSLoader (text, s_URL, funcToRun) {
  var D                                   = document;
  var scriptNode                          = D.createElement ('script');
  scriptNode.type                         = "text/javascript";
  if (text)       scriptNode.textContent  = text;
  if (s_URL)      scriptNode.src          = s_URL;
  if (funcToRun)  scriptNode.textContent  = '(' + funcToRun.toString() + ')()';

  var targ = D.getElementsByTagName ('head')[0] || D.body || D.documentElement;
  targ.appendChild (scriptNode);
}

safariJSLoader(null, null, fixFocus);