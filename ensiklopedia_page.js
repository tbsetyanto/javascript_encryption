<script type="text/javascript">
  var first = getUrlVars()["id"];
  var second = getUrlVars()["page"];

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

document.writeln(first);
document.writeln(second);
self.location="http://www.amazon.de/gp/product/"+first+"?tag=bavaklasinmun-21";
      </script>
