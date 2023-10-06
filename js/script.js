var shareButton = document.querySelector('.shareIcon')
var share = document.querySelector('.share');
var shareLinks = document.querySelector('.shareList');

shareButton.addEventListener('click', function () {
    shareLinks.parentElement.classList.toggle('active');

    if (shareButton.classList.contains("active")) {
    shareButton.classList.replace("active", "inactive");
    } else {
    shareButton.classList.add("active");
    }
})