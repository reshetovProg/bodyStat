package com.example.authservice.adapter;

import com.example.authservice.service.CustomOAuth2UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.Collections;

@RequiredArgsConstructor
public class OAuth2UserServiceAdapter implements OAuth2UserService {

    private final CustomOAuth2UserService customOAuth2UserService;
    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {

        OidcUserRequest oidcUserRequest = convertToOidcUserRequest(userRequest);
        OidcUser oidcUser = customOAuth2UserService.loadUser(oidcUserRequest);

        return new DefaultOidcUser(
                Collections.emptySet(),
                oidcUser.getIdToken(),
                oidcUserRequest.getClientRegistration().getProviderDetails()
                        .getUserInfoEndpoint().getUserNameAttributeName()
        );
    }

    private OidcUserRequest convertToOidcUserRequest(OAuth2UserRequest oAuth2UserRequest){

        return new OidcUserRequest(
                oAuth2UserRequest.getClientRegistration(),
                oAuth2UserRequest.getAccessToken(),
                null,
                oAuth2UserRequest.getAdditionalParameters()
        );
    }

}
