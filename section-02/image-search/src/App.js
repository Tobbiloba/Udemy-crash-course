import { useEffect, useState } from 'react'
import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from './components/ImageList';
import SearchOptions from './components/SearchOptions';
// import './App.css'
function App() {
  const [images, setImages] = useState([])
  const [search, setSearch] = useState('')
  const handleSubmit = async (term) => {
    console.log(term)
    setSearch(term)
    const result = await searchImages(term)
    setImages(result)

  }
  useEffect(() => {
    handleSubmit('random')
  }, [])
  return (
    <div className="bg-slate-500">
      <div className='flex px-[1.5rem] lg:px-[10%] lg:justify-between lg:py-[2rem] py-[1rem] md:px-[3.5rem] border flex-col flew-wrap bg-slate-800 text-white lg:flex-row'>
        <h1 className=' text-xl font-mono font-bold lg:text-3xl'>Image <span className='text-slate-600'>Finder</span></h1>
        <SearchBar onSubmit={handleSubmit} />
      </div>

      <div className='px-[1.5rem] md:px-[3.5rem]'>
        <SearchOptions onSubmit={handleSubmit} items={search} />
        <ImageList images={images} />
      </div>


    </div>
  );
}

export default App;
