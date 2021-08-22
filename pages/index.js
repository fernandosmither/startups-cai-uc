import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PersonCard from '../components/PersonCard.js'

export const getStaticProps = async () => {
  
  const res = await fetch ("https://sheet.best/api/sheets/2c4a4374-56fa-4d93-9ab9-6987dbf7c884");
  const data = await res.json();

  var data2=[];

  for (var elemento in data) {
    if (data[elemento]["mostrar"] == "1") {
      data2.push(data[elemento])
    }
  }


// console.log(data2)

  for (var elemento in data2) {
    var id = data2[elemento]["profilepic"]
    var id =  id.slice(33)
    data2[elemento]["profilepic"] = "https://drive.google.com/uc?id=" + id
  }

  for (var elemento in data2) {
    var description = data2[elemento]["description"]
    var description =  description.slice(0, 251)
    // var description =  description.padEnd(250, "v")+"$19.99"

    data2[elemento]["description"] = description
  }


  return {
    props: { talentos: data2 }
  }
}


const Talentos = ({ talentos }) => {
    return (
    <div>
      <Head>
        <title>Encuentra tu talento! | Inicio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="icon.ico" />
      </Head>

      <div className={styles.grid}>
      {/* <div className="card mb-3"> */}
      {/* <div className={styles.def_background_color}> */}
      <div className="row row-cols-1 row-cols-md-2">

        <div className={styles.wrapper}>

          <PersonCard talentos={talentos}/>

        </div>

      </div>
      {/* </div> */}
      {/* </div> */}
      </div>


    </div>
    );
  }

export default Talentos;
