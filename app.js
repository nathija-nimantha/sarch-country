function serchCuntrie() {
    let searchValue = document.getElementById("txtSearchValue").value;
    let officialName = document.getElementById("officialName");
    let name = document.getElementById("name")
    let capital = document.getElementById("capital")
    let region = document.getElementById("region")
    let population = document.getElementById("population")
    let img = document.getElementById("img")


    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
        .then(res => res.json())
        .then(data => {

            data.forEach(obj => {
                officialName.innerText = obj.name.official;
                name.innerText = obj.name.common;
                capital.innerText = obj.capital;
                region.innerText = obj.region;
                population.innerText = obj.population;

                img.innerHTML = `<img src="${obj.flags.png}" alt="">`
            })
            console.log(data);
        })
}

fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json())
.then(data=>{
    let tblCountries=document.getElementById("tbl");

    let tblBody=`<tr>
                    <th>Name</th>
                </tr>`;

    data.forEach(element => {
        tblBody+=`<tr>
                    <td>${element.name.common}</td>
                </tr>`
    });

    tblCountries.innerHTML=tblBody;
})


document.getElementById("name").style.display = "none";
document.getElementById("capital").style.display = "none";
document.getElementById("region").style.display = "none";
document.getElementById("population").style.display = "none";

document.getElementById("btnSearch").addEventListener("click", function() {
    document.getElementById("name").style.display = "";
    document.getElementById("capital").style.display = "";
    document.getElementById("region").style.display = "";
    document.getElementById("population").style.display = "";
});

//add a button text named google map and when it clicked links to the location of country
document.getElementById("btnGoogleMap").addEventListener("click", function() {
    let searchValue = document.getElementById("txtSearchValue").value;
    let mapLink = `https://www.google.com/maps/search/${searchValue}`;
    window.open(mapLink, "_blank");
});
