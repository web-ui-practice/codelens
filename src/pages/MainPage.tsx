import Button from "../components/Button/Button";
import Card from "../components/Card/Card";

function MainPage () {
    return(
        <>
         <h1>MainPage</h1>
         <Card>
          <Button variant="primary" onClick={() => console.log('click')}>Test</Button>
          <Button variant="secondary">Test2</Button>
        </Card>
        </>
    )
}

export default MainPage;