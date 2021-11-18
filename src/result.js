setTimeout(function () {
    document.body.classList.add('id-card-active');
}, 100);

// URL share
window.onload = function() {
    let url = window.location.href;
    const resultValue = document.querySelector(".card-result-name");

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');

    ogTitle.setAttribute("content", `The BTS memeber I look like is... ${resultValue.innerText}?!`);
    ogUrl.setAttribute("content", url);
}

const shareBtn = document.querySelector(".share-btn");

function shareUrl(){
    let url = window.location.href;
    let tmpElement = document.createElement('input');

    document.body.appendChild(tmpElement);
    tmpElement.value = url;
    tmpElement.select();
	document.execCommand("copy");
    document.body.removeChild(tmpElement);
    
	alert("URL copied"); 
}

shareBtn.addEventListener("click", shareUrl);
