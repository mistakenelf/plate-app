<script>
  export let fullWidth = false;
  export let type = 'button';
  export let variant = 'primary';
</script>

<style>
  button {
    border: none;
    font-size: 16px;
    font-weight: 700;
    padding: 10px;
    text-transform: uppercase;
    border-radius: 3px;
    cursor: pointer;
  }

  .full-width {
    width: 100%;
  }

  .primary {
    background: var(--primary);
    color: var(--white);
  }

  .secondary {
    background: var(--secondary);
    color: var(--white);
  }

  .tertiary {
    background: var(--tertiary);
    color: var(--white);
  }
</style>

<button
  class:primary={variant === 'primary'}
  class:secondary={variant === 'secondary'}
  class:tertiary={variant === 'tertiary'}
  class:full-width={fullWidth}
  {type}>
  <slot />
</button>
