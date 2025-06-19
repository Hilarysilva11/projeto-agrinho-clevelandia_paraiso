
// Efeitos 
document.addEventListener('DOMContentLoaded', () => {
  console.log("Página carregada com sucesso!");
});
document.addEventListener("DOMContentLoaded", () => {
 
  const localizacoes = [
    "https://maps.google.com/?q=-26.404523,-52.350092", // Exemplo: coordenadas da Cachoeira
    "https://maps.google.com/?q=-26.405123,-52.351231", // Exemplo: coordenadas das Montanhas
    "https://maps.google.com/?q=-26.406231,-52.352345"  // Exemplo: coordenadas da Trilha
  ];

  let localizacaoAtual = "";
  // Imagens da galeria
  const imagensGaleria = document.querySelectorAll("#galeria .card-img-top");

  // Listener para cada imagens
  imagensGaleria.forEach((img, index) => {
    img.addEventListener("click", () => {
      // Guarda a URL da localização correspondente
      localizacaoAtual = localizacoes[index];

      // Mostra o modal de confirmação
      const modal = new bootstrap.Modal(document.getElementById('modalLocalizacao'));
      modal.show();
    });
  });

  // Botão do modal para abrir a localização no Google Maps
  document.getElementById("btnAbrirMaps").addEventListener("click", () => {
    if (localizacaoAtual) {
      window.open(localizacaoAtual, "_blank");
    }
  });
});
// Mudar o link de localização quando abrir o modal
document.querySelectorAll('.btn-localizacao').forEach(button => {
  button.addEventListener('click', function () {
    const link = this.getAttribute('data-localizacao');
    document.getElementById('btnAbrirMaps').setAttribute('href', link);
  });
});