const URL = `http://localhost:3000/events`;
let dateList = [];


//Essa função vai pegar o container para jogar as listas, date input pegar o valor que estiver dentro do input e vai salvar lá na lista de datas, depois vem o innerHTML para jogar esse valor na tela
function addDate(){
    const dateContainer = document.getElementById('date-container');
    let dateInput = document.getElementById('date');
    dateList.push(dateInput.value);
    dateContainer.innerHTML += `<span> Lista de datas: ${dateInput.value}</span> <br>`;
}


function sendEvent(){
    const dateContainer = document.getElementById('date-container');
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;

    //objeto recebendo seus respesctivos valores através das variáveis 
    const event = {
        name: name,
        price: price,
        date: dateList
    },

    //Não entendi
    const options = {
        method: 'POST',
        Headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            event
        )
    };


    fetch(URL, options)
        .then(res => res.json())
        .then(json => getEvents());
    
    //zero a lista de datas e as que estão na tela eu deixo como uma string vazia
    dateList = [];
    dateContainer = '';
}

function getEvents() {
    fetch(URL).then(res => res.json()).then(json => addEvent)
}


