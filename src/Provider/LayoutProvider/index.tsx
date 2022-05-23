import { useRouter } from "next/router";
import { Header } from "../../components/Header";

export function LayoutProvider({ children }) {
    const router = useRouter()

    return (
        <>
            {!(router.asPath === '/') && <Header />}
            {children}
        </>
    )

}