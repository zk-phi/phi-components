type Props = {
  class: string,
};

const Text = (props: Props) => (
  <svg class={ props.class } xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"/>
  </svg>
);

export default Text;
