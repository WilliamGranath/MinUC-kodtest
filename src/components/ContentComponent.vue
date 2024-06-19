<template>
  <div class="content-wrapper">
    <div class="content-section">
      <h2>{{ info[0].title }}</h2>
      <p>{{ info[0].content }}</p>
    </div>
    <div class="content-section">
      <h2>{{ info[1].title }}</h2>
      <p
        v-html="info[1].content"
        style="
          background-color: #054c54;
          color: #ffffff;
          padding: 2vw;
          border-radius: 5px;
          font-style: none;
        "
      ></p>
      <p
        v-html="info[1].contentTwo"
        style="font-style: italic; opacity: 0.8"
      ></p>
    </div>
  </div>
</template>

<script>
export default {
  // Komponentens namn
  name: "ContentDisplay",

  // setup-funktionen används för att definiera komponentens reaktiva data och metoder
  setup() {
    // Definierar en array med information som ska visas i komponenten
    const info = [
      {
        title: "Hur funkar Förlustanmälan?",
        content: `Om du förlorat ditt ID-kort, körkort eller pass bör du anmäla det
          direkt till oss på UC. Då minskar risken för dig att bli utsatt för
          bedrägerier. Alla som är folkbokförda i Sverige, och är över 16 år, kan
          förlustanmäla borttappad eller stulen ID-handling till oss på UC. Det
          gör du genom att ringa vår automatiska telefontjänst, dygnet runt,
          0900-101 20 30. Samtalet kostar 95 kr. Tjänsten fungerar inte med
          kontantkort. Beställer du UC ID-Skydd så bjuder vi dig på
          Förlustanmälningsavgiften (95 kr) - för att beställa, ring UC
          Kundservice på telefon: 0771-20 22 77.`,
      },
      {
        title: "Förlustanmälan - en enkel åtgärd som ger bra skydd.",
        content: `<ul>
            <li>Du ringer till UC automatiska telefontjänst och anmäler borttappad eller stulen ID-handling. Dygnet runt. Samtalet kostar 95 kr, vilket dras på din telefonräkning.</li>
            <li>Vi lägger in en notering om förlorad ID-handling i din kreditupplysning.</li>
            <li>När ett företag tar en kreditupplysning från UC på dig ser de att du förlorat din ID-handling. På så sätt kan företaget upptäcka om personen som använder din ID-handling försöker missbruka den.</li>
            <li>Du själv kan dock legitimera dig med annan eller ny legitimation. Vår notering om förlorad ID-handling ligger kvar i två år.</li>
            <li>Du kan närsomhelst återkalla uppgifterna om du tex själv hittar din ID-handling. Vill du häva din spärr använder du den blankett du fick skickad till dig när spärren aktiverades.</li>
            <li>Pass och andra ID-handlingar bör även förlustanmälas hos Polisen för att det ska spärras som resehandling.</li>
          </ul>`,
        contentTwo:
          "När vi registrerat förlustanmälan i din kreditupplysning gör kreditgivare en extra kontroll. Då kan de vara säkra på att det är du, och ingen annan, som ansöker om en kredit. Och du kan vara säker på att ingen okänd kan använda din ID-handling utan risk att kontrolleras.",
      },
    ];

    // Returnerar info-arrayen så att den blir tillgänglig i komponentens template
    return {
      info,
    };
  },
};
</script>

<style scoped>
.content-wrapper {
  background-color: #f5ebe6;
  color: #1b1b1b;
  margin-bottom: 2vw;
  border-radius: 5px;
}

.content-section {
  padding: 2vw 3vw 0;
}

.content-section h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.content-section p {
  opacity: 0.8;
}
.content-section li {
  background: orange;
  font-style: none;
}
.order-button {
  display: block;
  padding: 0.5rem 1rem;
  background-color: #895b1e;
  color: white;
  text-align: center;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-top: 1rem;
}

.order-button:hover {
  background-color: #714a1a;
}
</style>
