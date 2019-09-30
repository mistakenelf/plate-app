<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
</script>

<style>
  .overlay {
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #fff;
    border-radius: 3px;
    height: 300px;
    width: 300px;
    z-index: 10;
  }
</style>

<div class="overlay" on:click={() => dispatch('toggleNewPlateModal')}>
  <div class="modal">This is the new plate modal</div>
</div>
