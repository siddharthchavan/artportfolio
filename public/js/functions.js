function print(text, outputID) {
  var output = document.getElementById(outputID);
  output.innerHTML(text);
}

function getClass(className, node) {
  node = document.getElementsByClassName(className);
  return classElements;
}

function getID(IDname, varName) {
  varName = document.getElementById(IDname);
  return varName
}
