import  { useEffect } from "react";
import { useLocation } from "react-router";
import NProgress from "nprogress";
import './nprogress.css'

const RouterProgress = () => {
  const location = useLocation();
  NProgress.configure({ speed: 1350 });
  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    handleStart();
    handleStop();

    return () => {
      NProgress.done(); 
    };
  }, [location]);

  return null; 
};

export default RouterProgress;
