Each API endpoint begins with http://localhost:5005

# Playgrounds
createPlayground        POST /api/playgrounds/create 
getAllPlaygrounds       GET /api/playgrounds/
getPlaygroundById       GET /api/playgrounds/:id
updatePlaygroundById    PATCH /api/playgrounds/:id
deletePlaygroundById    DELETE /api/playgrounds/:id

# Users
createUser              POST /api/users/register
getUserById             GET /api/users/:id
updateUserById          PATCH /api/users/:id
deleteUserById          DELETE /api/users/:id

# Reviews
createReview            POST /api/reviews/create
getAllReviews           GET /api/playgrounds/:playgroundId/reviews
updateReview            PATCH /api/reviews/:id
deleteReview            DELETE /api/reviews/:id
