import React, { useState, useEffect } from 'react'
import firebase from '../Config/Firebase'
import { Link } from 'react-router-dom'

export default () => {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    firebase
      .firestore()
      .collection('recipes')
      .orderBy('name')
      .limit(10)
      .get()
      .then((results) => {
        results.forEach((result) => {
          setRecipes((recipes) => [
            ...recipes,
            { id: result.id, name: result.data().name },
          ])
        })
      })
  }, [])

  return (
    recipes.length > 0 && (
      <>
        <section>
          <h2>Recipes</h2>
          <div className="grid full">
            {recipes.map((recipe) => {
              return (
                <div key={recipe.id} className="grid-item">
                  <h3>
                    <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
                  </h3>
                </div>
              )
            })}
          </div>
        </section>
      </>
    )
  )
}
