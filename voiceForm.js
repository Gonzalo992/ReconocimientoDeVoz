
if (annyang) {
  var comandos = {
    'nombre *tag': function(variable) {
      let input_name=document.getElementById("recipient-name");
      input_name.value=variable;
    },
    'trabajo *tag': function(variable){
      let input_trabajo=document.getElementById("message-text");
      input_trabajo.value=variable;
    }
  };
  annyang.addCommands(comandos);
  annyang.setLanguage("es-MX");
  annyang.start();
}