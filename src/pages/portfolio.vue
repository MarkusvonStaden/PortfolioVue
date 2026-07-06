<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import PortfolioHeader from "../components/portfolio/PortfolioHeader.vue";
import CvSection from "../components/portfolio/CvSection.vue";

const { t, tm } = useI18n();

useLocalizedSeo('meta.portfolio.title', 'meta.portfolio.description')

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
  <div class="max-w-3xl mx-auto px-6 py-12 md:py-16 space-y-16 md:space-y-20">
    <PortfolioHeader v-motion-slide-visible-once-bottom />

    <CvSection :title="experience.title" :entries="experience.data" v-motion-slide-visible-once-bottom />

    <CvSection :title="education.title" :entries="education.data" v-motion-slide-visible-once-bottom />

    <CvSection :title="t('portfolio.titles.projects')" :entries="proj" v-motion-slide-visible-once-bottom />

    <CvSection :title="certificates.title" :entries="certificates.data" v-motion-slide-visible-once-bottom />

    <CvSection :title="hackathons.title" :entries="hackathons.data" v-motion-slide-visible-once-bottom />
  </div>
</template>
