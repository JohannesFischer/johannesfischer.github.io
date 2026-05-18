// import { css } from "../../../styled-system/css";

type HeadlineProps = React.PropsWithChildren & {
  title: string;
};

const Headline: React.FunctionComponent<HeadlineProps> = ({ title }) => {
  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
};

export default Headline;
