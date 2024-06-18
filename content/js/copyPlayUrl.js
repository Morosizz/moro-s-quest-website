document.getElementById('copyplayurl').addEventListener('click', (e) => {
    e.preventDefault();

    const copy = "play.morosquest.com";
    const targetText = "Copied to clipboard!"
    const initText = "Join now!"

    const textarea = document.createElement('textarea');
    textarea.value = copy;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');

    document.body.removeChild(textarea);

    e.target.innerText = targetText;

    let timeNow = Date.now();

    e.target.addEventListener('mouseleave', () => {
        if (Date.now() - timeNow < 2000) {
            setTimeout(() => {
                e.target.innerText = initText;
            }, 2000);
        }
        else {
            e.target.innerText = initText;
        }
    });

});