#Iframe App

It's an application which can do:

  * upload images through Django admin;
  * provide embeddable iframe to load and show the images.

##Demo

Please go to [JSFiddle](http://jsfiddle.net/y1Lnm370/67/).
It uses live application hosted on pythonanywhere: [http://yurisklar.pythonanywhere.com/iframe/#tag/starting](http://yurisklar.pythonanywhere.com/iframe/#tag/starting)


###Installation

1. Make sure Python (2.7), virtualenvwrapper, and Git are installed

2. Install and setup django-iframe-app:

        % mkvirtualenv django-iframe-app
        % git clone https://github.com/yurisklar/django-iframe-app.git

3. Create the database and sync dependencies and data

        % cd django-iframe-app
        % pip install -r requirements.txt
        % python project/manage.py migrate

4. Build user accounts:

        % python project/manage.py createsuperuser

9. Start it up!

        % python project/manage.py runserver

###Local environment

To see how it works in local environment you need to use Django admin to populate images, also you'd need to run 2 servers on different ports (say 9000 and 9009) and open [http://localhost:9009/test/](http://localhost:9009/test/)

###TODO

  * add tests
  * add documentation
