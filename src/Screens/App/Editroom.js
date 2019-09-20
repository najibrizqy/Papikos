import React, {Component} from 'react';
import {
  Container,
  Button,
  Content,
  Text,
  Form,
  Item,
  Icon,
  Input,
  Label,
  Picker,
} from 'native-base';
import {StyleSheet, View, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
export default class Editroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        price: '',
        area: '',
        type: '',
        description: '',
        photos: '',
      },
      showToast: false,
      isLoading: false,
    };
  }
  handleChange = (name, value) => {
    let newFormData = {...this.state.formData};
    newFormData[name] = value;
    this.setState({
      formData: newFormData,
    });
  };
  onTypeChange(value) {
    let newFormData = {...this.state.formData};
    newFormData.type = value;
    this.setState({
      formData: newFormData,
    });
  }
  handleChoosePhoto() {
    ImagePicker.openPicker({
      multiple: true,
    }).then(images => {
      let newFormData = {...this.state.formData};
      newFormData.photos = images;
      this.setState({formData: newFormData});
    });
  }
  render() {
    const {isLoading, formData} = this.state;
    let image = formData.photos;
    return (
      <Container>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Name</Label>
              <Input
                placeholder="maliki"
                onChangeText={text => this.handleChange('name', text)}
              />
            </Item>
            <Item stackedLabel>
              <Label>Price</Label>
              <Input onChangeText={text => this.handleChange('price', text)} />
            </Item>
            <Item stackedLabel>
              <Label>Type</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{
                  width: 353,
                  height: 30,
                  alignSelf: 'center',
                  paddingHorizontal: 20,
                }}
                selectedValue={formData.type}
                onValueChange={this.onTypeChange.bind(this)}>
                <Picker.Item label="Reguler" value="1" />
                <Picker.Item label="VIP" value="2" />
                <Picker.Item label="VVIP" value="3" />
                <Picker.Item label="Premium" value="4" />
              </Picker>
            </Item>
            <Item stackedLabel>
              <Label>Area</Label>
              <Input onChangeText={text => this.handleChange('area', text)} />
            </Item>
            <Item stackedLabel last>
              <Label>Description</Label>
              <Input
                onChangeText={text => this.handleChange('description', text)}
              />
            </Item>
          </Form>
          <View>
            <Button
              style={styles.choosebutton}
              title="Choose Photos"
              onPress={() => this.handleChoosePhoto()}>
              <Text style={styles.buttonText2}>Choose Photos</Text>
            </Button>
            <View style={styles.listimage}>
              {formData.photos ? (
                image.map((item, index) => {
                  return (
                    <Image
                      key={index}
                      source={{uri: item.path}}
                      style={styles.photo}
                    />
                  );
                })
              ) : (
                <View></View>
              )}
            </View>
          </View>
          <Button style={styles.button}>
            <Text style={styles.text}>Save changes</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    width: 180,
    alignSelf: 'center',
    marginTop: 0,
    justifyContent: 'center',
    backgroundColor: '#1C8CD1',
  },
  text: {
    fontSize: 17,
  },
  buttonText2: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  photo: {
    width: 138,
    height: 138,
    marginBottom: 10,
  },
  listimage: {
    paddingHorizontal: 32,
    marginBottom: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  choosebutton: {
    paddingVertical: 10,
    width: 220,
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: '#1AB0D3',
    justifyContent: 'center',
  },
});
