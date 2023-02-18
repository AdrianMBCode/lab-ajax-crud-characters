const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document.getElementById("fetch-all").addEventListener("click", function (event) {
      charactersAPI
        .getFullList()
        .then((allCharacters) => {
      const parentDiv = document.querySelector(".characters-container");
      const hiddenDivOnFetch = document.getElementById(
        "character-info-to-hide"
      );
      allCharacters.forEach((character) => {
        let oneCharacter = document.createElement("div");
        oneCharacter.className = "character-info";
        // Mostrar ID
        let newDivID = document.createElement("div");
        newDivID.classList.add("id");
        newDivID.innerHTML = `ID: ${character.id}`;
        oneCharacter.appendChild(newDivID);
        parentDiv.appendChild(oneCharacter);
        //Mostrar nombre
        let newDivName = document.createElement("div");
        newDivName.classList.add("name");
        newDivName.innerHTML = `Name: ${character.name}`;
        oneCharacter.appendChild(newDivName);
        parentDiv.appendChild(oneCharacter);
        //Mostrar Occupations
        let newDivOccupation = document.createElement("div");
        newDivOccupation.classList.add("occupation");
        newDivOccupation.innerHTML = `Occupation: ${character.occupation}`;
        oneCharacter.appendChild(newDivOccupation);
        parentDiv.appendChild(oneCharacter);
        // Mostrar Cartoon
        let newDivCartoon = document.createElement("div");
        newDivCartoon.classList.add("cartoon");
        newDivCartoon.innerHTML = `Cartoon: ${character.cartoon}`;
        oneCharacter.appendChild(newDivCartoon);
        parentDiv.appendChild(oneCharacter);
        // Mostrar Weapon
        let newDivWeapon = document.createElement("div");
        newDivWeapon.classList.add("weapon");
        newDivWeapon.innerHTML = `Weapon: ${character.weapon}`;
        oneCharacter.appendChild(newDivWeapon);
        parentDiv.appendChild(oneCharacter);
      });
      hiddenDivOnFetch.style.display = "none";
        })
        .catch((err) => console.log(err));
  });

  document.getElementById("fetch-one").addEventListener("click", function (event) {
      let idCharacter = document.getElementsByName("character-id");
      charactersAPI
        .getOneRegister(idCharacter[0].value)
        .then((allCharacters) => {
      const parentDiv = document.querySelector(".characters-container");
      const hiddenDivOnFetch = document.getElementById(
        "character-info-to-hide"
      );
        let oneCharacter = document.createElement("div");
        oneCharacter.className = "character-info";
        // Mostrar ID
        let newDivID = document.createElement("div");
        newDivID.classList.add("id");
        newDivID.innerHTML = `ID: ${allCharacters.id}`;
        oneCharacter.appendChild(newDivID);
        parentDiv.appendChild(oneCharacter);
        //Mostrar nombre
        let newDivName = document.createElement("div");
        newDivName.classList.add("name");
        newDivName.innerHTML = `Name: ${allCharacters.name}`;
        oneCharacter.appendChild(newDivName);
        parentDiv.appendChild(oneCharacter);
        //Mostrar Occupations
        let newDivOccupation = document.createElement("div");
        newDivOccupation.classList.add("occupation");
        newDivOccupation.innerHTML = `Occupation: ${allCharacters.occupation}`;
        oneCharacter.appendChild(newDivOccupation);
        parentDiv.appendChild(oneCharacter);
        // Mostrar Cartoon
        let newDivCartoon = document.createElement("div");
        newDivCartoon.classList.add("cartoon");
        newDivCartoon.innerHTML = `Cartoon: ${allCharacters.cartoon}`;
        oneCharacter.appendChild(newDivCartoon);
        parentDiv.appendChild(oneCharacter);
        // Mostrar Weapon
        let newDivWeapon = document.createElement("div");
        newDivWeapon.classList.add("weapon");
        newDivWeapon.innerHTML = `Weapon: ${allCharacters.weapon}`;
        oneCharacter.appendChild(newDivWeapon);
        parentDiv.appendChild(oneCharacter);
      
      hiddenDivOnFetch.style.display = "none";
    })
        .catch((err) => console.log(err));
  });

  document.getElementById("delete-one").addEventListener("click", function (event) {
      event.preventDefault();
      let id = document.getElementsByName("character-id")[0].value;
      charactersAPI
        .deleteOneRegister(id)
        .then(() => {
          console.log(`Character ${id} has been deleted`);
        })
        .catch((err) => console.log(err));
  });

  document.getElementById("edit-character-form").addEventListener("submit", function (event) {

  });

  document.getElementById("new-character-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementsByName('name')[0].value;
    const occupation = document.getElementsByName('occupation')[0].value;
    const weapon = document.getElementsByName('weapon')[0].value;
    const cartoon = document.getElementsByName('cartoon')[0].checked;
    
    charactersAPI.createOneRegister({name, occupation, weapon, cartoon})
    .then(() => {
      console.log('Character creado');
    })
    .catch((err) => console.log(err));
  });
});
