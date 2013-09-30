Javascript library for RhoElements v2 and v4 to talk with TSL's UHF 1119 accessory
--

testing is possible in Chrome.

Open the sample page and the inspector on the console tab.
Once the comm.polyfiller printed the log for the comm.open call, you can type the command:


  comm.polyfire("CS: .vr\nMF: TSL UK Ltd.\nUS: 1119-01-003002\nPV: 2.1.0\nUF: 3.3.0\nUB: 1.3.0\nRS: 116-ET-012813\nRF: 2.6.0\nRB: 1.2.0\nOK:\n");

this will execute the callback passing the given string as the argument.

 