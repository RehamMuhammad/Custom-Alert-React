import Alert from "./components/Alert";
function App() {

  return (
    <div>
      <Alert type="error" message="Error" />
      <Alert type="success">
        <p>Success message</p>
      </Alert>
      <Alert type="primary">
        <h4>primary message</h4>
      </Alert>
      <Alert type="secondary">
        <span>secondary message</span>
      </Alert>
      <Alert type="warning">
        <span>Warning message</span>
      </Alert>
      <Alert type="info">
        <span>Info message</span>
      </Alert>
      <Alert type="dead" message='Creative class :")' />
    </div>
  );
}

export default App;
