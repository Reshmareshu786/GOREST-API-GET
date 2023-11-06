let sendBtn = document.getElementById("sendGetRequestBtn");
let requestStatus = document.getElementById("requestStatus");
let responseBody = document.getElementById("httpResponse");
let loadingElement = document.getElementById("loading");


function fetchAndDisplay()
{
    let url = "https://gorest.co.in/public-api/users";
    let options = {
        method : "GET",
    }
    loadingElement.classList.remove("d-none");
    requestStatus.classList.add("d-none");
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        loadingElement.classList.add("d-none");
        requestStatus.classList.remove("d-none");
        let status = jsonData.code;
        let bodyE = JSON.stringify(jsonData);
        requestStatus.textContent = status;
        responseBody.textContent = bodyE;
    })
}
sendBtn.addEventListener("click",fetchAndDisplay);

