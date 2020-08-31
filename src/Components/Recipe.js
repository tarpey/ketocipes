import React, { useState, useEffect } from 'react'
import firebase from '../Config/Firebase'
import { useParams } from 'react-router-dom'

export default () => {
  const [recipe, setRecipe] = useState(false)
  let { id } = useParams()
  useEffect(() => {
    firebase
      .firestore()
      .collection('recipes')
      .doc(id)
      .get()
      .then((result) => {
        if (result.exists) {
          setRecipe(result.data())
        } else {
          // Error
        }
      })
      .catch(function (error) {
        // Error
      })
  }, [id])
  return (
    recipe && (
      <>
        <section>
          <h2>{recipe.name}</h2>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => {
              return (
                <li key={index}>
                  {ingredient.amount} {ingredient.measurement} {ingredient.name}
                </li>
              )
            })}
          </ul>
          <h3>Steps</h3>
          <ol>
            {recipe.steps.map((step, index) => {
              return <li key={index}>{step.description}</li>
            })}
          </ol>
        </section>
      </>
    )
  )
}
