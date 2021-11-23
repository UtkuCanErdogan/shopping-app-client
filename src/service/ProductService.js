import axios from "axios";

export default class ProductService{
    async getAll(){
       return await axios.get("http://localhost:8080/api/product/getAll");
    }
    async getProductByType(type){
        console.log("Girdi");
        return await axios.get(`http://localhost:8080/api/product/type/${type}`);
    }

    async getProductById(id){
        return await axios.get(`http://localhost:8080/api/product/${id}`)
    }

    async createProduct(product){
        return await axios.post("http://localhost:8080/api/product/create", {
            type:product.type,
            name:product.name,
            price:product.price,
            description:product.description,
            quantity:product.quantity,
            image:product.image
        });
    }

    async updateProduct(product, id){
        return await axios.put(`http://localhost:8080/api/product/update/${id}`, {
            type:product.type,
            name:product.name,
            price:product.price,
            description:product.description,
            quantity:product.quantity
        });
    }
}
