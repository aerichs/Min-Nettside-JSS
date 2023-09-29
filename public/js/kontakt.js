var knapp = document.getElementById("kontaktmeg2");
knapp.addEventListener("click", function () {
  Toastify({
    text: "Hei, Nå har du trykket på Kontakt Informasjons knappen. Jeg heter Anders Erichsen, og jeg bor inntil Vansjø. Har aldri med telefon, bare i veien for naturopplevelsen. Email : Nei takk! Hvis du skal besøke meg er det bare å lete langs vannkanten. Lykke til:)! ",
    duration: 0,
    close: true,
    gravity: "bottom",
    position: "center",
    className: "toast-message",
    stopOnFocus: true,
  }).showToast();
});
