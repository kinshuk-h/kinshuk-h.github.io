(function () {
  document.querySelectorAll(".btn.abstract,.btn.bibtex").forEach(
    $btn => $btn.addEventListener('click', function (e) {
        e.preventDefault();
        const $ref = document.getElementById($btn.dataset.for);
        if(!$ref) return;
        const wasHidden = $ref.classList.toggle('hidden');
        $btn.setAttribute('aria-expanded', String(!wasHidden));
    })
  );
})();