import { Provider } from "react-redux";
import Auth from './screen/user/user.js'
import store from './redux-toolkit/store.js'
// import Auth from './screen/checkout/checkout.js'
// import Auth from './screen/Auth/Auth.js'

export default function app() {
    return(
        <Provider store={store}>
            <Auth/>
        </Provider>
    );
};
