import NavBar from "../components/navigation/NavBar";
export default function Gallery(){
    const { t } = useTranslation();

    return(
        <>
            {/* Navgation Bar */}
            <NavBar page="Gallery"/>

            {/* Footer */}
            <Footer/>
        </>
    );
}