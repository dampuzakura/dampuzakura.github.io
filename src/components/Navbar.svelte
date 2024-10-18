<script lang="ts">
  const navItems = [
    {
      href: '#',
      icon: 'i-fluent:home-48-regular',
      label: 'Home',
    },
    {
      href: '#about',
      icon: 'i-fluent:info-48-regular',
      label: 'About',
    },
    {
      href: '#skills',
      icon: 'i-fluent:toolbox-32-regular',
      label: 'Skills',
    },
    {
      href: '#experiences',
      icon: 'i-fluent:briefcase-48-regular',
      label: 'Experiences',
    },
    {
      href: '#works',
      icon: 'i-fluent:content-view-gallery-28-regular',
      label: 'Works',
    },
    {
      href: '#socials',
      icon: 'i-fluent:people-add-32-regular',
      label: 'Socials',
    },
  ];
</script>

<nav
  class="fixed bottom-0 w-full h-16 text-white shadow-xl md:h-full dark:text-gray-1 bg-gradient-to-r from-blue-6 to-purple-6 from-blue-9 to-purple-9 md:left-0 md:top-0 md:w-50 backdrop-blur-lg rounded-t-2xl md:border-0 md:rounded-lt-0 md:rounded-r-3xl z-99"
>
  <ul
    class="flex flex-row justify-center w-full h-full md:flex-col gap-x-4 md:gap-y-2"
  >
    {#each navItems as { href, icon, label }}
      <li class="relative flex items-center group">
        <a
          {href}
          class="flex items-center w-full h-full py-2 transition-all duration-300 ease-in-out transform rounded-md text-6 md:gap-x-4 md:py-0 md:px-4 hover:font-bold group-hover:scale-110"
        >
          <span class={icon + ' w-8 h-8 md:w-6 md:h-6 block'}></span>
          <span class="hidden md:block">{label}</span>
        </a>
      </li>
    {/each}
  </ul>
</nav>
