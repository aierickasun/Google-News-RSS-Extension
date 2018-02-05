function fetch_feed(url, callback){
    var xhttp = new XMLHttpRequest();
    // When answer is received from request...
    xhttp.onreadystatechange = function(data){
      // if readyState == 4(request finished and response ready) and status==200(success)
      if (this.readyState == 4){
        if (this.status == 200){
          // Send data and control back to fetch.js via callback.
          var data = this.responseText;
          callback(data);
        } else {
          callback(null);
        }
      }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}
/* As an aside and for future reference, the jquery was is as follows:
$.ajax({
  type     : "GET",
  url      : "/path/to/data.xml",
  dataType : "xml",
  success  : function(xmlData){
  var totalNodes = $('*',xmlData).length; // count XML nodes
  alert("This XML file has " + totalNodes);
  },
  error    : function(){
       alert("Could not retrieve XML file.");
  }
 });
*/
//
function onRequest(request, sender, callback){
  if (request.action == 'fetch_feed'){
    fetch_feed(request.url, callback);
  }
}
// Wire up listener.
chrome.extension.onRequest.addListener(onRequest);
