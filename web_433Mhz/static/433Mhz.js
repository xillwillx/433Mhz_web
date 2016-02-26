var btnID = 1;
$(document).ready(function() {
    $("#ButtonList").append('<button id="GetCodeBtn" class="btn btn-lg btn-default" data-loading-text="Awaiting Signal"><span class="glyphicon glyphicon-off"></span>  Button '+btnID+'</button>');

    $("#GetCodeBtn").click(function(e) {
        $("#"+e.target.id).button('loading');
        $.getJSON('/api/get_code', function(data) {
            data = data['code'].split(',');
            var code = data[0];
            var delay = data[1];
            $("#DataTable").append('<tr><td>'+btnID+'</td><td>'+code+'</td><td>'+delay+'</td></tr>');
            btnID += 1;
            $("#"+e.target.id).button('reset');
        });
    });
});

