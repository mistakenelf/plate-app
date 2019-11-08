<script>
  export let label = ''
  export let type = 'text'
  export let value = ''
  export let name = ''
  export let isFormField = false
  export let fullWidth = false
</script>

<style>
  .input-container {
    display: flex;
    flex-direction: column;
  }

  input {
    background: var(--white);
    padding: 10px;
    font-size: 18px;
    border-radius: 3px;
    border: 1px solid transparent;
    border-top: none;
    border-bottom: 1px solid #ddd;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.39), 0 -1px 1px #fff,
      0 1px 0 #fff;
  }

  label {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .form-field {
    margin-bottom: 30px;
  }

  .full-width {
    width: 100%;
  }
</style>

<div class:full-width={fullWidth} class="input-container">
  <label>{label}</label>
  <input
    {name}
    class:full-width={fullWidth}
    class:form-field={isFormField}
    {type}
    {value}
    on:change />
</div>
