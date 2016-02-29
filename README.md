teaspoon-browserstack
=========

This repository is an example rails application which shows how to run your [teaspoon](https://github.com/modeset/teaspoon) tests on BrowserStack.

## Setup
[BrowserStackLocal binary](https://www.browserstack.com/local-testing#command-line) must be running in the background for running tests.

### Configuration
- The configuration options can be found in `/spec/teaspoon_env.rb` file
- Edit the `config.driver_options` array to add browsers to test on.
- `bundler` must be installed for the specific ruby version.
- Run `bundle install` at the root of the repo

### Sample test
- To run the tests, simply run `bundle exec teaspoon`

Check the [teaspoon wiki](https://github.com/modeset/teaspoon/wiki) for more information.
