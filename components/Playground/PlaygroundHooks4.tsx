import GlobalContextProvider from '@/context/context'
import App from './App'

export default function PlaygroundHooks4() {
  // Let's access the global context | Pass it from here to all the children of this component

  return (
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  )
}
