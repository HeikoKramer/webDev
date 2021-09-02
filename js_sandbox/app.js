document.getElementById('button').addEventListener('click', loadData);

function  loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'data.txt', true);

  xhr.onload = function() {
    if(this.status === 200) {
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  xhr.send();
}

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"

// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready