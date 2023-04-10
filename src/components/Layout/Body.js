import classes from "./Body.module.css"

import { images } from "@/Utils/Photos"
import ImageComponent from "../Images/ImageComponent"
import { useEffect, useState } from "react"
import supabase from "@/Utils/Supabase"

async function fetchTableData() {
  try {
    // Fetch data from 'table_name' in 'schema_name'
    const { data, error } = await supabase.from("images_table").select("*")

    if (error) {
      throw error
    }

    // Return retrieved data
    return data
  } catch (error) {
    console.error("Error fetching table data:", error)
    return null
  }
}
const Body = () => {
  // const [selectedFilter, setSelectedFilter] = useState("All")

  // const filterChangeHandler = (event) => {
  //   console.log(selectedFilter)
  //   setSelectedFilter(event.target.value)
  // }

  // if (selectedFilter !== "All") {
  //   imageArray = images.filter((image) => {
  //     return image.category === selectedFilter
  //   })
  //   console.log(imageArray)
  // }

  // var imageArray = data
  // console.log("data" + data)

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    // Fetch table data on component mount
    const fetchData = async () => {
      const data = await fetchTableData()
      if (data) {
        setTableData(data)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {/* <div className={classes.section}>
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
      </div> */}
      <div className={classes["grid-container"]}>
        {tableData.map((image) => (
          // <p key="123">{image.category}</p>
          <ImageComponent key={Math.random().toString()} data={image} />
        ))}
      </div>
    </>
  )
}

export default Body
