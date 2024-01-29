<script setup>
import Hello from "./components/Hello.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import Modal from "./components/modals/Modal.vue";
</script>

<template>
  <div
    class="md:snap-mandatory snap-y overflow-y-scroll h-screen no-scrollbar bg-[#131316]"
  >
    <Hello class="snap-start pb-8 pt-8 md:pt-0 md:pb-0" />
    <About class="snap-start pb-8 pt-8 md:pt-0 md:pb-0" />
    <List :data="experience" class="snap-start pb-8 pt-8 md:pb-0" />
    <List :data="education" class="snap-start pb-8 pt-8 md:pt-0 md:pb-0" />
    <Projects :data="proj" class="snap-start pb-8 pt-8 md:pt-0 md:pb-0" />
    <List :data="certificates" class="snap-start pb-8 pt-8 md:pt-0 md:pb-0" />
    <List :data="hackathons" class="snap-start pb-8 pt-8 md:pt-0 md:pb-0" />
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
      content: "Teamlead.md",
    },
    {
      date: "2022",
      title: "Prototype development of a robotic arm - Bachelor Thesis",
      company: "Projektraum Reger",
      content: "Bachelorarbeit.md",
    },
    {
      date: "2021 - 2023",
      title: "Technology Consultant",
      company: "Hochschule Aalen",
      content: "Consultant.md",
    },
    {
      date: "2020 - 2021",
      title: "Intern - Corporate Research",
      company: "Mahle",
      content: "Mahle.md",
    },
  ],
};

const education = {
  title: "Education",
  data: [
    {
      date: "2023 - now",
      title: "Master of Science - Machine Learning and Data Analytics",
      company: "Aalen University (Germany)",
      content: "Master.md",
    },
    {
      date: "2018 - 2023",
      title: "Bachelor of Engineering - Mechatronics",
      company: "Aalen University (Germany)",
      content: "Bachelor.md",
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
      content: "Studienstiftung.md",
    },
    {
      date: "2021",
      title: "Manual Intervention Tracking in Automated Production",
      company: "Patent DE102021105260B3",
      content: "Patent.md",
    },
    {
      date: "2020",
      title: "AUKOM 1",
      company: "Hochschule Aalen",
      content: "AUKOM.md",
    },
  ],
};

const proj = [
  {
    image: "/files/Planter.jpg",
    title: "Smart Planter",
    content: "Planter.md",
  },
  {
    image: "/files/smartmockups_lrf40q4x.jpg",
    title: "SpotiVote",
    content: "SpotiVote.md",
  },
  {
    image: "/files/Blackboard.jpg",
    title: "Board Detection",
    content: "Tafelbild.md",
  },
];

const hackathons = {
  title: "Hackathons",
  data: [
    {
      date: "2022",
      title: "Ostalb Hackathon",
      company: "Challenge: Voith (1st Place)",
      content: "Ostalb.md",
    },
    {
      date: "2020, 2021, 2022",
      title: "Packaging Valley Hackathon",
      company:
        "Challenges: Digital machine logbook (Patent), Optical monitorin of vital signs, Automatic user authentication on machines",
      content: "PackagingValley.md",
    },
    {
      date: "2023",
      title: "Smart Green Island Makeathon, Gran Canaria",
      company: "Challenge: Detection and tracking of plastic in open waters",
      content: "SmartGreen.md",
    },
  ],
};
</script>
