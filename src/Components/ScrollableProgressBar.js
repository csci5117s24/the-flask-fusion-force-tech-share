import ProgressBar from 'react-bootstrap/ProgressBar';

function ScrollableProgressBar() {
  const scrollPos = 50
  return <ProgressBar now={scrollPos} />;
}

export default ScrollableProgressBar;