import { FC, ReactNode, useLayoutEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { setSetting } from "../store/slices/SettingSlice";

/**
 * ==> props interface
 */
interface IProps {
  children: ReactNode;
}

/**
 * ==> Component
 */
const SettingProvider: FC<IProps> = ({ children }) => {

  const {data:setting} = useFetch('setting')

const dispatch = useDispatch()

  useLayoutEffect(()=>{
    if(setting){
      dispatch(setSetting(setting?.data))
    }
  })


  return (
    <>
    {children}
    </>
  );
}

export default SettingProvider;