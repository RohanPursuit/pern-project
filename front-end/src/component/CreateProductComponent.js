function CreateProductComponent () {
    return (
        <div className="CreateProductComponent">
            <form action="">
                <label htmlFor="name">Name: </label>
                <input id="name" type="text" />
                <label htmlFor="description">Description: </label>
                <input id="description" type="text" />
                <label htmlFor="price">Price: </label>
                <input id="price" type="number" />
                <label htmlFor="image">Image: </label>
                <input id="image" type="file" accept="image/*" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default CreateProductComponent