package controller

import (
	"app/usecase"
	"net/http"

	"github.com/golang-jwt/jwt/v4"
	"github.com/labstack/echo/v4"
)

type ICommentController interface {
	GetAllComments(c echo.Context) error
}

type commentController struct {
	cu usecase.ICommentUsecase
}

func NewCommentController(cu usecase.ICommentUsecase) ICommentController {
	return &commentController{cu}
}

func (cc *commentController) GetAllComments(c echo.Context) error {
	user := c.Get("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	userId := claims["user_id"]

	commentRes, err := cc.cu.GetAllComments(uint(userId.(float64)))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, commentRes)
}