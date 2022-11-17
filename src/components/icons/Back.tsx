type Props = {
  class: string,
};

const Back = (props: Props) => (
  <svg class={ props.class } xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
    <rect fill="none" height="24" width="24"/>
    <g><polygon points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12"/></g>
  </svg>
);

export default Back;
