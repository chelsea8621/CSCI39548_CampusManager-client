const CampusView = (props) => {
  return (
    <div>      
      <h1>{props.campus.name}</h1>
      <p>{props.campus.description}</p>
    </div>
  );
};

export default CampusView;