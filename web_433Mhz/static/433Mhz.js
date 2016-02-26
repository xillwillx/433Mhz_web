var btnID = 1;
var btnList = [];
$(document).ready(function() {
    $("#AddBtn").click(function(e) {
        $.getJSON('/api/get_code', function(data) {
            $(this).button('loading');
            data = data['code'].split(',');
            var code = data[0];
            var delay = data[1];
            btnList.push({
                id: btnID,
                code: code,
                delay: delay,
                name: "",
            });
            btnID += 1;
            writeToTable();
            $(this).button('reset');
        });
    });
});

$(document).on('click', 'a.info-link', function(e) {
    var id = e.target.id;
    bootbox.dialog({
        title: "Add button name...",
        message: '<div class="input-group input-group-lg"><span class="input-group-addon" id="sizing-addon">Button Name</span><input id="BtnName" type="text" class="form-control" placeholder="Example: Living Room, Television, etc" aria-describedby="sizing-addon"></div>',
        buttons: {
            success: {
                label: "Save",
                className: "btn-success",
                callback: function() {
                    var name = $("#BtnName").val();
                    btnList[parseInt(id.match(/\d+/), 10)-1]['name'] = name;
                    writeToTable();
                }
            }
        }
    });
});
function writeToTable() {
    $("#DataBody").empty();
    btnList.forEach(function(btn) {
        var data = '<tr><td>'+btn['id']+'</td><td>'+btn['code']+'</td><td>'+btn['delay']+'</td><td>';
        if(btn['name'] == "") {
            data += '<a class="info-link" id="nameModal'+btn['id']+'" href="#">Add name</a></td></tr>';
        } else {
           data += '<a class="info-link" id="nameModal'+btn['id']+'" href="#">'+btn['name']+'</a></td></tr>'; 
        }
        $("#DataBody").append(data);
    });
}
