const container = document.querySelector('#container');
// const newImg = document.createElement('img');
// newImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
// container.appendChild(newImg);

for (let i = 1; i <= 151; i++) {
    const pokemonDiv = document.createElement('div');
    // add class pokemon to divs
    pokemonDiv.classList.add('pokemon');
    const pokemonImg = document.createElement('img');
    const labelSpan = document.createElement('span');

    pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    labelSpan.innerText = `${i}`;

    pokemonDiv.appendChild(pokemonImg);
    pokemonDiv.appendChild(labelSpan);
    container.appendChild(pokemonDiv);
}