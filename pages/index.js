import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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



      <div className={styles.titulo}>
        <h1>Encuentra tu talento</h1>
      </div>


      <div className={styles.grid}>
      <div className="card mb-3">
      <div className="row row-cols-1 row-cols-md-2">


      <div className={styles.wrapper}>
        {talentos.map(talento => (
          <div key={talento.marca_temporal} className={styles.hola}>
            <div className={styles.card_background}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <Image src={talento.profilepic} width="150px" height="150px" className="card-img" alt="..."/>
              </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{ talento.fullname }</h5>
                <p className="card-text">{ talento.description }</p>
                <p className="card-text"><small className="text-muted">{ "Email: " + talento.email }</small></p>

            <div className="span10 offset1">
                <ul>
                  <li className={styles.inlineblock}><a href="https://linkedin.com"><p className={styles.nosub}><i className="icon-linkedin-sign"></i></p></a></li>
                  <li className={styles.inlineblock}><a href="https://facebook.com"><p className={styles.nosub}><i className="icon-facebook"></i></p></a></li>
                  <li className={styles.inlineblock}><a href="https://instagram.com"><p className={styles.nosub}><i className="icon-instagram"></i></p></a></li>
                  <li className={styles.inlineblock}><a href="https://example.com"><p className={styles.nosub}><i className="icon-external-link"></i></p></a></li>
                </ul>
            </div>


              </div>
            </div>
            </div>
            </div>


          </div>
        ))}
      </div>

</div>
</div>
</div>


    </div>
    );
  }

export default Talentos;
