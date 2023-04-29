import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context.jsx";

// Router
import { Link } from "react-router-dom";

function ItemList({ filtersAplicated }) {
  // const { setCount } = useContext(Context);
  // setCount(0);

  // const [products, setProducts] = useState(null);

  // useEffect(() => {
  //   const db = getFirestore();
  //   const itemsCollection = collection(db, "items");
  //   setProducts(null);

  //   setTimeout(() => {
  //     if (brandName.id === "All") {
  //       getDocs(itemsCollection)
  //         .then((snapshot) => {
  //           const docs = snapshot.docs;
  //           setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  //         })
  //         .catch((err) => console.log("Catch error:", err));
  //     } else {
  //       const queryResult = query(
  //         itemsCollection,
  //         where("brand", "==", brandName.id)
  //       );
  //       getDocs(queryResult)
  //         .then((snapshot) => {
  //           const docs = snapshot.docs;
  //           setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  //         })
  //         .catch((err) => console.log("Catch error:", err));
  //     };
  //   }, 200);
  // }, [brandName]);

  // if (!products) {
  //   return <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>;
  // } else {
  //   return (
  //     <div className="cardsContainer">
  //       {products.map((arr) => {
  //         return (
  //           <div key={arr.id} className="card">
  //             <Link to={`/item/${arr.id}`} className="cardLink">
  //               <img
  //                 src={arr.image}
  //                 alt="motorcycle-image"
  //                 className="cardImage"
  //               />
  //               <p className="cardBrand">{arr.brand}</p>
  //               <p className="cardModel">{arr.model}</p>
  //               <p className="cardPrice">US$ {arr.price}</p>
  //             </Link>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // };
};

export default ItemList;