<script>
  export let fullPage = false;
</script>

<style>
  .loader,
  .loader:before,
  .loader:after {
    background: #38b2ac;
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }
  .loader {
    color: #38b2ac;
    text-indent: -9999em;
    margin: 88px auto;
    position: relative;
    font-size: 11px;
    transform: translateZ(0);
    animation-delay: -0.16s;
  }

  .loader:before,
  .loader:after {
    position: absolute;
    top: 0;
    content: '';
  }

  .loader:before {
    left: -1.5em;
    animation-delay: -0.32s;
  }

  .loader:after {
    left: 1.5em;
  }

  @-webkit-keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }

  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
</style>

{#if fullPage}
  <div class="h-full flex items-center justify-center">
    <div class="loader" />
  </div>
{:else}
  <div class="loader" />
{/if}
