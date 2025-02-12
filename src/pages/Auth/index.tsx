import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { atomToken } from "../../stores/atoms";
import { useParams } from "react-router-dom";

const Auth = () => {
    const { token } = useParams();
    const setToken = useSetRecoilState(atomToken);

    useEffect(() => {
        if (token) {
            setToken(token);
        }
    }, [token, setToken]);

    return <div>Loading...</div>;
};

export default Auth;