let usersArr = [
	{
		userID: '36b8f84d-df4e-ad32-b662-bcde71a8764f',
		userName: 'Jasia',
		userCity: 'Gliwice',
		userAge: 16,	
	},
	{
		userID: '36b8f84d-df4e-4d49-b662-bcde71a87623',
		userName: 'Michał',
		userCity: 'Zabrze',
		userAge: 19,
	},
	{
		userID: '36b8f84d-df4e-s3ae-b662-bcde71a876aa',
		userName: 'Olga',
		userCity: 'Knurów',
		userAge: 23,
	},
	{
		userID: '36b8f84d-df4e-a43w-b662-bcde71a876b3',
		userName: 'Marek',
		userCity: 'Gliwice',
		userAge: 17,
	},
	{
		userID: '36b8f84d-df4e-zfdr-b662-bcde71a876a2',
		userName: 'Józefa',
		userCity: 'Pyskowice',
		userAge: 42,
	},
	{
		userID: '36b8f84d-df4e-adz3-b662-bcde71a87622',
		userName: 'Janek',
		userCity: 'Gliwice',
		userAge: 30,
	},
	{
		userID: '36b8f84d-df4e-bfr3-b662-bcde71a87635',
		userName: 'Hania',
		userCity: 'Toszek',
		userAge: 12,
	},
	{
		userID: '36b8f84d-df4e-n2er-b662-bcde71a87644',
		userName: 'Benek',
		userCity: 'Warszawa',
		userAge: 45,
	},
	{
		userID: '36b8f84d-df4e-ke4q-b662-bcde71a876fa',
		userName: 'Gosia',
		userCity: 'Gliwice',
		userAge: 30,
	},
];
function displayArr(arr,display,isButDelete){
    display.innerHTML=''
    arr.forEach(element => {
        let text=``
        const li=document.createElement(`li`)
        li.classList.add(`list-group-item`)
        if(isButDelete){
            li.classList.add(`d-flex`)
            li.classList.add(`justify-content-between`)
            li.classList.add(`align-items-center`)
            text+=`<span><b>Imię:</b> ${element.userName}, <b>Miasto:</b> ${element.userCity}, <b>Wiek:</b> ${element.userAge}</span> <span><button type="button" id="butRemove" class="btn border border-1 border-danger text-danger butRemove">X</button></span>`
        }else{
            text+=`<b>Imię:</b> ${element.userName}, <b>Miasto:</b> ${element.userCity}, <b>Wiek:</b> ${element.userAge}`
        }
        li.innerHTML=text
        
        display.appendChild(li)
    });
}
const butAdd=document.querySelector(`#butAdd`)
butAdd.addEventListener(`click`,function(evt){
    evt.preventDefault()
    const age=Number(document.querySelector(`#age`).value)
    const name=document.querySelector(`#name`).value
    const city=document.querySelector(`#city`).value
    const obiekt={
        userID: crypto.randomUUID(),
		userName: name,
		userCity: city,
		userAge: age
    }

    usersArr.push(obiekt)
})
const lista=document.querySelector(`#lista`)
displayArr(usersArr,lista,true)
const buttonSearch=document.querySelector(`#buttonSearch`)
const displaySearch=document.querySelector(`#listaDisplay`)

buttonSearch.addEventListener(`click`,function(evt){
    const valueToFind=document.querySelector(`#valueToFind`).value
    evt.preventDefault()
    const operation=document.querySelector(``)
    usersArr.forEach(function(obj){
        // if(obj.userName==valueToFind){
        //     console.log(obj.userAge,obj.userCity)
        // }
        const searchedArr=usersArr.filter((obj=>{
            return obj.userName==valueToFind
        }))
})
displayArr(searchedArr,displaySearch,false)
})
