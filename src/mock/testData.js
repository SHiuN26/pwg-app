// https://api-for-testing-gujp.onrender.com/api/account/login

// {
//     "userId": 2,
//     "username": "Admin",
//     "email": "admin@yahoo.com",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkB5YWhvby5jb20iLCJ1c2VySWQiOjIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyMTM3OTQ5OCwiZXhwIjoxNzIxNDY1ODk4fQ.1wlrpOk5-QET4Has3zRMy6TBf9JwJ2ABCs222kdAgpU",
//     "message": "Login successful"
//   }

// https://api-for-testing-gujp.onrender.com/api/account/register

// {
//     "message": "Account registered successfully",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIyIiwiZW1haWwiOiJ1c2VyMkB5YWhvby5jb20iLCJ1c2VySWQiOjQsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE2MDk5MTc2LCJleHAiOjE3MTYxODU1NzZ9.A9OqQUr2Cx1aJ9BuoS2gCD7BK-Y1AWyGEEva_-PdHDQ",
//     "account": {
//         "userId": 2,
//         "username": "Admin",
//         "email": "admin@yahoo.com"
//     }
//  }

//   https://api-for-testing-gujp.onrender.com/api/posts?page=1&limit=6

// {
//     "data": [
//       {
//         "id": 21,
//         "userId": 2,
//         "title": "asf",
//         "body": "asfasf",
//         "date": "2024-07-19 8:31:15 AM",
//         "tags": [
//           "american",
//           "crime",
//           "fiction"
//         ]
//       },
//       {
//         "id": 21,
//         "userId": 1,
//         "title": "Philosophy of Science",
//         "body": "How philosophy shapes our understanding of science.",
//         "date": "2024-06-20 12:40:50 PM",
//         "tags": [
//           "philosophy",
//           "science"
//         ]
//       },
//       {
//         "id": 20,
//         "userId": 1,
//         "title": "Criminal Minds",
//         "body": "Understanding the psychology behind criminal behavior.",
//         "date": "2024-06-20 11:25:14 AM",
//         "tags": [
//           "crime",
//           "psychology"
//         ]
//       },
//       {
//         "id": 19,
//         "userId": 1,
//         "title": "Fantasy Worlds",
//         "body": "The magic and mystery of fantasy worlds.",
//         "date": "2024-06-20 10:10:29 AM",
//         "tags": [
//           "fantasy"
//         ]
//       },
//       {
//         "id": 18,
//         "userId": 1,
//         "title": "Science Innovations",
//         "body": "Recent innovations and discoveries in science.",
//         "date": "2024-06-19 9:55:47 PM",
//         "tags": [
//           "science"
//         ]
//       },
//       {
//         "id": 17,
//         "userId": 1,
//         "title": "American Icons",
//         "body": "Exploring the cultural impact of American icons.",
//         "date": "2024-06-19 8:20:31 PM",
//         "tags": [
//           "american",
//           "history"
//         ]
//       }
//     ],
//     "page": 1,
//     "limit": 6,
//     "totalPages": 4,
//     "totalPosts": 21
//   }

// https://api-for-testing-gujp.onrender.com/api/accounts

// {
//   accounts: [
//     {
//       userId: 1,
//       username: "John",
//       email: "john@yahoo.com",
//       password: "john123",
//       role: "user",
//     },
//     {
//       userId: 2,
//       username: "Admin",
//       email: "admin@yahoo.com",
//       password: "admin123",
//       role: "admin",
//     },
//     {
//       userId: 3,
//       username: "jerry222",
//       email: "admin4@yahoo.com",
//       password: "admin123",
//       role: "admin",
//     },
//   ];
// }

// https://api-for-testing-gujp.onrender.com/api/posts/mypost

// {
//     "page": 1,
//     "limit": 6,
//     "totalPages": 2,
//     "totalPosts": 11,
//     "data": [
//       {
//         "id": 21,
//         "userId": 2,
//         "title": "asf",
//         "body": "asfasf",
//         "date": "2024-07-19 8:31:15 AM",
//         "tags": [
//           "american",
//           "crime",
//           "fiction"
//         ]
//       },
//       {
//         "id": 14,
//         "userId": 2,
//         "title": "Space Odyssey",
//         "body": "The future of space travel and colonization.",
//         "date": "2024-06-19 3:30:29 PM",
//         "tags": [
//           "space",
//           "science"
//         ]
//       },
//       {
//         "id": 10,
//         "userId": 2,
//         "title": "The Adventure Begins",
//         "body": "A thrilling tale of exploration and discovery.",
//         "date": "2024-06-18 9:45:33 PM",
//         "tags": [
//           "adventure",
//           "fiction"
//         ]
//       },
//       {
//         "id": 9,
//         "userId": 2,
//         "title": "Philosophical Musings",
//         "body": "Exploring fundamental questions about existence and knowledge.",
//         "date": "2024-06-18 8:30:21 PM",
//         "tags": [
//           "philosophy"
//         ]
//       },
//       {
//         "id": 8,
//         "userId": 2,
//         "title": "Crime and Punishment",
//         "body": "Analyzing famous crime cases and their societal impact.",
//         "date": "2024-06-18 7:20:45 PM",
//         "tags": [
//           "crime",
//           "history"
//         ]
//       },
//   {
//     "id": 7,
//     "userId": 2,
//     "title": "Fantasy Realms",
//     "body": "Exploring the worlds created in fantasy literature.",
//     "date": "2024-06-18 5:35:17 PM",
//     "tags": [
//       "fantasy",
//       "fiction"
//     ]
//   }
//     ]
//   }
