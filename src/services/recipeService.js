// services
import * as tokenService from './tokenService'
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/recipes`

//take existing index controller
//use query params to modify requests
//if query params are present on request, we can make the appropriate call to the edamam api
//when at controller can look at req.query
//index will be the function to make the call
//http://localhost:3001/api/recipes/?q=chicken
async function index(query) {
  try {
    const res = await fetch(`${BASE_URL}/?q=${query}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function show(recipeId) {
  try {
    const res = await fetch(`${BASE_URL}/${recipeId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function create(recipeFormData) {
  try {
    // BASE_URL IS POST http://localhost:3001/api/blogs
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipeFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function update(recipeFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${recipeFormData._id}`, {
      method: 'PUT',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipeFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createComment(recipeId, recipeFormData) {
  try {
    console.log("!!!", recipeFormData, recipeId);
    const res = await fetch(`${BASE_URL}/${recipeId}/comments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipeFormData)
    })
    console.log("RESSSS", res.body);
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function showRecipeComments(recipeId) {
  try {
    const res = await fetch(`${BASE_URL}/${recipeId}/comments`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  show,
  create,
  update,
  createComment,
  showRecipeComments
}