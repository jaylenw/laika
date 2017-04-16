
# Laika

![](https://github.com/jaylenw/laika/raw/master/screenshots/lakia.png)

## Description

Lakia is a user friendly interface that allows a person to view, create, or destroy their Linode VPS's with ease.

This is a quick hack [Rich](https://github.com/RichCherng), [Cherie](https://github.com/cheriejw), and myself did for fun. Currently, we don't have any long term goals for this application nor putting significant amount of work into this at this time. However, your are welcome to contribute.

## How We built it

We used AngularJS, (Angular Material), and Linode's API.

## Why we built Laika?

We want to give developers an easy way to manage their
virtual private servers. Instead of the user using the
interface on Linode.com, they are able to quickly carry
out functionality with this web app. For users that are
new to using VPS's, we want to make it simple for
developers getting started with Virtual Private Servers
by allowing them to start a VPS we have configured for
them.

## Functionality

The user can create, clone, boot, shutdown, delete disks,
check status of any Linode Virtual Private Servers for
their account. The user is given a list of datacenters
where they can easily deploy Ubuntu servers. They are
also able to view standard information about their
account, such as how much credit they have in their
account and when their account was created.

What's up with the Name and Space theme?
We thought it would be cool to give our app a space
theme. Galaxies make up the Universe, Galaxies are made
up of stars, and stars sometimes have planets. The
Internet has datacenters (galaxies) and these datacenters have
servers (stars), in which these servers may contain applications (planets)
associated with them. In short, we think referring to our virtual
private server, simply a VPS, was not that interesting, we decided to call them
stars. And it went on from there!!!!! BTW,
Lakia, our mascot was the first dog in space.



![](https://github.com/jaylenw/laika/raw/master/screenshots/1.png)

![](https://github.com/jaylenw/laika/raw/master/screenshots/2.png)

![](https://github.com/jaylenw/laika/raw/master/screenshots/3.png)

![](https://github.com/jaylenw/laika/raw/master/screenshots/4.png)

## Building & Development

Assuming you are using Ubuntu 16.04, Have compass, npm, and bower installed.

    sudo apt update  
    sudo apt install nodejs  
    sudo ln -s /usr/bin/nodejs /usr/bin/node  
    sudo apt install npm
    sudo npm install -g npm
    sudo npm install -g bower
    sudo npm install -g grunt-cli
    sudo apt install ruby-compass

Run `npm install` and `bower install` in project home
folder after cloning the repo. Obtain your own api key
from Linode and add it to the app in the corresponding
line in `app/scripts/services/linodeAPI.js`.

Run `grunt` for building and `grunt serve` for preview.

----------------

Made with ♥ at LA Hacks 2017.

Pull request and issues are welcomed.

Note: The current state of this app does not secure your api token. You are
responsible for making your own deployment secure.
