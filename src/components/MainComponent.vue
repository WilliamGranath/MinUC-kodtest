<template>
  <div class="main">
    <div class="cards">
      <div class="cardOne">
        <h2>Anmäl förlust</h2>
        <p>
          Ring vår automatiska telefontjänst, dygnet runt. Samtalet kostar 95
          kr. Tjänsten fungerar inte med kontantkort.
        </p>
        <h2>0900-101 20 30</h2>
        <p>
          Om du befinner dig utomlands når du förlustanmälan på nedanstående
          nummer
        </p>
        <h3>+46 900-101 20 30</h3>
      </div>
      <div class="cardTwo">
        <h2>Redan utsatt för bedrägeri?</h2>
        <p>
          Är du redan utsatt för ett bedrägeri kan det vara en god idé att helt
          spärra din kreditupplysning hos UC. Då minskar du risken för fortsatta
          bedrägerier.
        </p>
        <a
          href="https://www1.minuc.se/bedragerisparr"
          target="_blank"
          rel="noopener noreferrer"
          class="order-link"
        >
          Beställ här!
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue"; // Importerar ref och onMounted från Vue
import { getContent } from "../api/api"; // Importerar getContent-funktionen från API-modulen (justera sökvägen enligt din projektstruktur)

export default {
  // Komponentens namn
  name: "MainComponent",

  // Definierar props som komponenten kan ta emot
  props: {
    Header: String, // Header är en prop av typen String
  },

  // setup-funktionen används för att definiera komponentens reaktiva data och metoder
  setup() {
    // Definierar en reaktiv referens för Header
    const Header = ref("");

    // Körs när komponenten är monterad
    onMounted(async () => {
      try {
        // Hämtar innehåll från API:et
        const response = await getContent();
        // Uppdaterar den reaktiva variabeln Header med data från API:et
        Header.value = response.data.name;
      } catch (error) {
        // Loggar ett felmeddelande om något går fel vid hämtning av innehåll
        console.error("Error fetching content:", error);
      }
    });

    // Returnerar de reaktiva variablerna och metoderna så att de blir tillgängliga i komponentens template
    return {};
  },
};
</script>
<style>
.main {
  padding: 1.7vw 0vw;
  display: flex;
  justify-content: center;
}
.main .text {
  text-align: left;
}
.main .text ul {
  list-style-type: circle;
  list-style-type: circle;
  font-size: 0.9vw;
}
.main .cards {
  display: flex;
  flex-direction: row;
  text-align: left;
  color: #1b1b1b;
  justify-content: space-between;
}

.main .cardOne {
  width: 55%;
  background: #f5ebe6;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2vw 3vw;
}
.main .cardTwo {
  width: 30.6%;
  background: #f5ebe6;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2vw 3vw;
}
.order-link {
  text-decoration: none; /* Remove underline */
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #054c54; /* Your preferred background color */
  color: #ffffff; /* Text color */
  border-radius: 0.25rem; /* Rounded corners */
  transition: background-color 0.3s ease;
  opacity: 0.8;
}

.order-link:hover {
  opacity: 1;
  color: #ffffff; /* Text color on hover */
}
</style>
