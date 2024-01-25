



// import React, { useState, useEffect } from "react";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { useCart } from "./CartContext";
// import axios from "axios";

// const ProductList = () => {
//   const { addToCart, cartItems } = useCart();
//   const [products, setProducts] = useState([]);
//   const [jewelry, setJewelry] = useState([]);
//   const [electronics, setElectronics] = useState([]);
//   const [mensClothing, setMensClothing] = useState([]);
//   const [search, setSearch] = useState("");
//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("https://fakestoreapi.com/products");
//         setProducts(response.data);

//         const responseJewelry = await axios.get(
//           "https://fakestoreapi.com/products/category/jewelery"
//         );
//         setJewelry(responseJewelry.data);

//         const responseElectronics = await axios.get(
//           "https://fakestoreapi.com/products/category/electronics"
//         );
//         setElectronics(responseElectronics.data);

//         const responseMensClothing = await axios.get(
//           "https://fakestoreapi.com/products/category/men's clothing"
//         );
//         setMensClothing(responseMensClothing.data);
//       } catch (error) {
//         console.error("API Error:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleSeeProfile = (id, title) => {
//     navigation.navigate("DetailProduct", { id, title });
//   };

//   const handleAddToCart = (product) => {
//     addToCart(product);
//   };

//   const handleNavigateToCart = () => {
//     navigation.navigate("Cart");
//   };

//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search products đi"
//           value={search}
//           onChangeText={(text) => setSearch(text)}
//         />
//         <TouchableOpacity
//           style={styles.cartButton}
//           onPress={handleNavigateToCart}
//         >
//           <Text style={styles.buttonText}>
//             <Ionicons name="cart" size={25} color="#fff" />
//           </Text>
//           {cartItems.length > 0 && (
//             <View style={styles.cartBadge}>
//               <Text style={styles.cartBadgeText}>{cartItems.length}</Text>
//             </View>
//           )}
//         </TouchableOpacity>
//       </View>
//       {search.length > 0 && (
//         <View>
//           <Text style={styles.heading}>Search Results</Text>
//           <ScrollView
//             contentContainerStyle={styles.productContainer}
//             horizontal={true}
//           >
//             {filteredProducts.map((product, index) => (
//               <View style={styles.productCard} key={index}>
//                 <Image
//                   source={{ uri: product.image }}
//                   style={styles.productImage}
//                 />
//                 <View style={styles.productInfo}>
//                   <Text style={styles.productTitle}>{product.title}</Text>
//                   <Text style={styles.productPrice}>${product.price}</Text>
//                   <View style={styles.buttonContainer}>
//                     <TouchableOpacity
//                       style={styles.addToCartButton}
//                       onPress={() => handleAddToCart(product)}
//                     >
//                       <Text style={styles.buttonText}>Add</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                       style={styles.profileButton}
//                       onPress={() =>
//                         handleSeeProfile(product.id, product.title)
//                       }
//                     >
//                       <Text style={styles.buttonText}>Profile</Text>
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               </View>
//             ))}
//           </ScrollView>
//         </View>
//       )}

//       <View style={styles.bannerContainer}>
//         <Image
//           source={require("./assets/banner2.jpg")}
//           style={styles.bannerImage}
//         />
//       </View>
//       <Text style={styles.themostText}>Experience Luxury:</Text>
//       <Text style={styles.luxuriousText}>Where Fashion Meets Finery</Text>
//       <Text style={styles.heading}>All products</Text>
//       <ScrollView
//         contentContainerStyle={styles.productContainer}
//         horizontal={true}
//       >
//         {products.map((product, index) => (
//           <View style={styles.productCard} key={index}>
//             <Image
//               source={{ uri: product.image }}
//               style={styles.productImage}
//             />
//             <View style={styles.productInfo}>
//               <Text style={styles.productTitle}>{product.title}</Text>
//               <Text style={styles.productPrice}>${product.price}</Text>
//               <View style={styles.buttonContainer}>
//                 <TouchableOpacity
//                   style={styles.addToCartButton}
//                   onPress={() => handleAddToCart(product)}
//                 >
//                   <Text style={styles.buttonText}>Add</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={styles.profileButton}
//                   onPress={() => handleSeeProfile(product.id, product.title)}
//                 >
//                   <Text style={styles.buttonText}>Profile</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         ))}
//       </ScrollView>
//       <Text style={styles.heading}>Jewelery</Text>
//       <ScrollView
//         contentContainerStyle={styles.productContainer}
//         horizontal={true}
//       >
//         {jewelry.map((jewelery, index) => (
//           <View style={styles.productCard} key={index}>
//             <Image
//               source={{ uri: jewelery.image }}
//               style={styles.productImage}
//             />
//             <View style={styles.productInfo}>
//               <Text style={styles.productTitle}>{jewelery.title}</Text>
//               <Text style={styles.productPrice}>${jewelery.price}</Text>
//               <View style={styles.buttonContainer}>
//                 <TouchableOpacity
//                   style={styles.addToCartButton}
//                   onPress={() => handleAddToCart(jewelery)}
//                 >
//                   <Text style={styles.buttonText}>Add</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={styles.profileButton}
//                   onPress={() => handleSeeProfile(jewelery.id, jewelery.title)}
//                 >
//                   <Text style={styles.buttonText}>Profile</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         ))}
//       </ScrollView>
//       <Text style={styles.heading}>Electronics</Text>
//       <ScrollView
//         contentContainerStyle={styles.productContainer}
//         horizontal={true}
//       >
//         {electronics.map((electronics, index) => (
//           <View style={styles.productCard} key={index}>
//             <Image
//               source={{ uri: electronics.image }}
//               style={styles.productImage}
//             />
//             <View style={styles.productInfo}>
//               <Text style={styles.productTitle}>{electronics.title}</Text>
//               <Text style={styles.productPrice}>${electronics.price}</Text>
//               <View style={styles.buttonContainer}>
//                 <TouchableOpacity
//                   style={styles.addToCartButton}
//                   onPress={() => handleAddToCart(electronics)}
//                 >
//                   <Text style={styles.buttonText}>Add</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={styles.profileButton}
//                   onPress={() =>
//                     handleSeeProfile(electronics.id, electronics.title)
//                   }
//                 >
//                   <Text style={styles.buttonText}>Profile</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         ))}
//       </ScrollView>

//     </ScrollView>
//   );
// };


// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     padding: 16,
//     maxWidth: 600,
//     margin: "auto",
//     backgroundColor: "#f8f8f8", // Một màu xám nhạt thay vì màu trắng
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginBottom: 16,
//   },
//   searchInput: {
//     height: 40,
//     borderColor: "#3498db", // Màu xanh dương
//     borderWidth: 2,
//     paddingLeft: 10,
//     borderRadius: 10,
//     flex: 1,
//     backgroundColor: "#ecf0f1", // Màu xám nhạt hơn
//   },
//   cartButton: {
//     backgroundColor: "#e74c3c", // Màu đỏ
//     padding: 8,
//     borderRadius: 15,
//     marginLeft: 10,
//     borderColor: "#c0392b", // Màu đỏ nhạt hơn
//     borderWidth: 1,
//     position: "relative",
//   },
//   cartBadge: {
//     position: "absolute",
//     top: 0,
//     right: 0,
//     backgroundColor: "#2c3e50", // Màu đen
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   cartBadgeText: {
//     color: "#fff",
//     fontSize: 12,
//     fontWeight: "bold",
//   },
//   bannerContainer: {
//     marginBottom: 16,
//   },
//   bannerImage: {
//     width: "100%",
//     height: 200,
//     resizeMode: "cover",
//     borderRadius: 10,
//   },
//   heading: {
//     fontWeight: "bold",
//     fontSize: 24,
//     textAlign: "left",
//     marginBottom: 10,
//     color: "#3498db", // Màu xanh dương
//   },
//   productCard: {
//     width: 150,
//     height: 230,
//     marginBottom: 20,
//     borderWidth: 0.8,
//     borderColor: "#27ae60", // Màu xanh lá cây
//     borderRadius: 10,
//     overflow: "hidden",
//     marginRight: 20,
//     backgroundColor: "#fff",
//   },
  
//   productImage: {
//     width: "100%",
//     height: "50%",
//     objectFit: "contain",
//     marginTop: 4,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 5,
//   },
//   addToCartButton: {
//     backgroundColor: "#b71540", // Deep red button
//     padding: 3,
//     borderRadius: 5,
//     flex: 1,
//     marginLeft: 5,
//     alignItems: "center",
//   },
//   profileButton: {
//     backgroundColor: "#0c2461", // Dark navy button
//     padding: 3,
//     borderRadius: 5,
//     flex: 1,
//     marginLeft: 5,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//   },
//   productInfo: {
//     flex: 1,
//     padding: 10,
//   },
//   productTitle: {
//     fontSize: 16,
//     marginBottom: 0,
//     textAlign: "center",
//     height: 40,
//     overflow: "hidden",
//   },
//   productPrice: {
//     fontSize: 14,
//     color: "#e55039", // Orange-red price color
//     textAlign: "center",
//     fontWeight: "bold",
//   },
//   luxuriousText: {
//     fontSize: 40,
//     fontWeight: "bold",
//     color: "#38ada9", // Teal text
//   },
//   themostText: {
//     fontSize: 35,
//     fontWeight: "bold",
//     color: "#3c6382", // Soft dark blue
//   },
// });


// export default ProductList;
import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "./CartContext";
import axios from "axios";

const ProductList = () => {
  const { addToCart, cartItems } = useCart();
  const [products, setProducts] = useState([]);
  const [jewelry, setJewelry] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [mensClothing, setMensClothing] = useState([]);
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);

        const responseJewelry = await axios.get(
          "https://fakestoreapi.com/products/category/jewelery"
        );
        setJewelry(responseJewelry.data);

        const responseElectronics = await axios.get(
          "https://fakestoreapi.com/products/category/electronics"
        );
        setElectronics(responseElectronics.data);

        const responseMensClothing = await axios.get(
          "https://fakestoreapi.com/products/category/men's clothing"
        );
        setMensClothing(responseMensClothing.data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSeeProfile = (id, title) => {
    navigation.navigate("DetailProduct", { id, title });
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleNavigateToCart = () => {
    navigation.navigate("Cart");
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="製品を検索する"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <TouchableOpacity
          style={styles.cartButton}
          onPress={handleNavigateToCart}
        >
          <Text style={styles.buttonText}>
            <Ionicons name="cart" size={25} color="#fff" />
          </Text>
          {cartItems.length > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartItems.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      {search.length > 0 && (
        <View>
          <Text style={styles.heading}>検索結果</Text>
          <ScrollView
            contentContainerStyle={styles.productContainer}
            horizontal={true}
          >
            {filteredProducts.map((product, index) => (
              <View style={styles.productCard} key={index}>
                <Image
                  source={{ uri: product.image }}
                  style={styles.productImage}
                />
                <View style={styles.productInfo}>
                  <Text style={styles.productTitle}>{product.title}</Text>
                  <Text style={styles.productPrice}>${product.price}</Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.addToCartButton}
                      onPress={() => handleAddToCart(product)}
                    >
                      <Text style={styles.buttonText}>追加</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.profileButton}
                      onPress={() =>
                        handleSeeProfile(product.id, product.title)
                      }
                    >
                      <Text style={styles.buttonText}>プロフィール</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
      <Text style={styles.themostText}>贅沢な経験</Text>
      <Text style={styles.luxuriousText}>ファッションと上品さが交わる場所</Text>
      <View style={styles.bannerContainer}>
        <Image
          source={require("./assets/banner.png")}
          style={styles.bannerImage}
        />
      </View>
      <Text style={styles.heading}>すべての製品</Text>
      <ScrollView
        contentContainerStyle={styles.productContainer}
        horizontal={true}
      >
        {products.map((product, index) => (
          <View style={styles.productCard} key={index}>
            <Image
              source={{ uri: product.image }}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{product.title}</Text>
              <Text style={styles.productPrice}>${product.price}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.addToCartButton}
                  onPress={() => handleAddToCart(product)}
                >
                  <Text style={styles.buttonText}>追加</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.profileButton}
                  onPress={() => handleSeeProfile(product.id, product.title)}
                >
                  <Text style={styles.buttonText}>プロフィール</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.heading}>ジュエリー</Text>
      <ScrollView
        contentContainerStyle={styles.productContainer}
        horizontal={true}
      >
        {jewelry.map((jewelery, index) => (
          <View style={styles.productCard} key={index}>
            <Image
              source={{ uri: jewelery.image }}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{jewelery.title}</Text>
              <Text style={styles.productPrice}>${jewelery.price}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.addToCartButton}
                  onPress={() => handleAddToCart(jewelery)}
                >
                  <Text style={styles.buttonText}>追加</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.profileButton}
                  onPress={() => handleSeeProfile(jewelery.id, jewelery.title)}
                >
                  <Text style={styles.buttonText}>プロフィール</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.heading}>エレクトロニクス</Text>
      <ScrollView
        contentContainerStyle={styles.productContainer}
        horizontal={true}
      >
        {electronics.map((electronics, index) => (
          <View style={styles.productCard} key={index}>
            <Image
              source={{ uri: electronics.image }}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{electronics.title}</Text>
              <Text style={styles.productPrice}>${electronics.price}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.addToCartButton}
                  onPress={() => handleAddToCart(electronics)}
                >
                  <Text style={styles.buttonText}>追加</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.profileButton}
                  onPress={() =>
                    handleSeeProfile(electronics.id, electronics.title)
                  }
                >
                  <Text style={styles.buttonText}>プロフィール</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

    </ScrollView>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 16,
    maxWidth: 600,
    margin: "auto",
    backgroundColor: "#f8f8f8", // Màu xám nhạt thay vì màu trắng
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: "#3498db", // Màu xanh dương
    borderWidth: 2,
    paddingLeft: 10,
    borderRadius: 10,
    flex: 1,
    backgroundColor: "#ecf0f1", // Màu xám nhạt hơn
  },
  cartButton: {
    backgroundColor: "#e74c3c", // Màu đỏ
    padding: 8,
    borderRadius: 15,
    marginLeft: 10,
    borderColor: "#c0392b", // Màu đỏ nhạt hơn
    borderWidth: 1,
    position: "relative",
  },
  cartBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#2c3e50", // Màu đen
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  bannerContainer: {
    marginBottom: 16,
  },
  bannerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "left",
    marginBottom: 10,
    color: "#3498db", // Màu xanh dương
  },
  productCard: {
    width: 150,
    height: 230,
    marginBottom: 20,
    borderWidth: 0.8,
    borderColor: "#27ae60", // Màu xanh lá cây
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 20,
    backgroundColor: "#fff",
  },
  
  productImage: {
    width: "100%",
    height: "50%",
    objectFit: "contain",
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  addToCartButton: {
    backgroundColor: "#b71540", // Deep red button
    padding: 3,
    borderRadius: 5,
    flex: 1,
    marginLeft:1,
    alignItems: "center",
  },
  profileButton: {
    backgroundColor: "#0c2461", // Dark navy button
    padding: 3,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 9,
  },
  productInfo: {
    flex: 1,
    padding: 12,
  },
  productTitle: {
    fontSize: 16,
    marginBottom: 0,
    textAlign: "center",
    height: 40,
    overflow: "hidden",
  },
  productPrice: {
    fontSize: 14,
    color: "#e55039", // Orange-red price color
    textAlign: "center",
    fontWeight: "bold",
  },
  luxuriousText: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#38ada9", // Teal text
  },
  themostText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#3c6382", 
    // Soft dark blue
    textAlign: "center",
  },
});


export default ProductList;


