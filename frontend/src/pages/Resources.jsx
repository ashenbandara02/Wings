import NavBar from "../components/navigation/NavBar";
export default function Resources(){
    const { t } = useTranslation();

    return(
        <>
            {/* Navgation Bar */}
            <NavBar page="Resources"/>

            {/* Footer */}
            <Footer/>
        </>
    );
}