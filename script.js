// ============================
// PAISITA PROMPTS
// ============================

const button = document.querySelector(".copy-btn");
const textarea = document.querySelector("textarea");

button.addEventListener("click", () => {

    navigator.clipboard.writeText(textarea.value);

    const original = button.innerHTML;

    button.innerHTML = "💗 ¡Prompt copiado!";

    button.style.background =
        "linear-gradient(135deg,#ffb8d3,#ff8fbe)";

    setTimeout(()=>{

        button.innerHTML = original;

        button.style.background =
        "linear-gradient(135deg,#ff9fc7,#f27fb3)";

    },2000);

});
