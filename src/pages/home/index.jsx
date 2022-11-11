import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
// import api from "../../services/api";
// import { useEffect, useState } from "react";
import GridMenu from "../../components/gridmenu";
import styles from './style.css';

function Home(){
    // const [teste, setTeste] = useState();

    // useEffect(() => {
    //     api
    //         .get("/todos/1")
    //         .then((response) => setTeste(response.data))
    //         .catch((err) => {
    //             console.error("Ocorreu um erro! " + err);
    //         });
    // }, []);

    return(
        <>
            <Navbar />
            <div className={styles.wrapper}>
                <GridMenu />
            </div>
            <Footer />
            {/* <div>
                <p>{teste?.title}</p>
                <p>{teste?.id}</p>
            </div> */}
        </>
    )
}

export default Home;