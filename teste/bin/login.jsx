<>
  <title>Login Screen</title>
  <link rel="stylesheet" type="text/css" href="loginbin.css" />
  <div className="home">
    <form className="form_container">
      <h1>Login</h1>
      <div className="input_box">
        <input
          type="text"
          placeholder="Escreva o seu email"
          id="email"
          required=""
        />
        <i className="uil uil-envelope-alt email" />
      </div>
      <div className="input_box">
        <input
          type="password"
          placeholder="Escreva a sua senha"
          id="password"
          required=""
        />
        <i className="uil uil-lock-alt password" />
      </div>
      <button type="button" id="submitButton">
        Login
      </button>
    </form>
  </div>
</>
