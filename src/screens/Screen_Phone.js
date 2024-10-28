import { useEffect, useState } from "react";
import { Text, View, Image, Button, StyleSheet, ScrollView } from "react-native";

const Screen_Phone = ({ navigation, route }) => {
  const [imageSource, setImageSource] = useState(require("../img/vs_blue.png"));
  const [color, setColor] = useState('vs_blue');

  useEffect(() => {
    switch (color) {
      case 'vs_blue':
        setImageSource(require("../img/vs_blue.png"));
        break;
      case 'vs_red':
        setImageSource(require("../img/vs_red.png"));
        break;
      case 'vs_silver':
        setImageSource(require("../img/vs_silver.png"));
        break;
      case 'vs_black':
        setImageSource(require("../img/vs_black.png"));
        break;
    }
  }, [color]);

  const handleSubmit = () => {
    navigation.navigate({
      name: 'PhoneDetail',
      params: { color },
      merge: true,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Image
          source={imageSource}
          style={{ width: 100, height: 150, resizeMode: 'contain' }}
        />
        <View style={{ marginTop: 10 }}>
          <Text>Điện Thoại Vsmart Joy 3</Text>
          <Text>Hàng chính hãng</Text>
        </View>
      </View>

      <View style={styles.choose_color}>
        <Text>Chọn một màu bên dưới: </Text>
        <View style={{ alignItems: 'center', gap: 10, paddingVertical: 10 }}>
          <Text style={[styles.block_color, { backgroundColor: 'silver' }]} onPress={() => setColor('vs_silver')}></Text>
          <Text style={[styles.block_color, { backgroundColor: 'black' }]} onPress={() => setColor('vs_black')}></Text>
          <Text style={[styles.block_color, { backgroundColor: 'red' }]} onPress={() => setColor('vs_red')}></Text>
          <Text style={[styles.block_color, { backgroundColor: 'blue' }]} onPress={() => setColor('vs_blue')}></Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="XONG" onPress={handleSubmit} color="red" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1, 
    justifyContent: 'space-between',
  },
  choose_color: {
    marginVertical: 20,
  },
  block_color: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  buttonContainer: {
    alignSelf: 'center',
    width: 200,
    marginTop: 20,
  },
});

export default Screen_Phone;
