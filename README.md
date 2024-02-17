
  
  

# Step 1: Install Packages from npm

  

## If you are a TRIAL customer

The Ext JS 30-day trial packages are available to install from public npm. Install the latest Ext JS version using the following command 

  

    $ npm install -g @sencha/ext-gen

  

## If you are an ACTIVE customer

Ext JS and all related commercial packages are hosted on Sencha's private npm registry. Login to the registry using the following command which configures npm to download packages in the @sencha scope from Sencha's registry.

  

### Username Note:

  

The email and password used during support portal activation (after license purchase) will be used to login to Sencha’s NPM repo. The username is the same as the email used, however, the @ character is replaced with '..' two periods. For example name@gmail.com converts to username: name..gmail.com

  

    $ npm login --registry=https://npm.sencha.com/ --scope=@sencha

    $ npm install -g @sencha/ext-gen


## Step 2: Open and explore your new Ext JS application

Your project has been generated, now change to that directory

    cd ./jsdays24-fbauth-app

    npm install

Run this npm command to start exploring your project. This will open your browser with the application entry point.

`npm start`

**Congratulations! You have now successfully built an application using Ext JS!**