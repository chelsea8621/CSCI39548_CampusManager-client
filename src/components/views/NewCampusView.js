import GenericCreationView from "./GenericCreationView";
import CampusForm from "../forms/CampusForm";

const NewCampusView = ({ handleSubmit }) =>
    <GenericCreationView
        FormComponent={CampusForm}
        handleSubmit={handleSubmit}
    />;

export default NewCampusView;