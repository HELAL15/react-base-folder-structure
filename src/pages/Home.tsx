import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import {Button, Empty, Input, Spin } from "antd";

/**
 * ==> props interface
 */
interface IProps {

}

/**
 * ==> Component
 */
const Home: FC<IProps> = ({  }) => {
  const {i18n , t} = useTranslation()
  return (
    <>
    <h1>you are in home</h1>
    <p>{t("test")}</p>
    <button className="block" onClick={() => i18n.changeLanguage('en')}>change language en</button>
    <button onClick={() => i18n.changeLanguage('ar')}>change language ar</button>
    <Spin/>
  <Button type="primary" loading={false} disabled={false}>
    fff
  </Button>
  <div className="container grid grid-cols-3 gap-4">
  <Input className="py-2 bg-transparent hover:bg-transparent" />
  <Input className="py-2" />
  <Input className="py-2" />
  </div>
  <Empty/>
    </>
  );
}

export default memo(Home);