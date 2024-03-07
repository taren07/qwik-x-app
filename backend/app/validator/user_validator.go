package validator

import (
	"app/model"
	"errors"

	validation "github.com/go-ozzo/ozzo-validation/v4"
	"github.com/go-ozzo/ozzo-validation/v4/is"
)

// IUserRepository defines the interface for database operations
type IUserRepository interface {
	ExistsByEmail(email string) (bool, error)
}

type IUserValidator interface {
	UserValidate(user model.User) error
}

type userValidator struct {
	userRepo IUserRepository
}

func NewUserValidator(userRepo IUserRepository) IUserValidator {
	return &userValidator{userRepo: userRepo}
}

func (uv *userValidator) emailIsUnique(value interface{}) error {
	email, _ := value.(string)
	exists, err := uv.userRepo.ExistsByEmail(email)
	if err != nil {
		return err
	}
	if exists {
		return errors.New("email is already registered")
	}
	return nil
}

func (uv *userValidator) UserValidate(user model.User) error {
	return validation.ValidateStruct(&user,
		validation.Field(
			&user.Email,
			validation.Required.Error("email is required"),
			validation.RuneLength(1, 30).Error("limited max 30 char"),
			is.Email.Error("is not valid email format"),
			validation.By(uv.emailIsUnique),
		),
		validation.Field(
			&user.Password,
			validation.Required.Error("password is required"),
			validation.RuneLength(6, 30).Error("limited min 6 max 30 char"),
		),
	)
}
