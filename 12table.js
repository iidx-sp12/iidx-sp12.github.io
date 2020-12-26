var len = data.length;

$(function() {
  $("#tbl").tablesorter();
  
  $.getJSON("songs.json", function(data) {
    var tb = $("#tbl tbody");
    len = data.length;
    for(let i = 0; i < len; i++) {
      let row = "";
      row += "<tr>";
      row += "<td>" + data[i].name + "</td>";
      row += "<td class=\"\{sortValue:" + data[i].d_value + "\}\">" + data[i].difficulty + "</td>";
      row += "<td class=\"\{sortValue:" + data[i].n_value + "\}\">" + data[i].normal + "</td>";
      row += "<td class=\"\{sortValue:" + data[i].h_value + "\}\">" + data[i].hard + "</td>";
      row += "<td>" + data[i].version + "</td>";
      row += "</tr>";
      tb.append(row);
    }
    $("#tbl").trigger("update");
  });
});