import { FC, memo, ReactNode } from "react";
import { ConfigProvider } from 'antd';
import SettingProvider from "./SettingProvider";
import arEG from 'antd/locale/ar_EG';
import enUS from 'antd/locale/en_US';
import { useTranslation } from "react-i18next";
/**
 * ==> props interface
 */
interface IProps {
  children: ReactNode;
}

/**
 * ==> Component
 */
const AppProviders: FC<IProps> = ({ children }) => {
  const {i18n} = useTranslation()
  const lang = i18n.language
  const direction = lang  === 'ar' ? "rtl" : "ltr"
  return (
    <>
    <ConfigProvider
    direction={direction}
    locale={lang === 'ar' ? arEG : enUS}
    theme={{
      token: {
        colorPrimary: '#008000',
        borderRadius: 4,

        colorBgContainer: '#f6ffed',
      },
    }}
  >
    <SettingProvider>
      {children}
    </SettingProvider>

  </ConfigProvider>
    </>
  );
}

export default memo(AppProviders);