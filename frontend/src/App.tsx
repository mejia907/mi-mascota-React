import { BrowserRouter } from 'react-router-dom'
import { NotificationProvider } from './context/notification.context'
import { AppRouter } from './Router'
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {
  return (
    <ProSidebarProvider>
      <NotificationProvider>
        <BrowserRouter>
        <main className='content'>
          <AppRouter />
        </main>
        </BrowserRouter>
      </NotificationProvider>
    </ProSidebarProvider>

  )
}

export default App
