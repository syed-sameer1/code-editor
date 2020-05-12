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

$(document).ready(function () {
  $switch = true;
  $("#switch").click(function () {
    if ($switch) {
      $("main").css("flex-direction", "column");
      $("#editors").css({
        "flex-direction": "row",
        height: "40%",
        width: "100%",
      });
      $("#display").css({ height: "60%", width: "99%" });
      $switch = false;
    } else {
      $("main").css("flex-direction", "row");
      $("#editors").css({
        "flex-direction": "column",
        height: "100%",
        width: "30%",
      });
      $("#display").css({ height: "100%", width: "70%" });
      $switch = true;
    }
  });
});
