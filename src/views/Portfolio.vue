<script setup>
import { ref, onMounted } from 'vue';
import Modal from "../components/modals/Modal.vue";
import { useModal } from "../composables/useModal";
import IntroSection from "../components/portfolio/IntroSection.vue";
import AboutSection from "../components/portfolio/AboutSection.vue";
import ExperienceSection from "../components/portfolio/ExperienceSection.vue";
import EducationSection from "../components/portfolio/EducationSection.vue";
import ProjectsSection from "../components/portfolio/ProjectsSection.vue";
import CertificatesSection from "../components/portfolio/CertificatesSection.vue";
import HackathonsSection from "../components/portfolio/HackathonsSection.vue";

const modal = useModal();

function openModal(content) {
  modal.updateModalContent(content);
  modal.showModal();
}

const handleMouseMove = (e) => {
  const cards = document.getElementsByClassName('bento-card')
  for (const card of cards) {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }
}

const experience = {
  title: "Experience",
  data: [
    {
      date: "2025 - now",
      title: "CEO/Co-Founder Kersta GmbH",
      company: "Kersta GmbH",
      content: "Kersta.md",
    },
    {
      date: "2023 - 2025",
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
  title: "Patents, Certificates and Scholarships",
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

<template>
  <div class="container mx-auto px-6 py-12 space-y-32" @mousemove="handleMouseMove">
    
    <!-- Hello Section -->
    <IntroSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Experience Section -->
    <ExperienceSection :experience="experience" @open-modal="openModal" />

    <!-- Education Section -->
    <EducationSection :education="education" @open-modal="openModal" />

    <!-- Projects Section -->
    <ProjectsSection :projects="proj" @open-modal="openModal" />

    <!-- Certificates Section -->
    <CertificatesSection :certificates="certificates" @open-modal="openModal" />

    <!-- Hackathons Section -->
    <HackathonsSection :hackathons="hackathons" @open-modal="openModal" />

    <Modal />
  </div>
</template>

<style scoped>
:deep(.spotlight-overlay) {
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.06),
    transparent 40%
  );
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.5s;
}

:deep(.bento-card:hover .spotlight-overlay) {
  opacity: 1;
}
</style>
