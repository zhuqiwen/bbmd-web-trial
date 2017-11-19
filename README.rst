BBMD web application
====================

This is a web-application for using the Bayesian Benchmark Dose (BBMD) software.


For celery-tasks, `redis <http://redis.io/>`_ is used as a task-broker,
and is required for running in production. In development, celery-tasks are
run synchronously in the django `runserver` execution.
