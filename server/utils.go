package main

import "os"

func GetEnv() string {
	return os.Getenv("APP_ENV")
}
