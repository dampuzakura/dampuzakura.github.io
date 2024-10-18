<script lang="ts">
  /*
   * Please set the following variables to your liking!
   * You can use Fluent UI System Icons and Simple Icons for the icons!
   * Fluent UI System Icons: https://icones.js.org/collection/fluent
   * Simple Icons: https://icones.js.org/collection/simple-icons
   */
  const name = 'Dampuzakura';
  const introduction =
    'I am a high school student from Japan who enjoys developing and taking photos.';
  const avatar = '/dz-portfolio/images/avatar.png'; // Please enter the absolute path (including subpaths)
  const about =
    'I am a high school student from Japan. I enjoy developing and taking photos. I am not very good at creating websites, but I did my best to make this one. I usually hang out on Mastodon. Please follow me there. I want to make many friends and get along with everyone. Thank you for reading this site!';
  const place = 'Japan';
  const timezone = 'Asia/Tokyo +9:00';
  const experiences = [
    {
      title: 'Developing',
      description:
        'I have created several websites and web applications using Astro and other technologies. This website is also built with Astro! Additionally, it is styled with UnoCSS!',
    },
    {
      title: 'Photography',
      description:
        'I usually take various photos and post them on Mastodon. You can check out the photos I have taken on my Mastodon!',
    },
    {
      title: 'Writing',
      description:
        "I haven't written many articles. Currently, I am creating a website to write a blog, so please look forward to it!",
    },
  ];
  const skills = [
    { name: 'HTML', icon: 'i-simple-icons:html5' },
    { name: 'CSS', icon: 'i-simple-icons:css3' },
    { name: 'UnoCSS', icon: 'i-simple-icons:unocss' },
    { name: 'JavaScript', icon: 'i-simple-icons:javascript' },
    { name: 'TypeScript', icon: 'i-simple-icons:typescript' },
    { name: 'Svelte', icon: 'i-simple-icons:svelte' },
    { name: 'Astro', icon: 'i-simple-icons:astro' },
    { name: 'Golang', icon: 'i-simple-icons:go' },
    { name: 'Python', icon: 'i-simple-icons:python' },
    { name: 'Git', icon: 'i-simple-icons:git' },
    { name: 'GitHub', icon: 'i-simple-icons:github' },
    { name: 'VSCode', icon: 'i-simple-icons:visualstudiocode' },
    { name: 'Powershell', icon: 'i-simple-icons:powershell' },
    { name: 'Windows', icon: 'i-simple-icons:windows' },
    { name: 'Linux', icon: 'i-simple-icons:linux' },
    { name: 'etc...', icon: '' },
  ];
  const works = [
    {
      title: "Dampuzakura's Website",
      description:
        'This website is my portfolio site. I created this site to introduce myself and my works. I hope you enjoy it!',
      url: 'https://dampuzakura.github.io',
      linkText: 'Visit',
    },
    {
      title: "Dampuzakura's Blog",
      description:
        'I am currently creating a blog site. I will write articles about various things there. Please look forward to it!',
      url: '',
      linkText: '',
    },
    {
      title: 'DZ Quick Card',
      description:
        'DZ Quick Card is a simple web application that allows you to create a business card. You can create a card with your name and a message. Please try it!',
      url: 'https://dampuzakura.github.io/dz-quick-card',
      linkText: 'Try it!',
    },
  ];
  const socials = [
    {
      name: 'dampuzakura.github.io',
      url: 'https://dampuzakura.github.io',
      icon: '', // If the icon field is empty, a link icon will be automatically assigned.
    },
    {
      name: '@dampuzakura@fedibird.com',
      url: 'https://fedibird.com/@dampuzakura',
      icon: 'i-simple-icons:mastodon',
    },
    {
      name: '@dampuzakura',
      url: 'https://github.com/dampuzakura',
      icon: 'i-simple-icons:github',
    },
    {
      name: '@dampuzakura',
      url: 'https://x.com/dampuzakura',
      icon: 'i-simple-icons:x',
    },
    {
      name: '@dampuzakura.github.io',
      url: 'https://bsky.app/profile/dampuzakura.github.io',
      icon: 'i-simple-icons:bluesky',
    },
    {
      name: '@dampuzakura@fedimovie.com',
      url: 'https://fedimovie.com/@dampuzakura',
      icon: 'i-simple-icons:peertube',
    },
    {
      name: '@dampuzakura@fedisnap.com',
      url: 'https://fedisnap.com/@dampuzakura',
      icon: 'i-simple-icons:pixelfed',
    },
    {
      name: '@dampuzakura@misskey.io',
      url: 'https://misskey.io/@dampuzakura',
      icon: 'i-simple-icons:misskey',
    },
  ];
</script>

<div
  class="flex flex-col items-center justify-center w-full h-auto py-4 md:flex-row md:h-[80vh] break-words"
>
  <div class="flex flex-col items-start justify-center w-full p-2 md:w-2/3">
    <h1
      class="mb-4 text-5xl font-bold text-transparent bg-gradient-to-r from-orange-6 to-red-6 dark:from-orange-4 dark:to-red-4 bg-clip-text md:text-6xl"
    >
      Hello, my name is {name}
    </h1>
    <p class="text-3xl text-gray-8 dark:text-gray-2">
      {introduction}
    </p>
  </div>
  <div
    class="w-full mt-4 overflow-hidden transition-transform transform shadow-lg md:w-1/3 rounded-3xl md:mt-0 scale-70 md:scale-100 hover:scale-90 md:hover:scale-120 rotate-5"
  >
    <img src={avatar} alt="Avatar" class="object-cover w-full h-full" />
  </div>
</div>
<section
  id="about"
  class="w-full p-4 py-8 border shadow border-gray-1 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      About Me
    </h2>
    <p class="text-lg text-center text-gray-7 dark:text-gray-3">
      {about}
    </p>
    <div class="flex flex-col md:flex-row">
      <p
        class="flex items-center justify-center flex-1 mt-4 text-lg gap-x-2 text-gray-7 dark:text-gray-3"
      >
        <span class="block i-fluent:location-48-regular"></span>
        {place}
      </p>
      <p
        class="flex items-center justify-center flex-1 mt-4 text-lg gap-x-2 text-gray-7 dark:text-gray-3"
      >
        <span class="block i-fluent:clock-48-regular"></span>
        {timezone}
      </p>
    </div>
  </div>
</section>

<section
  id="skills"
  class="w-full p-4 py-8 mt-8 border shadow border-gray-1 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      Skills
    </h2>
    <ul class="grid grid-cols-2 gap-4 text-lg text-center">
      {#each skills as skill}
        <li class="flex items-center justify-center gap-x-2">
          {#if skill.icon}
            <span class={`block ${skill.icon}`} />
          {/if}
          {skill.name}
        </li>
      {/each}
    </ul>
  </div>
</section>
<section
  id="experiences"
  class="w-full p-4 py-8 mt-8 border shadow border-gray-1 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      Experiences
    </h2>
    <ul class="grid grid-cols-1 gap-4 text-lg">
      <ul class="grid grid-cols-1 gap-4 text-lg">
        {#each experiences as experience}
          <li>
            <h3 class="mb-2 text-2xl font-bold">{experience.title}</h3>
            <p>{experience.description}</p>
          </li>
        {/each}
      </ul>
    </ul>
  </div>
</section>
<section
  id="works"
  class="w-full p-4 py-8 mt-8 border shadow border-gray-1 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      Works
    </h2>
    <ul class="grid grid-cols-1 gap-4 text-lg">
      {#each works as work}
        <li>
          <h3 class="mb-2 text-2xl font-bold">{work.title}</h3>
          <p>{work.description}</p>
          {#if work.url}
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-pink-6 dark:text-pink-4 hover:underline"
            >
              {work.linkText}
            </a>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</section>
<section
  id="socials"
  class="w-full p-4 py-8 mt-8 border shadow border-gray-1 rounded-xl dark:border-gray-8"
>
  <div class="container mx-auto">
    <h2
      class="mb-4 text-4xl font-bold text-center text-gray-9 dark:text-gray-1"
    >
      Socials
    </h2>
    <ul class="grid grid-cols-1 gap-4 text-lg text-center">
      {#each socials as social}
        <li>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer me"
            class="flex items-center justify-center text-pink-6 dark:text-pink-4 hover:underline gap-x-2"
          >
          {#if social.icon != ''}
            <span class={`block ${social.icon}`} />
          {:else if social.icon == ''}
            <span class='block i-fluent:link-48-regular' />
          {/if}
            {social.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>
