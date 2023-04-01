import classes from "./Body.module.css"

import { images } from "@/Utils/Photos"
import ImageComponent from "../Images/ImageComponent"
import { useState } from "react"

const Body = () => {
  const [selectedFilter, setSelectedFilter] = useState("All")

  var imageArray = images
  const filterChangeHandler = (event) => {
    console.log(selectedFilter)
    setSelectedFilter(event.target.value)
  }

  if (selectedFilter !== "All") {
    imageArray = images.filter((image) => {
      return image.category === selectedFilter
    })
    console.log(imageArray)
  }

  return (
    <>
      <div className={classes.section}>
        <select onChange={filterChangeHandler}>
          <option value="All">ALL</option>
          <option value="ANIMALS">ANIMALS</option>
          <option value="NATURE">NATURE</option>
          <option value="CITY">CITY</option>
          <option value="FOOD">FOOD</option>
          <option value="PORTRAIT">PORTRAIT</option>
          <option value="VEHICLE">VEHICLE</option>
          <option value="OTHER">OTHER</option>
        </select>
      </div>
      <div className={classes["grid-container"]}>
        {imageArray.map((image) => (
          <ImageComponent key={Math.random().toString()} data={image} />
        ))}
      </div>
    </>
  )
}

export default Body
