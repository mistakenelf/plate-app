<template>
  <div class="switch">
    <input
      type="checkbox"
      v-model="isChecked"
      @change="onChange"
      id="checkbox"
    />
    <span class="slider round" @click="handleClick()"></span>
  </div>
</template>

<script>
export default {
  props: {
    isChecked: Boolean,
    label: String,
    handleClick: Function
  },
  methods: {
    onChange() {
      this.$emit('input', !this.isChecked)
    }
  }
}
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 12px;
  width: 12px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  transform: translateX(26px);
  left: -12px;
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
