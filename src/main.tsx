
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n.ts'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import RouterProgress from './components/global/nprogress/RouterProgress.tsx'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store/store.ts'
import AppProviders from './providers';



const MainApp = () => {
  return (
        <PersistGate loading={null} persistor={persistor}>
          <RouterProgress />
            <AppProviders>
              <App />
            </AppProviders>
        </PersistGate>
  )
}



createRoot(document.getElementById('root')!).render(
  <Provider store={store} >
      <Router>
        <MainApp />
      </Router>
  </Provider>
)
