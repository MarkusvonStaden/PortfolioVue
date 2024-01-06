<script setup>
import Hello from "./components/Hello.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import Modal from "./components/modals/Modal.vue";
</script>

<template>
  <div class="snap-mandatory snap-y overflow-y-scroll h-screen">
    <Hello class="snap-start" />
    <About class="snap-start" />
    <List :data="experience" class="snap-start" />
    <Projects class="snap-start" />
    <List :data="certificates" class="snap-start" />
    <List :data="hackathons" class="snap-start" />
    <Footer class="snap-start" />
    <Modal />
  </div>
</template>

<script>
const experience = {
  title: "Experience",
  data: [
    {
      date: "2023 - now",
      title: "Teamlead Technology",
      company: "Hochschule Aalen",
      file: "Teamlead.md",
    },
    {
      date: "2022",
      title: "Bachelors Thesis",
      company: "Projektraum Reger",
    },
    {
      date: "2021 - 2023",
      title: "Technology Consultant",
      company: "Hochschule Aalen",
    },
    {
      date: "2021",
      title: "Intern - Corporate Research",
      company: "Mahle",
    },
  ],
};

const certificates = {
  title: "Patents, Certificates and Scholarschips",
  data: [
    {
      date: "2023 - now",
      title: "Scholarship",
      company: "German Academic Scholarship Foundation",
    },
    {
      date: "2021",
      title: "Manual Intervention Tracking in Automated Production",
      company: "Patent DE102021105260B3",
    },
    {
      date: "2020",
      title: "AUKOM 1",
      company: "Hochschule Aalen",
    },
  ],
};

const proj = [
  {
    date: "2021",
    title: "Aalen City App",
    company: "Hochschule Aalen",
  },
  {
    date: "2020",
    title: "Aalen City App",
    company: "Hochschule Aalen",
  },
  {
    date: "2019",
    title: "Aalen City App",
    company: "Hochschule Aalen",
  },
];

const hackathons = {
  title: "Hackathons",
  data: [
    {
      date: "2022",
      title: "Ostalb Hackathon",
      company: "Challenge: Voith (1st Place)",
    },
    {
      date: "2020, 2021, 2022",
      title: "Packaging Valley Hackathon",
      company:
        "Challenges: Digital machine logbook (Patent), Optical monitorin of vital signs, Automatic user authentication on machines",
    },
    {
      date: "2023",
      title: "Smart Green Island Makeathon, Gran Canaria",
      company: "Challenge: Detection and tracking of plastic in open waters",
    },
  ],
};
</script>

<style scoped></style>
