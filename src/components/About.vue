<template>
  <div
    class="bg-[#131316] min-h-screen text-slate-100 grid place-items-center content-center -z-10"
  >
    <h1
      class="relative text-7xl w-2/3 mx-10 my-5 z-10 font-extralight font-sans"
    >
      About Me
    </h1>
    <div class="box-accent-inv w-2/3 px-10 py-5 max-h-min lg:max-h-16">
      <p class="z-10 relative font-mono text-xl text-black">
        Machine Learning Student and Mechatronics Engineer
      </p>

      <img
        src="../assets/profile.jpg"
        alt="Image of me"
        class="w-1/6 rounded-2xl -translate-y-1/4 object-cover min-h-72 max-h-96 hidden lg:block float-right z-50 relative"
      />
    </div>
    <div class="w-2/3 z-10 flex gap-20">
      <article
        class="w-1/2 flex-1 p-5 prose prose-lg prose-invert prose-neutral"
      >
        <ul>
          <li>Passionate Machine Learning Students</li>
          <li>Tinkerer with 3D Printers, Electronics and Programming</li>
          <li>
            Motivated team player and former member of the volunteer fire
            department
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>
