build:
	docker-compose build front

start:
	docker-compose up -d front

stop:
	docker-compose down

logs:
	docker-compose logs -f front

lint:
	docker-compose run front npm run lint