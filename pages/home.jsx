import Head from "next/head";
import styles from "../styles/home.module.css";
import Image from "next/image";
export default function Home(){

    return(
        <>
        <Head>
            <title>Health++</title>
        </Head>
        <header className={styles.homeHeader}>
            <ul className={styles.headerLinks}>
                <li className={styles.link}>Marcar Consulta</li>
                <li className={styles.link}>Planos Da Clinica</li>
                <li className={styles.link}>Sobre</li>
            </ul>
        </header>

            <h1 id={styles.consultaText}>Consultas</h1>
            <div id={styles.consultaDiv}>

                <div  className={styles.consultaCard}>
                    <div className={styles.cardImg}
                    >
                        <Image
                        src={"/dentista.webp"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        />

                    </div>
                        <span className={styles.areaSpan}>Pediatra</span>

                        <button className={styles.buttonContact}>Contate Um Profissional</button>
                </div>


                <div className={styles.consultaCard}>
                <div className={styles.cardImg}
                    >
                        <Image
                        src={"/dentista.webp"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        />

                    </div>
                    <span className={styles.areaSpan}>Clinico Geral</span>

                    <button className={styles.buttonContact}>Contate Um Profissional</button>
                </div>

               

                <div className={styles.consultaCard}>
                <div className={styles.cardImg}
                    >
                        <Image
                        src={"/dentista.webp"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        />

                    </div>
                    <span className={styles.areaSpan}>Cirurgião</span>
                    <button className={styles.buttonContact}>Contate Um Profissional</button>


                </div>
                <div className={styles.consultaCard}>
                <div className={styles.cardImg}
                    >
                        <Image
                        src={"/dentista.webp"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        />

                    </div>
                    <span className={styles.areaSpan}>Dentista</span>

                    <button className={styles.buttonContact}>Contate Um Profissional</button>
                </div>
            </div>
        </>
    )
}