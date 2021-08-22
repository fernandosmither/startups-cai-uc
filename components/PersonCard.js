import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function PersonCard ({ talentos }) {
    return (
<>
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
</>
    )
}
