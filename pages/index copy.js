import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  
  const res = await fetch ("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { talentos: data }
  }
}


const Talentos = ({ talentos }) => {
    return (
    <div>

      <div className={styles.titulo}>
        <h1>Encuentra tu talento</h1>
      </div>

      <div className={styles.wrapper}>
        {talentos.map(talento => (
          <div key={talento.id}>
            <div className={styles.prueba}><p>{ talento.name }</p></div>
            <div><p>{ talento.email }</p></div>
            <div><p>{ talento.company.name }</p></div>
            <div><p>{ talento.company.catchPhrase }</p></div>
            <div><p>{ talento.company.bs }</p></div>
          </div>

        ))}
      </div>


      <div className={styles.grid}>
      <div className="card mb-3" style={{"maxWidth": "1024px"}}>
      <div className="row row-cols-1 row-cols-md-2">
      <div className={styles.def_background_color}>


      <div className="row no-gutters">
        <div className="col-md-4">
          <img src="https://i.imgur.com/MsD1KMX.jpeg" className="card-img" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>

      <div className="row no-gutters">
        <div className="col-md-4">
          <img src="https://i.imgur.com/MsD1KMX.jpeg" className="card-img" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>

</div>
</div>
</div>
</div>


    </div>
    );
  }

export default Talentos;
