import { useState } from 'react'
import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from './components/ImageList';
import './App.css'
function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
    const result = await searchImages(term)
    setImages(result)

  }
  return (
    <div className="App">
      <h1 className='header'>Image Finder</h1>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
