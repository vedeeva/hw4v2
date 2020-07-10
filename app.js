const numberInput = document.getElementById("number-input");

document.querySelector('.input-group-text').addEventListener('click', function () {
    let num = parseInt(numberInput.value);
    console.log(num);

    const baseUrl = "http://shibe.online/api/shibes?count=" + 1 + "&urls=true&httpsUrls=true";
    console.log(baseUrl);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + baseUrl)
        .then((response) => {
            response.json().then((userData) => {
                console.log("success", userData[0]);
                var mycontent = new Array();
                for (var i = 0; i < num; i++) {
                    mycontent[i] = userData[i];

                }
                var j=0
                window.onload =altercontent();
                function altercontent() {
                    document.getElementById('shibas').innerHTML = `
                     <img class="img-fluid mb-2" src="${userData[j]}"></img>`;
                     console.log(document.getElementById('shibas'));
                    j = (j == mycontent.length - 1) ? 0 : j + 1
                    setTimeout("altercontent()", 3000)
                }
            });
        })
        .catch((err) => {
            console.log("error: ", err);
        });

});
