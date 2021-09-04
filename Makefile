install:
	@echo "";
	@echo "Installing the application ...";
	@echo "";
	@docker-compose up -d --build;
	@docker exec -it react yarn install;
	@docker exec -it node npm install;
	@echo "";
	@echo "Done installing the application";
	@echo "";

clean:
	@echo "";
	@echo "Cleaning the application ...";
	@echo "";
	@docker-compose down --remove-orphans;
	@docker system prune --all -f -a;
	@echo "";
	@echo "Done cleaning the application";
	@echo "";

run-frontend:
	@echo "";
	@echo "Starting the frontend application ...";
	@echo "";
	@docker exec -it react yarn start;
	@echo "";

run-backend:
	@echo "";
	@echo "Starting the backend application ...";
	@echo "";
	@docker exec -it node node server.js;
	@echo "";