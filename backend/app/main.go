package main

import (
	"app/controller"
	"app/db"
	"app/repository"
	"app/router"
	"app/usecase"
	"app/validator"
	"log"
)

func main() {
	db := db.NewDB()

	// USE SQL
	sqlDB, err := db.DB() 
	if err != nil {
		log.Fatalf("Failed to connect to the database: %v", err)
	}
	userRepository := repository.NewUserRepository(sqlDB)

	// USE GORM
	// userRepository := repository.NewUserRepository(db)

	userValidator := validator.NewUserValidator(userRepository)
	userUsecase := usecase.NewUserUsecase(userRepository, userValidator)
	userController := controller.NewUserController(userUsecase)

	commentRepository := repository.NewCommentRepository(db)
	commentUsecase := usecase.NewCommentUsecase(commentRepository)
	commentController := controller.NewCommentController(commentUsecase)
	e := router.NewRouter(userController, commentController)
	e.Logger.Fatal(e.Start(":8080"))
}