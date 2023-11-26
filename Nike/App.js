import { Provider } from "react-redux";
// import Auth from "./screen/Auth/Auth.js";
import Auth from './screen/user/user.js'
// import Auth from './screen/address/address.js'
import store from './redux-toolkit/store.js'
// import Auth from "./screen/sign_in/sign_in";
// import Auth from './screen/shop/shopHome'
export default function app() {
    return(
        <Provider store={store}>
            <Auth/>
        </Provider>
    );
};
