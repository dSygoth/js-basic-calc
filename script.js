const check = document.getElementById('check');
const operation = document.getElementById('operation');
const first = document.getElementById('first');
const second = document.getElementById('second');
const result = document.getElementById('result');

check.addEventListener('click', () => {
    if (first.value == '' || second.value == '') {
        alert('PLACE NUMBERS, please.');
    } else {
        const opt = operation.value;
        const fs = Number(first.value);
        const snd = Number(second.value);
        
        switch (opt) {
            case "add":
                result.textContent = (fs + snd).toFixed(2);
                break;
            case "substraction":
                //console.log(fs, snd)
                result.textContent = (fs - snd).toFixed(2);
                break;
            case "division":
                result.textContent = (fs / snd).toFixed(2);
                break;
            case "multiplication":
                result.textContent = (fs * snd).toFixed(2);
                break;
        };

        document.getElementById('form').reset();
}}
)