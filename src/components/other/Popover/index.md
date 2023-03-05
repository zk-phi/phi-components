# Popover

A container, temporarily displayed on top of other elements.

This component (currently) does not support SSR (i.e. this component must be rendered dynamically).

## Usage

<script setup>
import { ref } from "vue";
const show = ref(false);
const fit = ref(false);
</script>

### Web Components (+ Vue)

<figure>
  <phi-popover
      v-if="show"
      anchor="#toggleButton"
      :width="fit ? 'fit' : 'auto'"
      @hide="show = false">
    yey!
  </phi-popover>
  <phi-button @click="show = !show" id="toggleButton">
    Toggle
  </phi-button>
  <p>
    <phi-checkbox :checked="fit" @input="fit = $event.target.checked">
      Fit width to button
    </phi-checkbox>
  </p>
</figure>

brabrabra

brabrabra

brabrabra

brabrabra

brabrabra

brabrabra

brabrabra

brabrabra

brabrabra

brabrabra

brabrabra

brabrabra

brabrabra

brabrabra

brabrabra

brabrabra

brabrabra

brabrabra

brabrabra
