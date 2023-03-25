import { Box, Button, Modal } from "@material-ui/core"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProduct } from "../../redux/productSlice"
import './productModal.css'
const product = {
    productNae: "",
    category: "",
    price: "",
    unitNo: "",
    vendor: "",
    available: "",
    size: "",
    material: "",
    photo: "",
    quantity: "",
    description: "",
    brand: ""
}


export default function ProductModal() {

    const [newProduct, setNewProduct] = useState(product)

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.product)

    console.log(cart)

    // onChangeInput(e) {
    //     const { name, value } = e.target;
    //     this.setState({
    //       [name]: value
    //     }, () => console.log(this.state.mail === this.state.confMail));
    //   }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({
            ...newProduct,
            [name]: value
        })
    }


    //   const handleSubmit=(e)=>{
    //     e.preventDefault()
    //     console.log(newProduct)
    //   }


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addProduct(newProduct))
        console.log(newProduct)
    }


    return (
        <div>
            <div className="product-form-container" >

                <form >
                    <div className="indiv-container" >
                        <label>Product Name</label>
                        <input name="productName" placeholder="product Name" onChange={handleChange} />
                    </div>
                    <div className="indiv-container">
                        <label>Category</label>
                        <input name="category" type="text" placeholder="cateogry" onChange={handleChange} />
                    </div>
                    <div className="indiv-container" >
                        <label>Price</label>
                        <input name="price" type="text" placeholder="price" onChange={handleChange} />
                    </div>
                    <div className="indiv-container" >
                        <label>Unit Number</label>
                        <input name="unitNumber" type="text" placeholder="unit number" onChange={handleChange} />
                    </div>
                    <div className="indiv-container" >
                        <label>Vendor</label>
                        <input name="vendor" type="text" placeholder="vendor" onChange={handleChange} />
                    </div>
                    <div className="indiv-container" >
                        <label>available</label>
                        <input name="available" type="text" placeholder="available" onChange={handleChange} />
                    </div>

                    <div className="indiv-container" >
                        <label>Size</label>
                        <input name="size" type="text" placeholder="size" onChange={handleChange} />
                    </div>
                    <div className="indiv-container" >
                        <label>Material</label>
                        <input name="material" type="text" placeholder="material" onChange={handleChange} />
                    </div>
                    <div className="indiv-container" >
                        <label>photo</label>
                        <input name="photo" type="text" placeholder="photo" onChange={handleChange} />
                    </div>
                    <div className="indiv-container" >
                        <label>Quantity</label>
                        <input name="quantity" type="text" placeholder="quantity" onChange={handleChange} />
                    </div>
                    <div className="indiv-container" >
                        <label>Description</label>
                        <input name="description" type="text" placeholder="description" onChange={handleChange} />
                    </div>
                    <div className="indiv-container" >
                        <label>Brand</label>
                        <input name="brand" type="text" placeholder="Brand" onChange={handleChange} />
                    </div>

                    <button type='submit' className="add-btn" onClick={() => handleSubmit()} >Add Product</button>
                </form>
            </div>
        </div>
    )

}