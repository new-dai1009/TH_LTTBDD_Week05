import React, { useEffect, useState } from "react";
import { Text, View, Image, Button, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Screen_PhoneDetail = ({ route, navigation }) => {
  const { color } = route.params;
  
  const [imageSource, setImageSource] = useState(null);
  const [colorName, setColorName] = useState('');

  // Cài đặt màu sắc và ảnh dựa vào lựa chọn của người dùng
  useEffect(() => {
    switch (color) {
      case 'vs_blue':
        setImageSource(require("../img/vs_blue.png"));
        setColorName('Màu Xanh');
        break;
      case 'vs_red':
        setImageSource(require("../img/vs_red.png"));
        setColorName('Màu Đỏ');
        break;
      case 'vs_silver':
        setImageSource(require("../img/vs_silver.png"));
        setColorName('Màu Bạc');
        break;
      case 'vs_black':
        setImageSource(require("../img/vs_black.png"));
        setColorName('Màu Đen');
        break;
      default:
        setImageSource(require("../img/vs_blue.png"));
        setColorName('Màu Xanh');
    }
  }, [color]);

  // Xử lý khi nhấn nút "Chọn Mua"
  const handlePurchase = () => {
    alert("Bạn đã chọn mua sản phẩm!");
  };

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Điện Thoại Vsmart Joy 3</Text>
        <Text style={styles.colorText}>Màu: {colorName}</Text>
        <Text style={styles.supplierText}>Nhà cung cấp: Vsmart</Text>

        {/* Thêm đánh giá sao */}
        <View style={styles.ratingContainer}>
          {[...Array(5)].map((_, index) => (
            <Ionicons
              key={index}
              name="star"
              size={20}
              color={index < 4 ? '#FFD700' : '#C0C0C0'} // 4 sao vàng, 1 sao xám
            />
          ))}
          <Text style={styles.ratingText}>(4.0)</Text>
        </View>

        {/* Giá và giá giảm */}
        <View style={styles.priceContainer}>
          <Text style={styles.oldPriceText}>4.290.000₫</Text>
          <Text style={styles.priceText}>3.290.000₫</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Chọn Mua" color="red" onPress={handlePurchase} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  detailsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  colorText: {
    fontSize: 18,
    marginBottom: 5,
  },
  supplierText: {
    fontSize: 18,
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  ratingText: {
    fontSize: 16,
    marginLeft: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  oldPriceText: {
    fontSize: 18,
    color: 'gray',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  priceText: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
    borderRadius: 20,
  },
});

export default Screen_PhoneDetail;
