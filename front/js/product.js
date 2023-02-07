/* ------------ JavaScript des produits ------------ */

const urlSearchParams = new URLSearchParams(window.location.search);
// URLSearchParams est fourni par JS

const boutonPanier = document.querySelector('#addToCart')
console.log(boutonPanier)

// Variable en camelCase
// Class en PascalCase

// Window c'est toute ma fenetre navigateur
// Window.location c'est la barre de recherche
// Window.location.search c'est l'entierete de l'URL

// console.log(urlSearchParams.get("id"));

// const params = Object.fromEntries(urlSearchParams.entries()); ==> Alternative à urlSearchParams.get("id") en remplaçant tout ça par une constante params

// console.log(params.id);

// Requete à l'adresse indiqué dans le fetch
fetch(`http://localhost:3000/api/products/${urlSearchParams.get('id')}`)

// Attend la réponse du JSON ? Le response correspond à une réponse ?
    .then((response) => response.json())

    // .then(data => data.map(imageC =>
    //     `<img src="${imageC.imageUrl}" alt="${imageC.altTxt}">`
    //     ))

    .then(canap => {

        document.querySelector('.item__img').innerHTML = `<img src="${canap.imageUrl}" alt="${canap.altTxt}">`;

        document.getElementById('title').innerHTML = canap.name;
        document.getElementById('price').innerHTML = canap.price;
        document.getElementById('description').innerHTML = canap.description;

        // let options = "";

        // for (let i = 0; i < canap.colors.length; i++){
        //     // document.getElementById("colors").innerHTML = 
        //     // += garde la valeur précédente et ajoute la suivante dedans
        //     options += `<option value="${canap.colors[i]}">-- ${canap.colors[i]} --</option>`;
        // }

        document.getElementById("colors").innerHTML = canap.colors.map( color => `<option value="${color}">-- ${color} --</option>` ).join('');
        // Fait la meme chose que la boucle for

    })




boutonPanier.addEventListener('click', () => {
    console.log('test-du-click')
    // localStorage.clear()

    // let objCanap = [`${urlSearchParams.get('id')}`, document.getElementsByClassName('color-select'), document.getElementsByClassName('itemQuantity')]

    // let donneeCanap = JSON.stringify(objCanap)

    let idCanap = urlSearchParams.get('id')
    console.log(idCanap)

    let colorCanap = document.querySelector('#colors').value
    console.log(colorCanap)

    let nberCanap = document.querySelector('#quantity').value
    console.log(nberCanap)

    localStorage.setItem('id-Canap',idCanap)
    localStorage.setItem('color-Canap',colorCanap)
    localStorage.setItem('nber-Canap',nberCanap)
})