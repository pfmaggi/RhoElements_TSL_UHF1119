console.log("comm-polyfill: ACTIVE");

var pfmComm = function (type) {
  var commOpened = false;
  

  return {
    port:      "COM1",
    baudrate:  "115200",
    dataBits:  "8",
    stopBits:  "1",
    parity:    "No Parity",
    handshake: "None",
    endChar:   "CRLF",
    open: function () {
      console.log("Open comm port");
      console.log(" port       = " + comm.port);     
      console.log(" baudrate   = " + comm.baudrate);
      console.log(" dataBits   = " + comm.dataBits);
      console.log(" stopBits   = " + comm.stopBits);
      console.log(" parity     = " + comm.parity);
      console.log(" handshake  = " + comm.handshake);
      console.log(" endChar    = " + comm.endChar);
      commOpened = true;
    },
    commEvent: undefined,
    set writeString(value) { console.log("writeString: '" + value + "'"); },
    set writeBytes(value) { console.log("writeBytes: '" + value + "'"); },

    // this.__defineSetter__("writeString", function(val){
    //     console.log("writeString: '" + val + "'");;
    // }),
    // this.__defineSetter__("writeBytes", function(val){
    //     console.log("writeBytes: '" + val + "'");;
    // }),
    
    polyfire: function (data) {
      if (commOpened == true) {
        console.log(comm.commEvent + " port = " + comm.port);     
        var callback = window[comm.commEvent.split(/[()]/)[0]];
        var typeofCallback = typeof(callback);
        if (callback && typeof(callback) === "function") {
          var argss = comm.commEvent.split(/[()]/)[1]
          if ("'%s'" == argss) {
            console.log("Comm callback with string syntax");      
            // var now = new Date().toString().match(/\d+:\d+:\d+/)[0];
            // var cbArgs = {
            //   "data": barcode , 
            //   "source": scanner.enabled, 
            //   "type": "EAN13", 
            //   "time": now,
            //   "length": barcode.toString().length,
            //   "event": "Decode",
            // };
            callback(data);
          } else {
            console.log("Comm callback with unknown argument syntax");    
            console.log("*** NOT IMPLEMENTED ***");       
          }
        }
          } else {
            console.log("comm not enabled");
          }
        },
  };
};

window.comm = new pfmComm();
