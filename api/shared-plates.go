package handler

import (
	"encoding/json"
	"net/http"
	"os"

	f "github.com/fauna/faunadb-go/faunadb"
)

func sendSharedPlatesJSON(w http.ResponseWriter, data interface{}) {
	js, err := json.Marshal(data)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	w.Write(js)
}

// SharedPlatesHandler for returning a users shared plates
func SharedPlatesHandler(w http.ResponseWriter, r *http.Request) {
	client := f.NewFaunaClient(os.Getenv("FAUNADB_SECRET_KEY"))

	var id string
	err := json.NewDecoder(r.Body).Decode(&id)

	result, _ := client.Query(f.Map(f.Paginate(f.MatchTerm(f.Index("shared_plates"), id)), f.Lambda("x", f.Get(f.Var("x")))))

	if err != nil {
		panic(err)
	}

	sendSharedPlatesJSON(w, result)
}
