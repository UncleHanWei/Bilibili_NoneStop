var s = document.createElement('script');
s.src = chrome.runtime.getURL('script.js');
s.onload = function() { this.remove(); };
// see also "Dynamic values in the injected code" section in this answer
(document.head || document.documentElement).appendChild(s);

// Reference: https://stackoverflow.com/questions/9515704/access-variables-and-functions-defined-in-page-context-from-an-extension/9517879#9517879