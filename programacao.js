alert("O JavaScript está funcionando!");
document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("form");
  if (!form) return;

  const inputs = form.querySelectorAll("input");
  const globalBox = document.getElementById("globalFeedback");

  function error(input, msgEl, text) {
    input.classList.add("erro");
    msgEl.textContent = text;
    return false;
  }

  function clearError(input) {
    input.classList.remove("erro");
    const msgEl = input.parentElement.querySelector(".msg");
    msgEl.textContent = "";
  }

  inputs.forEach(input => {
    input.addEventListener("input", () => clearError(input));
  });

  function validate(input) {
    const msg = input.parentElement.querySelector(".msg");
    const value = input.value.trim();
    const num = Number(value);

    if (input.required && value === "") {
      return error(input, msg, "Campo obrigatório.");
    }

    if (form.id === "identificacaoForm") {
      if (input.name === "nome" && value.length < 3)
        return error(input, msg, "Nome muito curto.");

      if (input.name === "idade" && (num < 5 || num > 120))
        return error(input, msg, "Idade inválida.");
    }

    if (form.id === "antropometriaForm") {
      if (input.name === "altura" && (num < 50 || num > 250))
        return error(input, msg, "Altura inválida.");

      if (input.name === "peso" && (num < 10 || num > 300))
        return error(input, msg, "Peso inválido.");
    }

    if (form.id === "motoresForm") {
      if (input.name === "handgrip" && (num < 0 || num > 200))
        return error(input, msg, "Handgrip inválido.");

      if (input.name === "run10m" && (num < 0 || num > 30))
        return error(input, msg, "Tempo inválido.");
    }

    return true;
  }

  form.addEventListener("submit", e => {
    e.preventDefault();

    let ok = true;
    inputs.forEach(inp => { if (!validate(inp)) ok = false; });

    if (!ok) return;

    if (form.id === "identificacaoForm")
      return window.location.href = "antropometria.html";

    if (form.id === "antropometriaForm")
      return window.location.href = "testesmotores.html";

    if (form.id === "motoresForm")
      alert("Avaliação concluída!");
  });

});