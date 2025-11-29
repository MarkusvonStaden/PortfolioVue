<script setup>
import { ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Modal from "../components/modals/Modal.vue";
import { useModal } from "../composables/useModal";
import IntroSection from "../components/portfolio/IntroSection.vue";
import AboutSection from "../components/portfolio/AboutSection.vue";
import ExperienceSection from "../components/portfolio/ExperienceSection.vue";
import EducationSection from "../components/portfolio/EducationSection.vue";
import ProjectsSection from "../components/portfolio/ProjectsSection.vue";
import CertificatesSection from "../components/portfolio/CertificatesSection.vue";
import HackathonsSection from "../components/portfolio/HackathonsSection.vue";

const { t, tm } = useI18n();
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

const experience = computed(() => ({
  title: t('portfolio.titles.experience'),
  data: [
    {
      date: "2025 - now",
      ...tm('portfolio.experience_data.kersta'),
    },
    {
      date: "2023 - 2025",
      ...tm('portfolio.experience_data.teamlead'),
    },
    {
      date: "2022",
      ...tm('portfolio.experience_data.bachelor_thesis'),
    },
    {
      date: "2021 - 2023",
      ...tm('portfolio.experience_data.consultant'),
    },
    {
      date: "2020 - 2021",
      ...tm('portfolio.experience_data.mahle'),
    },
  ],
}));

const education = computed(() => ({
  title: t('portfolio.titles.education'),
  data: [
    {
      date: "2023 - now",
      ...tm('portfolio.education_data.master'),
    },
    {
      date: "2018 - 2023",
      ...tm('portfolio.education_data.bachelor'),
    },
  ],
}));

const certificates = computed(() => ({
  title: t('portfolio.titles.certificates'),
  data: [
    {
      date: "2023 - now",
      ...tm('portfolio.certificates_data.scholarship'),
    },
    {
      date: "2021",
      ...tm('portfolio.certificates_data.patent'),
    },
    {
      date: "2020",
      ...tm('portfolio.certificates_data.aukom'),
    },
  ],
}));

const proj = computed(() => [
  {
    image: "/files/Planter.jpg",
    ...tm('portfolio.projects_data.planter'),
  },
  {
    image: "/files/smartmockups_lrf40q4x.jpg",
    ...tm('portfolio.projects_data.spotivote'),
  },
  {
    image: "/files/Blackboard.jpg",
    ...tm('portfolio.projects_data.board_detection'),
  },
]);

const hackathons = computed(() => ({
  title: t('portfolio.titles.hackathons'),
  data: [
    {
      date: "2022",
      ...tm('portfolio.hackathons_data.ostalb'),
    },
    {
      date: "2020, 2021, 2022",
      ...tm('portfolio.hackathons_data.packaging_valley'),
    },
    {
      date: "2023",
      ...tm('portfolio.hackathons_data.smart_green'),
    },
  ],
}));
</script>

<template>
  <div class="container mx-auto px-6 py-12 space-y-32" @mousemove="handleMouseMove">
    
    <!-- Hello Section -->
    <IntroSection v-motion-slide-visible-once-bottom />

    <!-- About Section -->
    <AboutSection v-motion-slide-visible-once-bottom />

    <!-- Experience Section -->
    <ExperienceSection :experience="experience" @open-modal="openModal" v-motion-slide-visible-once-bottom />

    <!-- Education Section -->
    <EducationSection :education="education" @open-modal="openModal" v-motion-slide-visible-once-bottom />

    <!-- Projects Section -->
    <ProjectsSection :projects="proj" @open-modal="openModal" v-motion-slide-visible-once-bottom />

    <!-- Certificates Section -->
    <CertificatesSection :certificates="certificates" @open-modal="openModal" v-motion-slide-visible-once-bottom />

    <!-- Hackathons Section -->
    <HackathonsSection :hackathons="hackathons" @open-modal="openModal" v-motion-slide-visible-once-bottom />

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
