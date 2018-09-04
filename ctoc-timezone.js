"use strict";
CtoCTimezone = (function() {
    var initiateConversion = function(){
      nodesToConvert=document.querySelectorAll('[data-ctoc-timezone="server"]');
      for(i = 0; i < nodesToConvert.length; i++){
        convertToClient(nodesToConvert[i]);
      }
    };
    var convertToClient = function(node){
      node.innerHTML=""
      timeToConvert=node.getAttribute('data-ctoc-time');
      clientTime = new Date(timeToConvert);
      if(node.getAttribute('data-ctoc-req-zone')!="")
      {
        // need to handle this to convert to zonal specific timezone 
        clientTime = node.getAttribute('data-ctoc-req-zone')
      }
      result=clientTime;
      if(node.getAttribute('data-ctoc-callback')!=""){
        executeCallback(node.getAttribute('data-ctoc-callback') , clientTime);
      }
      node.innerHTML=result;
      node.setAttribute("data-ctoc-timezone","client");
    };
    var executeCallback = function(callbackString,ctocTime){
      var namespacesCheck = callbackString.split(".");
      var functionToCall = namespacesCheck.pop();
      var context= window;
      for(var i = 0; i < namespacesCheck.length; i++) {
        context = context[namespacesCheck[i]];
      }
      return context[functionToCall].apply(context, ctocTime);
    };

    var ctoCTimezone = {};
    ctoCTimezone.runInstaLoad =function(){
      initiateConversion();
    };
    return ctoCTimezone;
})();