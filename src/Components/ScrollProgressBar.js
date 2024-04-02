import { useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from '../Common/ScrollProgressBar.module.css'

function ScrollProgressBar() {
  const [y, setY] = useState(window.scrollY)
  const [scrollPos, setScrollPos] = useState()

  // Setup window scroll event listener
  useEffect(() => {
    const scrollEventLis = () => setY(window.scrollY)
    window.addEventListener('scroll', scrollEventLis)
    return () => {
      window.removeEventListener('scroll', scrollEventLis)
    }
  }, [])

  useEffect(() => {
    const e = document.getElementsByTagName("body")[0];
    setScrollPos(y/(e.clientHeight-window.innerHeight)*100)
  },[y])

  return <ProgressBar className={styles.progressBar} now={scrollPos} animated/>;
}

export default ScrollProgressBar;