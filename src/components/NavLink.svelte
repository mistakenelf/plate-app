<script>
  import Icon from './Icon';

  export let isMobile = false;
  export let href;
  export let label;
  export let icon;
</script>

<a
  class:text-gray-900={isMobile}
  class:text-md={isMobile}
  class:border-b-2={isMobile}
  class:mb-4={isMobile}
  class:mr-0={isMobile}
  class:pb-2={isMobile}
  class:text-sm={!isMobile}
  class="text-white font-bold text-base antialiased mr-6 flex text-md
  items-center"
  {href}>
  <Icon
    {icon}
    fill={isMobile ? '#333' : '#fff'}
    width="1em"
    height="1em"
    class="mr-2" />
  {label}
</a>
