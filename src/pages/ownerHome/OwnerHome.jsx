import OwnerHeader from "../../componets/OwnerHeader/OwnerHeader.jsx";
import HeadOwner from "../../componets/headOwner/Head.jsx";
import ItemsOwner from "../../componets/Items owner/ItemsOwner.jsx";

const Owner = () => {
  
// //ownersitems
//  const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const fetchItems = async () => {
//     // Simulated data for demonstration
//     const response = await axios.get('https://jownersitems.com/posts');
//     setItems(response.data);
//   };

  return(
    <div>
        <OwnerHeader/>
        <HeadOwner/>
        {/*ownersitems
        <ItemsOwner accommodations={items}/>*/}
    </div>

  )};
  export default Owner;