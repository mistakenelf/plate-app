<script>
  import { fade } from 'svelte/transition';
  import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
  import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons/faTachometerAlt';
  import page from 'page';

  import Icon from '../../../components/Icon';
</script>

<style>
  .container {
    position: absolute;
    z-index: 10;
    top: 45px;
    background: var(--white);
    border-radius: 3px;
    right: 0;
    box-shadow: var(--defaultShadow);
  }

  .row {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .menu-item {
    padding: 5px;
    border-radius: 3px;
    border: 2px solid #333;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .menu-text {
    font-size: 12px;
    text-transform: uppercase;
    margin-top: 5px;
  }
</style>

<div class="container" transition:fade={{ duration: 200 }}>
  <div class="row">
    <div class="menu-item" on:click={() => page('/')}>
      <Icon height="1.5em" width="1.5em" icon={faTachometerAlt} />
      <div class="menu-text">Dashboard</div>
    </div>
    <div class="menu-item" on:click={() => page('/create-plate')}>
      <Icon height="1.5em" width="1.5em" icon={faPlusCircle} />
      <div class="menu-text">Create Plate</div>
    </div>
  </div>
</div>
