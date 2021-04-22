//Validation

var Phone = document.getElementById('Phone');
/*var maskOptions = {
  mask: '+{38}000000000',
  lazy: false,  // make placeholder always visible
  placeholderChar: ''     // defaults to '_'
};*/
var phoneMask = IMask(Phone, {
  mask: '+{380}000000000',
  maxLength: 5,
  lazy: false,  // make placeholder always visible
  placeholderChar: '_'     // defaults to '_'
});
var mask = IMask(Phone, maskOptions);