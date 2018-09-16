export function print(text, outputID) {
  var output = document.getElementById(outputID);
  output.innerHTML(text);
}

export function getClass(className, node) {
  node = document.getElementsByClassName(className);
  return classElements;
}

export function getID(IDname, varName) {
  varName = document.getElementById(IDname);
  return varName
}
