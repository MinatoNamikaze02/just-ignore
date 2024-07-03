import { HomeContainer } from '../components';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <HomeContainer>
        <HomeContainer.Header>
          <HomeContainer.Title>Welcome to your Verbal prep</HomeContainer.Title>
          <HomeContainer.ButtonsContainer>
            <HomeContainer.Button><Link to="/learn" style={{ "color": "inherit", "textDecoration": "none" }}>Learn</Link></HomeContainer.Button>
            <HomeContainer.Button><Link to="/test" style={{ "color": "inherit", "textDecoration": "none" }}>Test</Link></HomeContainer.Button>
            <HomeContainer.Button><Link to="/stats" style={{ "color": "inherit", "textDecoration": "none" }}>Stats</Link></HomeContainer.Button>
          </HomeContainer.ButtonsContainer>
        </HomeContainer.Header>
      </HomeContainer>
      <Outlet />
    </>
  );
}

export default App;
