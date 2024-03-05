package repository

import (
	"app/model"
	"fmt"

	"gorm.io/gorm"
)

type ICommentRepository interface {
	GetAllComments(comments *[]model.Comment, userId uint) error
}

type commentRepository struct {
	db *gorm.DB
}

func NewCommentRepository(db *gorm.DB) ICommentRepository {
	return &commentRepository{db}
}

func (cr *commentRepository) GetAllComments(comments *[]model.Comment, userId uint) error {
	fmt.Println("value:", cr.db.Joins("User").Where("user_id=?", userId).Order("created_at").Find(comments).Error)
	if err := cr.db.Joins("User").Where("user_id=?", userId).Order("created_at").Find(comments).Error; err!= nil {
		return err
	}
	return nil
}