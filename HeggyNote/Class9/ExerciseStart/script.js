/**
 * Created by viveksh2 on 6/13/16.
 */
function getRequest() {
  var request;
    if(window.XMLHttpRequest){
        request  = new XMLHttpRequest();
    }else{
        request = new ActiveXObject();
    }
   return request;
}



