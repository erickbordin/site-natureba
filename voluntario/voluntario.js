const estadoSelect = document.getElementById("estado");
const cidadeSelect = document.getElementById("cidade");
const form = document.getElementById("form");

const cidadesPorEstado = {
  ac: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá", "Feijó"],
  al: ["Maceió", "Arapiraca", "Palmeira dos Índios", "Rio Largo", "Penedo"],
  ap: ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque", "Mazagão"],
  am: ["Manaus", "Parintins", "Itacoatiara", "Manacapuru", "Coari"],
  ba: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna"],
  ce: ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú", "Sobral"],
  df: ["Brasília", "Gama", "Taguatinga", "Ceilândia", "Samambaia"],
  es: ["Vitória", "Vila Velha", "Serra", "Cariacica", "Linhares"],
  go: ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde", "Luziânia"],
  ma: ["São Luís", "Imperatriz", "Timon", "Caxias", "Codó"],
  mt: ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop", "Tangará da Serra"],
  ms: ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá", "Ponta Porã"],
  mg: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Montes Claros"],
  pa: ["Belém", "Ananindeua", "Santarém", "Marabá", "Parauapebas"],
  pb: ["João Pessoa", "Campina Grande", "Santa Rita", "Patos", "Bayeux"],
  pr: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel"],
  pe: ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru", "Petrolina"],
  pi: ["Teresina", "Parnaíba", "Picos", "Floriano", "Piripiri"],
  rj: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Niterói", "Nova Iguaçu"],
  rn: ["Natal", "Mossoró", "Parnamirim", "Caicó", "São Gonçalo do Amarante"],
  rs: [
    "Porto Alegre", "Caxias do Sul", "Canoas", "Pelotas", "Santa Maria",
    "Gravataí", "Novo Hamburgo", "Viamão", "Passo Fundo", "São Leopoldo"
  ],
  ro: ["Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena", "Cacoal"],
  rr: ["Boa Vista", "Rorainópolis", "Caracaraí", "Alto Alegre", "Mucajaí"],
  sc: ["Florianópolis", "Joinville", "Blumenau", "Chapecó", "São José"],
  sp: [
    "São Paulo", "Campinas", "Guarulhos", "São Bernardo do Campo",
    "Santo André", "Osasco", "Ribeirão Preto", "Sorocaba", "São José dos Campos"
  ],
  se: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana", "Estância"],
  to: ["Palmas", "Araguaína", "Gurupi", "Porto Nacional", "Paraíso do Tocantins"]
};


estadoSelect.addEventListener("change", function () {
  const estadoSelecionado = estadoSelect.value;

  cidadeSelect.innerHTML = '<option value="">selecione</option>';

  if (estadoSelecionado && cidadesPorEstado[estadoSelecionado]) {
    cidadesPorEstado[estadoSelecionado].forEach(cidade => {
      const option = document.createElement("option");
      option.value = cidade.toLowerCase().replace(/\s+/g, "-");
      option.textContent = cidade;
      cidadeSelect.appendChild(option);
    });
  }
});

form.addEventListener("submit", function (e) {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const idade = document.getElementById("idade").value.trim();
  const estado = estadoSelect.value;
  const cidade = cidadeSelect.value;
  const privacidade = document.getElementById("privacidade").checked;

  let erros = [];

  if (nome.length < 3) {
    erros.push("Por favor, informe seu nome completo.");
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    erros.push("E-mail inválido.");
  }

  if (telefone.replace(/\D/g, "").length < 10) {

    erros.push("Número de telefone inválido.");
  }

  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(idade)) {
    erros.push("Data de nascimento deve estar no formato dia/mês/ano.");
  }

  if (!estado) {
    erros.push("Selecione um estado.");
  }
  if (!cidade) {
    erros.push("Selecione uma cidade.");
  }

  if (!privacidade) {
    erros.push("Você deve aceitar os termos e condições.");
  }

  if (erros.length > 0) {
    e.preventDefault();
    alert(erros.join("\n"));
  }
});
