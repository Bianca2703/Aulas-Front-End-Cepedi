// This is our HOC - it adds a border to any component
function withBorder(WrappedComponent) {
  return function NewComponent(props) {
    return (
      <div style={{ border: "2px solid blue", padding: "10px" }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withBorder;
