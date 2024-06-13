# VSpace

A container that renders contents stacked vertically.

## Usage

<script setup>
import { ref } from "vue";
import "./demo.tsx";
const sizes = ["inline", "sm", "md", "lg", "xl"];
const size = ref("md");
const align = ref("stretch");
</script>

### Web Components

なんかネストされた要素が動かないが

これ vue の管理下からいったん外れてしまうのが問題っぽい

devtool から attr いじると反映されるっぽいのでイベントハンドラが張り直されてない？

これ atomico ならいけるのかなあ

formilk の web components を vue で使ってみたいね、使えるなら atomico に行くのもあり

→ いけたわ、たぶん preactement が children をクリアしてしまうのが問題

中身 formilk 外身 phi-components だとダメで、中身 phi-components 外身 formilk だといける

formilk でも v-model は使えなさそうで、結局 :value @input pair になりそうなので、だったら attr 周りとかそんながんばらんでもいいかな まあそれは別の話か

<figure>
  <phi-vspace size="md" align="stretch">
    <phi-input value="foo" />
    <phi-input value="bar" />
    <phi-input value="baz" />
      <phi-checkbox
          v-for="option in sizes"
          :checked="size"
          :value="option"
          @input="size = $event.target.checked">
        {{ option }}
      </phi-checkbox>
      {{ size }}
  </phi-vspace>
</figure>

```html
<phi-vspace :size="size" align="stretch">
  <phi-input value="foo" />
  <phi-input value="bar" />
  <phi-input value="baz" />
</phi-vspace>
```

#### Attributes

| Name    | Type                                         | Default     | Description           |
|---------|----------------------------------------------|-------------|-----------------------|
| `size`  | `"inline" \| "sm" \| "md" \| "lg" \| "xl"`   | `"md"`      | Margin between items. |
| `align` | `"stretch" \| "left" \| "right" \| "center"` | `"stretch"` | Alignment of items.   |

#### Slots

| Name | Description |
|------|-------------|

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|

#### Events

| Name | Description |
|------|-------------|

### Preact

<figure>
  <phi-vspace-demo />
</figure>

```js
const Demo = () => (
  <VSpace size="md" align="center">
    <Input value="foo" onChange={ () => null } />
    <Input value="bar" onChange={ () => null } />
    <Input value="baz" onChange={ () => null } />
  </VSpace>
);
```

| Name    | Type                                         | Default     |
|---------|----------------------------------------------|-------------|
| `size`  | `"inline" \| "sm" \| "md" \| "lg" \| "xl"`   | `"md"`      |
| `align` | `"stretch" \| "left" \| "right" \| "center"` | `"stretch"` |
