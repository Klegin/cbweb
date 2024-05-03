<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>UniCursos - Tela de Início</title>
  <link rel="stylesheet" href="indexbin.css" />
  <header>
    <img src="logo.png" alt="Logo" className="siteLogo" />
    <button id="homeButton">UniCursos</button>
    <nav>
      <img
        src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur.png"
        alt="Ícone de usuário"
        id="userIcon"
      />
      <a href="#adAnimalForm">Cadastro de Cursos</a>
      <a href="#courseList">Lista de Cursos</a>
      <a href="#footer">Rodapé</a>
      <button id="lightTheme">Tema claro</button>
      <button id="darkTheme" className="darkButton">
        Tema escuro
      </button>
    </nav>
  </header>
  <main>
    <form onsubmit="adAnimal()" className="container" id="adAnimalForm">
      <section className="darkRedSection">
        <section className="brightRedSection">
          <label htmlFor="tipoAnimal">Nome do curso:</label>
          <input type="text" id="tipoAnimal" required="" />
          <br />
          <label htmlFor="condicaoHora">Carga horária (em horas):</label>
          <input type="number" id="condicaoHora" required="" />
          <br />
          <label htmlFor="condicaoVoluntario">Nome do instrutor:</label>
          <input type="text" id="condicaoVoluntario" required="" />
          <br />
        </section>
        <section id="CourseTeaching" className="brightRedSection">
          <p>Nível de educação do curso:</p>
          <input type="radio" id="Tecnologo" name="education" required="" />
          Tecnólogo
          <br />
          <input
            type="radio"
            id="Profissionalizante"
            name="education"
            required=""
          />
          Profissionalizante
          <br />
          <input
            type="radio"
            id="EnsinoSuperior"
            name="education"
            required=""
          />
          Ensino superior
          <br />
        </section>
        <button type="submit">Adicionar</button>
      </section>
    </form>
    <section id="courseList" className="brightRedSection">
      <p>Cursos:</p>
      <table id="courseTable" className="courseTable">
        <thead>
          <tr>
            <th>Curso</th>
            <th>Carga horária (horas)</th>
            <th>Instrutor</th>
            <th>Nível de educação</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </section>
  </main>
  <footer id="footer">
    <p>Jaqueline Klegin, Matheus Eduardo dos Santos, João Vinícius Rosá</p>
  </footer>
</>
