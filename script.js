const properties = [
  {
    id: 1,
    title: "Moradia T4 contemporânea com piscina e jardim",
    type: "moradia",
    zone: "cascais",
    city: "Cascais",
    price: 1450000,
    area: 312,
    rooms: 4,
    baths: 5,
    tag: "Luxo",
    image: "linear-gradient(135deg, #1f3c66, #4f8ac8)",
    summary:
      "Arquitetura moderna, acabamentos premium, sala em open space e garagem para 2 carros.",
    details: [
      "Suite principal com closet e varanda",
      "Piscina aquecida e zona lounge exterior",
      "Domótica e climatização integral",
    ],
  },
  {
    id: 2,
    title: "Apartamento T3 renovado com varanda no centro",
    type: "apartamento",
    zone: "lisboa",
    city: "Lisboa",
    price: 595000,
    area: 128,
    rooms: 3,
    baths: 2,
    tag: "Novo",
    image: "linear-gradient(135deg, #274e8b, #7aa8df)",
    summary:
      "Imóvel luminoso, cozinha equipada e varanda corrida em prédio com elevador.",
    details: [
      "Renovação total recente",
      "Aquecimento e caixilharia nova",
      "Zona central com comércio e transportes",
    ],
  },
  {
    id: 3,
    title: "Apartamento T2 com vista rio e estacionamento",
    type: "apartamento",
    zone: "lisboa",
    city: "Lisboa",
    price: 385000,
    area: 94,
    rooms: 2,
    baths: 2,
    tag: "Vista aberta",
    image: "linear-gradient(135deg, #16304c, #3f6f9f)",
    summary:
      "Sala ampla com vista desafogada, cozinha em ilha e lugar de garagem incluído.",
    details: [
      "Edifício recente com elevador",
      "Excelente exposição solar",
      "Ideal para habitação própria ou arrendamento",
    ],
  },
  {
    id: 4,
    title: "Moradia T5 com terreno e anexo independente",
    type: "moradia",
    zone: "porto",
    city: "Porto",
    price: 890000,
    area: 338,
    rooms: 5,
    baths: 4,
    tag: "Família",
    image: "linear-gradient(135deg, #2a405b, #6e8fba)",
    summary:
      "Espaço exterior generoso, anexo multifuncional e área social pensada para convívio.",
    details: [
      "Terreno com potencial de jardim e horta",
      "Anexo para escritório ou alojamento",
      "Boa proximidade a acessos principais",
    ],
  },
  {
    id: 5,
    title: "Imóvel de investimento com 3 frações arrendadas",
    type: "investimento",
    zone: "porto",
    city: "Porto",
    price: 725000,
    area: 210,
    rooms: 6,
    baths: 3,
    tag: "Yield",
    image: "linear-gradient(135deg, #22385f, #325f98)",
    summary:
      "Ativo com rendimento distribuído, contratos em vigor e retorno estável.",
    details: [
      "Receita mensal diversificada",
      "Gestão simples para investidor",
      "Zona com procura sustentada",
    ],
  },
  {
    id: 6,
    title: "Penthouse T4 com rooftop e jacuzzi",
    type: "apartamento",
    zone: "algarve",
    city: "Algarve",
    price: 1980000,
    area: 245,
    rooms: 4,
    baths: 4,
    tag: "Premium",
    image: "linear-gradient(135deg, #173b53, #4a84ab)",
    summary:
      "Terraço panorâmico, interiores amplos e forte vocação para residência ou férias.",
    details: [
      "Rooftop com cozinha exterior",
      "Acabamentos contemporâneos",
      "Condomínio fechado com segurança",
    ],
  },
];

const grid = document.querySelector("#property-grid");
const typeFilter = document.querySelector("#filter-type");
const zoneFilter = document.querySelector("#filter-zone");
const priceFilter = document.querySelector("#filter-price");
const modal = document.querySelector("#property-modal");
const modalContent = document.querySelector("#modal-content");

function formatCurrency(value) {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function propertyCard(property) {
  return `
    <article class="property-card">
      <div class="property-card__image" style="--image:${property.image}">
        <span class="badge">${property.tag}</span>
        <span class="badge">${property.city}</span>
      </div>
      <div class="property-card__body">
        <h3>${property.title}</h3>
        <p>${property.summary}</p>
        <div class="property-meta">
          <span>${property.area} m²</span>
          <span>${property.rooms} quartos</span>
          <span>${property.baths} casas de banho</span>
        </div>
        <div class="property-footer">
          <div class="price">${formatCurrency(property.price)}</div>
          <button class="link-btn" data-open-modal="${property.id}">Ver detalhes</button>
        </div>
      </div>
    </article>
  `;
}

function renderProperties() {
  const type = typeFilter.value;
  const zone = zoneFilter.value;
  const maxPrice = priceFilter.value === "all" ? Infinity : Number(priceFilter.value);

  const filtered = properties.filter((property) => {
    const matchesType = type === "all" || property.type === type;
    const matchesZone = zone === "all" || property.zone === zone;
    const matchesPrice = property.price <= maxPrice;
    return matchesType && matchesZone && matchesPrice;
  });

  grid.innerHTML =
    filtered.length > 0
      ? filtered.map(propertyCard).join("")
      : `<div class="panel-card" style="grid-column:1/-1">Nenhum imóvel corresponde aos filtros selecionados.</div>`;

  grid.querySelectorAll("[data-open-modal]").forEach((button) => {
    button.addEventListener("click", () => openModal(Number(button.dataset.openModal)));
  });
}

function openModal(id) {
  const property = properties.find((item) => item.id === id);
  if (!property) return;

  modalContent.innerHTML = `
    <div class="modal__grid">
      <div class="modal__hero" style="--image:${property.image}">
        <span class="badge">${property.tag}</span>
      </div>
      <div>
        <span class="eyebrow">${property.city}</span>
        <h2 id="modal-title">${property.title}</h2>
        <p>${property.summary}</p>
        <div class="property-meta">
          <span>${property.area} m²</span>
          <span>${property.rooms} quartos</span>
          <span>${property.baths} casas de banho</span>
        </div>
        <strong class="price">${formatCurrency(property.price)}</strong>
        <ul class="modal__list">
          ${property.details.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

typeFilter.addEventListener("change", renderProperties);
zoneFilter.addEventListener("change", renderProperties);
priceFilter.addEventListener("change", renderProperties);

modal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-modal]")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Pedido de contacto preparado. Ligue o formulário a um backend para envio real.");
});

renderProperties();
