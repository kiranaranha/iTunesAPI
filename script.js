function start(){
    var artist = document.getElementById("artistSelect").value;
    $.ajax({
        url: "https://itunes.apple.com/search?term=" + artist,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function (result) {
            console.log(result);
            myFunction(result);
        },
        error: function () {
            alert('Failed!');
        }
    });
}

function myFunction(results) {
    var albums = [];
    console.log(results.results[8].artworkUrl100);
    document.getElementById("table").innerHTML = '';

    for(var i = 0; i < results.results.length; i++){
        if(albums.includes(results.results[i].collectionName)){

        }else{
            var songs ='';
            for(var x = 0; x < results.results.length; x++){
                if(results.results[x].collectionName == results.results[i].collectionName){
                    songs += "<strong>" + results.results[x].trackName + "</strong>  <audio controls='true' src=\'" +
                    results.results[x].previewUrl + "'id='audio' type='audio/m4a'></audio><br>";
                }
            }
            albums.push(results.results[i].collectionName);
            document.getElementById("table").innerHTML += "<table class=\"table table-active\">\n " +
                "<col width='40%'> <col width='70%'>" +
                "    <tr>\n" +
                "        <th><u>Album</u></th>\n" +
                "        <th><u>Songs</u></th>\n" +
                "    </tr>\n" +
                "\n" +
                " \n" +
                "\n" +
                "    <tr>\n" +
                "        <td>" + "<image src='" + results.results[i].artworkUrl100 + "'></image><br><strong>" +
                results.results[i].collectionName + "</strong></td>\n" +
                "        <td>"+songs+"</td>\n" +
                "    </tr>\n" +
                "</table>";


        }
        console.log(i);
    }
    console.log(albums.length);
}

