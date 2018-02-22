# OpenLayers Workshop
A big workshop in Javascript for OpenLayers. 

## References
* https://openlayers.org/workshop/fr/
* https://openlayers.org/workshop/en/
* https://openlayers.org/

## Setup

These instructions assume that you are starting with an `openlayers-workshop-en.zip` archive from the latest [workshop release](https://github.com/openlayers/workshop/releases).  In addition, you'll need [Node](https://nodejs.org/) v6 or higher installed to run a development server for the workshop.

After extracting the zip, change into the `openlayers-workshop-en` directory and install some additional dependencies:

    npm install

Now you're ready to start the workshop development server.  This serves up the [workshop documentation]({{book.workshopUrl}}/doc/) in addition to providing a module bundler for the OpenLayers library.

    npm start

This will start a development server where you can read the workshop documentation and work through the exercises.  You should be able to confirm that things are working by seeing an alert pop up at {{book.workshopUrl}}/.  You can read through the workshop documentation at {{book.workshopUrl}}/doc/.