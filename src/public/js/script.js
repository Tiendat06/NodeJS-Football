// const axios = require('axios');

function search() {
    let input = document.getElementById('search-input');
    let list = document.getElementById('table');

    input.addEventListener('input', function () {
        let query = input.value.toLowerCase();
        let items = list.getElementsByClassName('tr');

        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let text = item.textContent.toLowerCase();
            // let trID = 'manage-booking__tr--'+item.id;
            // console.log(item);
            // let tr = document.getElementById(trID);

            if (text.includes(query)) {
                if (item.classList.contains('d-none')) {
                    item.classList.remove('d-none');
                }
            } else {
                if (!item.classList.contains('d-none')) {
                    item.classList.add('d-none');
                }
            }
        }
    });
}

function onChangeRound() {
    $().ready(() => {
        $('#round_id').change(() => {
            // console.log('hi');
            $.ajax({
                url: 'player/onchangePlayer',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify({ round_id: $('#round_id').val() }),
                // round_id: $('#round_id').val(),
            }).done((result) => {
                // console.log(result);
                // $('#match_select').html('');
                $('#match_select').html(result);
                // const matchData = JSON.parse(result); // Chuyển đổi chuỗi JSON thành đối tượng JavaScript
                // const R64IDValue = matchData.R64ID; // Lấy giá trị của trường 'R64ID'
                // console.log(result[0].R64ID);
            });
        });
    });
}

