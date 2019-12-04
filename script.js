function fetchData() {
    let Http = new XMLHttpRequest();
    let url = 'https://pizza.umea-ntig.se/admin_fetch_data?admin_key=test';
    Http.open('GET', url);
    Http.send();
    Http.onreadystatechange = e => {
        console.log(JSON.parse(Http.responseText));
    };
}

function expand(id) {
    document.getElementById(id).classList.toggle('open');
}