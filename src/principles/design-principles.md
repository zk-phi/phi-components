# デザイン原則

このデザインシステムは以下の原則を念頭にデザインされています。

## 技術面

- シンプルな API を念頭に、開発者フレンドリーなインターフェース
  - 必要以上に機能を詰め込まず、納得感のあるサイズに収める

- フレームワークに依存しない
  - ３つの異なる依存戦略を提供：
    - Pure-CSS デザインシステムとして
    - Custom Element ライブラリとして
    - Preact Element ライブラリとして

- ダークモードに勝手に対応する

- フォーム部品がフォーム部品として機能するように
  - Web Components においてこれは自明ではない

## ビジュアル面

- 「ポジティブ、生き生きとした、友好的・平和」な印象を目指す
  - 華やかでもなく、フォーマルでもない、適度にカジュアルなラインを意識する

- サクサク感を重視する
  - 豪華な装飾や、無駄なアニメーションは使用しない（「ぬるぬる動」かない）
  - アニメーションは、ユーザーが「要素の行方を追うために必要な場合」に限る

- インタラクションを大切にする
  - 操作可能な部品は（ホバーしなくても）見分けがつくように
  - ホバー時および操作時に、必ず見た目に変化をつける（ただし、アニメーションは原則つけない）

### カラーパレット
#### ライトモード

ブランドカラー

<figure class="light">
  <phi-stack size="md">
    <phi-group size="md">
      <phi-color-swatch color="#ffb81c" />
      <span>Hover [#ffb81c / okhsl(80, 100, 80)]</span>
    </phi-group>
    <phi-group size="md">
      <phi-color-swatch color="#eeaa00" />
      <span>Default [#eeaa00 / okhsl(80, 100, 75)]</span>
    </phi-group>
    <phi-group size="md">
      <phi-color-swatch color="#cd9200" />
      <span>Active [#cd9200 / okhsl(80, 100, 65)]</span>
    </phi-group>
  </phi-stack>
</figure>

エラー・危険

<figure class="light">
  <phi-stack size="md">
    <phi-group size="md">
      <phi-color-swatch color="#fa837e" />
      <span>Hover [#fa837e / okhsl(24, 90, 70)]</span>
    </phi-group>
    <phi-group size="md">
      <phi-color-swatch color="#f76b68" />
      <span>Default [#f76b68 / okhsl(24, 90, 65)]</span>
    </phi-group>
    <phi-group size="md">
      <phi-color-swatch color="#e53c42" />
      <span>Active [#e53c42 / okhsl(24, 90, 55)]</span>
    </phi-group>
  </phi-stack>
</figure>

<figure class="light">
  <phi-stack size="md">
    <phi-group size="md">
      <phi-color-swatch color="#ffffff" />
      <span>Background [#ffffff]</span>
    </phi-group>
    <phi-group size="md">
      <phi-color-swatch color="#00000040" />
      <span>Border [#00000040]</span>
    </phi-group>
    <phi-group size="md">
      <phi-color-swatch color="#000000d0" />
      <span>Foreground [#000000d0]</span>
    </phi-group>
  </phi-stack>
</figure>

#### ダークモード

ブランドカラー

<figure class="dark">
  <phi-stack size="md">
    <phi-group size="md">
      <phi-color-swatch color="#c79431" />
      <span>Hover [#c79431 / okhsl(80, 80, 65)]</span>
    </phi-group>
    <phi-group size="md">
      <phi-color-swatch color="#d7a139" />
      <span>Default [#d7a139 / okhsl(80, 80, 70)]</span>
    </phi-group>
    <phi-group size="md">
      <phi-color-swatch color="#e6af47" />
      <span>Active [#e6af47 / okhsl(80, 80, 75)]</span>
    </phi-group>
  </phi-stack>
</figure>

エラー・危険

<figure class="dark">
  <phi-stack size="md">
    <phi-group size="md">
      <phi-color-swatch color="#e65f5c" />
      <span>Hover [#e65f5c / okhsl(24, 80, 60)]</span>
    </phi-group>
    <phi-group size="md">
      <phi-color-swatch color="#ee736e" />
      <span>Default [#ee736e / okhsl(24, 80, 65)]</span>
    </phi-group>
    <phi-group size="md">
      <phi-color-swatch color="#f38882" />
      <span>Active [#f38882 / okhsl(24, 80, 70)]</span>
    </phi-group>
  </phi-stack>
</figure>

その他

<figure class="dark">
  <phi-stack size="md">
    <phi-group size="md">
      <phi-color-swatch color="#222222" />
      <span>Background [#222222]</span>
    </phi-group>
    <phi-group size="md">
      <phi-color-swatch color="#ffffff40" />
      <span>Border [#ffffff40]</span>
    </phi-group>
    <phi-group size="md">
      <phi-color-swatch color="#ffffffd0" />
      <span>Foreground [#ffffffd0]</span>
    </phi-group>
  </phi-stack>
</figure>
