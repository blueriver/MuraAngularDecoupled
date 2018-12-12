# MuraAngularDecoupled

## Initial Startup

First you need to start Mura up:
```
git clone https://github.com/blueriver/MuraAngularDecoupled.git
cd MuraAngularDecoupled
git checkout master
cd mura
docker-compose up
```

Then go to http://localhost:8888 to initialize Mura's install then login with the default (admin/admin) and edit the default site's settings:
* Domain= The domain of the remote site that the the content will be served on. (localhost)
* Is Remote = true
* Remote Context = The directory structure off of the remote site's web root that the site lives (Leave Empty)
* Remote Port = The port of the remote site (4200)
* Resource Domain = The domain that Mura will use the access resource like css and js scripts that are dynamically loaded. (localhost)

Second you need to start Angular up:

If you haven't already install Angular CLI you will need to run This

```
npm install -g @angular/cli
```

Then in terminal go to the ./angular directory within the project root:
```
cd {project_root}/angular
npm install
npm run start
```

You can now visit the site at http://localhost:4200

And finally go to your Mura admin (http://localhost:8888/admin) and reload Mura one more to and it will see the mura.config.json from the ./angular directory.

# Key Points of Integration with Mura

The intergration is entirely done with Mura.js installed as an npm within the and project while running Mura's official docker container.

## Mura Version

You must use Mura 7.1.324 of higher

## NPM
https://www.npmjs.com/package/mura.js

## Mura.js documentation

https://docs.getmura.com/v7-1/mura-developers/mura-rendering/murajs/

## Docker Image

https://hub.docker.com/r/blueriver/muracms/

## Theming

With this use case Mura modules, templates and content type includes are now located outside of Mura within the client.

https://github.com/blueriver/MuraAngularDecoupled/tree/master/angular/src/app/contenttypes/default
https://github.com/blueriver/MuraAngularDecoupled/tree/master/angular/src/app/templates
https://github.com/blueriver/MuraAngularDecoupled/tree/master/angular/src/app/modules

## Configuring Mura Remotely

There is a mura.config.json file that the Mura service reads in when loading to get what it needs to know from the client.

https://github.com/blueriver/MuraAngularDecoupled/blob/master/angular/mura.config.json

You tell Mura about it as an environment variable

https://github.com/blueriver/MuraAngularDecoupled/blob/master/mura/docker-compose.yml#L22

When Angular starts up is get's copied to the public /assets Directory

https://github.com/blueriver/MuraAngularDecoupled/tree/master/angular/src/assets

Mura.js is initialized from within the mura.service file that also wires in any custom modules

https://github.com/blueriver/MuraAngularDecoupled/blob/master/angular/src/app/mura.service.ts

## Mura ORM Assembler and Scaffolder

An import aspect of Mura 7.1 and this way of workin with Mura is using the Mura ORM Assembler and Scaffolder to create your own custom entities and then user Mura.js to access then within your client.  It works the same way as working with normal content and feeds.

https://docs.getmura.com/v7-1/mura-developers/mura-beans-objects/custom-objects/mura-orm/mura-orm-assembler-scaffolder/

# Key Points About Angular

This demonstration project does not currently support prerendering or ssr.
