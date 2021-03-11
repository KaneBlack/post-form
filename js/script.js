// Forms

const forms = document.querySelector('.form');
const statusMessage = {
    load: 'Loading',
    success: 'Done',
    failure: 'Error',
};

// forms.forEach(item => {
//     postData(item);
// });

postData(forms);

function postData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json');

        const formData = new FormData(form);
        const obj = {};

        formData.forEach( (value, key) => {
            obj[key] = value;
        });

        const json = JSON.stringify(obj);

        request.send(json);

        const status = document.createElement('div');

        status.classList.add('status');
        status.textContent = statusMessage.load;
        form.append(status);

        request.addEventListener('load', () => {
            if (request.status === 200) {
                console.log(request.response);
                status.textContent = statusMessage.success;
                form.reset();
                setTimeout(() => {
                    status.remove();
                }, 2000);
            } else {
                status.textContent = statusMessage.failure;
            }
        });

    });
}

// - const forms
// - function postData
// - event submit e
// - e.preventDefault
// - request XMLHttp
// - open POST, server.php
// - ---setRequestHeader('Content-type', 'multipart/form-data')
// - new FormData(form)
// - request send formdata
// - request event load
// - if request.status === 200
// - error message obj loading ...
// - create div message
// - div class
// - div textContent
// - form append
// - postdata foreach item function
// - form reset
// - settimeout remove status
// - add title application/json
// - add obj
// - form foreach object copy
// - json stringify obj
// - send json