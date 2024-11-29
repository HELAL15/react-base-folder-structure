import { FC, memo } from "react";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Header: FC<IProps> = ({  }) => {
  return (
    <>
      <header>
        <div className="container">
        <p>header</p>

        </div>
      </header>
    </>
  );
}

export default memo(Header);