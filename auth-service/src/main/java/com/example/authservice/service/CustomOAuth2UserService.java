package com.example.authservice.service;

import com.example.authservice.model.User;
import com.example.authservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.oidc.OidcIdToken;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.oauth2.core.user.OAuth2UserAuthority;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;
import java.util.Map;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends OidcUserService {

    private final UserRepository userRepository;

    @Override
    public OidcUser loadUser(OidcUserRequest userRequest) throws OAuth2AuthenticationException {

        OidcIdToken idToken = userRequest.getIdToken();
        OidcUser oidcUser = super.loadUser(userRequest);

        Map<String, Object> attributes = oidcUser.getAttributes();

        String username = (String) attributes.get("sub");
        String email = (String) attributes.get("email");
        String firstname = (String) attributes.get("given_name");
        String lastName = (String) attributes.get("family_name");

        User existingUser = userRepository.findByUsername(username);
        if(existingUser == null){
            User newUser = User.builder()
                    .username(username)
                    .email(email)
                    .firstName(firstname)
                    .lastName(lastName)
                    .enable(true)
                    .build();

            userRepository.save(newUser);
        }

        Set<GrantedAuthority> authorities = Collections.singleton(
                new OAuth2UserAuthority(attributes)
        );

        String userNameAttributeKey = userRequest.getClientRegistration()
                .getProviderDetails()
                .getUserInfoEndpoint()
                .getUserNameAttributeName();

        OidcUser updatedIodcUser = new DefaultOidcUser(
                authorities,
                idToken,
                userNameAttributeKey
        );

        return updatedIodcUser;

    }
}
