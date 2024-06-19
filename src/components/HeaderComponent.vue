<template>
  <div>
    <div class="content">
      <div class="text">
        <h2>{{ metaTitle }}</h2>
        <p>{{ metaDescription }}</p>
      </div>
      <img src="../assets/forlustanmalan-hero-desktop.png" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue"; // Importerar ref och onMounted från Vue
import { getContent } from "@/api/api"; // Importerar getContent-funktionen från API-modulen (justera sökvägen enligt din projektstruktur)

export default {
  // Komponentens namn
  name: "ContentComponent",

  // setup-funktionen används för att definiera komponentens reaktiva data och metoder
  setup() {
    // Definierar reaktiva referenser för metaTitle och metaDescription
    const metaTitle = ref("");
    const metaDescription = ref("");

    // Definierar en funktion för att navigera till en specifik URL
    const navigateToURL = () => {
      window.location.href = "https://www1.minuc.se/bedragerisparr";
    };

    // Körs när komponenten är monterad
    onMounted(async () => {
      try {
        // Hämtar innehåll från API:et
        const response = await getContent();
        // Uppdaterar reaktiva variabler med data från API:et
        metaTitle.value = response.data.metaTitle.value;
        metaDescription.value = response.data.metaDescription.value;
      } catch (error) {
        // Loggar ett felmeddelande om något går fel vid hämtning av innehåll
        console.error("Error fetching content:", error);
      }
    });

    // Returnerar de reaktiva variablerna och metoden så att de blir tillgängliga i komponentens template
    return {
      metaTitle,
      metaDescription,
      navigateToURL,
    };
  },
};
</script>

<style scoped>
.content {
  display: flex;
  width: 100%;
  color: #1b1b1b;
  text-align: left;
  background: #f5ebe6;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
}
.content .text {
  padding: 2vw 3vw;
}
.content h2 {
  font-size: 3.6vw;
  border-bottom: 2px solid #1b1b1b;
  margin-bottom: 1vh;
}
.content p {
  font-size: 1.8vw;
}
.content img {
  width: 40%;
  padding: 3vw 2vw;
  border-radius: 5px;
}
</style>
