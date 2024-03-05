package usecase

import (
	"app/model"
	"app/repository"
)

type ICommentUsecase interface {
	GetAllComments(userId uint) ([]model.CommentResponse, error)
}

type commentUsecase struct {
	cr repository.ICommentRepository
}

func NewCommentUsecase(cr repository.ICommentRepository) ICommentUsecase {
	return &commentUsecase{cr}
}

func (cu *commentUsecase) GetAllComments(userId uint) ([]model.CommentResponse, error) {
	comments := []model.Comment{}
	if err := cu.cr.GetAllComments(&comments, userId); err != nil {
		return nil, err
	}
	resComments := []model.CommentResponse{}
	for _, v := range comments {
		c := model.CommentResponse{
			ID: v.ID,
			Comment: v.Comment,
			CreatedAt: v.CreatedAt,
			UpdatedAt: v.UpdatedAt,
		}
		resComments = append(resComments, c)
	}
	return resComments, nil
}

