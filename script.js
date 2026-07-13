const properties = [
  {
    id: 1,
    ref: "LMC-041",
    title: "Venda Moradia T4 com piscina e jardim",
    type: "moradia",
    district: "Braga",
    concelho: "Braga",
    freguesia: "Nogueira",
    zone: "Braga > Nogueira",
    business: "Venda",
    state: "Novo",
    rooms: 4,
    price: 475000,
    area: 292,
    featured: true,
    tone: "linear-gradient(135deg, #cfdce8, #88a8c1)",
    summary: "Moradia contemporânea com sala ampla, suíte principal e jardim exterior com piscina.",
  },
  {
    id: 2,
    ref: "LMC-044",
    title: "Apartamento T3 renovado em zona central",
    type: "apartamento",
    district: "Braga",
    concelho: "Braga",
    freguesia: "São Vicente",
    zone: "Braga > São Vicente",
    business: "Venda",
    state: "Renovado",
    rooms: 3,
    price: 325000,
    area: 128,
    featured: true,
    tone: "linear-gradient(135deg, #e8ddd0, #b8c8da)",
    summary: "Apartamento luminoso com varanda corrida, cozinha equipada e acesso facilitado ao centro.",
  },
  {
    id: 3,
    ref: "LMC-052",
    title: "Moradia geminada T3 com terraço",
    type: "moradia",
    district: "Porto",
    concelho: "Matosinhos",
    freguesia: "Leça",
    zone: "Porto > Matosinhos",
    business: "Venda",
    state: "Novo",
    rooms: 3,
    price: 530000,
    area: 181,
    featured: true,
    tone: "linear-gradient(135deg, #d7e9f0, #9db6c7)",
    summary: "Casa com linhas limpas, duas frentes e terraço com privacidade.",
  },
  {
    id: 4,
    ref: "LMC-061",
    title: "Apartamento T2 com varanda e garagem",
    type: "apartamento",
    district: "Porto",
    concelho: "Porto",
    freguesia: "Bonfim",
    zone: "Porto > Bonfim",
    business: "Arrendamento",
    state: "Disponível",
    rooms: 2,
    price: 1450,
    area: 96,
    featured: true,
    tone: "linear-gradient(135deg, #dfeaf3, #b4cad7)",
    summary: "Arrendamento premium com garagem, varanda e ligação rápida à rede de transportes.",
  },
  {
    id: 5,
    ref: "LMC-067",
    title: "Apartamento T1 novo com acabamentos premium",
    type: "apartamento",
    district: "Braga",
    concelho: "Braga",
    freguesia: "São Vítor",
    zone: "Braga > São Vítor",
    business: "Venda",
    state: "Novo",
    rooms: 1,
    price: 199000,
    area: 67,
    featured: true,
    tone: "linear-gradient(135deg, #ebe4d8, #c7d6e1)",
    summary: "Ideal para habitação própria ou investimento com forte procura de arrendamento.",
  },
  {
    id: 6,
    ref: "LMC-072",
    title: "Moradia individual T4 em lote generoso",
    type: "moradia",
    district: "Guimarães",
    concelho: "Guimarães",
    freguesia: "Urgezes",
    zone: "Guimarães > Urgezes",
    business: "Venda",
    state: "Usado",
    rooms: 4,
    price: 390000,
    area: 246,
    featured: false,
    tone: "linear-gradient(135deg, #d5e2d3, #b1c5b5)",
    summary: "Habitação familiar com jardim, garagem dupla e excelente orientação solar.",
  },
  {
    id: 7,
    ref: "LMC-079",
    title: "Apartamento T3 remodelado para investimento",
    type: "apartamento",
    district: "Braga",
    concelho: "Braga",
    freguesia: "São José de São Lázaro",
    zone: "Braga > São José de São Lázaro",
    business: "Arrendamento",
    state: "Renovado",
    rooms: 3,
    price: 1250,
    area: 112,
    featured: false,
    tone: "linear-gradient(135deg, #d8e7ee, #a7c2d1)",
    summary: "Produto pensado para rentabilidade com acabamentos neutros e gestão simples.",
  },
  {
    id: 8,
    ref: "LMC-084",
    title: "Prédio urbano com três frações",
    type: "investimento",
    district: "Braga",
    concelho: "Barcelos",
    freguesia: "Centro",
    zone: "Barcelos > Centro",
    business: "Venda",
    state: "Oportunidade",
    rooms: 6,
    price: 995000,
    area: 430,
    featured: false,
    tone: "linear-gradient(135deg, #c8d5de, #91a9bb)",
    summary: "Ativo com rendimento atual e potencial de reabilitação numa zona consolidada.",
  },
  {
    id: 9,
    ref: "LMC-090",
    title: "Apartamento T2 novo em edifício contemporâneo",
    type: "apartamento",
    district: "Braga",
    concelho: "Braga",
    freguesia: "Nogueira",
    zone: "Braga > Nogueira",
    business: "Venda",
    state: "Novo",
    rooms: 2,
    price: 337500,
    area: 103,
    featured: false,
    tone: "linear-gradient(135deg, #dfe8f0, #b1c4d7)",
    summary: "Com elevador, estacionamento e acabamentos pensados para o segmento médio-alto.",
  },
  {
    id: 10,
    ref: "LMC-094",
    title: "Moradia térrea T4 com anexo independente",
    type: "moradia",
    district: "Amares",
    concelho: "Lago",
    freguesia: "Lago",
    zone: "Amares > Lago",
    business: "Venda",
    state: "Usado",
    rooms: 4,
    price: 550000,
    area: 268,
    featured: false,
    tone: "linear-gradient(135deg, #e8e5d7, #bfc8b9)",
    summary: "Propriedade com áreas exteriores amplas e anexo com uso multifuncional.",
  },
  {
    id: 11,
    ref: "LMC-101",
    title: "Apartamento T0 novo para rendimento",
    type: "apartamento",
    district: "Braga",
    concelho: "Braga",
    freguesia: "São José de São Lázaro",
    zone: "Braga > São José de São Lázaro",
    business: "Venda",
    state: "Novo",
    rooms: 1,
    price: 199000,
    area: 54,
    featured: false,
    tone: "linear-gradient(135deg, #dfe7ef, #b5c5d6)",
    summary: "Compacto, funcional e bem localizado para arrendamento de curta ou longa duração.",
  },
  {
    id: 12,
    ref: "LMC-108",
    title: "Apartamento T2 mobilado e equipado",
    type: "apartamento",
    district: "Braga",
    concelho: "Braga",
    freguesia: "Lomar",
    zone: "Braga > Lomar",
    business: "Arrendamento",
    state: "Disponível",
    rooms: 2,
    price: 900,
    area: 88,
    featured: false,
    tone: "linear-gradient(135deg, #e9e1d6, #c8d2dd)",
    summary: "Solução pronta a ocupar, com cozinha equipada e mobiliário incluído.",
  },
  {
    id: 13,
    ref: "LMC-115",
    title: "Moradia para restauro em lote urbano",
    type: "moradia",
    district: "Terras de Bouro",
    concelho: "Gondoriz",
    freguesia: "Gondoriz",
    zone: "Terras de Bouro > Gondoriz",
    business: "Venda",
    state: "Para recuperar",
    rooms: 3,
    price: 90000,
    area: 142,
    featured: false,
    tone: "linear-gradient(135deg, #d7d0c5, #b6b0a2)",
    summary: "Produto com margem para valorização e perfil ideal para reabilitação.",
  },
  {
    id: 14,
    ref: "LMC-123",
    title: "Apartamento T1 no centro com terraço",
    type: "apartamento",
    district: "Braga",
    concelho: "Braga",
    freguesia: "Amores e Figueiredo",
    zone: "Braga > Amores e Figueiredo",
    business: "Venda",
    state: "Novo",
    rooms: 1,
    price: 215000,
    area: 61,
    featured: false,
    tone: "linear-gradient(135deg, #dce7ee, #aebfd0)",
    summary: "Boa relação entre localização, área exterior privada e funcionalidade.",
  },
  {
    id: 15,
    ref: "LMC-131",
    title: "Apartamento T3 com varanda e vista aberta",
    type: "apartamento",
    district: "Braga",
    concelho: "Vila Verde",
    freguesia: "Centro",
    zone: "Vila Verde > Centro",
    business: "Venda",
    state: "Renovado",
    rooms: 3,
    price: 425000,
    area: 139,
    featured: false,
    tone: "linear-gradient(135deg, #d8e1e8, #aec2d0)",
    summary: "Apartamento amplo com excelentes condições de luz natural e vista desafogada.",
  },
  {
    id: 16,
    ref: "LMC-138",
    title: "Apartamento T3 em condomínio fechado",
    type: "apartamento",
    district: "Braga",
    concelho: "São Vicente",
    freguesia: "São Vicente",
    zone: "Braga > São Vicente",
    business: "Venda",
    state: "Reservado",
    rooms: 3,
    price: 310000,
    area: 114,
    featured: false,
    tone: "linear-gradient(135deg, #e2e2de, #bec8d3)",
    summary: "Tipologia equilibrada, segurança, garagem e proximidade a serviços essenciais.",
  },
];

const money = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

function formatPrice(value) {
  if (value >= 10000) return money.format(value);
  return `${value.toLocaleString("pt-PT")} €/mês`;
}

function cardMarkup(property) {
  return `
    <article class="property-card" data-id="${property.id}">
      <div class="property-card__media" style="--tone:${property.tone}">
        <span class="property-card__badge">${property.business}</span>
        <span class="property-card__price">${formatPrice(property.price)}</span>
      </div>
      <div class="property-card__body">
        <div style="font-size:.78rem;color:#8a8f95;margin-bottom:4px;">Ref. ${property.ref}</div>
        <h3>${property.title}</h3>
        <p>${property.zone}</p>
        <div class="property-card__meta">
          <span>${property.type}</span>
          <span>${property.rooms} quartos</span>
          <span>${property.area} m²</span>
        </div>
        <div class="property-card__footer">
          <span>${property.state}</span>
          <button type="button" data-open-property="${property.id}">Ver detalhes</button>
        </div>
      </div>
    </article>
  `;
}

function openPropertyModal(property) {
  const modal = document.querySelector("#property-modal");
  const body = document.querySelector("#property-modal-body");
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="modal__grid">
      <div class="modal__image" style="--tone:${property.tone}">
        <img src="assets/listings-collage.png" alt="${property.title}">
      </div>
      <div class="modal__body">
        <div style="font-size:.78rem;color:#8a8f95;margin-bottom:8px;">Ref. ${property.ref}</div>
        <h2>${property.title}</h2>
        <p>${property.summary}</p>
        <div class="property-card__meta">
          <span>${property.zone}</span>
          <span>${property.rooms} quartos</span>
          <span>${property.area} m²</span>
          <span>${property.business}</span>
        </div>
        <strong style="display:block;font-size:1.5rem;margin-top:6px;">${formatPrice(property.price)}</strong>
        <div class="modal__tags">
          <span class="tag">${property.state}</span>
          <span class="tag">${property.district}</span>
          <span class="tag">${property.concelho}</span>
          <span class="tag">${property.freguesia}</span>
        </div>
      </div>
    </div>
  `;
  modal.classList.add("is-open");
}

function closeModal(modal) {
  modal.classList.remove("is-open");
}

function setupPropertyListings() {
  const featuredGrid = document.querySelector("#featured-grid");
  if (featuredGrid) {
    featuredGrid.innerHTML = properties
      .filter((item) => item.featured)
      .slice(0, 8)
      .map(cardMarkup)
      .join("");
  }

  const listingsGrid = document.querySelector("#listings-grid");
  const filtersForm = document.querySelector("#listing-filters");
  const countEl = document.querySelector("#listing-count");

  if (listingsGrid) {
    const render = () => {
      const values = filtersForm ? Object.fromEntries(new FormData(filtersForm).entries()) : {};
      const filtered = properties.filter((p) => {
        const q = (values.q || "").trim().toLowerCase();
        const type = values.type || "all";
        const district = values.district || "all";
        const concelho = values.concelho || "all";
        const zone = values.zone || "all";
        const business = values.business || "all";
        const state = values.state || "all";
        const rooms = values.rooms || "all";
        const minPrice = Number(values.minPrice || 0);
        const maxPrice = Number(values.maxPrice || Number.POSITIVE_INFINITY);
        const minArea = Number(values.minArea || 0);
        const maxArea = Number(values.maxArea || Number.POSITIVE_INFINITY);

        const textMatch = !q ||
          [p.title, p.ref, p.zone, p.district, p.concelho, p.freguesia, p.business]
            .join(" ")
            .toLowerCase()
            .includes(q);

        return textMatch &&
          (type === "all" || p.type === type) &&
          (district === "all" || p.district === district) &&
          (concelho === "all" || p.concelho === concelho) &&
          (zone === "all" || p.zone === zone) &&
          (business === "all" || p.business === business) &&
          (state === "all" || p.state === state) &&
          (rooms === "all" || String(p.rooms) === rooms) &&
          p.price >= minPrice &&
          p.price <= maxPrice &&
          p.area >= minArea &&
          p.area <= maxArea;
      });

      listingsGrid.innerHTML = filtered.length
        ? filtered.map(cardMarkup).join("")
        : `<div class="panel content-card" style="grid-column:1/-1">Nenhum imóvel encontrado com os filtros selecionados.</div>`;

      if (countEl) countEl.textContent = `${filtered.length} imóveis`;

      listingsGrid.querySelectorAll("[data-open-property]").forEach((button) => {
        button.addEventListener("click", () => {
          const property = properties.find((item) => item.id === Number(button.dataset.openProperty));
          if (property) openPropertyModal(property);
        });
      });
    };

    render();
    filtersForm?.addEventListener("input", render);
    filtersForm?.addEventListener("change", render);
    filtersForm?.addEventListener("submit", (event) => {
      event.preventDefault();
      render();
    });
  }

  const modal = document.querySelector("#property-modal");
  modal?.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-modal]")) closeModal(modal);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal?.classList.contains("is-open")) closeModal(modal);
  });
}

function calcImt(price, purpose, age, extraCosts) {
  const standardBands = [
    { max: 104000, rate: 0, deduction: 0 },
    { max: 142000, rate: 0.02, deduction: 2080 },
    { max: 192000, rate: 0.05, deduction: 6120 },
    { max: 330000, rate: 0.07, deduction: 9970 },
    { max: 650000, rate: 0.08, deduction: 13350 },
    { max: 1000000, rate: 0.06, deduction: 0 },
    { max: Infinity, rate: 0.075, deduction: 0 },
  ];

  const ownerBands = [
    { max: 104000, rate: 0, deduction: 0 },
    { max: 142000, rate: 0.015, deduction: 1560 },
    { max: 192000, rate: 0.035, deduction: 4400 },
    { max: 330000, rate: 0.06, deduction: 9200 },
    { max: 650000, rate: 0.075, deduction: 12650 },
    { max: 1000000, rate: 0.055, deduction: 0 },
    { max: Infinity, rate: 0.07, deduction: 0 },
  ];

  const youthBands = [
    { max: 316772, rate: 0, deduction: 0 },
    { max: 633453, rate: 0.08, deduction: 0 },
    { max: 1000000, rate: 0.06, deduction: 0 },
    { max: Infinity, rate: 0.075, deduction: 0 },
  ];

  const bands = purpose === "jovem" || age <= 35 ? youthBands : purpose === "propria" ? ownerBands : standardBands;
  const band = bands.find((row) => price <= row.max) || bands[bands.length - 1];
  const imt = Math.max(0, price * band.rate - band.deduction);
  const is = price * 0.008;
  const total = imt + is + extraCosts;
  return { imt, is, total, rate: band.rate, deduction: band.deduction };
}

function renderImtTables() {
  const standard = document.querySelector("#imt-table-standard");
  const youth = document.querySelector("#imt-table-youth");
  if (!standard || !youth) return;

  const rowsStandard = [
    ["Até 104 000 €", "0%", "0,00 €"],
    ["Mais de 104 000 € até 142 000 €", "2%", "2 080,00 €"],
    ["Mais de 142 000 € até 192 000 €", "5%", "6 120,00 €"],
    ["Mais de 192 000 € até 330 000 €", "7%", "9 970,00 €"],
    ["Mais de 330 000 € até 650 000 €", "8%", "13 350,00 €"],
    ["Mais de 650 000 € até 1 000 000 €", "6%", "0,00 €"],
    ["Mais de 1 000 000 €", "7,5%", "0,00 €"],
  ];

  const rowsYouth = [
    ["Até 316 772 €", "0%", "0,00 €"],
    ["Mais de 316 772 € até 633 453 €", "8%", "0,00 €"],
    ["Mais de 633 453 € até 1 000 000 €", "6%", "0,00 €"],
    ["Mais de 1 000 000 €", "7,5%", "0,00 €"],
  ];

  standard.innerHTML = rowsStandard.map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("");
  youth.innerHTML = rowsYouth.map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("");
}

function setupImtSimulator() {
  const form = document.querySelector("#imt-form");
  if (!form) return;

  const resultImt = document.querySelector("#imt-result-imt");
  const resultIs = document.querySelector("#imt-result-is");
  const resultTotal = document.querySelector("#imt-result-total");
  const resultRate = document.querySelector("#imt-result-rate");
  const resultDeduction = document.querySelector("#imt-result-deduction");

  const update = () => {
    const price = Number(document.querySelector("#imt-price").value || 0);
    const purpose = document.querySelector("#imt-purpose").value;
    const age = Number(document.querySelector("#imt-age").value || 0);
    const extraCosts = Number(document.querySelector("#imt-extra").value || 0);

    const calc = calcImt(price, purpose, age, extraCosts);
    if (resultImt) resultImt.textContent = money.format(calc.imt);
    if (resultIs) resultIs.textContent = money.format(calc.is);
    if (resultTotal) resultTotal.textContent = money.format(calc.total);
    if (resultRate) resultRate.textContent = `${(calc.rate * 100).toFixed(1)}%`;
    if (resultDeduction) resultDeduction.textContent = money.format(calc.deduction);
  };

  form.addEventListener("input", update);
  form.addEventListener("change", update);
  form.addEventListener("submit", (event) => event.preventDefault());
  update();
  renderImtTables();
}

function setupNewsletterAndForms() {
  document.querySelectorAll("form[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Pedido guardado em modo demonstrativo. Ligue este formulário a um backend para envio real.");
    });
  });
}

setupPropertyListings();
setupImtSimulator();
setupNewsletterAndForms();
