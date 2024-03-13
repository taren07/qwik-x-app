package repository

import (
	"app/model"
	"database/sql"
	"errors"
	// "gorm.io/gorm"
)

type IUserRepository interface {
	GetUserByEmail(user *model.User, email string) error
	CreateUser(user *model.User) error
	ExistsByEmail(email string) (bool, error)
}

type userRepository struct {
	// db *gorm.DB
	db *sql.DB
}

// func NewUserRepository(db *gorm.DB) IUserRepository {
// 	return &userRepository{db}
// }

// func (ur *userRepository) GetUserByEmail(user *model.User, email string) error {
// 	if err := ur.db.Where("email=?", email).First(user).Error; err != nil {
// 		return err
// 	}
// 	return nil
// }

// func (ur *userRepository) CreateUser(user *model.User) error {
// 	if err := ur.db.Create(user).Error; err != nil {
// 		return err
// 	}
// 	return nil
// }

// func (ur *userRepository) ExistsByEmail(email string) (bool, error) {
// 	var user model.User
// 	if err := ur.db.Where("email = ?", email).First(&user).Error; err != nil {
// 		if err == gorm.ErrRecordNotFound {
// 			return false, nil
// 		}
// 		return false, err
// 	}
// 	return true, nil
// }

func NewUserRepository(db *sql.DB) IUserRepository {
	return &userRepository{db}
}

func (ur *userRepository) GetUserByEmail(user *model.User, email string) error {
	query := `SELECT id, email FROM users WHERE email = ? LIMIT 1`
	row := ur.db.QueryRow(query, email)
	if err := row.Scan(&user.ID, &user.Email); err != nil {
		if err == sql.ErrNoRows {
			return errors.New("user not found")
		}
		return err
	}
	return nil
}

func (ur *userRepository) CreateUser(user *model.User) error {
	query := `INSERT INTO users (email) VALUES (?, ?)`
	_, err := ur.db.Exec(query, user.Email)
	if err != nil {
		return err
	}
	return nil
}

func (ur *userRepository) ExistsByEmail(email string) (bool, error) {
	query := `SELECT 1 FROM users WHERE email = ? LIMIT 1`
	var exists bool
	row := ur.db.QueryRow(query, email)
	err := row.Scan(&exists)
	if err != nil {
		if err == sql.ErrNoRows {
			return false, nil
		}
		return false, err
	}
	return true, nil
}