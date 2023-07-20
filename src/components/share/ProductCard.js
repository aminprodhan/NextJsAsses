

const ProductCard=({item,isExist,handleAddToCart})=>{
    let disPrice=Number(item.dis_price);
    let priceContent=item.price != disPrice ? <span className="line-through text-sm text-gray-900 dark:text-white">${item.price}</span> : null;
    let cartBtn=isExist ? (
        <div className="px-1 py-1 bg-teal-500 hover:bg-teal-700 
                border-teal-500 hover:border-teal-700 text-xs border-4 inline-block
                text-white rounded">
                    <button className="px-1">+</button>
                    <span className="px-1">55</span>
                    <button className="px-1">-</button>
            </div>  
    ) : (<button onClick={()=>handleAddToCart(item)} className="ml-5 flex-shrink-0 px-1 py-1 bg-white-500 hover:bg-white-700 
    border-white-500 hover:border-white-700 text-xs
    text-black rounded" type="submit">
    Add to Cart
</button>);

    return(

        <div className="w-full max-w-sm bg-white shadow dark:bg-gray-800">
            <a href="#">
                <img className="p-8 rounded-t-lg" src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg" alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                    </h5>
                </a>
                <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">${disPrice}</span>
                    {priceContent}
                </div>
            </div>
            {cartBtn}
                  


        </div>

    )
}
export default ProductCard;