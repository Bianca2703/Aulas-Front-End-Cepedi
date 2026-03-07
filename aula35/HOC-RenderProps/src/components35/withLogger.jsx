function withLogger(WrappedComponent) {
  return function newComponent(props) {
    console.log(WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
}

export default withLogger;
