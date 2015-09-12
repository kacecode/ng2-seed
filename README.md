#Angular 2 Seed#

This project strives to be a stable environment for delving into Angular 2 whilst providing some examples of common behaviors.

##Install##

Make sure node is up to date -- You are best off using the official PPA on Ubuntu/Debian:

`curl --silent --location https://deb.nodesource.com/setup_0.12 | sudo bash - && sudo apt-get install --yes nodejs`


Install the angular-cli -- This may take some time to compile, and features a bunch of warnings.

`sudo npm install -g angular-cli`


Locally to the project, install the npm dependencies

`npm install`


##Run##

Angular-cli installed as a tool called `ng` to help you compile/serve the content.

####Run the environment####
`ng serve`

This hosts a server complete with TypeScript compilation and LiveReload.
It is available via http://localhost:4200


##Structure##
Make all changes to the `src` directory, avoiding mutating the `typings` directory which supplied TypeScript definition files on Angular 2 and its dependencies.


##Beyond##

Resources for Angular 2 are still quite limited, though there are a few canonical resources (they are sometimes out of date).

The [homepage](https://angular.io/docs/js/latest/) features a few guides, and the `API Preview` which provides docstrings from Angular 2's source code.

A great cannonical source of examples is in the github repo itself -- the team maintains a number of little projects reflecting particular behaviors. [Angular 2's Examples](https://github.com/angular/angular/tree/c349bbbc08dab05ca916b20f92d1a50cb1183618/modules/examples/src)
