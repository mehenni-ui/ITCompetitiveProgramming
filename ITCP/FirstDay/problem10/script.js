const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '72ccc05aa6msh872abe42ae009aap15cc02jsn5c1e5d2cc92c',
		'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
	}
};





const city = document.getElementById("city");
const country = document.getElementById("country");
const btn = document.getElementById("btn");

const name = document.getElementById("name");
const degree = document.getElementById("degree");


btn.onclick = ()=>{
    if(city.value.length < 1 || country.value.length < 1){
        console.log("enter data");
    }

    const name = document.getElementById("name");
const degree = document.getElementById("degree");



    fetch(`https://aerisweather1.p.rapidapi.com/forecasts/${city.value},${country.value}`, options)
	.then(response => response.json())
	.then(response => {
       let  myCity = response.response[0].place.name
       name.innerHTML = response.response[0].place.name
       degree.innerHTML = response.response[0].periods[0].avgTempC +"C°"
       console.log(response.response[0].periods[0].avgTempC);
    }
        )
	.catch(err => console.error(err));
}

