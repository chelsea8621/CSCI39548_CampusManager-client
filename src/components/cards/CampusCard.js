import {GenericCard} from "./GenericCard";

export const CampusCard = props =>
    <GenericCard
        objectType="campus"
        headerTitle={props.object?.name || "Invalid Campus"}
        {...props}/>

