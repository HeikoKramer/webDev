document.getElementById('button').addEventListener('click', loadData);

function  loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open('GET', 'datas.txt', true);

  xhr.onload = function() {
    console.log(this.status);
    if(this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("bad request");
    }
  }

  // Send
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