function compile() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;

  document.body.onkeyup = function () {
    code.open();
    code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
    code.close();
  };
}



function save() {
    var html = document.getElementById("html");
    saveText(html.value);
}



function saveText(text) {
  var data = new Blob([text], { type: "text/html" });
  var textFile = window.URL.createObjectURL(data);
  var a = document.createElement("a");
  a.setAttribute("id", "download");
  a.setAttribute("href", textFile);
  a.setAttribute("download", "index");
  a.click();
  document.body.appendChild(a);
}

compile();
