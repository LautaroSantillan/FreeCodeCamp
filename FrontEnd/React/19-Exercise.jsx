class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper />
        </div>
      );
    }
}
  
// Define the Camper component
const Camper = (props) => {
    return (
      <p>{props.name}</p>
    );
};
  
// Assign default props to Camper
 Camper.defaultProps = {
    name: 'CamperBot'
};
  
// Define propTypes for Camper
Camper.propTypes = {
    name: PropTypes.string.isRequired
};  