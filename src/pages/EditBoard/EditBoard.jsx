// npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

// css
import styles from './EditBlog.module.css'

const EditBlog = (props) => {
  const location = useLocation()
  const [formData, setFormData] = useState(location.state)

  console.log(location);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleUpdateBlog(formData)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Edit Blog</h1>
        <label htmlFor="title-input">Title</label>
        <input
          required
          type="text"
          name="title"
          id="title-input"
          value={formData.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <label htmlFor="category-input">Category</label>
          <select
            required
            name="category"
            id="category-input"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="White">White</option>
            <option value="Gray">Gray</option>
            <option value="Cyan">Cyan</option>
            <option value="Magenta">Magenta</option>
          </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}
 
export default EditBlog;