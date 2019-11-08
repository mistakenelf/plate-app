<script>
  export let label = ''
  export let value = ''
  export let name = ''
  export let isFormField = false
  export let rows = 5
</script>

<style>
  .textarea-container {
    display: flex;
    flex-direction: column;
  }

  textarea {
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
</style>

<div class="textarea-container">
  <label>{label}</label>
  <textarea {name} class:form-field={isFormField} {value} on:change {rows} />
</div>
