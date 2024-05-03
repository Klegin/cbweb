var courseCount = 0;

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("lightTheme").addEventListener("click", toggleTheme);
  document.getElementById("darkTheme").addEventListener("click", toggleTheme);
  document.getElementById("homeButton").addEventListener("click", redirectToHomePage);
  document.getElementById("userIcon").addEventListener("click", redirectToLoginPage);
  getCourses();
});

function redirectToLoginPage() {
  window.location.href = "login.html"; 
}

function redirectToHomePage() {
  window.location.href = "index.html";
}

function getCourses() {
  let table = document.getElementById("courseTable");
  courseCount = Number(localStorage.getItem("courseCount"));
  for (let i = 1; i <= courseCount; i++) {

    if (localStorage.getItem("tipoAnimal" + i) == null) {
      continue;
    }

    console.log(i);
    console.log(localStorage.getItem("tipoAnimal" + i));
    console.log(localStorage.getItem("condicaoHora" + i));
    console.log(localStorage.getItem("condicaoVoluntario" + i));
    console.log(localStorage.getItem("condicao" + i));

    let editing = false;

    tray = document.createElement("tr");
    tray.id = i;

    let tipoAnimal = document.createElement("td");
    tipoAnimal.id = "tipoAnimal" + i;
    let tipoAnimalText = document.createTextNode(localStorage.getItem("tipoAnimal" + i));
    tipoAnimalText.id = "tipoAnimalText" + i;

    let condicaoHora = document.createElement("td");
    condicaoHora.id = "condicaoHora" + i;
    let condicaoHoraText = document.createTextNode(localStorage.getItem("condicaoHora" + i));
    condicaoHoraText.id = "condicaoHoraText" + i;

    let condicaoVoluntario = document.createElement("td");
    condicaoVoluntario.id = "condicaoVoluntario" + i;
    let condicaoVoluntarioText = document.createTextNode(localStorage.getItem("condicaoVoluntario" + i));
    condicaoVoluntarioText.id = "condicaoVoluntarioText" + i;

    let condicao = document.createElement("td");
    condicao.id = "condicao" + i;
    let condicaoText = document.createTextNode(localStorage.getItem("condicao" + i));
    condicaoText.id = "condicaoText" + i;

    let condicional = document.createElement("td");
    let alterarAnimal = document.createElement("button");
    let alterarAnimalText = document.createTextNode("Editar");
    let deletarAnimal = document.createElement("button");
    let deletarAnimalText = document.createTextNode("Deletar");

    alterarAnimal.addEventListener('click', () => {
      if (editing == false) {
        editing = true;
        let editTray = document.getElementById(i);

        let adTipo = document.createElement("input");
        adTipo.setAttribute("type", "text");
        adTipo.value = localStorage.getItem("tipoAnimal" + i);
        adTipo.id = "adTipo" + i;
        editTray.cells[0].appendChild(adTipo);

        let adHora = document.createElement("input");
        adHora.setAttribute("type", "number");
        adHora.id = "adHora" + i;
        adHora.value = localStorage.getItem("condicaoHora" + i);
        editTray.cells[1].appendChild(adHora);

        let adVoluntario = document.createElement("input");
        adVoluntario.setAttribute("type", "text");
        adVoluntario.id = "adVoluntario" + i;
        adVoluntario.value = localStorage.getItem("condicaoVoluntario" + i);
        editTray.cells[2].appendChild(adVoluntario);

        let adCondicional = document.createElement("select");
        adCondicional.id = "adCondicional" + i;

        let doente = document.createElement("option");
        doente.setAttribute("value", "Doente");
        doente.text = "Doente";
        adCondicional.appendChild(doente);

        let saudavel = document.createElement("option");
        saudavel.setAttribute("value", "Saudável");
        saudavel.text = "Saudável";
        adCondicional.appendChild(saudavel);

        let doacao = document.createElement("option");
        doacao.setAttribute("value", "Doação");
        doacao.text = "Doação";
        adCondicional.appendChild(doacao);

        let resgatado = document.createElement("option");
        resgatado.setAttribute("value", "Resgatado");
        resgatado.text = "Resgatado";
        adCondicional.appendChild(resgatado);

        editTray.cells[3].appendChild(adCondicional);

        tipoAnimalText.remove();
        condicaoHoraText.remove();
        condicaoVoluntarioText.remove();
        condicaoText.remove();
      }
      else {
        editing = false;

        let adTipo = document.getElementById("adTipo" + i);
        let adHora = document.getElementById("adHora" + i);
        let adVoluntario = document.getElementById("adVoluntario" + i);
        let adCondicional = document.getElementById("adCondicional" + i);

        let newName = adTipo.value;
        let newTime = adHora.value;
        let newInstr = adVoluntario.value;
        let newEduc = adCondicional.options[adCondicional.selectedIndex].text;

        localStorage.setItem("tipoAnimal" + i, newName);
        localStorage.setItem("condicaoHora" + i, newTime);
        localStorage.setItem("condicaoVoluntario" + i, newInstr);
        localStorage.setItem("condicao" + i, newEduc);

        window.location.reload();
      }
    });

    deletarAnimal.addEventListener('click', () => {
      let tray = document.getElementById(i);
      tray.remove();

      let name = localStorage.getItem("tipoAnimal" + i);
      localStorage.removeItem("tipoAnimal" + i);
      localStorage.removeItem("condicaoHora" + i);
      localStorage.removeItem("condicaoVoluntario" + i);
      localStorage.removeItem("condicao" + i);

      localStorage.setItem("courseCount", courseCount);

      window.alert("Regristro do " + name + " deletado com sucesso!");

      location.reload();
    });

    tipoAnimal.appendChild(tipoAnimalText);
    condicaoHora.appendChild(condicaoHoraText);
    condicaoVoluntario.appendChild(condicaoVoluntarioText);
    condicao.appendChild(condicaoText);
    alterarAnimal.appendChild(alterarAnimalText);
    deletarAnimal.appendChild(deletarAnimalText);

    condicional.appendChild(alterarAnimal);
    condicional.appendChild(deletarAnimal);

    tray.appendChild(tipoAnimal);
    tray.appendChild(condicaoHora);
    tray.appendChild(condicaoVoluntario);
    tray.appendChild(condicao);
    tray.appendChild(condicional);

    table.appendChild(tray);
  }
}

function adAnimal() {
  let name = document.getElementById("tipoAnimal").value;
  let time = document.getElementById("condicaoHora").value;
  let instructor = document.getElementById("condicaoVoluntario").value;
  let education;
  if (document.getElementById("idDoente").checked) {
    education = "Doente";
  }
  else if (document.getElementById("idSaudavel").checked) {
    education = "Saudável";
  }
  else if (document.getElementById("idDoacao").checked) {
    education = "Doação";
  }
  else if (document.getElementById("idResgatado").checked) {
    education = "Resgatado";
  }

  if (time <= 0) {
    window.alert("Insira um horário válido.");
  }
  else {
    courseCount++;

    localStorage.setItem("courseCount", courseCount);

    localStorage.setItem("tipoAnimal" + courseCount, name);
    localStorage.setItem("condicaoHora" + courseCount, time);
    localStorage.setItem("condicaoVoluntario" + courseCount, instructor);
    localStorage.setItem("condicao" + courseCount, education);

    window.alert("Animal registrado com sucesso!");
  }
}

// function getLastSessionTheme() {
//   let currentTheme = localStorage.getItem("siteTheme");
//   if (currentTheme == 1) {
//     switchLightTheme();
//   }
//   else {
//     switchDarkTheme();
//   }
// }

// function switchLightTheme() {
//   document.getElementById("site").className = "lightTheme";
//   localStorage.setItem("siteTheme", 1);
// }

// function switchDarkTheme() {
//   document.getElementById("site").className = "darkTheme";
//   localStorage.setItem("siteTheme", 0);
// }

function toggleTheme() {
  const body = document.body;
  const lightTheme = "lightTheme";
  const darkTheme = "darkTheme";

  if (body.classList.contains(lightTheme)) {
    body.classList.remove(lightTheme);
    body.classList.add(darkTheme);

    localStorage.setItem("theme", darkTheme);
  } else {
    body.classList.remove(darkTheme);
    body.classList.add(lightTheme);

    localStorage.setItem("theme", lightTheme);
  }
}

window.onload = function () {
  const theme = localStorage.getItem("theme");
  if (theme) {
    document.body.classList.add(theme);
  }
};