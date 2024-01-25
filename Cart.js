

// import axios from 'axios';
// import CryptoJS from 'crypto-js';
// import { Linking } from 'react-native';
// import React from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import { useCart } from './CartContext';

// const Cart = () => {
//   const {
//     cartItems,
//     removeFromCart,
//     updateCartItemQuantity,
//     clearCart,
//   } = useCart();

//   const handleIncreaseQuantity = (itemId) => {
//     updateCartItemQuantity(itemId, 1);
//   };

//   const handleDecreaseQuantity = (itemId) => {
//     updateCartItemQuantity(itemId, -1);
//   };

//   const calculateProductPrice = (item) => {
//     return (item.addNumber * item.price);
//   };

//   const calculateTotalPrice = () => {
//     return (
//       cartItems
//         .reduce((total, item) => total + Number(calculateProductPrice(item)), 0)
//         .toFixed(0) * 25000
//     );
//   };
  
//   const handlePayNow = async () => {
//     const partnerCode = "MOMO";
//     const accessKey = "F8BBA842ECF85";
//     const secretKey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
//     const requestId = partnerCode + new Date().getTime().toString();
//     const orderId = requestId;
//     const orderInfo = "MoMoで支払う";
//     const redirectUrl = "https://momo.vn/return";
//     const ipnUrl = "https://callback.url/notify";
//     const amount = calculateTotalPrice().toString();

//     const requestType = "payWithATM";
//     const extraData = "";

//     const rawSignature = `accessKey=${accessKey}&amount=${amount}&extraData=${extraData}&ipnUrl=${ipnUrl}&orderId=${orderId}&orderInfo=${orderInfo}&partnerCode=${partnerCode}&redirectUrl=${redirectUrl}&requestId=${requestId}&requestType=${requestType}`;

//     const signature = CryptoJS.HmacSHA256(rawSignature, secretKey).toString(
//       CryptoJS.enc.Hex
//     );

//     const requestBody = JSON.stringify({
//       partnerCode: partnerCode,
//       accessKey: accessKey,
//       requestId: requestId,
//       amount: amount,
//       orderId: orderId,
//       orderInfo: orderInfo,
//       redirectUrl: redirectUrl,
//       ipnUrl: ipnUrl,
//       extraData: extraData,
//       requestType: requestType,
//       signature: signature,
//       lang: "en",
//     });

//     try {
//       const response = await fetch(
//         "https://test-payment.momo.vn/v2/gateway/api/create",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: requestBody,
//         }
//       );

//       const jsonResponse = await response.json();

//       if (jsonResponse && jsonResponse.payUrl) {
//         Linking.openURL(jsonResponse.payUrl).catch((err) => {
//           console.error("URLを開こうとしてエラーが発生しました", err);
//           Alert.alert("エラー", "支払いURLを開けませんでした。");
//         });
//       } else {
//         console.error("無効なサーバー応答", jsonResponse);
//         Alert.alert("支払いエラー", "支払いURLが受信されませんでした。");
//       }
//       clearCart();
//     } catch (error) {
//       console.error("リクエストの送信中にエラーが発生しました", error);
//       Alert.alert("支払いエラー", "支払いURLが受信されませんでした");
//     }
//   };
//   return (
//     <View style={updatedStyles.container}>
//       <Text style={updatedStyles.heading}>ショッピングカート</Text>
//       {cartItems.length === 0 ? (
//         <Text style={updatedStyles.emptyCartText}>カートは空です</Text>
//       ) : (
//         <FlatList
//           data={cartItems}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <View style={updatedStyles.cartItem}>
//               <Image source={{ uri: item.image }} style={updatedStyles.productImage} />
//               <View style={updatedStyles.productDetails}>
//                 <Text style={updatedStyles.productTitle}>{item.title}</Text>
//                 <Text style={updatedStyles.productPrice}>${item.price.toFixed(2)}</Text>
//                 <View style={updatedStyles.quantityContainer}>
//                   <TouchableOpacity onPress={() => handleDecreaseQuantity(item.id)}>
//                     <Text style={updatedStyles.quantityButton}>-</Text>
//                   </TouchableOpacity>
//                   <Text style={updatedStyles.quantityText}>{item.addNumber}</Text>
//                   <TouchableOpacity onPress={() => handleIncreaseQuantity(item.id)}>
//                     <Text style={updatedStyles.quantityButton}>+</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//               <TouchableOpacity onPress={() => removeFromCart(item.id)}>
//                 <Text style={updatedStyles.removeButton}>X</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         />
//       )}
//       {cartItems.length > 0 && (
//         <View style={updatedStyles.checkoutContainer}>
//           <Text style={updatedStyles.totalText}>合計：{calculateTotalPrice().toFixed(2)}VND</Text>
//           <TouchableOpacity style={updatedStyles.checkoutButton} onPress={handlePayNow}>
//             <Text style={updatedStyles.checkoutButtonText}>MoMoで支払う</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// const updatedStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f5f5f5',
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 20,
//   },
//   emptyCartText: {
//     fontSize: 18,
//     textAlign: 'center',
//     color: '#666',
//   },
//   cartItem: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     marginBottom: 10,
//     borderRadius: 8,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   productImage: {
//     width: 80,
//     height: 80,
//   },
//   productDetails: {
//     flex: 1,
//     padding: 10,
//   },
//   productTitle: {
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   productPrice: {
//     color: '#333',
//     fontSize: 14,
//     marginBottom: 10,
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   quantityButton: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 5,
//     borderRadius: 5,
//     fontSize: 16,
//     width: 30,
//     textAlign: 'center',
//   },
//   quantityText: {
//     marginHorizontal: 10,
//     fontSize: 16,
//   },
//   removeButton: {
//     padding: 10,
//     color: '#ff6347',
//     fontWeight: 'bold',
//   },
//   checkoutContainer: {
//     borderTopWidth: 1,
//     borderColor: '#ccc',
//     padding: 15,
//   },
//   totalText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   checkoutButton: {
//     backgroundColor: '#56CCF2',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   checkoutButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '500',
//   },
// });

// export default Cart;



import axios from 'axios';
import CryptoJS from 'crypto-js';
import { Linking } from 'react-native';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useCart } from './CartContext';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
  } = useCart();

  const handleIncreaseQuantity = (itemId) => {
    updateCartItemQuantity(itemId, 1);
  };

  const handleDecreaseQuantity = (itemId) => {
    updateCartItemQuantity(itemId, -1);
  };

  const calculateProductPrice = (item) => {
    return (item.addNumber * item.price);
  };

  const calculateTotalPrice = () => {
    return (
      cartItems
        .reduce((total, item) => total + Number(calculateProductPrice(item)), 0)
        .toFixed(0) * 25000
    );
  };

  const handleClearCart = () => {
    clearCart();
  };

    const handlePayNow = async () => {
    const partnerCode = "MOMO";
    const accessKey = "F8BBA842ECF85";
    const secretKey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
    const requestId = partnerCode + new Date().getTime().toString();
    const orderId = requestId;
    const orderInfo = "cc";
    const redirectUrl = "https://momo.vn/return";
    const ipnUrl = "https://callback.url/notify";
    const amount = calculateTotalPrice().toString();

    const requestType = "payWithATM";
    const extraData = "";

    const rawSignature = `accessKey=${accessKey}&amount=${amount}&extraData=${extraData}&ipnUrl=${ipnUrl}&orderId=${orderId}&orderInfo=${orderInfo}&partnerCode=${partnerCode}&redirectUrl=${redirectUrl}&requestId=${requestId}&requestType=${requestType}`;

    const signature = CryptoJS.HmacSHA256(rawSignature, secretKey).toString(
      CryptoJS.enc.Hex
    );

    const requestBody = JSON.stringify({
      partnerCode: partnerCode,
      accessKey: accessKey,
      requestId: requestId,
      amount: amount,
      orderId: orderId,
      orderInfo: orderInfo,
      redirectUrl: redirectUrl,
      ipnUrl: ipnUrl,
      extraData: extraData,
      requestType: requestType,
      signature: signature,
      lang: "en",
    });

    try {
      const response = await fetch(
        "https://test-payment.momo.vn/v2/gateway/api/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: requestBody,
        }
      );

      const jsonResponse = await response.json();

      if (jsonResponse && jsonResponse.payUrl) {
        Linking.openURL(jsonResponse.payUrl).catch((err) => {
          console.error("URLを開こうとしてエラーが発生しました", err);
          Alert.alert("エラー", "支払いURLを開けませんでした。");
        });
      } else {
        console.error("無効なサーバー応答", jsonResponse);
        Alert.alert("支払いエラー", "支払いURLが受信されませんでした。");
      }
      clearCart();
    } catch (error) {
      console.error("リクエストの送信中にエラーが発生しました", error);
      Alert.alert("支払いエラー", "支払いURLが受信されませんでした");
    }
  };

  return (
    <View style={updatedStyles.container}>
      <Text style={updatedStyles.heading}>ショッピングカート</Text>
      {cartItems.length === 0 ? (
        <Text style={updatedStyles.emptyCartText}>カートは空です</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={updatedStyles.cartItem}>
              <Image source={{ uri: item.image }} style={updatedStyles.productImage} />
              <View style={updatedStyles.productDetails}>
                <Text style={updatedStyles.productTitle}>{item.title}</Text>
                <Text style={updatedStyles.productPrice}>${item.price.toFixed(2)}</Text>
                <View style={updatedStyles.quantityContainer}>
                  <TouchableOpacity onPress={() => handleDecreaseQuantity(item.id)}>
                    <Text style={updatedStyles.quantityButton}>-</Text>
                  </TouchableOpacity>
                  <Text style={updatedStyles.quantityText}>{item.addNumber}</Text>
                  <TouchableOpacity onPress={() => handleIncreaseQuantity(item.id)}>
                    <Text style={updatedStyles.quantityButton}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                <Text style={updatedStyles.removeButton}>X</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
      {cartItems.length > 0 && (
        <View style={updatedStyles.checkoutContainer}>
          <Text style={updatedStyles.totalText}>合計：{calculateTotalPrice().toFixed(2)}VND</Text>
          <TouchableOpacity style={updatedStyles.checkoutButton} onPress={handlePayNow}>
            <Text style={updatedStyles.checkoutButtonText}>MoMoで支払う</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={updatedStyles.clearCartButton}
            onPress={handleClearCart}
          >
            <Text style={updatedStyles.clearCartButtonText}>カートを空にする</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const updatedStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  emptyCartText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
  },
  productDetails: {
    flex: 1,
    padding: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  productPrice: {
    color: '#333',
    fontSize: 14,
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
    fontSize: 16,
    width: 30,
    textAlign: 'center',
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  removeButton: {
    padding: 10,
    color: '#ff6347',
    fontWeight: 'bold',
  },
  checkoutContainer: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    padding: 15,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: '#56CCF2',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  clearCartButton: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  clearCartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Cart;
