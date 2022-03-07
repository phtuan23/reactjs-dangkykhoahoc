import { Route, Redirect } from 'react-router-dom';
import UserAuth from '../../../auth/User';

const UserProtected = ({ component: Component, ...rest }) => {
    const user = UserAuth.getAuth();

    return (
        <Route {...rest} render={() => {
            if (user != null) {
                return <Component user={user} />
            } else {
                return <Redirect to={{ pathname: "/login", props: { message: "Vui lòng đăng nhập trước" } }} />
            }
        }} />
    )
}

export default UserProtected;