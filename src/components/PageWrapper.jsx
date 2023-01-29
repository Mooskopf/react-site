import Navbar from "./Navbar"
import Footer from "./Footer"
import Cookies from "./Cookies"
import { ScrollRestoration } from "react-router-dom"
import { QueryClient, QueryClientProvider } from 'react-query'

export default function PageWrapper({ children }) {

    const queryClient = new QueryClient()

    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <ScrollRestoration />
                <Cookies />
                <Navbar />
                {children}
                <Footer />
            </QueryClientProvider>
        </div>
    )
}

