<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## String Calculator

Included here is the implementation of the
string calcuator logic as outlined in the take
home assignment. The application includes auth,
database and can be easily spun up locally via
docker/docker compose.

To run this application locally requires the
dependencies

    PHP 8.1, Composer 2.2.7, Docker, Docker-Compose

You may easily install dependencies using the following docker command

    docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs

I have included a purely JavaScript
implementation as well as a back end PHP
implementation for the calculator.

The JS tests can be run via

    npm run test

It should be noted that all calculator entries
here only live in state and will not survive
refreshes or navigations.

The PHP tests can be run via

    (php tests current unavailable due to time constraints, available upon request)

It should be noted that all calculator entries
will be stored in the connected MySQL database
and the results will be persisted.

I would have liked to post some of the
recent work I have been doing but sadly, the
work is proprietary. However I think I can
at least give a high level overview of the
tech stack used in my most recent project.

[HERE](https://github.com/smesj/string-calc/blob/master/resources/js/tech-stack.png) will find a simple diagram outlining the current
[Case Care](https://www.casecare.ca/) tech stack currently in use to hopefully reflect a few of my competencies.