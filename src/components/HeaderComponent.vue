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
import { ref, onMounted } from "vue";
import { getContent } from "@/api/api"; // Adjust import path as per your project structure

export default {
  name: "ContentComponent",
  setup() {
    const metaTitle = ref("");
    const metaDescription = ref("");

    const navigateToURL = () => {
      window.location.href = "https://www1.minuc.se/bedragerisparr";
    };

    onMounted(async () => {
      try {
        const response = await getContent();
        metaTitle.value = response.data.metaTitle.value;
        metaDescription.value = response.data.metaDescription.value;
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    });

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
