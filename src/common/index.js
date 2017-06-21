import styled from 'styled-components';


const styles = {};

styles.MyApp = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  min-width: 960px;
`;

styles.Main = styled.div`
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  padding-top: 100px;
`;

styles.Content = styled.div`
  position: relative;
  flex: 1;
`;

export default styles;
