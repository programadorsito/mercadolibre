import React from 'react';
import './Productos.css';

const Productos=(props)=>{

    const nombres=[];

    const products=props.products.map((product)=>{
        product.nombreVendedor="";
        props.nombre_seller.forEach(data => {
            if(product.seller.id===data.data.id){
                product.nombreVendedor=data.data.nickname;
            }
        });
        
        if(product){
            product.tag="";
            if(product.tags!=null && product.tags.length>0)
                product.tag=product.tags[1];
            
            return(
    
                  <div className="card producto" key={product.id}>
                    <center><img alt={product.tag} src={product.thumbnail} className="card-img-top imagenProducto" /></center>
                    <div className="card-body">
                        <h5 class="card-title">{product.title}</h5>
                        <ul className="ul">
                            <li><p>$ {product.price} </p></li>
                            <div><li className="nombreVendedor"><p>Vendedor: {product.nombreVendedor}</p></li></div>
                                
                            <li><p>Id vendedor: {product.seller.id}</p></li>
                            <li><p>Cantidades disponibles: {product.available_quantity}</p></li>
                        </ul>
                    </div>
                </div>
    
            );
        }else{
            return(
    
                  <div className="card producto" >
                    
                </div>
    
            );
        }



    });

    return (
        <div className="products-list">
            {products}
        </div>
    );

};

export default Productos;