import React, { Component, createContext, useContext } from "react";
import createAuth0Client from "@auth0/auth0-spa-js";
// const axios = require("axios");

// Create the context
export const Auth0Context = createContext();
export const useAuth0 = () => useContext(Auth0Context);

// Create a provider
export class Auth0Provider extends Component {

    state = {
        auth0Client: null, 
        isLoading: true,
        isAuthenticated: false,
        user: null
    };

    config = {
        domain: process.env.REACT_APP_AUTH0_DOMAIN,
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
        redirect_uri: window.location.origin
    };

    

    componentDidMount() {
        console.log(process.env)
        this.initializeAuth0()
    };

    // getRandomInt(min, max) {
    //     min = Math.ceil(min);
    //     max= Math.floor(max);
    //     return Math.floor(Math.random() * (max - min)) + min;
    // }

    // addUser = (newUser, randomNum) => {
    //     if ( newUser.given_name ) {}
    //     else if () {}
    // }

    // findUser = (newUser) => {
    //     this.setState({ isLoading: true })
    // }

    findUserAgain = () => {
        const user = this.state.user;
        if(user) {
            console.log(user)
            this.setState({ isLoading: false });
        } else {
            console.log("no user, cant do it")
            this.setState({ isLoading: false });
        }
    }

    // Initialize the auth0 library
    initializeAuth0 = async () => {
        const auth0Client = await createAuth0Client(this.config);

        this.setState({ auth0Client });

        // Check to see if they have been redirected after login
        if (window.location.search.includes("code=")) {
            return this.handleRedirectCallback();
        };

        const isAuthenticated = await auth0Client.isAuthenticated();
        const user = isAuthenticated ? await auth0Client.getUser() : null;

        this.setState({ isAuthenticated, user });

        this.findUserAgain();
    };

    handleRedirectCallback = async () => {
        this.setState({ isLoading: true });

        await this.state.auth0Client.handleRedirectCallback();
        const user = await this.state.auth0Client.getUser();
        this.setState({ user, isAuthenticated: true, isLoading: false })

        // this.findUser(user)

        window.history.replaceState({}, document.title, window.location.pathname);
    }

    render() {
        const { auth0Client, isLoading, isAuthenticated, user } = this.state;
        const { children } = this.props;

        const configObject = {
            isLoading, 
            isAuthenticated,
            user,
            loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
            getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
            getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
            logout: (...p) => auth0Client.logout(...p)
        };

        return (
            <Auth0Context.Provider value={configObject}>
                {children}
            </Auth0Context.Provider>
        )
    }
}