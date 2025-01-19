$(function() {
    $("#tbl").tablesorter({
        headers: {
            0: { sorter: false },
        }
    });

    $.getJSON("songs.json", function(data)
    {
        let tb = $("#tbl tbody");
        var len = data.length;
        for (let i = 0; i < len; i++)
        {
            let row = "";
            row += "<tr>";
            if (data[i].d_value === 3)
            {
                row += "<td><span style=\"color:magenta\">" + data[i].name + "</span></td>";
            }
            else
            {
                row += "<td>" + data[i].name + "</td>";
            }
            row += "<td class=\"\{sortValue:" + data[i].d_value + "\}\">" + data[i].difficulty + "</td>";
            row += "<td class=\"\{sortValue:" + data[i].n_value + "\}\">" + data[i].normal + "</td>";
            row += "<td class=\"\{sortValue:" + data[i].h_value + "\}\">" + data[i].hard + "</td>";
            row += "<td>" + data[i].version + "</td>";
            row += "</tr>";
            tb.append(row);
        }
        $("#tbl").trigger("update");
        $("#number").html("<b>" + len + "譜面</b>");
    });

    var pagetop = $('#pagetop');
    // ボタン非表示
    pagetop.hide();
    // 100px スクロールしたらボタン表示
    $(window).scroll(function ()
    {
        if ($(this).scrollTop() > 100)
        {
            pagetop.fadeIn();
        } 
        else
        {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () 
    {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});