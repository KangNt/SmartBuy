import * as React from 'react';
import { Text, View, StyleSheet, Button, Dimensions, Image } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window')
const qrSize = width * 0.7

export class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission, scanned } = this.state;

    // if (hasCameraPermission === null) {
    //   return <Text>Requesting for camera permission</Text>;
    // }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          // backgroundColor:'red',
          flexDirection: 'column',
          justifyContent: 'center',
          // alignItems:'center'
        }}>
        <BarCodeScanner style={[StyleSheet.absoluteFill, styles.container]}
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}>
          <Text style={styles.description}>Scan your QR code</Text>
          {/* <Image
            style={styles.qr}
            source={require('./images/white-scan.png')}
          /> */}
          <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
          <Text
            style={styles.cancel} 
             >
            Cancel
        </Text>
        </TouchableOpacity>
          
        </BarCodeScanner>

        {scanned && (
          <Button
            title={'Tap to Scan Again'}
            onPress={() => this.setState({ scanned: false })}
          />
        )}
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    // alert(data)
    this.props.navigation.navigate('showscan', { idProduct: data })
  };
}

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: 'center',
    marginTop: '20%',
    marginBottom: '20%',
  },
  // qr: {
  //   marginTop: '20%',
  //   marginBottom: '30%',
  //   width: qrSize,
  //   height: qrSize,
  //   color:"white"
  // },
  description: {
    fontSize: width * 0.09,
    fontSize: 20,
    marginTop: '10%',
    textAlign: 'center',
    width: '100%',
    color:"white"
   
  },
  cancel: {
    fontSize: width * 0.05,
    textAlign: 'center',
    width: '100%',
    color: 'red',
    marginTop: 320
  },
})