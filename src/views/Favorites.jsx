import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import IconHeart from "../components/IconHeart";


const Favorites = () => {
  const { photos, setPhotos } = useContext(PhotoContext);
  console.log(photos);
  const photosfav = (id) => {
    const updatedPhotos  = photos.map((photo) => {
      console.log(photo.id);
      if (photo.id === id) {
        return {
          ...photo,
        
          isFav:false,
        };
      }
      return photo;
     
    });
    setPhotos(updatedPhotos );

  };
  const favoritePhotos = photos.filter((photo) => photo.isFav);
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="gallery grid-columns-5 p-3">
      {console.log(favoritePhotos)}
      {favoritePhotos.map((photo, i) => (
        <div
          key={i}
          onClick={() => photosfav(photo.id)}
          className="photo"
          style={{
            backgroundImage: `url(${photo.src.large})`,
          }}
        >
          <IconHeart filled={photo.isFav} />
          {""}
          <section>
            <p>{photo.alt}</p>
            <h4>{photo.photographer}</h4>
          </section>
        </div>
      ))}
    </div>

    </div>
  );
};
export default Favorites;
