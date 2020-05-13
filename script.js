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

$("#p_save").click(function () {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");

  if (
    $("#c_html").is(":checked") ||
    $("#c_css").is(":checked") ||
    $("#c_js").is(":checked")
  ) {
    if ($("#c_html").is(":checked")) {
      var htmlName = $("#i_html").val();
      saveHtml(html.value, htmlName);
    }
    if ($("#c_css").is(":checked")) {
      var cssName = $("#i_css").val();
      saveCss(css.value, cssName);
    }
    if ($("#c_js").is(":checked")) {
      var jsName = $("#i_js").val();
      saveJs(js.value, jsName);
    }
  } else {
    $("#error").css("display", "block");
  }
});

function saveHtml(text, name) {
  var data = new Blob([text], { type: "text/html" });
  var textFile = window.URL.createObjectURL(data);
  var a = document.createElement("a");
  a.setAttribute("id", "download");
  a.setAttribute("href", textFile);
  a.setAttribute("download", name);
  a.click();
  document.body.appendChild(a);
}
function saveCss(text, name) {
  var data = new Blob([text], { type: "text/css" });
  var textFile = window.URL.createObjectURL(data);
  var a = document.createElement("a");
  a.setAttribute("id", "download");
  a.setAttribute("href", textFile);
  a.setAttribute("download", name);
  a.click();
  document.body.appendChild(a);
}
function saveJs(text, name) {
  var data = new Blob([text], { type: "text/js" });
  var textFile = window.URL.createObjectURL(data);
  var a = document.createElement("a");
  a.setAttribute("id", "download");
  a.setAttribute("href", textFile);
  a.setAttribute("download", name + ".js");
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

  $("#c_html").change(function () {
    if (this.checked) {
      $("#name_html").css("display", "block");
    } else if (!this.checked) {
      $("#name_html").css("display", "none");
    }
  });

  $("#c_css").change(function () {
    if (this.checked) {
      $("#name_css").css("display", "block");
    } else if (!this.checked) {
      $("#name_css").css("display", "none");
    }
  });

  $("#c_js").change(function () {
    if (this.checked) {
      $("#name_js").css("display", "block");
    } else if (!this.checked) {
      $("#name_js").css("display", "none");
    }
  });

  $("#save").click(function () {
    $("#fade").css("display", "flex");
  });
  $("#p_cancel").click(function () {
    $("#fade").css("display", "none");
  });
});
