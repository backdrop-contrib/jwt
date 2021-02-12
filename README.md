# JWT
## JSON Web Tokens for Backdrop CMS

This module adds the ability to create and authenticate JSON Web Tokens through global PHP functions. It is intended to facilitate developers wishing to integrate JSON Web Tokens into their projects.

## Installation

- Install this module using the official [Backdrop CMS instructions](https://backdropcms.org/guide/modules).
- (optional) Visit the configuration page under Configuration > Administration > Administer JWT Tokens.

## Usage

This module provides global functions that create and verify Jason Web Tokens.

* `encode_jwt($payload_data (associative array), $expiration_in_seconds (optional))` -- Accepts associative array of key, value pairs ($payload_data) and returns encoded JWT as a string. Default expiration time is set on the settings page or can be specified with a second argument. Example: encode_jwt(['user'=>'1234', 'role'=>'admin'])

* `validate_jwt($jwt (string))` -- Returns false if JWT string is invalid or expired, otherwise returns the decoded payload as an object.

* `decode_jwt($jwt (string))` -- Returns false if JWT is invalid or expired, otherwise returns the decoded payload object.

## Documentation

Additional documentation is located in the Wiki:
https://github.com/jsitter/jwt/wiki

## Issues

Bug and feature requests can be reported in the Issue Queue at https://github.com/jsitter/jwt/issues.

## Current Maintainers

- [Justin Sitter](https://github.com/jsitter)

## Credits

- Created by Justin Sitter

- Sponsored by [Saint Anthony's Seminary Alumni Association](https://www.sasalumni.org)

## License

This project is released under the GPL v2 license.
