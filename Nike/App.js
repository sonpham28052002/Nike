import { Provider } from "react-redux";
// import Auth from "./screen/Auth/Auth.js";
import store from './redux-toolkit/store.js'
import Auth from './screen/checkout/checkout.js'
export default function app() {
    return(
        <Provider store={store}>
            <Auth/>
        </Provider>
    );
};
