import {GenericCard} from "./GenericCard";

export const StudentCard = props =>
    <GenericCard
        objectType="student"
        headerTitle={`${props.object.firstname} ${props.object.lastname}`}
        {...props}/>
