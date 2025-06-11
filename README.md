# 🐾 PawHQ

This is a web application for kennels, catteries, pet hotels and vets to manage their animals, customers and bookings.

## Running the application

You must have Docker Desktop installed to run this application, and docker compose to run the application through the command line.

Firstly, you will need to copy `.env.example` to `.env.development`:

```bash
cp .env.example .env.development
```

And then customise it as needed.

To run the application in development mode, symlink `.env.development` to `.env` so Docker can use it:

```bash
ln -s .env.development .env
```

then run the following command in the root directory of the project:

```bash
docker compose up
```

To run the application in production mode, you will first need to copy `.env.example` to `.env.production`:

```bash
cp .env.example .env.production
```

And then customise it as needed.

To run the application in production mode, symlink `.env.production` to `.env` so Docker can use it:

```bash
ln -s .env.production .env
```

then run the following command in the root directory of the project:

```bash
docker compose up
```

### Running the tests

To run the tests, you can use the following command:

```bash
./run test
```

## The ./run script

The `./run` script is a convenience script to run various commands in the Docker container. You should read it yourself to see what it does.
