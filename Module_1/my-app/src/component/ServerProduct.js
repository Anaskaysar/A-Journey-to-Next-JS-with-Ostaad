async function getData(){
    let res = await fetch ('https://dummyjson.com/products');
    let json = await res.json();       
    return json['products'];
}
const ServerProduct = async() => {

let data = await getData()

return (
  <>
   <h1>This is Home Page</h1>

   {data.map((item,index)=>{
            return <div key={index}>
                <h1>{item['title']}</h1>
                <h1>{item['price']}</h1>
            </div>
            })}
   
  </>
  
   
);
};

export default ServerProduct;