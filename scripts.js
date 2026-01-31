document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btnLove");
  const surprise = document.getElementById("surprise");

  btn.addEventListener("click", function () {
    surprise.style.display = "block";
  });
});
