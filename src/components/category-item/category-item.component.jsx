import './category-item.styles.scss'

const CategoryItem = ({category}) => {
    const {title, image} = category
    return (
      <div  className="category-container">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="background-image"
        />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    );
}

export default CategoryItem