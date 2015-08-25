
#Install#

Make sure node is up to date -- You are best off using the official PPA on Ubuntu/Debian:

`curl --silent --location https://deb.nodesource.com/setup_0.12 | sudo bash - && sudo apt-get install --yes nodejs`


Install the angular-cli -- This may take some time to compile, and features a bunch of warnings.

`sudo npm install -g angular-cli`


Locally to the project, install the npm dependencies

`npm install && bower install`


#Run#

Angular-cli installed as a tool called `ng` to help you compile/serve the content.

###Run the environment###
`ng serve`

This hosts a server complete with TypeScript compilation and LiveReload.
It is available via http://localhost:4200


#Structure#
Make all changes to the `src` directory, avoiding mutating the `typings` directory which supplied TypeScript definition files on Angular 2 and its dependencies.
