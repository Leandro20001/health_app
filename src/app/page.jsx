import Image from "next/image";
import styles from "../../styles/page.module.css";

export default function Home() {
  return (
      <>
      <div id={styles.banner}>

        <h1 id={styles.logoText}>Health++</h1>
        <span id={styles.logoText2}>Agende sua consulta</span>
    <Image
    id={styles.img1}
    
    src={"/imgBanner.png"}
    width={240}
    height={240}
    />


      </div>
     
        <fieldset id={styles.formDiv}>
          <form action="">
            <input placeholder="E-mail" type="text" />
            <input placeholder="Senha" type="text" />
            <button>Entrar</button>
          </form>

        </fieldset>
    
      </>
      
  );
}
