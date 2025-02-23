import {useParams} from "react-router-dom";


export const ProfilePage = () => {

    const { nickname } = useParams();

    return (
        <div>
            {nickname}
        </div>
    );
};