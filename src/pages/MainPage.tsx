import Button from "../components/Button/Button";

function MainPage () {
    return(
        <>
         <h1>MainPage</h1>
         <Button variant="primary" onClick={() => console.log('click')}>Test</Button>
         <Button variant="secondary">Test2</Button>
        </>
    )
}

export default MainPage;