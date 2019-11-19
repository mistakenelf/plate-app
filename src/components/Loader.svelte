<script>
  export let fullPage = false;
</script>

<style>
  .loader {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }

  .loader div {
    position: absolute;
    opacity: 1;
    border-radius: 50%;
    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  .loader div:nth-child(2) {
    animation-delay: -0.5s;
  }

  .full-page {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes ripple {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }

    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }
</style>

<div class:full-page={fullPage}>
  <div class="loader">
    <div class="border-gray-500 border-4" />
    <div class="border-gray-500 border-4" />
  </div>
</div>
