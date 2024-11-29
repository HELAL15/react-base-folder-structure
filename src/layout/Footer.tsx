import { FC, memo } from "react";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Footer: FC<IProps> = ({  }) => {
  return (
    <>
      <footer>
        <p>footer</p>
      </footer>
    </>
  );
}

export default memo(Footer);