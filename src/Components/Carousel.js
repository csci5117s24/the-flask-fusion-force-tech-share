import Carousel from 'react-bootstrap/Carousel';
import styles from '../Common/Carousel.module.css';
function UncontrolledExample({caption,children}) {
  return (
    <Carousel>
      <Carousel.Item>

        <img src = 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Green_Grotto_Caves_-_Jamaica.jpg' alt='cave1'  className={styles.imgstrecth}></img>

        <Carousel.Caption>
          <h3>You can use the Carousel ...</h3>
          <p>This image stretches the full width</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div  className={styles.imgcontainer}>
        <img src = 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Drips_and_Deposits%2C_Clearwell_Caves_-_geograph.org.uk_-_2122911.jpg' alt='cave12'  className={styles.img}></img>
        </div>
     
      
 
        <Carousel.Caption>
          <h3>... to display diffent images or content</h3>
          <p>This image is shown as it's orignal scale</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div  className={styles.imgcontainerexample}> Oh no you cannot quite see me</div>
        <Carousel.Caption className={styles.caption}>
          <h3>Caption will be put over the content of the slides</h3>
          <p>
           this can cover up your content
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div  className={styles.imgcontainer}> {children}</div>
        <Carousel.Caption className={styles.caption}>
         <p>{caption}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;