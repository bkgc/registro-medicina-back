import { UIProvider } from "@/ui";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function App({ Component, pageProps }: AppProps) {
  return(
    <UIProvider>
      <ToastContainer/>
      <Component {...pageProps} />
    </UIProvider>
  ) 
}
