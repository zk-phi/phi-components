type Props = {
  class: string,
};

const CheckRadio = (props: Props) => (
  <svg class={ props.class } xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <circle cx="12" cy="12" r="7"/>
  </svg>
);

export default CheckRadio;
